import React from "react";
import CustomInput from "../components/CustomInput";

const Addcolor = () => {
  return (
    <div>
      <h3 className="mb-4">Thêm màu sắc</h3>
      <div>
        <form action="">
          <CustomInput type="text" Lable=" Add Blog Catetory" />
          <button className="add-blog-button" type="submit">
            Thêm màu sắc
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcolor;
