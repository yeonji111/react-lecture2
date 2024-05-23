import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useState } from "react";
const localizer = momentLocalizer(moment);

const Schedule = () => {
  /* moment.js react-big-calendar */

  const [events, setEvents] = useState([
    {
      title: "이벤트1",
      start: new Date(),
      end: new Date(),
      contents: "자격증시험",
    },
    {
      title: "이벤트2",
      start: new Date("2024-05-23"),
      end: new Date("2024-05-25"),
    },
  ]);

  const clickEvent = (param) => {
    console.log("e: ", param);

    //version1. date 내장메서드
    //version2. moment.js
    if (param) {
      console.log(param.start.toISOString().split("T")[0]);
      console.log(moment(param.start).format("YYYY년MM월DD일"));
    }
  };
  const clickSlot = (param) => {
    console.log("s:", param);

    if (param) {
      setEvents([
        ...events,
        { title: "이벤트3", start: param.start, end: param.end },
      ]);
    }
  };

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={clickEvent}
        onSelectSlot={clickSlot}
        selectable
      />
    </>
  );
};
export default Schedule;
