import { useState } from "react";
import { ITasks } from "../interfaces";

export function useTasks() {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  return { tasks, setTasks };
}
