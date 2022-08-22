import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
<<<<<<< HEAD
<<<<<<< HEAD
}

export default function ActivityDetails({activity, cancelSelectActivity }: Props) {
    return (
        <Card fluid>
    <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
    <Card.Content>
      <Card.Header>{activity.title}</Card.Header>
      <Card.Meta>
        <span>{activity.date}</span>
      </Card.Meta>
      <Card.Description>
       {activity.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button.Group widths='2'>
        <Button basic color='blue' content='Edit' />
        <Button onClick={cancelSelectActivity} basic color='grey' content='Cancel' />
      </Button.Group>
=======
=======
>>>>>>> 004f916e3806028d99e2ac780b01c38e6280e6b8
    openForm: (id: string) => void;
}

export default function ActivityDetails({activity, cancelSelectActivity, openForm }: Props) {
    return (
        <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
        <Card.Content>
            <Card.Header>{activity.title}</Card.Header>
            <Card.Meta>
                 <span>{activity.date}</span>
            </Card.Meta>
            <Card.Description>
                {activity.description}
        </Card.Description>
            </Card.Content>
        <Card.Content extra>
            <Button.Group widths='2'>
                <Button onClick={() => openForm(activity.id)} basic color='blue' content='edit' />
                <Button onClick={cancelSelectActivity} basic color='grey' content='cancel' />
            </Button.Group>
<<<<<<< HEAD
>>>>>>> 004f916e3806028d99e2ac780b01c38e6280e6b8
=======
>>>>>>> 004f916e3806028d99e2ac780b01c38e6280e6b8
    </Card.Content>
  </Card>
    )
}