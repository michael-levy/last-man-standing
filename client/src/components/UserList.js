import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getItems, deleteItem } from "../actions/itemActions";
import { useState, useEffect } from "react";

function ShoppingList(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems(setItems);
    if (props.item) {
      setItems([...items, props.item]);
    }
  }, [props.item]);

  const onDeleteClick = (id) => {
    deleteItem(id);
    setItems(items.filter((item) => item._id !== id));
  };
  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="user-list">
          {console.log()}
          {items.map(({ _id, name, teams }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Row>
                  <Col>
                    {props.username === "michAEL" && (
                      <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={() => onDeleteClick(_id)}
                      >
                        &times;
                      </Button>
                    )}

                    {name}
                  </Col>
                  <Col style={{ fontStyle: "italic", color: "grey" }}>
                    {teams}
                  </Col>
                </Row>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
}

export default ShoppingList;
