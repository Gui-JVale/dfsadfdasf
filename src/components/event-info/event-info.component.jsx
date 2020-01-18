import React from 'react'; 

import DateDuration from '../date-duration/date-duration.component'; 
import Attire from '../attire/attire.component'; 
import EventCopy from '../event-copy/event-copy.component'; 

import './event-info.styles.sass';

const EventInfo = ({en, pt, title, alternative}) => (
    <div className={alternative ? `event-info alternative` : `event-info`}>

        <h2 className="title">{title}</h2>
        <DateDuration 
            ptDate={pt.date} 
            ptWeekday={pt.weekday} 
            ptDuration={pt.duration}
            enDate={en.date} 
            enWeekday={en.weekday}
            enDuration={en.duration}
            alternative={alternative}
        />
        {pt.attire ? (
            <Attire 
            ptAttire={pt.attire}
            enAttire={en.attire}
            alternative={alternative}
            />
        ): null}
        {pt.copy ? (
            <EventCopy
            ptCopy={pt.copy}
            enCopy={en.copy}
            alternative={alternative}
            />
        ): null}

    </div>
);

export default EventInfo; 