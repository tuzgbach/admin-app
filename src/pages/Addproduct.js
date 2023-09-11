import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Addproduct = () => {
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h3>Thêm sản phẩm</h3>
      <div>
        <form className="d-flex gap-3 flex-column">
          <CustomInput type="text" Lable="Enter Product Title" />
          <div className="mb-1">
            <ReactQuill
              className="mt-3 quill-container"
              name="description"
              theme="snow"
              value={desc}
              onChange={(evt) => {
                handleDesc(evt);
              }}
            />
          </div>
          <CustomInput type="number" label="Nhập giá sản phẩm" />
          <select className="form-control py-3  mt-3" name="" id="">
            <option value="">Chọn thương hiệu</option>
          </select>
          <select className="form-control py-3  mt-3" name="" id="">
            <option value="">Chọn loại</option>
          </select>
          <select className="form-control py-3  mt-3" name="" id="">
            <option value="">Chọn màu sắc</option>
          </select>

          <CustomInput type="number" label="Chọn hình ảnh sản phẩm" />
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Nhấp hoặc kéo tệp vào khu vực này để tải lên
            </p>
            <p className="ant-upload-hint">
              Hỗ trợ tải lên một lần hoặc hàng loạt. Nghiêm cấm tải lên dữ liệu
              công ty hoặc các tập tin bị cấm khác.
            </p>
          </Dragger>
          <button className="add-blog-button" type="submit">
            Thêm sản phẩm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
