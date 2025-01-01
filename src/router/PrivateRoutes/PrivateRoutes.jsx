import { useContext } from "react";
import AuthContext from "../../layout/Auth/AuthContext";
import { Navigate } from "react-router-dom";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";

const PrivateRoutes = ({children}) => {
  const {user,loading}=useContext(AuthContext);
  if(loading){
    return <LoadingPage></LoadingPage>
  }
  if(user && user?.email){
    return children;
  }
  return (
    <Navigate state={location.pathname} to={'/login'}></Navigate>
  );
};

export default PrivateRoutes;