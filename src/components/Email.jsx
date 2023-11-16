import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeEmail } from '../redux/userSlice';

const Email = () => {
    const correo = useSelector ((state) => state.user.correo)
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(changeEmail(e.target.value))
    }
  return (
    <div>
      <input type='email' value={correo} placeholder='correo' onChange={handleChange}/>
    </div>
  )
}

export default Email
