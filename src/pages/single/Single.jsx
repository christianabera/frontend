import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table";
import { useContext, useEffect, useState } from "react";
import { collection,getDocs,query,where} from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";

const Single = () => {
  const param=useParams()
  const userId=param.userId
     
    
    
    const [users,setUsers]=useState([]);   
    
    const usersCollectionRef=collection(db,"users");
    const q=query(usersCollectionRef,where("CuponNo","==",userId))
    
    useEffect(()=>{
        const getUsers=async ()=>{
            const data=await getDocs(q);
           setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id })))  
                      
        }
        
        getUsers()               
        
      }, [])
      
      

  return (
    <div className="single">
        
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
        {users.map((user)=>{ 
                  
        return (
        <div key={user.id}>         
          
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={user.img}
                alt=""
                className="itemImg"
              />
              
              <div className="details">
                <h1 className="itemTitle">{user.FullName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Cupon Number:</span>
                  <span className="itemValue">{user.CuponNo}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{user.Phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Home Number:</span>
                  <span className="itemValue">
                    {user.HomeNo}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Number Of Family Member:</span>
                  <span className="itemValue">{user.NumberOfFamilyMember}</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>)
            })}
          <div className="right">
          
          </div>
        </div>
        
      </div>
    </div>
  );
};


export default Single;
