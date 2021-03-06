import React from "react";
import { Layout } from "antd";
import MainMenu from "../../organisms/MainMenu";

const MainWrapper: React.FC = (props) => {
	// eslint-disable-next-line react/prop-types
	const { children } = props;
	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Layout.Sider collapsible>
				<MainMenu />
			</Layout.Sider>
			<Layout className="site-layout">
				<Layout.Header style={{ backgroundColor: "#FFFFFF" }} />
				<Layout.Content>{children}</Layout.Content>
				<Layout.Footer>Kodev</Layout.Footer>
			</Layout>
		</Layout>
	);
};

export default MainWrapper;
