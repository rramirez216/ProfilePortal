import styled from 'styled-components'

function SignUpForm() {
  return (
    <form>
      <Label htmlFor='first_name'>First Name:</Label>
      <Input type='text' id='first-name' />
      <Label htmlFor='last_name'>Last Name:</Label>
      <Input type='text' id='last-name' />
      <Label htmlFor='email'>Email:</Label>
      <Input type='email' id='email' />
      <Label htmlFor='password'>Password:</Label>
      <Input type='password' id='password' />
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
