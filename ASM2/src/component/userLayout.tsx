import { Link, Outlet } from "react-router-dom";
const UserLayout = () => {
    // const user = localStorage.getItem('user');
    const admin = () => {
        const use = JSON.parse(localStorage.getItem("user") as string)
        // console.log(use);

        if (use === null) {
            return null
        }
        else if (use.role === "admin") {
            return <Link to={'/admin'}>ADMIN</Link>

        }
        else return null
    }

    return <>
        <header className="bg-[#D70018]">
            <div className="container mx-auto flex justify-around items-center ">
                <img className='w-[65px]' src="/logo.png" alt="" />
                <input className='rounded-[10px] h-[34px] w-[1040px]' type="text" placeholder='Tìm kiếm' />
                {admin()}
            </div>
        </header>
        <div className="container mx-auto flex justify-around items-center ">
            <img className='' src="/image 3.png" alt="" />
        </div>

        <Outlet />
        <footer className="container pl-[190px] pt-[76px] mx-auto">
            <div className="grid grid-cols-4 text-[#444444] text-[12px] mb-[74px]">
                <div>
                    <p><a href="" className="text-[16px] ">Tìm cửa hàng</a></p>
                    <p><a href="">Tìm cửa hàng gần nhất</a></p>
                    <p><a href="">Mua hàng từ xa</a></p>
                    <p><a href="">Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</a></p>
                    <p><a href="" className="text-[16px] ">Phương thức thanh toán</a></p>
                    <p className="w-full">
                        <p className="w-[70%] grid grid-cols-4 gap-[13px] ">
                            <img className="" src="./Rectangle (15).png" alt="" />
                            <img src="./Rectangle (16).png" alt="" />
                            <img src="./Rectangle (17).png" alt="" />
                            <img src="./Rectangle (18).png" alt="" />
                            <img src="./Rectangle (19).png" alt="" />
                        </p>


                    </p>
                </div>
                <div>
                    <p>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</p>
                    <p>Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</p>
                    <p>Gọi bảo hành: 1800.2064 (8h00 - 21h00)</p>
                    <p><a href="" className="text-[16px] ">Đối tác dịch vụ bảo hành</a></p>
                    <p><a href="">Điện Thoại - Máy tính</a></p>
                    <p><a href="" className="text-[16px] ">Trung tâm bảo hành uỷ quyền Apple</a></p>
                    <p><img src="./Rectangle (20).png" alt="" /></p>
                </div>
                <div>
                    <p><a href="">Mua hàng và thanh toán Online</a></p>
                    <p><a href="">Mua hàng trả góp Online</a></p>
                    <p><a href="">Tra thông tin đơn hàng</a></p>
                    <p><a href="">Tra điểm Smember</a></p>
                    <p><a href="">Tra thông tin bảo hành</a></p>
                    <p><a href="">Tra cứu hoá đơn VAT điện tử</a></p>
                    <p><a href="">Trung tâm bảo hành chính hãng</a></p>
                    <p><a href="">Quy định về việc sao lưu dữ liệu</a></p>
                    <p><a href="">Dịch vụ bảo hành điện thoại</a></p>
                </div>
                <div>
                    <p><a href="">Quy chế hoạt động</a></p>
                    <p><a href="">Chính sách Bảo hành</a></p>
                    <p><a href="">Liên hệ hợp tác kinh doanh</a></p>
                    <p><a href="">Khách hàng doanh nghiệp (B2B)</a></p>
                    <p><a href="">Ưu đãi thanh toán</a></p>
                    <p><a href="">Tuyển dụng</a></p>
                </div>

            </div>
            <div className="grid grid-cols-3 text-[10px]">
                <div>
                    <p><a href="">Điện thoại iPhone 13- Điện thoại iPhone 12- Điện thoại iPhone 11</a></p>
                    <p><a href="">Điện thoại iPhone 13 Pro Max- Điện thoại iPhone 11 Pro Max</a></p>
                    <p><a href="">iPhone cũ giá rẻ- iPhone 13 cũ- iPhone 12 cũ- iPhone 11 cũ</a></p>
                </div>
                <div>
                    <p><a href="">Điện thoại iPhone 13- Điện thoại iPhone 12- Điện thoại iPhone 11</a></p>
                    <p><a href="">Điện thoại iPhone 13 Pro Max- Điện thoại iPhone 11 Pro Max</a></p>
                    <p><a href="">iPhone cũ giá rẻ- iPhone 13 cũ- iPhone 12 cũ- iPhone 11 cũ</a></p>
                </div>
                <div>
                    <p><a href="">Điện thoại iPhone 13- Điện thoại iPhone 12- Điện thoại iPhone 11</a></p>
                    <p><a href="">Điện thoại iPhone 13 Pro Max- Điện thoại iPhone 11 Pro Max</a></p>
                    <p><a href="">iPhone cũ giá rẻ- iPhone 13 cũ- iPhone 12 cũ- iPhone 11 cũ</a></p>
                </div>
            </div>
            <div className="text-[10px] mt-[16px] mb-[58px] pl-[20px] ">
                Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.
            </div>
        </footer>

    </>
}
export default UserLayout