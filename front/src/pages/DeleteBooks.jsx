import React,{ useState } from "react";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const DeleteBooks = () => {
  const [loading, setloading] = useState(false)
  const nav = useNavigate();
  const {id} = useParams();

  const deletebook = () => {
    setloading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setloading(false)
      nav('/');
    })
    .catch((err)=>{
      setloading(false);
      alert(`Error has occured! ${err}`);
    });
  }

  return (
    <div>
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className=" flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto mt-20">
        <h3 className="text-2xl">Are you sure you wish to proceed?</h3>

        <button className="p-4 bg-red-700 text-white m-8 w-full"
        onClick={deletebook}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default DeleteBooks