import Header from "../components/header";
import Footer from "../components/footer";
import HeadMetadata from "../components/headMetadata.js";
import Timeline from "../components/Timeline.js";

export default function about() {
  return (
    <div className="layout-wrapper">
      <HeadMetadata
        title="About Me | Zhaohang Yan Portfolio"
        metaDescription="Zhaohang Yan is the author of this blog"
      />
      <Header />
      <div className="about-container">
        <div className="about-section">
          <h1>About Me</h1>
          {/* <h2>🏗️ Under construction, coming soon.</h2> */}
          <p>Hope you enjoy exploring my blog and my projects.</p>
          <p>
            If you would like to share your thoughts, you can leave comments on
            the blogs or get in touch with me directly (contact info can be
            found on the Contact page).
          </p>
        </div>
        <div className="about-section">
          <h2>🛠️ Personal Tools</h2>
          <ul>
            <li>
              <strong>Main Machine</strong>:{" "}
              <a
                href="https://www.apple.com/ca/macos/monterey/"
                rel="noreferrer"
                target="_blank"
              >
                macOS Monterey
              </a>{" "}
              +{" "}
              <a
                href="https://support.apple.com/kb/SP819"
                rel="noreferrer"
                target="_blank"
              >
                Intel Chip MacBook Pro
              </a>{" "}
              (intel chip for life :D)
            </li>
            <li>
              <strong>Editor</strong>:{" "}
              <a
                href="https://code.visualstudio.com/"
                rel="noreferrer"
                target="_blank"
              >
                VS Code
              </a>{" "}
              +{" "}
              <a
                href="https://marketplace.visualstudio.com/vscode"
                rel="noreferrer"
                target="_blank"
              >
                A bunch of amazing extensions
              </a>{" "}
              🔌
            </li>
          </ul>
        </div>
        <div className="about-section">
          <Timeline />
        </div>
      </div>
      <Footer />
    </div>
  );
}
