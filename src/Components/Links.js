import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function Links(props) {
  return (
    <div className="links">
      <Router>
        <Link to={props.path}>{props.children}</Link>
      </Router>
    </div>
  );
}

export default Links;
