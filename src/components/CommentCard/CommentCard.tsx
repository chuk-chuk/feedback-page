import React from "react";
import { starsMap } from "../../App.helpers";
import { CommentCardProps } from "./CommentCard.types";

function CommentCard(props: CommentCardProps) {
  const { card } = props;
  return (
    <div className="w-full p-2 mb-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {starsMap[card.rating]}
      <p className="mb-1 text-gray-900">
        {card.comment.length > 50
          ? card.comment.substring(0, 50 - 3) + "..."
          : card.comment}
      </p>
      <p className="text-sm font-bold text-gray-500">{card.name}</p>
    </div>
  );
}

export default CommentCard;
