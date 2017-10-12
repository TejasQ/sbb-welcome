import { css } from "glamor"

export default () => {
  css.fontFace({
    fontFamily: "SBbody",
    fontStyle: "normal",
    fontWeight: 400,
    src: `url("/fonts/lato/lato.ttf")`
  })

  css.fontFace({
    fontFamily: "SBbody",
    fontStyle: "normal",
    fontWeight: 700,
    src: `url("/fonts/lato/lato__black.ttf")`
  })

  css.fontFace({
    fontFamily: "SBbody",
    fontStyle: "italic",
    fontWeight: 700,
    src: `url("/fonts/lato/lato__black-italic.ttf")`
  })

  css.fontFace({
    fontFamily: "SBbody",
    fontStyle: "normal",
    fontWeight: 600,
    src: `url("/fonts/lato/lato__bold.ttf")`
  })

  css.fontFace({
    fontFamily: "SBbody",
    fontStyle: "italic",
    fontWeight: 600,
    src: `url("/fonts/lato/lato__bold-italic.ttf")`
  })

  css.fontFace({
    fontFamily: "SBbody",
    fontStyle: "normal",
    fontWeight: 300,
    src: `url("/fonts/lato/lato__light.ttf")`
  })

  css.fontFace({
    fontFamily: "SBserif",
    fontStyle: "normal",
    fontWeight: 400,
    src: `url("/fonts/pt-serif/pt-serif.ttf")`
  })

  css.fontFace({
    fontFamily: "SBserif",
    fontStyle: "italic",
    fontWeight: 400,
    src: `url("/fonts/pt-serif/pt-serif__italic.ttf")`
  })

  css.fontFace({
    fontFamily: "SBserif",
    fontStyle: "normal",
    fontWeight: 700,
    src: `url("/fonts/pt-serif/pt-serif__bold.ttf")`
  })

  css.fontFace({
    fontFamily: "SBserif",
    fontStyle: "italic",
    fontWeight: 700,
    src: `url("/fonts/pt-serif/pt-serif__bold-italic.ttf")`
  })

  css.fontFace({
    fontFamily: "SBtitle",
    fontStyle: "normal",
    fontWeight: 400,
    src: `url("/fonts/akzidenz/akzidenz.otf")`
  })
}
