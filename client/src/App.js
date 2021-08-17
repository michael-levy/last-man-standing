import AppNavbar from "./components/AppNavbar.js";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal.js";

import { Provider } from "react-redux";
import { Container } from "reactstrap";
import store from "./store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header"></header>
        <AppNavbar></AppNavbar>
        <Container>
          <ItemModal></ItemModal>
          <ShoppingList></ShoppingList>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
