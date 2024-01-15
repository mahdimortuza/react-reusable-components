import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import cn from "../../utils/cn";

const modalContext = createContext<TModalContext | null>(null);

type TModalContext = {
  onClose: () => void;
};

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

type TCloseButton = {
  children?: ReactNode;
};

type THeader = TCloseButton;

const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleOutSideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <modalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutSideClose}
      >
        <div
          ref={containerRef}
          className="bg-white w-full max-w-sm rounded-md p-"
        >
          {children}
        </div>
      </div>
    </modalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(modalContext) as TModalContext;
  return (
    <button onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return (
    <div className="flex justify-between items-center w-full mb-">
      {" "}
      {children}
    </div>
  );
};
Modal.Header = Header;
Modal.CloseButton = CloseButton;

export default Modal;
