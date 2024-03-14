import { Pencil } from 'lucide-react';
import PromptHistory from '@/components/dashboard/prompt-history.tsx';
import { TPromptHistory } from '@/shared/types/prompt-history.type.ts';

const mockItems: TPromptHistory[] = [
  {
    date: 'Today',
    links: [
      {
        title: 'Prompt 1',
        url: '/dashboard/prompt/1',
      },
      {
        title: 'Prompt 2',
        url: '/dashboard/prompt/2',
      },
    ],
  },
  {
    date: 'Yesterday',
    links: [
      {
        title: 'Prompt 1',
        url: '/dashboard/prompt/1',
      },
      {
        title: 'Prompt 2',
        url: '/dashboard/prompt/2',
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <nav className="h-screen w-80 border-r p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">AI Writer</h1>
        <button>
          <Pencil size={24} />
        </button>
      </div>
      <PromptHistory items={mockItems} />
    </nav>
  );
}
