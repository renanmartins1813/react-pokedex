import Pokedex from "./common/components/Pokedex";
import { PageContextProvider } from "./context/PaginatorContext";

function App() {

  return (
    <div className="App">
      <PageContextProvider>
        <Pokedex/>
      </PageContextProvider>
    </div>
  )
}

export default App
