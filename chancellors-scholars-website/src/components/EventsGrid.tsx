import { EventData } from "../types";
import { formatDriveLink } from "../scripts/event-script";

interface EventsProps {
  events: EventData[];
}


function EventsGrid({ events }: EventsProps){
    
    return(
        <>
            {events
            .map(event => (
                <a key={event.EventEndDate} href={event.InstagramURL} target="_blank" style={{margin: '25px'}}>
                    <img
                        src={formatDriveLink(event.ImageURL)}
                        alt="event image"
                        className="event-card"
                        width={400}
                        referrerPolicy="no-referrer" // Without this, we get 429 error on fetch https://stackoverflow.com/questions/79052869/google-drive-returns-429-when-using-saved-photo-as-src-for-img-tag 
                        loading="lazy"
                    />
                </a>
            ))}
        </>
    )
}

export default EventsGrid;