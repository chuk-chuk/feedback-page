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
import CommentCard from "./components/CommentCard/CommentCard";

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
    <div className="p-10 w-full flex flex-col items-center">
      <div className="lg:w-1/2 md:w-full sm:w-full mb-10 flex md:justify-center lg:justify-center gap-4">
        <div className="p-4 w-full bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
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
        {comments.length > 0 && (
          <div className="px-4 pt-4 w-full bg-white border border-gray-200 rounded-md shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <Graph graphData={numberOfPeople} categories={categoriesData} />
          </div>
        )}
      </div>
      <div className="lg:w-1/2 md:w-full sm:w-full flex items-center flex-col flex-wrap">
        {!comments.length ? (
          <ValidationMessage type="custom">
            Be the first to leave a comment!
          </ValidationMessage>
        ) : (
          <>
            {comments.map((item, index) => (
              <CommentCard card={item} key={index} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
