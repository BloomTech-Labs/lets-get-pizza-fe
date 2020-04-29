import React from "react";
import { useForm } from "react-hook-form";

const EventUpdate = (props) => {
  const { handleSubmit, register, watch, errors } = useForm();
  const onSubmit = (values) => console.log(values);

  console.log(watch("example"));

  return (
    <form className="ui tiny form" onSubmit={handleSubmit(onSubmit)}>
      <div className="required field">
        <label>Title</label>
        <input
          name="title"
          ref={register({ required: true })}
        />
        {errors.title && (
          <span className="ui pointing red basic label">
            This field is required
          </span>
        )}
      </div>

      <div className="required field">
        <label>Description</label>
        <textarea
          rows="2"
          name="description"
          type="text"
          ref={register({ required: true })}
        />
        {errors.description && (
          <span className="ui pointing red basic label">
            This field is required
          </span>
        )}
      </div>

      <div className="two fields">
        <div className="required field">
          <label>Start Time</label>
          <input name="start_time" ref={register({ required: true })} />
          {errors.start_time && (
            <span className="ui pointing red basic label">
              This field is required
            </span>
          )}
        </div>

        <div className="required field">
          <label>End Time</label>
          <input name="end_time" ref={register({ required: true })} />
          {errors.end_time && (
            <span className="ui pointing red basic label">
              This field is required
            </span>
          )}
        </div>
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default EventUpdate;
