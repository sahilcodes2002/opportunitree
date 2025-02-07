// import React, { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import designImage from "../images/Design.jpg";
// import ss from "../images/ss.png";
// import { motion } from 'framer-motion';
// import Header from "../components/Header";
// import '../index.css'


// export function Homepage(){
//   const navigate = useNavigate(); 
//   useEffect(()=>{
//     const token  = localStorage.getItem("token");
//     if(token){
//       //console.log(token);
//       navigate("/dashboard")
//     }
//   },[])
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Header />
      

//       {/* Hero Section */}
//       <section className="py-7 px-6 md:px-20">
//         <div className="max-w-3xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
//           >
//             Track Your Progress, Important Notes and Collaborate
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="text-lg text-gray-600 mb-8"
//           >
//             Turn Your Goals into Daily Habits, and Achieve More Together with Habito!
//           </motion.p>
//           <br></br>
//           <Link to="/signup" className=" bg-[rgb(47,141,113)]  hover:bg-[rgb(18,107,70)]  text-white py-[15px] px-16 md:py-[15px] md:px-8 rounded-md transition duration-300  font-semibold border-none text-sm">
//             Get Started
//           </Link>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="bg-gray-200 py-20 px-6 md:px-20">
//         <div className="max-w-3xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-4xl font-bold text-gray-800 mb-4"
//           >
//             What We Offer
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="text-lg text-gray-600 mb-8"
//           >
//             Habito provides a simple yet powerful platform to:
//           </motion.p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="p-6 rounded-lg bg-white shadow-md"
//             >
//               <h3 className="text-2xl font-bold mb-4">Track Daily Progress</h3>
//               <p className="text-gray-700">Write and store your daily progress, learnings, and achievements. Reflect and review your productivity over time.</p>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="p-6 rounded-lg bg-white shadow-md"
//             >
//               <h3 className="text-2xl font-bold mb-4">Manage Projects and Goals</h3>
//               <p className="text-gray-700">Create and efficiently manage your tasks, projects, goals and collaborate with others with our optimal features.</p>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="p-6 rounded-lg bg-white shadow-md"
//             >
//               <h3 className="text-2xl font-bold mb-4">Store Important Notes & Codes</h3>
//               <p className="text-gray-700">Save your important notes and code snippets effortlessly. Access them anytime, anywhere with ease.</p>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="p-6 rounded-lg bg-white shadow-md"
//             >
//               <h3 className="text-2xl font-bold mb-4">Regular Reminders</h3>
//               <p className="text-gray-700">Set regular reminders effortlessly and stay on top of your tasks. Choose exactly what you want to be reminded about. </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 px-6 md:px-20">
//         <div className="max-w-3xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-4xl font-bold text-gray-800 mb-8"
//           >
//             Key Features
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="p-6 rounded-lg bg-white shadow-md"
//             >
//               <h3 className="text-2xl font-bold mb-4">Simple and Intuitive Interface</h3>
//               <p className="text-gray-700">Easy-to-use interface designed for seamless daily logging and note-taking.</p>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="p-6 rounded-lg bg-white shadow-md"
//             >
//               <h3 className="text-2xl font-bold mb-4">Secure and Private</h3>
//               <p className="text-gray-700">Your data is securely stored and accessible only to you. Privacy and data protection are our top priorities.</p>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="p-6 rounded-lg bg-white shadow-md"
//             >
//               <h3 className="text-2xl font-bold mb-4">Collaborative space</h3>
//               <p className="text-gray-700">Connect and collaborate in real-time with integrated one-on-one and group chat while working on shared projects and goals.</p>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="p-6 rounded-lg bg-white shadow-md"
//             >
//               <h3 className="text-2xl font-bold mb-4">Mobile Friendly</h3>
//               <p className="text-gray-700">Access Habito on-the-go with our responsive design. Works seamlessly on all devices.</p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Sign Up Section */}
//       <section id="signup" className="bg-gray-200 py-20 px-6 md:px-20">
//         <div className="max-w-3xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-4xl font-bold text-gray-800 mb-8"
//           >
//             Sign Up Now
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="text-lg text-gray-600 mb-8"
//           >
//             Join thousands of users who are improving their productivity and organization with Habito.
//           </motion.p>
//           <Link to="/signup"  className="bg-[rgb(47,141,113)]  hover:bg-[rgb(18,107,70)]  text-white py-[15px] px-20 md:py-[15px] md:px-20 rounded-md transition duration-300  font-semibold border-none text-sm"> Try now</Link>
//           {/* <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg text-lg transition duration-300 inline-block">
//             Get Started
//           </Link> */}
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-gray-800 text-gray-300 text-center py-6">
//         <p>&copy; 2024 Habito. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };


import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Headerhome from "../components/Headerhome";
import '../index.css';

export function Homepage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Headerhome />

      {/* Hero Section */}
      <section className="py-7 px-6 md:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="big-med-text text-2xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Your Guide to Success in High School and Beyond
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8"
          >
            Discover the best colleges, skills, extracurriculars, and opportunities to help you achieve your dreams!
          </motion.p>
          <Link
            to="/signup"
            className="bg-[rgb(47,141,113)]  hover:bg-[rgb(18,107,70)]  text-white py-[15px] px-20 md:py-[15px] md:px-20 rounded-md transition duration-300  font-semibold border-none text-sm"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-200 py-20 px-6 md:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600 mb-8"
          >
            Helping high school students make the right choices with tailored guidance:
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">Personalized College Search</h3>
              <p className="text-gray-700">
                Based on your interests and academic profile, discover the best-fit colleges for you.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">Skill Recommendations</h3>
              <p className="text-gray-700">
                Learn about in-demand skills and get resources to master them.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white shadow-md"
            >
              <h3 className="text-2xl font-bold ">Extracurricular </h3>
              <h3 className="text-2xl font-bold mb-4"> Guidance</h3>
              <p className="text-gray-700">
                Find extracurriculars that align with your goals and enhance your profile.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">Scholarships and Opportunities</h3>
              <p className="text-gray-700">
                Explore internships, scholarships, and other opportunities to boost your future prospects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 md:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-gray-800 mb-8"
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">Tailored Suggestions</h3>
              <p className="text-gray-700">
                Our platform uses AI to provide personalized recommendations based on your profile.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">Comprehensive Guidance</h3>
              <p className="text-gray-700">
                From skills to scholarships, get all the information you need to succeed.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">User-Friendly Interface</h3>
              <p className="text-gray-700">
                Intuitive design for easy navigation and a seamless user experience.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">Privacy First</h3>
              <p className="text-gray-700">
                Your data is secure with us and will only be used to enhance your experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section id="signup" className="bg-gray-200 py-20 px-6 md:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-gray-800 mb-8"
          >
            Ready to Start?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600 mb-8"
          >
            Begin your journey toward academic success and discover your true potential.
          </motion.p>
          <Link
            to="/signup"
            className="bg-[rgb(47,141,113)]  hover:bg-[rgb(18,107,70)]  text-white py-[15px] px-20 md:py-[15px] md:px-20 rounded-md transition duration-300  font-semibold border-none text-sm"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-300 text-center py-6">
        <p>&copy; 2025 OPPORTUNITREE. All rights reserved.</p>
      </footer>
    </div>
  );
}
