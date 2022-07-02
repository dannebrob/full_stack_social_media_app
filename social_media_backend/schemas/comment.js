export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    { name: "postedBy", titel: "PostedBy", type: "postedBy" },
    {
      name: "comment",
      title: "Comment",
      type: "string",
      of: [{ type: "comment" }],
    },
  ],
};
