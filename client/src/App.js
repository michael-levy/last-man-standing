import AppNavbar from "./components/AppNavbar.js";
import UserList from "./components/UserList";
import MakeEntry from "./components/MakeEntry.js";
import ViewEntries from "./components/ViewEntries.js";
import { useState } from "react";
import { Container } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [item, setItem] = useState();
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <AppNavbar></AppNavbar>
      <Container style={{ maxWidth: "600px" }}>
        {username.length > 0 ? (
          <UserList item={item} username={username}></UserList>
        ) : (
          <Container>
            <MakeEntry setItem={setItem} setUsername={setUsername}></MakeEntry>
            <ViewEntries setUsername={setUsername}></ViewEntries>
          </Container>
        )}
      </Container>
    </div>
  );
}

export default App;
