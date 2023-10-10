function CloseIcon({size, color, width, style}) {
  return (
    <>
      <svg
        width={ size || 76}
        height={size || 76}
        fill="none"
        stroke={color || "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={width || 3}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={style}
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </>
  );
}

export default CloseIcon
