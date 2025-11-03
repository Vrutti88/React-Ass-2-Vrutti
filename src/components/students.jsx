import React, { useState } from "react";

function Students() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [students, setStudents] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !age || !course) return; 

        const newStudent = { name, age, course };
        setStudents([...students, newStudent]);

        setName("");
        setAge("");
        setCourse("");
    };

    return (
        <div style={{ padding: "20px" }}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />

                <input
                    type="number"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <br />

                <input
                    type="text"
                    placeholder="Enter your course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />
                <br />

                <button type="submit">Submit</button>
            </form>

            <h3>Students List:</h3>
            {students.length === 0 ? (
                <p>No data.</p>
            ) : (
                <ul>
                    {students.map((student, index) => (
                        <li key={index}>
                            {student.name}, {student.age}, {student.course}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Students;
