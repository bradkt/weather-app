export const movieDataAPIKeyV3 = "api_key=6f3a1bef2816aa6352efacdebf1b4ac5";

export const movieDataAPIKeyV4 =
  "api_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjNhMWJlZjI4MTZhYTYzNTJlZmFjZGViZjFiNGFjNSIsInN1YiI6IjVjMWQwYjczYzNhMzY4NTEyMGVjNGY3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HnEKTRsaEoBuOcCqa-Phta4x4VMqOOUwYJcaOu4Xg74";

//https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

//ex: https://api.themoviedb.org/3/movie/550?api_key=6f3a1bef2816aa6352efacdebf1b4ac5

export const fakeMoiveDatabyID = {
  adult: false,
  backdrop_path: "/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg",
  belongs_to_collection: null,
  budget: 63000000,
  genres: [{ id: 18, name: "Drama" }],
  homepage: "http://www.foxmovies.com/movies/fight-club",
  id: 550,
  imdb_id: "tt0137523",
  original_language: "en",
  original_title: "Fight Club",
  overview:
    'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
  popularity: 24.548,
  poster_path: "/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
  production_companies: [
    {
      id: 508,
      logo_path: "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
      name: "Regency Enterprises",
      origin_country: "US"
    },
    {
      id: 711,
      logo_path: "/tEiIH5QesdheJmDAqQwvtN60727.png",
      name: "Fox 2000 Pictures",
      origin_country: "US"
    },
    { id: 20555, logo_path: null, name: "Taurus Film", origin_country: "" },
    {
      id: 54051,
      logo_path: null,
      name: "Atman Entertainment",
      origin_country: ""
    },
    {
      id: 54052,
      logo_path: null,
      name: "Knickerbocker Films",
      origin_country: "US"
    },
    {
      id: 25,
      logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
      name: "20th Century Fox",
      origin_country: "US"
    },
    {
      id: 4700,
      logo_path: "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
      name: "The Linson Company",
      origin_country: ""
    }
  ],
  production_countries: [
    { iso_3166_1: "DE", name: "Germany" },
    { iso_3166_1: "US", name: "United States of America" }
  ],
  release_date: "1999-10-15",
  revenue: 100853753,
  runtime: 139,
  spoken_languages: [{ iso_639_1: "en", name: "English" }],
  status: "Released",
  tagline: "Mischief. Mayhem. Soap.",
  title: "Fight Club",
  video: false,
  vote_average: 8.4,
  vote_count: 14549
};

//ex: https://api.themoviedb.org/3/search/movie?api_key=6f3a1bef2816aa6352efacdebf1b4ac5&query=back+to+the+future

