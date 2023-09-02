import axios from "axios";
import React, { useEffect, useState } from "react";

const Fetchdata = ({ data, setData }) => {
  // const [data, setData] = useState([]);
  const [add, setAdd] = useState(70);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/todos?limit=${add}&skip=0`)
      .then((res) => {
        setData(res.data.todos);
      })
      .catch((err) => console.log(err));
  }, [add]);

  const handleIncrement = () => {
    setAdd(add + 10);
  };

  return (
    <div>
      {data.map((item) => (
        <div className="Todo">{item.todo}</div>
      ))}
      {data.length < 100 && (
        <button className="button" onClick={handleIncrement}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Fetchdata;
