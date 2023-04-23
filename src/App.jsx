import { useEffect, useState } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'
import DeleteUserModal from './components/DeleteUserModal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [formClose, setFormClose] = useState(true)
  const [deleteUserShow, setDeleteUserShow] = useState(false)
  const [userTarget, setUserTarget] = useState()

  const {
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById
  } = useUserCrud()

  useEffect(() => {
    getAllUsers()
  }, [])
  
  const handleOpenForm = () => {
    setFormClose(false)
  }

  return (

    <div className="app">
      <header className='app__header'>
      <h1 className='app__title'>Users</h1>
      <button onClick={handleOpenForm} className='app__btn'>Create new user</button>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <FormUser
      createNewUser={createNewUser}
      updateInfo={updateInfo}
      updateUserById={updateUserById}
      setUpdateInfo={setUpdateInfo}
      setFormClose={setFormClose}
      formClose={formClose}
      />
      <div className='app__user-container'>
        {
          users?.map(user => (
            <UserCard 
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setFormClose={setFormClose}
            setDeleteUserShow={setDeleteUserShow}
            setUserTarget={setUserTarget}
            />
          ))
        }
      </div>
      <DeleteUserModal
        deleteUserShow={deleteUserShow}
        setDeleteUserShow={setDeleteUserShow}
        userTarget={userTarget}
      />
      </div>
  )
}

export default App
