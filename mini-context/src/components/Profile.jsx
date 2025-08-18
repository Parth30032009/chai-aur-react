import React, { useContext } from "react";
import userContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(userContext);
  if (!user) {
    return <div>Please Login</div>;
  }

  return (
    <>
      <div>
        <h1>Hello, {user.username}</h1>
      </div>
    </>
  );
};

export default Profile;
