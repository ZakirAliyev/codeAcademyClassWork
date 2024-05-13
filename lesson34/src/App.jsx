import './App.css'
<<<<<<< HEAD
import Counter from "./components/Counter/index.jsx";
import Todo from "./components/Todo/index.jsx";

function App() {
    return (
        <div className={"container"}>
            <Counter/>
            <hr style={{margin: '30px 0'}}/>
            <Todo/>
        </div>
=======
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ROUTES} from "./routes/ROUTES.jsx";

const routes = createBrowserRouter(ROUTES);

function App() {
    return (
        <>
            <RouterProvider router={routes}/>
        </>
>>>>>>> b5eadd381bfe1787164cbd7c6b00f29b4860cf8e
    )
}

export default App
