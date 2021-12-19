import {  } from "@material-ui/icons";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../featured/Featured";
import "./Home.scss";

const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <Featured type ="movie"/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home
