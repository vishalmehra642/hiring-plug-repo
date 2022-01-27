import React from 'react';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PostAJob from './components/PostAJob';
import MyJobs from './components/MyJobs';
import Agencies from './components/Agencies';
import Scheduler from './components/Scheduler';
import EmployerFAQ from './components/FAQ';
import Candidates from './components/Candidates';
import Help from './components/Help';
import EmployerPanel from './components/EmployerPanelUserDetails';
import UserCommuniaction from './components/ManageTeams/UserCommuniaction';
import CandidateReport from './components/Reports/Candidate_Report';
import UserRole from './components/ManageTeams/UserRole';
import PanelUsers from './components/ManageTeams/PanelUsers';
import EditUserById from './components/ManageTeams/UserRole/userRole_Childs/EditUserById';
import PanelUserSummary from './components/ManageTeams/PanelUsers/PanelUserSummary/PanelUserSummary';
import NewUser from './components/ManageTeams/NewUser';
import Home from './components/Home';

function App() {
  return (
    <div className="bg-[#f4f5f8]">
      <Router>
        <Switch>
          <Route path="/employer-dashboard" children={<Dashboard />} />
          <Route path="/post-job" children={<PostAJob/>} />
          <Route path="/my-jobs" children={<MyJobs />} />
          <Route path="/agencies" children={<Agencies />} />
          <Route path="/employer-scheduler" children={<Scheduler/>} />
          <Route path="/employer-faq" children={<EmployerFAQ/>} />
          <Route path="/candidates" children={<Candidates/>} />
          <Route path="/help" children={<Help/>} />
          <Route path="/employer-panel-user-details" children={<EmployerPanel/>} />
          <Route path="/employer-user-communications" children={<UserCommuniaction/>} />
          <Route path="/employer-reports" children={<CandidateReport/>} />
          <Route path="/employer-user-roles" children={<UserRole/>} /> 
          <Route path="/employer-panel-users" children={<PanelUsers/>} /> 
          <Route path="/employer-user-role-details/:id" children={<EditUserById/>} /> 
          <Route path="/employer-view-users-summary/:id" children={<PanelUserSummary/>} /> 
          <Route path="/employer-user-role-details" children={<NewUser/>} /> 
          <Route exact path="/"  children={<Home/>} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
