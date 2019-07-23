import React from "react";
import "./OccupantDetail.css";

const OccupantDetail = ({ name, employeeId, history ,occupantId}) => {
  return (
    <tr
      className="occupantDetails"
      onClick={() => history.push(`occupants/${occupantId}`)}
    >
      <td className="occupantDetails__td">{name}</td>
      <td className="occupantDetails__td">{employeeId}</td>
    </tr>
  );
};

export default OccupantDetail;
