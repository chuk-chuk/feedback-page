import React, { useState } from "react";
import { Formik, FormikProps, Form } from "formik";
import * as yup from "yup";
import Button from "./components/Button/Button";
import Graph from "./components/Graph/Graph";
import BoxInput from "./components/BoxInput/BoxInput";
import TextInput from "./components/TextInput/TextInput";
import ValidationMessage from "./components/ValidationMessage/ValidationMessage";
import { Comment } from "./App.types";
import { mappedGraphData } from "./App.helpers";
import "./index.css";

const validationSchema: yup.SchemaOf<Comment> = yup.object().shape({
  name: yup.string().required("Name is required"),
  comment: yup.string().required("Leave your comment please"),
  rating: yup.number().required(),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

const initialValues: Comment = {
  name: "",
  email: "",
  rating: 0,
  comment: "",
};

function App() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [rating, setRating] = useState(0);

  let categoriesData: string[] = [];
  let numberOfPeople: number[] = [];

  const data = mappedGraphData(comments);

  Object.entries(data).forEach(([keyRating, data]) => {
    categoriesData.push(keyRating);
    numberOfPeople.push(data.length);
  });

  return (
    <div className="m-10 w-full md:w-3/4 lg:w-1/2">
      <div className="mb-12 flex justify-between">
        <div className="p-4 bg-slate-100 border border-gray-200 rounded-md">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              setComments([...comments, values]);
              resetForm();
              setRating(0);
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              setFieldValue,
              isSubmitting,
              isValid,
              errors,
              touched,
            }: FormikProps<Comment>) => (
              <Form>
                <div className="mb-6">
                  <p className="text-blue-600 font-bold">
                    What do you think of this?
                  </p>
                  {[...Array(5)].map((_, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
                        key={index}
                        className={`cursor-pointer ${
                          index <= rating ? "text-yellow-500" : "text-gray-400"
                        }`}
                        onClick={(event) => {
                          setRating(index);
                          setFieldValue("rating", index);
                          handleChange(event);
                        }}
                      >
                        <span id="star">&#9733;</span>
                      </button>
                    );
                  })}
                </div>
                <TextInput
                  id="name"
                  name="name"
                  label="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  inputClassName="mb-2"
                />
                {errors.name && touched.name && (
                  <ValidationMessage type="error" className="mb-2">
                    {errors.name}
                  </ValidationMessage>
                )}
                <TextInput
                  id="email"
                  name="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  inputClassName="mb-6"
                />
                {errors.email && touched.email && (
                  <ValidationMessage type="error" className="mb-2">
                    {errors.email}
                  </ValidationMessage>
                )}
                <BoxInput
                  id="comment"
                  name="comment"
                  rows={5}
                  cols={30}
                  value={values.comment}
                  placeholder="Type here ..."
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.comment && touched.comment && (
                  <ValidationMessage type="error" className="mb-2">
                    {errors.comment}
                  </ValidationMessage>
                )}
                <Button
                  type="submit"
                  title="Submit"
                  disabled={!isValid || isSubmitting || rating === 0}
                />
              </Form>
            )}
          </Formik>
        </div>
        <aside className="p-4 bg-slate-100 border border-gray-200 rounded-md">
          {!comments.length ? (
            <ValidationMessage type="custom">
              No data to display
            </ValidationMessage>
          ) : (
            <Graph graphData={numberOfPeople} categories={categoriesData} />
          )}
        </aside>
      </div>
      <section className="p-4 bg-slate-100 border border-gray-200 rounded-md">
        {!comments.length ? (
          <ValidationMessage type="custom">No comments left.</ValidationMessage>
        ) : (
          <ul>
            {comments.map((item, index) => (
              <li key={index}>
                {item.comment} <span className="font-bold">by</span> {item.name}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;
