import React from "react"
import glamorous from "glamorous"

import Layout from "components/Layout/Layout"

const HomePage = ({ className }) => (
    <Layout>
      <div className={className}>
        <h1>Welcome</h1>
      </div>
    </Layout>
  ),
  style = ({ theme }) => ({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing,
    backgroundImage: "linear-gradient(45deg, #EFEFF0 0%, #fff 100%)"
  })

export default glamorous(HomePage)(style)
