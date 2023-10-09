function ButtonCustom({text}) {
  return (
    <>
      <span className="py-2 px-4 border border-white rounded-3xl relative before:absolute before:h-full before:block before:-z-[1] before:left-0 before:top-0 before:w-1em before:bg-gradient-to-tr from-slate-500 via-white to-slate-600">
        {text || "Button"}
      </span>
    </>
  );
}

export default ButtonCustom
