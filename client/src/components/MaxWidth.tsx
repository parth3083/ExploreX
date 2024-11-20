import React, { ReactNode } from "react";

function MaxWidth({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-7xl min-h-screen mx-auto bg-green-500 overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export default MaxWidth;
