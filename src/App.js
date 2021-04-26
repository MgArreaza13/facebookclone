import "./App.css";
import styled from "styled-components";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Widgets from "./components/widgets";
import Login from "./components/login";
import { useStateValue } from "./stateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          {/* header */}
          <Header />
          {/* app component */}
          <AppBody>
            {/* sidebar */}
            <Sidebar />
            {/* feed */}
            <Feed />
            {/* widgets */}
            <Widgets />
          </AppBody>
        </>
      )}
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
`;
