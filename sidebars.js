const petstoreVersions = require("./docs/openapi/petstore/versions.json");
const { versionSelector, versionCrumb } = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");

const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: "html",
      value: `<p style="color: var(--ifm-color-secondary-darkest)">DOCUMENTATION</p>`,
      defaultStyle: true, // Use the default menu item styling
    },
    {
      type: "doc",
      id: "intro",
    },
    {
      type: "category",
      label: "Tutorial-basics",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "tutorial-basics",
        },
      ],
    },
    {
      type: "category",
      label: "Tutorial-Extras",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "tutorial-extras",
        },
      ],
    },
  ],
  petstore: [
    {
      type: "category",
      label: "Petstore",
      link: {
        type: "generated-index",
        title: "Petstore API",
        description: "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/openapi/petstore",
      },
      items: require("./docs/openapi/petstore/sidebar.js"),
    },
    {
      type: "category",
      label: "Cloud Object Storage",
      link: {
        type: "generated-index",
        title: "Cloud Object Storage API",
        slug: "/openapi/cos",
      },
      items: require("./docs/openapi/cos/sidebar.js"),
    },
  ],
  "petstore-2.0.0": [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(petstoreVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v2.0.0`),
    },
    {
      type: "category",
      label: "Petstore",
      link: {
        type: "generated-index",
        title: "Petstore API (latest)",
        description: "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/category/petstore-api",
      },
      items: require("./docs/openapi/petstore/sidebar.js"),
    },
  ],
  "petstore-1.0.0": [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(petstoreVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v1.0.0`),
    },
    {
      type: "category",
      label: "Petstore",
      link: {
        type: "generated-index",
        title: "Petstore API (v1.0.0)",
        description: "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/category/petstore-api-1.0.0",
      },
      items: require("./docs/openapi/petstore/1.0.0/sidebar.js"),
    },
  ],
};

module.exports = sidebars;
