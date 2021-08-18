import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { addItem } from "../actions/itemActions";
import { useState } from "react";

function ItemModal(props) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
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
    const newUser = {
      name: name,
      teams: team,
    };
    props.setItem(newUser);
    addItem(newUser);
    toggle();
  };

  return (
    <div>
      <Button color="dark" style={{ marginBottom: "2rem" }} onClick={toggle}>
        Add User
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add User</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                onChange={onChange}
              />
              <Input
                type="text"
                name="team"
                id="team"
                placeholder="Your team"
                onChange={onChangeTeam}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add User
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ItemModal;
