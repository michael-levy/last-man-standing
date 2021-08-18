import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  NavbarText,
} from "reactstrap";
import { useState } from "react";

/**
 * Navbar, has home link to reload the page
 */
export default function AppNavbar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Last Man Standing</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className="m1-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
            </Nav>
            <NavbarText className="ms-auto">Michael made this thing</NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
