import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Topbarlogin } from "../components/Topbarlogin";
import { useNavigate } from "react-router-dom";
import { info } from "../store/atoms/userinfo";
import { useRecoilState, useRecoilValue } from "recoil";
import ss from "../images/logo.png";
import toast from "react-hot-toast";

export function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [inf, setInfo] = useRecoilState(info);
  const [projectinfo, setprojectinfo] = useState([]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    console.log("Updated projectinfo:", projectinfo);
  }, [projectinfo]);
  useEffect(() =>{
    if(!localStorage.getItem("token")){
      navigate("/")
    }
  },[])

  const LoadingIndicator = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
      <div className="w-16 h-16 border-t-4 border-green-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
  if (loading) {
    return (
      <div>
        <LoadingIndicator></LoadingIndicator>
      </div>
    );
  }

  return (
    <div className="overflow-hidden ">
      <div
        className={`fixed right-0  top-0 z-50  ${
          isSidebarOpen ? "left-48" : "left-0"
        }`}
      >
        <div className="z-40">
          <Topbarlogin
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          ></Topbarlogin>
        </div>

        <div></div>
      </div>
      <div className="">
        <div className="z-50">
          <Sidebar isSidebarOpen={isSidebarOpen}></Sidebar>

          <div
            className="z-0 w-screen bg-mybg"
            onClick={() => {
              setSidebarOpen(false);
            }}
          >
            <div>
              <div className="z-0 flex justify-center">
                <div className={`mt-10 ${isSidebarOpen?"ml-48":""}`}>
                  <Dashboardelements></Dashboardelements>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { useState } from 'react';
import { Calendar } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { dateFnsLocalizer } from "react-big-calendar";
import enUS from "date-fns/locale/en-US";
import {
  PencilIcon,
  AcademicCapIcon,
  FlagIcon,
  DocumentTextIcon,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Calendar localizer setup
const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: startOfWeek,
  getDay: getDay,
  locales,
});

