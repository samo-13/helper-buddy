import React from "react";
import ProgressBar from "../components/ProgressBar";

function Bar() {
  return (
    <div>
      <h1>This is where our progress bar goes!</h1>
        <ProgressBar backgroundcolor="#99ff66" progress='10'  height={20} />
        <ProgressBar backgroundcolor="#99ff66" progress='40'  height={20} />
        <ProgressBar backgroundcolor="#99ff66" progress='25'  height={20} />
        <ProgressBar backgroundcolor="#99ff66" progress='100'  height={20} />
        <ProgressBar backgroundcolor="#99ff66" progress='80'  height={20} />
    </div>
  );
}

export default Bar;
