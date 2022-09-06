import './App.css';
import Todo from './components/todo';

function App() {

  const todos=[
    {id: 1, title:'title 1', completed:false,},
    {id: 2, title:'title 2', completed:true,}
  ]

  return (
    <div className="App">
      {
        todos.map((todo)=>{
          return( <Todo todo={todo}/>)
        })
      }
    </div>
  );
}

export default App;
