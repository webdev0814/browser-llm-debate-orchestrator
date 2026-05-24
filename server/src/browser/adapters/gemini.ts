import { Page } from 'playwright'
import { SiteAdapter, waitFor } from './base.js'
import { htmlToMarkdown } from '../markdown.js'

const SEL = {
  newChatButton: 'a[href*="/app"], button[aria-label*="New chat" i], button:has-text("New chat")',
  inputBox: 'div[contenteditable="true"][aria-label], textarea',
  sendButton: 'button[aria-label*="Send" i], button:has-text("Send")',
  assistantMessage: 'model-response, [data-response-id], .model-response-text',
}

export class GeminiAdapter implements SiteAdapter {
  readonly name = 'gemini'
  private page!: Page

  setPage(page: Page) {
    this.page = page
  }

  async ensureReady(): Promise<void> {
    const url = this.page.url()
    if (!url.startsWith('https://gemini.google.com')) {
      await this.page.goto('https://gemini.google.com/app', { waitUntil: 'domcontentloaded' })
    }
    await this.page.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => {})
  }

  async newConversation(): Promise<void> {
    await this.ensureReady()
    try {
      const btn = this.page.locator(SEL.newChatButton).first()
      await btn.waitFor({ timeout: 5000 })
      await btn.click()
      await waitFor(800)
    } catch {
      await this.page.goto('https://gemini.google.com/app', { waitUntil: 'domcontentloaded' })
      await waitFor(800)
    }
    await this.page.locator(SEL.inputBox).first().waitFor({ timeout: 10_000 }).catch(() => {})
  }

  async sendMessage(text: string): Promise<void> {
    const input = this.page.locator(SEL.inputBox).first()
    await input.waitFor({ timeout: 10_000 })
    await input.fill(text).catch(async () => {
      await input.click()
      await this.page.keyboard.insertText(text)
    })
    await waitFor(300)
    const sendBtn = this.page.locator(SEL.sendButton).first()
    await sendBtn.waitFor({ timeout: 5000 })
    await sendBtn.click()
  }

  async hasAssistantMessage(): Promise<boolean> {
    return this.page.evaluate((selector) =>
      document.querySelectorAll(selector).length > 0
    , SEL.assistantMessage).catch(() => false)
  }

  async readLastAssistantMessage(): Promise<string> {
    const html = await this.page.evaluate((selector) => {
      const msgs = document.querySelectorAll(selector)
      const last = msgs[msgs.length - 1] as HTMLElement | undefined
      return last?.outerHTML ?? ''
    }, SEL.assistantMessage)
    return htmlToMarkdown(html)
  }

  async streamResponse(onDelta: (chunk: string) => void): Promise<string> {
    const HARD_TIMEOUT = Date.now() + 5 * 60 * 1000
    const getHtml = (): Promise<string> => this.page.evaluate((selector) => {
      const msgs = document.querySelectorAll(selector)
      const last = msgs[msgs.length - 1] as HTMLElement | undefined
      return last?.outerHTML ?? ''
    }, SEL.assistantMessage)
    const getText = async () => htmlToMarkdown(await getHtml())

    let lastText = ''
    let stableRounds = 0
    while (Date.now() < HARD_TIMEOUT) {
      const current = await getText()
      if (current !== lastText) {
        const delta = current.slice(lastText.length)
        if (delta) onDelta(delta)
        lastText = current
        stableRounds = 0
      } else if (current.trim()) {
        stableRounds += 1
      }

      if (stableRounds >= 4) return lastText
      await waitFor(750)
    }
    return lastText
  }
}
