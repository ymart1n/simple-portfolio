import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

import Header from "../components/header.js";
import Footer from "../components/footer.js";
import HeadMetadata from "../components/headMetadata.js";

import getFiveNewestPost from "../api/getFiveNewestPost.js";

const Posts = ({ data }) => {
  let posts = data.posts ? (
    data.posts?.map((post, index) => {
      return (
        <Link key={index} href={`/blog/${post.urlTitle}`}>
          <a>
            <div
              className="homepage-latest-blog-post"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div className="homepage-latest-thumbnail">
                <Image
                  src={post.thumbnailImageUrl}
                  alt="dickbutt image unrelated to the post"
                  height={55}
                  width={55}
                  quality={20}
                />
              </div>
              <div
                className="homepage-latest-blog-post-title"
                style={{ flex: "1 1 0%" }}
              >
                <h3>{post.title}</h3>
              </div>
              <div className="blog-posts-list-item-date">
                <span>
                  {dayjs.unix(post.dateTimestamp).format("MMMM D, YYYY")}
                </span>
              </div>
            </div>
          </a>
        </Link>
      );
    })
  ) : (
    <a>no post.</a>
  );

  return posts;
};

export default function ({ data }) {
  return (
    <div className="layout-wrapper">
      <HeadMetadata
        title="Zhaohang Yan Portfolio"
        metaDescription="a blog and portfolio of Zhaohang Yan - ECE/CS Student"
      />
      <Header />
      <div className="homepage-container">
        <div>
          <h1>Hi, I'm ymart1n. I am an ECE student.</h1>
          <p>
            I graduated from{" "}
            <a
              href="https://www.utoronto.ca/"
              rel="noreferrer"
              target="_blank"
              style={{
                color: "#00bfff",
                textDecoration: "none",
                fontWeight: "600",
                borderBottom: "2px solid #e2eafd",
              }}
            >
              University of Toronto
            </a>{" "}
            in June, 2022 with an Honours Bachelor's degree in Computer Science
            with High Distinction. I'm currently pursuing my M.Eng degree at{" "}
            <a
              href="https://www.ubc.ca/"
              rel="noreferrer"
              target="_blank"
              style={{
                color: "#00bfff",
                textDecoration: "none",
                fontWeight: "600",
                borderBottom: "2px solid #e2eafd",
              }}
            >
              The University of British Columbia
            </a>
            .
          </p>
          <p>
            I love to use codes to solve algorithm challenges, build web
            applications, and tackle real-life problems using Machine Learning.
            'Blog' is where I record my thoughts, notes, plans, and updates from
            time to time. 'Selected Projects' section below contains all my
            highlight projects.
          </p>
          <p>
            This blog is{" "}
            <a
              href="https://github.com/krehwell/P-Blog"
              rel="noreferrer"
              target="_blank"
              style={{
                color: "#00bfff",
                textDecoration: "none",
                fontWeight: "600",
                borderBottom: "2px solid #e2eafd",
              }}
            >
              open-source
            </a>{" "}
            and is made using Next.js &amp; Express.js and deployed on{" "}
            <a
              href="http://vercel.com/"
              rel="noreferrer"
              target="_blank"
              style={{
                color: "#00bfff",
                textDecoration: "none",
                fontWeight: "600",
                borderBottom: "2px solid #e2eafd",
              }}
            >
              Vercel
            </a>
            .
          </p>
        </div>
        <div className="homepage-latest-blog-posts">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "10px",
            }}
          >
            <h2>📰 Latest Blog Posts </h2>
            <Link href="/blog">
              {/* <a className="homepage-latest-blog-posts-view-all">View all</a> */}
              <a className="button-14">View all</a>
            </Link>
          </div>

          <div className="homepage-latest-blog-posts-list">
            <Posts data={data} />
          </div>
        </div>
        <div className="homepage-projects">
          <h2>🌟 Selected Projects</h2>
          <div className="homepage-project-list">
            <div className="homepage-project">
              <h3>
                <a
                  href="https://github.com/ymart1n/BonZeb_CSharp"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="homepage-project-icon">🐟</div>
                  <div className="homepage-project-title">
                    BonZeb CV Research
                  </div>
                </a>
              </h3>
              <p>
                Computer Science Project - Fall 2021/Winter 2022: Machine
                Learning in real-time analysis of multi-animal tracking
                experiments
              </p>
              <div className="homepage-project-btns">
                <a
                  className="button-14"
                  href="https://github.com/ymart1n/BonZeb_CSharp"
                  rel="noreferrer"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
            <div className="homepage-project">
              <h3>
                <a
                  href="https://github.com/ymart1n/mdTogether"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="homepage-project-icon">📝</div>
                  <div className="homepage-project-title">mdTogether</div>
                </a>
              </h3>
              <p>
                mdTogether is an Online Collaborative Markdown Editor that
                provides various markdown editing/previewing and team
                collaboration features.
              </p>
              <div className="homepage-project-btns">
                <a
                  className="button-14"
                  href="https://github.com/ymart1n/mdTogether"
                  rel="noreferrer"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
            <div className="homepage-project">
              <h3>
                <a
                  href="https://www.hypertransit.ca/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="homepage-project-icon">🚅</div>
                  <div className="homepage-project-title">
                    Hypertransit Canada
                  </div>
                </a>
              </h3>
              <p>
                Design, develop, and maintain Hypertransit Canada official
                website using React.js and Tailwind CSS.
              </p>
              <div className="homepage-project-btns">
                <a
                  className="button-14"
                  href="https://www.hypertransit.ca/"
                  rel="noreferrer"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
            <div className="homepage-project">
              <h3>
                <a
                  href="https://ieeexplore.ieee.org/document/9624252"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="homepage-project-icon">🔬</div>
                  <div className="homepage-project-title">
                    ML Research Paper
                  </div>
                </a>
              </h3>
              <p>
                Published a machine learning research paper in IEEE, A Medical
                Pre-Diagnosis System for Histopathological Image of Breast
                Cancer.
              </p>
              <div className="homepage-project-btns">
                <a
                  className="button-14"
                  href="https://ieeexplore.ieee.org/document/9624252"
                  rel="noreferrer"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
            <div className="homepage-project">
              <h3>
                <a
                  href="https://www.researchgate.net/publication/357417399_The_Impacts_of_LowNo-Code_Development_on_Digital_Transformation_and_Software_Development"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="homepage-project-icon">👨🏻‍💻</div>
                  <div className="homepage-project-title">
                    Low-Code Research Paper
                  </div>
                </a>
              </h3>
              <p>
                Published a low/no-code development research paper, The Impacts
                of Low/No-Code Development on Digital Transformation and
                Software Development. arXiv link:
                https://arxiv.org/abs/2112.14073.
              </p>
              <div className="homepage-project-btns">
                <a
                  className="button-14"
                  href="https://www.researchgate.net/publication/357417399_The_Impacts_of_LowNo-Code_Development_on_Digital_Transformation_and_Software_Development"
                  rel="noreferrer"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
            <div className="homepage-project">
              <h3>
                <a
                  href="https://www.researchgate.net/publication/357417399_The_Impacts_of_LowNo-Code_Development_on_Digital_Transformation_and_Software_Development"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="homepage-project-icon">🦾</div>
                  <div className="homepage-project-title">flowboat</div>
                </a>
              </h3>
              <p>
                Built flowboat, A Node-Based Machine Learning App, for Hack the
                Valley V hackathon. flowboat is a web application that allows
                anyone to experience Machine Learning algorithms without having
                to code.
              </p>
              <div className="homepage-project-btns">
                <a
                  className="button-14"
                  href="https://www.researchgate.net/publication/357417399_The_Impacts_of_LowNo-Code_Development_on_Digital_Transformation_and_Software_Development"
                  rel="noreferrer"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getFiveNewestPost();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
