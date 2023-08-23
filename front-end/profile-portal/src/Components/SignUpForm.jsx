/* eslint-disable react/prop-types */
import styled from 'styled-components'

function SignUpForm({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor='first-name'>First Name:</Label>
      <Input
        type='text'
        id='first-name'
        name='first-name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Label htmlFor='last-name'>Last Name:</Label>
      <Input
        type='text'
        id='last-name'
        name='last-name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Label htmlFor='email'>Email:</Label>
      <Input
        type='email'
        id='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Label htmlFor='password'>Password:</Label>
      <Input
        type='password'
        id='password'
        name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Create</button>
    </form>
  )
}

const Label = styled.label`
  display: block;
`
const Input = styled.input`
  display: block;
`

export default SignUpForm
