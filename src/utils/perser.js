export const Imgtest = url => {
  const ID = url.match(/\.(jpeg|jpg|gif|png)$/) != null;

  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (
    (match != null &&
      match.length > 2 &&
      typeof match[2] === "string" &&
      match[2].length > 0 &&
      match[2] === "source.unsplash.com") ||
    ID
  ) {
    return url;
  } else {
    return false;
  }
};
export const Vidtest = url => {
  const ID = url.match(/\.(mp4|mp3)$/) != null;
  if (ID) {
    return url;
  } else {
    return ID;
  }
};
