import React from "react";
import { useForm } from "react-hook-form";
import API from "../../../utils/API";

const EventUpdate = ({
  event,
  eventToEdit,
  setEventToEdit,
  toggleEdit,
  setToggleEdit,
}) => {
  const { handleSubmit, register, errors } = useForm();

  const saveEdit = (values) => {
    console.log(values);
    API.put(`/events/${eventToEdit.id}`, values)
      .then((res) => {
        console.log(res.data);
        setEventToEdit({
          title: "",
          description: "",
          start_time: "",
          end_time: "",
        });
        setToggleEdit(!toggleEdit);
      })
      .catch((err) => console.log(err));
  };

  // const handleChange = (event) => {
  //   event.persist();
  //   console.log(event);
  //   setEventToEdit({ ...eventToEdit, title: event.target.value });
  // };

  const convertDate = (date) => {
    let d = new Date(date);
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let dt = d.getDate();
    let hour = d.getHours();
    let mins = d.getMinutes();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }

    return `${year}-${month}-${dt}T${hour}:${mins}`;
  };

  return (
    <form className="ui tiny form" onSubmit={handleSubmit(saveEdit)}>
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
            value={convertDate(eventToEdit.start_time)}
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
            value={convertDate(eventToEdit.end_time)}
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
