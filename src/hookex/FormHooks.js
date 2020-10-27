import React from 'react'
import useInputForm from './useInputForm'
export default function FormHooks() {
    const [username, updateusername, resetuser] = useInputForm();
    const [password, updatepassword, resetpassword] = useInputForm();
    return (
        <React.Fragment>
            <h1>email is:{username} and password is : {password}</h1>
            <form onSubmit={(e)=> e.preventDefault()}>
                <input onChange={updateusername} value={username} placeholder='username' />
                <input onChange={updatepassword} value={password} placeholder='password' />
                <button onClick={() => { resetuser(); resetpassword(); }}>Reset</button>
            </form>
        </React.Fragment>
    )
}
