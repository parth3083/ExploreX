import React, { ReactNode } from "react";

function MaxWidth({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`lg:max-w-7xl w-full md:w-full min-h-screen mx-auto overflow-hidden  ${className}`}
    >
      {children}
    </div>
  );
}

export default MaxWidth;
