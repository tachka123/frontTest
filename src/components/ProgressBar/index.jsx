import React from "react";

import s from "./s.module.css";

const ProgressBar = ({ percent }) => {
  return (
    <div className={s.container}>
      <div className={s.bar} style={{ width: `${percent}%` }}></div>
    </div>
  );
};

ProgressBar.defaultProps = { percent: 50 };

export default ProgressBar;
