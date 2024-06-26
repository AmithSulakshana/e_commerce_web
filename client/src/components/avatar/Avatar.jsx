import React from 'react';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    // children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    children: name.split(' ')[0][0],
  };
}

const Avatar = ({ name ,onMouseEnter,onMouseLeave}) => {
  const avatarProps = stringAvatar(name);

  return (
    <div onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         style={{ backgroundColor: avatarProps.sx.bgcolor, width: '24px', height: '24px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white',marginTop:'7px' }}>
      {avatarProps.children}
      
    </div>
  );
};

export default Avatar;
