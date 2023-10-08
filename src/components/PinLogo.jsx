function PinLogo({size}) {
  return (
    <>
      <svg
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m15.077 15.077 2.961 2.962L21 21"></path>
        <path d="m12 16.881-.77 2.042 7.693-7.692-2.042.77L12 16.88Z"></path>
        <path d="M9.928 3.879a52.218 52.218 0 0 0 7.376 8.518"></path>
        <path d="M12.397 17.304A52.22 52.22 0 0 0 3.88 9.928"></path>
        <path d="m2 11.231 3-.505L10.726 5l.504-3L2 11.231Z"></path>
      </svg>
    </>
  );
}

export default PinLogo;
