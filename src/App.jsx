import { NavBar } from "./components/Navbar.jsx"
import { Routes, Route, Navigate } from "react-router-dom"
import { HomeScreen } from "./routes/HomeScreen.jsx"
import { AboutScreen } from "./routes/AboutScreen.jsx"
import { ShoppScreen } from "./routes/ShoppScreen.jsx"

export const App = () => {
    return (
        <>
        <NavBar />

        <Routes>
            <Route path='/' element={ <HomeScreen></HomeScreen> }></Route>
            <Route path='/about' element={ <AboutScreen></AboutScreen> }></Route>
            <Route path='/shopp' element={ <ShoppScreen></ShoppScreen> }></Route>
            <Route path='/*' element={ <Navigate to="/" /> }></Route>
        </Routes>
        </>
    )
}