import React from 'react'
import styled from 'styled-components'
import { Link, Outlet, useLocation } from "react-router-dom"
import NewNav from '../components/@shared/NewNav'
import NewFooter from '../components/@shared/NewFooter'


function BlackLayout() {
  return (
    <Container>
        <NewNav/>
          <Outlet/>
        <NewFooter/>
    </Container>
  )
}


const Container = styled.section`

`

export default BlackLayout