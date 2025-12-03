import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  size?: 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  fullWidth = false, 
  size = 'lg',
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2";
  
  const sizeStyles = size === 'lg' ? 'py-4 px-8 text-lg uppercase tracking-wide' : 'py-3 px-6 text-base';
  
  const variantStyles = variant === 'primary' 
    ? "bg-brand-accent hover:bg-brand-accentHover text-white shadow-brand-accent/30 hover:shadow-brand-accent/50"
    : "bg-green-600 hover:bg-green-500 text-white shadow-green-600/30 hover:shadow-green-500/50"; // Green mainly for final CTA if needed, or keeping blue consistent

  const widthStyles = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button 
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;