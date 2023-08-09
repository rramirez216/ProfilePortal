function SignUpForm() {
  return (
    <form>
      <label htmlFor='first_name'>First Name:</label>
      <input type='text' id='first-name' />
      <label htmlFor='last_name'>Last Name:</label>
      <input type='text' id='last-name' />
      <label htmlFor='email'>Email:</label>
      <input type='email' id='email' />
      <input type='password' id='password' />
      <button>Submit</button>
    </form>
  )
}

export default SignUpForm
