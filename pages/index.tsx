// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { Blog } from "../utils/types";
// import { blogSlice } from "../utils/redux";
import Layout from "../components/Layout";
import IntroCard from "../components/IntroCard";
import QuoteCard from "../components/QuoteCard";
import ContactCard from "../components/ContactCard";
import BlogCard from "../components/BlogCard";
import AboutCard from "../components/AboutCard";
import ProjectSection from "../components/ProjectsCard";
import SkillSection from "../components/SkillsCard";

export default function Home() {
  // const dispath = useDispatch();
  // const { setBlogs } = blogSlice.actions;

  // useEffect(() => {
  //   getBlogProps().then((blogs) => {
  //     dispath(setBlogs(blogs));
  //   });
  // }, [setBlogs, dispath]);

  return (
    <Layout title="Portfolio V2">
      <IntroCard />
      <QuoteCard />
      <BlogCard />
      <ProjectSection />
      <SkillSection />
      <AboutCard />
      <ContactCard />
    </Layout>
  );
}

// export async function getBlogProps() {
//   const resp = await axios.post("https://api.hashnode.com/", {
//     query: query,
//   });
//   let blogs: Blog[] = resp.data.data.user.publication.posts;
//   let sequencialBlogTags: string[][] = [];

//   const fetchTagsForBlog = async (slug: string) => {
//     const resp = await axios.post("https://api.hashnode.com/", {
//       query: postSpecificQuery.replace("_slug_", slug),
//     });
//     let tags: string[] = [];
//     resp.data.data.post.tags.forEach((value: { slug: string }) => {
//       tags.push(value.slug);
//     });

//     return tags;
//   };

//   for (let i = 0; i < blogs.length; i++) {
//     let tags = await fetchTagsForBlog(blogs[i].slug);
//     sequencialBlogTags.push(tags);
//   }

//   blogs.map((val) => {
//     val.time = "9min Read" || "7min Read" || "5min Read";
//     val.tags = sequencialBlogTags.shift() || [];
//   });

//   return blogs;
// }

// const postSpecificQuery = `query {
//     post(
//     slug: "_slug_",
//     hostname: "blog.tanmaysarkar.tech",
//     ) {
//       tags {
//         name
//         slug
//       }
//     }
//   }`;

// const query = `query {
//     user(username: "tanmaysarkar") {
//       publication {
//         posts(page: 0) {
//           _id
//          slug
//          title
//          brief
//          totalReactions
//          dateAdded
//          coverImage
//         }
//       }
//     }
//   }`;
