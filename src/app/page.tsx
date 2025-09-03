"use client";
import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    title: "Harshit Kumar Portfolio | Next.js",
    description: "My Portfolio website built in Next.js",
    github: "https://github.com/harshitclub/harshitkumar",
    live: "https://www.harshitclub.com",
    category: "frontend",
  },
  {
    title: "Mish Bioservices | Next.js",
    description:
      "Business website built in Next.js with a beautiful, responsive, and optimized UI.",
    github: "https://github.com/harshitclub/mishvbioservices",
    live: "https://mishvbioservices.com",
    category: "fullstack",
  },
  {
    title: "Campus Sutras Website | Next.js & Node.js",
    description:
      "Campus Sutras company website with features like online assessments with solid backend.",
    github: "",
    live: "https://www.campussutras.com",
    category: "fullstack",
  },
  {
    title: "3a Learning Solutions Website | Next.js",
    description:
      "3a Learning Solutions Website built in Next.js with optimized and responsive UI.",
    github: "",
    live: "https://www.3alearningsolutions.com",
  },
  {
    title: "LMS Server | Node.js",
    description:
      "Production-level LMS backend system with JWT, bcrypt, Redis caching, and AWS deployment.",
    github: "https://github.com/harshitclub/node-lms-server",
    live: "",
    category: "backend",
  },
  {
    title: "LMS Frontend | React.js",
    description:
      "LMS UI in React.js with ShadCN UI library, features included like dashboards, forms, and list pages.",
    github: "https://github.com/harshitclub/react-lms-ui",
    live: "",
    category: "frontend",
  },
];

export default function Home() {
  const [filter, setFilter] = useState("all");
  const currentYear = new Date().getFullYear();

  const haptic = () => navigator.vibrate([13]);

  const categories = [
    "all",
    "frontend",
    "backend",
    "fullstack",
    "mobile",
    "golang",
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <main className="font-cascadia px-3 sm:px-6 py-10 max-w-3xl mx-auto text-gray-900">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Harshit Kumar</h1>
        <p className="text-xl mt-1">Full Stack Developer</p>

        {/* Download Resume Button */}
        <div className="mt-4" onClick={haptic}>
          <a
            href="/Harshit_Kumar_Resume.pdf"
            download
            className="inline-block border border-gray-700 px-4 py-2 text-sm rounded hover:bg-gray-900 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </header>

      {/* About */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="leading-relaxed text-justify">
          I am a versatile Full Stack Developer with years of experience
          designing and building highly scalable web and mobile applications. I
          specialize in crafting seamless frontend experiences using React.js
          and Next.js, while architecting optimized backend systems with
          Node.js, Golang, and microservices. My expertise includes building
          event-driven architectures, scalable REST APIs, and real-time
          applications with PostgreSQL, MongoDB, Redis, and BullMQ.
          Additionally, I develop cross-platform mobile apps using Flutter and
          deploy production-ready solutions on AWS, leveraging Docker, S3, and
          CloudFront. Passionate about solving complex problems, I take full
          ownership of projects, delivering end-to-end solutions from design to
          deployment while ensuring maintainability, performance, and
          scalability.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Skills & Expertise</h2>
        <div className="space-y-2 text-sm leading-relaxed">
          <p>
            <span className="font-semibold">Programming Languages:</span>{" "}
            JavaScript, TypeScript, Python, Dart
          </p>
          <p>
            <span className="font-semibold">Frontend Development:</span> HTML5,
            CSS3, React.js, Next.js
          </p>
          <p>
            <span className="font-semibold">Backend Development:</span> Node.js,
            Express.js, Golang
          </p>
          <p>
            <span className="font-semibold">Databases:</span> MongoDB,
            PostgreSQL, Redis
          </p>
          <p>
            <span className="font-semibold">Cloud & DevOps:</span> AWS, Docker
          </p>
          <p>
            <span className="font-semibold">Application Development:</span>{" "}
            Flutter
          </p>
          <p>
            <span className="font-semibold">Tools & Platforms:</span> VS Code,
            Git & GitHub
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <div className="space-y-2">
          <h3 className="font-semibold">Full Stack Developer</h3>
          <p className="text-sm italic">
            3a Learning Solutions India Pvt. Ltd [May 2022 - Present]
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
            <li>
              Started as a Frontend Developer; built 3+ React.js websites and
              migrated the company’s main website from WordPress to React.js,
              integrating Firebase and implementing technical SEO.
            </li>
            <li>
              Developed additional full stack MERN applications, handling both
              frontend and backend independently.
            </li>
            <li>
              Built scalable backends using Node.js + Express + TypeScript, with
              PostgreSQL (with connection pooling), Redis caching, BullMQ for
              messaging queues, AWS EC2 hosting, S3 storage, and CloudFront for
              APIs.
            </li>
            <li>
              Deployed Node.js backends on multi-threaded environments using PM2
              with clustering, despite Node being single-threaded, ensuring high
              performance and stability.
            </li>
            <li>
              Developed full stack Next.js applications using Next.js as
              frontend and backend (API routes), and successfully deployed them
              on Vercel and AWS.
            </li>
            <li>
              Managed and monitored all websites and web applications regularly,
              ensuring uptime, performance, and maintenance.
            </li>
            <li>
              Worked on LMS development: designed and delivered a mini LMS using
              React frontend and Node.js + Express + TypeScript + PostgreSQL
              backend, successfully deploying backend on AWS and frontend on
              Vercel.
            </li>
            <li>
              Delivered training sessions to college students and interns on web
              development, MERN stack, and best coding practices.
            </li>
            <li>
              Handled all projects independently without a team, taking full
              ownership of development, deployment, and monitoring.
            </li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>

        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold">Bachelor of Technology (B.Tech)</p>
            <p>Information Technology | 2021 - 2024</p>
            <p>J.P. Institute of Engineering & Technology</p>
            <p className="text-gray-600">Affiliated to AKTU</p>
          </div>

          <div>
            <p className="font-semibold">Polytechnic (Diploma)</p>
            <p>Computer Science | 2018 - 2021</p>
            <p>J.P. Institute of Engineering & Technology</p>
            <p className="text-gray-600">Affiliated to BTEUP</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>

        {/* Filter Buttons */}
        <div className="flex gap-3 flex-wrap mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                haptic();
              }}
              className={`px-3 py-1 rounded border text-sm transition ${
                filter === cat
                  ? "bg-gray-900 text-white"
                  : "border-gray-400 hover:bg-gray-100"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <ul className="space-y-3 text-sm">
          {filteredProjects.map((project, idx) => (
            <li key={idx} className="space-y-1">
              <p className="font-semibold">{project.title}</p>
              <p>{project.description}</p>
              <div className="flex gap-3">
                {project.github && (
                  <Link
                    href={project.github}
                    className="underline"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                )}
                {project.live && (
                  <Link
                    href={project.live}
                    className="underline"
                    target="_blank"
                  >
                    Live
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Social & Contact */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Connect</h2>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            href="https://github.com/harshitclub"
            className="underline"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/harshitclub"
            className="underline"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link href="mailto:harshitclub@gmail.com" className="underline">
            Email
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t pt-4 text-sm text-gray-600 text-center">
        <p>Copyright © {currentYear} Harshit Kumar</p>
      </footer>
    </main>
  );
}
