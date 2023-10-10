function HomeIcon({size, color, width}) {
  return (
    <>
      <svg
        width={size || 76}
        height={size || 76}
        fill="none"
        stroke={ color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={width || 2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.75 9.938V21a.75.75 0 0 0 .75.75H9v-6.375a1.125 1.125 0 0 1 1.125-1.125h3.75A1.125 1.125 0 0 1 15 15.375v6.375h4.5a.75.75 0 0 0 .75-.75V9.937" />
        <path d="m22.5 12-9.99-9.563c-.234-.248-.782-.25-1.02 0L1.5 11.999" />
        <path d="M18.75 8.39V3H16.5v3.234" />
      </svg>
    </>
  );
}

export default HomeIcon;
