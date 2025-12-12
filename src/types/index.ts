export type TaskStatus = 'pending' | 'in-progress' | 'completed';
 
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}

export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
  onEdit: (task: Task) => void;
}
export interface TaskProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
  onEdit: (task: Task) => void;
 
}


export interface TaskItemProps {
  task: Task;
  onStatusChange: ( newStatus: TaskStatus) => void;
}
export interface TaskDeleteProps {
  task: Task;
  onDelete: (taskId: string) => void;
}
export interface TaskEditProps {
  onIsEdit: (isEditOpen: boolean) => void;
  
}
export interface SubmitEditProps {
  onIsEdit: (isEditOpen: boolean) => void;

}
export interface AddSearchProps{
  taskId: number;
  addTask: (task: Task) => void;
  searchTask: (searchParams: string[]) => void;

}

export interface AddTaskProps {
  taskId: number;
  addTask: (task: Task) => void;
}
export interface SearchTaskProps {
  searchTask: (searchParams: string[]) => void;
}

export interface TaskFilterProps {
  tasks:Task[]
  onChange: (filterd:Task[]) => void;
}