import { personalInfo } from '../data/personal'

export const siteConfig = {
  siteTitle: `${personalInfo.name} | ${personalInfo.role}`,
  siteDescription:
    'Portfolio of Phan Thiet Trung, a frontend and mobile developer building modern, responsive web and mobile experiences.',
  brandName: 'Trung.dev',
  author: personalInfo.name,
  social: {
    github: personalInfo.socialLinks.github,
    linkedin: personalInfo.socialLinks.linkedin,
    twitter: personalInfo.socialLinks.twitter,
  },
}

