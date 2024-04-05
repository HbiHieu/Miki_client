import React from "react";
import Button from "../../Components/Button";

const ProfileForm = ({ setIsOpen }) => {
  const test = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      {
        <div
          onClick={() => setIsOpen()}
        //   className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-20"
          class="fixed z-50 bg-gray-100 top-[25%] left-[50%] flex items-center justify-center"
        >
          {/* <form
                        onClick={test}
                        className='text-base font-medium font-main w-[400px] bg-gray-400 p-4 rounded-lg'>

                        <div className='relative mb-7'>
                            <input className='py-3 pl-4 border-[1px] border-solid border-primary_1 rounded-lg w-full outline-none ' type="text" placeholder="La La La" />
                            <input className='py-3 pl-4 border-[1px] border-solid border-primary_1 rounded-lg w-[98px] outline-none absolute top-0 right-0 ' type="year" placeholder="2022" />
                        </div>

                        <div className='flex gap-8 mb-7'>
                            <input className='py-3 pl-4 border-[1px] border-solid border-primary_1 rounded-lg w-[98px] outline-none' type="text" placeholder="04" />
                            <input className='py-3 pl-4 border-[1px] border-solid border-primary_1 rounded-lg w-[98px] outline-none' type="text" placeholder="03" />
                        </div>

                        <div className='relative mb-7'>
                            <input className='py-3 pl-4 border-[1px] border-solid border-primary_1 rounded-lg w-full outline-none ' type="text" placeholder="0912345678" />
                        </div>

                        <div className='relative mb-7'>
                            <input className='py-3 pl-4 border-[1px] border-solid border-primary_1 rounded-lg w-full outline-none ' type="text" placeholder="lalala432@gmail.com" />
                        </div>

                        <div className='relative mb-7'>
                            <input className='py-3 pl-4 border-[1px] border-solid border-primary_1 rounded-lg w-full outline-none ' type="text" placeholder="123!@#$" />
                        </div>

                        <Button
                            title="Lưu thay đổi"
                            className=" bg-black py-2  w-[170px] h-10 rounded-btnB 
                                            font-bold text-base font-main leading-6 text-center tracking-[0.15px] text-white
                                            hover:bg-[#0000] 
                                            hover:text-neutral_1
                                            hover:border-solid
                                            hover:border-[1px]
                                            hover:border-[#000]
                                            "
                            onClick={() => setIsOpen()}
                        />

                    </form> */}

          <div class="bg-white p-8 rounded shadow-md max-w-md">
            <h2 class="text-xl font-semibold mb-4">Sửa thông tin cá nhân</h2>
            <form onClick={test}>
              <div class="mb-4">
                <label for="full-name" class="block text-gray-700">
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                />
              </div>
              <div class="mb-4">
                <label for="phone" class="block text-gray-700">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                />
              </div>
              <div class="mb-4">
                <label for="email" class="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                />
              </div>
              <div class="mt-6">
                <Button
                  title="Lưu thay đổi"
                  className=" bg-black py-2  w-[170px] h-10 rounded-btnB 
                                            font-bold text-base font-main leading-6 text-center tracking-[0.15px] text-white
                                            hover:bg-[#0000] 
                                            hover:text-neutral_1
                                            hover:border-solid
                                            hover:border-[1px]
                                            hover:border-[#000]
                                            "
                  onClick={() => setIsOpen()}
                />
              </div>
            </form>
          </div>
        </div>
      }
    </>
  );
};

export default ProfileForm;
