import React from 'react';
import './skills.css';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'React', percentage: 75 },
    { name: 'Photoshop', percentage: 65 },
    { name: 'Adobe XD', percentage: 60 },
    { name: 'Node.js', percentage: 55 },
    { name: 'WordPress', percentage: 50 },
  ];

  const getProgressBarColor = (percentage) => {
    if (percentage >= 80) {
      return 'bg-success'; 
    } else if (percentage >= 60) {
      return 'bg-warning'; 
    } else {
      return 'bg-danger';
    }
  };

  const getProgressBarOpacity = (percentage) => {
    return percentage / 100;
  };

  return (
    <section className="skills-section text-center py-5 bg-dark text-white">
      <div className="container">
        <h2>Skills</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <div className="row">
          <div className="col-md-4 offset-md-2">
            <ul className="list-unstyled text-left">
              <li className='p-3'>MY FOCUS</li><hr></hr>
              <li className='p-3'>UI/UX Design</li>
              <li className='p-3'>Responsive Design</li>
              <li className='p-3'>Web Design</li>
              <li className='p-3'>Mopile App Design</li>
            </ul>
          </div>
          <div className="col-md-4">
            {skills.map((skill) => (
              <div key={skill.name} className="progress-container mb-3">
                <p className="mb-1">{skill.name}</p>
                <div className="progress">
                  <div
                    className={`progress-bar ${getProgressBarColor(skill.percentage)}`}
                    role="progressbar"
                    style={{ 
                      width: `${skill.percentage}%`, 
                      opacity: getProgressBarOpacity(skill.percentage) 
                    }}
                  >
                    {skill.percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;



// // src/components/skills/SkillsSection.js
// import React from 'react';
// import './skills.css';

// const SkillsSection = () => {
//     const skills = [
//       { name: 'HTML', percentage: 90 },
//       { name: 'CSS', percentage: 80 },
//       { name: 'JavaScript', percentage: 65 },
//       { name: 'React', percentage: 75 },
//       { name: 'Photoshop', percentage: 90 },
//       { name: 'Adobe XD', percentage: 40 },
//       { name: 'Node.js', percentage: 70 },
//       { name: 'WordPress', percentage: 50 },
//     ];
  
//     const getProgressBarColor = (percentage) => {
//       if (percentage >= 80) {
//         return 'bg-success'; 
//       } else if (percentage >= 60) {
//         return 'bg-warning'; 
//       } else {
//         return 'bg-danger';
//       }
//     };
  
//     return (
//       <section className="skills-section text-center py-5 bg-dark text-white">
//         <div className="container">
//           <h2>Skills</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
//           <div className="row">
//             <div className="col-md-4 offset-md-2">
//               <ul className="list-unstyled text-left">
//                 <li className='p-3'>MY FOCUS</li><hr></hr>
//                 <li className='p-3'>UI/UX Design</li>
//                 <li className='p-3'>Responsive Design</li>
//                 <li className='p-3'>Web Design</li>
//                 <li className='p-3'>Mopile App Design</li>
//               </ul>
//             </div>
//             <div className="col-md-4">
//               {skills.map((skill) => (
//                 <div key={skill.name} className="progress-container mb-3">
//                   <p className="mb-1">{skill.name}</p>
//                   <div className="progress">
//                     <div
//                       className={`progress-bar ${getProgressBarColor(skill.percentage)}`}
//                       role="progressbar"
//                       style={{ width: `${skill.percentage}%` }}
//                     >
//                       {skill.percentage}%
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };

// export default SkillsSection;
