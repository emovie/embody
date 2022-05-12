import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [boardList, setBoardList] = useState();

  function boardListAxios() {
    axios("/home")
      .then((res) => {
        var data = res.data;
        console.log(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    boardListAxios();
  }, []);

  return <div>Home</div>;
};

export default Home;
