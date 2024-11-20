"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Loading from "@/components/Loading";

function ClientWrapper({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      return () => clearTimeout(timer);
    }, 3000);
  }, []);

  return isLoading ? <Loading /> : <>{children}</>;
}

export default ClientWrapper;
