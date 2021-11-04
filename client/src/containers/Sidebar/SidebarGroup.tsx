import { useContext, useState } from "react";

import { ProjectContext } from "../../utils/ProjectContext";

import Sidebar from "./Sidebar";

type SidebarGroupProps = { res: [number, number] };

const SidebarGroup: React.FC<SidebarGroupProps> = ({ res }) => {
  const { state, dispatch } = useContext(ProjectContext);
  const [selected, setSelected] = useState(-1);

  return (
    <div className="sidebar-group-container unclickable">
      {state.sidebarData.map((e: number[], i: number) => {
        return <Sidebar key={i} tray={e} width={res[0]} height={res[1]} />;
      })}
    </div>
  );
};

export default SidebarGroup;
