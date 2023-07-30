import styled from 'styled-components'
import {Link as LinkRouter} from "react-router-dom"

export const Nav = styled.nav`
    background: #4D522E;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const Logo = styled(LinkRouter)`
  justify -self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;


export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align-center;

@media screen and (max-width: 768px){
  display: none;
}
`

export const NavItem = styled.li`
  height: 40px;
  border: 1px solid #EB8309;

  &.hover{
    background: green;
  } 

`

export const Page = styled(LinkRouter)`
  color: #EB8309;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #97A923;
  }
`

export const Card = styled.p`
  height: 40px;
  border: 1px solid #EB8309;
  
  &.hover{
    background: green;
  } 

`

export const Search = styled.p`
  height: 40px;
  border: 1px solid #EB8309;

  &.hover{
    background: green;
  } 

`
;