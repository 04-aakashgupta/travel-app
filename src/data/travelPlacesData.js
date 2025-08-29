import londan_eye from "../assets/images/home/travel-place/londan_eye.jpg"
import city_rome from "../assets/images/home/travel-place/city_rome.jpg"
import paris from "../assets/images/home/travel-place/paris.jpg"

const travelPlacesData = [
  {
    id: 1,
    title: "London Eye",
    country: "London, United Kingdom",
    price: "1 Lakh/person",
    days: 5,
    rating: 4.8,
    temperature: "25° Sunny",
    description:
      "We have best rooms in town our services are always on our customers for get our great impression. We have also refund payment policy if you book our rooms and if you don’t like you can get back your payment.",
    image: londan_eye,
  },
  {
    id: 2,
    title: "City Rome",
    country: "Rome, Italy",
    price: "90,000/person",
    days: 6,
    rating: 4.7,
    temperature: "28° Sunny",
    description:
      "Experience the charm of ancient Rome with our guided tours. Refund policy included for your comfort.",
    image:city_rome,
  },
  {
    id: 3,
    title: "Paris Tour",
    country: "Paris, France",
    price: "95,000/person",
    days: 7,
    rating: 4.9,
    temperature: "22° Cloudy",
    description:
      "Romantic evenings and beautiful sights. Best rooms and refund policy available.",
    image: paris,
  },
];

export default travelPlacesData;
