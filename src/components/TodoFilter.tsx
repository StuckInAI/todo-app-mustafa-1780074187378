import clsx from 'clsx';
import { Trash2 } from 'lucide-react';
import type { FilterStatus } from '@/types';

type TodoFilterProps = {
  filter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
  stats: { total: number; completed: number; active: number };
  onClearCompleted: () => void;
};

const filters: { value: FilterStatus; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
];

export default function TodoFilter({ filter, onFilterChange, stats, onClearCompleted }: TodoFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 px-1">
      <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={clsx(
              'px-4 py-2 rounded-lg text-sm font-medium transition-all',
              filter === f.value
                ? 'bg-white text-brand shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            )}
          >
            {f.label}
            <span className="ml-1.5 text-xs opacity-60">
              {f.value === 'all' && stats.total}
              {f.value === 'active' && stats.active}
              {f.value === 'completed' && stats.completed}
            </span>
          </button>
        ))}
      </div>

      {stats.completed > 0 && (
        <button
          onClick={onClearCompleted}
          className="flex items-center gap-1.5 px-3 py-2 text-sm text-danger hover:bg-red-50 rounded-lg transition-colors font-medium"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Clear completed ({stats.completed})
        </button>
      )}
    </div>
  );
}