// Signature visual: a soft node-link graph in cold pastel tones,
// echoing Rena's work across data, ML, web, and systems.
// Pure SVG + CSS animation, no external chart library.

const NODES = [
  { id: 'ml', label: 'Machine Learning', x: 180, y: 70, r: 30, color: 'var(--accent-lavender)' },
  { id: 'data', label: 'Data Systems', x: 70, y: 190, r: 26, color: 'var(--accent-mint)' },
  { id: 'web', label: 'Web Dev', x: 310, y: 190, r: 34, color: 'var(--accent-blue)' },
  { id: 'cloud', label: 'Cloud / AWS', x: 175, y: 300, r: 22, color: 'var(--accent-mint)' },
  { id: 'research', label: 'Research', x: 300, y: 320, r: 18, color: 'var(--accent-lavender)' },
]

const EDGES = [
  ['ml', 'data'],
  ['ml', 'web'],
  ['data', 'cloud'],
  ['web', 'cloud'],
  ['web', 'research'],
  ['ml', 'cloud'],
]

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]))

export default function NetworkGraph() {
  return (
    <svg
      className="graph"
      viewBox="-10 0 380 380"
      role="img"
      aria-label="Illustrative diagram connecting Rena's focus areas: machine learning, data systems, web development, cloud, and research"
    >
      <defs>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {EDGES.map(([a, b], i) => {
        const n1 = byId[a]
        const n2 = byId[b]
        return (
          <line
            key={`${a}-${b}`}
            className="graph__edge"
            x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y}
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        )
      })}

      {NODES.map((n, i) => (
        <g key={n.id} className="graph__node" style={{ animationDelay: `${i * 0.5}s` }}>
          <circle cx={n.x} cy={n.y} r={n.r} fill={n.color} opacity="0.85" filter="url(#softGlow)" />
          <circle cx={n.x} cy={n.y} r={n.r} fill="none" stroke="var(--white)" strokeWidth="1.5" opacity="0.6" />
        </g>
      ))}

      {NODES.map((n) => (
        <text
          key={`${n.id}-label`}
          x={n.x}
          y={n.y + n.r + 18}
          textAnchor="middle"
          className="graph__label"
        >
          {n.label}
        </text>
      ))}
    </svg>
  )
}
