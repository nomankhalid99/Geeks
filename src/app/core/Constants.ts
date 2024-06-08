interface instructorProps{
    avatar:string;
    name:string;
    designation:string;
    students:number;
    courses:number;
    review:number
}

interface LessonProps{
    title:string;
    time:string
}

interface SectionProps{
    title:string;
    lessons: LessonProps[]
    open:boolean
}

interface VideoProps {
    title: string;
    url: string;
    time:string;
    watched: boolean;
  }
  
export interface CourseProps{
    id:number;
    instructor: instructorProps[],
    img:string;
    title:string;
    description:string;
    enrolled:number;
    time:string;
    rating:number;
    category:string;
    level:string;
    sections:SectionProps[];
    videos:VideoProps[];
    fullDescription:string;
}