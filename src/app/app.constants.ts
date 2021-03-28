export const ELEMENT_VIDEOS_PLAYLIST_ID = {
  AIR: "PLitAAO2FhPTECrRbhFyIllj6TSobTGiJI",
  WATER: "PLitAAO2FhPTHZRcarOENNjYcdPlzwpZEn",
  EARTH: "PLitAAO2FhPTHdtNVNkcm3JIX6jmhPZjyN",
  FIRE: "PLitAAO2FhPTFw5EoLsuua6Ang60PGBH0d",
  SPIRIT: "PLitAAO2FhPTFjxy3EsgDR_XPtgiX8Ez-q",

  air: "PLitAAO2FhPTECrRbhFyIllj6TSobTGiJI",
  water: "PLitAAO2FhPTHZRcarOENNjYcdPlzwpZEn",
  earth: "PLitAAO2FhPTHdtNVNkcm3JIX6jmhPZjyN",
  energy: "PLitAAO2FhPTFw5EoLsuua6Ang60PGBH0d",
  spirit: "PLitAAO2FhPTFjxy3EsgDR_XPtgiX8Ez-q"
};

export const ELEMENTS = {
  EARTH: "earth",
  ENERGY: "energy",
  AIR: "air",
  WATER: "water",
  SPIRIT: "spirit"
};

export const ELEMENT_BLOG_CATEGORY = {
  AIR: "Air",
  WATER: "Water",
  EARTH: "Earth",
  Energy: "Energy",
  SPIRIT: "Spirit"
};

export const ELEMENT_SELECT = {
  AIR: "air",
  WATER: "water",
  EARTH: "earth",
  FIRE: "fire",
  SPIRIT: "spirit",
  CONFIG: "config"
};

export const AQI_WIDGET_LOCATIONS = {
  DELHI: "delhi",
  MUMBAI: "mumbai",
  KOLKATA: "kolkata",
  CHENNAI: "chennai",
  BANGALORE: "bangalore"
};

export const VIDEO_SLIDER_OPTIONS = {
  slidesPerView: 4,
  freeMode: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2
    },
    // when window width is >= 767px
    767: {
      slidesPerView: 3
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4
    }
  }
};

export const BREAKING_NEWS_SLIDER_OPTIONS = {
  slidesPerView: 1,
  spaceBetween: 1,
  freeMode: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  }
};

export const BLOG_SLIDER_OPTIONS = {
  slidesPerView: 4,
  spaceBetween: 1,
  freeMode: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2
    },
    // when window width is >= 767px
    767: {
      slidesPerView: 3
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4
    }
  }
};

export const ENDPOINTS = {
  YOUTUBE: {
    VIDEO: "https://www.googleapis.com/youtube/v3/videos",
    PLAYLIST: "https://www.googleapis.com/youtube/v3/playlistItems"
  },
  AQI_WIDGET: "https://api.waqi.info"
};

export const FIREBASE_COLLECTION = {
  BLOGS: "Blogs",
  SUBSCRIPTIONS: "Subscriptions",
  BLOG_IMAGE_STORAGE: "blog-images",
  ENVCAL_IMAGE_STORAGE: "environment-calendar",
  NEWS_IMAGE_STORAGE: "news-images",
  POLLS: "Polls",
  POLL: "Poll",
  ENVCAL: "Envcal",
  NEWS: "News",
  CONFIG: "config",
  COFFEE_CONVERSATIONS: "coffee-conversations"
};

export const VIDEO_PLAYER_TITLES = {
  AIR: "What is Air Quality Index?",
  WATER: "What is Ground water?",
  EARTH: "What is Food pH?",
  FIRE: "Energy consumption ranking from 1990 to 2017",
  SPIRIT: "What is Emotional Intelligence?",
  CONFIG: "About WorldIsOneFamily.com"
};

export const VIDEO_PLAYER_VIDEOS = {
  AIR: "qmOkbaPtAJA",
  WATER: "Z2HQY5A3o-s",
  EARTH: "LrLrOYLAwWY",
  FIRE: "L6murPEFbXg",
  SPIRIT: "LgUCyWhJf6s",
  CONFIG: "SYWb9hNX-1s"
};

//TODO try to find another way
export const PAGE_CATEGORY_MAP = {
  air: "Air",
  water: "Water",
  earth: "Earth",
  energy: "Energy",
  spirit: "Spirit"
};

export const POLL_STATUS = {
  SUBMITTED: "submitted",
  PUBLISHED: "published",
  INACTIVE: "inactive"
};

export const MEDIA_TYPE = {
  IMAGE: "image",
  VIDEO: "video"
};

export const Routes = {
  NEWS: {
    MANAGE: "/admin-dashboard/manage-news",
    ADD: "/admin-dashboard/add",
    EDIT: "/admin-dashboard/edit"
  }
};

export const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
