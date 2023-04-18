import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Blog } from "./types";

const blog_dummy: Blog = {
  _id: "",
  title: "",
  slug: "",
  brief: "",
  dateAdded: "",
  coverImage: "",
  time: "",
  totalReactions: "",
  tags: [],
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState: [blog_dummy],
  reducers: {
    setBlogs(state, action) {
      state = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: { blog: blogSlice.reducer },
});
