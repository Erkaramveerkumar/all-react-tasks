import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import CounterNumber from './Pages/Task-1/CounterNumber';
import Lms from './Pages/Task-2/Lms';
import FormOne from './Pages/Task-3/FormOne'
import FormTwo from './Pages/Task-4/FormTwo'
import FormThree from './Pages/Task-5/FormThree'
import UseEffect1 from './Pages/Task-6/UseEffect';
import FormFour from './Pages/Task-7/FormFour';
import Weather from './Pages/Task-8/Weather';
import RegistrationForm from './Pages/Task-9/RegistrationForm';
import PropsDrilling from './Pages/Task-10/PropsDrilling';
import LogInForm from './Pages/Task-11/LogInForm';
import CardFlex from './Pages/Task-12/CardFlex';
import ThemeProvider from './Pages/Task-13/ThemeProvider';
import Main from './Pages/Task-14/Main';
import UserDashboard from './Pages/Task-15/UserDashboard';
import ProtectedRoute from './Pages/Task-14/ProtectedRoute';
import Child from './Pages/Task-16/Child';
import MemoTask from './Pages/Task-17/MemoTask';
import WithoutCallback from './Pages/Task-18/problem/WithoutCallback';
import WithCallback from './Pages/Task-18/solution/WithCallback';
import ToDoList from './Pages/Task-19/ToDoList';
import GuestLogin from './Pages/Task-20/Guest';
import ChatRoom from './Pages/Task-20/Chat';
import HookForm from './Pages/Task-21/HookForm';
// import { ThemeProvider } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Lms />} path='/' />
        <Route element = {<GuestLogin />} path = '/guest' />
        <Route element = {<ChatRoom />} path = '/chat' />
        <Route element={<CounterNumber />} path='/counternumber' />
        <Route element={<FormOne />} path='/formone' />
        <Route element={<FormTwo />} path='/formtwo' />
        <Route element={<FormThree />} path='/Formthree' />
        <Route element={<UseEffect1 />} path='/useeffect1' />
        <Route element={<FormFour />} path='/formfour' />
        <Route element={<Weather />} path='/weather' />
        <Route element={<RegistrationForm />} path='/registrationform' />
        <Route element={<PropsDrilling />} path='/propsdrilling' />
        <Route element={<LogInForm />} path='/loginform' />
        <Route element={<CardFlex />} path='/card' />
        <Route element={<ThemeProvider />} path='/context-task' />
        <Route element={<ProtectedRoute />} >
          <Route path="/dashboard"
            element={<UserDashboard />} />
        </Route>
        <Route path="/"
          element={<LogInForm />} />
        <Route element={<Child />} path='/memo' />
        {/* <Route element={<U />} path='/context-task' /> */}
        <Route element = {<MemoTask />} path='/memotask' />
        <Route element = {<WithCallback />} path='/usecallback' />
        <Route element = {<ToDoList />} path='/todolist' />
        <Route element = {<HookForm />} path='/hookform' />
      </Routes>
    </BrowserRouter>
    // <UserDashboard />

    // <Main />

  );
}

export default App;
