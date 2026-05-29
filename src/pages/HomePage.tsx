import { useTodos } from '@/hooks/useTodos';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import TodoFilter from '@/components/TodoFilter';
import TodoStats from '@/components/TodoStats';
import { ClipboardList } from 'lucide-react';

export default function HomePage() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    stats,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-2xl mx-auto px-4 py-10 sm:py-16">
        <header className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand text-white mb-4 shadow-lg">
            <ClipboardList className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Todo App
          </h1>
          <p className="text-gray-500 mt-2 text-base">
            Stay organized and get things done
          </p>
        </header>

        <main>
          <TodoInput onAdd={addTodo} />
          <TodoStats stats={stats} />
          <TodoFilter
            filter={filter}
            onFilterChange={setFilter}
            stats={stats}
            onClearCompleted={clearCompleted}
          />
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        </main>

        <footer className="mt-12 text-center text-xs text-gray-400">
          <p>Data is stored locally in your browser</p>
        </footer>
      </div>
    </div>
  );
}