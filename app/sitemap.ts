import { MetadataRoute } from 'next'
import { projects, skillsData } from './data'

export default function sitemap(): MetadataRoute.Sitemap {
  // Once she has a custom domain, replace this with 'https://angellatendo.com'
  const baseUrl = 'https://angella-portfolio.vercel.app' 

  // 1. Static pages
  const routes = [
    '',
    '/contact',
    '/quote',
    '/privacy',
    '/terms',
    '/cookies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. Dynamic Project pages
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // 3. Dynamic Skill pages
  const skillRoutes = skillsData.map((skill) => ({
    url: `${baseUrl}/skills/${skill.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...projectRoutes, ...skillRoutes]
}