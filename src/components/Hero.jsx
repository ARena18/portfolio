import NetworkGraph from './NetworkGraph'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Computer Science · Data Science</p>
          <h1>
            Building software that turns
            <br />
            <span className="hero__highlight">raw data into clear decisions.</span>
          </h1>
          <p className="hero__sub">
            I'm Rena Ahn, a Seattle-based engineer finishing an M.S. in Computer
            Science with a specialization in Data Science. I build full-stack
            web applications and machine learning systems, and I like the
            unglamorous work of getting data pipelines right.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">View projects</a>
            <a className="btn btn--ghost" href="#contact">Get in touch</a>
          </div>
          <div className="hero__meta">
            <span>Seattle, WA</span>
            <span className="hero__meta-dot" />
            <span>Open to new grad SWE / DS roles</span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="false">
          <NetworkGraph />
        </div>
      </div>
    </section>
  )
}
