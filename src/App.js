import React, { useEffect, useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [time, setTime] = useState(30);
  const listLi = [
    "CỘNG ĐỒNG SÓNG XANH",
    "TÀI KHOẢN CỦA TÔI",
    "BẢNG XẾP HẠNG",
    "ĐIỀU KHOẢN VÀ THỂ LỆ",
  ];
  function setFocusToOtp(e, pre = false) {
    pre
      ? document.getElementById(`otpNumber${e - 1}`)?.focus()
      : document.getElementById(`otpNumber${e + 1}`)?.focus();
  }
  const handleChange = (e, index) => {
    if (e.target?.value.length > 0) {
      setFocusToOtp(index);
    } else {
      setFocusToOtp(index, true);
    }
  };
  useEffect(() => {
    if (!time) return;
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="!max-sm:text-2xl">
      <header className="max-sm:flex-row max-sm:items-start max-sm:justify-between max-sm:p-5 max-sm:gap-10 container-te py-[27px] px-[35px] flex flex-col">
        <div className="max-sm:flex-col max-sm:items-start max-sm:flex-shrink-0 max-sm:gap-5 flex items-center justify-between">
          <a href="/">
            <img
              srcSet="/icon-home.svg"
              alt="logo"
              className="w-[30px] hidden max-sm:block"
            />
          </a>
          <a href="/">
            <img
              srcSet="/logo.png"
              alt="logo"
              className="max-sm:w-[120px] w-[181px]"
            />
          </a>
          <ul className="max-sm:hidden flex items-center gap-8">
            {listLi.map((items) => (
              <li className="uppercase hover:bg-teColorPrimary hover:text-white cursor-pointer ease-in py-1 px-3">
                {items}
              </li>
            ))}
          </ul>
          <img
            srcSet="/icon-logout.svg 2x"
            alt="icon-logout"
            className="max-sm:hidden w-[80px]"
          />
        </div>
        <div className="max-sm:flex-col max-sm:shadow-none max-sm:text-center shadow-[0_0_30px_-10px_rgba(0,0,0,0.3)] flex items-center gap-1 bg-white rounded-full p-1 ml-auto">
          <Button
            color="primary"
            bold
            className="shadow-inner max-sm:min-w-[146px]"
          >
            Phân tích A.I
          </Button>
          <Button bold>Khám phá phong cách thuần khiết</Button>
        </div>
      </header>
      <div className="body text-center flex flex-col items-center">
        <h1 className="text-teColorPrimary font-bold text-6xl max-sm:text-2xl">
          KHÁM PHÁ PHONG CÁCH
        </h1>
        <h2 className="text-teColorSeocondary font-bold text-6xl max-sm:text-2xl">
          thuần khiết
        </h2>
        <p className="text-teColorPrimary text-3xl max-sm:text-sm font-bold">
          CÙNG AQUAFINA A.I
        </p>
        <p className="text-teColorPrimary text-3xl max-sm:text-sm mt-8">
          Nhận <span className="font-bold">thông điệp tỏa sáng</span> mỗi ngày
        </p>
        <img
          srcSet="/picture.png 2x"
          alt=""
          className="max-sm:w-[283px] w-[600px]"
        />
        <p className="text-teColorPrimary text-3xl max-sm:text-sm mt-8">
          Tổng quà tặng giá trị hơn
          <span className="font-bold"> 200 triệu đồng</span>
        </p>
        <p className="max-sm:text-xl text-teColorPrimary font-bold text-6xl mt-7 mb-10">
          NHẬP OTP
        </p>
        <p className="text-teColorPrimary text-3xl max-sm:text-sm">
          Một mã OTP vừa được gửi vào số
          <span className="font-bold"> 0327784561</span>
        </p>
        <div className="flex items-center gap-8">
          {Array(4)
            .fill(null)
            .map((item, index) => (
              <label
                htmlFor={`otpNumber${index}`}
                className="max-sm:w-[45px] max-sm:h-[45px] flex items-center justify-center w-[74px] h-[74px] border border-gray-300 rounded-sm my-[41px] cursor-pointer"
              >
                <input
                  type="number"
                  placeholder="|"
                  className="w-5 h-5"
                  id={`otpNumber${index}`}
                  maxLength={1}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
            ))}
        </div>
        <Button
          color="primary"
          bold
          className="max-sm:min-w-[343px] max-sm:text-xl max-sm:py-1 min-w-[600px] text-5xl py-5"
        >
          Xác nhận
        </Button>
        <p className="text-teColorPrimary text-3xl max-sm:text-sm my-5">
          Mã sẽ được gửi trong vòng{" "}
          <span className="font-bold"> {time} GIÂY</span>
        </p>
        <p
          className="text-gray-600 text-3xl max-sm:text-sm cursor-pointer"
          onClick={() => setTime(30)}
        >
          Gửi lại mã
        </p>
      </div>
    </div>
  );
};

export default App;
