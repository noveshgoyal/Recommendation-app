import { useEffect, useState } from "react";
import "./styles.css";
import img from "./img.jpg";

const hillStations = [
  {
    name: "Manali, Himachal Pradesh",
    description:
      "One of the most popular hill stations in Himachal, Manali offers the most magnificent views of the Pir Panjal and the Dhauladhar ranges covered with snow for most parts of the year. Manali has many trekking options around it, making it a great base for exploring this side of Himalayas. River Beas provides great rafting options in the nearby town of Kullu. Adjoining Parvati river, lies the Parvati Valley with  Kasol, Manikaran, Tosh and small villages attracting travellers for longer stays. Atal Tunnel now allows travellers to reach Sissu within a few hours making Spiti way more accessible. Tourists flock to Rohtang Pass & Solang valley for various adventure activities including skiing, paragliding, horse-riding & zorbing.",
    sightSeeing:
      "Atal Tunnel, Solang Valley, Jogini Waterfall, Hadimba Temple, Rohtang Pass, Parvati Valley, Sethan Valley, Jana Waterfall, Arjun Gufa, Manu Temple, Manikaran",
    rating: "4.5/5"
  },
  {
    name: "Panchgani, Maharashtra",
    description:
      "Panchgani is among the most promising hill stations in Maharashtra. Lazily nestled in the lap of the idyllic Krishna valley Panchgani is one of the most popular weekend getaways for the people living in and around the state.",
    sightSeeing:
      "Kamalgadh Fort, Sydney Point, Table Land, Parsi Point, Devil's Kitchen, Dhoom Dam, Rajapuri Caves",
    rating: "4/5"
  },
  {
    name: "Dharamshala, Himachal Pradesh",
    description:
      "Dharamshala or Dharamsala is one of the most popular hill stations in northern India. Previously known as Bhagsu, Daharamshala is situated in the hill slopes of the Kangra Valley. The town over the years has attracted travelers from all over the world for its natural climatic conditions, location, colorful temples and Gompas.",
    sightSeeing:
      "Adi Shakti Temple, Aghanjar Mahadev, Bhagsu waterfall, Bir paragliding spot, Brajeshwari Temple, Chamunda Mandir, Chinmaya Tapovan, Dal Lake, Dari, Narghota, Norbulingka Institute, Nurpur, Sidhbari, Dehra Gopipur",
    rating: "5/5"
  },
  {
    name: "Leh, Jammu $ Kashmir",
    description:
      "Leh Hill Station, the capital city town of Ladakh is truly an amazing Hill Stations In India. Lounging among the snow-designated slopes of Himalayas with a lot of monasteries and colorful areas, it is also the Buddhist capital of North India. The must visit devote Leh might be the Leh Structure, the miniature version in the Potala in Lhasa. Within the structure, near the top of the Namgyal hill, might be the Victory Tower, produced to commemorate Ladakh’s victory inside the Balti Kashmir armies at the begining of 16th century. Then you’ll find Buddhist gompas like the Namgyal Tsemo Gomapa, Soma gompa as well as the Sankar gompa, which are also worth going to.",
    sightSeeing:
      "Magnetic Hill, Khardung La, Leh Palace, Shanti Stupa Ladakh, Likir Monestary, Sankar Gompa",
    rating: "5/5"
  }
];

