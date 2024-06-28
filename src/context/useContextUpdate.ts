import axios from 'axios'
import { defaultAppCTX } from './defaultContext'
import { useState, useEffect } from 'react'

export default function useContextUpdateFromSocket() {
  const [context, setContext] = useState(defaultAppCTX)
  const [globalUrl] = useState('https://wh-api-gky42.ondigitalocean.app/content/')
  // const [globalUrl] = useState('http://localhost:5555/content/')

  useEffect(() => {
    setContext((ctx: any) => {
      return {
        ...ctx,
        fetchPropertyInnerData,
        fetchPropertiesData,
        fetchAboutData,
        fetchAgentsData,
        fetchAgentsInnerData,
        fetchBlogsData,
        fetchBlogsInnerData,
        fetchDealTypeData,
        fetchLocationData,
        fetchPropertyCategoryData,
        fetchOfficesData,
        setSearchInput,
        setSelectedDealType,
        setSelectedPropertyCategory,
        setSelectedLocation,
        createCustomerRequest,
        cleanupSearchParams,
        setLocale,
        fetchDevelopersData,
        fetchDeveloperInnerData,
        fetchDistrictsData,
        fetchAmenitiesData,
        setEmailSubscription,
        setCcrSubmited,
        setCurrency,
        uploadProperty,
        fetchParkingTypes,
        fetchHeatingTypes,
        fetchConditionTypes,
        fetchStatusTypes
      }
    })
  }, [])

  interface ISearchParams {
    locale: string
  }

  interface IPropertySearchParams extends ISearchParams {
    dealType?: []
    location?: []
    category?: []
    text?: string
  }

  interface customerContactRequestPayload {
    fullName?: string
    lastName?: string
    email: string
    phoneNumber?: string
    property?: string
    contactDetails?: string
    project?: string
    developer?: string
  }

  interface uploadPropertyPayload {
    title: string
    description: string
    size: number
    bedroomQuantity: number
    price: number
    bathroom: number
    parking: number
    propertyAmenities: string[]
    streetAddress: string
    locale: string
    gallery: string[]
    propertyCategory: string
    dealType: string
    developer: string
    agent: string
    city: string
    district: string
    aboutProperty: string
    pinned: boolean
  }

  const setLocale = (props: IPropertySearchParams) => {
    fetchPropertiesData(props)
    fetchAgentsData(props.locale)
    fetchBlogsData(props.locale)
    fetchLocationData(props.locale)
    fetchPropertyCategoryData(props.locale)
    fetchDealTypeData(props.locale)
    fetchAboutData(props.locale)
    fetchOfficesData(props.locale)
    fetchDevelopersData(props.locale)

    //TODO: fetch agents inner when locale changes, tricky part is to get proper ID, because different locales has different id in strapi
    // fetchAgentsInnerData()

    setContext((ctx) => {
      return { ...ctx, locale: props.locale }
    })
  }

  const setCurrency = (value: string) => {
    setContext((ctx) => {
      return { ...ctx, currency: value }
    })
  }
  const setEmailSubscription = (value: boolean) => {
    setContext((ctx) => {
      return { ...ctx, emailSubscription: value }
    })
  }

  const setCcrSubmited = (value: boolean) => {
    setContext((ctx) => {
      return { ...ctx, ccrSubmited: value }
    })
  }

  const createCustomerRequest = (payload: customerContactRequestPayload) => {
    const url = `${globalUrl}customer-contact-requests/call-me`

    axios
      .post(url, {
        name: payload?.fullName,
        lastName: payload?.lastName,
        email: payload?.email ? payload.email : null,
        phoneNumber: payload?.phoneNumber,
        property: payload?.property,
        contactDetails: payload?.contactDetails,
        project: payload?.project,
        developer: payload?.developer
      })
      .then((response) => console.log('Customer Request Response: ', response))
      .catch((error) => console.log(error))
  }

  const uploadProperty = (payload: uploadPropertyPayload) => {
    const url = `${globalUrl}properties/upload`

    axios
      .post(url, payload)
      .then((response) => {
        console.log('Upload Request Response: ', response)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        window.localStorage.setItem('uploadedMediaUrls', JSON.stringify([]))
      })
  }

  const cleanupSearchParams = () => {
    setContext((ctx) => {
      return {
        ...ctx,
        searchInput: null,
        selectedDealType: [],
        selectedLocation: [],
        selectedPropertyCategory: [],
        emailSubscription: false
      }
    })
  }

  const setSearchInput = (value: any) => {
    setContext((ctx) => {
      return { ...ctx, searchInput: value }
    })
  }

  const setSelectedDealType = (type: any) => {
    setContext((ctx) => {
      return { ...ctx, selectedDealType: type }
    })
  }

  const setSelectedPropertyCategory = (category: any) => {
    setContext((ctx) => {
      return { ...ctx, selectedPropertyCategory: category }
    })
  }

  const setSelectedLocation = (location: any) => {
    setContext((ctx) => {
      return { ...ctx, selectedLocation: location }
    })
  }

  const fetchPropertiesData = (params: IPropertySearchParams) => {
    const url = `${globalUrl}properties?locale=${params?.locale}&dealType=${params?.dealType}&city=${params?.location}&category=${params?.category}&text=${params?.text}`
    setContext((ctx) => {
      return { ...ctx, loadingProperties: true }
    })

    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, properties: data, loadingProperties: false }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchParkingTypes = (locale: string) => {
    const url = `${globalUrl}properties/parkingTypes?locale=${locale}`

    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, parkingTypes: data }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchHeatingTypes = (locale: string) => {
    const url = `${globalUrl}properties/heatingTypes?locale=${locale}`

    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, heatingTypes: data }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchConditionTypes = (locale: string) => {
    const url = `${globalUrl}properties/condintionTypes?locale=${locale}`

    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, conditionTypes: data }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchStatusTypes = (locale: string) => {
    const url = `${globalUrl}properties/statusTypes?locale=${locale}`

    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, statusTypes: data }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchPropertyInnerData = (id: string) => {
    const url = `${globalUrl}properties/${id}`
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, propertyInner: data }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchDevelopersData = (locale: string, title?: string) => {
    const url = `${globalUrl}developers?locale=${locale}&title=${title}`
    setContext((ctx) => {
      return { ...ctx, loadingDevelopers: true }
    })
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, developers: data, loadingDevelopers: false }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchDeveloperInnerData = (id: string) => {
    const url = `${globalUrl}developers/${id}`
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, developerInner: data }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchAgentsData = (locale: string) => {
    const url = `${globalUrl}agents?locale=${locale}`
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, agents: data }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchAgentsInnerData = (id: string) => {
    const url = `${globalUrl}agents/${id}`
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, agentsInner: data }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchBlogsData = (locale: string) => {
    const url = `${globalUrl}blogs?locale=${locale}`
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, blogs: data }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchDistrictsData = (locale: string) => {
    const url = `${globalUrl}properties/districts?locale=${locale}`
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, districts: data }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchAmenitiesData = (locale: string) => {
    const url = `${globalUrl}properties/amenities?locale=${locale}`
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, amenities: data }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchBlogsInnerData = (id: string) => {
    const url = `${globalUrl}blogs/${id}`
    let data: any = null
    axios
      .get(url)
      .then((response) => {
        data = response.data.data
        setContext((ctx) => {
          return { ...ctx, blogsInner: data }
        })
      })
      .catch((error) => console.log(error))

    return data
  }

  const fetchLocationData = (locale: string) => {
    const url = `${globalUrl}properties/locations?locale=${locale}`
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, location: data }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchPropertyCategoryData = (locale: string) => {
    const url = `${globalUrl}properties/categories?locale=${locale}`
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, propertyCategory: data }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchDealTypeData = (locale: string) => {
    const url = `${globalUrl}properties/dealTypes?locale=${locale}`
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data

        setContext((ctx) => {
          return { ...ctx, dealType: data }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchAboutData = (locale: string) => {
    const url = `${globalUrl}about?locale=${locale}`
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, about: data }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchOfficesData = (locale: string) => {
    const url = `${globalUrl}company/offices?locale=${locale}`
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, offices: data }
        })
      })
      .catch((error) => console.log(error))
  }

  return { context }
}
