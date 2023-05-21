import React from "react";

const TextInput = ({ title, ...attributes }) => {
  return (
    <>
      <label className="col-span-1" htmlFor="name">
        {title}
      </label>
      <div className="col-span-3">
        <input placeholder={title} {...attributes} />
      </div>
    </>
  );
};

export default TextInput;
