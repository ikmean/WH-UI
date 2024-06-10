import { useEffect, useRef, React } from 'react'
import Button from '../../components/button/Button'

const UploadWidget = () => {
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
          console.log(result.info)
          const mediaUrlStorage = JSON.parse(window.localStorage.getItem('uploadedMediaUrls')) || []
          const mediaUrl = result.info.url
          let mediaType = 'video'

          if (result.info.format === 'png' || result.info.format === 'jpg') {
            mediaType = 'photo'
          }

          window.localStorage.setItem('uploadedMediaUrls', JSON.stringify([...mediaUrlStorage, { url: mediaUrl, type: mediaType }]))
          console.log(window.localStorage.getItem('uploadedMediaUrls'))
        }
      }
    )
  }, [])

  const handleWidgetOpen = (e) => {
    e.preventDefault()
    widgetRef.current.open()
  }

  return <Button text={'Media Upload'} color={'black'} click={(e) => handleWidgetOpen(e)} />
}

export default UploadWidget
