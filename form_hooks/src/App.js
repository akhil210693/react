import React from 'react';
import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="container">
      
        <div className="row">
          <div className="offset-sm-3 col-sm-6">
          <div className="uform m-5">
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "Name is Required" })}
                onKeyUp={() => {
                  trigger("name");
                }} />
                 {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
              </div>
              <div className="form-group">
                <label>Age:</label>
                <input
                type="text"
                className={`form-control ${errors.age && "invalid"}`}
                {...register("age", {
                  required: "Age is Required",
                  min: {
                    value: 13,
                    message: "Minimum Required age is 13",
                  },
                  max: {
                    value: 65,
                    message: "Maximum allowed age is 65",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only numbers are allowed",
                  }
                })}
                onKeyUp={() => {
                  trigger("age");
                }}
              />
              {errors.age && (
                <small className="text-danger">{errors.age.message}</small>
              )}
              </div>
              <div className="form-group">
                <label>Phonenumber:</label>
                <input
                type="text"
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", { required: "Phone is Required",
                pattern: {
                  value: /^[6789]\d{9}$/,
                  message: "Invalid phone no",
                },
               })}
               onKeyUp={() => {
                trigger("phone");
              }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                type="text"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", { required: "Email is Required" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
              </div>
              <div className="form-group">
                <label>Message:</label>
                <textarea
                className={`form-control ${errors.message && "invalid"}`}
                {...register("message", { required: "Message is Required",
                minLength: {
                  value: 10,
                  message: "Minimum Required length is 10",
                },
                maxLength: {
                  value: 50,
                  message: "Maximum allowed length is 50 ",
                }
               })}
               onKeyUp={() => {
                trigger("message");
              }}
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
              </div>
              <div className="text-center">
              <input
              type="submit"
              className="btn btn-primary my-3"
              value="Send message"
            />

              </div>
            </form>

          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
