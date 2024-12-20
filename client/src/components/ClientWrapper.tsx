"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Loading from "@/components/Loading";

interface ClientWrapperProps {
  children: ReactNode;
}

function ClientWrapper({ children }: ClientWrapperProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSlowConnection, setIsSlowConnection] = useState<boolean>(false);

  useEffect(() => {
    const handleConnectionChange = () => {
      if (navigator.connection) {
        const downlink = navigator.connection.downlink;

        setIsSlowConnection(downlink < 1);
      }
    };

    handleConnectionChange();

    if (navigator.connection) {
      navigator.connection.addEventListener("change", handleConnectionChange);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      if (navigator.connection) {
        navigator.connection.removeEventListener(
          "change",
          handleConnectionChange
        );
      }
      clearTimeout(timer);
    };
  }, []);

  return isLoading || isSlowConnection ? <Loading /> : <>{children}</>;
}

export default ClientWrapper;
