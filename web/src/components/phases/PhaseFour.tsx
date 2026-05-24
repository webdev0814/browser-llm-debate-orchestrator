import type { ModelName } from '../../lib/models.ts'
import type { ModelStream } from '../../hooks/useDebateSocket.ts'
import PhaseHeader from './PhaseHeader.tsx'
import ThreeColumns from './ThreeColumns.tsx'

export default function PhaseFourView(props: {
  panels: Partial<Record<ModelName, ModelStream | null>>
  participants: ModelName[]
  isActivePhase: boolean
  isAborted: boolean
  onRefetch?: (model: ModelName) => void
}) {
  return (
    <section className="fade-up">
      <PhaseHeader phase={4} isActive={props.isActivePhase} isAborted={props.isAborted} />
      <ThreeColumns
        panels={props.panels}
        participants={props.participants}
        isActivePhase={props.isActivePhase}
        onRefetch={props.onRefetch}
      />
    </section>
  )
}
