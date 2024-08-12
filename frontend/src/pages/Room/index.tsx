import { useParams } from "react-router-dom";
import { ArrowRight, ArrowUp, Share2 } from "lucide-react";

import amaLogo from "../../assets/images/ama-logo.svg";

export function Room() {
  const { roomId } = useParams();

  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
      <div className="flex items-center gap-3 px-3">
        <img src={amaLogo} alt="AMA" className="h-5" />

        <span className="flex-1 text-sm text-zinc-500 truncate">
          Código da sala:{" "}
          <span className="text-zinc-300 font-medium lowercase">{roomId}</span>
        </span>

        <button
          type="button"
          className="bg-zinc-800 text-zinc-300 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-all hover:bg-zinc-700"
        >
          Compartilhar
          <Share2 className="size-4" />
        </button>
      </div>

      <div className="h-px w-full bg-zinc-900" />

      <form
        action={""}
        className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border ring-orange-400 ring-offset-2 ring-offset-orange-950 border-zinc-800 focus-within:ring-1"
      >
        <input
          className="flex-1 text-sm bg-transparent mx-2 outline-none text-zinc-100 placeholder:text-zinc-500"
          type="text"
          name="theme"
          placeholder="Qual a sua pergunta?"
          autoComplete="off"
        />

        <button
          type="submit"
          className="bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-all hover:bg-orange-500"
        >
          Criar pergunta
          <ArrowRight className="size-4" />
        </button>
      </form>

      <ol className="list-decimal list-outside px-10 space-y-8">
        <li className="ml-4 leading-relaxed text-zinc-100">
          O que é GoLang e quais são suas principais vantagens em comparação com
          outras linguagens de programação como Python, Java ou C++?
          <button
            type="button"
            className="mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-orange-500"
          >
            <ArrowUp className="size-4" />
            Curti pergunta (123)
          </button>
        </li>

        <li className="ml-4 leading-relaxed text-zinc-100">
          O que é GoLang e quais são suas principais vantagens em comparação com
          outras linguagens de programação como Python, Java ou C++?
          <button
            type="button"
            className="mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-zinc-300"
          >
            <ArrowUp className="size-4" />
            Curti pergunta (123)
          </button>
        </li>
      </ol>
    </div>
  );
}
