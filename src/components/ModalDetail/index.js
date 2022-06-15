import React, { useEffect, useMemo } from 'react'
import Modal from 'react-modal'
import useGetProjectDetail from '../../hooks/useGetProjectDetail'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './ModalDetail.scss'
import ProgressBar from '../ProgressBar'
import handleSearchByTag from '../../lib/searchByTag'
import urlify from '../../lib/urlify'
import { stylesConfig } from './ModalDetailConfig'
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
Modal.setAppElement('#portal')
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
  const memoizedTag = useMemo(() => {
    return projectDetails?.tech?.map((item, i) => (
      <div
        key={i}
        onClick={() => handleSearchByTag(item)}
        className='tech'
        style={{
          backgroundColor: `${
            randomColors[Math.floor(Math.random() * randomColors.length)]
          }`,
        }}>
        {item}
      </div>
    ))
  }, [projectDetails])
  return (
    <Modal
      className='main-modal'
      style={stylesConfig}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel='Example Modal'>
      {isLoading && <ProgressBar />}
      <AiOutlineCloseCircle className='btn-close' onClick={closeModal} />

      <div className='modal-content'>
        <div className='wrap'>
          <div className='image'>
            <img src={projectDetails.imgUrl} alt='' />
          </div>
          <div className='content-2'>
            <p className='project-name'>{projectDetails.projectName}</p>
            <div className='tech-used'>{memoizedTag}</div>
            <div
              className='description'
              dangerouslySetInnerHTML={{
                __html: urlify(projectDetails?.description),
              }}
            />
            {!isLoading && (
              <div>
                <p className='github-link'>
                  See Project :{' '}
                  <a
                    href={projectDetails.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='github-link'>
                    {projectDetails.githubLink}
                  </a>{' '}
                </p>
                <p className='github-link'>
                  View Project :{' '}
                  <a
                    href={projectDetails.previewLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='github-link'>
                    {projectDetails.previewLink}
                  </a>{' '}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalDetail
