import { Suspense } from "react";
import { useParams } from "react-router-dom";

import amaLogo from "../../assets/images/ama-logo.svg";

import { Messages } from "../../components/organisms/Messages";
import { CreateMessageForm } from "../../components/organisms/CreateMessageForm";
import { ShareButton } from "../../components/atoms/ShareButton";

export function Room() {
  const { roomId } = useParams();

  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
      <div className="flex items-center gap-3 px-3">
        <img src={amaLogo} alt="AMA" className="h-5" />

        <span className="text-sm text-zinc-500 truncate">
          Cód. da sala:{" "}
          <span id="RoomCode" className="text-zinc-300 font-medium lowercase">
            {roomId}
          </span>
        </span>

        <ShareButton />
      </div>

      <div className="h-px w-full bg-zinc-900" />

      <CreateMessageForm />

      <Suspense fallback={<p>Carregando...</p>}>
        <Messages />
      </Suspense>
    </div>
  );
}
