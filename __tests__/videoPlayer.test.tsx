import React from "react";
import { fireEvent, render } from "@testing-library/react";

import Video from "../src/components/VideoPlayer/VideoPlayer";

import "@testing-library/jest-dom";

jest.mock("../src/images/lockedVideo.png", () => ({
  default: "path/to/mock/image.png",
}));
jest.mock("../src/helpers/hooks/videoPlayer", () => ({
  attachMediaToHls: jest.fn(),
}));
jest.mock("../src/helpers/hooks/videoPlayer", () => ({
  handleTimeUpdate: jest.fn(),
}));

describe("Describe video component", () => {
  const mockedProps = {
    id: "1",
    previewImageLink: "",
    order: 1,
  };

  const source = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
  const videoElem = (
    <Video videoLink={source} {...mockedProps} status="unlocked" />
  );

  it("It should display a video", () => {
    render(videoElem);
    const video = document.querySelector("video") as HTMLVideoElement;

    expect(video).toBeInTheDocument();
  });

  it("It should display video with controls", () => {
    render(videoElem);
    const video = document.querySelector("video") as HTMLVideoElement;

    expect(video).toHaveAttribute("controls");
  });
});
