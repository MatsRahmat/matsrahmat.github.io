import { forwardRef } from "react";

const Experience = forwardRef(({}, ref) => {
  return (
    <>
      <div className="h-screen" ref={ref}>
        <h1>Experience</h1>
      </div>
    </>
  );
});

export default Experience;
