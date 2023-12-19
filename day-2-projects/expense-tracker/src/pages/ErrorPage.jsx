import errorImg from '../assets/error-400.jpg'

import { useNavigate, useRouteError } from "react-router-dom";
import Button from '../components/Button';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className='max-w-5xl max-h-[90vh] flex flex-col justify-center items-center ml-[25%]'>
      <p>{error}</p>
      <img className='mt-[20%] w-[400px] h-[400px]' src={errorImg} alt='error Image' />
      <div className='flex gap-[3em] mt-[2em]'>
        <Button text="Go Back Home 🛖" to='/' />
        <Button text="Go Back👈🏾 " onClick={() => navigate(-1)} />
      </div>
    </div>
  )
}

export default ErrorPage;
