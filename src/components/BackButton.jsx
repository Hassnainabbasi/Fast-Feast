// BackButton.jsx
import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-20 left-2 bg-black text-white px-4 py-3 rounded-full hover:bg-gray-800 transition"
    >
      <ArrowLeftOutlined size={10} />
    </button>
  );
};

export default BackButton;
