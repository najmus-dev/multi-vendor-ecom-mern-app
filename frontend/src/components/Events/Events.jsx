
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/styles';
import EventCard from './EventCard';
import { getAllEvents } from '../../redux/actions/event'; 

const Events = () => {
  const dispatch = useDispatch(); // Use dispatch to fetch events

  // Fetch all events and loading state from the store
  const { allEvents, isLoading } = useSelector((state) => state.events);

  // Fetch events when the component mounts
  useEffect(() => {
    dispatch(getAllEvents()); // Dispatch the action to fetch events
  }, [dispatch]);

  return (
    <div>
      {!isLoading && (
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1>Popular Events</h1>
          </div>

          <div className="w-full grid">
            {allEvents.length !== 0 && (
              <EventCard data={allEvents[0]} />
            )}
            <h4>
              {allEvents?.length === 0 && 'No Events have!'}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
