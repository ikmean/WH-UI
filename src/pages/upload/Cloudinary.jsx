import { useEffect, useRef, React } from 'react'
import Button from '../../components/button/Button'

const UploadWidget = ({ setFormData }) => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef()

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'ikameancloud',
        uploadPreset: 'warmHouse'
      },
      function (error, result) {
        if (result.event === 'success' && result.info.url) {
          const mediaUrlStorage = JSON.parse(window.localStorage.getItem('uploadedMediaUrls')) || []
          const mediaUrl = result.info.url
          let mediaType = 'video'

          if (result.info.format === 'png' || result.info.format === 'jpg') {
            mediaType = 'photo'
          }

          window.localStorage.setItem('uploadedMediaUrls', JSON.stringify([...mediaUrlStorage, { url: mediaUrl, type: mediaType }]))
        }

        if (result.event === 'close') {
          const mediaUrls = JSON.stringify(JSON.parse(window.localStorage.getItem('uploadedMediaUrls')))
          setFormData((data) => {
            return { ...data, gallery: mediaUrls }
          })
        }
      }
    )
  }, [])

  const handleWidgetOpen = (e) => {
    e.preventDefault()
    widgetRef.current.open()
  }

  return <Button text={'Media Upload'} color={'white'} click={(e) => handleWidgetOpen(e)} />
}

export default UploadWidget
