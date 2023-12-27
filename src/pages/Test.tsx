

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardThread from '../components/HomeComponent/CardThread';
import Feed from '../components/HomeComponent/Feed';
import { Center } from '@chakra-ui/react';
import Follows from './Follows';

export default function Test(){

  function handleClick() {
    toast("test")
  }

  return (
    <Center w={'50vw'} mx={'auto'}>
      <Follows  />
    </Center>
  );
}