import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { TbBrandBinance } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { RiCouponLine } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";

////////

const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white text-center py-2">
            <span className="sm-logo">TTS</span>
            <span className="lg-logo">Homemap.asia</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Customers",
            },
            {
              key: "Catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Thêm sản phẩm",
                },
                {
                  key: "list-product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Danh mục",
                },
                {
                  key: "brand",
                  icon: <TbBrandBinance className="fs-4" />,
                  label: "Thương hiệu",
                },
                {
                  key: "list-brand",
                  icon: <TbBrandBinance className="fs-4" />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Loại sản phẩm",
                },
                {
                  key: "list-category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Màu sắc",
                },
                {
                  key: "list-color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <FaClipboardList className="fs-4" />,
              label: "Đặt hàng",
            },
            {
              key: "marketing",
              icon: <RiCouponLine className="fs-4" />,
              label: "Marketing",
              children: [
                {
                  key: "coupon",
                  icon: <ImBlog className="fs-4" />,
                  label: "Mã khuyến mãi",
                },
                {
                  key: "coupon-list",
                  icon: <RiCouponLine className="fs-4" />,
                  label: "Coupon List",
                },
              ],
            },
            {
              key: "blogs",
              icon: <FaBloggerB className="fs-4" />,
              label: "Blog",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog className="fs-4" />,
                  label: "Thêm Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <ImBlog className="fs-4" />,
                  label: "Thêm Loại Blog",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaClipboardList className="fs-4" />,
              label: "Thắc mắc",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge p-1 position-absolute">3</span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={28}
                  height={28}
                  src="https://lh3.googleusercontent.com/ogw/AGvuzYaxd9u4Upq2GVkcFKpXVlIDJ1NcNGqh95P4cpecBg=s64-c-mo"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <h5 className="mb-0">Tungbach</h5>
                <p className="mb-0">tungbach.tts@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/">
                    Thông tin của bạn
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/">
                    Đăng xuất
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}>
          {/* <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          /> */}

          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
