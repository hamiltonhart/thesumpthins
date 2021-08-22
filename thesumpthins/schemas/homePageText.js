// For text to display on the Home Page

export default {
  name: "textItem",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "textTitle",
      title: "Text Title",
      description:
        "Once this is set, you must let George know before you change it or it will break.",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "blockContent",
    },
  ],
};
