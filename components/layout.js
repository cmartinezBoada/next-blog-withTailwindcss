import Head from 'next/head';
import Image from 'next/image';
//import styles from './layout.module.css';
//import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Cecilia';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
	<div className='mx-auto w-1/2 ' >
	  <Head>
		<link rel="icon" href="/favicon.ico" />
		<meta
		  name="description"
		  content="Learn how to build a personal website using Next.js"
		/>
		<meta
		  property="og:image"
		  content={`https://og-image.vercel.app/${encodeURI(
			siteTitle,
		  )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
		/>
		<meta name="og:title" content={siteTitle} />
		<meta name="twitter:card" content="summary_large_image" />
	  </Head>
	  <header className="">
		{home ? (
		  <>
		  	<div className="flex mt-8 justify-center">
			  <div className="w-[144px] h-[144px] rounded-full overflow-hidden">
			<Image
			  priority
			  src="/images/profile.jpg"
			  height={144}
			  width={144}
			  alt={name}
			/>
			  </div>
			  </div>
			<h1 className="text-4xl text-center mt-8 font-bold text-gray-800">{name}</h1>
		  </>
		) : (
		  <>
			<Link href="/">
			  <a>
			  	<div className="flex mt-8 justify-center">
				  <div className="w-[108px] h-[108px] rounded-full overflow-hidden">
				<Image
				  priority
				  src="/images/profile.jpg"
				  height={108}
				  width={108}
				  alt={name}
				/>
				  </div>
				  </div>
			  </a>
			</Link>
			<h2 >
			  <Link href="/">
				<a >{name}</a>
			  </Link>
			</h2>
		  </>
		)}
	  </header>
	  <main>{children}</main>
	  {!home && (
		<div>
		  <Link href="/">
			<a>← Back to home</a>
		  </Link>
		</div>
	  )}
	</div>
  );
}