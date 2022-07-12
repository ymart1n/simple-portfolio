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
          <ul>
            <li>Hope you enjoy exploring my blog and my projects.</li>
            <li>
              If you would like to share your thoughts, you can leave comments
              on the blogs or get in touch with me directly (contact info can be
              found on the Contact page).
            </li>
            <li>
              Don't think it's legit scientific but my MBTI personality type is{" "}
              <a
                href="https://www.16personalities.com/intj-personality"
                rel="noreferrer"
                target="_blank"
              >
                INTJ
              </a>{" "}
              🤔
            </li>
          </ul>
        </div>

        {/* <h2>🏗️ Under construction, coming soon.</h2> */}

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
              <strong>Editor</strong>:<br></br>
              <ul>
                <li>
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
                <li>
                  <a
                    href="https://www.vim.org/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Vim
                  </a>{" "}
                  +{" "}
                  <a
                    href="https://iterm2.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    iTerm2
                  </a>{" "}
                  +{" "}
                  <a
                    href="https://github.com/tmux/tmux/wiki"
                    rel="noreferrer"
                    target="_blank"
                  >
                    tmux
                  </a>{" "}
                  ✌🏼
                </li>
              </ul>
            </li>
            <li>
              <strong>Keyboard</strong>:{" "}
              <a
                href="https://www.keychron.com/products/keychron-k2-hot-swappable-wireless-mechanical-keyboard?variant=32187465662553"
                rel="noreferrer"
                target="_blank"
              >
                Keychron K2 Wireless Mechanical Keyboard V2
              </a>{" "}
              ⌨️
            </li>
            <li>
              <strong>Monitor</strong>:{" "}
              <a
                href="https://www.dell.com/en-ca/shop/dell-27-4k-uhd-usb-c-monitor-s2722qc/apd/210-bbqt/monitors-monitor-accessories"
                rel="noreferrer"
                target="_blank"
              >
                Dell 27 4K UHD USB-C Monitor
              </a>{" "}
              🖥️
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
