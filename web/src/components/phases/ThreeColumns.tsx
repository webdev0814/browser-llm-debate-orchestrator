import type { ModelName } from '../../lib/models.ts'
import type { ModelStream } from '../../hooks/useDebateSocket.ts'
import ModelPanel from '../ModelPanel.tsx'

// Generic 3-column grid used by Phase II and Phase IV.
// Each ModelPanel inside self-caps height and provides per-column expand.
export default function ThreeColumns({ panels, participants, isActivePhase, onRefetch }: {
  panels: Partial<Record<ModelName, ModelStream | null>>
  participants: ModelName[]
  isActivePhase: boolean
  onRefetch?: (model: ModelName) => void
}) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: 0,
    }}>
      {participants.map(m => (
        <ModelPanel
          key={m}
          model={m}
          stream={panels[m] ?? null}
          isActivePhase={isActivePhase}
          onRefetch={onRefetch ? () => onRefetch(m) : undefined}
        />
      ))}
    </div>
  )
}
