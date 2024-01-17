import { createContext } from "react";
import { TForm } from "../../types";
import cn from "../../utils/cn";
export const FormElementContext = createContext<{ double: boolean } | null>(
  null
);

export const Form = ({ children, onSubmit, double = false }: TForm) => {
  return (
    <FormElementContext.Provider value={{ double }}>
      <form
        className={cn(
          "border border-gray-300 shadow-sm rounded-lg w-full p-5 mx-auto",
          {
            "max-w-5xl": double,
            "max-w-md": !double,
          }
        )}
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};
