import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import MainHeader from "../header/MainHeader";
import TopHeader from "../header/TopHeader";
import { Outlet } from "react-router-dom";
import MainFooter from "../MainFooter";
        

const MainLayout = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <TopHeader />
            <MainHeader />
            <Content className="xl:px-12 my-5">
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

            {/* footer */}
            <MainFooter />

        </Layout>
    );
};

export default MainLayout;