import React from "react";
import { Button, Container, Icon } from "semantic-ui-react";

const AddTimerButton = () => {
  return (
    <Container textAlign='center'>
      <Button compact basic>
        <Icon name="plus" />
      </Button>
    </Container>
  );
};

export default AddTimerButton;
