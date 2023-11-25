import { useContext } from "react";
import { AuthContextProvider } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  console.log('hello');
  const { user,loading   } = useContext(AuthContextProvider);

  const location = useLocation();
  console.log(location.pathname);

  if(loading)
  {
    console.log('loading');
   return <span className="loading loading-spinner text-error absolute  right-[754px] top-[300px]"></span>

  }
  if (user) {
    console.log('children');
    return children;
  }
  return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoutes;
