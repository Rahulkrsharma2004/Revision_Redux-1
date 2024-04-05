import ThemeToggle from "./components/Theme"
import Todo from "./components/Todo"

function App() {

  return (
    <>
      <h1 style={{border:"2px black solid",textAlign:"center",width:"200px",margin:"auto",backgroundColor:"yellow",color:"black"}}>Hello Redux</h1>
      <Todo/>
      <ThemeToggle/>
    </>
  )
}

export default App
