import Head from 'next/head'
import { CldImage } from 'next-cloudinary';

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const sites = [
  {
    name: 'Facebook Events',
    logo: 'facebook_gmnzcu',
  },
  {
    name: 'Eventbrite',
    logo: "eventbrite_nhxcu5",
  },
  {
    name: 'See Tickets',
    logo: "seetickets_xpwotb",
  },
  {
    name: 'Ticket Source',
    logo: "ticketsource_ktd2b9",
  },
  {
    name: 'Eventim',
    logo: "eventim_vleyn8",
  },
  {
    name: 'Fixr',
    logo: "fixr_ssy0ra",
  },
  {
    name: 'Skiddle',
    logo: "skiddle_xoicae",
  },
  {
    name: 'Ents24',
    logo: "ents24_djgyhb",
  },
    {
    name: 'Evvnt',
    logo: "evvnt_giyzue",
  },
  {
    name: 'AllEvents',
    logo: "allevents_ygrw5o",
  },
  {
    name: 'Meetup',
    logo: "meetup_g6ay5j",
  },
  {
    name: 'Eventcube',
    logo: "eventcube_ffspqg",
  },
]


export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Xinyi Chen</title>
        <meta
          name="description"
          content="Software solutions for maximizing the exposure of events"
        />
      </Head>
      <SimpleLayout
        title="I develop software programs to help event organizers to maximize visibility"
        intro="I’m working on a project aimed to promote events by publishing them across multiple platforms and tracking tickets sales on one dashboard."
      >
        <ol
          role="sites"
          className="grid grid-cols-3 gap-x-12 gap-y-16 sm:grid-cols-5 lg:grid-cols-6 items-start justify-center mx-6"
        >
          {sites.map((site) => (
            <Card as="li" className={"items-center"} key={site.name}>
              <div
                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                {/*this div describing the circle around the logo*/}
                <CldImage
                  src={site.logo}
                  width="40"
                  height="40"
                  alt=""
                  className="h-10 w-10 rounded-full"
                  unoptimized
                />
              </div>
              <span className="mt-2.5 text-base text-center font-semibold text-zinc-800 dark:text-zinc-100">
                {site.name}
              </span>
            </Card>
          ))}
        </ol>
      </SimpleLayout>
    </>
  )
}
