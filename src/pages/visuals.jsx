import Head from 'next/head'
import {CldImage } from "next-cloudinary"
import {SimpleLayout} from '@/components/SimpleLayout'
import clsx from "clsx"

function ImageGrid({images}) {
	return (
		<ul role="list" className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
			{images.map((image, imageIndex) => (
				<li
					key={imageIndex}
					className={clsx(
						'aspect-[9/10] overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:rounded-2xl',
					)}
				>
					<CldImage
						src={image}
						width="8000"
						height="8000"
						alt=""
						sizes="(min-width: 640px) 18rem, 11rem"
						className="h-full w-full object-cover"
						unoptimized
					/>
				</li>))}
		</ul>)
}

const images = ["dogwalking_rjy6gx", "coilfish_r4w8lc", "roses_il5m4s", "person_ydjs0i", "aguy_bi7zow", "arthersseat_udxkjs", "maomoa_r07rjk", "random1_uemvom", "yutong_tmsq5a", "queen_lhvelc", "messi_iqxiol", "mochi2_yk11n7"]

export default function Visuals() {
	return (<>
		<Head>
			<title>Visuals - Xinyi Chen</title>
			<meta
				name="description"
				content="I’ve been producing some visuals."
			/>
		</Head>
		<SimpleLayout
			title="Fly with my imaginations..."
			intro="One of my favorite ways to relax is by creating visual arts. I love experiementing with watercolor palattes, paint brushes, Chinese calligraphy paper, or a magazine cut into pieces."
		>
			<ImageGrid images={images}/>
		</SimpleLayout>
	</>)
}
