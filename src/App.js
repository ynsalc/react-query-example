import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const getPosts = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: { _sort: "title" },
      })
      .then((res) => res.data);
  };
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-400">Those is Post Titles</h1>
      {data &&
        data.map((item) => (
          <p className="text-red-300 text-xl" key={item.id}>{item.title}</p>
        ))}
    </div>
  );
}

export default App;
