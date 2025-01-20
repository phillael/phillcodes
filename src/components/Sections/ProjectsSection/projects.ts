export interface Project {
  title: string
  description: string
  image: string
  imageAlt: string
  link: string
  techStack: string[]
  dateRange: string
}

export const projects: Project[] = [
  {
    title: 'TimelyCare',
    description:
      'TimelyCare is a comprehensive healthcare platform serving colleges and universities nationwide, providing virtual health services to students, faculty, and staff. As a fullstack developer, I contribute to the development and maintenance of four web and mobile applications, implementing features across the entire stack and ensuring seamless integration between frontend and backend systems.',
    image: '',
    imageAlt: 'Pine Medical platform screenshot',
    link: 'https://timelycare.com/',
    dateRange: '2023 - Present',
    techStack: [
      'TYPESCRIPT',
      'REACT',
      'REACT NATIVE',
      'NODE',
      'MongoDB',
      'MySQL',
    ],
  },
  {
    title: 'Sessions',
    description:
      'Sessions was a live streaming platform for musicians, with over 130k artists and 1.7m fans. I helped build the login and password reset flow, and implemented a new user onboarding flow. I worked on a large backlog of mobile bug fixes and improvements.',
    image: '',
    imageAlt: 'Sessions platform screenshot',
    link: 'https://sessions.com',
    dateRange: '2019 - 2022',
    techStack: ['TYPESCRIPT', 'REACT', 'REACT NATIVE', 'Tailwind', 'Chakra UI'],
  },
  {
    title: 'Next Music',
    description:
      'Next Music was a dashboard for artists to access all of the offerings of Next: track followers, manage a crew (think patreon), configure social links (linktree), etc. I was involved with early decisions on the tech stack & patterns, led a squad of 4 engineers, implemented features, and maintained 100% code coverage.',
    image: '',
    imageAlt: 'Next Music dashboard screenshot',
    link: 'https://next.com',
    dateRange: 'Oct - Dec 2022',
    techStack: ['TYPESCRIPT', 'REACT', 'NEXTJS', 'CHAKRA UI'],
  },
  {
    title: 'phillcodes.com',
    description:
      'This portfolio site was designed and built from scratch by me using some of my favorite tools. It features smooth animations, 3D elements, and a clean, modern design. The site showcases my projects and skills while demonstrating best practices in web development.',
    image: '',
    imageAlt: 'phillcodes.com portfolio website screenshot',
    link: 'https://phillcodes.com',
    dateRange: '2024 - 2025',
    techStack: ['TYPESCRIPT', 'NEXTJS', 'FRAMER MOTION', 'THREE.JS', 'VERCEL'],
  },
]