const holy = [
  {
    name: "Rishikesh, Uttarakhand",
    description:
      "Rishikesh is one of the names of Lord Vishnu meaning ‘Lord of Senses’. The place is the birthplace of yoga, where people come and practice yoga, meditate and dive into a deeper chapter of Hinduism.",
    sightSeeing:
      "Triveni Ghat, Ram Jhula, Lakshman Jhula Bridge, Neel Garh Waterfall, Patna Waterfall, Vashishta Gufa, Bhootnath Temple, Bharat Mandir",
    rating: "5/5"
  },
  {
    name: "Varanasi, Uttar pradesh",
    description:
      "With a great ancient history, Varanasi comes on the list of the top 7 Hindu sacred cities in India. It is believed that anyone who dies here will be liberated from the cycle of reincarnation. It is said that the ‘City of Gods’ was founded by Lord Shiva himself. The city also houses one of the most popular sites of pilgrimage in Hinduism – the Kashi Vishwanath Temple. The grand evening aarti at the Dashashwamedh Ghat is a magnificent affair, worthy of witnessing.",
    sightSeeing:
      "Kashi Vishwanath Temple, Asi Sangam, Dashashwamedh Ghat, Adi Keshava Temple, Varana Sangam, Manikarnika Ghat, Tulsi Manas Temple",
    rating: "5/5"
  },
  {
    name: "Dwarka(Dvaravati), Gujarat",
    description:
      "Positioned on the banks of River Gomti, Dwarka is an important part of Charm Dham along with Badrinath, Puri, and Rameshwaram. Dwarka is the only city that forms part of Char Dham as well as Sapta Puri. The abode of Lord Krishna also has a rich archaeological and historical background. It is often believed that Lord Krishna shifted his capital from the Yadava Kingdom to Dwarka around 5000 years ago and lived here thereafter. Since the city is full of centuries-old temples, the city plays a pivotal role in Hinduism.",
    sightSeeing:
      "Dwarkadhish Temple, Rukmani Temple, Nageshwar Jyotirlinga Temple, Gomti Ghat, Gita Temple, Bhadkeshwar Mahadev Mandir, Swami Narayan Mandir",
    rating: "5/5"
  }
];

const beaches = [
  {
    name: " Pondicherry",
    description:
      "Pondicherry offers you the touch of Mother Nature which you can’t enjoy in your hustling and bustling work life. It has a paradise of beaches and offers beautiful seashore ambience and view. The ancient culture of being a French Town still preserves in this city.You can satisfy your cravings by the vast variety of delicious food offered in the food court. The warm sand, it will lighten up your senses and while you enjoy the captivating view of sunrise and sunset. ",
    sightSeeing:
      "The Classic Karaikal Beach, The Poise Promenade Beach, The Majestic Mahe Beach",
    rating: "4/5"
  },
  {
    name: "Lakshadweep",
    description:
      "The collection of different islands, came together to be known as Lakshadweep. Surrounded by the Arabian Sea, this destination offers so many beautiful sites for beach lovers to spend their vacations.If you always wanted to learn fishing, this is the place which offers you the chance to try it. You can go for swimming, scuba diving, knee boat ride and many other water sports that are not offered by all beach destinations in India.",
    sightSeeing: " Kavaratti beach, Minicoy Beach",
    rating: "4.5/5"
  },
  {
    name: " Daman and Diu, Gujarat",
    description:
      "The southern coastline of India may have a beautiful number of beaches, but so does the West. Near to Gujrat, Daman and Diu are famous for its magnificent beaches. This union territory was under Portuguese occupation for more than 450 years and it still seems to boast about it.You can sail in a boat and click beautiful shots of the location. Devka beach might not be safest for swimming, but there is an amusement park beside it where your kids can enjoy. You can go swimming at Jampore Beach.",
    sightSeeing: "Devka Beach, Jampore Beach",
    rating: "4/5"
  },
  {
    name: "Andaman",
    description:
      "Amid the blue ocean Bay of Bengal, this island is a perfect beach destination in India to visit with your friends and family. The beauty of the Island has attracted tourists from all around the world. Walk on the white sands can be enthralling. You can indulge in different water sports that the beaches will offer.",
    sightSeeing: "Radhanagar beach, Lakshmanpur Beach and Elephant Beach",
    rating: "5/5"
  }
];

export default function App() {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${img}')`;
  });
  const [genre, setGenre] = useState(hillStations);

  function clickHandler(genre, bg) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Perfect Destination</h1>
      <p>
        Want to explore but struggling with the destination? Check out some of
        my favourite destinations. Select a genre and get started.
      </p>
      <button
        onClick={() => {
          clickHandler(hillStations);
        }}
      >
        Hill Stations
      </button>
      <button
        onClick={() => {
          clickHandler(holy);
        }}
      >
        Spiritual
      </button>
      <button
        onClick={() => {
          clickHandler(beaches);
        }}
      >
        Beaches
      </button>
      <div>
        <ul>
          {genre.map((place) => (
            <li key={genre.name}>
              <div id="placeName">
                {place.name} <span id="rating">{place.rating}</span>{" "}
              </div>
              <div id="placeDescription">{place.description}</div>
              <div id="sightSeen">
                <span style={{ fontWeight: "bold" }}> Places to see:</span>{" "}
                {place.sightSeeing}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
