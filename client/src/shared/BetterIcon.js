import React from 'react';

const BetterIcon = ({
  style = {},
  fill = '#291842',
  width = '100%',
  height = '100%',
  viewBox = '0 0 174 174',
}) =>
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
      <path d="M79.866 26.627l-17.27-6.399L10 62.557v66.589l52 22.669V85.226l51-41.795 51 41.795v66.589l-52-22.669V95" fill={fill} strokeWidth="20" stroke="#FFF" fillRule="evenodd"/>
  </svg>;

export default BetterIcon;
