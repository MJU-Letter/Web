import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("");
  const isMobile = useMediaQuery({ query: "(max-width: 999px)" });

  useEffect(() => {
    if (isMobile) {
      setDeviceType("mobile");
    } else {
      setDeviceType("tablet");
    }
  }, [isMobile]);

  return deviceType;
};

export default useDeviceType;
