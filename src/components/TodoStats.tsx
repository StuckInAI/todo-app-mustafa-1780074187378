import { CheckCircle2, Circle, BarChart3 } from 'lucide-react';

type TodoStatsProps = {
  stats: { total: number; completed: number; active: number };
};

export default function TodoStats({ stats }: TodoStatsProps) {
  const percentage = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  if (stats.total === 0) return null;

  return (
    <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <BarChart3 className="w-4 h-4 text-brand" />
          Progress
        </div>
        <span className="text-sm font-bold text-brand">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-white rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-gradient-to-r from-brand to-brand-light rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <Circle className="w-3 h-3 text-brand" />
          {stats.active} active
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-success" />
          {stats.completed} completed
        </div>
      </div>
    </div>
  );
}