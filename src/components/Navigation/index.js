import React from "react";

function Navigation(props) {
  const tabs = ["About", "Projects", "Contact", "Resume"];
  return (
    <ul className="nav">
      {tabs.map((tab) => (
        <h4 className="nav-item" key={tab}>
          <a
            href={"#" + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? "nav-link active" : "nav-link" 
            }
          >
            {tab}
          </a>
        </h4>
      ))}
    </ul>
  );
}

export default Navigation;
