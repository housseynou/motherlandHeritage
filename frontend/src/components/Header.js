import { Nav, NavContainer, NavMenu, NavItem, Logo, Page, Card, Search } from "./HeaderStyles";
import { CartStatus } from "./CartStatus";
import { useContext } from "react";

function Header() {
    const {cartProducts} = useContext(CartStatus)
    return (
        <>
            <Nav>
                <NavContainer>
                    <Logo><Page to="/">MotherlandHeritage</Page></Logo>
                    <NavMenu>
                        <NavItem><Page to="/">Home</Page></NavItem>
                        <NavItem><Page to="/products">All Products</Page></NavItem>
                        <NavItem><Page to="/categories">Catégories</Page></NavItem>
                    </NavMenu>
                    <Card><Page to="/cart">Cart({cartProducts.length})</Page></Card>
                    <Search><Page to="/">Search</Page></Search>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Header;