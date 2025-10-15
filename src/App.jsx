import { Routes, Route, HashRouter } from "react-router-dom"
import AccountLog from "../src/components/pages/AccountLog"
import Home from "../src/components/pages/Home"
import AccountSignUP from "../src/components/pages/AccountSignUp"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AccountLog />} />
        <Route path="/signup" element={<AccountSignUP />} />
      </Routes>
    </HashRouter>
  )
}

export default App
