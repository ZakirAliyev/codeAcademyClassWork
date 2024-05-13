import './App.css'
import Counter from "./components/Counter/index.jsx";
import Todo from "./components/Todo/index.jsx";

function App() {
    return (
        <div className={"container"}>
            <Counter/>
            <hr style={{margin: '30px 0'}}/>
            <Todo/>
        </div>
    )
}

export default App
