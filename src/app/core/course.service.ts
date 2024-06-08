import { Injectable } from '@angular/core';
import { CourseProps } from './Constants';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  private courses :CourseProps[] = [
    {
      id: 1,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-5-100x100.jpg',
          name: 'Claire Robertson',
          designation: 'Designer',
          students: 398,
          courses: 5,
          review: 47,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-react.jpg',
      title: 'How to easily create a website with React',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 3 hours 56 minutes',
      rating: 4.7,
      category: 'React',
      level: 'Beginner',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
      videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 2,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1-100x100.jpg',
          name: 'Morris Mccoy',
          designation: 'Front-end Developer, Designerr',
          students: 1191,
          courses: 7,
          review: 103,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-css.jpg',
      title: 'CSS: ultimate CSS course from beginner to advanced',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 1 hour 30 minutes',
      rating: 4.5,
      category: 'CSS3',
      level: 'Beginner',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 3,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3-100x100.jpg',
          name: 'Juanita Bell',
          designation: 'Professional Front-end Developer',
          students: 585,
          courses: 5,
          review: 52,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-wordpress.jpg',
      title: 'WordPress: complete WordPress theme & plugin',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: '2 hours 30 minutes',
      rating: 4.8,
      category: 'WordPress',
      level: 'Intermediate',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 4,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-5-100x100.jpg',
          name: 'Claire Robertson',
          designation: 'Designer',
          students: 398,
          courses: 5,
          review: 47,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-javascript.jpg',
      title: 'Applying JavaScript and using the console.',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 12 hours 34 minutes',
      rating: 4.9,
      category: 'Javascript',
      level: 'Expert',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 5,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3-100x100.jpg',
          name: 'Juanita Bell',
          designation: 'Professional Front-end Developer',
          students: 585,
          courses: 5,
          review: 52,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-gatsby.jpg',
      title: 'Gatsby JS: build blog with GraphQL and React',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 3 hours 56 minutes',
      rating: 4.4,
      category: 'GatsBy',
      level: 'Intermediate',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 6,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1-100x100.jpg',
          name: 'Morris Mccoy',
          designation: 'Front-end Developer, Designerr',
          students: 1191,
          courses: 7,
          review: 103,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-python.jpg',
      title: 'The Python Course: build web application',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 2 hours 30 minutes',
      rating: 4.2,
      category: 'Python',
      level: 'Expert',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 7,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-2-100x100.jpg',
          name: 'Ted Hawkins',
          designation: '',
          students: 540,
          courses: 6,
          review: 66,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-angular.jpg',
      title: 'Angular – the complete guide for beginner',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 1 hour 30 minutes',
      rating: 4.7,
      category: 'Angular',
      level: 'Beginner',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 8,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-5-100x100.jpg',
          name: 'Claire Robertson',
          designation: 'Designer',
          students: 398,
          courses: 5,
          review: 47,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-graphql.jpg',
      title: 'GraphQL: introduction to graphQL for beginners',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 2 hours 46 minutes',
      rating: 4.6,
      category: 'GraphQL',
      level: 'Intermediate',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 9,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-2-100x100.jpg',
          name: 'Ted Hawkins',
          designation: '',
          students: 540,
          courses: 6,
          review: 66,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-bootstrap.jpg',
      title: 'How to customize Bootstrap CSS for Beginner',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 2 hours 46 minutes',
      rating: 4.5,
      category: 'Bootstrap',
      level: 'Beginner',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 10,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-2-100x100.jpg',
          name: 'Ted Hawkins',
          designation: '',
          students: 540,
          courses: 6,
          review: 66,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-node.jpg',
      title: 'Node.js Tutorials – For beginners and professionals',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 3 hours 56 minutes',
      rating: 4.4,
      category: 'Node',
      level: 'Beginner',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 11,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1-100x100.jpg',
          name: 'Morris Mccoy',
          designation: 'Front-end Developer, Designerr',
          students: 1191,
          courses: 7,
          review: 103,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-bootstrap.jpg',
      title: 'An Ultimate Guide for Beginners Bootstrap 5',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 3 hours 56 minutes',
      rating: 4.3,
      category: 'Bootstrap',
      level: 'Beginner',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 12,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3-100x100.jpg',
          name: 'Juanita Bell',
          designation: 'Professional Front-end Developer',
          students: 585,
          courses: 5,
          review: 52,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-bootstrap.jpg',
      title: 'Bootstrap 5 Grid System Introduction for Beginner',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 1 hour 30 minutes',
      rating: 4.5,
      category: 'Bootstrap',
      level: 'Beginner',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 13,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-5-100x100.jpg',
          name: 'Claire Robertson',
          designation: 'Designer',
          students: 398,
          courses: 5,
          review: 47,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-bootstrap.jpg',
      title: 'Easy Way to Work with Bootstrap 5 Components',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 2 hours 30 minutes',
      rating: 4.7,
      category: 'Bootstrap',
      level: 'Beginner',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 14,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1-100x100.jpg',
          name: 'Morris Mccoy',
          designation: 'Front-end Developer, Designerr',
          students: 1191,
          courses: 7,
          review: 103,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-bootstrap.jpg',
      title: 'Bootstrap Tutorial – How to Set Up and Use Bootstrap',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 3 hours 56 minutes',
      rating: 4.0,
      category: 'Bootstrap',
      level: 'Intermediate',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 15,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-2-100x100.jpg',
          name: 'Ted Hawkins',
          designation: '',
          students: 540,
          courses: 6,
          review: 66,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-bootstrap.jpg',
      title: 'Bootstrap 5 Components Alerts Customization',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 2 hours 46 minutes',
      rating: 4.4,
      category: 'Intermediate',
      level: 'Beginner',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 16,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3-100x100.jpg',
          name: 'Juanita Bell',
          designation: 'Professional Front-end Developer',
          students: 585,
          courses: 5,
          review: 52,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-bootstrap.jpg',
      title: 'Customization Bootstrap 5 Components Accordion',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 1 hour 30 minutes',
      rating: 4.5,
      category: 'Bootstrap',
      level: 'Intermediate',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 17,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-17-100x100.jpg',
          name: 'Ross Johnson',
          designation: 'Engineering Architect',
          students: 6,
          courses: 1,
          review: 4,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-bootstrap.jpg',
      title: 'Preparing a site to go live with Gatsby Server',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 2 hours 30 minutes',
      rating: 4.8,
      category: 'Bootstrap',
      level: 'Intermediate',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 18,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1-100x100.jpg',
          name: 'Morris Mccoy',
          designation: 'Front-end Developer, Designerr',
          students: 1191,
          courses: 7,
          review: 103,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-bootstrap.jpg',
      title: 'Bootstrap 5 tutorial – Learn Bootstrap by Building a',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 3 hours 56 minutes',
      rating: 4.6,
      category: 'Bootstrap',
      level: 'Expert',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 19,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-2-100x100.jpg',
          name: 'Ted Hawkins',
          designation: '',
          students: 540,
          courses: 6,
          review: 66,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-bootstrap.jpg',
      title: 'How to Build Admin Dashboard Bootstrap 5',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 2 hours 46 minutes',
      rating: 3.7,
      category: 'Bootstrap',
      level: 'Expert',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 20,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-9-100x100.jpg',
          name: 'Maria Pinto',
          designation: 'Front-end Developer, Designer',
          students: 23,
          courses: 1,
          review: 6,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-bootstrap.jpg',
      title: 'Advance Bootstrap SCSS Theme Customization',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 1 hour 30 minutes',
      rating: 4.5,
      category: 'Bootstrap',
      level: 'Expert',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 21,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-11-100x100.jpg',
          name: 'Wade Warren',
          designation: 'Web Developer',
          students: 23,
          courses: 1,
          review: 6,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-bootstrap.jpg',
      title: 'How to Build Custom Bootstrap Theme',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 2 hours 30 minutes',
      rating: 4.7,
      category: 'Bootstrap',
      level: 'Expert',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 22,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1-100x100.jpg',
          name: 'Morris Mccoy',
          designation: 'Front-end Developer, Designerr',
          students: 1191,
          courses: 7,
          review: 103,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-javascript.jpg',
      title: 'Creating a Custom Event in Javascript',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 3 hours 56 minutes',
      rating: 4.4,
      category: 'Javascript',
      level: 'Beginner',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 23,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-2-100x100.jpg',
          name: 'Ted Hawkins',
          designation: '',
          students: 540,
          courses: 6,
          review: 66,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-javascript.jpg',
      title: 'Modern JavaScript Beginner Tutorial – Simple',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 2 hours 46 minutes',
      rating: 4.5,
      category: 'Javascript',
      level: 'Expert',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 24,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-3-100x100.jpg',
          name: 'Juanita Bell',
          designation: 'Professional Front-end Developer',
          students: 585,
          courses: 5,
          review: 52,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-javascript.jpg',
      title: 'Applying JavaScript and using the console.',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 1 hour 30 minutes',
      rating: 4.6,
      category: 'Javascript',
      level: 'Beginner',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 25,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-5-100x100.jpg',
          name: 'Claire Robertson',
          designation: 'Designer',
          students: 398,
          courses: 5,
          review: 47,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-javascript.jpg',
      title: 'Creating functions, using them, passing data in and out.',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 2 hours 30 minutes',
      rating: 4.5,
      category: 'Javascript',
      level: 'Intermediate',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 26,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-1-100x100.jpg',
          name: 'Morris Mccoy',
          designation: 'Front-end Developer, Designerr',
          students: 1191,
          courses: 7,
          review: 103,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-javascript.jpg',
      title: 'Creating a Custom Event in Javascript',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 3 hours 56 minutes',
      rating: 4.3,
      category: 'Javascript',
      level: 'Beginner',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
    {
      id: 27,
      instructor: [
        {
          avatar:
            'https://geeks.madrasthemes.com/wp-content/uploads/2021/09/avatar-14-100x100.jpg',
          name: 'Lorin Gupta',
          designation: 'Front-end Developer, Designerr',
          students: 1191,
          courses: 1,
          review: 103,
        },
      ],
      img: 'https://geeks.madrasthemes.com/wp-content/uploads/2022/11/2-wordpress-a-1536x1017.jpg',
      title: 'WordPress Grundkurs',
      description:
        'JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.',
      enrolled: 87,
      time: ' 4 hours',
      rating: 5.0,
      category: 'WordPress',
      level: 'Expert',
      sections: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'Introduction to Course', time: '6h 18m 38s' },
            { title: 'Downloading Necessary Software', time: '6h 18m 38s' },
            { title: 'Where to Find Project Files', time: '6h 18m 38s' },
          ],
          open: true,
        },
        {
          title: 'CSS Introduction',
          lessons: [
            { title: 'What is CSS?', time: '6h 18m 38s' },
            {
              title: 'Creating & Linking a CSS Stylesheet',
              time: '6h 18m 38s',
            },
            { title: 'How to Test a Stylesheet', time: '1m 8s' },
          ],
          open: false,
        },
        {
          title: 'Selectors & Properties',
          lessons: [
            { title: 'What is a Selector?', time: '6h 18m 38s' },
            { title: 'Classes & ID’s in HTML', time: '5m 59s' },
            { title: 'Specificity & When to use Selectors', time: '5m' },
            { title: 'Pseudo selectors', time: '8m 43s' },
          ],
          open: false,
        },
        {
          title: 'Coloring & Formatting',
          lessons: [
            { title: 'Types of Colors', time: '7m 14s' },
            { title: 'Coloring Text', time: '6h 18m 38s' },
            { title: 'Background Colors', time: '6h 18m 38s' },
            { title: 'Images/URL’s in CSS', time: '5m 32s' },
          ],
          open: false,
        },
        {
          title: 'Fonts & Text Manipulation',
          lessons: [
            { title: 'Introduction to Types of Units', time: '3m 59s' },
            { title: 'Text Manipulation', time: '6h 18m 38s' },
            { title: 'Font Size, Bolding & Style', time: '6m 37s' },
            { title: 'Font Families', time: '6m 37s' },
          ],
          open: false,
        },
        {
          title: 'Layout',
          lessons: [
            { title: 'The CSS Box Model', time: '9m 59s' },
            { title: 'Changing Content Size', time: '4m 55s' },
            { title: 'CSS Borders', time: '55m' },
          ],
          open: false,
        },
        {
          title: 'CSS Flexbox',
          lessons: [
            { title: 'What is Flexbox?', time: '6m 5s' },
            { title: 'Creating a Flex Container', time: '5m 6s' },
            { title: 'Flex Direction & Wrap', time: '4m 15s' },
            { title: 'Content Alignment', time: '6m 17s' },
          ],
          open: false,
        },
        {
          title: 'CSS Grid',
          lessons: [
            { title: 'Grid vs Flexbox', time: '2m 55s' },
            { title: 'Creating a Grid', time: '2m 55s' },
            { title: 'Template Columns & Rows', time: '44m 55s' },
          ],
          open: false,
        },
        {
          title: 'Animations & Transitions',
          lessons: [
            { title: 'The Transition Property', time: '2m 55s' },
            { title: 'Transformation Functions', time: '55m 59s' },
            { title: 'Creating Animations w/ Keyframes', time: '8m 3s' },
            { title: 'Adding an Animation', time: '4m 55s' },
          ],
          open: false,
        },
        {
          title: 'Final Exam & Challenge',
          lessons: [
            { title: 'Website Transformation Challenge', time: '6h 18m 38s' },
            { title: 'Website Transformation: SOLUTION', time: '6m 59s' },
            { title: 'What to Learn Next', time: '6m 55s' },
          ],
          open: false,
        },
      ],
        videos: [
        {
          title: 'Introduction to Course',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Downloading Necessary Software',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        {
          title: 'Where to Find Project Files',
          url: 'assets/videos/course1.mp4',
          time:"10 mints",
          watched: false,
        },
        // ... other videos
      ],
      fullDescription: `If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript. First, you’ll discover the types of applications that can be built with JavaScript, and the platforms they’ll run on.
      
      Next, you’ll explore the basics of the language, giving plenty of examples. Lastly, you’ll put your JavaScript knowledge to work and modify a modern, responsive web page. When you’re finished with this course, you’ll have the skills and knowledge in JavaScript to create simple programs, create simple web applications, and modify web pages.`,
    },
  ];

  constructor() {}

  getCourses() {
    return this.courses;
  }

  getCourse(id: number) {
    return this.courses.find((course) => course.id === id);
  }
  
  getCoursesByInstructor(instructorName: string): Observable<CourseProps[]> {
    const filteredCourses = this.courses.filter(course => 
      course.instructor.some(instructor => instructor.name === instructorName)
    );
    return of(filteredCourses);
  }
} 
