import React, { useEffect } from 'react'
import Modal from 'react-modal'
import { useGetProjectDetail } from '../../hooks/useGetProjectDetails/useGetProjectDetail'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './ModalDetail.scss'
import ProgressBar from '../ProgressBar/ProgressBar'
import handleSearchByTag from '../../lib/searchByTag'
const randomColors = [
  '#2196f3',
  '#1976d2',
  '#1e88e5',
  '#1565c0',
  '#448aff',
  '#2979ff',
  '#039be5',
  '#0288d1',
  '#0277bd',
  '#0091ea',
]
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
function ModalDetail({ openModalProp, setOpenModal, id }) {
  const [modalIsOpen, setIsOpen] = React.useState(openModalProp || false)
  const { getProjectDetail, isLoading, projectDetails } = useGetProjectDetail()
  function closeModal() {
    setOpenModal(false)
    setIsOpen(false)
  }
  useEffect(() => {
    getProjectDetail(id)
  }, [id])
  return (
    <Modal
      className='main-modal'
      style={{
        overlay: {
          zIndex: '15',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
        },
        content: {
          position: 'absolute',
          top: '30px',
          left: '30px',
          right: '30px',
          bottom: '30px',
          background: '#1976d2',
          // background:
          //   'linear-gradient(270deg, rgba(33,150,243,1) 30%, rgba(28,158,221,1) 45%)',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '10px',
        },
      }}
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      // style={customStyles}
      contentLabel='Example Modal'>
      {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
      {isLoading && <ProgressBar />}
      <AiOutlineCloseCircle className='btn-close' onClick={closeModal} />

      <div className='modal-content'>
        <div className='wrap'>
          <div className='image'>
            <img src={projectDetails.imgUrl} alt='' />
          </div>
          <div className='content-2'>
            <p className='project-name'>{projectDetails.projectName}</p>
            <div className='tech-used'>
              {projectDetails?.tech?.map((item, i) => (
                <div
                  key={item._id}
                  onClick={() => handleSearchByTag(item)}
                  className='tech'
                  style={{
                    backgroundColor: `${
                      randomColors[
                        Math.floor(Math.random() * randomColors.length)
                      ]
                    }`,
                  }}>
                  {item}
                </div>
              ))}
            </div>

            <p>lorem1</p>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalDetail
