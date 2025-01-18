// import React from 'react';
// import './ProfileLayout.css';
// import ProfileHeader from '../ProfileHeader/ProfileHeader';
// import NavHeader from '../NavHeader/NavHeader';

// import CareerTimeline from '../CareerTimeline/CareerTimeline';
// import Languages from '../Languages/Languages';
// import Certification from '../Certification/Certificarion';
// import Education from '../Education/Education';
// import SkillProgress from '../SkillsProgress/SkillProgress';

// const ProfileLayout = ({ children }) => {
//   return (
//     <div className="profile-container">
//       {/* Header curve section */}
//       <div className="header-curve"></div>
      
//       {/* Main content area */}
//       <div className="content-wrapper">
//         {/* Profile section */}<NavHeader/>
//         <section className="profile-card-section">
//           {/* Your profile card component will go here */}<ProfileHeader/>
//         </section>

//         {/* Two column layout for main content */}
//         <div className="main-content-grid">
//           {/* Left column */}
//           <div className="left-column">
//             <section className="content-section">
//               {/* Your languages component */}<Languages/>
//             </section>
            
//             <section className="content-section">
//               {/* Your licenses component */}<Certification/>
//             </section>
//           </div>

//           {/* Right column */}
//           <div className="right-column">
//             <section className="content-section timeline-section">
//               {/* Your timeline component */}<CareerTimeline/>
//             </section>
//           </div>
//           <Education/>
//         </div>

//         {/* Skills section */}
//         <section classme="skills-section">
//           {/* Your skills component */}<SkillProgress/>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ProfileLayout;

import React from 'react';
import './ProfileLayout.css';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import NavHeader from '../NavHeader/NavHeader';
import CareerTimeline from '../CareerTimeline/CareerTimeline';
import Languages from '../Languages/Languages';
import Certification from '../Certification/Certificarion';
import Education from '../Education/Education';
import SkillProgress from '../SkillsProgress/SkillProgress';

const ProfileLayout = () => {
  return (
    <div className="profile-container">
      {/* Header curve section */}
      <div className="header-curve"></div>
      
      {/* Main content area */}
      <div className="content-wrapper">
        <NavHeader />
        <section className="profile-card-section">
          <ProfileHeader />
        </section>

        {/* Grid Layout from SampleLayout */}
        <div className="profile-layout">
          {/* Top row */}
          <div className="top-row">
            <div className="card small-card">
              <Languages />
            </div>
            <div className="card large-card">
              <CareerTimeline />
            </div>
          </div>
          
          {/* Bottom row */}
          <div className="bottom-row">
            <div className="card medium-card">
              <Certification />
            </div>
            <div className="card medium-card">
              <Education />
            </div>
          </div>
        </div>

        {/* Skills section */}
        <section className="skills-section">
          <SkillProgress />
        </section>
      </div>
    </div>
  );
};

export default ProfileLayout;