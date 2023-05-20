import React, { useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const FaQuestionItems = ({ handleToggle, active, faq }) => {
  const contentEl = useRef();
  const { header, id, text } = faq || {};

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 ${active === id ? "active" : ""}`}
          onClick={() => handleToggle(id)}
        >
          <h5 className="rc-accordion-title">{header}</h5>
          <MdOutlineKeyboardArrowDown className="rc-accordion-icon" />
          {/* <i className="fa fa-chevron-down rc-accordion-icon"></i> */}
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="rc-accordion-body">
          <p className="mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FaQuestionItems;
