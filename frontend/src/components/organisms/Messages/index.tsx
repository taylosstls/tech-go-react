import { useParams } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Message } from "../../molecules/Message";

import { getRoomMessages } from "../../../http/get-room-messages";
import { useMessagesWebSockets } from "../../../hooks/use-messages-websockets";

export function Messages() {
  const { roomId } = useParams();

  if (!roomId) throw new Error('Messages components must be used within room page')

  const { data } = useSuspenseQuery({
    queryKey: ['messages', roomId],
    queryFn: () => getRoomMessages({ roomId }),
  })

  useMessagesWebSockets({ roomId })

  // Exibe a mensagem com mais curtidas em primeiro lugar
  const sortedMessages = data.messages.sort(
    (a, b) => b.amountofLikes - a.amountofLikes
  )

  return (
    <ol className="list-decimal list-outside px-3 space-y-8">
      {sortedMessages.map(message => {
        return (
          <Message
            key={message.id}
            id={message.id}
            text={message.text}
            amountofLikes={message.amountofLikes}
            answered={message.answered}
          />
        )
      })}
    </ol>
  )
}