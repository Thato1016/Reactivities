import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectActivity, setSelectedtActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] =useState(false);

  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);

  const [selectActivity, setSelectedtActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] =useState(false);


  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, [])

  function handleSelectActivity(id: string) {
<<<<<<< HEAD

    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);

    setSelectedtActivity(activities.find(x => x.id === id));
    setEditMode(true);

=======
    setSelectedtActivity(activities.find(x => x.id === id));
    setEditMode(true);
>>>>>>> 004f916e3806028d99e2ac780b01c38e6280e6b8
  }
  
function handleCancelSelectActivity() {
  setSelectedtActivity(undefined);
}

function handleFormOpen(id?: string) {
  id ? handleSelectActivity(id) : handleCancelSelectActivity();
}

function handleFormClose() {
  setEditMode(false);
}

  return (
    <>
    <NavBar openForm={handleFormOpen} />
    <Container style={{marginTop: '7em'}}>
      <ActivityDashboard 
<<<<<<< HEAD
<<<<<<< HEAD        activities= {activities}
        selectedActivity={selectedActivity}
        selectActivity={handleSelectActivity}
        cancelSelectActivity={handleCancelSelectActivity}

=======
>>>>>>> 004f916e3806028d99e2ac780b01c38e6280e6b8
      activities= {activities}
      selectedActivity={selectActivity}
      selectActivity={handleSelectActivity}
      cancelSelectActivity={handleCancelSelectActivity}
      editMode={editMode}
      openForm={handleFormOpen}
      closeForm={handleFormClose}

<<<<<<< HEAD

=======
>>>>>>> 004f916e3806028d99e2ac780b01c38e6280e6b8
      />
    </Container>
    </>
  );
}

export default App;
