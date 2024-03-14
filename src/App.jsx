import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Layout, Menu, theme } from "antd";
import Todo from "./components/todo/Todo";
import { Button } from "antd";
import { IoMdClose } from "react-icons/io";
const { Header, Content, Footer, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

const App = () => {
  const [users, setUsers] = React.useState([]);

  const del = (id) => {
    const filter = users.filter((e) => e.id !== id);
    setUsers(filter);
  };

  const deleteAll = () => {
    setUsers([]);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
              items={items2}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <Todo addData={setUsers} />
            {users.map((e, index) => (
              <li
                key={e.id}
                className="w-[40%] list bg-[#1a8b8b] rounded-lg text-white flex items-center justify-between pr-3 mb-1"
              >
                <div className="flex gap-2 py-3 px-2">
                  <p>{index + 1}. </p>
                  <h1> {e.input}</h1>
                </div>
                <Button onClick={() => del(e.id)} danger type="primary">
                  <IoMdClose className="text-base" />
                </Button>
              </li>
            ))}

            {users.length > 2 ? (
              <Button onClick={deleteAll} danger type="primary">
                Clear All
              </Button>
            ) : (
              ""
            )}
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;
