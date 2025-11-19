import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchEventData } from '../scripts/event-script';
import { EventData } from '../types';
import EventsGrid from "../components/EventsGrid";

// Imports images from img/homepage folder; imported through glob bundling
const images = import.meta.glob<{default: string}>(
    '../img/homepage/*.{jpg,jpeg,JPG,png}', // Specify the path to headshots and add all relevant file extensions
    { eager: true }
);

// Takes the imported images and creates references to use in the returned TSX 
const aboutCollage = Object.fromEntries(
    Object.entries(images).map(([path, module]) => {
        const fileName = path.split('/').pop();
        return [fileName, module.default];
    })
);

function Homepage() {
  // Events from google sheet (initially empty)
  const [events, setEvents] = useState<EventData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Log the event list (debugging)
  useEffect(() => {
    console.log(events);
  }, [events])

  useEffect(() => {
    fetchEventData()
    .then((data: EventData[]) => {
      setEvents(data);
      setIsLoaded(true)})
    .catch(console.error);
  }, []);

  return (
    <div>
      {/* background graphic */}
      <div className="container-fluid main-bg-img" id="home-banner" >
        <div
          className="row lazy container-fluid"
        >
          <div className="text-center" id='home-title'>
            <h1 style={{
                  fontSize: '3.5rem',
                  textShadow: "3px 3px 7px #25291C, -3px -3px 7px #25291C, -3px 3px 7px #25291C, 3px -3px 7px #25291C",
                  color: "#fff", // optional: helps make it pop
                }}>Chancellor's Scholars Alliance at UC San Diego</h1>
            <div id="contact-button">
              <NavLink to="/contact">Contact Us!</NavLink>
            </div>
        </div>
          </div>
      </div>
      <div className="bar-divider gray"></div>

      {/* Container spanning full width for about bg*/}
      <div className="container-fluid home-section">
        {/* Container fit to middle width */}
        <div className="container" id="about-card">
            {/* Text column */}
            <div className="text-center" id="about-us-blurb">
                <h2>About Us</h2>
                <p>
                As the Chancellor's Scholar's Alliance, a nonprofit, student run
                organization, we intend to serve as a resource for current and
                future students and to welcome UCSD's newest scholars to our
                community. We seek to equip and empower scholars to become the
                world's next generation of leaders by providing them with
                mentoring networks, bonding socials, and service outreaches in
                order to build unity, teamwork, and purpose.
                </p>
                <NavLink to="/about"> More about us...</NavLink>
            </div>

            {/* Collage column */}
            <div id="collage">  
                <div className="row">
                    <div className="col-sm-6 collage-item text-center">
                        <img 
                            src={aboutCollage["bbq.jpg"]} 
                            alt="about-image-1" 
                            height="100" width="200" />
                    </div>
                    <div className="col-sm-6 collage-item text-center">
                        <img 
                            src={aboutCollage["flowers.jpg"]} 
                            alt="about-image-2" 
                            height="100" width="200" />
                    </div>
                    <div className="col-sm-6 collage-item  text-center">
                        <img 
                            src={aboutCollage["annie keene.jpeg"]} 
                            alt="about-image-3" 
                            height="100" width="200" />
                    </div>
                    <div className="col-sm-6 collage-item  text-center">
                        <img 
                            src={aboutCollage["peer mentor.jpeg"]} 
                            alt="about-image-4" 
                            height="100" width="200" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Container spanning full width for about bg*/}
      <div className="container-fluid home-section" id="event-container">
        {/* Container fit to middle width */}
        <div className="container text-center" id="event-cards">
          <h1> Events </h1>
          {/* Generates event cards from the pulled list of events and displays a message if there aren't any events */}
          <div style={{display: 'flex', justifyContent: 'center'}}>
            {/* Nested condition where it has two states for when the events have been fetched, and if not then display a loading message */}
            {isLoaded ? 
            (events.length > 0 ? (<EventsGrid events={events} />) : (<p style={{ padding: '40px' }}>No events coming up...</p>)) 
            : (<p style={{ padding: '40px' }}>Loading events...</p>
            )}
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Homepage;
