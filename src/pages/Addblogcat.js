import React from "react";
import CustomInput from "../components/CustomInput";

const Addblogcat = () => {
  return (
    <div>
      <h3 className="mb-4"> Add Blog Category</h3>
      <div>
        <form action="">
          <CustomInput type="text" Lable=" Add Blog Catetory" />
          <button className="add-blog-button" type="submit">
            Add blog category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblogcat;
