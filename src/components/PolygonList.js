import React, { useState, useEffect } from "react";
import PolygonDisplay from "./PolygonDisplay";
import { useSelector } from 'react-redux';

function PolygonList() {
  const polygons = useSelector((state) => state.polygons)

  return (
    <div>
      {polygons.map((polygon, index) => (
        <PolygonDisplay key={polygon.id} {...polygon} />
      ))}
    </div>
  );
}

export default PolygonList;
