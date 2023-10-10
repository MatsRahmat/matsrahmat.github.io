function ReuseModal(props) {
  return (
    <>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 rounded-lg z-50 p-5 animate__animated animate__zoomInUp">
        <div>{props.children}</div>
      </div>
      <div onClick={props.close} id="overlay" className="fixed bg-black bg-opacity-50 left-0 top-0 right-0 bottom-0 z-[45]"/>
    </>
  );
}
export default ReuseModal;
