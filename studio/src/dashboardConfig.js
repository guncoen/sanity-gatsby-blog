export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6265e69e1aae2512c738ba06",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-i8no4mi7",
                  apiId: "7bd7f24c-d1fe-4e10-a1a8-ddd4719f1f1c",
                },
                {
                  buildHookId: "6265e69fcbf6840d54aff6d3",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-7ou45ckx",
                  apiId: "472bdb5c-d388-4fea-ad3a-45483211b6c3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/guncoen/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-7ou45ckx.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
