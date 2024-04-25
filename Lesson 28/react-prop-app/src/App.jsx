import { useState } from "react";
import './App.css'
import Form from './components/AddForm'
import courses from './data/data.js'
import Courses from "./components/Courses/index.jsx";

function App() {
  const [data, setData] = useState(courses);
  return (
    <div className="container">
      <Form />
      <Courses data={courses} />
    </div>
  )
}

export default App
