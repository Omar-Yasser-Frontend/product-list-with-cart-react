import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Desserts from "./components/Desserts";
import Main from "./components/Main";
import Cart from "./components/Cart";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="bg-rose-50 min-h-screen">
      <QueryClientProvider client={queryClient}>
        <Main>
          <Desserts />
          <Cart />
        </Main>
      </QueryClientProvider>
    </div>
  );
}

export default App;
