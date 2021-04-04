import React from "react";
import {Menu} from "antd";
import {DesktopOutlined} from "@ant-design/icons";

const MainMenu: React.FC = () => {
    return (
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<DesktopOutlined />}>
                Dashboard
            </Menu.Item>
        </Menu>
    );
};

export default MainMenu;
