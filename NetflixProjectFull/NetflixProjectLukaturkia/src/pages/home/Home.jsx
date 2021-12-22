import { useEffect, useState } from "react";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../featured/Featured";
import axios from "axios"
import "./Home.scss";

const Home = ({type}) => {
    const [lists,setLists] = useState([]);
    const [genre,setGenre] = useState(null);
    useEffect(()=>{
        const getRandomLists = async ()=>{
            try{//api call instead of fetch we use axios.get
                const res = await axios.get(`lists${type ? "?type=" + type: ""}${genre ? "&genre=" + genre : ""}`,
                {
                    headers:{
                        token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                }
                );
                setLists(res.data);
            }catch(err){
                console.log(err);
            }
        };
        getRandomLists();
    },[type,genre]);
   
    
    return (
        <div className='home'>
            <Navbar/>
            <Featured type ={type}/>
            {lists.map((list) => {
                <List list={list}/>
            })}
        </div>
    );
};

export default Home;
