import { Component } from "react";

import Header from "../components/header.js";
import Footer from "../components/footer.js";
import HeadMetadata from "../components/headMetadata.js";

export default class extends Component {
  static async getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return {
      statusCode,
    };
  }

  render() {
    return (
      <div className="layout-wrapper">
        <HeadMetadata title="Error | Zhaohang Yan Portfolio" />
        <Header />
        <div className="error-container">
          {this.props.statusCode === 404 ? (
            <>
              <h1>404 Page Not Found</h1>
            </>
          ) : (
            <>
              <h1>❌ An Error Occured</h1>
              <p>
                no one knows why this error occured, how did you get one tho?
              </p>
            </>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}
