export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
};

export type FilterStatus = 'all' | 'active' | 'completed';