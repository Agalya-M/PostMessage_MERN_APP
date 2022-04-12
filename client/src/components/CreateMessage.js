import React, { useState, useEffect } from "react";
import { postmessage } from "../Api";
import { useDispatch, useSelector } from "react-redux";
import { createpost } from "../Actions/postMessage";
import BounceLoader from "react-spinners/BounceLoader";
function CreateMessage() {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    message: "",
  });

  const updatedata = useSelector((state) => state.updatereducer);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createpost(data));

    // await postmessage(data);
  };

  const updateData = () => {
    if (updatedata) setData(updatedata);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    updateData();
  }, [updatedata]);

  return (
    <div>
      {!isLoading ? (
        <div class="w-5/6 pl-11 ml-64 flex justify-center">
          <div class="px-3 w-1/2 py-10 rounded  shadow-lg">
            <div>
              <input
                onChange={(e) => setData({ ...data, title: e.target.value })}
                className="w-100 h-30 py-3 px-3 mx-10 items-center text-left mt-5 bg-slate-300 "
                placeholder="Title"
                value={data.title}
              />
              <br />
            </div>
            <div>
              <input
                onChange={(e) => setData({ ...data, message: e.target.value })}
                className="w-100 h-40 py-2 px-3 mx-10  text-left mt-5 bg-slate-300 text-clip line-clamp-7 "
                placeholder="Message"
              />
            </div>
            <div className="items-center px-20 justify-center ">
              <button
                className="w-20 h-30 mt-10 mx-11 py-3 items-center  bg-slate-700 text-white"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <BounceLoader />
      )}
    </div>
  );
}

export default CreateMessage;
