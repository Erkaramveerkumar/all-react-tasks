import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoList = () => {
    const [inputField, setInputField] = useState("");
    const [inputArray, setInputArray] = useState([]);

    const onAdd = () => {
        if (inputField.trim() === "")
            return;
        setInputArray([...inputArray, inputField]);
        setInputField("");

    };

    const onDelete = (index) => {
        const newArray = inputArray.filter((item, i) => index !== i);
        setInputArray(newArray);
    };

    return (
        <div className="container my-5 vh-100">
            
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg rounded">
                        <div className="card-body">
                        <h1 className="text-center mb-4 text-primary fw-bold">To-Do List</h1>
                            <div className="input-group mb-3 shadow-sm">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    value={inputField}
                                    onChange={(e) => setInputField(e.target.value)}
                                    placeholder="Add Task"
                                />
                                <button className="btn btn-primary" onClick={onAdd}>
                                    Add Task
                                </button>
                            </div>
                            <ul className="list-group">
                                {
                                    inputArray.length === 0 ? (
                                        <li className="list-group-item text-center text-muted">
                                            No tasks added yet.
                                        </li>
                                    ) : (
                                        inputArray.map((item, index) => (
                                            <li
                                                key={index}
                                                className="list-group-item d-flex justify-content-between align-items-center"
                                            >
                                                {item}
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => onDelete(index)}
                                                >
                                                    Delete
                                                </button>
                                            </li>
                                        ))
                                    )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoList;
