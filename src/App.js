import "./App.css";
import styled from "styled-components";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* app component */}
      <AppBody>
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widgets */}
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
`;
