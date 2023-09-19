import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

const isTouchDevice = () => {
  if ('ontouchstart' in window) {
    return true;
  }
  return false;
};

const backendforDND = isTouchDevice() ? TouchBackend : HTML5Backend
export const DragDropContextProvider = ({ children }) => {
  return <DndProvider backend={backendforDND}>{children}</DndProvider>;
};
