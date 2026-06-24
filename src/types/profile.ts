// Shared interfaces for the profile data layer.
// Every component consumes these — no inline string literals in components.

export interface Link {
  label: string;
  /** href: mailto:, tel:, or https:// */
  href: string;
  /** short text shown to the user, e.g. the email or handle */
  display: string;
  kind: 'email' | 'phone' | 'github' | 'linkedin' | 'web';
}

export interface Role {
  title: string;
  /** human-readable range, e.g. "Apr 2024 – Present" */
  period: string;
  /** machine date for the <time> element (start of role) */
  start: string;
}

/** One workplace; may hold multiple roles held there over time. */
export interface Experience {
  company: string;
  location: string;
  roles: Role[];
  /** what the work involved across the workplace */
  summary: string;
  /** skills used across the workplace */
  skills: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  note?: string;
}

export interface Project {
  name: string;
  period: string;
  /** tech stack tags */
  stack: string[];
  description: string;
  href?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Award {
  title: string;
  period: string;
  description: string;
}

export interface Profile {
  name: string;
  headline: string;
  location: string;
  about: string;
  /** path to the downloadable resume in /public */
  resumeUrl: string;
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
  projects: Project[];
  awards: Award[];
  links: Link[];
}
