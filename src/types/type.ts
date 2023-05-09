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

export interface LessonseDetails {
  id: string;
  link: string;
  title: string;
  status: string;
  previewImageLink: string;
  order: number;
}

export interface ThemeProps {
  colors: {
    body: string;
    background: string;
    text: string;
    backdrop: string;
    accent: string;
    title: string;
    cardShadow1: string;
    cardShadow2: string;
    primaryText: string;
    primaryBtnText: string;
    secondatyBtnText: string;
    hoverBtn: string;
  };
  media: {
    mobile: string;
    mobileM: string;
    tablet: string;
    desktop: string;
  };
}

export type GlobalThemeProps = {
  theme: ThemeProps;
};
