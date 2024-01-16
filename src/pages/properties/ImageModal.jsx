import React from 'react'
import { ButtonClose, Buttons } from './PropertiesStyles'
import { ReactComponent as ChevronLeft } from '../../lib/icons/ChevronLeft.svg'
import { ReactComponent as ChevronRight } from '../../lib/icons/ChevronRight.svg'
import { ReactComponent as Close } from '../../lib/icons/close.svg'

const ImageModal = ({ isModalOpen, selectedImageIndex, setSelectedImageIndex, data, closeModal }) => {
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
        zIndex: 1000
      }}
      onClick={closeModal}
    >
      <Buttons onClick={handlePrevClick}>
        <ChevronLeft />
      </Buttons>
      <ButtonClose onClick={closeModal}>
        <Close />
      </ButtonClose>
      <img src={selectedImage.url} alt={`img-${selectedImageIndex}`} style={{ maxWidth: '60%', maxHeight: '60%' }} />
      <Buttons onClick={handleNextClick}>
        <ChevronRight />
      </Buttons>
    </div>
  )
}

export default ImageModal
