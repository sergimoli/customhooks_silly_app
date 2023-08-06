import React, { useState } from "react";
import { useAjax } from "../hooks/useAjax";

const MyUser = () => {
  const [url, setUrl] = useState("https://reqres.in/api/users/1");
  const { data, charging } = useAjax(url);

  const getId = (e) => {
    let id = parseInt(e.target.value);
    setUrl("https://reqres.in/api/users/" + id);
  };
  return (
    <div>
      <h1>My user:</h1>
      <p>data from user: </p>
      <p>{charging ? "charging..." : ""}</p>
      <p>{data?.first_name}</p>
      <input type="number" name="id" onChange={getId}></input>
    </div>
  );
};

export default MyUser;
