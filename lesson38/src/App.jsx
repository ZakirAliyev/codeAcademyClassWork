import './App.css'
import Navbar from "./components/Navbar/index.jsx";
import AddUser from "./pages/AddUser/index.jsx";

function App() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <AddUser/>
            </div>
        </>
    )
}

export default App
