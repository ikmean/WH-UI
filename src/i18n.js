import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import ka from '../public/locales/ka/translation.json'
// import en from '../public/locales/en/translation.json'

const resources = {
  en: {
    translation: {
      Home: 'Home',
      Properties: 'Properties',
      About: 'About',
      AboutOurCompany: 'About our company',
      Agents: 'Our Team',
      Blogs: 'Blogs',
      ExploreHeader: 'The best place to find your dream house',
      ExploreText: 'Our main goal is to help you',
      StartExploring: 'Start exploring',
      Type: 'Type',
      Property: 'Property',
      Location: 'Location',
      Search: 'Search',
      SearchForProperties: 'Search For Properties',
      FeaturedProperties: 'Featured properties',
      BrowseProperties: 'Browse all properties',
      AllProperties: 'All properties',
      FindHouseHeader: 'Find your dream house as easy as 1, 2, 3',
      FindHouseText1: '1. Search for your favorite house in your location',
      FindHouseText2: '2. Make a visit appointment with one of our agents',
      FindHouseText3: '3. Get your dream house in a month, or less',
      FindHouseDesc1: 'Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege.',
      FindHouseDesc2: 'Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege.',
      FindHouseDesc3: 'Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege.',
      DiscoveryHeader: 'The best place to discover amazing properties at great prices',
      DiscoveryDescription:
        ' Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa eget posuere at proin lectus proin morbi euismod itae.',
      ReadOurLatestArticles: 'Read our latest articles',
      FooterText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna sed tortor nullam vel velit quis enim et amet.',
      SubscribeHeader: 'Subscribe to our newsletter',
      SubscriptionSuccessMessage: 'Thank you for joining our newsletter!',
      EnterEmail: 'Email address',
      NoPropertiesFound: '404 - No properties found',
      PreviousPage: 'Previous page',
      NextPage: 'Next page',
      PropertiesPageHeader: 'Browse properties',
      PropertiesPageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit bortis arcu enim urna adipiscing praesent .',
      TakeALookHeader: 'Take a look at our numbers',
      CustomerSatisfaction: 'Customer satisfaction',
      InPropertySales: 'Our experience',
      SuccessfulSales: 'Successful sales',
      MeetTheAgentsHeader: 'Meet the agents in our real estate firm',
      MeetTheAgentsDesc: 'Here you can get acquainted with the portfolios of our agents',
      ValuesHeader: 'The values that drive everything we do',
      ValuesDesc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mi lobortis gravida ornare leo in at in egestas.',
      excellence: 'excellence',
      accesibility: 'accesibility',
      quality: 'quality',
      excellencedDesc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mi lobortis gravida o',
      accesibilitydDesc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mi lobortis gravida o',
      qualityDesc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mi lobortis gravida o',
      VisitOffices: 'Come and visit one of our offices',
      Subscribe: 'Subscribe',
      OurAgents: 'Our Team',
      AgentPageDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      BlogsPageHeader: 'Articles & Resources',
      BrowseGallery: 'Browse Gallery',
      AboutTheProperty: 'About the property',
      PropertyAmenities: 'Property amenities',
      PropertyGallery: 'Property gallery',
      PropertyFor: 'Property for ',
      GetInTouch: 'Get in touch to receive more info',
      MessageSubmited: 'Your message has been submitted',
      GetBackToYou: 'I will get back to you within 24-48 hours.',
      FullName: 'Name',
      Email: 'Email address',
      PhoneNumber: 'Phone Number',
      RequestInfo: 'Request info',
      ReachTheAgent: 'Reach the agent',
      Developers: 'Developers',
      Projects: 'Projects',
      ContactDetails: 'ContactDetails',
      ConstructionCompanies: 'Construction Companies',
      Company: 'Companies',
      OngoingProjects: 'Ongoing Projects',
      PricesFrom: 'Prices From',
      SeeMoreDevelopers: 'See More Developers',
      OfThem: 'of them',
      EnterYourFullName: 'Please enter your name.',
      EnterYourEmail: 'Please enter your email address.',
      EnterYourGeoNumber: 'Please enter a georgian phone number',
      PropertiesInChargeOf: "'s properties",
      Articles: '- Articles',
      Currency: 'Currency',
      Language: 'Language',
      GE: 'GE',
      EN: 'EN',
      USD: 'USD',
      GEL: 'GEL',
      SearchForDevelopers: 'Search for developers',
      NoDevelopersFound: 'No developers found',
      InternationalRealtor: 'International Realtors'
    }
  },
  ka: {
    translation: {
      Home: 'მთავარი',
      Properties: 'უძრავი ქონება',
      About: 'ჩვენს შესახებ',
      AboutOurCompany: 'ჩვენი კომპანიის შესახებ',
      Agents: 'ჩვენი გუნდი',
      Blogs: 'ბლოგები',
      ExploreHeader: 'იპოვე შენი საოცნებო სახლი',
      ExploreText: 'ჩვენი გუნდი დაგეხმარება ოცნების ასრულებაში',
      StartExploring: 'დაიწყე ძიება',
      Type: 'გარიგების ტიპი',
      Property: 'ქონება',
      Location: 'ლოკაცია',
      Search: 'ძებნა',
      SearchForProperties: 'მოძებნე უძრავი ქონება',
      FeaturedProperties: 'შეთავაზებები',
      BrowseProperties: 'მოძებნე უძრავი ქონება',
      AllProperties: 'უძრავი ქონება',
      FindHouseHeader: 'იპოვნე შენი საოცნებო სახლი მარტივად',
      FindHouseText1: '1. მოძებნე სახლი შენთვის სასურველ ლოკაციაზე',
      FindHouseText2: '2. დაჯავშნე ვიზიტი ჩვენს აგენტთან',
      FindHouseText3: '3. შეიძინე შენი საოცნებო სახლი',
      FindHouseDesc1: 'Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege.',
      FindHouseDesc2: 'Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege.',
      FindHouseDesc3: 'Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege.',
      DiscoveryHeader: 'საუკეთესო ადგილი უძრავი ქონების აღმოსაჩენად',
      DiscoveryDescription:
        ' Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa eget posuere at proin lectus proin morbi euismod itae.',
      ReadOurLatestArticles: 'წაიკითხე ჩვენი უახლესი სტატიები',
      FooterText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna sed tortor nullam vel velit quis enim et amet.',
      SubscribeHeader: 'გამოიწერე კომპანიის სიახლეები',
      SubscriptionSuccessMessage: 'გმადლობთ რომ შემოგვიერთდით',
      EnterEmail: 'საფოსტო მისამართი',
      NoPropertiesFound: '404 - უძრავი ქონება არ მოიძებნა',
      PreviousPage: 'წინა',
      NextPage: 'შემდეგი',
      PropertiesPageHeader: 'მოძებნე უძრავი ქონება',
      PropertiesPageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit bortis arcu enim urna adipiscing praesent .',
      TakeALookHeader: 'ჩვენი სტატისტიკა',
      CustomerSatisfaction: 'კმაყოფილი მომხმარებელი',
      InPropertySales: 'გამოცდილება',
      SuccessfulSales: 'წარმატებული მოლაპარაკება',
      MeetTheAgentsHeader: 'გაიცანით ჩვენი გუნდი',
      MeetTheAgentsDesc: 'აქ შეგიძლიათ გაეცნოთ ჩვენი გუნდის წევრების პორტფელებს',
      ValuesHeader: 'ჩვენი ღირებულებები',
      ValuesDesc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mi lobortis gravida ornare leo in at in egestas.',
      excellence: 'ბრწყინვალება',
      accesibility: 'ხელმისაწვდომობა',
      quality: 'ხარისხი',
      excellenceDesc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mi lobortis gravida o',
      accesibilityDesc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mi lobortis gravida o',
      qualityDesc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mi lobortis gravida o',
      VisitOffices: 'ეწვიეთ ჩვენს ოფისებს',
      Subscribe: 'გამოწერა',
      OurAgents: 'ჩვენი გუნდი',
      AgentPageDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      BlogsPageHeader: 'სტატიები & რესურსები',
      BrowseGallery: 'დაათვალიერე გალერია',
      AboutTheProperty: 'ქონების აღწერა',
      PropertyAmenities: 'ქონების კეთილმოწყობა',
      PropertyGallery: 'ქონების სურათები',
      PropertyFor: 'გარიგების ტიპი - ',
      GetInTouch: 'დაგვიკავშირდი მეტი ინფორმაციისთვის',
      MessageSubmited: 'მოთხოვნა წარმატებით გაიგზავნა',
      GetBackToYou: 'დაგიკავშირდებით 24-48 საათის განმავლობაში',
      FullName: 'სახელი',
      Email: 'საფოსტო მისამართი',
      PhoneNumber: 'ტელეფონის ნომერი',
      RequestInfo: 'მოითხოვე ინფორმაცია',
      ReachTheAgent: 'დაუკავშირდი აგენტს',
      Developers: 'დეველოპერები',
      Projects: 'პროექტები',
      ContactDetails: 'კონტაქტის დეტალები, მეტი ინფორმაცია',
      ConstructionCompanies: 'სამშენებლო კომპანიები',
      Company: 'კომპანია',
      OngoingProjects: 'მიმდინარე პროექტი',
      PricesFrom: 'საწყისი ფასი',
      SeeMoreDevelopers: 'სამშენებლო კომპანიები',
      OfThem: 'მათგანი',
      EnterYourFullName: 'გთხოვთ შეიყვანოთ თქვენი სახელი',
      EnterYourEmail: 'გთხოვთ შეიყვანოთ თქვენი საფოსტო მისამართი',
      EnterYourGeoNumber: 'გთხოვთ შეიყვანოთ ქართული ნომერი',
      PropertiesInChargeOf: ' - ყველა უძრავი ქონება',
      Articles: '- სტატიები',
      Currency: 'ვალუტა',
      Language: 'ენა',
      GE: 'ქართული',
      EN: 'ინგლისური',
      USD: 'დოლარი',
      GEL: 'ლარი',
      SearchForDevelopers: 'მოძებნეთ დეველოპერი',
      NoDevelopersFound: 'დეველოპერი არ მოიძებნა',
      InternationalRealtor: 'საერთაშორისო რეალტორი'
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'ka',
  debug: true,

  interpolation: {
    escapeValue: false
  }
})

export default i18n
