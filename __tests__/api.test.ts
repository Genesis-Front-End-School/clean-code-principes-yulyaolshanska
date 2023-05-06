// import { rest } from "msw";
// import { setupServer } from "msw/node";
// import { renderHook } from "@testing-library/react-hooks";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = "https://example.com/api";

// const fetchMock = jest.fn(async (input, init) => {
//   const response = await fetch(input, init);
//   const json = await response.json();
//   return new Response(JSON.stringify(json), {
//     status: response.status,
//     headers: response.headers,
//   });
// });

// const baseQuery = fetchBaseQuery({ baseUrl, fetchFn: fetchMock });

// const server = setupServer(
//   rest.get(`${baseUrl}/preview-courses`, (req, res, ctx) => {
//     return res(
//       ctx.json([
//         { id: 1, title: "Course 1" },
//         { id: 2, title: "Course 2" },
//       ])
//     );
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// describe("coursesApi", () => {
//   const coursesApi = createApi({
//     reducerPath: "coursesApi",
//     baseQuery,
//     tagTypes: ["Courses", "Course"],
//     endpoints: (builder) => ({
//       getCourses: builder.query({
//         query: () => "",
//         providesTags: ["Courses"],
//       }),
//     }),
//   });

//   test("useGetCoursesQuery returns courses", async () => {
//     const { result, waitForNextUpdate } = renderHook(() =>
//       coursesApi.useGetCoursesQuery("")
//     );

//     await waitForNextUpdate({ timeout: 3000 });

//     expect(fetchMock).toHaveBeenCalledWith(`${baseUrl}/preview-courses`, {
//       headers: expect.anything(),
//     });
//     expect(result.current.data).toEqual([
//       { id: 1, title: "Course 1" },
//       { id: 2, title: "Course 2" },
//     ]);
//   });
// });
