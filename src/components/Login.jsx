import React,{useState,useContext} from 'react'
import UserContext from '../context/userContext'
function Login() {
    const [username, setUsrname] =useState('')
    const [password ,setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        setUser({username,password})
        setUsrname('');
        setPassword('');
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' value={username} onChange={(e) => setUsrname(e.target.value)} placeholder='username'/>
        {" "}
        <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login