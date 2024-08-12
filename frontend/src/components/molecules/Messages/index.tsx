import { ArrowUp } from "lucide-react";
import { useState } from "react";

interface MessagesProps {
  text: string;
  amountofLikes: number | 0;
  answered?: boolean;
}

export function Messages({
  text,
  amountofLikes,
  answered = false,
}: MessagesProps) {
  const [hasLiked, setHasLiked] = useState(false);

  function handleLikeMessage() {
    setHasLiked(!hasLiked);
  }

  return (
    <li
      data-answered={answered}
      className={`ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50`}
    >
      {text}
      <button
        type="button"
        className={`mt-3 flex items-center gap-2 text-sm font-medium ${
          answered
            ? "text-zinc-400 cursor-not-allowed"
            : hasLiked
            ? "text-zinc-300"
            : "text-orange-400 hover:text-orange-500"
        }`}
        onClick={handleLikeMessage}
        disabled={answered}
      >
        <ArrowUp className="size-4" />
        Curti pergunta ({amountofLikes})
      </button>
    </li>
  );
}
