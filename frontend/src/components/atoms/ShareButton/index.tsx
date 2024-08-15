import { CircleCheck, Share2 } from "lucide-react";
import { toast } from "sonner";

export function ShareButton() {
  function handleCopyCode() {
    const url = window.location.href.toString();

    if (navigator.share !== undefined && navigator.canShare()) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url);
      toast("Código da sala copiada!", {
        icon: <CircleCheck className="size-4 text-orange-400" />,
      });
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopyCode}
      className="ml-auto bg-zinc-800 text-zinc-300 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-all hover:bg-zinc-700"
    >
      Compartilhar
      <Share2 className="size-4" />
    </button>
  )
}