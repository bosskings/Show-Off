import profileIcon from "../../assets/show1.webp";
import img1 from "../../assets/show1.webp";
import img2 from "../../assets/show2.webp";
import img3 from "../../assets/show3.webp";
import img4 from "../../assets/show4.webp";
import img5 from "../../assets/show6.webp";
import img6 from "../../assets/show5.webp";
import vid1 from "../../assets/video/media-video2.mp4";

export const users = [
  {
    id: 1,
    username: "Carazan Brands",
    position: "Remote",
    rating: 4,
    yearsOfExperience: 5,
    location: "New York",
    specialty: "Web Designer",
    productType: "Digital",
    profilePic: profileIcon,
    design: [
      {
        id: 1,
        username: "CarazanBrands",
        profilePic: profileIcon,
        category: "Animations",
        title: "IOS UI/UX",
        img: vid1,
        likes: 200,
        views: 17.5,
        rating: 5,
      },
      {
        id: 1,
        username: "CarazanBrands",
        profilePic: profileIcon,
        category: "Illustrations",
        title: "Product Designer",
        img: img1,
        likes: 100,
        views: 290,
        rating: 5,
      },
    ],
  },
  {
    id: 2,
    username: "SarahSmith",
    position: "On-site",
    rating: 4.5,
    yearsOfExperience: 8,
    location: "Los Angeles",
    specialty: "Painter",
    productType: "Digital",
    profilePic: profileIcon,
    design: [
      {
        id: 2,
        username: "SarahSmith",
        profilePic: profileIcon,
        category: "Branding",
        title: "EpochOs Brand",
        img: img2,
        likes: 200,
        views: 150,
        rating: 5,
      },
    ],
  },
  {
    id: 3,
    username: "AlexJohnson",
    position: "Remote",
    rating: 4.9,
    yearsOfExperience: 10,
    location: "Chicago",
    specialty: "Animator",
    productType: "Hand-on",
    profilePic: profileIcon,
    design: [
      {
        id: 3,
        username: "AlexJohnson",
        profilePic: profileIcon,
        category: "Illustrations",
        title: "Artist",
        img: img3,
        likes: 200,
        views: 17.9,
        rating: 5,
      },
    ],
  },
  {
    id: 4,
    username: "EmmaDavis",
    position: "On-site",
    rating: 4.7,
    yearsOfExperience: 6,
    location: "San Francisco",
    specialty: "Branding",
    productType: "Hand-on",
    profilePic: profileIcon,
    design: [
      {
        id: 4,
        username: "EmmaDavis",
        profilePic: profileIcon,
        category: "Paint",
        title: "Queen of England",
        img: img4,
        price: 126.0,
        likes: 200,
        views: 30.5,
        rating: 5,
        quantity: 1,
      },
    ],
  },
  {
    id: 5,
    username: "MarkWilson",
    position: "Remote",
    rating: 4.6,
    yearsOfExperience: 7,
    location: "Miami",
    specialty: "Illustrator",
    productType: "Digital",
    profilePic: profileIcon,
    design: [
      {
        id: 5,
        username: "MarkWilson",
        profilePic: profileIcon,
        category: "Web Design",
        title: "E-commerce site",
        img: img5,
        likes: 200,
        views: 30,
        rating: 5,
      },
    ],
  },
  {
    id: 6,
    username: "LindaWhite",
    position: "On-site",
    rating: 5,
    yearsOfExperience: 9,
    location: "Boston",
    specialty: "Printer",
    productType: "Hand-on",
    profilePic: profileIcon,
    design: [
      {
        id: 6,
        username: "LindaWhite",
        profilePic: profileIcon,
        category: "Print",
        title: "construction Document",
        img: img6,
        likes: 200,
        views: 20,
        rating: 5,
      },
    ],
  },
];
