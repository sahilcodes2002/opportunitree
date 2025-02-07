import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/survey.css";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


export function StudentSurvey() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const debounceTimeout = useRef(null);
  const [budgets, setBudgets] = useState([]);
  const [cities, setCity] = useState([]);
  const [states, setState] = useState([]);
  const [colleges, setColleges] = useState([
    { name: "ADVENTHEALTH UNIVERSITY", city: "ORLANDO" },
    { name: "FLORIDA CAREER COLLEGE-BOYNTON BEACH", city: "BOYNTON BEACH" },
    { name: "NEW YORK UNIVERSITY", city: "NEW YORK" },
  ]);


  const handleAdd = (college) => {
    //setOptionsVisible(false);
    const formattedCollege = `${college.name}#${college.city}`;
    if (!surveyData.dreamColleges.includes(formattedCollege)) {
      setSurveyData((prev) => ({
        ...prev,
        dreamColleges: prev.dreamColleges
          ? `${prev.dreamColleges}, ${formattedCollege}`
          : formattedCollege,
      }));
    }
    setSearchText(""); // Clear search text
  };
  
  const handleRemove = (college) => {
  
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
  
    
    debounceTimeout.current = setTimeout(() => {
      const updatedColleges = surveyData.dreamColleges
        .split(",")
        .map(col => col.trim())  
        .filter((c) => c !== college.trim())  // Remove the selected college
        .join(",");  // Join back as a comma-separated string
      
      // Update the state with the new list of colleges
      setSurveyData((prevState) => ({
        ...prevState,
        dreamColleges: updatedColleges,
      }));
    }, 150);  // 250ms (0.25 seconds) delay
  };
  

  const filteredColleges = colleges&&colleges.filter(
    (college) =>
      college.name.toLowerCase().includes(searchText.toLowerCase()) ||
      college.city.toLowerCase().includes(searchText.toLowerCase())
  );

  //

  const [surveyData, setSurveyData] = useState({
    fav_subjects: "",
    gpa: "",
    dreamColleges: "",
    current_majors: "",
    majors: "",
    extracurriculars: "",
    sports: "",
    awards: "",
    satScore: "",
    ab_ib: "",
    hobbies: "",
    stayLocal: false,
    achievements: "",
    budget: "$0",
    school: "",
    opportunities: false,
    city: "",
    isUSResident: "Yes",
    state: "",
  });




useEffect(() =>{
  if(surveyData.state && surveyData.state!==""){
    try {
      //setLoading(true);
      axios.post(
          `https://oppurt_backend.opportunitree.workers.dev/getcitiesofstate`,
          {state:surveyData.state},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          
          //setLoading(false);
          setCity(response.data.filteredCities);
          //console.log(response.data.filteredCities);
          //console.log(cities);
          
          //console.log(response.data.data.projects);
          //console.log(projectinfo);
        });
    } catch (error) {
      console.error("Error fetching dashboard data", error);
      //toast.error("Failed to get data from server", { id: toastId });
      //setLoading(false);
    }
  }
},[surveyData])


useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    
    async function reget() {
      if (!localStorage.getItem("token")) {
        return;
      }
      try {
        setLoading(true);
        axios
          .post(
            `https://oppurt_backend.opportunitree.workers.dev/getstudentdetails`,
            {},
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            
        
            // setColleges(response.data.filteredColleges);
            if(response.data.res){
              setSurveyData(response.data.res);
              console.log(response.data.res);
              console.log(surveyData);
            }
            setLoading(false);
            
            
          });
      } catch (error) {
        console.error("Error fetching dashboard data", error);
        
        setLoading(false);
      }
    }

    reget();

  }, []);
  

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    
    async function reget() {
      // if (!localStorage.getItem("token")) {
      //   return;
      // }
      try {
        //setLoading(true);
        axios
          .post(
            `https://oppurt_backend.opportunitree.workers.dev/getallcolleges`,
            {},
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            
            //setLoading(false);
            setColleges(response.data.filteredColleges);
            
            console.log(response.data.filteredColleges);
            console.log(colleges);
            //console.log(projectinfo);
          });
      } catch (error) {
        console.error("Error fetching dashboard data", error);
        //toast.error("Failed to get data from server", { id: toastId });
        //setLoading(false);
      }
    }

    reget();

  }, []);




  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    
    async function reget() {
      if (!localStorage.getItem("token")) {
        return;
      }
      try {
        //setLoading(true);
        axios
          .post(
            `https://oppurt_backend.opportunitree.workers.dev/getallstates`,
            {},
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            
            //setLoading(false);
            setState(response.data.filteredstates);
            
            //console.log(response.data.data.projects);
            //console.log(projectinfo);
          });
      } catch (error) {
        console.error("Error fetching dashboard data", error);
        //toast.error("Failed to get data from server", { id: toastId });
        //setLoading(false);
      }
    }

    reget();

  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSurveyData({
      ...surveyData,
      [name]: value,
    });
  };
  const getcities = (state) => {
    
    try {
      //setLoading(true);
      axios.post(
          `https://oppurt_backend.opportunitree.workers.dev/getcitiesofstate`,
          {state},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          
          //setLoading(false);
          setCity(response.data.filteredCities);
          //console.log(response.data.filteredCities);
          //console.log(cities);
          
          //console.log(response.data.data.projects);
          //console.log(projectinfo);
        });
    } catch (error) {
      console.error("Error fetching dashboard data", error);
      //toast.error("Failed to get data from server", { id: toastId });
      //setLoading(false);
    }
  };




  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSurveyData({
      ...surveyData,
      [name]: checked,
    });
  };

  
  const handleSaveSurveyResponse = () => {

    try {
      //setLoading(true);
      axios.post(
          `https://oppurt_backend.opportunitree.workers.dev/addstudentdetails`,
          {surveyData},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          navigate("/dashboard")
        });
    } catch (error) {
      console.error("Error fetching dashboard data", error);
      //toast.error("Failed to get data from server", { id: toastId });
      //setLoading(false);
    }

  };

  if(loading){
    return <div className=" flex justify-center">
      <div className="h-screen flex flex-col justify-center "><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12"/><animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"/></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12"/><animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"/></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12"/><animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"/></circle></svg></div>
    </div>
  }

  return (
    <>
      <Header />
      <div className="survey-container">
        <h2 className="big-text"> Lets Get to Know You!</h2>

        {/* GPA */}
        <div className="form-row">
          <div className="form-group">
            <label>Current GPA (Optional):</label>
            <input
              type="text"
              name="gpa"
              placeholder="Enter GPA or N/A"
              value={surveyData.gpa}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>What school are you currently attending? (Optional):</label>
            <input
              type="text"
              name="school"
              placeholder="Enter school or N/A"
              value={surveyData.school}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Favorite Subjects: ( Subject1, Subject2, ... )</label>
            <input
              type="text"
              name="fav_subjects"
              placeholder="Enter GPA or N/A"
              value={surveyData.fav_subjects}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Hobbies and Personal Interests:</label>
            <input
              type="text"
              name="hobbies"
              placeholder="Enter hobbies"
              value={surveyData.hobbies}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* Majors */}
        <div className="form-row">
          <div className="form-group">
            <label>Possible Majors:</label>
            <input
              type="text"
              name="current_majors"
              placeholder="Enter possible majors or N/A"
              value={surveyData.current_majors}
              onChange={handleInputChange}
            />
          </div>

          {/* Extracurriculars */}
          <div className="form-group">
            <label>
              Main Extracurriculars (Sports, Music, Volunteering, etc.):
            </label>
            <input
              type="text"
              name="extracurriculars"
              placeholder="Enter extracurriculars"
              value={surveyData.extracurriculars}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* Sports */}
        <div className="form-row">
          <div className="form-group">
            <label>Do you participate in any sports?</label>
            <input
              type="text"
              name="sports"
              placeholder="Enter sports or N/A"
              value={surveyData.sports}
              onChange={handleInputChange}
            />
          </div>

          {/* Awards */}
          <div className="form-group">
            <label>Awards or Recognitions (Optional):</label>
            <input
              type="text"
              name="awards"
              placeholder="Enter awards or N/A"
              value={surveyData.awards}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          {/* SAT/ACT Score */}
          <div className="form-group">
            <label>SAT/ACT Score:</label>
            <input
              type="text"
              name="satScore"
              placeholder="Enter your score or N/A"
              value={surveyData.satScore}
              onChange={handleInputChange}
            />
          </div>

          {/* Hobbies */}
          <div className="form-group">
            <label>AP/IB Exam Scores (Optional):</label>
            <input
              type="text"
              name="ab_ib"
              placeholder="Enter your score or N/A"
              value={surveyData.ab_ib}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
            <label>Achievements (Optional):</label>
            <input
              type="text"
              name="achievements"
              placeholder="Enter achievements"
              value={surveyData.achievements}
              onChange={handleInputChange}
            />
          </div>
        <div className="form-group">
              <label  onClick={(e)=>{
                setOptionsVisible(false);
                e.preventDefault()
              }}>
                Dream Colleges:
                <div className="inlin">
                  {surveyData.dreamColleges &&
                    surveyData.dreamColleges
                      .split(",")
                      .map((college, index) => (
                        <span
                          className="inline-flex items-center text-blue-500 !important"
                          key={index}
                        >
                          &nbsp;{college.trim().split('#')[0]} - &nbsp;{college.trim().split('#')[1]}
                          <div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              console.log("Clicked on remove button for college:", college.trim());
                              handleRemove(college.trim());
                            }}
                            className="ml-2 w-min p-0  rounded-full !important flex hover:fill-red-800 items-center justify-center !imporant"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="grey"
                                d="M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9s9-4.038 9-9s-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7s7 3.14 7 7s-3.141 7-7 7zm.707-7l2.646-2.646a.502.502 0 0 0 0-.707a.502.502 0 0 0-.707 0L12 11.293L9.354 8.646a.5.5 0 0 0-.707.707L11.293 12l-2.646 2.646a.5.5 0 0 0 .707.708L12 12.707l2.646 2.646a.5.5 0 1 0 .708-.706L12.707 12z"
                              />
                            </svg>
                          </button>
                          </div>
                          {index <
                          surveyData.dreamColleges.split(",").length - 1
                            ? " ,"
                            : ""}
                        </span>
                      ))}
                </div>
              </label>
              <div>
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Type to search or click to see options"
                  className="border px-2 py-1 w-full"
                  onClick={() => {
                    setOptionsVisible(true);
                  }}
                  onBlur={() => {
                    setOptionsVisible(false);
                  }}
                />
                {optionsVisible ? (
                  <ul
                    onMouseDown={(e) => {
                      e.preventDefault(); // Prevent `onBlur` from firing
                    }}
                    className="absolute border bg-white w-11/12 max-h-48 overflow-y-auto mt-1 shadow-lg z-10 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
                  >
                    {filteredColleges&&filteredColleges.length > 0 ? (
                      filteredColleges.map((college, index) => (
                        <li
                          key={index}
                          className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleAdd(college)}
                        >
                          {`${college.name}, ${college.city}`}
                        </li>
                      ))
                    ) : (
                      <li className="px-2 py-1 text-gray-500">
                        No options found
                      </li>
                    )}
                  </ul>
                ) : null}
              </div>
            </div>
        {/* Regional Preference */}
        <div className="form-group flex-class">
          <input
            type="checkbox"
            name="stayLocal"
            className="checkboxicon"
            checked={surveyData.stayLocal}
            onChange={handleCheckboxChange}
          />
          <label>
            Do you prefer to stay in your local region for opportunities?
          </label>
        </div>

        {/* Budget */}
        <div className="form-group">
          <label>Budget for extracurricular activities or events:</label>
          <select
            name="budget"
            value={surveyData.budget}
            onChange={handleInputChange}
          >
            <option value={""}>
                Select an option
              </option>
            <option  value={"$0"}>
                $0
              </option>
              <option  value={"$100"}>
                $100
              </option>
              <option  value={"$500"}>
                $500
              </option>
              <option  value={"$1000"}>
                $1000
              </option>
              <option  value={"More than $1000"}>
                Above $1000
              </option>
            
          </select>
        </div>

        {/* School */}

        {/* Opportunities */}
        <div className="form-group flex-class">
          <input
            type="checkbox"
            name="opportunities"
            className="checkboxicon"
            checked={surveyData.opportunities}
            onChange={handleCheckboxChange}
          />
          <label>
            Would you like to receive recommendations for internships,
            scholarships, or other opportunities?
          </label>
        </div>
        <div className="form-group">
            <label>
            WHAT ARE MAJORS THAT INTEREST YOU?
            </label>
            <input
              type="text"
              name="majors"
              placeholder="Enter Majors"
              value={surveyData.majors}
              onChange={handleInputChange}
            />
          </div>
        {surveyData.isUSResident === "Yes" && (
          <>
            <div className="form-group">
              <label>State:</label>
              <select
                name="state"
                value={surveyData.state}
                //onChange={handleInputChange}
                onChange={(e)=>{
                  handleInputChange(e)
                  getcities(e.target.value);
                }}
              >
                <option value="">Select an option</option>
                {states.map((st)=>{
                  return <option key={st.name} value={st.name}>{st.name}</option>
                })}

              </select>
            </div>
            <div className="form-group">
              <label>City:</label>
              {surveyData.state != ""&&<select
                name="city"
                value={surveyData.city}
                onChange={handleInputChange}
              >
                <option value="">Select an option</option>
                {cities&&cities.map((st,index)=>{
                  return <option key={index} value={st.name}>{st.name}</option>
                })}
              </select>}
              {surveyData.state === ""&&<select
                name="city"
                value={surveyData.city}
                onChange={handleInputChange}
              >
                <option className="text-red-900" value="">Select the State first</option>
              </select>}
            </div>
            
          </>
        )}

        <button className="form-button" onClick={(e) => handleSaveSurveyResponse()}>
          Submit Survey
        </button>
      </div>
    </>
  );
}
