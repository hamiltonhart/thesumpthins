export default {
  name: "books",
  title: "Books",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Book Title",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "coverImage",
      title: "Book Cover Image",
      type: "mainImage",
    },
    {
      name: "comments",
      title: "My Thoughts",
      type: "blockContent",
    },
  ],
};
