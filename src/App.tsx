import React, { ChangeEvent, useState } from "react";
import Button from "./components/Button/Button";
import Graph from "./components/Graph/Graph";
import StarRating from "./components/StarRating/StarRating";
import BoxInput from "./components/BoxInput/BoxInput";
import TextInput from "./components/TextInput/TextInput";
import { mockedComments } from "./App.helpers";
import "./index.css";

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
      <div className="flex gap-8 justify-between">
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
        <aside>
          <Graph graphData={[1, 2, 3, 4, 5]} />
        </aside>
      </div>
      <section className="p-4 bg-slate-100 border border-gray-200 rounded-md">
        <ul>
          {mockedComments.map((item, index) => (
            <li key={index}>
              {item.comment} <span className="font-bold">by</span> {item.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
