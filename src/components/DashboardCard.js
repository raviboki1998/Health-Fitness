// DashboardCard.js
// import React from 'react';

// const DashboardCard = ({ title, content }) => {
//   return (
//     <div className="dashboard-card">
//       <h3>{title}</h3>
//       <p>{content}</p>
//     </div>
//   );
// };

// export default DashboardCard;

// --------------------
import React from 'react';

const DashboardCard = ({ title, content, onClick }) => {
  return (
    <div className="dashboard-card" onClick={onClick}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default DashboardCard;

