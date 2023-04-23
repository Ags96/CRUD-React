import './styles/deleteUserModal.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteUserModal = ( { deleteUserShow, setDeleteUserShow, userTarget } ) => {

  const modalDeleteClose = () => {
    setDeleteUserShow(false);
    toast.success('User Deleted Successfully', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    deleteUserShow ?
        <div className="modal__delete-container">
              <div className='modal__delete'>
                  <h3 className='modal__delete-title'>Delete User</h3>
                  <span onClick={modalDeleteClose} className='modal__delete-close'>x</span>
                  <p className='modal__delete-message'>The user {userTarget} has been deleted</p>
                  <button onClick={modalDeleteClose} className='modal__delete-btn'>Accept</button>
              </div> 
        </div> 
    : null
  )
}

export default DeleteUserModal