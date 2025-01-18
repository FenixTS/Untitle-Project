import React from 'react';
import './RecruiterLayout.css';
import NavHeader from '../../ProfilePage/NavHeader/NavHeader';
import ProfileCard from '../ProfileCard/ProfileCard';
import Categories from '../Categories/Categories';
import JobList from '../JobList/JobList';


const RecruiterLayout = () => {
  return (
    <div className="profile-container">
      {/* Header curve section */}
      <div className="header-curve"></div>
      
      {/* Main content area */}
      <div className="content-wrapper">
        <NavHeader/>
        <section className="profile-card-section">
       <ProfileCard/>
        </section>
<Categories/>
<JobList/>
     

        {/* Skills section */}
        <section className="skills-section">
          {/* <SkillProgress /> */}
        </section>
      </div>
    </div>
  );
};

export default RecruiterLayout;