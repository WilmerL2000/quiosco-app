import { useContext } from "react";
import QuioscoContext from "../context/QuioscoProvider";

/**
 * It returns the value of the QuioscoContext.Provider component.
 * @returns The context object.
 */
const useQuiosco = () => {
  return useContext(QuioscoContext);
};

export default useQuiosco;
