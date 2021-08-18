import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  List,
} from "reactstrap";

import { useState, useEffect } from "react";
import { getItems } from "../actions/itemActions";

/**
 * Modal to view all other entries in database
 * User must already be in the db
 *
 * @param {func} setUsername set username of current user
 */
function ItemModal(props) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getItems(setUsers);
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.setUsername("");
    if (
      users.filter(
        (user) => name.toLocaleLowerCase() === user.name.toLocaleLowerCase()
      ).length > 0
    ) {
      props.setUsername(name);
      setError(false);
      toggle();
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <p>
        If you've already entered this gameweek and want to see the other
        entries, you can login using the name you entered with.
      </p>
      <Button color="dark" style={{ marginBottom: "2rem" }} onClick={toggle}>
        View Entries
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>View entries</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name">Login</Label>
              <Input
                style={{ marginTop: "2rem" }}
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                onChange={onChange}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Submit
              </Button>
              {error && (
                <Alert color="danger" style={{ marginTop: "2rem" }}>
                  <p>
                    No one by that name has entered! Those who have entered are:
                  </p>
                  <List>
                    {users.map((user) => (
                      <li style={{ marginTop: "0.5rem" }}>{user.name}</li>
                    ))}
                  </List>
                </Alert>
              )}
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ItemModal;
