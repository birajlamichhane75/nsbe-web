"use client";
import React, { useEffect, useState } from "react";
import CommonSection1 from "../ui/CommonSection1";

const EventDetails = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("/events.json"); // your JSON file in /public
      const data = await res.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <CommonSection1>
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-black">
            Upcoming Events
          </h2>

          <div className="flex flex-col gap-4">
            {events.map((event, index) => (
              <div key={index} className="space-y-1">
                <p className="text-xl font-bold text-black">{event.title}</p>
                <p className="text-red-900 font-medium">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                {event.details && (
                  <p className="text-black">{event.details}</p>
                )}
                <hr className="border-t border-black mt-2" />
              </div>
            ))}
          </div>
        </div>
      </CommonSection1>
    </div>
  );
};

export default EventDetails;
