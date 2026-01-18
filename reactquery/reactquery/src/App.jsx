import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Users from "./components/Users";

const queryClient = new QueryClient();

const App = ()=>{
  return (
    <QueryClientProvider client={queryClient}>
    <Users />
  </QueryClientProvider>
  )
}

export default App;