/**
 * PCI DSS Logo/Icon
 */
const PCILogo = ({ size = 24 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="none"
        >
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="#10B981" strokeWidth="2" fill="#10B981" fillOpacity="0.1" />
            <path d="M12 8v8M8 12h8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="12" r="3" stroke="#10B981" strokeWidth="2" fill="none" />
            <path d="M6 8l2-2m10 2l-2-2M6 16l2 2m10-2l-2 2" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
};

export default PCILogo;
