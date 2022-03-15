import { Heading } from '@chakra-ui/react';
import logo from './logo.svg';
// import './App.css';
import ToDoList from './components/ToDoList';
import AddTodo from './components/AddTodo';
import { VStack , IconButton, useColorMode} from '@chakra-ui/react';
import {FaSun, FaMoon} from 'react-icons/fa';
import {useState,useEffect} from 'react';


function App() {

  const initialTodos =[
    {
      id : 1,
      body: 'Job1',
    },

    {
      id : 2,
      body: 'Job2',
    }

];

const [todos, setTodos] = useState(
  () => JSON.parse(localStorage.getItem('todos')) || [] 
   );

useEffect(()=>{
 localStorage.setItem('todos', JSON.stringify(todos));
}, [todos])   

function deleteToDo(id){
  const newTodos = todos.filter(todos=>{
    return todos.id !==id ;
    // if true: we want to keep the id 
    // if false: we dont want to keep the element
  });
   setTodos(newTodos);
 
}

function addTodo(todo){
  setTodos([...todos, todo]);
}

const {colorMode, toggleColorMode} = useColorMode();

return (
    <VStack p ={4}>
      <IconButton icon= {colorMode ==="light" ? <FaSun/> :<FaMoon/>} 
      isRound = 'True' 
      size ="lg" 
      alignSelf='flex-end'
      onClick= {toggleColorMode}
      />
      
    <Heading mg="8" 
      fontweight="extrabold" 
      size = "2xl" 
      bgGradient ="linear(to-r , pink.500, pink.300, blue.500)"
      bgClip="text"
      padding="8"
    >
      Startup India
    </Heading>
    <ToDoList  todos={todos}  deleteToDo={deleteToDo} />
    <AddTodo addTodo={addTodo} />

    </VStack>

  );
}

export default App;