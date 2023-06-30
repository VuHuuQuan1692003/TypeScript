import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { IUser } from "../models";



const AdminLayout = () => {
    const navigate = useNavigate();

    const [loggedIn, setLoggedIn] = useState<IUser | null>(() => {
        const user = localStorage.getItem('user');
        console.log(localStorage);

        return user ? JSON.parse(user) : null;
    });
    // Sử dụng useEffect để kiểm tra trạng thái đăng nhập khi component được render
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") as string);
        console.log(user.role);


        if (!user) {
            alert("Mật khẩu hoặc tài khoản không chính xác")
            navigate("/signin");
        } else if (user.role !== 'admin') {
            alert("Bạn không có quyền vào trang admin")
            navigate("/");
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setLoggedIn(null);
        navigate("/signin")
    }
    return <>
        <header className="bg-[#00B0D7]">
            <div className="container mx-auto flex justify-around items-center ">
                <img className='w-[65px]' src="/logo.png" alt="" />
                <input className='rounded-[10px] h-[34px] w-[1040px]' type="text" placeholder='Tìm kiếm' />
                <b className="ml-36">Xin chào: {loggedIn?.firstName + " " + loggedIn?.lastName}</b>

                <Link to={"/admin/add"}>ADD</Link>
                <button onClick={() => handleLogout()}>Thoát</button>
            </div>
        </header>
        <Outlet />

    </>

}
export default AdminLayout