import { useState, useEffect } from "react";
// Function that calls the API from the Google Apps Script to retrieve the 
// sheets event data
import { fetchEventData } from '../scripts/event-script';
// A datatype that fits the schema of the json expected from the google sheet
import { EventData } from '../types';
import { formatDriveLink } from "../scripts/event-script";
//import EventsGrid from "../components/EventsGrid";

function EventCalendar({ events }: { events: EventData[] }) {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // Get number of days and first weekday of this month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // 0=Sunday

    // Group events by date (YYYY-MM-DD)
    const eventsByDate: Record<string, EventData[]> = {};
    events.forEach(event => {
        const dateKey = new Date(event.EventEndDate).toISOString().split("T")[0];
        if (!eventsByDate[dateKey]) eventsByDate[dateKey] = [];
        eventsByDate[dateKey].push(event);
    });

    // Create grid cells
    const days = [];
    for (let i = 0; i < firstDay; i++) {
        // Empty cells before the first day
        days.push(<div key={`empty-${i}`} className="day-cell empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const dayEvents = eventsByDate[dateStr] || [];

        days.push(
            <div key={dateStr} className="day-cell">
                <div className="date-number">{day}</div>
                <div className="event-container">
                    {dayEvents.map(event => (
                        <a
                            key={event.EventEndDate + event.InstagramURL}
                            href={event.InstagramURL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={formatDriveLink(event.ImageURL)}
                                alt="event"
                                className="event-image"
                                referrerPolicy="no-referrer"
                            />
                        </a>
                    ))}
                </div>
            </div>
        );
    }

    // Navigation handlers
    const goToPreviousMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(prev => prev - 1);
        } else {
            setCurrentMonth(prev => prev - 1);
        }
    };

    const goToNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(prev => prev + 1);
        } else {
            setCurrentMonth(prev => prev + 1);
        }
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                <button onClick={goToPreviousMonth}>&lt;</button>
                <h2>{new Date(currentYear, currentMonth).toLocaleString("default", { month: "long", year: "numeric" })}</h2>
                <button onClick={goToNextMonth}>&gt;</button>
            </div>

            <div className="weekdays">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
                    <div key={d} className="weekday">{d}</div>
                ))}
            </div>

            <div className="calendar-grid">{days}</div>
        </div>
    );
}

// ---------------- MAIN EVENTS COMPONENT ---------------- //
function Events() {
    const [events, setEvents] = useState<EventData[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        console.log(events);
    }, [events]);

    useEffect(() => {
        fetchEventData()
            .then((data: EventData[]) => {
                setEvents(data);
                setIsLoaded(true);
            })
            .catch(console.error);
    }, []);

    return (
        <div className="page-container">
            <h1 className="text-center">Events</h1>
            <hr />

            <div className="container text-center" id="event-cards">
                <div style={{ display: 'block', justifyContent: 'center' }}>
                    {isLoaded ? (
                         <>
                            {/* Show message on top if there are no events */}
                            {events.length === 0 && (
                                <p style={{ textAlign: "center", padding: "20px", color: "#666" }}>
                                No events coming up...
                                </p>
                            )}

                            {/* Always show the calendar grid */}
                            <EventCalendar events={events}/>
                        </>
                        ) : (
                            <p style={{ textAlign: "center", padding: "40px" }}>Loading events...</p>
                        )}
                </div>
            </div>
        </div>
    );
}

export default Events;