import React from 'react';

function Button({ children = null, onClick }: { children?: React.ReactNode, onClick: () => void }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;