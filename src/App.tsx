import type { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import { FilterProvider } from "./contexts/FilterContext"


const App: FC = () => {
  return (
    <BrowserRouter>
      <FilterProvider>
        <div className="min-h-screen">
          <Header /> 

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </FilterProvider>
    </BrowserRouter>
  )
}

export default App