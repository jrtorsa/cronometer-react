import React from "react";
import { Button, Card, Form } from "semantic-ui-react";

const EditCard = ({ show, setShow, handleChange, newTimer }) => {

    const { title, project } = newTimer

  return (
    <>
      {show ? (
        ""
      ) : (
        <Card centered>
          <Card.Content>
            <Form>
                <Form.Field>
                    <label>Title</label>
                    <input name='title' value={title} onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Project</label>
                    <input name='project' value={project} onChange={handleChange} />
                </Form.Field>
            </Form>
          </Card.Content>
          <Card.Content>
            <Button.Group widths="5">
              <Button floated="left" basic color="blue">
                Update
              </Button>
              <Button
                floated="right"
                basic
                negative
                onClick={() => setShow(true)}
              >
                Cancel
              </Button>
            </Button.Group>
          </Card.Content>
        </Card>
      )}
    </>
  );
};

export default EditCard;
