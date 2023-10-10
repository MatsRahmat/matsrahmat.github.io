import { createSignal } from "solid-js";
import ButtonCustom from "./ButtonCustom";
import ReuseModal from "./ReuseModal";

function CertificationComponent({ obj }) {
  const [show, setShow] = createSignal(false);
  const onClick = (e) => {
    setShow((prev) => !prev);
  };
  return (
    <div className="flex flex-col justify-center border border-slate-500 shadow-md shadow-gray-500 rounded-lg space-y-5 py-4">
      <div className="aspect-4/3  w-[18rem] flex flex-col justify-center">
        <img
          src={`/assets/certifications/${obj.name}.png`}
          alt={obj.name || "Certification"}
          className="object-cover cursor-pointer"
          onClick={onClick}
        />
      </div>
      <div className="flex gap-5 justify-center">
        <button onClick={onClick}>
          <ButtonCustom text={"Detail"} style={8}></ButtonCustom>
        </button>
        <a href="">
          <ButtonCustom text={"Download"} style={5}></ButtonCustom>
        </a>
      </div>
      {show() && (
        <ReuseModal close={() => setShow(false)}>
          <img
            src={`/assets/certifications/${obj.name}.png`}
            alt=""
            className="object-cover h-[80%]"
          />
        </ReuseModal>
      )}
    </div>
  );
}

export default CertificationComponent;
