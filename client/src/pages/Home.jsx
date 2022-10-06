import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Home.scss';
import Header from '../components/Header';
import ActiveTasks from '../components/ActiveTasks';
import FreshTasks from '../components/FreshTasks';
import Button from '../components/Button';

const Home = () => {
  const ACTIVE = 'active';
  const FRESH = 'fresh';

  const [tasks, setTasks] = useState([]);
  const [list, setList] = useState(ACTIVE);

  useEffect(() => {
    Promise.all([axios.get('/api/tasks/templates/')])
      .then(response => {
        const tasks = response[0].data;
        console.log("hometasks", tasks)
        setTasks(tasks);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='home'>
      <Header />
      <section className='home__welcome-message'>
        <h2>Welcome message!</h2>
      </section>
      <section className='home__button-group'>
        <Button onChange={setList} value={list} selected={list === FRESH}>
          Start Fresh
        </Button>
        <Button onChange={setList} value={list} selected={list === ACTIVE}>
          In-Progress
        </Button>
      </section>
      <section className='home__list'>
        {list === ACTIVE && <ActiveTasks />}
        {list === FRESH && <FreshTasks tasks={tasks} />}
      </section>
    </div>
  );
};

export default Home;