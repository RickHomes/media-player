import React from "react";
export default ({ imgUrl }) => {
  return (
    imgUrl && (
      <img
        src={imgUrl}
        alt="image"
        style={{
          width: "100%",
          marginBottom: 5,
          minHeight: 200
        }}
      />
    )
  );
};
