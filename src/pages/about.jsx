import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { CldImage } from "next-cloudinary"

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Xinyi Chen</title>
        <meta
          name="description"
          content="I’m Xinyi Chen. I live in London, where I pursue new challenges."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <CldImage
                src={"portraitxinyi_oelay0"}
                alt=""
                width="2000"
                height="2000"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
                 {/*1:1;*/}
                 {/*object-cover: image cover the entire container */}
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2"> {/*
            large: width >= 1024px; move this element (the box for title) to the first;
            when large, 2 rows: title and paragraphs. */}
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Xinyi Chen. I live in London, where I pursue new challenges.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400"> {/*
              margin at the top of 6;
              vertical space between children (paragraphs) of the value of 7 in tailwind css (28px) ;
              font size to base size, ie 1 rem = 16px ;
              when in dark mode, text color change to zinc-400 */}
              <p>
                My career began in the intersection of arts, culture, and media,
                but my journey has led me to appreciate the transformative power of technology and data.
              </p>
              <p>
                After graduating from University of Edinburgh— by the time I had studied literature and arts for
                6 years across 3 countries with 2 degrees— I decided not to develop a career in academia; instead, I
                sought to apply my expertise in arts, culture, and media practically by joining
                CityMusic Promotions initially as a Concert Assistant, a role that involved repetitive, time-consuming tasks.
              </p>
              <p>
                To improve efficiency, I started to teach myself programming.
                I quickly applied my newfound skills to develop a suite of web automation tools using Selenium. It used
                to take 5 days to entry data manually, but now it only took a click and 5 minutes to finish. I also
                created a Python program with SQLite3, Pandas, and Streamlit, to streamline concerts sales reporting
                and data collection. These tools were soon adopted by other team members and impressed my boss who asked
                for more surprises (more features).


              </p>
              <p>
                This experience unexpectedly has ignited my passion in technology and more importantly, I found that I
                enjoy coding. I enjoy coming up creative solutions and harnessing technology to
                achieve what we have never imagined.
              </p>
              <p>

              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/*<SocialLink href="#" icon={TwitterIcon}>*/}
              {/*  Follow on Twitter*/}
              {/*</SocialLink>*/}
              {/*<SocialLink href="#" icon={InstagramIcon} className="mt-4">*/}
              {/*  Follow on Instagram*/}
              {/*</SocialLink>*/}
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:xinyic2022@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                xinyic2022@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
