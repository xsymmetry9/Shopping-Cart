import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
background-color: gray;
color: white;
`
const Navigation = styled.nav`
max-width: 1100px;
padding: 10px 0;
margin-inline: auto;
display: flex;
justify-content: space-between;
`
//Why does the ul adds automatcially margin and padding?
const UnorderedList = styled.ul`
display: flex;
align-items: center;
list-style: none;
padding: 0;
margin: 0;
`
const List = styled.li`
display: flex;
gap: 5px;
`
const StyledLink = styled(Link)`
text-decoration: none;
color: white;`
const Header = ({numItems}) =>{

    return(
        <>
            <HeaderWrapper>
                <Navigation>
                    <StyledLink to= "/"><p>Logo</p></StyledLink>
                    <UnorderedList >
                        <List><StyledLink to ="/store/women">Women</StyledLink></List>
                        <List><StyledLink to ="/store/men">Men</StyledLink></List>
                        <List><StyledLink to ="/store/jewelry">Jewelry</StyledLink></List>
                        <List><StyledLink to ="/store/electronics">Electronics</StyledLink></List>
                        <List><StyledLink to="/store/cart">Cart <span>{numItems}</span></StyledLink></List>
                    </UnorderedList>
                </Navigation>
            </HeaderWrapper>
        </>
    )
}

export default Header;