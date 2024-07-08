import styled from "styled-components";

const HeaderWrapper = styled.header`
background-color: gray;
color: white;
`
const Navigation = styled.nav`
max-width: 1100px;
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
`
const Header = () =>{

    return(
        <>
            <HeaderWrapper>
                <Navigation>
                    <p>Logo</p>
                    <UnorderedList >
                        <List>Women</List>
                        <List>Men</List>
                        <List>Accessories</List>
                        <List>Shoes</List>
                        <List>like new</List>
                    </UnorderedList>
                </Navigation>
            </HeaderWrapper>
        </>
    )
}

export default Header;