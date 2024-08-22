import React from "react";

export default function Button({ title, className, icon , textStyle}) {
  return <button className={`${className}`}>  
  <span className={textStyle}>{title}{icon} </span>
  
  
  
  </button>;
}
 