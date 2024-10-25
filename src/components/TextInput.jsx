import { forwardRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', ...props }) {

    return (
        <input
            {...props}
            type={type}
            className={
                `block w-full ${className.includes('rounded') ? '' : 'rounded-md'} border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6  ` +
                className
            }
        />
    );
});
