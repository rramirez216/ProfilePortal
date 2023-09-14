import { useState, useEffect } from 'react'
import axios from 'axios'
import SignUpForm from '../Components/SignUpForm'
import List from '../Components/List'

function Home() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formData, setFormData] = useState(null)
  const [userList, setUserList] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const userInfo = { firstName, lastName, email, password }
    setFormData(userInfo)
    console.log(userInfo)

    try {
      axios.post('http://localhost:3000/signup', userInfo, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    const fetchList = async () => {
      try {
        const result = await axios.get('http://localhost:3000/profiles')

        setUserList(result.data)

        console.log(result.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchList()
  }, [])

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
        formData={formData}
        handleSubmit={handleSubmit}
      />
      <List userList={userList} />
    </div>
  )
}

export default Home
