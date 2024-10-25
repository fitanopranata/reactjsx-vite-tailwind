export default function Button({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `rounded-md ${className.includes('bg-') ? '' : 'bg-blue-600'} ${className.includes('font-') ? '' : 'font-semibold'} text-sm leading-6 ${className.includes('text-gray-900') ? '' : 'text-white'} shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    disabled && 'opacity-25 cursor-not-allowed'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
