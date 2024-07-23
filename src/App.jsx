import { useState } from 'react';
import Header from "./HeaderAndFooter/Header";
import Footer from "./HeaderAndFooter/Footer";
import User from "./pages/User";
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';


const PageWrapper = styled.div`
display: flex;
flex-direction: column;
`;

const App = () => {
  const [cart, setCart] = useState(new User("Gary"));

  return (
    <PageWrapper>
      <Header numItems = {cart.items.length}/>
        <Outlet context={[cart, setCart]} />
      <Footer/>
    </PageWrapper>
  );
};

export default App;
