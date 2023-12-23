

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Test(){

  function handleClick() {
    toast("test")
  }

  return (
    <div>
      <button onClick={handleClick}>Notify!</button>
      <ToastContainer />
    </div>
  );
}