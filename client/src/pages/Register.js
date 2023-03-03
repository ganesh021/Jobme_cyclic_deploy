import { useState, useEffect } from "react"
import Wrapper from "../assets/wrappers/RegisterPage"
import { Logo, FormRow, Alert } from "../components"
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser, guestLogin } = useAppContext()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const toggleMember = () => {
    setValues({...values, isMember:!values.isMember})
  }
  const guestUser = () => {
    guestLogin()
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    const currentUser = { name, email, password }
    if (isMember) {
      loginUser(currentUser)
    } else {
      registerUser(currentUser)
    }
  }
  useEffect( () => {
    if(user) {
      setTimeout( () => {
        navigate('/')
      },3000)
    }
  }, [user, navigate])

  return (
    <Wrapper >
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3> {values.isMember? 'Login' : 'Register' } </h3>

        {showAlert && <Alert/>}

        {/* name field */}
        {!values.isMember && (
          <FormRow type='input' name='name' value={values.name} handleChange={handleChange} />
        )}
        
        {/* email field */}
        <FormRow type='email' name='email' value={values.email} handleChange={handleChange} />
        
        {/* password field */}
        <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />

        <button type='submit' className='btn btn-block' disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button onClick={toggleMember} className="member-btn" type="button">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
        <p>
          Need a tour? Sign in as
          <button onClick={guestUser} className="member-btn" type="button" disabled={isLoading}>
            Guest User
          </button>
        </p>

      </form>

    </Wrapper>
  )
}

export default Register