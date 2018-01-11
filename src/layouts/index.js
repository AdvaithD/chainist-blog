import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
  } from 'reactstrap'

import Helmet from 'react-helmet'

import './index.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Chainist</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

    )
  }
}


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Chainist Blog'
      meta={[
        { name: 'description', content: 'blog' },
        { name: 'keywords', content: 'chainist, blog' }
      ]}
    />
    <Header />
      {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.any
}

export default TemplateWrapper
