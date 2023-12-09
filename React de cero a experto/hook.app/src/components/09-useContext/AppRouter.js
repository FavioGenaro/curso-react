import {
    Route,
    Routes
} from "react-router-dom";
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from "./HomeScreen";

export const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element = { <HomeScreen/> }/>
            <Route path="/about" element = { <AboutScreen/> }/>
        </Routes>
    )
}