import React from "react";
export default ({ youtubeUrl }) => {
  const Hostname = () => {
    var match = youtubeUrl.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (
      match != null &&
      match.length > 2 &&
      typeof match[2] === "string" &&
      match[2].length > 0 &&
      match[2] === "youtube.com"
    ) {
      return youtubeUrl;
    } else {
      return false;
    }
  };

  const YouTubeGetID = url => {
    var ID = "";
    url = url
      .replace(/(>|<)/gi, "")
      .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    } else {
      ID = url;
    }
    return ID;
  };
  return (
    Hostname() && (
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={`https://www.youtube.com/embed/${YouTubeGetID(Hostname())}`}
          frameBorder="0"
        />
      </div>
    )
  );
};
