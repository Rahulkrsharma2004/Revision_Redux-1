import ThemeToggle from "./components/Theme"
import Todo from "./components/Todo"
import './App.css'
import { useSelector } from "react-redux";

function App() {

  const darkMode = useSelector(state => state.theme.darkMode);
  return (
    <>
    <div style={{padding:"200px"}} className={darkMode ? 'dark' : 'light'}>
      <h1 style={{border:"2px black solid",textAlign:"center",width:"200px",margin:"auto",backgroundColor:"yellow",color:"black"}}>Hello Redux</h1>
      <Todo/>
      <ThemeToggle/>
    </div>
    </>
  )
}

export default App
