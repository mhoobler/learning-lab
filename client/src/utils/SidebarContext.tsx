import { createContext, useState, Dispatch, SetStateAction } from "react";

type SidebarStateType = {
  align: "top" | "bottom" | "left" | "right";
  tray: number[];
};
const initState: SidebarStateType[] = [
  {
    align: "top",
    tray: new Array(8).fill(0),
  },
  {
    align: "bottom",
    tray: new Array(8).fill(0),
  },
];

const SidebarContext = createContext<{
  state: SidebarStateType[];
  setState: Dispatch<SetStateAction<SidebarStateType[]>>;
}>({
  state: initState,
  setState: () => {},
});

const SidebarProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(initState);

  return (
    <SidebarContext.Provider value={{ state, setState }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarProvider, SidebarContext };
