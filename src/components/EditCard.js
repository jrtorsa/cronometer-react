import React from "react";
import { Button, Card, Input } from "semantic-ui-react";

const EditCard = () => {
  return (
    <Card centered>
      <Card.Content>
        <Card.Description>Title</Card.Description>
        <Input />
        <Card.Description>Project</Card.Description>
        <Input />
      </Card.Content>
      <Card.Content>
          <Button.Group widths='5'>
          <Button floated='left' basic color='blue'>Update</Button>
          <Button floated='right' basic negative>Cancel</Button>
          </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default EditCard;
