import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import BookModal from "./BookModal";

export const BooksSingleCard = ({ book }) => {
  const [showModal, setshowModal] = useState(false);

  return (
    <div
      key={book._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 transition transform duration-300 hover:scale-105"
    >
      <h2 className="absolute top-1 right-2 px-4 bg-red-300 rounded-lg">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-500"> {book._id}</h4>
      <div className="flex justify-start books-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start books-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>

      <div className="flex justify-between books-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-blue-400 cursor-pointer"
          onClick={() => {
            setshowModal(true)}
          }
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-green-500" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-yellow-400" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-400" />
        </Link>
      </div>
      {
        showModal && (
          <BookModal book={book} onClose={() => setshowModal(false)} />
        )
      }
    </div>
  );
};
