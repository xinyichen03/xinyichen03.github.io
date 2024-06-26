import {Container} from "@/components/Container";
import {Button} from "@/components/Button";
import {CldImage } from "next-cloudinary";

export default function UnderConstruction() {
	return (
		<>
			<Container className="mt-16 sm:mt-32">
				<div
					className="grid place-items-center grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
					<div className="lg:pl-20">
						<div className="max-w-xs px-2.5 lg:max-w-none">
							<CldImage
								src={"tom_njiiin"}
								width="600"
								height="600"
								alt=""
								className="aspect-square rounded-2xl object-cover dark:bg-transparent"
							/>
						</div>
					</div>
					<div className="flex flex-col items-center lg:order-first lg:row-span-2"> {/*
            large: width >= 1024px; move this element (the box for text) in the container
             (the other element in the container is the image box) to the first (left);
            when large, 2 rows
           */}
						<h1 className="text-center text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
							{/* h1: top-level headings in html heading elements;
             text size 4 times of base size;
             tracking-tight: letter spacing to be tighter;
             when small, text size to be 5 times of base size. */}
							Xinyi is still working on this page...
						</h1>
						{/*<div className="flex mt-6 w-full justify-center">*/}
						{/*	<Button href="/index" target="_blank" variant="primary" className="">*/}
						{/*		Back to Home*/}
						{/*	</Button>*/}
						{/*</div>*/}
							<Button href="/index" target="_blank" variant="primary" className="mt-6 w-32">
								Back to Home
							</Button>
					</div>
				</div>
			</Container>
		</>
	)
}
