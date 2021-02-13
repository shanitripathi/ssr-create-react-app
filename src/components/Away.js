import React from "react";

const Away = () => {
  return (
    <div>
      I am away
      <button
        onClick={() => {
          console.log("hey there");
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Away;
