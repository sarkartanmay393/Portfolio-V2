import Link from "next/link";
import Image from "next/image";
import router from "next/router";

import Layout from "../components/Layout";
import type { Blog } from "../utils/types";
import { useEffect, useState } from "react";
import { RootState } from "../src/state/store";
import { useAppDispatch, useAppSelector } from "../src/state/hooks";
import { Getblogs } from ".";
import { set } from "../src/slices/blogSlice";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const state = useAppSelector((state) => state);
  const dispath = useAppDispatch();

  useEffect(() => {
    if (state.blogs.length < 2) {
      // console.log("bypass check");
      Getblogs().then((blogs) => {
        dispath(set(blogs));
      });
    }
    // console.log(state.blogs);
    setBlogs(state.blogs);
    // getBlogProps().then((blogs) => {
    //   setBlogs(blogs);
    // });
  }, [dispath, state]);

  return (
    <Layout title="Blogs">
      <section className="gap-[24px] flex flex-col items-flex-start pl-[2rem] px-[1rem] md:px-[4rem] lg:px-[11rem] py-[2.2rem] md:py-[3rem] lg:py-[4rem] text-white">
        <header className="flex flex-col items-flex-start text-[2rem] gap-[6px]">
          <Link href="/blogs">
            <h2 className="text-[2rem] font-bold">
              <span>/</span>blogs
            </h2>
          </Link>
          <p className="text-[1.2rem]">List of my blogs [{blogs.length}]</p>
        </header>
        <main className="flex gap-[6px] ">
          <section className="flex flex-col gap-[22px] px-[1rem]">
            {blogs &&
              blogs.map((value: Blog, index) => {
                let formatedDate = new Date(value.dateAdded)
                  .toDateString()
                  .slice(3);

                return (
                  <section
                    key={`0-${index}-blog`}
                    onClick={() =>
                      router.push(
                        `https://blog.tanmaysarkar.tech/${value.slug}`
                      )
                    }
                    className="flex justify-between cursor-pointer h-[80px] md:h-[100px] lg:h-[130px] w-[100%] lg:w-[90%] border-[1px] px-[12px] lg:px-[1rem] rounded-[4px] text-white bg-transparent backdrop-blur-[4px] shadow-blogCard hover:border-green hover:backdrop-blur-[10px] hover:shadow-focuedBlogCard"
                  >
                    <section className="gap-[2px] w-[100%] md:w-[70%] flex flex-col items-start justify-center text-start">
                      <a href={`https://blog.tanmaysarkar.tech/${value.slug}`}>
                        <h2 className="font-bold text-[16px] md:text-[1.1rem] lg:text-[1.8rem] text-clip leading-[20px] md:leading-[32px]">
                          {value.title}
                        </h2>
                      </a>
                      <div className="flex gap-[10px] lg:gap-[20px] mb-[2px] text-[10px] lg:text-[14px] font-[500] text-green">
                        <p className="">{formatedDate}</p>
                        <p className="">{value.time || "7min Read"}</p>
                        <p className="">{value.totalReactions} likes</p>
                      </div>
                      <code className="gap-[12px] text-[10px] lg:text-[14px] hidden md:flex">
                        {value.tags.map((val) => (
                          <span
                            key={val}
                            className="text-white bg-green bg-opacity-[20%] rounded-[2px]"
                          >
                            #{val}
                          </span>
                        ))}
                      </code>
                    </section>
                    <section className="w-0 md:w-[30%] flex">
                      <Image
                        className="w-[70%] m-auto rounded-[2px] lg:rounded-[8px]"
                        src={value.coverImage}
                        alt={value.title}
                        width={1000}
                        height={1000}
                      />
                    </section>
                  </section>
                );
              })}
          </section>
        </main>
      </section>
    </Layout>
  );
}
