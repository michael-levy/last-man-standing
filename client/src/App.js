import AppNavbar from "./components/AppNavbar.js";
import UserList from "./components/UserList";
import ItemModal from "./components/ItemModal.js";
import { useState } from "react";
import { Container } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [item, setItem] = useState();

  return (
    <div className="App">
      <header className="App-header"></header>
      <AppNavbar></AppNavbar>
      <Container>
        <ItemModal setItem={setItem}></ItemModal>
        <UserList item={item}></UserList>
      </Container>
    </div>
  );
}

export default App;
