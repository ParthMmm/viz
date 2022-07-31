import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { PeriodFilterProps, options } from '../../utils/types';

const options: options[] = [
  { period: 'overall', name: 'all time' },
  { period: '7day', name: 'last week' },
  { period: '1month', name: '1 month' },
  { period: '3month', name: '3 months' },
  { period: '6month', name: '6 months' },
  { period: '12month', name: '12 months' },
];
function PeriodFilter({ timeFilter, setTimeFilter }: PeriodFilterProps) {
  return (
    <div className='w-1/4'>
      <Listbox value={timeFilter} onChange={setTimeFilter}>
        <div className='relative mt-1 '>
          <Listbox.Button className='relative w-3/4  cursor-default rounded-lg text-purple-200 py-2 pl-3 pr-10 text-left shadow-md sm:text-sm'>
            <span className='block truncate font-bold'>{timeFilter.name}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <SelectorIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-3/4 overflow-auto rounded-md bg-gblack py-1 text-base  shadow-lg  focus:outline-none sm:text-sm'>
              {options.map((option) => (
                <Listbox.Option
                  key={option.period}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-3 pr-10 rounded-sm transition-colors  ${
                      active ? 'bg-purple-100 text-black' : 'text-white'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-bold' : 'font-normal'
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 right-0 flex items-center pr-4 text-purple-600'>
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default PeriodFilter;
