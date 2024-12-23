import React from 'react';
import { NavLink } from 'react-router-dom';
import './Career.css';

const Career = () => {
  return (
    <div className="career-container">
      <h1 className="career-title">Social Links</h1>
      <div className="button-container">
        <NavLink to="https://www.linkedin.com/feed/" target="_blank">
          <button className="btn btn-linkedin">LinkedIn</button>
        </NavLink>
        <NavLink to="https://github.com/" target="_blank">
          <button className="btn btn-github">GitHub</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Career;
