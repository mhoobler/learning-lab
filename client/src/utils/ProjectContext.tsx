import { FC, createContext, useReducer } from "react";

// TODO: any
const reducer = (state: ProjectContextState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_PROJECT": {
      return payload;
    }
    case "EDIT_DATA":
    case "ADD_DATA": {
      return {
        ...state,
        [payload.id]: payload,
      };
    }
    case "REMOVE_DATA": {
      const newState = { ...state };
      delete newState.projectData[payload.id];
      return newState;
    }
    default:
      throw new Error(`Unkown type: ${type} in project reducer`);
  }
};

const initState0: ProjectContextState = {
  projectData: {},
  sidebarData: [Array(8).fill(0), Array(8).fill(0)],
};

type Props = {
  projectData: ProjectDataMap;
};

const ProjectContext = createContext<{
  state: ProjectContextState;
  dispatch: any;
}>({
  state: initState0,
  dispatch: () => {},
});
const { Provider } = ProjectContext;

const ProjectProvider: React.FC<Props> = ({ projectData, children }) => {
  const initState = {
    projectData: projectData || {},
    sidebarData: [Array(8).fill(0), Array(8).fill(0)],
  };
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { ProjectContext, ProjectProvider };
