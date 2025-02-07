import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  StarIcon as StarOutline,
  BookmarkIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  PencilIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function Assistant() {
  const [starredItems, setStarredItems] = useState([]);
  const [response, setResponse] = useState([]);
  const [savedres, setSavedres] = useState([]);
  const [loadingsavedres, setLoadingsavedres] = useState([]);
  const [oldresponses, setoldresponses ] = useState([]);
  const navigate = useNavigate();
  function handleResponseSubmit() {
    try {
      setloadingres(true);
      axios
        .post(
          `https://oppurt_backend.opportunitree.workers.dev/getresponses`,
          { question },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          //setquestions(response.data.res.questions);
          setResponse(response.data.res[question.RESPONSE_KEY]);
          console.log(response.data.res[question.RESPONSE_KEY]);
          setloadingres(false);
        });
    } catch (error) {
      console.error("Error fetching dashboard data", error);
      //toast.error("Failed to get data from server", { id: toastId });
      setloadingres(false);
    }
  }
  const [loading, setLoading] = useState(false);
  const [loadingres, setloadingres] = useState(false);
  const [question, setQuestion] = useState(null);
  const [quesfields, setQuesfields] = useState([]);
  const [resquestion, setResquestion] = useState(null);
  const [sampleQuestions, setquestions] = useState([
    {
      question:
        "What local clubs or organizations can I join related to [hobbies] and [possible majors] within my [Budget Range]? If [staylocal] is true, ONLY suggest options near [address] or online.",
      ROLE: "Community Engagement Advisor",
      category: "Clubs & Organizations",
      icon: "UserGroupIcon",
      RESPONSE_KEY: "local_clubs",
      ADDITIONAL_FIELDS:
        '"club_name": "Name of the club/organization", "location": "Location of the club", "membership_fee": "Cost to join", "meeting_schedule": "Meeting times or frequency", "link": "Related link or website"',
    },
    {
      question:
        "What competitions can I participate in related to [possible majors] that will boost my chances of getting into [dream colleges] and stay within my [Budget Range]? If [staylocal] is true, find ONLY competitions close to [address] or online.",
      ROLE: "Competition Advisor",
      category: "Competitions",
      icon: "TrophyIcon",
      RESPONSE_KEY: "competitions",
      ADDITIONAL_FIELDS:
        '"competition_name": "Name of the competition", "location": "Location or online", "registration_deadline": "Registration deadline", "eligibility": "Eligibility criteria", "link": "Related link"',
    },
    {
      question:
        "How can I start my own passion project around [possible majors] or [hobbies] that fits within my [Budget Range] and would be eye-catching for [dream colleges], one that could impact my [school] or community around [address]?",
      ROLE: "Passion Project Advisor",
      category: "Passion Projects",
      icon: "SparklesIcon",
      RESPONSE_KEY: "passion_projects",
      ADDITIONAL_FIELDS:
        '"project_idea": "Description of the project idea", "budget_range": "Budget constraints", "school_impact": "Potential impact on school/community", "resources": "Available resources or support", "link": "Related link or inspiration"',
    },
    {
      question:
        "Are there any local or national service activities related to [hobbies] and [possible majors] that I can participate in within my [Budget Range]? If [staylocal] is true, only show activities near [address] or online.",
      ROLE: "Service Activity Advisor",
      category: "Service Activities",
      icon: "HandsHelpingIcon",
      RESPONSE_KEY: "service_activities",
      ADDITIONAL_FIELDS:
        '"activity_name": "Name of the service activity", "location": "Location or online", "duration": "Duration or schedule", "eligibility": "Eligibility criteria", "link": "Related link"',
    },
    {
      question:
        "Can you suggest summer programs related to [possible majors], give me safety, target, and reach summer program (reach being super prestigious) and take into account my [Budget Range], [SAT/ACT], [Current Awards/Recognition]? If [staylocal] is true, show ONLY local programs near [address].",
      ROLE: "Academic Advisor",
      category: "Summer Programs",
      icon: "AcademicCapIcon",
      RESPONSE_KEY: "summer_program_suggestions",
      ADDITIONAL_FIELDS:
        '"program_name": "Name of the summer program", "type": "Safety/Target/Reach designation", "location": "Location of the program", "budget_range": "Budget constraints", "SAT_ACT": "SAT/ACT requirements", "awards": "Current awards or recognition", "link": "Related link"',
    },
    {
      question:
        "What internships are available for high school students interested in [possible majors] that stay within my [Budget Range]? If [staylocal] is true, only find internships near [address] or online.",
      ROLE: "Career Counselor",
      category: "Internships",
      icon: "BriefcaseIcon",
      RESPONSE_KEY: "internships",
      ADDITIONAL_FIELDS:
        '"company": "Company offering the internship","deadline": "last date to apply", "location": "Internship location", "stipend": "Stipend or cost information", "requirements": "Eligibility criteria", "link": "Related link"',
    },
    {
      question:
        "Can you suggest leadership opportunities in local clubs or organizations that align with my [hobbies], [possible majors], and [sports] and are within my [Budget Range]? If [staylocal] is true, find leadership roles near [address] or online.",
      ROLE: "Leadership Coach",
      category: "Leadership Opportunities",
      icon: "UserGroupIcon",
      RESPONSE_KEY: "leadership_opportunities",
      ADDITIONAL_FIELDS:
        '"position": "Leadership position title", "organization": "Name of the club/organization", "location": "Location or online", "requirements": "Eligibility or experience requirements", "link": "Related link"',
    },
  ]);

  useEffect(() =>{
    if(!localStorage.getItem("token")){
      navigate("/")
    }
  },[])

  let timeoutId = null;

  useEffect(() =>{
    async function saveintrestes() {
      try {
        
        axios
          .post(
            `https://oppurt_backend.opportunitree.workers.dev/savestudentinterests`,
            { interests:JSON.stringify(savedres) },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            
          });
      } catch (error) {
        console.error("Error saving responses", error);
      }
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      saveintrestes();
    }, 500);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

  },[savedres])


  useEffect(() =>{
    async function saveintrestes() {
      try {
        
        axios
          .post(
            `https://oppurt_backend.opportunitree.workers.dev/getstudentinterests`,
            { },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            setSavedres(JSON.parse(response.data.res.interests))
          });
      } catch (error) {
        console.error("Error saving responses", error);
      }
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      saveintrestes();
    }, 500);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

  },[])


  const toggleStar = (item) => {
    const updated = savedres.some((i) => i.title === item.title)
      ? savedres.filter((i) => i.title !== item.title)
      : [...savedres, item];

      setSavedres(updated);
      const toggleMarked = (item) => {
        setResponse((prevResponse) =>
            prevResponse.map((it) =>
                it.title === item.title
                    ? { ...it, marked: false }
                    : it
            )
        );
    };
    
    // Call the function with the specific item
    toggleMarked(item);
    
  };

  const handleQuestionClick = async (q) => {
    try {
      setoldresponses((prevResponses) => [...prevResponses, response]);
      if (!loadingres) {
        setQuestion(q);
      }
    } finally {
      // Any cleanup if necessary
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-60 border-r bg-white p-6 shadow-sm flex flex-col ">
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <StarSolid className="w-5 h-5 text-green-600" />
            Saved Responses
          </h2>

          <div className="space-y-3 mb-6">
  {savedres.slice().reverse().map((item, index) => {
    return (
      index < 9 && (
        <div
          key={index}
          className="w-48 group p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors tooltip"
        >
          <div className="w-48 flex justify-between items-start">
            <p className="w-40 text-sm max-w-full text-gray-700 truncate flex-1">
              {item.title}
            </p>
            <button
              onClick={() => toggleStar(item)}
              className="text-green-600 hover:text-amber-500 ml-2"
            >
              <StarSolid className="w-4 h-4" />
            </button>
            <span className=" text-xs tooltip-text">{item.description}</span>
          </div>
        </div>
      )
    );
  })}
</div>


        </div>

        {/* Bottom Section */}
        <div className="border-t pt-6 mt-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <BriefcaseIcon className="w-4 h-4 text-gray-500" />
            Your Personal assistant
          </h3>
          <p className="text-xs text-gray-500 mb-4">
            Responses are personalized based on your profile information.
          </p>
          <button onClick={()=>{
            navigate("/studentform")
          }} className="w-full flex items-center justify-center gap-2 text-sm text-green-600 hover:text-green-700 px-4 py-2 border border-green-100 rounded-lg hover:border-green-200 transition-colors">
            <PencilIcon className="w-4 h-4" />
            Edit Profile Form
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-8 overflow-y-auto custom-scrollbar">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-1">
              College Prep Assistant
            </h1>
            <p className="text-sm text-gray-500">
              Personalized guidance based on your profile
            </p>
          </div>
        </div>

        {/* Questions Grid (Icons removed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 overflow-y-auto h-96 custom-scrollbar">
          {sampleQuestions.map((q, index) => (
            <button
              key={index}
              disabled={loadingres}
              onClick={() => handleQuestionClick(q)}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-left group"
            >
              <div>
                <span className="text-xs font-medium text-green-600 mb-1 block">
                  {q.category}
                </span>
                <p className="text-sm text-gray-800 leading-snug group-hover:text-green-700 transition-colors">
                  {q.question}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Response Section */}
        <div
          className={`flex-1 transition-all ${
            question ? "max-h-0" : "max-h-0"
          }`}
        >
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            {question && (
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[15px] font-semibold text-gray-800">
                  {question.question}
                </h3>
                <button
                  disabled={loadingres}
                  onClick={async () => {
                    if (!question) {
                      alert("Please select a question first");
                      return;
                    }
                    setResquestion(question);
                    const str = question.ADDITIONAL_FIELDS;
                    const jsonString = `{ ${str} }`;
                    const obj = JSON.parse(jsonString);
                    const keys = Object.keys(obj);
                    setQuesfields(keys);
                    console.log(keys);
                    console.log(question);

                    handleResponseSubmit();
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm"
                >
                  Send
                </button>
              </div>
            )}
            {!question && (
              <div className="flex justify-between items-start mb-7 pb-12">
                <h3 className="text-lg font-semibold text-gray-800">
                  <span className="text-sm text-gray-600">
                    Select any question from above
                  </span>
                </h3>
              </div>
            )}
            {loading && (
              <div className="text-center py-8">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            )}
            {loadingres && (
              <div className="m-auto">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className="text-sm inline text-yellow-500">
                    Surfing web for Personalized response for you
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="18" cy="12" r="0" fill="currentColor">
                        <animate
                          attributeName="r"
                          begin=".67"
                          calcMode="spline"
                          dur="1.5s"
                          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                          repeatCount="indefinite"
                          values="0;2;0;0"
                        />
                      </circle>
                      <circle cx="12" cy="12" r="0" fill="currentColor">
                        <animate
                          attributeName="r"
                          begin=".33"
                          calcMode="spline"
                          dur="1.5s"
                          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                          repeatCount="indefinite"
                          values="0;2;0;0"
                        />
                      </circle>
                      <circle cx="6" cy="12" r="0" fill="currentColor">
                        <animate
                          attributeName="r"
                          begin="0"
                          calcMode="spline"
                          dur="1.5s"
                          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                          repeatCount="indefinite"
                          values="0;2;0;0"
                        />
                      </circle>
                    </svg>
                  </span>
                </div>
              </div>
            )}
            {!loadingres && response && (
              <div>
                <div className="space-y-3">
                  {response.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-lg border border-gray-100"
                    >
                      <h4 className="flex font-medium text-gray-800 mb-2 text-sm">
                        <span
                          onClick={() => {
                            
                            if(!item.marked){
                              setSavedres((prevRes) => [...prevRes, item]);
                            }else{
                              const toggleStar = (item) => {
                                const updated = savedres.some((i) => i.title === item.title)
                                  ? savedres.filter((i) => i.title !== item.title)
                                  : [...savedres, item];
                            
                                  setSavedres(updated);
                              };
                              toggleStar(item);
                            }
                            const toggleMarked = (index) => {
                              setResponse((prevResponse) =>
                                prevResponse.map((item, i) =>
                                  i === index
                                    ? { ...item, marked: !item.marked }
                                    : item
                                )
                              );
                            };
                            toggleMarked(index);
                            
                          }}
                        >
                          {!item.marked && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="m15.941 14.28l3.942-3.841l-5.447-.792L12 4.711L9.564 9.647l-5.447.792L8.06 14.28l-.93 5.425L12 17.144l4.872 2.562zM12 18.5l-4.672 2.456a1 1 0 0 1-1.451-1.054l.892-5.202l-3.78-3.685a1 1 0 0 1 .555-1.706l5.223-.759l2.336-4.733a1 1 0 0 1 1.794 0l2.336 4.733l5.223.76a1 1 0 0 1 .555 1.705L17.23 14.7l.892 5.202a1 1 0 0 1-1.45 1.054z"
                              />
                            </svg>
                          )}
                          {item.marked && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="green"
                                fill-rule="evenodd"
                                d="m12 18.5l-4.672 2.456a1 1 0 0 1-1.451-1.054l.892-5.202l-3.78-3.685a1 1 0 0 1 .555-1.706l5.223-.759l2.336-4.733a1 1 0 0 1 1.794 0l2.336 4.733l5.223.76a1 1 0 0 1 .555 1.705L17.23 14.7l.892 5.202a1 1 0 0 1-1.45 1.054z"
                              />
                            </svg>
                          )}
                        </span>
                        <span className="ml-3">{item.title}</span>
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                      {quesfields.map((field, index) => (
                        <div
                          key={index}
                          className="text-sm text-gray-600 leading-relaxed"
                        >
                          <span className="font-semibold">
                            {item[field] ? field : ""}
                          </span>{" "}
                          -{" "}
                          <span className="font-semibold">
                            {item[field] ? item[field] : ""}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
