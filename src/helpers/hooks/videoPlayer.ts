import Hls from "hls.js";
import { RefObject } from "react";

export const handleSavedTime = (
  videoElement: HTMLVideoElement,
  videoId: string
): void => {
  const savedTime = localStorage.getItem(videoId);

  if (savedTime !== null) {
    videoElement.currentTime = parseInt(savedTime);
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

  if (currentTime !== 0) {
    localStorage.setItem(videoId, String(currentTime));
  }
};
