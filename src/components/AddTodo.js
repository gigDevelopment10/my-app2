import { Button} from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { HStack } from '@chakra-ui/layout';
import { useToast} from '@chakra-ui/react';
import {useState, React} from 'react';
import {nanoid } from 'nanoid' // npm i nanoid

function AddTodo({addTodo}) {
  const toast = useToast();

  function handleSubmit(e){
    e.preventDefault();
    console.log(content);
    if (!content){
      // if the field input is empty
      toast({
        title: 'Empty search',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return
    } 
    

    const todos = {
      id: nanoid(),
      body: content,
    };
    //console.log(todos);
    addTodo(todos);
    setcontent('');

  }

  const [content, setcontent] = useState('');


  return (
    <form 
    onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input variant="filled" 
               placeholder="Search a Job" 
               value={content}  
               onChange={ (e) => setcontent(e.target.value)}/>
        <Button colorScheme ="pink" px ="8" type="submit">Add Todo</Button>
      </HStack>

    </form>
  );
}

export default AddTodo