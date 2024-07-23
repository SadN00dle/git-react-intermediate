import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const {setUser} = useContext(UserContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
 
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser(username, password)
    }
    
  return (
    <div>
        <h2> Login </h2>

        <input 
        className='mb-2'
        value={username}
        onChange={(e)=>{
            setUsername(e.target.value)
        }}
        type="text" 
        placeholder='username' />

        <input 
        className='mt-2'
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
        type="text" 
        placeholder='password' />
        <button onClick={handleSubmit} className='bg-gray-400 rounded-lg w-20 h-9 '>Submit</button>
    </div>
  )
}

export default Login