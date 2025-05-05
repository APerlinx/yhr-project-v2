import React from 'react';

const FacebookLink = ({ className, type }) => {
  return (
    <a
      href="https://www.facebook.com/p/%D7%94%D7%A8%D7%9E%D7%9F-%D7%90%D7%93%D7%A8%D7%99%D7%9B%D7%9C%D7%99%D7%9D-%D7%91%D7%A2%D7%9E-100068924686040/"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 text-blue-500 hover:underline ${className}`}
    >
      {/* Facebook Icon */}
      {type === 'primary' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          className="fill-white text-blue-500 transition-colors duration-200 hover:fill-current"
        >
          <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.35v21.3C0 23.4.6 24 1.325 24h11.495V14.7H9.69v-3.6h3.13V8.41c0-3.1 1.891-4.79 4.647-4.79 1.321 0 2.459.1 2.789.14v3.24h-1.913c-1.5 0-1.79.71-1.79 1.756V11.1h3.581l-.467 3.6h-3.114V24h6.078C23.4 24 24 23.4 24 22.675v-21.3C24 .6 23.4 0 22.675 0z" />
        </svg>
      ) : (
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
            fill="#0F0F0F"
          />
        </svg>
      )}
    </a>
  );
};

export default FacebookLink;
