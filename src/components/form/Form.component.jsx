import { useState } from "react";

import { randomStr } from "../../utils/randomGenerator.";

const Form = ({ taskEntry }) => {
  const [formData, setFormData] = useState({});
  const clearInput = (e) => {
    return (e.target.value = " ");
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: name === "hour" ? +value : value,
      type: "entry",
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    taskEntry({ ...formData, _id: randomStr() });
    clearInput(e);
  };

  return (
    <form action="javascript:void(0)" onSubmit={handleOnSubmit}>
      <div className="row g-2 mt-3">
        <div className="col-md-6">
          <input
            required
            name="task"
            type="text"
            className="form-control"
            placeholder="Enter Task Title"
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-3">
          <input
            name="hour"
            type="number"
            className="form-control"
            placeholder="Enter hours"
            required
            min="1"
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-3">
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              <i className="fa-regular fa-pen-to-square"></i> Add New Task
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Form;
