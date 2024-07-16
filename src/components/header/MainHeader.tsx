import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { Link, NavLink, useNavigate } from "react-router-dom";

const MainHeader = () => {
    const navigate = useNavigate();
    // menu items
    const items = [
        {
            key: "Home",
            label: <NavLink to={"/"}>Home</NavLink>
        },
        {
            key: "Product",
            label: <NavLink to={"/products"}>Product</NavLink>
        },
        {
            key: "About",
            label: <NavLink to={"/"}>Contact</NavLink>,
            children: [
                {
                    key: "a",
                    label: <NavLink to={"/"}>Home</NavLink>
                },
                {
                    key: "2",
                    label: <NavLink to={"/2"}>Home</NavLink>
                },
            ]
        },
        {
            key: "Contact",
            label: <NavLink to={"/"}>About</NavLink>
        },
    ]

    const handleLogo = () => {
        navigate("/");
    }


    return (
        <Header
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", }}
            className="bg-secondary"
        >
            <div className="text-white text-2xl cursor-pointer" onClick={handleLogo}>
                <span className=" font-extrabold">G</span>
                <span className="font-extrabold">Y</span>
                <span className="text-primary font-extrabold">M</span>
                <span className="font-extrabold">IX</span>
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
                style={{ flex: 1, minWidth: 0, justifyContent: "center" }}
                className=" bg-secondary"
            />
            {/* right side */}
            <div className="flex items-center text-white space-x-4 text-xl">
                <Link to={""}><CiShoppingCart /></Link>
                <Link to={""}><GoSearch /></Link>
                <Link to={""} ><CiUser /></Link>
            </div>
        </Header>
    );
};

export default MainHeader;