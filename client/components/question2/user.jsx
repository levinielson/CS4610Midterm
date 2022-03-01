

export const User = ({ user }) => {
  return (
    <div className="p-4">
      <div className={user.isAdmin ? "text-green-600" : ""}>{user.name}</div>
      <div>{user.email}<br/></div>
    </div>
  )
}