import React from 'react';
import { Grid, GridColumn, List } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity [];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
<<<<<<< HEAD

}

export default function ActivityDashboard({activities, selectedActivity, 
        selectActivity, cancelSelectActivity}: Props) {
=======
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
}

export default function ActivityDashboard({activities, selectedActivity, selectActivity,
        cancelSelectActivity, editMode, openForm, closeForm}: Props) {
>>>>>>> 004f916e3806028d99e2ac780b01c38e6280e6b8
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity} />
            </Grid.Column>
<<<<<<< HEAD
            <Grid.Column  width='6'>
                {selectedActivity &&
                <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} />}
                <ActivityForm />
=======
            <Grid.Column width='6'>
                {selectedActivity &&
                <ActivityDetails 
                    activity={selectedActivity} 
                    cancelSelectActivity={cancelSelectActivity} 
                    openForm={openForm}
                />}
                {editMode &&
                <ActivityForm closeForm={closeForm} activity={selectedActivity} />}
>>>>>>> 004f916e3806028d99e2ac780b01c38e6280e6b8
            </Grid.Column>
        </Grid>
    )
}