function ReuseModal(props) {
  return (
    <>
      <div className="fixed md:left-1/2 left-0 top-1/2 md:-translate-x-1/2 -translate-x-0 -translate-y-1/2 md:bg-slate-100 rounded-lg z-50 md:p-5 animate__animated animate__zoomInUp">
        <div className="rotate-90 md:rotate-0">{props.children}</div>
      </div>
      <div onClick={props.close} id="overlay" className="fixed bg-black bg-opacity-50 left-0 top-0 right-0 bottom-0 z-[45]"/>
    </>
  );
}
export default ReuseModal;
