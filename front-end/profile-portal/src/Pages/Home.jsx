import React, { useState } from 'react'
import SignUpForm from '../Components/SignUpForm'

function Home() {
  const [firstName, setFirstName] = useState('ruben')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formData, setFormData] = useState({})

  return (
    <div>
      <h2>Create User</h2>
      <SignUpForm
        setFirstName={setFirstName}
        firstName={firstName}
        setLastName={setLastName}
        lastName={lastName}
        setEmail={setEmail}
        email={email}
        setPassword={setPassword}
        password={password}
        setFormData={setFormData}
        formData={formData}
      />
    </div>
  )
}

export default Home
