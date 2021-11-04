// TODO: REMOVE
declare module "*.gif" {
  const value: any;
  export = value;
}

interface ComponentType {
  id: number;
  short_name: string;
  long_name: string;
  description: string;
  category: string;
  sub_category: string;
  manufacturer: string;
  sprites: string[];
  image_url: string;
}

interface ProjectDataType extends ComponentType {
  id: number;
  component_id: number;
  project_id: number;
  x: number;
  y: number;
}

type ProjectDataMap = { [key: string]: ProjectDataType };
type ProjectContextState = {
  projectData: ProjectDataMap;
  sidebarData: number[];
};

type SidebarType = {
  tray: number[];
};
