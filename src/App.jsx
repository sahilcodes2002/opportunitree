import { HashRouter, Routes, Route } from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { Dashboard } from './pages/Dashboard';
import { RecoilRoot } from 'recoil';
import { Homepage } from './pages/Home';
import { Join } from './pages/Join';
import { Toaster } from "react-hot-toast";
import { StudentSurvey } from "./pages/Studentform"
import Assistant from './pages/Assistant';

function App() {
  return (
    <div>
    <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "green",
              },
            },
          }}
        ></Toaster>
      </div>
      <RecoilRoot>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/studentform' element={<StudentSurvey />} />
            {/* <Route path='/signup' element={<Signup />} /> */}
            <Route path='/signin' element={<Signin />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/signup' element={<Join />} />
            <Route path='/assistant' element={<Assistant />} />
          </Routes>
        </HashRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
