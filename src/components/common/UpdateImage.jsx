import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateImage } from "../../api/common/commonApiCalls";

function UpdateImage({ individual, setIndividual }) {
  const [image, setImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    updateImage({ image, dispatch, individual, setIndividual })
  };

  const url = `${individual?.image}`;

  return (
    <div className="bg-white rounded-lg px-10 py-10 shadow-2xl text-center">
      <div className="flex justify-center ">
        <img
          className=" w-40 h-40 py-2 rounded-full"
          src={selectedImage ? `${selectedImage}` : `${url}`}
          alt="dfs"
        />
      </div>
      <p>Update Image</p>
      <form onSubmit={handleSubmit}>
        <input
          className="block my-2 rounded-xl h-9 border-gray-900 border"
          required
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
            setSelectedImage(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <div className="flex justify-center py-2">
          <input
            type="submit"
            value="Update"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
          />
        </div>
      </form>
    </div>
  );
}

export default UpdateImage;
