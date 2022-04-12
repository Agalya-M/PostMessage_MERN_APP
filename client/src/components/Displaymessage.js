import React, { useState, useEffect, useContext, createContext } from "react";
import { getmessage } from "../Api";
import { useSelector, useDispatch } from "react-redux";
import { deletepost, fetchAll } from "../Actions/postMessage";
import { connect } from "react-redux";

function Displaymessage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  const posts = useSelector((state) => state.postMessage);

  const onDelete = (id) => {
    console.log(id);
    if (window.confirm("Are you sure to delete this record?" + id))
      dispatch(deletepost(id));
  };

  const [selectedmsg, setSelected] = useState({
    title: "",
    message: "",
    id: "",
  });

  const handleupdate = (data) => {
    console.log(data);
    dispatch({ type: "update", data: data });
  };

  return (
    <div>
      <div class="w-1/2 rounded overflow-hidden shadow-lg">
        {posts.list.map((data, _id) => {
          return (
            <>
              <div>
                <div>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                      {data.title} {data._id}
                    </div>
                    <p class="text-gray-700 text-base  break-words">
                      {data.message}
                    </p>
                  </div>
                  <div class="w-full flex justify-around mt-4 mb-5 ">
                    <button
                      class="bg-slate-700  hover:bg-slate-500 text-white font-bold py-2 px-4 border-b-4 border-slate-700 hover:border-slate-500 rounded"
                      onClick={() => handleupdate({ data })}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => onDelete(data._id)}
                      class="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4  border-b-4 border-slate-700 hover:border-slate-500 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <h2></h2>
    </div>
  );
}

export default Displaymessage;
