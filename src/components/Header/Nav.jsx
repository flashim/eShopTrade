import {ActiveLink} from '../../utils'

const Nav = props => {
    return (
        <div className="nav">
          <ActiveLink href="/" className="nav-item">Shop</ActiveLink>
          <ActiveLink href="/about" className="nav-item">About Us</ActiveLink>
          <ActiveLink href="/stores" className="nav-item">Our Stores</ActiveLink>
          <ActiveLink href="/contact" className="nav-item">Contact Us</ActiveLink>
        </div>)
}

export default Nav