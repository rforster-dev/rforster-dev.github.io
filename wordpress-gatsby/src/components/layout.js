import React from "react"
import { Box, Grid } from "@chakra-ui/core"
import Header from "./header"
import Menu from "./menu"

import "../assets/style.css"

const Layout = ({ children }) => (
  <div>
   
      <Box mb={10} mt={20}>
        <Header />
      </Box>
      <Menu />

      <Box mb={100}>{children}</Box>
  
  </div>
)

export default Layout
