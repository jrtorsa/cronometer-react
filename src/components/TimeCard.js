import React from "react";
import { Button, Card } from "semantic-ui-react";

const TimeCard = ({ cronometerList }) => {
  return (
    <>
          {cronometerList.map((cronometers) => (
            <Card.Group>
              <Card centered>
                <Card.Content key={cronometerList.id}>
                  <Card.Header>{cronometers.title}</Card.Header>
                  <Card.Meta>{cronometers.project}</Card.Meta>
                </Card.Content>
                <Card.Content textAlign="center">
                  <Card.Header>00:00:00</Card.Header>
                </Card.Content>
                <Card.Content textAlign="right">
                  <Button.Group
                    buttons={[
                      { key: "align left", icon: "trash", basic: "true" },
                      {
                        key: "align right",
                        icon: "edit",
                        basic: "true",
                      },
                    ]}
                  />
                </Card.Content>
                <Button basic positive>
                  Start
                </Button>
              </Card>
            </Card.Group>
          ))}
        </>
  );
};

export default TimeCard;
