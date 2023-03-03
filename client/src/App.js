import {Landing, Dashboard, Register, Error, ProtectedRoute } from "./pages"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {Stats, AllJobs, AddJob, Profile, SharedLayout} from './pages/dashboard/index.js'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ 
              <ProtectedRoute>
                <SharedLayout/>
              </ProtectedRoute>
             }> 
            <Route index="stats" element={ <Stats/> } />
            <Route path="all-jobs" element={ <AllJobs/> } />
            <Route path="add-job" element={ <AddJob/> } />
            <Route path="profile" element={ <Profile/> } />
          </Route>
          <Route path="/register" element={ <Register/> } />
          <Route path="/landing" element={ <Landing/> } />
          <Route path="*" element={ <Error/> } />
        </Routes>
      </BrowserRouter>
  );
}
export default App;
