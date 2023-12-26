

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardThread from '../components/HomeComponent/CardThread';
import Feed from '../components/HomeComponent/Feed';
import { Center } from '@chakra-ui/react';

export default function Test(){

  function handleClick() {
    toast("test")
  }

  return (
    <Center>
      <button onClick={handleClick}>Notify!</button>
      <Feed  />
    </Center>
  );
}