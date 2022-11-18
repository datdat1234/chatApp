import React from "react";
import "../styles/search.css";

export function Search(props) {

  return props.trigger ? (
      <React.Fragment>
        <div className="search_ctn">
          <div className="search_header">
              <span>To:</span>
              <input className="text-input" type="text" />
              <i class="fa-solid fa-arrow-left-long" onClick={() => {props.setTrigger(false);}}></i>
          </div>
        </div>
      </React.Fragment>
  ) : (
    ""
  );
}