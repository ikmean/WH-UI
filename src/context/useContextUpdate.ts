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
        setEmailSubscription,
        setCcrSubmited,
        setCurrency
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
        name: payload?.fullName || 'unknown',
        lastName: payload?.lastName || 'unknown',
        email: payload.email,
        phoneNumber: payload?.phoneNumber || 'unknown',
        property: payload?.property,
        contactDetails: payload?.contactDetails || 'unknown'
      })
      .then((response) => console.log('Customer Request Response: ', response))
      .catch((error) => console.log(error))
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

  const fetchDevelopersData = (locale: string) => {
    const url = `${globalUrl}developers?locale=${locale}`
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, developers: data }
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
