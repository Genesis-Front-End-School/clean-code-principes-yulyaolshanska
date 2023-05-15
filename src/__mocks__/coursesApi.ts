export const useGetCourseByIdQuery = jest.fn().mockImplementation(() => ({
  data: {
    title: "Mock Course",
    description: "This is a mock course",
    lessons: [
      {
        id: "1",
        title: "Lesson 1",
        status: "unlocked",
        link: "https://example.com/lesson1",
        previewImageLink: "https://example.com/lesson1-preview",
        order: 1,
      },
      {
        id: "2",
        title: "Lesson 2",
        status: "locked",
        link: "https://example.com/lesson2",
        previewImageLink: "https://example.com/lesson2-preview",
        order: 2,
      },
    ],
  },
}));
