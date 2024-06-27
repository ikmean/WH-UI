import { useEffect, useRef, React } from 'react'
import Button from '../../components/button/Button'
import { useTranslation } from 'react-i18next'

const UploadWidget = ({ setFormData }) => {
  const { t } = useTranslation()

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

          if (result.info.format === 'png' || result.info.format === 'jpg' || result.info.format === 'webp') {
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

  return <Button text={t('MediaUpload')} color={'white'} click={(e) => handleWidgetOpen(e)} />
}

export default UploadWidget
