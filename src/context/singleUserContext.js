
import React, { useState, useContext } from 'react';
const SingleUserContext = React.createContext();

export const SingleUserProvider = ({ children }) => {
  
  const [user, setUser] = useState();
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [editSingleUser, setEditSingleUser] = useState();
 



  return (
    <SingleUserContext.Provider
      value={{
        user,
        setUser,
        isUserLogin,
        setIsUserLogin,
        editSingleUser,
        setEditSingleUser,
      }}
    >
      {children}
    </SingleUserContext.Provider>
  );
};

export const useSingleUserContext = () => {
  return useContext(SingleUserContext);
};