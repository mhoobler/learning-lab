import { createContext, useReducer } from "react";

type ProjectState = {
  components: any;
};

const reducer = (state: ProjectState, action: any) => {
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
      delete newState.components[payload.id];
      return newState;
    }
    default:
      throw new Error(`Unkown type: ${type} in project reducer`);
  }
};

const initState: ProjectState = { components: {} };

const ProjectContext = createContext<{
  state: ProjectState;
  dispatch: any;
}>({
  state: initState,
  dispatch: () => {},
});
const { Provider } = ProjectContext;

const ProjectProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { ProjectContext, ProjectProvider };
