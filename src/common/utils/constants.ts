export const theme = {
  primary: "#FCD799",
  secondary: "#787878",
  base: "white",
  accent: "#FF4389",
} as const;

export const snsAccounts = [
  {
    type: "twitter",
    url: "https://twitter.com/naporin24690",
    image: "/static/twitter-header.png",
  },
  {
    type: "github",
    url: "https://github.com/naporin0624",
    image: "/static/github-header.png",
  },
  // {
  //   type: "codesandbox",
  //   url: "https://codesandbox.io/u/naporin0624",
  //   image: "/static/codesandbox-header.png",
  // },
  {
    type: "hatenablog",
    url: "https://naporitan.hatenablog.com/",
    image: "/static/hatenablog-header.png",
  },
] as const;

type Book = {
  title: string;
  url: string;
};
type Manga = Book & {
  type: "manga";
};

const readMangaList: Manga[] = [
  {
    title: "死にあるき",
    url: "https://www.amazon.co.jp/gp/product/B073F2PKH5/ref=kinw_myk_ro_title",
    type: "manga",
  },
  {
    title: "可愛そうにね、元気くん",
    url: "https://www.amazon.co.jp/gp/product/B07TBJH7H4/ref=kinw_myk_ro_title",
    type: "manga",
  },
];
export const readBookList: Book[] = [];
