import { useCollection } from '../hooks/useCollection'

// styles & images
import './OnlineUsers.css'
import CloseIcon from '../assets/close_icon.svg'

// components
import Avatar from './Avatar'

export default function OnlineUsers({ setOpen }) {
  const { documents, error } = useCollection('users')

  const closeOnlineUsers = () => {
    setOpen(false)
  }

  return (
    <div className='user-list'>
      <div className="header">
        <img src={CloseIcon} alt="close icon" class="closeicon" onClick={closeOnlineUsers} />
        <h2>All Users</h2>
      </div>
      {error && <div className="error">{error}</div>}
      {documents && documents.map((user) => (
        <div key={user.id} className='user-list-item'>
          {user.online && <span className='online-user'></span>}
          <span>{user.displayName}</span>
          <Avatar src={user.photoURL} />
        </div>
      ))}
    </div>
  )
}
