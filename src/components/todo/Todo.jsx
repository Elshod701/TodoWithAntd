import { Input } from "antd";
import React from "react";
const Todo = ({ addData }) => {
  const [state, setState] = React.useState({ input: "" });

  const submit = (e) => {
    e.preventDefault();
    if (state.input.length > 2) {
      addData((p) => [...p, { ...state, id: Date.now() }]);
      setState({ input: "" });
    } else {
      alert("Add more than two letters");
    }
  };
  const change = (e) => {
    setState((state2) => ({ ...state2, input: e.target.value }));
  };

  return (
    <div>
      <form onSubmit={submit} className="flex items-center gap-2 mb-10">
        <label htmlFor="todo">Todo:</label>
        <Input
          style={{ display: "block", width: "30%" }}
          onChange={change}
          name="input"
          value={state.input}
          type="text"
          placeholder="Text"
        />
        <button
          className="bg-green-600  hover:bg-green-900  rounded-lg px-8 py-2 text-white font-medium "
          type="submit"
        >
          OK
        </button>
      </form>
    </div>
  );
};

export default Todo;
