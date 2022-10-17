import React, { useState } from "react";
import { Formik, FormikProps, Form } from "formik";
import * as yup from "yup";
import Button from "./components/Button/Button";
import Graph from "./components/Graph/Graph";
import BoxInput from "./components/BoxInput/BoxInput";
import TextInput from "./components/TextInput/TextInput";
import { Comment } from "./App.types";
import "./index.css";
import ValidationMessage from "./components/ValidationMessage/ValidationMessage";

const validationSchema: yup.SchemaOf<Comment> = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  comment: yup.string().required("Leave your comment please"),
  rating: yup.number().required(),
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

  return (
    <div className="m-10 w-full md:w-3/4 lg:w-1/2">
      <div className="mb-12 flex gap-8 justify-between">
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
              errors,
              touched,
            }: FormikProps<Comment>) => (
              <Form>
                <div className="mb-4">
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
                        <span>&#9733;</span>
                      </button>
                    );
                  })}
                </div>
                <TextInput
                  id="name"
                  name="name"
                  placeholder="Name"
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
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email"
                  inputClassName="mb-6"
                />
                {errors.email && touched.email && (
                  <ValidationMessage type="error" className="mb-2">
                    {errors.email}
                  </ValidationMessage>
                )}
                <BoxInput
                  id="comment"
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
                <Button type="submit" title="Submit" />
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
            <Graph graphData={[1, 2, 3, 4, 5]} />
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
