import React from "react";
import { Button, Card } from "semantic-ui-react";

const TimeCard = () => {
  return (
    <Card centered>
      <Card.Content>
        <Card.Header>Crear Nuevos Proyectos</Card.Header>
        <Card.Meta>Make it Real</Card.Meta>
      </Card.Content>
      <Card.Content textAlign="center">
        <Card.Header>00:00:00</Card.Header>
      </Card.Content>
      <Card.Content textAlign="right">
        <Button.Group
            buttons={[
                {key: 'align right', icon: 'trash'},
                {key: 'align right', icon: 'edit'}
            ]}
       />
      </Card.Content>
      <Button positive>Start</Button>
    </Card>
  );
};

export default TimeCard;
