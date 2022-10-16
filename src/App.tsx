import React, { ChangeEvent, useState } from "react";
import TextInput from "./components/TextInput/TextInput";
import "./index.css";

function App() {
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  return (
    <div className="m-20 w-full md:w-3/4 lg:w-1/2">
      <div className="flex flex-row justify-between">
        <section className="bg-yellow-100">
          <p className="text-blue-600 font-bold">What do you think of this?</p>
          <p>StarRatingComponent</p>
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
        </section>
        <aside className="bg-pink-100">Graph container</aside>
      </div>
      <section className="bg-green-100">Latests comments box</section>
    </div>
  );
}

export default App;
