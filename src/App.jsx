import { Routes, Route, BrowserRouter } from "react-router-dom"
import AccountLog from "../src/components/pages/AccountLog"
import Home from "../src/components/pages/Home"
import AccountSignUP from "../src/components/pages/AccountSignUp"

function App() {
  return (
    <BrowserRouter basename="/react-bike-store">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AccountLog />} />
        <Route path="/signup" element={<AccountSignUP />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
