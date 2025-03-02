import React from 'react'
import {Container , Row , Button} from 'reactstrap'
import { NavLink ,Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import "./Header.css"

const nav__links =[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/about',
        display:'About'
    },
    {
        path:'/tours',
        display:'Tours'
    }

]

const header = () => {
  return <header className = "header">
    <Container>
        <row>
            <div className="nav__wrapper d-flex align-items-center justify-content-between">
                {/*======logo start=======*/ }
                <div className="logo">
                    <img src={logo} alt = ""></img>
                </div>
                 {/*======logo end=======*/ }

                  {/*======menu start=======*/ }
                  <div className="navigation">
                    <ul className="menu d-flex align-items-centre gap-5">
                        {
                            nav__links.map((items,index) =>(
                                <li className="nav__item" key={index}>
                                    <NavLink to={items.path}
                                    className={navClass => navClass.isActive ? "active__link" : ""}>{items.display}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                  </div>
                   {/*======menu end=======*/ }
                   <div className='nav__right d-flex align-items-center gap-4'>
                    <div className='nac__btns d-flex align-items-center gap-4'>
                            <Button className='btn secondary__btn'>
                                <Link to='/login'>Login</Link>
                            </Button>
                            <Button className='btn secondary__btn'>
                                <Link to='/register'>Register</Link>
                            </Button>
                    </div>
                    <span className="mobile__menu">
                        <i class='ri-menu-line'></i>
                    </span>
                   </div>
            </div>
        </row>
    </Container>
  </header>
}

export default header
