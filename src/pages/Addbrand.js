import React from "react";
import CustomInput from "../components/CustomInput";

const Addbrand = () => {
  return (
    <div>
      <h3 className="mb-4">Thêm thương hiệu</h3>
      <div>
        <form action="">
          <CustomInput type="text" Lable=" Add Blog Catetory" />
          <button className="add-blog-button" type="submit">
            Thêm thương hiệu
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addbrand;
