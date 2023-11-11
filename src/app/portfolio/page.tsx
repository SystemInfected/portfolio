import fs from 'fs'
import matter from 'gray-matter'
import { Metadata } from 'next'
import Link from 'next/link'
import path from 'path'

import NavBar from '@/components/NavBar'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import SectionHeader from '@/components/SectionHeader'
import styles from '@/styles/Portfolio/Portfolio.module.scss'

export const metadata: Metadata = {
  title:
    "My Portfolio | Full-Stack Software Developer, Graphic Designer & Web Developer based in Stockholm, Sweden - Sebastian Widin's portfolio",
  description:
    "I am a Graphic Designer, Web Developer & Full-Stack Software Developer from Stockholm, Sweden. This is a selection of projects I'm proud of 😊",
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    siteName: 'SebastianWidin.se',
    title:
      "My Portfolio | Full-Stack Software Developer, Graphic Designer & Web Developer based in Stockholm, Sweden - Sebastian Widin's portfolio",
    description:
      "I am a Graphic Designer, Web Developer & Full-Stack Software Developer from Stockholm, Sweden. This is a selection of projects I'm proud of 😊",
    images: '/images/og_header.jpg',
    type: 'website',
  },
}

export interface PortfolioDataProps {
  order: number
  title: string
  slug: string
  url: string | null
  source: string | null
  responsibilities: string
  tags: string
  tech: string
  images: [string]
}

const getStaticProps = async () => {
  const filesDirectory = path.join(process.cwd(), 'src/app/data/portfolio')
  const files = fs.readdirSync(filesDirectory)
  const parsedData: PortfolioDataProps[] = await Promise.all(
    files.map((file) => {
      const markdownWithMetadata = fs
        .readFileSync(path.join(filesDirectory, `${file}`))
        .toString()
      const parsedMarkdown = matter(markdownWithMetadata)
      return parsedMarkdown.data as PortfolioDataProps
    })
  )

  return parsedData
}

const Portfolio = async () => {
  const data: PortfolioDataProps[] = await getStaticProps()
  return (
    <>
      <NavBar locked startpage={false} />
      <section className={styles.section}>
        <div className={styles.portfolioGridSection}>
          <SectionHeader>Selected projects</SectionHeader>
          <div className={styles.portfolioGrid}>
            {data.map((d) => (
              <Link href={`/portfolio/${d.slug}`} key={`post-${d.slug}`}>
                <PortfolioCard data={d} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
