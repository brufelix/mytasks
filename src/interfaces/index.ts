export interface IContextProps {
  children: React.ReactElement
}

export interface ITasks {
  id: string,
  title: string
}

export interface ITasksContext {
  tasks: ITasks[],
  setTask(tasks: ITasks[]): void
}