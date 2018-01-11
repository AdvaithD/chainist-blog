import React from 'react'
import './index.css'
import Link from 'gatsby-link'
import $ from 'jquery'
import '../../../assets/fontawesome/css/fontawesome-all.min.css'

class Footer extends React.Component {
  componentDidMount() {
    var didScroll
    var lastScrollTop = 0
    var delta = 3
    var navbarHeight = $('.footer').outerHeight()

    $(document).scroll(function(event){
      var st = $(this).scrollTop()

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop){
          // Scroll Down
          $('.footer').removeClass('nav-down').addClass('nav-up')
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('.footer').removeClass('nav-up').addClass('nav-down')
          }
      }

      lastScrollTop = st
    })
  }
  render () {
    return(
      <div className="footer nav-down">
        <div className="nav-wrap">
          {this.props.previous != null ? <Link to={this.props.previous} ><i className="fas fa-arrow-left"></i></Link> : <Link to={this.props.path}><i className="fas fa-arrow-left text-muted"></i></Link>}
          <Link to="/"><i className="fas fa-chevron-up"></i></Link>
          {this.props.next != null ? <Link to={this.props.next} ><i className="fas fa-arrow-right"></i></Link> : <Link to={this.props.path}><i className="fas fa-arrow-right text-muted"></i></Link>}
        </div>
      </div>
    )
  }
}

export default Footer
