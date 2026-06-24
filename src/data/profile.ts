import type { Profile } from '../types/profile';

// Single source of truth, derived from Chayapol Bunnag's CV and LinkedIn
// (LinkedIn is the more up-to-date source). Inferences are marked below.
export const profile: Profile = {
  name: 'Chayapol Bunnag',
  // LinkedIn headline is the playful "A certain Computer Scientist"; using the
  // current role for clarity on a portfolio.
  headline: 'Software Engineer',
  location: 'Bangkok, Thailand',
  resumeUrl: '/chayapol-bunnag-cv.pdf',
  about:
    'Software Engineer at Certu Systems and Computer Science graduate from Mahidol University. I work across the stack — from Go backends and mobile apps to Kubernetes, CI/CD, and end-to-end test automation. I enjoy building scalable systems, breaking down hard problems, and teaching what I learn along the way.',

  experience: [
    {
      company: 'Certu Systems',
      location: 'Bangkok, Thailand',
      summary:
        'Building products for Certu Systems’ logistics SaaS platform across mobile and backend — Go services and mobile application development — working with an engineering team that spans Asia and the Americas.',
      skills: ['Go', 'TypeScript', 'Mobile App Development'],
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
        'Brought Blendata Enterprise up on a Helm chart and built CI/CD pipelines on Jenkins.',
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
        'Designed and implemented the messaging feature of the app, streaming data to and from Firebase in real time.',
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
        'TA for Intro to Computer Programming, Data Structures, System Skills & Low-Level Programming, Computer Systems & Architecture, and Functional & Parallel Programming.',
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
      // Inference: CV prints "C, C++, C" — the third is read as C# (consistent
      // with the Unity / C# project below).
      items: ['Go', 'C', 'C++', 'C#', 'Java', 'Python', 'Rust', 'Scala', 'Dart', 'JavaScript', 'TypeScript', 'SQL', 'NoSQL'],
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
      name: 'Circle OpenChat',
      period: 'Jul 2022',
      stack: ['Rust'],
      description:
        'A take on "Line OpenChat" implemented in Rust to exploit parallelism in the backend.',
      href: 'https://github.com/danamestrial/rust-chatserver',
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
    { label: 'Phone', href: 'tel:+66917510606', display: '+66 (0)9-1751-0606', kind: 'phone' },
    { label: 'GitHub', href: 'https://github.com/danamestrial', display: 'github.com/danamestrial', kind: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/chayapol-bunnag', display: 'linkedin.com/in/chayapol-bunnag', kind: 'linkedin' },
  ],
};
