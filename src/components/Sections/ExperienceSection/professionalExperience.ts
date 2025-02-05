type ProfessionalExpereince = {
  dateRange: string
  title: string
  company: string
  bulletPoints: string[]
  techStack: string[]
}

export const professionalExperience: ProfessionalExpereince[] = [
  {
    dateRange: 'FEB 2023 - PRESENT',
    title: 'Software Engineer',
    company: 'TimelyCare',
    bulletPoints: [
      'Architect and engineer full-stack solutions with ReactJS, React Native, Typescript, NodeJS, AWS, Microservices/APIs.',
      'Implemented unit and integration tests, reducing post-release bugs by 50%.',
      'Achieved perfect VPAT accessibility score, setting benchmark for the most accessible telehealth software in the industry.',
    ],
    techStack: [
      'React',
      'React Native',
      'TypeScript',
      'Tailwind',
      'TanStack Query',
      'NodeJS',
      'MongoDB',
      'PACT/Detox/Jest',
      'Accessibility',
      'AWS',
      'Docker',
      'CI/CD',
      'BDD',
    ],
  },
  {
    dateRange: 'JUL 2022 - DEC 2022',
    title: 'Software Engineer',
    company: 'Sessions',
    bulletPoints: [
      'Built and maintained component library with React, React Native, Typescript, MobX State Tree, Tailwind.',
      'Wrote unit and integration tests with Jest and React Testing Library.',
      'Collaborated with backend engineers to architect/build solutions with NodeJS, APIs, Microservices, AWS.',
    ],
    techStack: [
      'React',
      'React Native',
      'TypeScript',
      'Tailwind',
      'MobX State Tree',
      'StoryBook',
      'Jest',
      'NodeJS',
    ],
  },
  {
    dateRange: 'MAR 2021 - JUL 2022',
    title: 'Front End Developer',
    company: 'Designit/Microsoft',
    bulletPoints: [
      'Built and maintained critical Azure product pages during 50% YoY growth, contributing to $60B+ annual intelligent cloud revenue.',
      'Rapidly gained proficiency in C#, ASP.NET MVC, and CSHTML, expediting delivery of crucial backend-integrated features.',
    ],
    techStack: ['C#', '.NET', 'HTML', 'CSS', 'JavaScript', 'Git', 'Figma'],
  },
  {
    dateRange: 'DEC 2018 - DEC 2020',
    title: 'Freelance Developer',
    company: 'www.phillcodes.com',
    bulletPoints: [
      'Developed diverse web applications, focusing on modern technologies like TypeScript, React, Redux, Tailwind, and Next.js.',
      'Implemented CI/CD pipelines on AWS, improving deployment speed/reliability while ensuring scalability and performance.',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Tailwind',
      'NextJS',
      'Vercel',
      'AWS',
      'HTML Canvas',
    ],
  },
] as const
