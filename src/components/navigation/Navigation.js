import React from "react";
import { NavigationDesktop } from "./navigationdesktop/NavigationDesktop";
import { NavigationMobile } from "./navigationmobile/NavigationMobile";
import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";

export const Navigation = () => {
  const { width, height } = useWindowDimensions();

  const displayNav = () => {
    return width <= 400 ? <NavigationMobile /> : <NavigationDesktop />;
  };

  return <>{displayNav()}</>;
};
