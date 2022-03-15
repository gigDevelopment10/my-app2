import React from 'react';
import {HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge, } from '@chakra-ui/react';
import  {FaTrash} from 'react-icons/fa';

function ToDoList({todos , deleteToDo}) {

  if(!todos.length){
    return(
      // if no jobs available, this will display a msg badge
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg"> No matching job ..</Badge>
    );
  }

  return (
    <VStack
    divider={<StackDivider />} 
    borderColor="gray.100" 
    borderWidth ="2px" 
    padding="4"
    borderRadius = "lg"
    width ="90%"
    maxW={{base: '90vw' , sm: '80vw' , lg :'50vm' , xl :'40vm'}}
    alignItems="stretch"
    >
     {todos.map((todos) => (

       <HStack key ={todos.id}>
         <Text>{todos.body}</Text>
         <Spacer />
         <IconButton icon ={<FaTrash/>} isRound ='true' onClick={()=> deleteToDo(todos.id)} />
       </HStack>
     ))}
    </VStack>
  );
}

export default ToDoList