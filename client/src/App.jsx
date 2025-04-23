import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/students/Home';
import CourseList from './pages/students/CourseList';
import CourseDetails from './pages/students/CourseDetails';
import MyEnrollments from './pages/students/MyEnrollments';
import Player from './pages/students/Player';
import Loading from './components/students/Loading';
import Educator from './pages/educator/Educator';
import DashBoard from './pages/educator/DashBoard';
import AddCourse from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentsEnroll from './pages/educator/StudentsEnroll';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course-list' element={<CourseList/>} />
        <Route path='/course-list/:input' element={<CourseList/>} />
        <Route path='/course/:id' element={<CourseDetails/>} />
        <Route path='/my-enrollment' element={<MyEnrollments/>} />
        <Route path='/player/:courseId' element={<Player/>} />
        <Route path='/loading/:path' element={<Loading/>} />
        <Route path='/educator' element={<Educator/>}>
          <Route path='educator' element={<DashBoard/>} />
          <Route path='add-course' element={<AddCourse/>} />
          <Route path='my-courses' element={<MyCourses/>} />
          <Route path='student-enroll' element={<StudentsEnroll/>} />
        </Route>

      </Routes>

    </div>
  );
}
export default App;