import React, { useRef, useEffect } from "react";
import Hls from "hls.js";
import LockedVideoImg from "../../images/lockedVideo.png";

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
      attachMediaToHls(hls, videoElement);
    }
  }, [videoLink, videoId]);

  const handleSavedTime = (
    videoElement: HTMLVideoElement,
    videoId: string
  ): void => {
    const savedTime = localStorage.getItem(videoId);

    if (savedTime !== null) {
      videoElement.currentTime = parseInt(savedTime);
    }
  };

  const attachMediaToHls = (hls: Hls, videoElement: HTMLVideoElement) => {
    hls.attachMedia(videoElement);
    hls.on(Hls.Events.MEDIA_ATTACHED, () => {
      hls.loadSource(videoLink);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        handleSavedTime(videoElement, videoId);
      });
    });
  };

  const handleTimeUpdate = (): void => {
    const currentTime = videoRef.current?.currentTime || 0;

    if (currentTime !== 0) {
      localStorage.setItem(videoId, String(currentTime));
    }
  };

  return (
    <video
      width="100%"
      ref={videoRef}
      controls
      onTimeUpdate={handleTimeUpdate}
      poster={isUnlocked ? poster : LockedVideoImg}
    />
  );
};

export default VideoPlayer;
