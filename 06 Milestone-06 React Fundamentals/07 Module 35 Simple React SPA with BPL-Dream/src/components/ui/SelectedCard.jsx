import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedCard = ({ player, handleDeleteSelectedPlayer }) => {
  return (
    <div className="flex items-center justify-between gap-4 sm:gap-6 p-4 sm:p-8 rounded-2xl border">
      <div className="flex items-center gap-4 sm:gap-6 overflow-hidden">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg object-cover bg-slate-200 shrink-0"
        />
        <div className="min-w-0">
          <h2 className="font-semibold text-lg sm:text-2xl truncate">
            {player.playerName}
          </h2>
          <p className="text-sm sm:text-base text-gray-500">{player.battingStyle}</p>
        </div>
      </div>
      <button
        className="btn btn-ghost text-red-500 text-xl sm:text-2xl"
        onClick={() => handleDeleteSelectedPlayer(player)}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default SelectedCard;
