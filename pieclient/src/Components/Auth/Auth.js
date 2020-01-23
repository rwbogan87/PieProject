import React, {useState} from 'react';
import '../Auth/Auth.css';

const Auth = () => {
// Challenge: Write out the state for firstName, lastName, email, and password using useState() and set everything to be empty strings
     const [firstName, setFirstName] = useState('');
     const [lastName, setLastName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [login, setLogin] = useState(true);

    const title = () => {
        return login ? 'Login' : 'Signup';
    }

    const loginToggle = (e) => {
        e.preventDefault();
        setLogin(!login)
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    const signupFields = () => !login ? (
        <div>
            <label htmlFor='firstName'>First Name:</label>
            <br/>
            <input type='text' id='firstName' value={firstName} onChange={(e) => setFirstName
            (e.target.value)} />
            <br/>
            <label htmlFor='lastName'>Last Name:</label>
            <br/>
            <input type='text' id='lastName' value={lastName} onChange={(e) => setLastName
            (e.target.value)} />
            <br/>
        </div>
    ) : null

                // video connecting server to client main focus //
    const handleSubmit = (e) => {
        e.preventDefault();
        // wrong endpoints, fix later
        const url = login ? 'http://localhost:3000/user/signin' : 'http://localhost:3000/user/signup';
        const bodyObj = login ? {
            email: email,
            password: password
        } :
        {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(bodyObj),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=> res.json())
        .then(json => props.setSession(json))
        .catch(json => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{title()}</h1>
                {signupFields()}
                <label htmlFor='email'>Email:</label>
                <br/>
                <input type='text' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <br />
                <label htmlFor='password'>Password:</label>
                <br />
                <input type='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br />
                <button onClick={loginToggle}>Login/Signup Toggle</button>
                <br />
                <button type="submit">Submit User Data</button>
            </form>
        </div>
    );
};

export default Auth;