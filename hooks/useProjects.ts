
import { useReducer, useEffect, useCallback } from 'react';
import { Project } from '../types';
import { PROJECTS as INITIAL_PROJECTS } from '../constants';

type Action = 
  | { type: 'ADD_PROJECT'; payload: Project }
  | { type: 'DELETE_PROJECT'; payload: string }
  | { type: 'SET_PROJECTS'; payload: Project[] };

// useReducer: For managing complex project state
function projectReducer(state: Project[], action: Action): Project[] {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [...state, action.payload];
    case 'DELETE_PROJECT':
      return state.filter(p => p.id !== action.payload);
    case 'SET_PROJECTS':
      return action.payload;
    default:
      return state;
  }
}

export const useProjects = () => {
  const [projects, dispatch] = useReducer(projectReducer, INITIAL_PROJECTS);

  // useCallback: To memoize the delete handler
  const deleteProject = useCallback((id: string) => {
    dispatch({ type: 'DELETE_PROJECT', payload: id });
  }, []);

  const addProject = useCallback((project: Project) => {
    dispatch({ type: 'ADD_PROJECT', payload: project });
  }, []);

  return { projects, addProject, deleteProject };
};
