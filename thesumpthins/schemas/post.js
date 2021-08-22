export default {
  name: "post",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      description: "Click Generate.",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "postImage",
      title: "Picture",
      type: "mainImage",
      description:
        "Optional. If there is a picture that goes well with this post, put it here.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
      description:
        "So people know when you posted this! Quick tip: use the date picker on the right and select 'Set to current time'.",
      options: {},
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
