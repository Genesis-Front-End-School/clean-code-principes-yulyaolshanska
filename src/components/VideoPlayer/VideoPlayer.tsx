import React, { useRef, useEffect } from "react";
import Hls from "hls.js";
import LockedVideoImg from "../../images/lockedVideo.png";
import { attachMediaToHls, handleTimeUpdate } from "helpers/hooks/videoPlayer";

interface VideoPlayerProps {
  videoLink: string;
  previewImageLink: string;
  order: number;
  id: string;
  status: "locked" | "unlocked";
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoLink,
  previewImageLink,
  order,
  id: videoId,
  status,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const poster = `${previewImageLink}/lesson-${order}.webp`;
  const isUnlocked = status === "unlocked";

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      attachMediaToHls(hls, videoElement, videoLink, videoId);
    }
  }, [videoLink, videoId]);

  return (
    <video
      width="100%"
      ref={videoRef}
      controls
      onTimeUpdate={() => handleTimeUpdate(videoRef, videoId)}
      poster={isUnlocked ? poster : LockedVideoImg}
    />
  );
};

export default VideoPlayer;
