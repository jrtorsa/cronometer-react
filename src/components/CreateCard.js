import React, { useState } from "react";
import { Button, Card, Form } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";

const CreateCard = ({ newCronometer, cronometerList }) => {
  const [newTimer, setNewTimer] = useState({ title: "", project: "" });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTimer({
      ...newTimer,
      [name]: value,
    });
  };

  const { title, project } = newTimer;

  const createNewTimer = (e) => {
    e.preventDefault();
    if (!title.trim() || !project.trim()) {
      setError(true);
      return;
    }
    setError(false);
    newTimer.id = uuidv4();
    newCronometer(newTimer);
    setNewTimer({ title: "", project: "" });
  };

  return (
    <>
      {cronometerList.length === 0 ? ('') : (
        <Form onSubmit={createNewTimer}>
        <Card centered>
          <Card.Content>
            <Form.Field>
              <label>Title</label>
              <Form.Input name="title" value={title} onChange={handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Project</label>
              <Form.Input
                name="project"
                value={project}
                onChange={handleChange}
              />
            </Form.Field>
          </Card.Content>
          <Card.Content>
            <Button.Group widths="5">
              <Form.Button floated="left" basic color="blue" content="submit">
                Create
              </Form.Button>
              <Button
                floated="right"
                basic
                negative
              >
                Cancel
              </Button>
            </Button.Group>
          </Card.Content>
        </Card>
      </Form>
      )}
    </>
  );
};

export default CreateCard;
