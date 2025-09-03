export default function Skills() {
  return (
    <section className="skills">
      <h2>Skills & Experties</h2>
      <div className="skillTab flex gap-1">
        <h3>Frontend:</h3>
        <ul className="flex">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.js</li>
          <li>Next.js</li>
        </ul>
      </div>
      <div className="skillTab flex">
        <h3>Backend:</h3>
        <ul className="flex">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Golang</li>
        </ul>
      </div>
      <div className="skillTab flex">
        <h3>Databases:</h3>
        <ul className="flex">
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>Redis</li>
        </ul>
      </div>
      <div className="skillTab flex">
        <h3>Cloud & DevOps:</h3>
        <ul className="flex">
          <li>AWS</li>
          <li>Docker</li>
        </ul>
      </div>
      <div className="skillTab flex">
        <h3>Other:</h3>
        <ul className="flex">
          <li>Dart</li>
          <li>Git & Github</li>
        </ul>
      </div>
    </section>
  );
}
