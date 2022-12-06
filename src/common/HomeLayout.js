import React from 'react'
import styled from 'styled-components'
import {Outlet} from "react-router-dom"
import Nav from '../components/Nav'
import Footer from '../components/Footer'


function HomeLayout() {
  return (
    <Container>
        <Nav/>
            <Outlet/>
        <Footer/>
    </Container>
  )
}


const Container = styled.section`

`

export default HomeLayout