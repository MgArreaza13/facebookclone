import "./App.css";
import styled from "styled-components";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* app component */}
      <AppBody>
        
        {/* sidebar */}
        {/* feed */}
        {/* widgets */}
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div``;
