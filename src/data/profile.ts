import type { Profile } from '../types/profile';

// Single source of truth, derived from Chayapol Bunnag's CV and LinkedIn
// (LinkedIn is the more up-to-date source). Inferences are marked below.
export const profile: Profile = {
  name: 'Chayapol Bunnag',
  // LinkedIn headline is the playful "A certain Computer Scientist"; using the
  // current role for clarity on a portfolio.
  headline: 'Software Engineer',
  tagline: 'Go backends, mobile apps & Kubernetes',
  location: 'Bangkok, Thailand',
  resumeUrl: '/chayapol-bunnag-cv.pdf',
  about:
    'I build logistics software at Certu Systems in Bangkok — Go services on the backend, the mobile app up front. Before that I packaged a big-data platform for Kubernetes, built CI/CD pipelines, wrote end-to-end test suites, and spent three years as a teaching assistant across five computer science courses at Mahidol University. I like scalable systems, hard problems broken down properly, and teaching what I learn along the way.',

  experience: [
    {
      company: 'Certu Systems',
      location: 'Bangkok, Thailand',
      summary:
        'Ship features across the mobile app and the Go backend services of a logistics SaaS platform, working day to day with an engineering team spread across Asia and the Americas.',
      skills: ['Go', 'TypeScript', 'Mobile App Development', 'CI/CD'],
      roles: [
        {
          title: 'Software Engineer',
          period: 'Nov 2025 – Present',
          start: '2025-11',
        },
        {
          title: 'Junior Software Engineer',
          period: 'Sep 2024 – Nov 2025',
          start: '2024-09',
        },
      ],
    },
    {
      company: 'Blendata',
      location: 'Bangkok, Thailand',
      summary:
        'Packaged Blendata Enterprise, a big-data platform, into a Helm chart for repeatable Kubernetes deployments, and built the Jenkins CI/CD pipelines around it.',
      skills: ['Jenkins', 'Kubernetes', 'Helm', 'Linux'],
      roles: [
        {
          // CV listed this as "System Engineer (Intern), Ongoing"; LinkedIn shows
          // the title was DevOps Engineer and the internship ended Aug 2024.
          title: 'DevOps Engineer (Intern)',
          period: 'Apr 2024 – Aug 2024',
          start: '2024-04',
        },
      ],
    },
    {
      company: 'Astro Innovation',
      location: 'Remote',
      summary:
        'Designed and built the app’s real-time messaging feature end to end, streaming data to and from Firebase.',
      skills: ['Flutter', 'Dart', 'Firebase'],
      roles: [
        {
          title: 'Developer',
          period: 'Sep 2023 – Apr 2024',
          start: '2023-09',
        },
      ],
    },
    {
      company: 'The Gang Technology Co., Ltd.',
      location: 'Bangkok, Thailand',
      summary:
        'Wrote end-to-end tests across multiple projects with Playwright, using type-annotated JavaScript and TypeScript.',
      skills: ['Playwright', 'TypeScript'],
      roles: [
        {
          title: 'Software QA Tester',
          period: 'Aug 2022 – Jun 2023',
          start: '2022-08',
        },
      ],
    },
    {
      company: 'Mahidol University International College',
      location: 'Salaya, Thailand',
      summary:
        'Taught and mentored students across five courses over three years: Intro to Computer Programming, Data Structures, System Skills & Low-Level Programming, Computer Systems & Architecture, and Functional & Parallel Programming.',
      skills: ['C', 'C++', 'Java', 'Scala', 'Rust', 'Python', 'Bash', 'Linux', 'Mentoring'],
      roles: [
        {
          title: 'Teaching Assistant',
          period: 'Sep 2021 – Apr 2024',
          start: '2021-09',
        },
      ],
    },
  ],

  education: [
    {
      institution: 'Mahidol University International College',
      location: 'Salaya, Thailand',
      degree: 'Bachelor of Science in Computer Science',
      period: '2020 – 2024',
    },
    {
      institution: 'Singapore International School of Bangkok',
      location: 'Bangkok, Thailand',
      degree: 'Information Technology',
      period: '2011 – 2020',
    },
  ],

  skills: [
    {
      category: 'Languages',
      // Trimmed to the interview-ready set; the long tail (C, C#, Java, Scala…)
      // still shows in the experience/project entries where it was actually used.
      items: ['Go', 'TypeScript', 'JavaScript', 'Dart', 'Python', 'C++', 'Rust', 'SQL'],
    },
    {
      category: 'Frameworks',
      items: ['Vue.js', 'Flask', 'Spring Boot', 'Flutter', 'Socket.IO', 'Playwright', 'Unity'],
    },
    {
      category: 'Tools & Infra',
      items: ['Docker', 'Kubernetes', 'Helm', 'Jenkins', 'Redis', 'RabbitMQ', 'Redpanda', 'MySQL / MariaDB', 'Firebase'],
    },
    {
      category: 'Languages (spoken)',
      items: ['English', 'Thai'],
    },
  ],

  projects: [
    {
      name: 'chayapolb.me',
      period: 'Jun 2026',
      stack: ['Astro', 'Tailwind CSS', 'TypeScript'],
      description:
        'This site. A single-page portfolio where all content lives in one typed data file — components render props, nothing hardcoded. Ships as pure static HTML with zero client-side framework, with build-time repo status in the footer.',
      href: 'https://github.com/danamestrial/bio',
    },
    {
      name: 'Zombie Quest',
      period: 'Mar 2024',
      stack: ['Unity', 'C#'],
      description:
        'A 2D take on "Escape from Tarkov": enter the raid to fight zombies, loot and sell goods, and advance to find the ultimate cure. Inventory, tutorial, HP, loot drop, map generation, shop, multi-weapon and save/load systems.',
      href: 'https://play.unity.com/mg/other/webgl-builds-393039',
    },
    {
      name: 'MIPS Visualiser',
      period: 'Nov 2023',
      stack: ['C++', 'ImGui', 'Emscripten'],
      description:
        'A tool that visualises the 5-stage MIPS pipeline. Toggle data forwarding, observe per-instruction data flow, inspect instructions in memory, and step forward or backward through cycles. Built to a static web page with Emscripten for GitHub Pages.',
      href: 'https://github.com/d-a-y-dev/mips-visualiser',
    },
    {
      name: 'Toktik',
      period: 'Oct 2023',
      stack: ['Vue', 'FastAPI', 'Docker', 'Kubernetes', 'RabbitMQ', 'S3', 'WebSocket'],
      description:
        'A TikTok-style social app built on a microservices architecture for scalability and fault isolation. Vue frontend, FastAPI backend, S3 storage, RabbitMQ as the broker for video processing, orchestrated on Kubernetes.',
      href: 'https://github.com/polpon',
    },
    {
      name: 'Xpress Ready',
      period: 'Apr 2023',
      stack: ['Flutter', 'Firebase'],
      description:
        'A mobile app helping drivers respond to unexpected road accidents — guidance for the moments when people panic and are unsure how to react.',
      href: 'https://github.com/danamestrial/xpressready',
    },
    {
      name: 'Circle OpenChat',
      period: 'Jul 2022',
      stack: ['Rust'],
      description:
        'A take on "Line OpenChat" implemented in Rust to exploit parallelism in the backend.',
      href: 'https://github.com/danamestrial/rust-chatserver',
    },
    {
      name: 'Spot the Difference',
      period: 'Apr 2022',
      stack: ['Python'],
      description:
        'Finds differences between two images using several methods, bundled with an image slicer, an aligner, and a UI for ease of use.',
      href: 'https://github.com/danamestrial/spot-the-difference',
    },
  ],

  awards: [
    {
      title: 'Best Statement of Purpose — NUS–PSU Research Workshop',
      period: 'Oct 2022',
      description:
        '"How light could improve a CPU\'s performance" — 2nd International Research Workshop in CS & IS, hosted jointly by NUS and PSU.',
    },
    {
      title: 'Computer Science Representative — MUIC Open House',
      period: '2021 – 2024',
      description:
        'Helped prospective students explore whether Computer Science was the right path for them.',
    },
  ],

  links: [
    { label: 'Email', href: 'mailto:chayapolbun@gmail.com', display: 'chayapolbun@gmail.com', kind: 'email' },
    { label: 'GitHub', href: 'https://github.com/danamestrial', display: 'github.com/danamestrial', kind: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/chayapol-bunnag', display: 'linkedin.com/in/chayapol-bunnag', kind: 'linkedin' },
  ],
};
