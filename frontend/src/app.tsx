import { Toaster } from "sonner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { CreateRoom } from "./pages/CreateRoom";
import { Room } from "./pages/Room";

import { queryClient } from "./lib/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateRoom />,
  },
  {
    path: "/room/:roomId",
    element: <Room />,
  },
]);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        visibleToasts={1}
        position="bottom-right"
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: "bg-zinc-900 px-4 py-2 rounded-lg flex gap-2 items-center",
            title: "text-zinc-300 text-sm font-sm",
          },
        }}
      />
    </QueryClientProvider>
  );
}
