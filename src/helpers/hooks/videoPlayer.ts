import Hls from "hls.js";
import { RefObject } from "react";

export const handleSavedTime = (
  videoElement: HTMLVideoElement,
  videoId: string
): void => {
  const savedTime = localStorage.getItem(videoId);

  if (savedTime !== null) {
    const parsedTime = parseInt(savedTime);
    if (!isNaN(parsedTime) && isFinite(parsedTime)) {
      videoElement.currentTime = parsedTime;
    }
  }
};

export const attachMediaToHls = (
  hls: Hls,
  videoElement: HTMLVideoElement,
  videoLink: string,
  videoId: string
) => {
  hls.attachMedia(videoElement);
  hls.on(Hls.Events.MEDIA_ATTACHED, () => {
    hls.loadSource(videoLink);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      handleSavedTime(videoElement, videoId);
    });
  });
};

export const handleTimeUpdate = (
  videoRef: RefObject<HTMLVideoElement>,
  videoId: string
): void => {
  const currentTime = videoRef?.current?.currentTime || 0;

  if (videoRef.current !== null && currentTime !== 0 && videoId !== null) {
    localStorage.setItem(videoId, String(currentTime));
  }
};
