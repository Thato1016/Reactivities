import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
<<<<<<< HEAD

export default function ActivityForm() {
    return (
=======
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
}

export default function ActivityForm({activity, closeForm}: Props) {
    return(
>>>>>>> 004f916e3806028d99e2ac780b01c38e6280e6b8
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Title' />
                <Form.TextArea placeholder='Description' />
                <Form.Input placeholder='Category' />
                <Form.Input placeholder='Date' />
                <Form.Input placeholder='City' />
                <Form.Input placeholder='Venue' />
                <Button floated='right' positive type='submit' content='Submit' />
<<<<<<< HEAD
                <Button floated='right' type='button' content='Cancel' />
=======
                <Button floated='right' type='submit' content='Cancel' />
>>>>>>> 004f916e3806028d99e2ac780b01c38e6280e6b8
            </Form>
        </Segment>
    )
}