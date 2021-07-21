import React from "react";
import { Button, Container, Icon } from "semantic-ui-react";

const style = {
    marginTop: '10px'
}

const AddTimerButton = ({addCronometerCounter}) => {
  return (
    <Container textAlign='center' style={style}>
      <Button compact basic onClick={() => addCronometerCounter()}>
        <Icon name="plus" />
      </Button>
    </Container>
  );
};

export default AddTimerButton;
