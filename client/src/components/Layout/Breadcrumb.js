import React from "react";

const Breadcrumb = () => {
  return (
    <div>
      <div className='tabs is-centered'>
        <ul className=''>
          <li className='is-active'>
            <a>Pictures</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
