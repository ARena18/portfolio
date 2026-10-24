import './Projects.css'

const PROJECTS = [
  {
    tag: 'Machine Learning',
    tone: 'lavender',
    title: 'Patient Analysis',
    description:
      'Framed a clinical analysis problem end to end, from linear regression through a clustering model, then measured how clustering affected downstream regression performance.',
    stack: ['Python', 'scikit-learn', 'EDA'],
  },
  {
    tag: 'Big Data · AWS',
    tone: 'mint',
    title: 'Document Search',
    description:
      'Processed a Shakespeare text corpus with Hadoop on Amazon EMR, built a TF-IDF table in HiveQL over S3, then shipped a small search UI with CloudShell and Lambda.',
    stack: ['Hadoop', 'AWS EMR', 'S3', 'HiveQL', 'Lambda'],
  },
  {
    tag: 'Web Development',
    tone: 'blue',
    title: 'Book Review',
    description:
      'Built two REST services, one consuming and extending the other, backed by a MySQL database, with authentication and authorization handled through Auth0.',
    stack: ['REST', 'MySQL', 'Auth0'],
  },
  {
    tag: 'Game / Graphics',
    tone: 'lavender',
    title: 'Mazescape',
    description:
      'A maze game that simulates an escape room through a sequence of connected puzzles, written from scratch in C++.',
    stack: ['C++'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Projects</p>
          <h2>A few things I've built.</h2>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <article key={p.title} className={`project-card project-card--${p.tone}`}>
              <span className="project-card__tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="project-card__stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
