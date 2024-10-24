import React from "react";

function Links(props) {
  return (
    <div className="links">
      <a href={props.path}>{props.children}</a>
    </div>
  );
}

export default Links;
