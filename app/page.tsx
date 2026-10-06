import Image from "next/image";
import Nav from "@/components/Nav";
import { DownloadIcon, ExternalIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import {
  education,
  experience,
  languages,
  military,
  profile,
  projects,
  skills,
} from "@/data/resume";

function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <h2 className="section-title">
      <span className="section-index">{index}</span>
      {title}
    </h2>
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <Nav />
      <main id="top">
        <section className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-photo">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={1066}
                height={1600}
                sizes="(max-width: 860px) 220px, 360px"
                priority
              />
            </div>
            <div className="hero-text">
              <p className="eyebrow">Hi, my name is</p>
              <h1 className="hero-name">{profile.name}.</h1>
              <h2 className="hero-title">
                <span className="gradient-text">{profile.title}</span>
              </h2>
              <p className="hero-tagline">{profile.tagline}</p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#contact">
                  Get in touch
                </a>
                <a className="btn btn-ghost" href={profile.resume} download>
                  <DownloadIcon /> Resume
                </a>
              </div>
              <div className="socials">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitHubIcon size={22} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon size={22} />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <MailIcon size={22} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionTitle index="01" title="About me" />
            <div className="about-grid">
              <div className="about-text">
                {profile.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <ul className="stats">
                <li>
                  <strong>2+</strong>
                  <span>years in backend engineering</span>
                </li>
                <li>
                  <strong>3</strong>
                  <span>cloud platforms in production</span>
                </li>
                <li>
                  <strong>15</strong>
                  <span>e-commerce stores built and scaled</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <SectionTitle index="02" title="Experience" />
            <ol className="timeline">
              {experience.map((job) => (
                <li key={job.company + job.role} className="timeline-item">
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="card">
                    <div className="job-header">
                      <h3>
                        {job.role} <span className="accent">@ </span>
                        {job.link ? (
                          <a href={job.link} target="_blank" rel="noreferrer" className="accent-link">
                            {job.company}
                          </a>
                        ) : (
                          <span className="accent">{job.company}</span>
                        )}
                      </h3>
                      <span className="period">{job.period}</span>
                    </div>
                    {job.description && <p className="muted">{job.description}</p>}
                    <ul className="bullets">
                      {job.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                    {job.tech && (
                      <ul className="tags">
                        {job.tech.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionTitle index="03" title="Projects" />
            {featured.map((p) => (
              <article key={p.name} className="card featured">
                <div className="featured-header">
                  <div>
                    <p className="eyebrow small">Featured project</p>
                    <h3 className="featured-name">{p.name}</h3>
                    <p className="muted">{p.subtitle}</p>
                  </div>
                  {p.link && (
                    <a className="btn btn-ghost" href={p.link} target="_blank" rel="noreferrer">
                      Visit site <ExternalIcon />
                    </a>
                  )}
                </div>
                <p>{p.description}</p>
                <ul className="bullets">
                  {p.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
                <ul className="tags">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
            <div className="project-grid">
              {others.map((p) => (
                <article key={p.name} className="card project-card">
                  <p className="muted small">{p.subtitle}</p>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <ul className="tags">
                    {p.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <SectionTitle index="04" title="Skills" />
            <div className="skills-grid">
              {skills.map((s) => (
                <div key={s.category} className="card">
                  <h3 className="skill-cat">{s.category}</h3>
                  <ul className="tags">
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <SectionTitle index="05" title="Education & Service" />
            <div className="edu-grid">
              <div className="card">
                <p className="muted small">{education.period}</p>
                <h3>{education.degree}</h3>
                <p className="accent">{education.school}</p>
                <ul className="bullets">
                  {education.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <p className="muted small">{military.period}</p>
                <h3>{military.role}</h3>
                <p className="accent">{military.unit}</p>
                <p>{military.description}</p>
                <h4 className="sub-heading">Languages</h4>
                <ul className="tags">
                  {languages.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container narrow">
            <p className="eyebrow">06. What&apos;s next?</p>
            <h2 className="contact-title">Get in touch</h2>
            <p className="muted">
              I&apos;m always open to new opportunities and interesting conversations. Whether you have a role in
              mind, a question or just want to say hi, my inbox is open.
            </p>
            <a className="btn btn-primary btn-lg" href={`mailto:${profile.email}`}>
              <MailIcon /> {profile.email}
            </a>
            <div className="socials center">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitHubIcon size={22} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedInIcon size={22} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </div>
      </footer>
    </>
  );
}
