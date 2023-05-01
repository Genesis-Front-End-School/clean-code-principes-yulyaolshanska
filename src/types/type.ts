export interface ILesson {
  id: string;
  previewImageLink: string;
  link: string;
  status: string;
  title: string;
  order: number;
}

export interface ICourse {
  title: string;
  containsLockedLessons: boolean;
  description: string;
  id: string;
  lessonsCount: number;
  meta?: object;
  rating: number;
  tags?: [];
  previewImageLink: string;
}

export interface ICourses {
  courses: ICourse[];
}

export interface ICourseDetail {
  title: string;
  containsLockedLessons: boolean;
  description: string;
  lessons: ILesson[];
  meta: object;
  rating: number;
}