const Dashboardelements = () => {
  const navigate = useNavigate();
  const [events] = useState([
    {
      title: "SAT Test Date",
      start: new Date(2024, 9, 15),
      end: new Date(2024, 9, 15),
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
          <header className=" flex items-center justify-between bg-white p-4 rounded-xl shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            My Future Pathway
          </h1>
          <p className="text-gray-500">Welcome back, Student! 🎓</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-medium">GPA: 3.8</p>
            <p className="text-sm text-gray-500">SAT: 1450</p>
          </div>
          <button onClick={()=>{
            navigate("/studentform")
          }} className="p-2 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <PencilIcon className="w-6 h-6 text-green-600" />
          </button>
        </div>
      </header>

          </div>
          {/* Goals Tracker Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              My Goals Tracker
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/colleges"
                className="group block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <AcademicCapIcon className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">
                        Dream Colleges
                      </h3>
                      <p className="text-3xl font-bold text-green-600">3</p>
                    </div>
                  </div>
                  <span className="text-gray-400 group-hover:text-green-600 transition-colors">
                    →
                  </span>
                </div>
              </a>
              <a
                href="/milestones"
                className="group block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <FlagIcon className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">
                        Active Milestones
                      </h3>
                      <p className="text-3xl font-bold text-green-600">5</p>
                    </div>
                  </div>
                  <span className="text-gray-400 group-hover:text-green-600 transition-colors">
                    →
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="mt-4 bg-purple-50 p-4 rounded-xl">
              <div onClick={()=>{
                navigate('/assistant')
              }}  className="cursor-pointer flex items-center gap-2 mb-2 ">
                <ChatBubbleOvalLeftIcon className="w-5 h-5 text-purple-600" />
                <h4 className="font-medium">Personal Assistant</h4>
              </div>
              <button onClick={()=>{
                navigate('/assistant')
              }} className="w-full bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
                Ask any doubt →
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <StudentCalendar></StudentCalendar>

          
        </div>
      </div>
    </div>
  );
};

function Sidebar({ isSidebarOpen }) {
  const navigate = useNavigate();
  return (
    <aside
      id="separator-sidebar"
      className={`fixed top-0 left-0 z-40 w-48 h-screen transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } `}
      aria-label="Sidebar"
    >
      <div className="flex flex-col justify-between h-full px-3 pt-1 pb-4 overflow-y-auto bg-[rgb(41,127,101)]">
        <div>
          <ul className="cursor-pointer space-y-2 font-medium">
            <li>
              <a className="flex items-center justify-center p-2 rounded-lg text-white  group">
                <div className="flex space-x-0">
                  <span className="flex flex-col justify-center">
                    <img className="h-6 w-6" src={ss} alt="Design" />
                  </span>
                  <span className="ms-3 mt-1 mr-2 text-sm text-mytext">
                    OPPORTUNITREE
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a
                onClick={() => {
                  //navigate("/userprofile");
                }}
                className="flex items-center p-2 rounded-lg text-mytext hover:bg-mytextbg group  group fill-mytext hover:text-white hover:fill-[#ffffff]"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5  transition duration-75  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  // fill="#dfd6d6"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
              </a>
            </li>

            <li>
              <a
                onClick={() => {
                  navigate("/assistant");
                }}
                className="flex items-center p-2 rounded-lg text-mytext hover:bg-mytextbg group  group fill-mytext hover:text-white hover:fill-[#ffffff]"
              >
                
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><path fill="fill-mytext" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.926 13.202l-3 .26l.26-3l6.24-6.2a1 1 0 0 1 1.43 0l1.27 1.28a1.001 1.001 0 0 1 0 1.42zM.842 3.972c-.351-.061-.351-.565 0-.626A3.176 3.176 0 0 0 3.4.896l.021-.097c.076-.346.57-.349.65-.002l.025.112A3.193 3.193 0 0 0 6.66 3.345c.353.06.353.567 0 .629a3.193 3.193 0 0 0-2.565 2.435l-.026.113c-.079.346-.573.344-.649-.003l-.02-.097a3.176 3.176 0 0 0-2.56-2.45Z"/></svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Assistant</span>
              </a>
            </li>

            <li>
              <a
                onClick={() => {
                  navigate("/studentform");
                }}
                className="flex items-center p-2 rounded-lg text-mytext hover:bg-mytextbg group  group fill-mytext hover:text-white hover:fill-[#ffffff]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="fill-mytext" d="M2 2h20v5H2zm0 7h20v13H2zm16 5.5v-2H6v2zm-4 4v-2H6v2z"/></svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Survey Form</span>
              </a>
            </li>

            
            <li>
              <a
                onClick={() => {
                  //navigate("/settings");
                }}
                className="flex items-center p-2 text-mytext rounded-lg hover:bg-mytextbg group hover:text-white group fill-mytext hover:fill-[#ffffff]"
              >
                <svg
                  className="w-[25px] h-[25px]"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path>
                </svg>

                <span className="ms-3">Settings</span>
              </a>
            </li>
          </ul>
          <ul className=" mt-10 pt-10 space-y-2 font-medium border-t text-mytext border-gray-200 dark:border-[rgb(31,94,75)]">
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe7G-6BswDGNbcGfjRcGttV4oxP3eet_QRgUTkHkuwc49axfA/viewform?usp=sf_link"
                className="flex items-center p-2 text-mytext rounded-lg  group fill-mytext hover:fill-[#ffffff] hover:bg-mytextbg group hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-[15px] h-[20px] "
                  viewBox="0 0 384 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8V488c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488V24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96zM80 352c0 8.8 7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96z"></path>
                </svg>
                <span className="ms-3">Feedback</span>
              </a>
            </li>
            
            <li>
              <a
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("userinfo");
                  localStorage.removeItem("allusers");
                  localStorage.removeItem("starttime");
                  localStorage.removeItem("weektasks");
                  navigate("/signin");
                }}
                className="cursor-pointer flex items-center p-2 text-mytext rounded-lg hover:bg-mytextbg group hover:text-white fill-mytext hover:fill-[#ffffff]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="ms-3">Log out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

import {
  PlusIcon,
  TrashIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

function StudentCalendar() {
  const [loading, setLoading] = useState(false);
  // const [events, setEvents] = useState([]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    color: "#3B82F6",
  });

  const [events, setEvents] = useState([]);


  const formatEvents = (events) => {
    return events.map((event) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }));
  };

  useEffect(() => {
    async function getdata() {
      setLoading(true);
      try {
        const response = await axios.get(`https://oppurt_backend.opportunitree.workers.dev/getevents`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        if (response.data.success) {
          setEvents(formatEvents(response.data.res));
        } else {
          console.error("Error fetching events", response.data);
        }
      } catch (error) {
        console.error("Error fetching todos", error);
      } finally {
        setLoading(false);
      }
    }
    getdata();
  }, []);

  const handleCompleteTask = async (eventId) => {
    try {
      const response = await axios.post(
        "https://oppurt_backend.opportunitree.workers.dev/deleteevents",
        {
          event_id: eventId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("Event deleted successfully");
      } else {
        console.error("Event deletion failed: ", response.data);
        alert("Failed to delete event. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting event", error);
      alert("An error occurred while deleting the event.");
    }
  };

  const handleAddEvent = async () => {
    const start = new Date(newEvent.start);
    const end = new Date(newEvent.end);
    const title = newEvent.title;
    const color = newEvent.color;

    try {
      const response = await axios.post(
        "https://oppurt_backend.opportunitree.workers.dev/addevent",
        {
          title,
          color,
          start: start.toISOString(),
          end: end.toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming you're using JWT tokens for auth
          },
        }
      );

      console.log(response.data);

      if (response.data.success) {
        // If the event creation was successful, add the new event to the local state
        setEvents([
          ...events,
          { title, start, end, color, id: response.data.res.id },
        ]);

        // Clear the new event input fields
        setNewEvent({
          title: "",
          start: "",
          end: "",
          color: "#3B82F6",
        });
        toast.success("Event added successfully");
      } else {
        console.error("Event creation failed: ", response.data);
        alert("Failed to add event. Please try again.");
      }
    } catch (error) {
      console.error("Error adding event", error);
      alert("An error occurred while adding the event.");
    }
  };

  const handleCreateEvent = () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      // setEvents([
      //   ...events,
      //   {
      //     ...newEvent,
      //     id: Date.now(),
      //     start: new Date(newEvent.start),
      //     end: new Date(newEvent.end),
      //   },
      // ]);
      handleAddEvent();
      setShowEventForm(false);
    }
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
    setSelectedEvent(null);
    handleCompleteTask(eventId);
  };

  const handleSlotSelect = ({ start, end }) => {
    setNewEvent({
      ...newEvent,
      start: format(start, "yyyy-MM-dd'T'HH:mm"),
      end: format(end, "yyyy-MM-dd'T'HH:mm"),
    });
    setShowEventForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-md font-semibold mr-16 text-gray-800">
            Academic Calendar
          </h3>
          <button
            onClick={() => setShowEventForm(true)}
            className="flex text-xs items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <PlusIcon className="w-5 h-5" />
            New Event
          </button>
        </div>

        {/* Calendar Container */}
<div className="border shadow-lg rounded-xl overflow-hidden text-[11px] bg-white">
  <Calendar
    localizer={localizer}
    events={events}
    startAccessor="start"
    endAccessor="end"
    style={{ height: 350 }}
    className="[&_.rbc-header]:bg-gray-100 [&_.rbc-header]:py-2 [&_.rbc-header]:text-gray-700 [&_.rbc-day-bg+_rbc-today]:bg-green-50"
    eventPropGetter={(event) => ({
      style: {
        backgroundColor: event.color,
        border: "none",
        borderRadius: "4px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        color: "#fff",
        fontSize: "0.75rem",
        padding: "1px 6px",
        fontWeight: "500",
      },
    })}
    components={{
      toolbar: CustomToolbar,
      event: CustomEvent,
    }}
    onSelectEvent={(event) => setSelectedEvent(event)}
    onSelectSlot={handleSlotSelect}
    selectable
  />
</div>


        {/* Upcoming Events List */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold mb-4 text-gray-700">
            Upcoming Events
          </h4>
          <div className={`space-y-2 text-xs overflow-y-auto max-h-32 custom-scrollbar`}>
            {events.length == 0 && <div className="text-red-400">
              You have NO upcoming events.
              </div>}
            {events.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: event.color }}
                  ></div>
                  <span className="font-medium text-gray-700">
                    {event.title}
                  </span>
                  <span className="text-sm text-gray-500">
                    {format(event.start, "MMM dd, yyyy h:mm a")}
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteEvent(event.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showEventForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Create New Event</h3>
              <button
                onClick={() => setShowEventForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Event Title
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Start Date
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                    value={newEvent.start}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, start: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    End Date
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                    value={newEvent.end}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, end: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Event Color
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {[
                    "#3B82F6",
                    "#10B981",
                    "#F59E0B",
                    "#EF4444",
                    "#8B5CF6",
                    "#EC4899",
                  ].map((color) => (
                    <button
                      key={color}
                      onClick={() => setNewEvent({ ...newEvent, color })}
                      className={`w-8 h-8 rounded-lg border-2 ${
                        newEvent.color === color
                          ? "border-green-500"
                          : "border-transparent"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowEventForm(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleCreateEvent}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{selectedEvent.title}</h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Start:</span>
                {format(new Date(selectedEvent.start), "MMM dd, yyyy h:mm a")}
              </p>
              <p className="text-sm">
                <span className="font-medium">End:</span>
                {format(new Date(selectedEvent.end), "MMM dd, yyyy h:mm a")}
              </p>
              <div className="flex items-center gap-2 mt-4">
                <button
                  onClick={() => handleDeleteEvent(selectedEvent.id)}
                  className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                >
                  Delete Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function CustomToolbar(props) {
  // Destructure label, onNavigate, onView, and view from props
  const { label, onNavigate, view, onView } = props;

  const handleNavigate = (action) => {
    if (typeof onNavigate === "function") {
      onNavigate(action); // Only call if onNavigate is a function
    } else {
      console.error("onNavigate is not a function", onNavigate); // Log the issue
    }
  };

  const handleViewChange = () => {
    if (typeof onView === "function") {
      onView("month"); // Switch to month view
    } else {
      console.error("onView is not a function", onView); // Log the issue
    }
  };

  return (
    <div className="flex justify-between items-center p-2">
      {/* Conditionally render Back, Next, and Today buttons based on the current view */}
      {view !== "day" && (
        <>
          <button
            onClick={() => handleNavigate("PREV")}
            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleNavigate("NEXT")}
            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleNavigate("TODAY")}
            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
          >
            Today
          </button>
        </>
      )}

      {view === "day" && (
        <button
          onClick={handleViewChange}
          className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
        >
          Month View
        </button>
      )}

      <span className="font-bold">{label}</span>
    </div>
  );
}

const CustomEvent = ({ event }) => (
  <div className="flex items-center px-2 py-1">
    <div className="flex-1 truncate">{event.title}</div>
  </div>
);

