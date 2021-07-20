import React from "react";
import { Button, Card } from "semantic-ui-react";

const TimeCard = ({ showTimerCard, toggleCards }) => {
  return (
    <>
      {showTimerCard ? (
        <Card.Group>
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
                  { key: "align right", icon: "trash", basic: "true" },
                  { key: "align right", icon: "edit", basic: "true", onClick: () => toggleCards() },
                ]}
              />
            </Card.Content>
            <Button basic positive>
              Start
            </Button>
          </Card>
        </Card.Group>
      ) : (
        ""
      )}
    </>
  );
};

export default TimeCard;
