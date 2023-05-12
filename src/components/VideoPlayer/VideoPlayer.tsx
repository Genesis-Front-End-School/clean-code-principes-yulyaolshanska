import React, { useRef, useEffect } from "react";
import LockedVideoImg from "../../images/lockedVideo.png";
import { handleTimeUpdate } from "../../helpers/hooks/videoPlayer";
import { useHlsVideoPlayer } from "../../helpers/hooks/useHlsVideoPlayer";

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
    useHlsVideoPlayer(videoRef, videoLink, videoId);
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
