import React from "react";
import YtdPlayer from "./Embeds/Ytd";
import ImgViewer from "./ImageView/imageview";
import VidPlayer from "./videoPlayer/ReactVideoplayer";
import { Imgtest, Vidtest } from "./utils/perser";
const SMediaPlayer = ({ mediaUrl }) => {
  return (
    <React.Fragment>
      <YtdPlayer youtubeUrl={mediaUrl} />
      <ImgViewer imgUrl={Imgtest(mediaUrl)} />
      <VidPlayer vidUrl={Vidtest(mediaUrl)} />
    </React.Fragment>
  );
};
export default SMediaPlayer;
