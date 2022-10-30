import React from "react";

interface Props {
  theme?: "dark" | "light";
}

export const Logo = (props: Props) => {
  const { theme = "dark" } = props || {};

  const colors = {
    main: theme === "dark" ? "#3F3F46" : "#FFFFFF",
    secondary: theme === "dark" ? "#60A5FA" : "#FFFFFF",
  };
  return (
    <svg
      width="172"
      height="34"
      viewBox="0 0 172 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M61.032 3.8H69.672V8.12H62.76L62.652 8.336L68.412 18.848C69.588 20.96 70.176 22.568 70.176 23.672C70.176 26.096 69.372 27.872 67.764 29H58.224V24.824H65.676L65.784 24.608L59.304 12.98C58.368 11.3 57.9 9.932 57.9 8.876C57.9 6.38 58.944 4.688 61.032 3.8ZM81.181 20.684H77.329C76.825 21.308 76.573 22.088 76.573 23.024C76.573 23.96 76.837 24.692 77.365 25.22H81.181V20.684ZM73.441 10.604H82.369C83.809 11.468 84.757 12.464 85.213 13.592C85.669 14.696 85.897 16.208 85.897 18.128V23.528C85.897 25.52 85.945 27.344 86.041 29H81.937L81.289 27.704C80.353 28.568 79.033 29 77.329 29H75.061C73.021 27.656 72.001 25.724 72.001 23.204C72.001 20.66 73.045 18.656 75.133 17.192H78.517C79.453 17.192 80.329 17.48 81.145 18.056V16.256C81.145 15.32 80.737 14.696 79.921 14.384H73.441V10.604ZM96.9853 10.604H100.801C101.857 11.948 102.577 13.292 102.961 14.636C103.345 15.98 103.537 17.66 103.537 19.676V29H98.7493V19.316C98.7493 17.036 98.4373 15.392 97.8133 14.384H93.7813V29H88.9933V10.604H92.7373L93.3853 11.9C93.9133 11.42 94.4053 11.084 94.8613 10.892C95.3413 10.7 96.0493 10.604 96.9853 10.604ZM120.433 29H116.797L116.149 27.704C115.621 28.184 115.117 28.52 114.637 28.712C114.181 28.904 113.485 29 112.549 29H109.417C108.361 27.992 107.521 26.672 106.897 25.04C106.297 23.408 105.997 21.584 105.997 19.568C105.997 17.528 106.297 15.8 106.897 14.384C107.521 12.968 108.397 11.708 109.525 10.604H112.621C113.893 10.604 114.901 10.94 115.645 11.612V3.8H120.433V29ZM115.645 14.384H112.189C111.301 15.896 110.857 17.756 110.857 19.964C110.857 22.148 111.289 23.9 112.153 25.22H115.645V14.384ZM123.517 3.8H128.269V11.9C128.797 11.42 129.289 11.084 129.745 10.892C130.225 10.7 130.933 10.604 131.869 10.604H134.749C135.757 11.588 136.549 12.86 137.125 14.42C137.701 15.98 137.989 17.696 137.989 19.568C137.989 23.576 136.789 26.72 134.389 29H130.969C129.793 29 128.809 28.556 128.017 27.668L127.369 29H123.517V3.8ZM128.305 25.22H131.761C132.649 23.708 133.093 21.872 133.093 19.712C133.093 17.552 132.637 15.776 131.725 14.384H128.305V25.22ZM163.773 17.444L166.005 10.604H171.009L167.589 19.568L171.153 29H166.221L163.737 21.872H163.593L161.217 29H156.285L159.849 19.568L156.429 10.604H161.361L163.629 17.444H163.773Z"
        fill={colors.main}
      />
      <path
        d="M151.512 29H143.664C141.264 26.768 140.064 23.72 140.064 19.856C140.064 17.912 140.328 16.22 140.856 14.78C141.408 13.34 142.272 11.948 143.448 10.604H151.872C153.12 12.044 153.972 13.448 154.428 14.816C154.884 16.16 155.112 17.84 155.112 19.856C155.112 23.72 153.912 26.768 151.512 29ZM146.22 25.22H148.956C149.82 23.54 150.252 21.632 150.252 19.496C150.252 17.36 149.808 15.656 148.92 14.384H146.22C145.356 15.608 144.924 17.348 144.924 19.604C144.924 21.836 145.356 23.708 146.22 25.22Z"
        fill={colors.secondary}
      />
      <path
        d="M27.7352 8.02093C28.5819 7.17075 29.108 5.99653 29.108 4.70036C29.108 2.10454 27.0035 0 24.4077 0C22.7666 0 21.324 0.843208 20.4843 2.11847C20.2613 2.34147 1.55046 25.4043 1.37624 25.6691C0.529552 26.5192 0.00341797 27.6935 0.00341797 28.9896C0.00341797 31.5855 2.10795 33.69 4.70378 33.69C6.3449 33.69 7.78741 32.8468 8.62714 31.5715C8.85014 31.3485 27.561 8.28574 27.7352 8.02093Z"
        fill={colors.secondary}
      />
      <path
        d="M38.5608 18.9617C39.411 18.1116 39.9371 16.9373 39.9371 15.6377C39.9371 13.0419 37.8326 10.9373 35.2368 10.9373C33.5956 10.9373 32.1531 11.7805 31.3099 13.0558C31.0834 13.2823 21.2576 25.3938 21.0799 25.6621C20.2297 26.5123 19.7036 27.6865 19.7036 28.9862C19.7036 31.582 21.8082 33.6865 24.404 33.6865C26.0451 33.6865 27.4876 32.8433 28.3308 31.568C28.5573 31.3416 38.3831 19.23 38.5608 18.9617V18.9617Z"
        fill={colors.main}
      />
      <path
        d="M48.8158 4.70036C48.8158 7.29619 46.7112 9.40073 44.1154 9.40073C41.5196 9.40073 39.415 7.29619 39.415 4.70036C39.415 2.10454 41.5196 0 44.1154 0C46.7112 0 48.8158 2.10454 48.8158 4.70036Z"
        fill={colors.secondary}
      />
      <path
        d="M9.40073 4.70036C9.40073 7.29619 7.29619 9.40073 4.70036 9.40073C2.10454 9.40073 0 7.29619 0 4.70036C0 2.10454 2.10454 0 4.70036 0C7.29619 0 9.40073 2.10454 9.40073 4.70036Z"
        fill={colors.main}
      />
    </svg>
  );
};
