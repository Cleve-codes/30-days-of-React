import { useRouteError } from 'react-router-dom';
import errorImg from '../assets/error-400.jpg'

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='max-w-5xl max-h-[90vh] flex justify-center items-center ml-[20%]'>
      <img src={errorImg} className='w-1/2 h-1/2 mt-[20%]' alt="error" />
    </div>
  )
}

export default ErrorPage;
