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
        First time being away from home for 12,023 km and four years.
      </Step>
      <Step title="Graduate High School 🥳 🎉" succeed />
      <Step title="Learn How to Program 👨🏻‍💻" succeed>
        Along with reading the{" "}
        <a
          href="https://ehmatthes.github.io/pcc/"
          rel="noreferrer"
          target="_blank"
        >
          Python Crash Course
        </a>
        , I wrote my first line of code in Python. It may appear to be a bit
        late in comparison to people who begin coding as children. But this is
        the beginning of my story.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Lowest Physics Score in School ⚛️ 📉" succeed>
        Monthly physics test, I decided not to show off myself that I'm a genius
        man. <br></br>100 marks, I lost 73 marks. TT
      </Step>
      <Step title="First Soccer Game with refs ⚽" succeed />
      <Step title="First Basketball Game with refs 🏀" succeed />
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Graduate Junior High School" succeed>
        Got into the second best high school in Fuzhou, Fujian.
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul>
      <Step title="#1 in Class for First In Junior High School" succeed>
        Never in my life to be in a class with full of genius but still secure
        #1. I couldn't even believe myself at a time.
      </Step>
      <Step title="#1 in Class for Second Time">
        Unfortunately to be #1 can only persist for one semester. But I was
        always top 5 in class for the rest of semesters ;p.
      </Step>
    </ul>
    <Divider />
    <Year>2007</Year>
    <ul>
      <Step title="First Computer" succeed>
        One computer to all members in the family. Windows XP with interesting
        software really opened my eyes. Most of them are pirated software like
        Pokemon games, GBA simulator, etc (even the operating system itself was
        pirated XD). I'm very grateful for the amount of information I absorbed
        during the technology boom at my early age.
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
      <p>
        🏗️ 2019 - 2022 Timeline is under construction, coming soon. <br></br>
        👷🏻 Click 'Load More' button to see timeline before 2019.
      </p>
      {/* <Year>2021</Year>
      <ul>
        <Step title="Graduate University 🎓" succeed>
          Finally get rid of those salty, unskillful, arrogant lecturers 🎉.
        </Step>
        <Step title="Learn Fastify" succeed />
        <Step title="Get Onboard with Knowt 💼" succeed>
          A post on Reddit attracted them to get me on board with them :).
        </Step>
        <Step title="Migrate to Arch Linux " succeed>
          Previously using Manjaro dual boot with Windows. Unfortunately Manjaro
          doesn't really seem to "just-work". Migrate to Arch, Love it!
          Arch+i3wm now and it's perfect.
        </Step>
        <Step title="This Blog Made" succeed>
          This blog is my first fullstack web project with an additional custom
          made fullstack CMS. Learned many things that step up the level on how
          to boost performance and handle to deployment. All this things to the
          production level.
        </Step>
        <Step title="HeckarNews - Hacker News Clone" succeed>
          A fullstack project just like this blog itself but with even more
          features implemented as a real website out there is built: handle
          reset password by email, search functionality within site, and many
          more. <a href="https://forum.krehwell.com/">HeckarNews</a>
        </Step>
        <Step title="10FastFingers - Average 71 WPM 💫" succeed />
        <Step title="Learn Next.js" succeed />
        <Step title="Learn Nest.js" succeed />
        <Step title="Contribute to Open-source שׂ" succeed>
          Small salvation but worth to start. Started contributing on Vim
          plugin. I'm happy that most of thing I contributed is the things that
          I found it disturbing.
        </Step>
        <Step title="Boomermath Made 💣" succeed>
          Made with some of the dudes. So much satisfaction doing the project.
          Probably a bad game for many people but the feeling on how to finish
          it is so so super breathtaking moment.{" "}
          <a href="https://gitlab.com/krehwell/boomermath">Boomermath</a> 💞 💖
          💕
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Interned at Cool Code as Game Developer 🎮" succeed>
          Cool right? yes <a href="https://coolcode.my/">Cool Code</a>. So glad
          that this company cater all interns so well. Having the experience in
          real working environment is so essential especially with contributing
          to the company in making their main project as well.
        </Step>
        <Step
          title="Finished freeCodeCamp - Front End Development Libraries "
          succeed
        />
        <Step title="Finished freeCodeCamp - Data Visualization 📈" succeed />
        <Step
          title="Finished freeCodeCamp - APIs and Microservices "
          succeed
        />
        <Step title="10FastFingers - Average 65 WPM 💫" succeed />
        <Step title="First WebRTC" succeed>
          <a href="https://callntol.vercel.app/">CallnTol</a> exists. One of
          first web project that enables Call, Send Message, & Video Call.
        </Step>
        <Step title="Learn Typescript ﯤ" succeed />
        <Step title="Re-Learn MySQL " succeed />
        <Step title="Complete Algorithms Solving on Advent of Code" succeed />
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Get Into Web" succeed>
          <a href="https://freecodecamp.org/">freeCodeCamp</a> helps much in
          stepping up to the next level. College Web programming course doesn't
          seem relevant anymore with current modern Web. Yes, I know they will
          say that the most important is the technique. But still saying that
          can also mean it is just same with teaching adobe flash to student.
        </Step>
        <Step title="Finished freeCodeCamp - Responsive Web Design" succeed />
        <Step
          title="Finished freeCodeCamp - JavaScript(ES6) Algorithms and Data Structures"
          succeed
        />
        <Step title="Get Into Game Development " succeed />
        <Step title="Multithread with Java " succeed>
          Sounds trivial. But I really am learning a lot by making a multithread
          cafe-simulation program. It teaches so many things on how to handle
          one basic problem but complicated in solving. How to handle the
          program flow, the responsibility of each object, connection between
          the relational object from different thread, deadlock, and many more.
          The most important is the convertability of this skills to be
          transfered to other field such making game or even requesting data
          from API in Web.
        </Step>
        <Step title="Vim+tmux as Main Editor 💎" succeed>
          When it comes to development workflow, nothing beats Vim() so far.
          Until the day I found tmux, both being my go to choices in making any
          project, even for Unity development. Combined with HHKB, I feel
          blessed to be alive ❤️💖.
        </Step>
        <Step title="10FastFingers - Average 50 WPM 💫" succeed />
      </ul> */}
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          {" "}
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
