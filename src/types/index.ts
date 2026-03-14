export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
  repo?: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string[]
}
