import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import webInfo from "../public/assets/WebsiteData.json";

function BlogCard() {
  const router = useRouter();

  return (
    <section className="flex flex-col px-[1.8rem] md:px-[4rem] lg:px-[11rem] text-white">
      <header className="flex items-center justify-between w-[100%]">
        <h2 className="text-[2rem] font-bold">
          <span>#</span>blogs
        </h2>
        <Link
          className="p-0 m-0 translate-y-[4px]"
          href="https://blog.tanmaysarkar.tech/"
        >
          <button className="underline decoration-[1px] underline-offset-[4px] font-bold text-[1rem] md:text-[1.2rem] hover:text-green">
            VIEW ALL
          </button>
        </Link>
      </header>
      <main className="flex flex-col items-center px-[8px] md:px-[1.2rem] py-[1rem] md:py-[2rem] gap-[16px]">
        {webInfo.blogs.map((value, index) => {
          return (
            <section
              key={`0-${index}-blog`}
              onClick={() => router.push(value.link)}
              className="flex justify-between cursor-pointer h-[80px] md:h-[100px] lg:h-[130px] w-[100%] lg:w-[90%] border-[1px] px-[12px] lg:px-[1rem] rounded-[4px] text-white bg-transparent backdrop-blur-[4px] shadow-blogCard hover:border-green hover:backdrop-blur-[10px] hover:shadow-focuedBlogCard"
            >
              <section className="gap-[2px] w-[100%] md:w-[70%] flex flex-col items-start justify-center text-start">
                <a href={value.link}>
                  <h2 className="font-bold text-[16px] md:text-[1.1rem] lg:text-[1.8rem] text-clip leading-[20px] md:leading-[32px]">
                    {value.title}
                  </h2>
                </a>
                <div className="flex gap-[10px] lg:gap-[20px] mb-[2px] text-[10px] lg:text-[14px] font-[500] text-green">
                  <p className="">{value.published_on}</p>
                  <p className="">{value.time}</p>
                  <p className="">{value.views} views</p>
                </div>
                <code className="gap-[12px] text-[10px] lg:text-[14px] hidden md:flex">
                  {value.tags.map((val) => (
                    <span className="text-white bg-green bg-opacity-[20%] rounded-[2px]">
                      #{val}
                    </span>
                  ))}
                </code>
              </section>
              <section className="w-0 md:w-[30%] flex">
                <Image
                  className="w-[70%] m-auto rounded-[2px] lg:rounded-[8px]"
                  src={value.image}
                  alt={value.title}
                  width={1000}
                  height={1000}
                />
              </section>
            </section>
          );
        })}
      </main>
    </section>
  );
}

export default BlogCard;
