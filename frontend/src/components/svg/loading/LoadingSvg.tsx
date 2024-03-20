interface LoadingSvgProps {
  width ?:number,
  height?:number,
  color1?:string,
  color2?:string
}
const LoadingSvg = ({height=69,color1 = "#1A77F3" , color2 = "76B1FF",width=69}:LoadingSvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 69 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M65.4271 34.5C67.4004 34.5 69.0192 36.1039 68.8152 38.0666C68.1389 44.5744 65.6219 50.7828 61.5242 55.9463C56.6831 62.0464 49.9206 66.3293 42.3366 68.0982C34.7525 69.8671 26.793 69.0181 19.7527 65.6892C12.7124 62.3604 7.00549 56.7475 3.5601 49.7634C0.114706 42.7794 -0.866437 34.8352 0.776245 27.2227C2.41893 19.6103 6.5888 12.7776 12.6076 7.83589C18.6265 2.89416 26.1402 0.134153 33.9268 0.00476225C40.5178 -0.104761 46.976 1.67597 52.5517 5.09949C54.2333 6.13198 54.5209 8.39259 53.3201 9.95843C52.1193 11.5243 49.8858 11.797 48.1769 10.8104C43.9043 8.34363 39.0226 7.06684 34.0455 7.14955C27.8717 7.25214 21.9143 9.44049 17.1421 13.3587C12.3699 17.2768 9.06369 22.6943 7.76124 28.73C6.4588 34.7657 7.23672 41.0646 9.96849 46.602C12.7003 52.1395 17.2252 56.5898 22.8072 59.2292C28.3893 61.8686 34.7002 62.5417 40.7134 61.1392C46.7266 59.7367 52.0885 56.3409 55.9268 51.5043C59.0212 47.6051 60.9787 42.9544 61.6213 38.0629C61.8783 36.1064 63.4539 34.5 65.4271 34.5Z"
        fill="url(#paint0_linear_720_348)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_720_348"
          x1="60.375"
          y1="16.8293"
          x2="7.45638"
          y2="41.8701"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={color1} />
          <stop offset="1" stop-color={color2} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default LoadingSvg
