import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'
import { Metadata, ResolvingMetadata } from 'next'
import path from 'path'

import NavBar from '@/components/NavBar'
import Content from '@/components/Portfolio/Content'
import Header from '@/components/Portfolio/Header'
import { PortfolioDataProps } from '../page'

const renderDescription = (input: string, length: number) => {
  const strippedInput = input.replace(/<\/?[^>]+(>|$)/g, '')
  return strippedInput.length > length
    ? `${strippedInput.substring(0, length)}...`
    : strippedInput
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const filesDirectory = path.join(process.cwd(), 'src/app/data/portfolio')
  const markdownWithMetadata = fs
    .readFileSync(path.join(filesDirectory, `${params.portfolio}.md`))
    .toString()

  const parsedMarkdown = matter(markdownWithMetadata)

  const htmlString = marked(parsedMarkdown.content)

  return {
    title: `${parsedMarkdown.data.title} - A project by Sebastian Widin | Full-Stack Software Developer, Graphic Designer & Web Developer based in Stockholm, Sweden`,
    description: `${parsedMarkdown.data.title} - ${renderDescription(
      htmlString,
      140
    )}`,
    alternates: {
      canonical: '/portfolio/URL',
    },
    openGraph: {
      siteName: 'SebastianWidin.se',
      title: `${parsedMarkdown.data.title} - A project by Sebastian Widin | Full-Stack Software Developer, Graphic Designer & Web Developer based in Stockholm, Sweden`,
      description: `${parsedMarkdown.data.title} - ${renderDescription(
        htmlString,
        140
      )}`,
      images: '/images/og_header.jpg',
      type: 'website',
    },
  }
}

interface DetailedPortfolioProps {
  htmlString: string
  data: PortfolioDataProps
}

export const dynamicParams = true

export async function generateStaticParams() {
  const filesDirectory = path.join(process.cwd(), 'src/app/data/portfolio')
  const files = fs.readdirSync(filesDirectory)
  const paths = files.map((filename) => ({
    params: {
      portfolio: filename.replace('.md', ''),
    },
  }))

  return paths
}

const getStaticProps = async (
  slug: string
): Promise<DetailedPortfolioProps> => {
  const filesDirectory = path.join(process.cwd(), 'src/app/data/portfolio')
  const markdownWithMetadata = fs
    .readFileSync(path.join(filesDirectory, `${slug}.md`))
    .toString()

  const parsedMarkdown = matter(markdownWithMetadata)

  const htmlString = marked(parsedMarkdown.content)

  return {
    htmlString,
    data: parsedMarkdown.data,
  } as DetailedPortfolioProps
}

const PortfolioPage = async ({ params }: any) => {
  const portfolioData: DetailedPortfolioProps = await getStaticProps(
    params.portfolio
  )
  const { data, htmlString } = portfolioData

  return (
    <>
      <NavBar locked startpage={false} />
      <Header
        title={data.title}
        responsibilities={data.responsibilities}
        tags={data.tags}
        images={data.images}
      />
      <Content
        content={htmlString}
        title={data.title}
        tech={data.tech}
        url={data.url}
        source={data.source}
      />
    </>
  )
}

export default PortfolioPage
