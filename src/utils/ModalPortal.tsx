"use client";
import React, { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const ModalPortal: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("modal");
    setContainer(el);
  }, []);

  if (!container) return null;

  return ReactDOM.createPortal(children, container);
};

export default ModalPortal;
