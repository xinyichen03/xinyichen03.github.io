import {CldImage} from "next-cloudinary";
import {Container} from "@/components/Container";

export default function NotFound() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <CldImage
                src={"tom_njiiin"}
                width="600"
                height="600"
                alt=""
                className="aspect-square rounded-2xl object-cover bg-transparent"
              />
            </div>
          </div>
          <div className="flex items-center justify-center lg:order-first">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"> {/*
             h1: top-level headings in html heading elements;
             text size 4 times of base size;
             tracking-tight: letter spacing to be tighter;
             when small, text size to be 5 times of base size.
            */}
              Page Not Found
            </h1>
          </div>
        </div>
      </Container>
    </>
  )
}
