const TaskList = ({
  entryList,
  handleOnDelete,
  handleOnSwitch,
  handleOnCheck,
}) => {
  return (
    <div className="col text-center">
      <h2>Task List</h2>
      <hr />

      <table className="table table-striped table-hover">
        <tbody id="task-list">
          {entryList.map((item, i) => {
            return (
              <tr key={item._id}>
                <th scope="row">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value={item._id}
                    id="flexCheckDefault"
                    onChange={handleOnCheck}
                  />
                </th>
                <td>{item.task}</td>
                <td>{item.hour}</td>
                <td>
                  <button
                    className="btn btn-danger  "
                    onClick={() => {
                      return handleOnDelete(item._id);
                    }}
                  >
                    <i className="fa-regular fa-trash-can"></i> Delete
                  </button>{" "}
                  <button
                    onClick={() => handleOnSwitch(item._id, "bad")}
                    className="btn btn-success"
                  >
                    <i className="fa-sharp fa-solid fa-right-long"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
