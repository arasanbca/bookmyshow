import React, { useState } from "react";

let SCREENS = [
  {
    id: 1,
    time: "10:00am",
    seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    id: 2,
    time: "2:00pm",
    seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    id: 3,
    time: "6:00pm",
    seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
];

const MOVIES = [
  {
    id: 1,
    title: "LEO",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTWf4oWSUm7l-CRQMiTgZDJMuPLWXnv2f-g&usqp=CAU",
  },
  {
    id: 2,
    title: "JAILER",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWugA3j78iO6_1TAKQa4zf-9_iv0n_Dc5Ycg&usqp=CAU",
  },
  {
    id: 3,
    title: "DEVARA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxUSYsgXWizR_7-nmQApBoV2ky_F2_fH4_w&usqp=CAU",
  },
  {
    id: 4,
    title: "SALAAR",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsqT73z-TlfRghCYSVCrdgHLynJzC-48hFrw&usqp=CAU",
  },
  {
    id: 5,
    title: "KING OF KOTHA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRlmB4sR0A3AiNhIeGbIiUFUsW1_FjXTr3g&usqp=CAU",
  },
  {
    id: 6,
    title: "JAWAN",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5_fyZKqppCHKB-MG3JQsF13grfZtDuVVOQ&usqp=CAUU",
  },
  {
    id: 6,
    title: "Adiyae",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMK21O0k50jdGRGH4SXAt5K6uETdGGGFfLQ&usqp=CAU",
  },
  {
    id: 6,
    title: "Partner",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTkHwg9488CCeu9Bm8TeQPdJ__MKn2d_E_A&usqp=CAU",
  },
  {
    id: 6,
    title: "King Of Kotha",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-1g1TDXrnBWYTW87SK4D9H7cY_Ze73NR6w&usqp=CAU",
  },
  {
    id: 6,
    title: "Hiden Strike",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPb1nJg535qxbdtx1Br094LTLX71YFn61FgQ&usqp=CAU",
  },
  {
    id: 6,
    title: "Dream 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCevLlBpAFEDhRqBQjS_q3s0DHSj5A5jv9Q&usqp=CAU",
  },
  {
    id: 6,
    title: "Kushi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgF8Da4kAv_biEUa3fK6J71zaBxL85mO1Faw&usqp=CAU",
  },
];

export default function Moviebooking() {
  const [selectedMovie, setselectedMovie] = useState(null);
  const [selectedScreen, setselectedScreen] = useState(null);
  const [selectedSeats, setselectedSeats] = useState([]);

  const handleSeatSelect = (index, screen) => {
    if (screen?.id !== selectedScreen?.id) {
      setselectedSeats([index]);
      setselectedScreen(screen);
      return;
    }
    setselectedScreen(screen);
    if (selectedSeats.includes(index)) {
      setselectedSeats(selectedSeats.filter((i) => i !== index));
      if (selectedSeats.filter((i) => i !== index).length < 1) {
        setselectedScreen(null);
      }
    } else {
      setselectedSeats((seats) => [...seats, index]);
    }
  };

  const handleBooking = () => {
    alert(
      `Seats ${selectedSeats.map((index) => index + 1).join(", ")} booked for ${selectedScreen.movie.title
      } at ${selectedScreen.time}`
    );
    SCREENS = SCREENS.map((screen) => {
      if (screen.id === selectedScreen?.id) {
        let seats = screen.seats;
        selectedSeats.map((seat) => (seats[seat] = 0));
        return {
          ...screen,
          seats,
        };
      }
      return screen;
    });
    setselectedMovie(null);
    setselectedScreen(null);
    setselectedSeats([]);
  };

  return (
    <div>
      <h1>Choose your Movie:</h1>
      <div className="movie-selection">
        {MOVIES.map((movie) => (
          <div
            className="movie"
            key={movie.id}
            onClick={() => setselectedMovie(movie)}
          >
            <img className="movie-poster" src={movie.image} alt={movie.title} />
            <div className="movie-title">{movie.title}</div>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <>
          <h2>Choose your Screen</h2>
          <div className="screen-selection">
            {SCREENS.map((screen) => {
              return (
                <div
                  key={screen.id}
                  className={`screen ${screen?.id === selectedScreen ? "selected" : ""
                    }${screen.seats.includes(1) ? "available" : ""} `}
                >
                  <div className="screen-number">Screen {screen.id}</div>
                  <div className="screen-time">{screen.time}</div>
                  <div className="movie-title">{selectedMovie.title}</div>
                  <div className="screen-seats">
                    {screen.seats.map((seat, index) => {
                      return (
                        <div
                          key={index}
                          className={`seat ${seat ? "available" : "unavailable"
                            } ${selectedSeats.includes(index) &&
                              selectedScreen?.id === screen.id
                              ? "selected"
                              : ""
                            } 
                          ${selectedSeats.includes(index) ? "booked" : ""}
                          `}
                          onClick={() => {
                            if (seat) {
                              handleSeatSelect(index, {
                                ...screen,
                                movie: selectedMovie,
                              });
                            }
                          }}
                        >
                          <div className="seat-number">{index + 1}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
      <div className="booking-summary">
        <div className="selected-screen">
          {selectedScreen && (
            <div>
              <h3>Selected Screen: {selectedScreen.id}</h3>
              <p>Time: {selectedScreen.time}</p>
              <p>Movie: {selectedScreen.movie.title}</p>
            </div>
          )}
        </div>
        <div className="selected-seat">
          {selectedScreen && selectedSeats?.length > 0 && (
            <div>
              <h3>
                Selected Seats:{" "}
                <>{selectedSeats.map((index) => index + 1).join(", ")}</>
              </h3>
              <h3>No of tickets: {selectedSeats?.length}</h3>
            </div>
          )}
        </div>
      </div>
      <button
        className="book-button"
        onClick={handleBooking}
        disabled={!selectedScreen || selectedSeats?.length === 0}
      >
        {/* <a href="https://buy.stripe.com/test_8wM3dO3K117AacM288">Book Now</a> */}
        <a>Book Now</a><br />
      </button><br /><br />
      <a href="/pay"><button className="payment-button">Payment</button></a><br /><br />
      <a href="/"><button type="submit">Back</button></a>
    </div>
  );
}
