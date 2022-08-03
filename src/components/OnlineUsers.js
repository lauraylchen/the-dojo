import { useCollection } from '../hooks/useCollection'

// styles
import './OnlineUsers.css'

// components
import Avatar from '../components/Avatar'

export default function OnlineUsers() {
  const { documents, error } = useCollection('users')

  return (
    <div className='user-list'>
      <h2>All Users</h2>
      {error && <div className="error">{error}</div>}
      {documents && documents.map((user) => {
        <div key={user.id}>
          <span>{user.displayName}</span>
          <Avatar src={user.photoURL} />
        </div>
      })}
    </div>
  )
}
