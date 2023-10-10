import { onMount } from "solid-js";
import ScrollReveal from "scrollreveal";

function ScrollRevealParent({ children, style }) {
  let element;

  onMount(() => {
    if (element) {
      ScrollReveal().reveal(element, {
        reset: true,
        delay: 200,
      });
    }
  });
  return (
    <>
      <div className={style || ""} ref={element}>
        {children}
      </div>
    </>
  );
}

export default ScrollRevealParent;
