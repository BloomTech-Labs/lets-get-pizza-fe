import React from "react";
import { useForm } from "react-hook-form";
import API from "../../../utils/API";

const EventUpdate = ({ event, eventToEdit, setEventToEdit }) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);

  // console.log(watch("example"));
  // console.log(event);

  const saveEdit = (values) => {
    // e.preventDefault();

    API.put(`/events/${eventToEdit.id}`, values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    event.persist();
    console.log(event);
    setEventToEdit({ ...eventToEdit, title: event.target.value });
  };

  return (
    <form className="ui tiny form" onSubmit={handleSubmit(onSubmit)}>
      <div className="required field">
        <label>Title</label>
        <input
          name="title"
          ref={register({ required: true })}
          onChange={(e) =>
            setEventToEdit({ ...eventToEdit, title: e.target.value })
          }
          value={eventToEdit.title}
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
          onChange={(e) => {
            e.persist();
            setEventToEdit({ ...eventToEdit, description: e.target.value });
          }}
          value={eventToEdit.description}
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
          <input
            type="datetime-local"
            name="start_time"
            ref={register({ required: true })}
            onChange={(e) =>
              setEventToEdit({ ...eventToEdit, start_time: e.target.value })
            }
            value={eventToEdit.start_time}
          />
          {errors.start_time && (
            <span className="ui pointing red basic label">
              This field is required
            </span>
          )}
        </div>

        <div className="required field">
          <label>End Time</label>
          <input
            type="datetime-local"
            name="end_time"
            ref={register({ required: true })}
            onChange={(e) =>
              setEventToEdit({ ...eventToEdit, end_time: e.target.value })
            }
            value={eventToEdit.end_time}
          />
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