export const fakeMoiveDatabySearch = {
  page: 1,
  total_results: 14,
  total_pages: 1,
  results: [
    {
      vote_count: 9652,
      id: 105,
      video: false,
      vote_average: 8.2,
      title: "Back to the Future",
      popularity: 18.516,
      poster_path: "/pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg",
      original_language: "en",
      original_title: "Back to the Future",
      genre_ids: [12, 35, 878, 10751],
      backdrop_path: "/x4N74cycZvKu5k3KDERJay4ajR3.jpg",
      adult: false,
      overview:
        "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
      release_date: "1985-07-03"
    },
    {
      vote_count: 6067,
      id: 165,
      video: false,
      vote_average: 7.6,
      title: "Back to the Future Part II",
      popularity: 11.902,
      poster_path: "/k5dzvCQkXU2CAhLtlj9BHE7xmyK.jpg",
      original_language: "en",
      original_title: "Back to the Future Part II",
      genre_ids: [12, 35, 10751, 878],
      backdrop_path: "/snLFUFzWUZCdYkAbhZlaGJxiY3I.jpg",
      adult: false,
      overview:
        "Marty and Doc are at it again in this wacky sequel to the 1985 blockbuster as the time-traveling duo head to 2015 to nip some McFly family woes in the bud. But things go awry thanks to bully Biff Tannen and a pesky sports almanac. In a last-ditch attempt to set things straight, Marty finds himself bound for 1955 and face to face with his teenage parents -- again.",
      release_date: "1989-11-22"
    },
    {
      vote_count: 4769,
      id: 196,
      video: false,
      vote_average: 7.3,
      title: "Back to the Future Part III",
      popularity: 11.497,
      poster_path: "/6DmgPTZYaug7QNDjOhUDWyjOQDl.jpg",
      original_language: "en",
      original_title: "Back to the Future Part III",
      genre_ids: [12, 35, 10751, 878],
      backdrop_path: "/pP2a4MBQbIeZMbErBWMjxTT5Npb.jpg",
      adult: false,
      overview:
        "The final installment of the Back to the Future trilogy finds Marty digging the trusty DeLorean out of a mineshaft and looking for Doc in the Wild West of 1885. But when their time machine breaks down, the travelers are stranded in a land of spurs. More problems arise when Doc falls for pretty schoolteacher Clara Clayton, and Marty tangles with Buford Tannen.",
      release_date: "1990-05-25"
    },
    {
      vote_count: 3,
      id: 48499,
      video: false,
      vote_average: 5.5,
      title: "Back to the Future Part II. Behind the scenes.",
      popularity: 1.4,
      poster_path: "/eA7oa7uBUpksFkWCXCTPS6un5bm.jpg",
      original_language: "en",
      original_title: "Back to the Future Part II. Behind the scenes.",
      genre_ids: [10770, 99],
      backdrop_path: "/woJSZbCRfKWS4TUQk1K4WOXWs7K.jpg",
      adult: false,
      overview: "",
      release_date: "1989-11-17"
    },
    {
      vote_count: 4,
      id: 412272,
      video: false,
      vote_average: 5.4,
      title: "Back to the 2015 Future",
      popularity: 0.782,
      poster_path: "/zta7rljYgqGG1mGVgJjvUv9IQjj.jpg",
      original_language: "en",
      original_title: "Back to the 2015 Future",
      genre_ids: [],
      backdrop_path: null,
      adult: false,
      overview: "",
      release_date: ""
    },
    {
      vote_count: 1,
      id: 230364,
      video: false,
      vote_average: 6,
      title: "The Making of Back to the Future",
      popularity: 0.87,
      poster_path: null,
      original_language: "en",
      original_title: "The Making of Back to the Future",
      genre_ids: [99, 10770, 99],
      backdrop_path: null,
      adult: false,
      overview: "The Making of 'Back to the Future'",
      release_date: "1985-10-25"
    },
    {
      vote_count: 1,
      id: 468923,
      video: true,
      vote_average: 10,
      title: "Back to the Future: Hilarious Outtakes",
      popularity: 0.872,
      poster_path: "/aoYzMDqseZ4T20fk0aPXrVrAO9Y.jpg",
      original_language: "en",
      original_title: "Back to the Future: Hilarious Outtakes",
      genre_ids: [35],
      backdrop_path: null,
      adult: false,
      overview:
        "A short blooper reel from the filming of the 1985 film, Back to the Future.",
      release_date: "2002-12-02"
    },
    {
      vote_count: 1,
      id: 113268,
      video: false,
      vote_average: 6,
      title: "The Secrets of the Back to the Future Trilogy",
      popularity: 0.948,
      poster_path: "/255auM4EiLxjUcoikrns5HV6RV.jpg",
      original_language: "en",
      original_title: "The Secrets of the Back to the Future Trilogy",
      genre_ids: [35, 12, 878],
      backdrop_path: null,
      adult: false,
      overview:
        "The Secrets of the Back to the Future Trilogy was a program hosted by Kirk Cameron. The show answered questions that Back to the Future fans sent in by letter.  It was released onto videocassette in 1990 and as a bonus feature on the disc for Back to the Future Part III in the 2002 release of the Back to the Future trilogy. It is also available in the 2010 Blu-Ray trilogy.",
      release_date: "1990-06-12"
    },
    {
      vote_count: 4,
      id: 48501,
      video: false,
      vote_average: 6.8,
      title: "Back to the Future: Making the Trilogy",
      popularity: 0.732,
      poster_path: "/8nzUijRsH6lRhaRmYc3M26nW5hE.jpg",
      original_language: "en",
      original_title: "Back to the Future: Making the Trilogy",
      genre_ids: [99],
      backdrop_path: null,
      adult: false,
      overview:
        "This is the making of the Back to the Future Trilogy by acclaimed documentary maker Laurent Bouzereau and appears on the Back to the Future DVD set.",
      release_date: "2002-01-01"
    },
    {
      vote_count: 0,
      id: 451306,
      video: true,
      vote_average: 0,
      title: "Looking Back to the Future",
      popularity: 0.6,
      poster_path: "/ydrkrCH8blGHjWAmtqbknCB7ccs.jpg",
      original_language: "en",
      original_title: "Looking Back to the Future",
      genre_ids: [99],
      backdrop_path: null,
      adult: false,
      overview:
        "A 9-part retrospective documentary from 2009 on the trilogy’s legacy.",
      release_date: "2009-02-10"
    },
    {
      vote_count: 0,
      id: 517683,
      video: false,
      vote_average: 0,
      title: "Back To The Future... The Ride",
      popularity: 0.6,
      poster_path: "/hWDkUBBtN6P3C02uubct6LE1eMw.jpg",
      original_language: "en",
      original_title: "Back To The Future... The Ride",
      genre_ids: [],
      backdrop_path: null,
      adult: false,
      overview:
        'Visitors to the "Institute of Future Technology" enter what they believe to be a tour of the facilities, but instead get involved in a chase through time to recover a time-machine stolen by Biff Tannen.',
      release_date: "1991-05-02"
    },
    {
      vote_count: 0,
      id: 294145,
      video: false,
      vote_average: 0,
      title: "Looking Back to the Future: Raymond Loewy, Industrial Designer",
      popularity: 0.626,
      poster_path: "/xFuQfuPgvMgc6x17lRGK49CmPpP.jpg",
      original_language: "en",
      original_title:
        "Looking Back to the Future: Raymond Loewy, Industrial Designer",
      genre_ids: [],
      backdrop_path: "/d7Aax0fvHLM0Gq8Kpm1Kec6518v.jpg",
      adult: false,
      overview: "",
      release_date: "1985-01-01"
    },
    {
      vote_count: 0,
      id: 555302,
      video: false,
      vote_average: 0,
      title: "The Making of Back to the Future Part 2",
      popularity: 0.6,
      poster_path: null,
      original_language: "en",
      original_title: "The Making of Back to the Future Part 2",
      genre_ids: [99],
      backdrop_path: null,
      adult: false,
      overview: "The making of Back to the Future Part 2",
      release_date: "1989-01-01"
    },
    {
      vote_count: 105,
      id: 20803,
      video: false,
      vote_average: 7.8,
      title: "Ivan Vasilyevich Changes His Profession",
      popularity: 6.518,
      poster_path: "/rUQMIzCr0ZrZtydB4KnPv2laCzw.jpg",
      original_language: "ru",
      original_title: "Иван Васильевич меняет профессию",
      genre_ids: [35, 878],
      backdrop_path: "/1qKvu4y6roUVKVB3nLGaurPbzi8.jpg",
      adult: false,
      overview:
        "Shurik Timofeev builds a working model of a time machine. By accident, Ivan Bunsha, an apartment complex manager, and George Miloslavsky, a petty burglar, are transferred to 16th century Moscow, while Tsar Ivan the Terrible goes into the year 1973.",
      release_date: "1973-09-17"
    }
  ]
};
