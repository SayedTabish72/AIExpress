"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d2b18d46-3148-4457-8d3b-449fcbc1fd1e");
  }, []);

  return null;
};
