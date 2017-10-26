export default ({ theme }) => ({
  padding: 0,
  width: 280,
  boxShadow: "0 16px 90px rgba(0, 0, 0, 0.3)",
  transition: ".3s transform ease, .3s opacity ease",
  opacity: 0,
  transform: `translateY(${theme.spacing}px)`,
  transformOrigin: "center bottom",
  WebkitBackdropFilter: "blur(6px) saturate(90%) brightness(100%)",
  background: "rgba(255, 255, 255, .75)",

  "&.entering": {
    opacity: 0,
    transform: `translateY(${theme.spacing}px) scale(0)`,
  },

  "&.entered": {
    opacity: 1,
    transform: "none",
  },

  "& img": {
    maxWidth: "100% !important",
  },

  "& .content": {
    padding: theme.spacing,
  },

  "& h1": {
    fontSize: 20,
    color: "#555",
    fontWeight: 600,
  },

  "& h2": {
    fontWeight: 100,
    fontSize: 14,
    marginTop: 9,
  },
  "& h3": {
    fontWeight: 400,
    marginTop: theme.spacing / 2,
    fontSize: 14,
    color: "#777",
  },

  "& .content__body": {
    marginTop: 0,
    height: 0,
    overflow: "hidden",
    transition: "height .6s ease, margin .6s ease, opacity .6s .5s ease",
    opacity: 0,
  },

  "& .content__body.active": {
    height: 118,
    marginTop: theme.spacing * 1.5,
    opacity: 1,
  },

  "& .actions": {
    marginTop: 24,
    display: "flex",
  },

  "& button, & input": {
    width: "100%",
    padding: theme.spacing,
    border: "2px solid",
    fontSize: 14,
    fontWeight: 600,
    transition: "background-color .6s ease, color .6s ease",
    background: "transparent",
  },

  "& input": {
    borderColor: "#aaa",
  },

  "& input + input": {
    marginTop: theme.spacing / 2,
  },

  "& button.join": {
    flex: "2 1 auto",
    marginRight: theme.spacing / 2,
    borderColor: theme.colors.primary,
    color: theme.colors.primary,
  },

  "& button.join.fill": {
    backgroundColor: theme.colors.primary,
    color: "white",
  },

  "& button.close": {
    flex: "1 2 auto",
    borderColor: theme.colors.red,
    color: theme.colors.red,
  },

  "& .feedback": {
    fontSize: 14,
    textAlign: "center",
    fontWeight: 400,
    lineHeight: 1.6,
  },
})
