import { useEffect, useState } from 'react';
import Loading from "./pages/Loading";
import Homepage from './pages/Homepage';

const App = () => {
  const [state, setState] = useState({items: [], status: "loading"});

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: "cors" })
      .then((response) => response.json())
      .then((response) => setState({items: response, status: "loaded"}))
      .catch((error) => {
        console.log("error", error);
        setState({items: [], status: "error"});
      })
  }, []);

  return (
    <>
      {state.status === "loading" && <Loading />}
      {state.status === "error" && <p>Error loading items.</p>}
      {state.status === "loaded" && (
        <Homepage {...state}/>
      )}
    </>
  );
};

export default App;
