import React from 'react'
import {Outlet} from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styled from 'styled-components'

function Layout() {
  return (
    <Container className="h-auto">
        <Nav/>
        <Outlet/>
        <Footer/>
    </Container>
  )
}

const Container = styled.style`
    background: radial-gradient(50% 50% at 50% 50%, rgba(247, 248, 249, 0) 0%, #F7F8F9 100%);
`

export default Layout