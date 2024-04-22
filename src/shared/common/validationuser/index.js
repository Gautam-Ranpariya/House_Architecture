import { toast } from "react-toastify";


export default function ValidationUser(userData) {
  let isValid = false;
  let data = userData;
  const name_pattern = /^[A-Za-z]+$/;
  const email_pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  

  if ((data.name === "") || (data.name.length === 0)) {
    toast.error('Please Enter Your Name');
    console.log('please enter name');
    return isValid;
  }
  else if(!name_pattern.test(data.name)){
    toast.error('Only Enter Character In Your Name');
    return isValid;
  }
  else if ((data.email === "") || (data.email.length === 0)) {
    toast.error('Please Enter Your Email ');
    return isValid;
  }
  else if(!email_pattern.test(data.email)){
    toast.error('Please Enter a Valid Email Address');
    return isValid;
  }
  else if ((data.message === "") || (data.message.length === 0)) {
    toast.error('Please Enter Your message');
    return isValid;
  }
  isValid = true;
  return isValid;
}
