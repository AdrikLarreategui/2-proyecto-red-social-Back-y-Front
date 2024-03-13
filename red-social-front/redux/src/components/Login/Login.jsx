// import { useState } from 'react'
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { login } from '../../redux/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import React from "react";
// import { login, reset } from '../../redux/auth/authSlice'
import { notification } from 'antd'



const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { isError, isSuccess, message } = useSelector((state) => state.auth)

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

 useEffect(() => {
      if (isError) {
        notification.error({  
          message: "Error", 
          description: message });
      }
      if (isSuccess) {
        notification.success({  
          message: "Success", 
          description: message });
        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      }
      dispatch(reset());
    }, [isError, isSuccess, message])

	const { email, password } = formData

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(formData)
		dispatch(login(formData))
		navigate('/profile')
	}

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}
	// dispatch()
	// navigate()
	return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					placeholder="email"
					required
				/>
				<input
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					placeholder="password"
					required
				/>
				<button type="submit">login</button>
			</form>
		</>
	)
}

export default Login


// import React from "react";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { login } from '../../redux/auth/authSlice'
// import { login, reset } from '../../redux/auth/authSlice'
// import { notification } from 'antd'

// const Login = () => {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { isError, isSuccess, message } = useSelector((state) => state.auth)

//   const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     })

    // useEffect(() => {
    //   if (isError) {
    //     notification.error({  
    //       message: "Error", 
    //       description: message });
    //   }
    //   if (isSuccess) {
    //     notification.success({  
    //       message: "Success", 
    //       description: message });
    //     setTimeout(() => {
    //       navigate("/profile");
    //     }, 2000);
    //   }
    //   dispatch(reset());
    // }, [isError, isSuccess, message])
    
//     const { email, password } = formData
//     const onChange = (e) => {          
//         setFormData((prevState) => ({
//             ...prevState,
//             [e.target.name]: e.target.value
//         }))
//     }

//     const onSubmit = (e) => {
//       e.preventDefault()
//       dispatch(login(formData))
//       console.log('formData', formData)
//     }

//     return (
//         <form onSubmit={onSubmit}>
//             <input 
//                 type="email"
//                 name="email"
//                 value={ email }
//                 onChange={onChange}
//                 placeholder="tu email aquí"
//                 required
//             />
//              <input 
//                 type="password"
//                 name="password"
//                 value={ password }
//                 onChange={onChange}
//                 placeholder="tu contraseña aquí"
//                 required
//             />
//             <button type="submit">Login</button>
//         </form>
//     )
// }

// export default Login