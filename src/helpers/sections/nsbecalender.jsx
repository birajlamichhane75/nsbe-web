"use client";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import CommonSection1 from "../ui/CommonSection1";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [events, setEvents] = useState({});

  // Fetch events from JSON file
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("/events.json");
      const data = await res.json();

      // Convert array to object grouped by date
      const formattedEvents = {};
      data.forEach((event) => {
        if (!formattedEvents[event.date]) {
          formattedEvents[event.date] = [];
        }
        formattedEvents[event.date].push(event.title);
      });

      setEvents(formattedEvents);
    };

    fetchEvents();
  }, []);

  // Get start/end of month
  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");

  // Generate days of the month
  const days = [];
  for (let day = startOfMonth.date(); day <= endOfMonth.date(); day++) {
    days.push(startOfMonth.date(day));
  }

  return (
   <CommonSection1>
  <div className="p-4 sm:p-6">
    {/* Header */}
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
      <button
        onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}
        className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800 w-full sm:w-auto"
      >
        ◀ Prev
      </button>
      <h2 className="text-xl sm:text-2xl font-bold text-center">
        {currentDate.format("MMMM YYYY")}
      </h2>
      <button
        onClick={() => setCurrentDate(currentDate.add(1, "month"))}
        className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800 w-full sm:w-auto"
      >
        Next ▶
      </button>
    </div>

    {/* Days Grid */}
    <div className="grid grid-cols-7 sm:grid-cols-7 md:grid-cols-7 gap-2 sm:gap-1">
      {days.map((day) => (
        <div
          key={day.format("DD-MM-YYYY")}
          className="border border-black p-2 sm:p-3 h-20 sm:h-28 rounded-md hover:bg-gray-100 transition"
        >
          {/* Day Number */}
          <p className="text-xs sm:text-sm font-semibold mb-1">{day.date()}</p>

          {/* Show Events */}
          {events[day.format("YYYY-MM-DD")]?.map((event, i) => (
            <a href="/events"
            key={i}>
              <p
              className="text-[10px] md:text-full sm:text-sm font-medium text-black bg-yellow-200 px-1 sm:px-2 py-0.5 sm:py-1 rounded mt-1 truncate"
            >
              {event}
            </p>
            </a>
          ))}
        </div>
      ))}
    </div>
  </div>
</CommonSection1>

  );
};

export default Calendar;
