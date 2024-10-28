import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function Links(props) {
  return (
    <Router>
      <Link to={props.path}>
        <div className="links">{props.children}</div>
      </Link>
    </Router>
  );
}

export default Links;
