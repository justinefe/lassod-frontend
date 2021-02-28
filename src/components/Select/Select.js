import React, { useRef } from "react";
import DropDown from "./Dropdown";
import "./Select.css";

const Select = React.forwardRef(
  ({ arr, width, val, setVal, setError }, selectRef) => {
    const openRef = useRef(null);
    const handleOpen = (e) => {
      e.preventDefault();
      if (openRef.current.style.display === "block") {
        openRef.current.style.display = "none";
        selectRef.current.style.boxShadow = "none";
      } else {
        openRef.current.style.display = "block";
        selectRef.current.style.border = "none";
      }
    };
    const handleClick = (e, val) => {
      e.preventDefault();
      setVal(val);
      setError((prev) => ({ ...prev, select: "" }));
      openRef.current.style.display = "none";
      selectRef.current.style.border = "1px solid #2F80ED";
    };
    return (
      <div style={{ width: `${width}` }} className="select">
        <div ref={selectRef} onClick={handleOpen} className="select_input">
          <span>{val}</span>
          <DropDown />
        </div>
        <div
          style={{ width: `${width}` }}
          ref={openRef}
          className="select_result"
        >
          {arr?.map((ar) => (
            <div
              className="select_result_each"
              key={ar.value}
              onClick={(e) => handleClick(e, ar.value)}
            >
              <span>{ar.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default Select;
