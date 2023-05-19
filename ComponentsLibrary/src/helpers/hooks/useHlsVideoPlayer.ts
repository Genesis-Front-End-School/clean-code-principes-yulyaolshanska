import Hls from "hls.js";
import { attachMediaToHls } from "./videoPlayer";

export const useHlsVideoPlayer = (
  videoRef: React.RefObject<HTMLVideoElement>,
  videoLink: string,
  videoId: string
) => {
  const videoElement = videoRef.current as HTMLVideoElement;
  if (!videoElement) return;

  if (Hls.isSupported()) {
    const hls = new Hls();
    attachMediaToHls(hls, videoElement, videoLink, videoId);
  }
};
