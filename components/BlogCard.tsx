import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppSelector } from "../src/state/hooks";
import { Blog } from "../utils/types";

function BlogCard() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const state = useAppSelector((state) => state);

  useEffect(() => {
    setBlogs(state.blogs);
  }, [state]);

  return (
    <section className="flex flex-col px-[1.8rem] md:px-[4rem] lg:px-[11rem] text-white">
      <header className="flex items-center justify-between w-[100%]">
        <h2 className="text-[2rem] font-bold">
          <span>#</span>blogs
        </h2>
        <Link className="p-0 m-0 translate-y-[4px]" href="/blogs">
          <button className="underline decoration-[1px] underline-offset-[4px] font-bold text-[1rem] md:text-[1.2rem] hover:text-green">
            VIEW ALL
          </button>
        </Link>
      </header>
      <main className="flex flex-col items-center px-[8px] md:px-[1.2rem] py-[1rem] md:py-[2rem] gap-[16px]">
        {blogs &&
          blogs.map((blog, index) => {
            let formatedDate = new Date(blog.dateAdded).toDateString().slice(3);
            if (index > 2) {
              return;
            }
            return (
              <section
                key={`0-${index}-blog`}
                onClick={() =>
                  router.push(`https://blog.tanmaysarkar.tech/${blog.slug}`)
                }
                className="flex justify-between cursor-pointer h-[80px] md:h-[100px] lg:h-[130px] w-[100%] lg:w-[90%] border-[1px] px-[12px] lg:px-[1rem] rounded-[4px] text-white bg-transparent backdrop-blur-[4px] shadow-blogCard hover:border-green hover:backdrop-blur-[10px] hover:shadow-focuedBlogCard"
              >
                <section className="gap-[2px] w-[100%] md:w-[70%] flex flex-col items-start justify-center text-start">
                  <a href={`https://blog.tanmaysarkar.tech/${blog.slug}`}>
                    <h2 className="font-bold text-[16px] md:text-[1.1rem] lg:text-[1.8rem] text-clip leading-[20px] md:leading-[32px]">
                      {blog.title}
                    </h2>
                  </a>
                  <div className="flex gap-[10px] lg:gap-[20px] mb-[2px] text-[10px] lg:text-[14px] font-[500] text-green">
                    <p className="">{formatedDate}</p>
                    <p className="">{blog.time}</p>
                    <p className="">{blog.totalReactions} likes</p>
                  </div>
                  <code className="gap-[12px] text-[10px] lg:text-[14px] hidden md:flex">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-white bg-green bg-opacity-[20%] rounded-[2px]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </code>
                </section>
                <section className="w-0 md:w-[30%] flex">
                  <Image
                    className="w-[70%] m-auto rounded-[2px] lg:rounded-[8px]"
                    src={blog.coverImage}
                    alt={blog.title}
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
