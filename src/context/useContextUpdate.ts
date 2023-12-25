import axios from 'axios'
import { defaultAppCTX } from './defaultContext'
import { useState, useEffect } from 'react'

export default function useContextUpdateFromSocket() {
  const [context, setContext] = useState(defaultAppCTX)
  const [globalUrl] = useState('https://wh-api-gky42.ondigitalocean.app/content/')

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
        cleanupSearchParams
      }
    })
  }, [])

  interface customerContactRequestPayload {
    fullName?: string
    lastName?: string
    email: string
    phoneNumber?: string
    property?: string
    contactDetails?: string
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
      return { ...ctx, searchInput: null, selectedDealType: [], selectedLocation: [], selectedPropertyCategory: [] }
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

  const fetchPropertiesData = () => {
    const url = `${globalUrl}properties`
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data
        setContext((ctx) => {
          return { ...ctx, properties: data }
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
        console.log('fetchPropertyInnerData', data)
        setContext((ctx) => {
          return { ...ctx, propertyInner: data }
        })
      })
      .catch((error) => console.log(error))
  }

  const fetchAgentsData = () => {
    const url = `${globalUrl}agents`
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

  const fetchBlogsData = () => {
    const url = `${globalUrl}blogs`
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

    console.log(data)
    return data
  }

  const fetchLocationData = () => {
    const url = `${globalUrl}properties/locations`
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

  const fetchPropertyCategoryData = () => {
    const url = `${globalUrl}properties/categories`
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

  const fetchDealTypeData = () => {
    const url = `${globalUrl}properties/dealTypes`
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

  const fetchAboutData = () => {
    const url = `${globalUrl}about`
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

  const fetchOfficesData = () => {
    const url = `${globalUrl}company/offices`
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
