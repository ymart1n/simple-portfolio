import { useState } from "react";

const Divider = () => {
  return <div style={{ borderBottom: "1px solid #e5e5e5" }} />;
};

const Year = ({ children }) => {
  return <h3>{children}</h3>;
};

const Step = ({ title, children, succeed, inProgress }) => {
  return (
    <li>
      <div>
        <h4>
          {inProgress ? "🚧" : succeed ? "✅" : "❌"} {title}
        </h4>
      </div>
      <p>{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Study Abroad 🛫 🌅" succeed>
        <ul>
          <li>First time being away from home for 12,023 km and four years.</li>
        </ul>
      </Step>
      <Step title="Graduate High School 🥳 🎉" succeed />
      <Step title="Learn How to Program 👨🏻‍💻" succeed>
        <ul>
          <li>
            Along with reading the{" "}
            <a
              href="https://ehmatthes.github.io/pcc/"
              rel="noreferrer"
              target="_blank"
            >
              Python Crash Course
            </a>
            , I wrote my first line of code in Python. It may appear to be a bit
            late in comparison to people who begin coding as children. But this
            is the beginning of my story.
          </li>
        </ul>
      </Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="SAT test in Hong Kong ✍🏻" succeed />
      <Step title="IELTS test 🗣️" succeed />
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Graduate Junior High School" succeed>
        <ul>
          <li>Got into the second best high school in Fuzhou, Fujian.</li>
        </ul>
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Lowest Physics Score in School ⚛️ 📉" succeed>
        <ul>
          <li>
            {" "}
            Monthly physics test, I decided not to show off myself that I'm a
            genius man. <br></br>100 marks, I lost 73 marks. TT
          </li>
        </ul>
      </Step>
      <Step title="First Soccer Game with refs ⚽" succeed />
      <Step title="First Basketball Game with refs 🏀" succeed />
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Graduate Junior High School" succeed>
        <ul>
          <li>Got into the second best high school in Fuzhou, Fujian.</li>
        </ul>
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul>
      <Step title="#1 in Class for First In Junior High School" succeed>
        <ul>
          <li>
            {" "}
            Never in my life to be in a class with full of genius but still
            secure #1. I couldn't even believe myself at a time.
          </li>
        </ul>
      </Step>
      <Step title="#1 in Class for Second Time">
        <ul>
          <li>
            Unfortunately to be #1 can only persist for one semester. But I was
            always top 5 in class for the rest of semesters in Junior High
            School ;p.
          </li>
        </ul>
      </Step>
    </ul>
    <Divider />
    <Year>2007</Year>
    <ul>
      <Step title="First Computer" succeed>
        <ul>
          <li>
            One computer to all members in the family. Windows XP with
            interesting software really opened my eyes. Most of them are pirated
            software like Pokemon games, GBA simulator, etc (even the operating
            system itself was pirated XD). I'm very grateful for the amount of
            information I absorbed during the technology boom at my early age.
          </li>
        </ul>
      </Step>
    </ul>
    <Divider />
    <Year>2000</Year>
    <ul>
      <Step title="Born 👶🏼🍼" succeed />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h2>📆 Timeline</h2>
      {/* <p>
        🏗️ 2019 - 2022 Timeline is under construction, coming soon. <br></br>
        👷🏻 Click 'Load More' button to see timeline before 2019.
      </p> */}
      <Year>2022</Year>
      <ul>
        <Step title="Start new journey at UBC 🏖️" inProgress />
        <Step title="Graduate from UofT 🎓 🎉" succeed />
        <Step title="First contribution to open-source 📖" succeed>
          <ul>
            <li>
              Opened my first issue on GitHub and Created a{" "}
              <a
                href="https://github.com/mattcone/markdown-guide/pull/98"
                rel="noreferrer"
                target="_blank"
              >
                pull request{" "}
              </a>
              in mattcone/markdown-guide. The PR was merged. It might sounds
              trivial but it was a milestone for me.
            </li>
          </ul>
        </Step>
        <Step title="Learn Next.js" inProgress />
        <Step title="BonZeb CV Project Finished 🐟" succeed />
        <Step title="Learn Nest.js" inProgress />
        <Step title="Learn Google Cloud Platform" inProgress />
        <Step title="mdTogether Made 📝" succeed>
          <ul>
            <li>
              <a
                href="https://github.com/ymart1n/mdTogether"
                rel="noreferrer"
                target="_blank"
              >
                mdtogether
              </a>{" "}
              is an Online Collaborative Markdown Editor that provides features
              like Editing & Previewing Markdown documents, collaborating with
              others Synchronously or Asynchronously on the same Markdown
              document, having a Video Call during collaboration, picking Five
              Colorful Themes for the editor, and Exporting Markdown documents
              to various formats (i.e., .pdf, .md, .html).
            </li>
            <li>
              {" "}
              It was developed using React.js, Experss.js, GraphQL, MongoDB and
              deployed using Nginx, Digital Ocean, and Docker
            </li>
          </ul>
        </Step>
        <Step title="Grinding LeetCode" inProgress />
      </ul>
      <Year>2021</Year>
      <ul>
        <Step title="Low-Code Research Paper Published 🔬" succeed>
          <ul>
            <li>
              Published a low-code development{" "}
              <a
                href="https://www.researchgate.net/publication/357417399_The_Impacts_of_LowNo-Code_Development_on_Digital_Transformation_and_Software_Development"
                rel="noreferrer"
                target="_blank"
              >
                research paper
              </a>
              , The Impacts of Low/No-Code Development on Digital Transformation
              and Software Development. For more information of the paper, have
              a look at it on{" "}
              <a
                href="https://arxiv.org/abs/2112.14073"
                rel="noreferrer"
                target="_blank"
              >
                arXiv
              </a>
              .
            </li>
            <li>
              Low/No-code development is a software development method that
              provides users with a platform for visually creating applications
              with little or no coding. In the paper, I explored the benefits
              &amp; limitations of Low/No-Code development and modern
              Low/No-Code development platforms in the industry.
            </li>
          </ul>
        </Step>
        <Step title="First Research Paper Published 🔬" succeed>
          <ul>
            <li>
              Published a machine learning research paper in{" "}
              <a
                href="https://ieeexplore.ieee.org/document/9624252"
                rel="noreferrer"
                target="_blank"
              >
                IEEE
              </a>
              , A Medical Pre-Diagnosis System for Histopathological Image of
              Breast Cancer. For more information of the paper, have a look at
              it on{" "}
              <a
                href="https://arxiv.org/abs/2109.07878"
                rel="noreferrer"
                target="_blank"
              >
                arXiv
              </a>
              .
            </li>
          </ul>
        </Step>
        <Step title="First Internship at Tesla 🔋 🚗" succeed>
          <ul>
            <li>
              Done the first internship in my life at{" "}
              <a href="https://www.tesla.com/" rel="noreferrer" target="_blank">
                Tesla
              </a>{" "}
              (Shanghai Gigafactory).
            </li>
          </ul>
        </Step>
        <Step title="Joined University of Toronto Hyperloop Team 🚄" succeed />
        <Step title="Joined Thiele Lab as Research Assistant 🐟" succeed>
          <ul>
            <li>
              <a href="https://thielelab.ca/" rel="noreferrer" target="_blank">
                Thiele Lab
              </a>{" "}
              @UofT
            </li>
            <li>
              <a
                href="https://github.com/ymart1n/BonZeb_CSharp"
                rel="noreferrer"
                target="_blank"
              >
                BonZeb
              </a>{" "}
              is a Bonsai library for high-resolution zebrafish behavioural
              tracking and analysis. The project is to add the real-time
              tracking feature to the current BonZeb library so that researchers
              can collect accurate behavioural data easier.
            </li>
            <li>
              {" "}
              Computer Science Project - Fall 2021/Winter 2022: Machine Learning
              in real-time analysis of multi-animal tracking experiments
            </li>
          </ul>
        </Step>
        <Step title="flowboat Made 🛥️" succeed>
          <ul>
            <li>
              Built flowboat, A Node-Based Machine Learning App, for Hack the
              Valley V hackathon.
            </li>
            <li>
              <a
                href="https://devpost.com/software/flowboat-a-node-based-machine-learning-app"
                rel="noreferrer"
                target="_blank"
              >
                flowboat
              </a>{" "}
              is a web application that allows anyone to experience Machine
              Learning algorithms without having to code! Using flowboat, users
              can drag-and-drop input data, functions, and visualization outputs
              to see what ML is really like beyond lines of code.
            </li>
          </ul>
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Learn React.js" succeed />

        <Step title="First Full-Stack Web Application" succeed>
          <ul>
            <li>
              Built my first{" "}
              <a
                href="https://github.com/ymart1n/project-luke-warm-beans"
                rel="noreferrer"
                target="_blank"
              >
                full-stack web application
              </a>{" "}
              with 6 amazing teammates.
            </li>
          </ul>
        </Step>
        <Step title="First time applying for internship" succeed />
        <Step
          title="Entering the algorithm design &amp; analysis world 🤖"
          succeed
        />
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <button
            className="button-14"
            type="button"
            onClick={() => showFullTimeline(true)}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}
