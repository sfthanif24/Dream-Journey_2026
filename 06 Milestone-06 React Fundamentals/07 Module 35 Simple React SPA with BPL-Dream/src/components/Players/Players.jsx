import { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers.jsx/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
  const players = use(playersPromise);

  const [selectedType, setSelectedType] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-40">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-5">
        {selectedType === "available" ? (
          <h2 className="text-2xl sm:text-3xl font-bold">Available Players</h2>
        ) : (
          <h2 className="text-2xl sm:text-3xl font-bold">
            Selected Player ({selectedPlayers.length}/{players.length})
          </h2>
        )}

        <div className="flex">
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E5FE29]" : ""} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E5FE29]" : ""} rounded-l-none rounded-r-xl`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <AvailablePlayers
          players={players}
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
          setSelectedType={setSelectedType}
        />
      )}
    </div>
  );
};

export default Players;
