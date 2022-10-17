import React, { ChangeEvent, useState } from "react";
import Button from "./components/Button/Button";
import Graph from "./components/Graph/Graph";
import StarRating from "./components/StarRating/StarRating";
import BoxInput from "./components/BoxInput/BoxInput";
import TextInput from "./components/TextInput/TextInput";
import { Comment } from "./App.types";
import "./index.css";

const mockedComments: Comment[] = [
  {
    name: "Anna",
    email: "anna@gmail.com",
    rating: 5,
    comment: "Great content",
  },
  {
    name: "Tom",
    email: "tom@gmail.com",
    rating: 1,
    comment: "Can be better",
  },
];

function App() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="m-20 w-full md:w-3/4 lg:w-1/2">
      <div className="flex flex-row justify-between">
        <section className="mb-12 p-4 bg-slate-100 border border-gray-200 rounded-md">
          <StarRating />
          <TextInput id="name" placeholder="Name" inputClassName="mb-2" />
          <TextInput id="email" placeholder="Email" inputClassName="mb-4" />
          <BoxInput
            id="comment"
            textValue={textAreaValue}
            handleOnChange={handleTextAreaChange}
          />
          <Button title="Submit" onClick={handleSubmit} />
        </section>
        <aside className="bg-pink-100">
          <Graph />
        </aside>
      </div>
      <section className="p-4 bg-slate-100 border border-gray-200 rounded-md">
        <ul>
          {mockedComments.map((item, index) => (
            <li key={index}>{item.comment}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
