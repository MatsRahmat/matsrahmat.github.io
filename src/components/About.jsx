import { forwardRef } from "react";

const About = forwardRef(({}, ref) => {
  return (
    <>
      <div
        className="h-screen flex justify-center pt-16 bg-slate-800"
        ref={ref}
      >
        <h1>This is about</h1>
      </div>
    </>
  );
});

export default About;
