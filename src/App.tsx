import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

const Content = () => {
  return (
    <FullCalendar
      initialView="dayGridMonth"
      plugins={[dayGridPlugin, timeGridPlugin]}
      customButtons={{
        myCustomButton: {
          text: "custom!",
          click: function () {
            alert("clicked the custom button!");
          },
        },
      }}
      headerToolbar={{
        start: "prev,next",
        end: "dayGridMonth,timeGridWeek,timeGridDay,myCustomButton",
      }}
      events={{}}
      datesSet={() => {}}
      eventClick={() => {}}
    />
  );
};

function App() {
  return Content();
}

export default App;
