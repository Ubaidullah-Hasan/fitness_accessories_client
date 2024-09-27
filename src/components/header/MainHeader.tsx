import { Avatar, Badge, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useGetCartsQuery } from "../../redux/features/cart/cartsApi";
import './M.css'
import { useState } from "react";

const MainHeader = () => {
    const navigate = useNavigate();
    const { data: carts } = useGetCartsQuery(undefined);
    const [menuKey] = useState<string | void>(menuKeySet)

    function menuKeySet() {
        const paths = [
            { path: "/", index: "1" },
            { path: "/products", index: "2" },
            { path: "/products-management", index: "3" },
            { path: "/about", index: "4" },
        ];

        const matchedPath = paths.find((item) => item?.path.match(new RegExp(`^${location.pathname}$`)));
        return matchedPath ? matchedPath.index : undefined;  
    }

    // menu items
    const items = [
        {
            key: 1,
            label: <NavLink to={"/"}>Home</NavLink>
        },
        {
            key: 2,
            label: <NavLink to={"/products"}>Product</NavLink>
        },
        {
            key: 3,
            label: <NavLink to={"/products-management"}>Product Management</NavLink>
        },
        {
            key: 4,
            label: <NavLink to={"/about"}>About</NavLink>
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
                defaultSelectedKeys={[menuKey as string]}
                items={items}
                style={{ flex: 1, minWidth: 0, justifyContent: "center" }}
                className="custom-menu bg-secondary"
            />

            {/* right side */}
            <div className="flex items-center text-white space-x-4 text-xl">
                <div>
                    <Link to={"/carts"}>
                        <Badge size="small" count={carts?.carts.length || 0}>
                            <Avatar size="large" className="w-fit h-fit"><CiShoppingCart className="hover:!text-slate-200 text-[29px] mt-[-5px]" /></Avatar>
                        </Badge>
                    </Link>
                </div>
                <Link className="text-white hover:text-slate-300" to={""}><GoSearch /></Link>
                <Link className="text-white hover:text-slate-300" to={""} ><CiUser /></Link>
            </div>
        </Header>
    );
};

export default MainHeader;