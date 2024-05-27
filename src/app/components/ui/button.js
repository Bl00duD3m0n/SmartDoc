// src/app/components/ui/button.js
"use client";
import React from 'react';

export const Button = ({ variant = 'primary', children, ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-md focus:outline-none focus:ring-2';
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  };
  const classes = `${baseClasses} ${variants[variant] || variants.primary}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
