import React, { useState } from 'react'
import { ButtonClose, Buttons, ModalImage, ModalVideoContainer } from './PropertiesStyles'
import { ReactComponent as ChevronLeft } from '../../lib/icons/ChevronLeft.svg'
import { ReactComponent as ChevronRight } from '../../lib/icons/ChevronRight.svg'
import { ReactComponent as Close } from '../../lib/icons/Close.svg'

export const ImageModal = ({ isModalOpen, selectedImageIndex, setSelectedImageIndex, data, closeModal }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  if (!isModalOpen || selectedImageIndex === null) {
    return null
  }

  const selectedImage = data.gallery[selectedImageIndex]

  const handlePrevClick = () => {
    setSelectedImageIndex(() => (selectedImageIndex - 1 + data.gallery.length) % data.gallery.length)
  }

  const handleNextClick = () => {
    setSelectedImageIndex(() => (selectedImageIndex + 1) % data.gallery.length)
  }

  const handleVideoClick = () => {
    setIsVideoPlaying(!isVideoPlaying)
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000000
      }}
    >
      <Buttons onClick={handlePrevClick}>
        <ChevronLeft />
      </Buttons>

      <ButtonClose onClick={closeModal}>
        <Close />
      </ButtonClose>
      {selectedImage.type === 'photo' ? (
        <ModalImage src={selectedImage.url} alt={`img-${selectedImageIndex}`} />
      ) : (
        <ModalVideoContainer onClick={handleVideoClick}>
          <video controls autoPlay>
            <source src={selectedImage.url} type='video/mp4' />
            <source src={selectedImage.url} type='video/ogg' />
          </video>
        </ModalVideoContainer>
      )}
      <Buttons onClick={handleNextClick}>
        <ChevronRight />
      </Buttons>
    </div>
  )
}
