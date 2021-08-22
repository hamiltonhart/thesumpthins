export default {
  name: "sumpthin",
  title: "Sumpthins",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Sumpthin's Name",
      type: "string",
    },
    {
      name: "picture",
      title: "Picture",
      type: "mainImage",
    },
    {
      name: "story",
      title: "Story",
      description:
        "What's the story with this Sumpthin? What's their background? What's special about them?",
      type: "blockContent",
    },
  ],
};
