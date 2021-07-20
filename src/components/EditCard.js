import React from "react";
import { Button, Card, Input } from "semantic-ui-react";

const EditCard = ({ showUpdateCard, toggleCards }) => {
  return (
    <>
      {showUpdateCard ? (
        <Card centered>
          <Card.Content>
            <Card.Description>Title</Card.Description>
            <Input />
            <Card.Description>Project</Card.Description>
            <Input />
          </Card.Content>
          <Card.Content>
            <Button.Group widths="5">
              <Button floated="left" basic color="blue">
                Update
              </Button>
              <Button floated="right" basic negative onClick={() => toggleCards()}>
                Cancel
              </Button>
            </Button.Group>
          </Card.Content>
        </Card>
      ) : (
        ""
      )}
    </>
  );
};

export default EditCard;
