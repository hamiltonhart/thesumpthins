export default {
  name: "books",
  title: "Books",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Book Title",
      description: "Required",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      description: "Required",
      type: "string",
    },
    {
      name: "illustrations",
      title: "Illustrator",
      type: "string",
    },
    {
      name: "coverImage",
      title: "Book Cover Image",
      type: "mainImage",
    },
    {
      name: "shortSummary",
      title: "Quick Summary",
      description: "You can use the Quick Summary, the Long Summary or both.",
      type: "blockContent",
    },
    {
      name: "longSummary",
      title: "Long Summary",
      description: "You can use the Quick Summary, the Long Summary or both.",
      type: "blockContent",
    },
    {
      name: "comments",
      title: "My Thoughts",
      description: "Is there anything specific you want to say?",
      type: "blockContent",
    },
  ],
};
