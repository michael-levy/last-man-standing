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

/**
 * Modal for making an entry into the database
 * Asks for a name and team, and will add to db if name is unique
 *
 * @param {func} props.setItem send new item to parent
 * @param {func} props.setUsername set username of current user
 */
function ItemModal(props) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  /** get all users */
  useEffect(() => {
    getItems(setUsers);
  }, []);

  /**  open/close modal */
  const toggle = () => {
    setModal(!modal);
  };

  /** set name to contents of name field */
  const onChange = (e) => {
    setName(e.target.value);
  };
  const onChangeTeam = (e) => {
    setTeam(e.target.value);
  };
  /** Add new entry */
  const onSubmit = (e) => {
    e.preventDefault();
    // check that there is no one already with that name
    if (
      users.filter(
        (user) => name.toLocaleLowerCase() === user.name.toLocaleLowerCase()
      ).length > 0
    ) {
      setError(true);
    } else {
      // create user
      const newUser = {
        name: name,
        teams: team,
      };
      // add to list of users
      props.setItem(newUser);
      // add to db
      addItem(newUser);
      toggle();
      setError(false);
      // set username and move to list page
      setTimeout(props.setUsername(name), 1000);
    }
  };

  return (
    <div>
      <p>
        Enter your team for this week. If they don't win, you'll be eliminated!
        You have to imagine the elimination, because I haven't implemented it.
        <br></br>
        Choose wisely - you can't change your mind!
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
                    Someone by that name has already entered! (if the gameweek
                    started recently, you might need to yell at Michael to reset
                    the database)
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
