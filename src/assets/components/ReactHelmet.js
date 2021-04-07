import React from "react";
import { Helmet } from "react-helmet";

class ReactHelmet extends React.Component {
  render() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{this.props.pageTitle}</title>
        <link rel="canonical" href={this.props.cononical} />
      </Helmet>
    );
  }
}

export default ReactHelmet;
