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
} from "reactstrap";

import { useState, useEffect } from "react";
import { getItems, addItem } from "../actions/itemActions";

function ItemModal(props) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
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
  const onChangeTeam = (e) => {
    setTeam(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (users.filter((user) => name === user.name).length > 0) {
      setError(true);
    } else {
      const newUser = {
        name: name,
        teams: team,
      };
      props.setItem(newUser);
      props.setUsername(name);
      addItem(newUser);
      toggle();
      setError(false);
    }
  };

  return (
    <div>
      <p>
        Enter your team for this week. If they don't win, you'll be eliminated!
        Except not really, because I can't be bothered implementing that.
      </p>
      <Button color="dark" style={{ marginBottom: "2rem" }} onClick={toggle}>
        Make an Entry
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Make an entry</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name">Enter your name and chosen team</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                onChange={onChange}
                style={{ marginBottom: "2rem", marginTop: "2rem" }}
              />
              <Input
                type="text"
                name="team"
                id="team"
                placeholder="Your team"
                onChange={onChangeTeam}
              />

              {error && (
                <Alert color="danger" style={{ marginTop: "2rem" }}>
                  <p>
                    Someone by that name has already entered! (you might need to
                    yell at Michael to reset the database)
                  </p>
                </Alert>
              )}

              <Button color="dark" style={{ marginTop: "1rem" }} block>
                Submit
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ItemModal;
