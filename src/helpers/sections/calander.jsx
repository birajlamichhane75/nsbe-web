import React from 'react';
import CommonSection1 from '../ui/CommonSection1';

const Calender = () => {
    return ( 
        <div>
            <CommonSection1>
                <div className="calendar-container">
                    {/* Google Calendar Embed */}
                    <iframe
                        src="https://calendar.google.com/calendar/embed?src=your-calendar-id%40group.calendar.google.com&ctz=America%2FNew_York"
                        style={{ border: '0', width: '100%', height: '600px' }}
                        frameBorder="0"
                        scrolling="no"
                    ></iframe>
                </div>
            </CommonSection1>
        </div>
     );
}

export default Calender;
