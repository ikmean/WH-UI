/* eslint-disable @typescript-eslint/no-empty-function */
export const defaultAppCTX = {
  properties: [],
  propertyInner: null,
  developers: [],
  developerInner: null,
  about: {},
  offices: [],
  agents: [],
  agentsInner: null,
  blogs: [],
  blogsInner: null,
  location: [],
  propertyCategory: [],
  dealType: [],
  selectedDealType: [],
  selectedPropertyCategory: [],
  selectedLocation: [],
  searchInput: null,
  loadingProperties: true,
  loadingDevelopers: true,
  locale: 'ka',
  currency: 'USD',
  emailSubscription: false,
  ccrSubmited: false,
  amenities: [],
  districts: [],
  parkingTypes: [],
  heatingTypes: [],
  conditionTypes: [],
  statusTypes: [],

  setLocale: () => {},
  setSelectedDealType: () => {},
  setSelectedPropertyCategory: () => {},
  setSelectedLocation: () => {},
  cleanupSearchParams: () => {},
  setSearchInput: () => {},
  setEmailSubscription: () => {},
  setCcrSubmited: () => {},
  setCurrency: () => {},

  fetchPropertyInnerData: () => {},
  fetchPropertiesData: () => {},

  fetchLocationData: () => {},
  fetchPropertyCategoryData: () => {},
  fetchDealTypeData: () => {},

  fetchAboutData: () => {},
  fetchOfficesData: () => {},

  fetchAgentsData: () => {},
  fetchAgentsInnerData: () => {},

  fetchBlogsData: () => {},
  fetchBlogsInnerData: () => {},

  fetchDevelopersData: () => {},
  fetchDeveloperInnerData: () => {},

  fetchDistrictsData: () => {},
  fetchAmenitiesData: () => {},

  createCustomerRequest: () => {},
  uploadProperty: () => {},

  fetchParkingTypes: () => {},
  fetchHeatingTypes: () => {},
  fetchConditionTypes: () => {},
  fetchStatusTypes: () => {}
}
