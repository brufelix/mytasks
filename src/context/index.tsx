import React, { createContext } from 'react';
import { useTasks } from '../hooks';
import { IContextProps, ITasksContext } from '../interfaces';

export const TasksContext = createContext<ITasksContext>({} as ITasksContext)

export const TaskProvider: React.FunctionComponent<IContextProps> = ({ children }) => {
  const { tasks, setTasks } = useTasks()

  return (
    <TasksContext.Provider value={{ tasks, setTask: setTasks }} >
      {children}
    </TasksContext.Provider>
  )
}