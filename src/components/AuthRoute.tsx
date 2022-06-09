import { Redirect, Route } from 'react-router-dom'
import { get } from '../utils/storage';

const AuthRoute = (props: any) => {

  const token = get('token');
  return (

    <>
      {
        token ? <Route {...props}></Route> : <Redirect to="/login"></Redirect>
      }
    </>
  )
};

export default AuthRoute;