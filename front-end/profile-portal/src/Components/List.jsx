function List({ userList }) {
  return (
    <div>
      {userList ? (
        <div>{userList[0].first_name}</div>
      ) : (
        <div>names go here</div>
      )}
    </div>
  )
}

export default List
