import React from 'react';

function Students({isSubmitted}){
    return(
        <div>
            <form action="onSubmit">
                {/* <p>Enter your name:</p>  */}
                <input type="text" placeholder='Enter your name' id="name"/><br />
                {/* <p>Enter your age:</p>  */}
                <input type="number" placeholder='Enter your age' id="age"/><br />
                {/* <p>Enter your course:</p>  */}
                <input type="text" placeholder='Enter your course' id="course"/><br />
                <button>Submit</button>
            </form>
            {isSubmitted ? <p>You are logged in.</p> : <p>No data</p>}
        </div>
    );
}

export default Students;