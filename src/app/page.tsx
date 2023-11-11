import { Metadata } from 'next'

import SkillsAbout from '@/components/About/SkillsAbout'
import Featured from '@/components/Featured/Featured'
import Hero from '@/components/Hero/Hero'
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
  title:
    "Full-Stack Software Developer, Graphic Designer & Web Developer based in Stockholm, Sweden - Sebastian Widin's portfolio",
  description:
    "I am a Graphic Designer, Web Developer & Full-Stack Software Developer from Stockholm, Sweden. I ❤️ to build & design stuff. If it's too easy it's boring 😄 🤙",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'SebastianWidin.se',
    title:
      "Full-Stack Software Developer, Graphic Designer & Web Developer based in Stockholm, Sweden - Sebastian Widin's portfolio",
    description:
      "I am a Graphic Designer, Web Developer & Full-Stack Software Developer from Stockholm, Sweden. I ❤️ to build & design stuff. If it's too easy it's boring 😄 🤙",
    images: '/images/og_header.jpg',
    type: 'website',
  },
}

const Home = () => {
  return (
    <>
      <Hero />
      <NavBar locked={false} startpage />
      <Featured />
      <SkillsAbout />
    </>
  )
}

export default Home
