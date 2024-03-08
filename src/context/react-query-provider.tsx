import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FCProps } from "@/types";

const queryClient = new QueryClient();

export const ReactQueryProvider: FCProps = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
