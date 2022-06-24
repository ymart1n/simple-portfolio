import { Component } from "react";
import Link from "next/link";

export default class extends Component {
  render() {
    return (
      <footer className="footer-wrapper">
        <div className="footer-links">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
        <div className="footer-bottom-msg">
          <p>
            🏗️ inspired by and built on top of{" "}
            <a href="https://github.com/krehwell/P-Blog">krehwell</a>'s
            open-source website
          </p>
        </div>
      </footer>
    );
  }
}
