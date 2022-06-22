const Images = [
  { image: require("../assets/beer-light.png") },
  { image: require("../assets/tea-light.png") },
  { image: require("../assets/sushi-light.png") },
  { image: require("../assets/bag-light.png") },
];

const ImagesDark = [
  { image: require("../assets/beer-dark.png") },
  { image: require("../assets/tea-dark.png") },
  { image: require("../assets/sushi-dark.png") },
  { image: require("../assets/bag-dark.png") },
];

const placeImages = [
  { image: require("../assets/pub.jpg") },
  { image: require("../assets/cafe.jpg") },
  { image: require("../assets/sushi.jpg") },
  { image: require("../assets/mall.jpg") },
  { image: require("../assets/cafe-two.jpg") },
  { image: require("../assets/mall-two.jpg") },
];

export const markers = [
  {
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    title: "The Wall Crawl",
    description: "Pub in Prague",
    image: Images[0].image,
    imageDark: ImagesDark[0].image,
    placeImages: placeImages[0].image,
  },
  {
    coordinate: {
      latitude: 37.79096412372947,
      longitude: -122.43052482604982,
    },
    title: "Chai Emporium",
    description: "Tea Cafe in Japantown",
    image: Images[1].image,
    imageDark: ImagesDark[1].image,
    placeImages: placeImages[1].image,
  },
  {
    coordinate: {
      latitude: 37.787555695950466,
      longitude: -122.4343228340149,
    },
    title: "Udon Dream",
    description: "Sushi Restaurant in San Jose",
    image: Images[2].image,
    imageDark: ImagesDark[2].image,
    placeImages: placeImages[2].image,
  },
  {
    coordinate: {
      latitude: 37.785876860302224,
      longitude:-122.42867946624757,
    },
    title: "Nexus Three",
    description: "Downtown Mall",
    image: Images[3].image,
    imageDark: ImagesDark[3].image,
    placeImages: placeImages[3].image,
  },
  {
    coordinate: {
      latitude: 37.78574119515,
      longitude:-122.43254184722902,
    },
    title: "Splendid Sips",
    description: "Cafe near Lafayette Park",
    image: Images[1].image,
    imageDark: ImagesDark[1].image,
    placeImages: placeImages[4].image,
  },
  {
    coordinate: {
      latitude: 37.790489327294715,
      longitude: -122.43440866470337,
    },
    title: "South Coast Plaza",
    description: "Mall near South Coast",
    image: Images[3].image,
    imageDark: ImagesDark[3].image,
    placeImages: placeImages[5].image,
  },
];

export const MapDarkTheme =  
    [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#181818"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1b1b1b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#2c2c2c"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8a8a8a"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#373737"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3c3c3c"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e4e4e"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3d3d3d"
            }
          ]
        }
      ]

export const mapStandardStyle = [
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
  ];