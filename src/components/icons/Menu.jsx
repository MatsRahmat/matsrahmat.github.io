function MenuIcon({ size, fill, width, style}) {
  return (
    <>
      <svg
        id="Menu"
        width={size || 76}
        height={size || 76}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={width || 3}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={style}
      >
        <path d="M3 12h18" />
        <path d="M3 6h18" />
        <path d="M3 18h18" />
      </svg>
    </>
  );
}

export default MenuIcon;
