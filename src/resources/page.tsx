import { useState } from 'react';
import { Button } from '@shadcn/button';
import { cn } from '../lib/utils';
import { FaChevronDown, FaPrint, FaCheck } from 'react-icons/fa';

interface ChecklistItem {
  id: string;
  category: string;
  items: {
    id: string;
    text: string;
    checked: boolean;
  }[];
}

interface InsuranceOption {
  provider: string;
  coverage: string;
  price: number;
  rating: number;
}

const defaultChecklist: ChecklistItem[] = [
  {
    id: '1',
    category: 'Essential Documents',
    items: [
      { id: '1-1', text: 'Passport', checked: false },
      { id: '1-2', text: 'Travel Insurance', checked: false },
      { id: '1-3', text: 'Booking Confirmations', checked: false }
    ]
  },
  {
    id: '2',
    category: 'Clothing',
    items: [
      { id: '2-1', text: 'Weather-appropriate clothing', checked: false },
      { id: '2-2', text: 'Comfortable walking shoes', checked: false },
      { id: '2-3', text: 'Swimwear', checked: false }
    ]
  }
];

const insuranceOptions: InsuranceOption[] = [
  {
    provider: 'TravelSafe Plus',
    coverage: 'Comprehensive',
    price: 150,
    rating: 4.8
  },
  {
    provider: 'GlobalGuard',
    coverage: 'Basic',
    price: 80,
    rating: 4.2
  },
  {
    provider: 'WorldwideProtect',
    coverage: 'Premium',
    price: 200,
    rating: 4.9
  }
];

function ResourcesPage() {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(
    JSON.parse(
      localStorage.getItem('travelChecklist') ||
        JSON.stringify(defaultChecklist)
    )
  );
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const toggleItem = (categoryId: string, itemId: string) => {
    const newChecklist = checklist.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          items: category.items.map((item) => {
            if (item.id === itemId) {
              return { ...item, checked: !item.checked };
            }
            return item;
          })
        };
      }
      return category;
    });

    setChecklist(newChecklist);
    localStorage.setItem('travelChecklist', JSON.stringify(newChecklist));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='mx-auto max-w-4xl p-6'>
      <div className='mb-8 flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Travel Resources</h1>
        <Button
          onClick={handlePrint}
          className='flex items-center space-x-2 bg-purple-600 hover:bg-purple-700'
        >
          <FaPrint />
          <span>Print Checklist</span>
        </Button>
      </div>

      {/* Packing Checklist */}
      <div className='mb-8 rounded-xl bg-purple-800/30 p-6'>
        <h2 className='mb-4 text-xl font-semibold'>Packing Checklist</h2>
        <div className='space-y-4'>
          {checklist.map((category) => (
            <div
              key={category.id}
              className='overflow-hidden rounded-lg border border-purple-700'
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className='flex w-full items-center justify-between p-4 hover:bg-purple-700/30'
              >
                <span className='font-medium'>{category.category}</span>
                <FaChevronDown
                  className={cn(
                    'transform transition-transform',
                    expandedCategories.has(category.id) && 'rotate-180'
                  )}
                />
              </button>
              {expandedCategories.has(category.id) && (
                <div className='p-4 pt-0'>
                  {category.items.map((item) => (
                    <label
                      key={item.id}
                      className='flex cursor-pointer items-center space-x-3 py-2'
                    >
                      <input
                        type='checkbox'
                        checked={item.checked}
                        onChange={() => toggleItem(category.id, item.id)}
                        className='hidden'
                      />
                      <div
                        className={cn(
                          'flex h-5 w-5 items-center justify-center rounded border-2',
                          item.checked
                            ? 'border-purple-600 bg-purple-600'
                            : 'border-purple-400'
                        )}
                      >
                        {item.checked && (
                          <FaCheck className='text-sm text-white' />
                        )}
                      </div>
                      <span
                        className={
                          item.checked ? 'text-gray-400 line-through' : ''
                        }
                      >
                        {item.text}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Insurance Comparison */}
      <div className='rounded-xl bg-purple-800/30 p-6'>
        <h2 className='mb-4 text-xl font-semibold'>Insurance Options</h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          {insuranceOptions.map((option, index) => (
            <div
              key={index}
              className='rounded-lg bg-purple-700/30 p-4 transition-colors hover:bg-purple-700/40'
            >
              <h3 className='mb-2 font-semibold'>{option.provider}</h3>
              <p className='mb-2 text-sm text-gray-300'>{option.coverage}</p>
              <div className='flex items-center justify-between'>
                <span className='text-lg font-bold'>${option.price}</span>
                <div className='flex items-center'>
                  <span className='mr-1 text-yellow-400'>★</span>
                  <span className='text-sm'>{option.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;
