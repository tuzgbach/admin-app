import React from "react";
import CustomInput from "../components/CustomInput";

const Resetpassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Đặt lại mật khẩu</h3>
        <p className="text-center">Nhập mật khẩu mới</p>
        <form action="">
          <CustomInput type="password" label="Mật khẩu mới" id="pass" />
          <CustomInput
            type="password"
            label="Confirm mật khẩu"
            id="confirmpass"
          />

          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            style={{ background: "#ffd333" }}
            type="submit">
            Đặt lại mật khẩu của bạn
          </button>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
