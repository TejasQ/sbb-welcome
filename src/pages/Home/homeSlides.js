import React from "react"
import HomeSlide from "./HomeSlide"

export default [
  {
    id: 1,
    backgroundImage: "url('/img/home-slides/berlin.jpg')",
    text: ["Sharing the love of Jesus", "in Berlin, and around", "the world."],
    button: {
      children: "Learn More",
    },
  },
  {
    id: 3,
    backgroundImage: "url('/img/home-slides/frisbee.jpg')",
    text: ["Church is home.", "Church is friends.", "Church is family."],
    button: {
      children: "See Events",
    },
  },
  {
    id: 4,
    backgroundImage: "url('/img/home-slides/small-group.jpg')",
    text: ["Church life happens", "in circles, not in rows."],
    button: {
      children: "Explore Small Groups",
    },
  },
  {
    id: 2,
    backgroundImage: "url('img/home-slides/minister.jpg')",
    text: ["Mitmachgemeinde", "Every member is a", "minister."],
    button: {
      children: "Get Involved",
    },
  },
]
