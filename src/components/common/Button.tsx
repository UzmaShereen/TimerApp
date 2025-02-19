import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', variant = 'primary', disabled = false }) => {
  const baseClass = 'px-4 py-2 text-sm font-medium rounded-md transition-colors';
  const primaryClass = 'text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400';
  const secondaryClass = 'text-gray-700 bg-gray-100 hover:bg-gray-200';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${variant === 'primary' ? primaryClass : secondaryClass}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
