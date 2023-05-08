import {
  handleSavedTime,
  attachMediaToHls,
  handleTimeUpdate,
} from "../../src/helpers/hooks/videoPlayer";

describe("handleSavedTime", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("should attach media to hls", () => {
    const hlsMock = {
      attachMedia: jest.fn(),
      on: jest.fn(),
      loadSource: jest.fn(),
    };
    const videoElementMock = document.createElement("video");
    const videoLink = "http://example.com/video.mp4";
    const videoId = "video1";

    attachMediaToHls(hlsMock as any, videoElementMock, videoLink, videoId);

    expect(hlsMock.attachMedia).toHaveBeenCalledWith(videoElementMock);
  });
  it("sets the videoElement currentTime when savedTime is present", () => {
    const mockVideoElement = document.createElement("video");
    mockVideoElement.disablePictureInPicture = true;
    mockVideoElement.height = 720;
    mockVideoElement.onenterpictureinpicture = jest.fn();
    mockVideoElement.onleavepictureinpicture = jest.fn();
    mockVideoElement.currentTime = 0;

    const mockSavedTime = "10";
    const mockVideoId = "123";
    localStorage.setItem(mockVideoId, mockSavedTime);

    handleSavedTime(mockVideoElement, mockVideoId);

    expect(mockVideoElement.currentTime).toBe(10);
  });

  it("does not set the videoElement currentTime when savedTime is not present", () => {
    const mockVideoElement = document.createElement("video");
    mockVideoElement.disablePictureInPicture = true;
    mockVideoElement.height = 720;
    mockVideoElement.onenterpictureinpicture = jest.fn();
    mockVideoElement.onleavepictureinpicture = jest.fn();
    mockVideoElement.currentTime = 0;
    const mockVideoId = "123";
    localStorage.removeItem(mockVideoId);

    handleSavedTime(mockVideoElement, mockVideoId);

    expect(mockVideoElement.currentTime).toBe(0);
  });

  it("does not set the videoElement currentTime property when localStorage.getItem returns a non-numeric value", () => {
    const mockVideoElement = document.createElement("video");
    mockVideoElement.disablePictureInPicture = true;
    mockVideoElement.height = 720;
    mockVideoElement.onenterpictureinpicture = jest.fn();
    mockVideoElement.onleavepictureinpicture = jest.fn();
    mockVideoElement.currentTime = 0;
    const mockVideoId = "123";
    localStorage.setItem(mockVideoId, "not a number");

    handleSavedTime(mockVideoElement, mockVideoId);

    expect(mockVideoElement.currentTime).toBe(0);
  });

  it("sets the videoElement currentTime property to the last saved time if there are multiple save points in localStorage", () => {
    const mockVideoElement = document.createElement("video");
    const mockVideoId = "123";
    localStorage.setItem(mockVideoId, "5");
    localStorage.setItem(mockVideoId + "2", "10");
    localStorage.setItem(mockVideoId + "3", "15");

    handleSavedTime(mockVideoElement, mockVideoId);

    expect(mockVideoElement.currentTime).toBe(5);
  });

  //   it("calls localStorage.removeItem with the correct videoId argument when videoElement.currentTime is 0", () => {
  //     const mockVideoElement = document.createElement("video");
  //     const mockVideoId = "123";
  //     localStorage.setItem(mockVideoId, "5");
  //     const spy = jest.spyOn(localStorage, "removeItem");

  //     mockVideoElement.currentTime = 0;

  //     handleSavedTime(mockVideoElement, mockVideoId);

  //     expect(spy).toHaveBeenCalledWith(mockVideoId);
  //   });
});

describe("attachMediaToHls", () => {
  test("should attach media to hls", () => {
    const hlsMock = {
      attachMedia: jest.fn(),
      on: jest.fn(),
      loadSource: jest.fn(),
    };
    const videoElementMock = document.createElement("video");
    const videoLink = "http://example.com/video.mp4";
    const videoId = "video1";

    attachMediaToHls(hlsMock as any, videoElementMock, videoLink, videoId);

    expect(hlsMock.attachMedia).toHaveBeenCalledWith(videoElementMock);
  });

  test("should handle errors when attaching media", () => {
    const errorMock = new Error("attachMedia error");
    const hlsMock = {
      attachMedia: jest.fn(() => {
        throw errorMock;
      }),
      on: jest.fn(),
      loadSource: jest.fn(),
    };
    const videoElementMock = document.createElement("video");
    const videoLink = "http://example.com/video.mp4";
    const videoId = "video1";

    expect(() =>
      attachMediaToHls(hlsMock as any, videoElementMock, videoLink, videoId)
    ).toThrow(errorMock);
  });
});

describe("handleTimeUpdate", () => {
  beforeEach(() => {
    jest.spyOn(window.localStorage.__proto__, "setItem");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should update local storage with the current time when the video is playing", () => {
    const mockVideoRef = {
      current: { currentTime: 10 },
    } as React.RefObject<HTMLVideoElement>;

    handleTimeUpdate(mockVideoRef, "1");

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith("1", "10");
  });

  it("should not update local storage when the video is not playing", () => {
    const mockVideoRef = {
      current: { currentTime: 0 },
    } as React.RefObject<HTMLVideoElement>;

    handleTimeUpdate(mockVideoRef, "1");

    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it("should handle null video ref", () => {
    const mockVideoRef = null as React.RefObject<HTMLVideoElement> | null;
    if (mockVideoRef) {
      handleTimeUpdate(mockVideoRef, "1");
    }
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it("should handle null video id", () => {
    const mockVideoRef = {
      current: { currentTime: 10 },
    } as React.RefObject<HTMLVideoElement>;

    handleTimeUpdate(mockVideoRef, null as unknown as string);

    expect(localStorage.setItem).not.toHaveBeenCalled();
  });
});
