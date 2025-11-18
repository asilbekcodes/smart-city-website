export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      width="120" 
      height="40" 
      viewBox="0 0 120 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circle background */}
      <circle cx="20" cy="20" r="18" fill="#2563EB"/>
      
      {/* Q letter */}
      <path d="M20 8C13.4 8 8 13.4 8 20C8 26.6 13.4 32 20 32C23.2 32 26.1 30.7 28.2 28.6L26 26.4C24.5 27.9 22.4 28.8 20 28.8C15.1 28.8 11.2 24.9 11.2 20C11.2 15.1 15.1 11.2 20 11.2C24.9 11.2 28.8 15.1 28.8 20C28.8 21.4 28.5 22.7 27.9 23.9L30.5 26.5C31.5 24.7 32 22.4 32 20C32 13.4 26.6 8 20 8Z" fill="white"/>
      <rect x="24" y="26" width="6" height="2" rx="1" transform="rotate(45 24 26)" fill="white"/>
      
      {/* Text */}
      <text x="45" y="16" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1F2937">Qarshi</text>
      <text x="45" y="28" fontFamily="Arial, sans-serif" fontSize="8" fill="#6B7280">Smart City</text>
    </svg>
  );
}
