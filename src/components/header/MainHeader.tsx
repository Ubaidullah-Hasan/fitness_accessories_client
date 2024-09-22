import { Avatar, Badge, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useGetCartsQuery } from "../../redux/features/cart/cartsApi";
import './M.css'

const MainHeader = () => {
    const navigate = useNavigate();
    const { data: carts } = useGetCartsQuery(undefined);

    const paths = [
        {path: "products", index: 1},
        {path: "products", index: 1},
    ] // todo

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
            key: "Contact",
            label: <NavLink to={"/contacts"}>About</NavLink>
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
                <Link className="hover:!text-slate-200" to={""}><GoSearch /></Link>
                <Link className="hover:!text-slate-200" to={""} ><CiUser /></Link>
            </div>
        </Header>
    );
};

export default MainHeader;