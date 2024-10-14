// import React from "react";
// // import { useSelector } from "react-redux";
// import EventCard from "../components/Events/EventCard";
// import Header from "../components/Layout/Header";
// // import Loader from "../components/Layout/Loader";

// const EventsPage = () => {
// //   const { allEvents, isLoading } = useSelector((state) => state.events);
//   return (
//     <>
//       {/* {isLoading ? (
//         <Loader />
//       ) : ( */}
//         <div>
//           <Header activeHeading={4} />
//           <EventCard active={true} />
//           <EventCard active={true} />
//         </div>
//       {/* )} */}
//     </>
//   );
// };

// export default EventsPage;
import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <EventCard active={true} data={allEvents && allEvents[0]} />
        </div>
      )}
    </>
  );
};

export default EventsPage;





// import React from "react";
// import { useSelector } from "react-redux";
// import EventCard from "../components/Events/EventCard";
// import Header from "../components/Layout/Header";
// import Loader from "../components/Layout/Loader";

// const EventsPage = () => {
//   const { allEvents, isLoading } = useSelector((state) => state.events);
  
//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div>
//           <Header activeHeading={4} />
//           {/* Map through allEvents and render EventCard for each event */}
//           {allEvents && allEvents.length > 0 ? (
//             allEvents.map((event, index) => (
//               <EventCard key={index} active={true} data={event} />
//             ))
//           ) : (
//             <p>No events available.</p>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default EventsPage;
