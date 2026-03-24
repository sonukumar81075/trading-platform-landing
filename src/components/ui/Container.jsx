export function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto  w-full max-w-6xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

