import React from "react";
import ReactPlayer from "react-player";

export default ({ vidUrl,light }) => {
  return (
    vidUrl && (
      <ReactPlayer
        url={vidUrl || ""}
        controls
        light={light|| false}
        width={"100%"}
        height={300}
      />
    )
  );
};
