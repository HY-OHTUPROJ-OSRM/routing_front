import React from "react";
import PolygonList from "./PolygonList";

const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  const componentToDisplay=props.toBeDisplayed;
  return (
    <div className={sidebarClass} style={{overflow: "auto"}}>
      <PolygonList ediMode={props.editMode} setEditMode={props.setEditMode} />
    </div>
  );
};
export default SideBar;