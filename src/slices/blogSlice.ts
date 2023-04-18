import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Blog } from "../../utils/types";

const blog_dummy: Blog = {
  _id: "63ab2a0c51443bfa954a9230",
  slug: "get-free-swags-in-tech",
  title: "Get Free Swags as a beginner in Tech",
  brief:
    "Namaste Everyone, I'm back again on my track. These semester exams are a real pain 😩. By the way, focus on this me now, today I'll tell you the best ways of getting free swags from companies like MLH, DigitalOcean, Blockstack and more. So let us not...",
  totalReactions: "0",
  dateAdded: "2022-12-27T17:23:24.602Z",
  coverImage:
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1672162034665/b61f30fb-0b2b-4d14-b1a5-c28490b40783.png",
  time: "9min Read",
  tags: ["wemakedevs", "swags", "mlh", "hacktoberfest-1"],
};

const blogSlice = createSlice({
  name: "blogs",
  initialState: [blog_dummy],
  reducers: {
    set(state, action: PayloadAction<Blog[]>) {
      // console.log("dispatch action is running");
      // console.log(action.payload);
      // state = action.payload;
      Object.assign(state, action.payload);
      // console.log(state);
    },
  },
});

export { blogSlice };
export const { set } = blogSlice.actions;
export default blogSlice.reducer;
