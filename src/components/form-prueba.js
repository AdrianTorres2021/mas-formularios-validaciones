import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [errors, setErrors] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );*/
    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
        //function validadora;
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h3>{ formMessage() }</h3>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
                <div>
                    Error en el campo de nombre
                </div>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                <div>
                    Error en el campo de email
                </div>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                <div>
                    Error en el campo de contraseña
                </div>
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;
