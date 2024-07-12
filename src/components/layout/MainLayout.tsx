import { Layout, theme } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import MainHeader from "../header/MainHeader";
import TopHeader from "../header/TopHeader";
import { Outlet } from "react-router-dom";


const MainLayout = () => {



    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <TopHeader />
            <MainHeader />
            <Content style={{ padding: '0 48px', marginTop: "20px"}}>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default MainLayout;