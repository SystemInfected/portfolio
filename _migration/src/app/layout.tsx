import type { Metadata } from 'next'
import { Oswald, Raleway } from 'next/font/google'
import '../styles/Main.scss'

const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })

export const metadata: Metadata = {
	title:
		"Full-Stack Software Developer, Graphic Designer & Web Developer based in Stockholm, Sweden - Sebastian Widin's portfolio",
	description:
		"I am a Graphic Designer, Web Developer & Full-Stack Software Developer from Stockholm, Sweden. I ❤️ to build & design stuff. If it's too easy it's boring 😄 🤙",
	metadataBase: new URL('https://sebastianwidin.se'),
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
	verification: {
		other: {
			['fb:admins']: '100041376167594',
		},
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<meta charSet='utf-8' />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover'
			/>
			<body className={`${oswald.variable} ${raleway.variable}`}>
				{children}
			</body>
		</html>
	)
}
