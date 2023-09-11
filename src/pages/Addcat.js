import React from "react";
import CustomInput from "../components/CustomInput";

const Addcat = () => {
  return (
    <div>
      <h3 className="mb-4">Thêm loại sản phẩm</h3>
      <div>
        <form action="">
          <CustomInput type="text" Lable=" Add Blog Catetory" />
          <button className="add-blog-button" type="submit">
            Thêm loại sản phẩm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcat;
