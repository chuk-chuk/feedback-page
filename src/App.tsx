import React, { ChangeEvent, useState } from "react";
import Button from "./components/Button/Button";
import Graph from "./components/Graph/Graph";
import StarRating from "./components/StarRating/StarRating";
import TextInput from "./components/TextInput/TextInput";
import "./index.css";

const mockedComments = ["comment 1", "comment 2", "comment 3"];

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
          <p className="text-blue-600 font-bold">What do you think of this?</p>
          <StarRating />
          <TextInput id="name" placeholder="Name" />
          <TextInput id="email" placeholder="Email" />
          <p className="text-blue-600 font-bold">
            Please give up more details below
          </p>
          <textarea
            className="border border-gray-300"
            value={textAreaValue}
            onChange={handleTextAreaChange}
            rows={5}
            cols={30}
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
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
