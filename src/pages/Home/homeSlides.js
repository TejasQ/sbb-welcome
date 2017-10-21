import React from "react"
import HomeSlide from "./HomeSlide"

export default [
  {
    id: 1,
    backgroundImage: `url('${process.env.WEBPACK_PUBLIC_PATH}img/home-slides/berlin.jpg')`,
    text: [<h1>Sharing the love of Jesus</h1>, <h1>in Berlin, and around</h1>, <h1>the world.</h1>],
    button: {
      children: "Learn More",
    },
  },
  {
    id: 3,
    backgroundImage: `url('${process.env.WEBPACK_PUBLIC_PATH}img/home-slides/community.jpeg')`,
    text: [<h1>Church is home.</h1>, <h1>Church is friends.</h1>, <h1>Church is family.</h1>],
    button: {
      children: "See Events",
    },
  },
  {
    id: 4,
    backgroundImage: `url('${process.env.WEBPACK_PUBLIC_PATH}img/home-slides/small-group.jpeg')`,
    text: [<h1>Church life happens</h1>, <h1>in circles, not in rows.</h1>],
    button: {
      children: "Explore Small Groups",
    },
  },
  {
    id: 2,
    backgroundImage: "url('img/home-slides/minister.jpg')",
    text: [<h1>Mitmachgemeinde</h1>, <h1>Every member is a</h1>, <h1>minister.</h1>],
    button: {
      children: "Get Involved",
    },
  },
]
