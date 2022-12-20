import axios from "axios";
import React, { useEffect,useState } from "react";
import Header from "../components/Header";
import ListStudents from "../components/ListStudents";
import {useNavigate} from "react-router-dom"

const Home=()=>{

    const [students,setStudents]=useState(null)
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:3004/students")
        .then((response)=>{
            setStudents(response.data)
        })
        .catch((error)=>{})
    },[])
    if(students === null){
        return null
    }

    return(
        <div>
            <Header/>
            <div className="container mt-5 d-flex justify-content-end">
                <button onClick={()=>navigate("/add-student")} className="btn btn-primary">
                    Yeni Öğrenci Ekle
                </button>
            </div>
            <ListStudents students={students} />
        </div>
    )
}

export default Home