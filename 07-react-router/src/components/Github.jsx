import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((respone) => respone.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="git picture" />
    </div>
  );
};

export default Github;

const gitInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  const data = await response.json();
  return data;
};

export { gitInfoLoader };
