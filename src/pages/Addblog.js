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

const Addblog = () => {
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h3 className="mb-4 title"> Thêm Blog</h3>
      <div className="">
        <form action="">
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
          <div className="mt-4 form-container input-label">
            <CustomInput
              className="input-text"
              type="text"
              label="Nhập tiêu đề cho Blog"
              name="title"
            />
            <select className="form-control py-3  mt-3" name="" id="">
              <option value="">Chọn danh mục blog</option>
            </select>
            <ReactQuill
              className="mt-3 quill-container"
              name="description"
              theme="snow"
              value={desc}
              onChange={(evt) => {
                handleDesc(evt);
              }}
            />
            <button className="add-blog-button" type="submit">
              Thêm Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addblog;
