import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="section-head">
          <p className="eyebrow">About</p>
          <h2>From lab data to production code.</h2>
        </div>

        <div className="about__body">
          <p>
            I'm currently finishing an M.S. in Computer Science at Seattle
            University, specializing in Data Science, after completing my B.S.
            in the same department summa cum laude. Most of my work sits at
            the intersection of two things I enjoy: building software people
            actually use, and making sense of the data underneath it.
          </p>
          <p>
            That's shown up as grading distributed data-processing pipelines
            on AWS, building a React front end for an AI-news research
            initiative, and co-leading a research team that shipped a public
            epidemiology simulation used to teach students about vaccination
            and herd immunity, work that was later published in the{' '}
            <em>Journal of Biology and Microbiology Education</em>.
          </p>
          <p>
            Outside of coursework and research, I tutor intro CS students and
            grade object-oriented programming assignments, which keeps me
            close to the fundamentals even while I work on more applied
            machine learning and systems projects.
          </p>

          <div className="about__callout">
            <span className="about__callout-label">Published research</span>
            <p>
              Co-author, <em>Brake the Outbreak</em> — a free online
              simulation helping students learn epidemiological concepts like
              R, herd immunity, and social distancing.
            </p>
            <a
              href="https://journals.asm.org/doi/10.1128/jmbe.00062-25"
              target="_blank"
              rel="noreferrer"
              className="about__callout-link"
            >
              Read the paper →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
