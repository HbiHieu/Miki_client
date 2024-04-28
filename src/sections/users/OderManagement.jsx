import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { useRecoilState } from "recoil";
import { dataUser } from "../../recoils/dataUser";
import axios from "axios";
import { FormatMoney } from "../../utils/formatMoney";

function OderManagement({ tab, setTab }) {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useRecoilState(dataUser);
  useEffect(() => {
    try {
      const fetch = async () => {
        const res = await axios({
          method: "GET",
          url: `https://localhost:7226/api/Order?UserID=${user.userInforId}`,
        });
        setProducts(res.data.products);
      };
      fetch();
    } catch (ex) {
      console.log(ex);
    }
  }, []);
  return (
    <div>
      <ul className="flex mx-[152px]  text-center bg-white text-black text-base font-bold mb-8">
        <li
          onClick={() => setTab(1)}
          className={
            tab === 1
              ? "flex-1 h-[55px] items-center flex justify-center cursor-pointer bg-primary_4"
              : "flex-1 h-[55px] items-center flex justify-center cursor-pointer text-neutral_2"
          }
        >
          Tất cả đơn
        </li>
        <li
          onClick={() => setTab(2)}
          className={
            tab === 2
              ? "flex-1 h-[55px] items-center flex justify-center cursor-pointer bg-primary_4"
              : "flex-1 h-[55px] items-center flex justify-center cursor-pointer text-neutral_2"
          }
        >
          Đang xử lý
        </li>
        <li
          onClick={() => setTab(3)}
          className={
            tab === 3
              ? "flex-1 h-[55px] items-center flex justify-center cursor-pointer bg-primary_4"
              : "flex-1 h-[55px] items-center flex justify-center cursor-pointer text-neutral_2"
          }
        >
          Đang vận chuyển
        </li>
        <li
          onClick={() => setTab(4)}
          className={
            tab === 4
              ? "flex-1 h-[55px] items-center flex justify-center cursor-pointer bg-primary_4"
              : "flex-1 h-[55px] items-center flex justify-center cursor-pointer text-neutral_2"
          }
        >
          Đã hoàn thành
        </li>
      </ul>

      <div className="text-[14px] mx-[152px] mb-[38px] font-medium h-10 leading-[22px] relative">
        <input
          className="w-full pl-14  rounded-lg py-[9px]"
          type="text"
          placeholder="Nhẫn trơn"
        />
        <img
          className="absolute w-6 h-6 top-2 left-4"
          src="/assets/icon/Search.png"
          alt="SearchIcon"
        />
        <div className=" absolute right-6 top-[5px] cursor-pointer flex items-center">
          <p className="w-[1px] h-[29px] bg-black mr-6 "></p>
          Tìm đơn hàng
        </div>
      </div>

      {products.map((item) => {
        return (
          <div className="w-1440px h-[596px] bg-white z-10 relative ">
            <div className="px-[196px] pt-8">
              <p className="mb-6 text-xl font-bold text-neutral_2 ">
                Mã đơn hàng: 167495
              </p>
              <div className="flex justify-between">
                <div className="flex ">
                  <div
                    className="w-[120px] h-[120px] text-center border-solid
                                    border-[1px]
                                    border-primary_2
                                    flex
                                    justify-center
                                    items-center
                                    relative"
                  >
                    <img
                      className=" w-[100px] h-[100px] 
                                    "
                      src={item.picture}
                      alt=""
                    />
                    <p
                      className="
                                    rounded-tl-[4px]
                                    font-medium text-sm text-neutral_5
                                    w-[22px] h-[22px]
                                    absolute right-0 bottom-0 bg-primary_2
                                    "
                    >{`x${item.quantity}`}</p>
                  </div>
                  <div className="ml-10">
                    <h3 className="text-xl font-bold font-main text-neutral_1 ">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium font-main ">
                      Màu sắc: Gold
                    </p>
                    <p className="mt-3 text-red-600">Đang chờ duyệt</p>
                  </div>
                </div>
                <div className="text-xl font-bold text-right text-primary_2 ">
                  <h3>{<FormatMoney money={item.cost} />}</h3>
                </div>
              </div>
              <div className="w-full h-[1px] bg-primary_5 my-4"></div>
              <div className="w-full h-[1px] bg-primary_5 my-4"></div>

              <div className="flex items-center justify-end text-right cursor-pointer">
                {/* <h3 className='font-main font-bold text-base tracking-[0.15px] text-[#251C17]'>
                                Xem thêm 2 sản phẩm
                            </h3> */}
                <img
                  className="w-4 h-4 ml-4 "
                  src="/assets/icon/doubleArrowdown.png"
                />
              </div>

              <div className="flex items-center justify-end mt-12 text-right cursor-pointer">
                <h3 className="font-main font-bold text-xl tracking-[0.15px] text-[#251C17]">
                  Tổng tiền :
                </h3>
                <h3 className="ml-6 text-xl font-bold text-primary_2 ">
                  {<FormatMoney money={item.cost * item.quantity} />}
                </h3>
              </div>

              {/* <div className='flex items-center justify-end mt-12 text-right cursor-pointer'>
                            <Button title='Mua lại'
                                className='font-bold text-[#251C17] text-base tracking-[0.15px]
                            rounded-btnB w-[104px] h-10
                            border-[1px]
                            border-solid
                            border-black
                            cursor-pointer
                            ' />
    
                            <Button title='Xem chi tiết'
                                className='font-bold text-[#251C17] text-base tracking-[0.15px]
                            rounded-btnB w-[135px] h-10
                            border-[1px]
                            border-solid
                            border-black
                            cursor-pointer
                            ml-4
                            ' />
    
                        </div> */}
            </div>
          </div>
        );
      })}
      {/* bg-circle */}
      <div
        className="rounded-full bg-circle1 w-[177px] h-[177px] 
                    absolute
                    top-[2348px]
                    left-[-89px]
                      -z-10
                    "
      ></div>
      <div
        className="rounded-full bg-circle2 w-[221px] h-[221px] 
                    absolute
                    top-[2326px]
                    left-[-111px]
                    -z-10
                    
                    "
      ></div>

      {/* bg-circle */}
      <div
        className="rounded-full bg-circle1 w-[180px] h-[180px]  
                    absolute
                    top-[565px]
                    left-[1349px]
                    -z-10
                    
                    "
      ></div>
      <div
        className="rounded-full bg-circle2 w-[225px] h-[225px] 
                    absolute
                    top-[543px]
                    left-[1327px]
                    -z-10
                    
                    "
      ></div>

      {/* bg-circle */}
      <div
        className="rounded-full bg-circle1 w-[441px] h-[441px]  
                    absolute
                    top-[3196px]
                    left-[-111px]
                    -z-10

                    "
      ></div>
      <div
        className="rounded-full bg-circle2 w-[551px] h-[551px] 
                    absolute
                    top-[3141px]
                    left-[-166px]
                    -z-10
                    "
      ></div>
    </div>
  );
}

export default OderManagement;
