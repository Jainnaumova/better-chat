import React from 'react';

const Calendar = ({
  style = {},
  width = '100%',
  height = '100%',
  viewBox = '0 0 500 500',
}) =>
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
      <path d="M426,52 L404,52 L404,8 L360,8 L360,52 L140,52 L140,8 L96,8 L96,52 L74,52 C49.8,52 30,71.8 30,96 L30,448 C30,472.2 49.8,492 74,492 L426,492 C450.2,492 470,472.2 470,448 L470,96 C470,71.8 450.2,52 426,52 Z M426,448 L74,448 L74,162 L426,162 L426,448 Z" fill="#f6f6f6" fillRule="nonzero"></path>
  </svg>;

export default Calendar;
