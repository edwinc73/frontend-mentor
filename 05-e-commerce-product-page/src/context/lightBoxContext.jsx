import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LightBoxContext = createContext(null);

export function LightBoxProvider({ children }) {
  const [lightBox, setLightBox] = useState(false);
  const [currentImageId, setCurrentImageId] = useState(0);

  return (
    <LightBoxContext.Provider
      value={{
        lightBox,
        setLightBox,
        currentImageId,
        setCurrentImageId,
      }}
    >
      {children}
    </LightBoxContext.Provider>
  );
}

LightBoxProvider.propTypes = {
  children: PropTypes.object,
};
