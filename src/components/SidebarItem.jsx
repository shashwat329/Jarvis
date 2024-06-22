import React from 'react';
import "../App.css"

const SidebarItem = ({ icon, text, alert, active }) => {
  return (
    <div className={`sidebar-item ${active ? 'active' : ''}`}>
      {icon}
      <span>{text}</span>
      {alert && <span className="alert-icon ">!</span>}
    </div>
  );
};

export default SidebarItem;
