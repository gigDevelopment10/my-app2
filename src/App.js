import { Heading } from '@chakra-ui/react';
import logo from './logo.svg';
// import './App.css';
import ToDoList from './components/ToDoList';
import AddTodo from './components/AddTodo';
import { VStack , IconButton} from '@chakra-ui/react';
import {FaSun, FaMoon} from 'react-icons/fa';

function App() {
  return (
    <VStack p ={4}>
      <IconButton icon= {<FaSun/>} isRound = 'True' size ="lg" alignSelf='flex-end'/>
    <Heading mg="8" fontweight="extrabold" size = "2xl" bgGradient ="linear(to-r , pink.500, pink.300, blue.500)"
    bgClip="text"
    >
      To do Application
    </Heading>
    </VStack>

  );
}

export default App;