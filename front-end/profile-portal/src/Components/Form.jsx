function Form() {
  return (
    <form>
      <label htmlFor=''>email</label>
      <input type='text' />
      <label htmlFor=''>password</label>
      <input type='text' />
      <button>Log In</button>
      <p>
        No account? <span>CREATE ONE</span>
      </p>
    </form>
  )
}

export default Form
