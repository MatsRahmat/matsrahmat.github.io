import { createEffect, createSignal } from "solid-js";

function ButtonCustom({ text, style }) {
  const [styleBtn, setStyleBtn] = createSignal(
    "bg-gradient-to-tr from-slate-500 via-white to-slate-600"
  );

  const listStyle = [
    "text-black font-semibold bg-gradient-to-tr from-slate-500 via-white to-slate-600",
    "bg-gradient-to-tr from-slate-500 via-white to-slate-600",
    "text-white font-semibold bg-gradient-to-tr from-sky-500 to-blue-600",
    "bg-gradient-to-tr from-sky-500 to-blue-600 font-semibold text-white",
    "text-white font-semibold bg-blue-500",
    "text-white font-semibold bg-slate-500 ",
    "text-white font-semibold bg-gradient-to-br from-red-500 via-teal-200 to-rose-500",
    "text-white font-semibold bg-gradient-to-t from-gray-600 via-sky-600 to-slate-100",
    "bg-gradient-to-tr from-gray-800 via-sky-600 to-slate-100 font-semibold",
  ];

  createEffect(() => {
    if(style < listStyle.length){
      setStyleBtn(listStyle[style - 1])
    } else {
      setStyleBtn("bg-gradient-to-tr from-slate-500 via-white to-slate-600")
    }
  })
  return (
    <>
      <span className={`py-2 px-4 border border-white rounded-xl relative ${styleBtn()}`}>
        {text || "Button"}
      </span>
    </>
  );
}

export default ButtonCustom;
