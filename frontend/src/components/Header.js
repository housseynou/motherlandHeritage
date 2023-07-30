import { Nav, NavContainer, NavMenu, NavItem, Logo, Page, Card, Search } from "./HeaderStyles"

function Header() {
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
                    <Card><Page to="/">Card</Page></Card>
                    <Search><Page to="/">Search</Page></Search>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Header;