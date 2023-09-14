function List({ userList }) {
  return (
    <div>
      {userList ? (
        userList.map((user) => (
          <p key={user.id}>
            {user['first_name']} {user['last_name']}
          </p>
        ))
      ) : (
        <div>names go here</div>
      )}
    </div>
  )
}

export default List
