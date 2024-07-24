import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const {setUser} = useContext(UserContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
 
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }
    
  return (
    <div className='flex flex-col items-center'>
        <h2 className='text-white font-bold mb-5 '> Login </h2>

        <input 
        type="text" 

        className='text-black mb-5 w-1/5 h-7 '

        value={username}
        onChange={(e)=>{
            setUsername(e.target.value)
        }}
        
        placeholder='username' />

        <input 
        className='text-black mt-5 mb-5 w-1/5 h-7'
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
        type="text" 
        placeholder='password' />
        <button onClick={handleSubmit} className='bg-gray-400 rounded-lg w-20 h-9 mb-5 '>Submit</button>
    </div>
  )
}

export default Login