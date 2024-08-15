import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { toast } from "sonner";

import {
  createMessageReaction,
  removeMessageReaction
} from "../../../http/message-reaction";

interface MessageProps {
  id: string
  text: string;
  amountofLikes: number | 0;
  answered?: boolean;
}

export function Message({
  id: messageId,
  text,
  amountofLikes,
  answered = false,
}: MessageProps) {
  const { roomId } = useParams();

  if (!roomId) {
    throw new Error('Messages components must be used within room page')
  }

  const [hasLiked, setHasLiked] = useState(false);

  async function createMessageReactionAction() {
    if (!roomId) return

    try {
      await createMessageReaction({ messageId, roomId })
      setHasLiked(true);
    } catch {
      toast.error('Falha ao curtir mensagem, tente novamente.')
      setHasLiked(false);
    }
  }

  async function removeMessageReactionAction() {
    if (!roomId) return

    try {
      await removeMessageReaction({ messageId, roomId })
      setHasLiked(false);
    } catch {
      toast.error('Falha ao descurtir mensagem, tente novamente.')
      setHasLiked(true);
    }
  }

  return (
    <li
      data-answered={answered}
      className={`ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50`}
    >
      {text}
      <button
        type="button"
        className={`mt-3 flex items-center gap-2 text-sm font-medium ${answered
          ? "text-zinc-400 cursor-not-allowed"
          : hasLiked
            ? "text-zinc-300"
            : "text-orange-400 hover:text-orange-500"
          }`}
        onClick={hasLiked ? createMessageReactionAction : removeMessageReactionAction}
        disabled={answered}
      >
        <ArrowUp className="size-4" />
        Curtir pergunta ({amountofLikes})
      </button>
    </li>
  );
}
