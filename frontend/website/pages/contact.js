import Header from "../components/header";
import Footer from "../components/footer";
import HeadMetadata from "../components/headMetadata.js";

export default function contact() {
  return (
    <div className="layout-wrapper">
      <HeadMetadata
        title="Contact | Zhaohang Yan Portfolio"
        metaDescription="if you have anything to says about me, don't say it"
      />
      <Header />
      <div className="contact-container">
        <div className="contact-section">
          <h1>Favorite Quotes</h1>
          <p>
            <i>
              "You can't do anything about the length of your life, but you can
              do something about its width and depth."
            </i>{" "}
            ~ H. L. Mencken
          </p>
          <p>
            <i>"Stay Hungry, Stay Foolish."</i> ~ Steve Jobs (Probably :p)
          </p>
        </div>
        <div className="contact-section">
          <h2>📝 Contact</h2>
          <ul>
            <li>
              <strong>Email</strong>: 10969mart1n@gmail.com
            </li>
            <li>
              <strong>GitHub</strong>:{" "}
              <a href="https://github.com/ymart1n">ymart1n</a>
            </li>
            <li>
              <strong>LinkedIn</strong>:{" "}
              <a href="https://www.linkedin.com/in/zhaohangyan/">zhaohangyan</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
