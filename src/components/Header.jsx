import '../styles/Header.css'
import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Container, FormControl } from 'react-bootstrap'
import { AppContext } from '../store/Context'



const Header = () => {

  const {state:{cart}, filterDispatch} = useContext(AppContext)
  return (
    <Navbar bg="dark" variant='dark' style={{height: "80px"}} className="navbar-1">
        <Container>
            <Navbar.Brand>
                <Link to="/">Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className="search">
                <FormControl placeholder='Search Product Here'
                  style={{width: 500}} className="m-auto"
                  onChange={(e)=> {filterDispatch({type: "SEARCH", payload: e.target.value})}}
                />
            </Navbar.Text>    
            <Link to="/cart"><button className='nav-btn'>{cart.length}</button> </Link>  
        </Container>
    </Navbar>
  )
}

export default Header