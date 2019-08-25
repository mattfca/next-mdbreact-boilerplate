import Link from 'next/link';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse
} from "mdbreact";

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <React.Fragment>
        <MDBNavbar color="red" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">Site Name</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left></MDBNavbarNav>
            <MDBNavbarNav right>
            <MDBNavItem>
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </React.Fragment>
    )
  }
}

export default Header;