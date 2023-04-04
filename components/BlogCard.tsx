import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Blog } from "../utils/types";
import webInfo from "../public/assets/WebsiteData.json";

function BlogCard() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const viewAll = `View All ⇢`;

  useEffect(() => {
    if (window.screen.width > 600) {
      setIsMobile(true);
    }
  }, []);

  return (
    <section className="flex flex-col px-[1rem] lg:px-[10rem] text-white">
      <header className="flex items-center justify-between w-[100%]">
        <h2 className="text-[2rem]">
          <span>#</span>blogs
        </h2>
        <a
          href="https://blog.tanmaysarkar.tech/"
          rel="noreferrer"
          target="_blank"
        >
          <button className="border-0 bg-transparent ">{viewAll}</button>
        </a>
      </header>
      <main className="flex flex-col items-center py-[2rem] gap-[16px]">
        {webInfo.blogs.map((value, index) => {
          return (
            <section
              key={`0-${index}-blog`}
              onClick={() => router.push(value.link)}
              className="flex justify-between cursor-pointer w-[100%] lg:w-[95%] h-[115px] lg:h-[160px] border-[1px] px-[12px] lg:px-[1rem] rounded-[18px] m-0 text-white bg-transparent shadow-blogCard rounded-[8px] hover:border-green hover:bg-gray hover:shadow-focuedBlogCard"
            >
              <section className="w-[70%] flex flex-col items-start justify-center text-start">
                <a href={value.link}>
                  <h2 className="font-bold text-[15px] lg:text-[1.9rem] ">
                    {value.title}
                  </h2>
                </a>
                <div className="flex gap-[8px] lg:gap-[16px] mb-[2px] text-[10px] lg:text-[13px] font-[700] lg:font-[600] text-orange ">
                  <p id="published-on">{value.published_on}</p>
                  <p id="read-time">{value.time}</p>
                  <p id="views">{value.views} views</p>
                </div>
                <p className="text-start max-h-[48px] max-w-[98%] overflow-hidden text-clip text-[12px] lg:text-[14px]">
                  {value.subtitle.length <= 130
                    ? value.subtitle
                    : isMobile
                    ? value.subtitle.slice(0, 120).trim().concat("...")
                    : value.subtitle.slice(0, 160).trim().concat("...")}
                </p>
              </section>
              <section className="w-[35%] lg:w-[30%] flex">
                <Image
                  className="w-[100%] lg:w-[85%] m-auto rounded-[2px] lg:rounded-[8px]"
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

export async function getStaticProps() {
  const blogs: Blog[] = [
    {
      link: `https://blog.tanmaysarkar.tech/build-sudoku-solver-engine-using-go`,
      colorCode: "lightgreen",
      views: "281",
      title: "Build Sudoku Solver Engine using Go",
      subtitle: `Solve your unsolved Sudoku patterns just in command. It takes a your pattern, solves it and writes in to a file.`,
      published_on: `Nov 9, 2022`,
      time: `7min read`,
      image: `https://cdn.hashnode.com/res/hashnode/image/upload/v1667654155553/H-nukWZ2r.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp`,
    },
    {
      link: `https://blog.tanmaysarkar.tech/deploy-your-containerized-go-web-application`,
      colorCode: "lightpurple",
      views: "134",
      title: "Deploy your containerized Go Web Application",
      subtitle: `Today I am back with a new article on Go, but this is slightly in production side. Today we are going to deploy a simple containerized Go web app on Heroku.`,
      published_on: `Oct 27, 2022`,
      time: `6min read`,
      image: `https://cdn.hashnode.com/res/hashnode/image/upload/v1666810316079/8b-KW6oLp.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp`,
    },
    {
      link: `https://blog.tanmaysarkar.tech/building-a-imdb-web-scraper-using-go`,
      colorCode: "yellow",
      views: "438",
      title: "Building a IMDB Web Scraper using Go",
      subtitle: `I thought about let's build a simple cli tool which will take birthday as input and crawl a tiny part of the website IMDB to look for celebrities who born on that date and stores various data into a file outputs/mm-dd.json inside output directory.`,
      published_on: `Oct 21, 2022`,
      time: `9min read`,
      image: `https://cdn.hashnode.com/res/hashnode/image/upload/v1666263676327/ouczJNN0b.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp`,
    },
  ];
  return {
    props: { blogs },
  };
}

export default BlogCard;
