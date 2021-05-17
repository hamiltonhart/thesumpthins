import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "zvh0p9ha",
  dataset: "production",
  apiVersion: "2021-05-16",
  useCdn: true,
});
