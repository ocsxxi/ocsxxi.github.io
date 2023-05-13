let ocsxxi_top = {
  title: "ocsxxi", // Title for the site. This will be displayed in the navbar.
  description: "凭借着这份光，我便能把黑夜当成白天。",
  theme: "@vuepress/theme-blog",

  head: [
    ["meta", { charset: "UTF-8" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    // ocsxxi.top的配置
    ["meta", { name: "baidu-site-verification", content: "code-ddD2S8XpRf" }],
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?8a0f05288bca9e417055b48d31936835";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],

  ],

  themeConfig: {
    // Please keep looking down to see the available options.
    dateFormat: "YYYY-MM-DD",

    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "标签",
        link: "/tag/",
      },
      {
        text: "关于",
        link: "/about",
      },
    ],

    directories: [
      {
        id: "blog",
        dirname: "_posts",
        path: "/",
      },
    ],

    feed: {
      canonical_base: "https://www.ocsxxi.top",
      rss: true,
      atom: false,
      json: false,
    },

    globalPagination: {
      prevText: "上一页", // Text for previous links.
      nextText: "下一页", // Text for next links.
      lengthPerPage: "10", // Maximum number of posts per page.
      layout: "Pagination", // Layout for pagination page
    },

    hostname: "https://www.ocsxxi.top",
    smoothScroll: true,

    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/ocsxxi",
        },
      ],
      copyright: [
        {
          text: "陕ICP备2022002688号-1",
          link: "https://beian.miit.gov.cn/",
        },
        {
          icon: "/beian.png",
          text: "陕公网安备 61010302000879号",
          link: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=61010302000879",
        },
        {
          text: "Copyright © 2018-present ocsxxi.",
        },
        {
          text: "CC BY-NC-SA 4.0 Licensed",
          link: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
        },
      ],
    },
  },

  plugins: [
    [
      "vuepress-plugin-mathjax",
      {
        // target: "svg",
      },
    ],
    [
      "sitemap",
      {
        hostname: "https://www.ocsxxi.top",
        exclude: ["/404.html"],
      },
    ],
  ],
};

// ---------------------------------------------------------------------------------------------------
let ocsxxi_github_io = {
  title: "ocsxxi", // Title for the site. This will be displayed in the navbar.
  description: "凭借着这份光，我便能把黑夜当成白天。",
  theme: "@vuepress/theme-blog",

  head: [
    ["meta", { charset: "UTF-8" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],

    // ocsxxi.github.io
    ["meta", { name: "baidu-site-verification", content: "code-5eGKylFvka" }],
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?879041d8620b6ca87d2b856d2726e82c";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
  ],

  themeConfig: {
    // Please keep looking down to see the available options.
    dateFormat: "YYYY-MM-DD",

    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "标签",
        link: "/tag/",
      },
      {
        text: "关于",
        link: "/about",
      },
    ],

    directories: [
      {
        id: "blog",
        dirname: "_posts",
        path: "/",
      },
    ],

    feed: {
      canonical_base: "https://ocsxxi.github.io",
      rss: true,
      atom: false,
      json: false,
    },

    globalPagination: {
      prevText: "上一页", // Text for previous links.
      nextText: "下一页", // Text for next links.
      lengthPerPage: "10", // Maximum number of posts per page.
      layout: "Pagination", // Layout for pagination page
    },

    hostname: "https://ocsxxi.github.io",
    smoothScroll: true,

    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/ocsxxi",
        },
      ],
      copyright: [
        {
          text: "Copyright © 2018-present ocsxxi.",
        },
        {
          text: "CC BY-NC-SA 4.0 Licensed",
          link: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
        },
      ],
    },
  },

  plugins: [
    [
      "vuepress-plugin-mathjax",
      {
        // target: "svg",
      },
    ],
    [
      "sitemap",
      {
        hostname: "https://ocsxxi.github.io",
        exclude: ["/404.html"],
      },
    ],
  ],
};

// ---------------------------------------------------------------------------------------------------
module.exports = ocsxxi_top