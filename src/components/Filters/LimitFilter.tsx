import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { LimitFilterProps } from '../../utils/types';

type Props = {};

const options: number[] = [5, 10, 25, 50, 100];

function LimitFilter({ limitFilter, setLimitFilter }: LimitFilterProps) {
  return (
    <div className='w-1/4'>
      <Listbox value={limitFilter} onChange={setLimitFilter}>
        <div className='relative mt-1 '>
          <Listbox.Button className='relative w-3/4  cursor-default rounded-lg py-2 pl-3 pr-10 text-left shadow-md sm:text-sm bg-gblack '>
            <span className='block truncate font-bold'>{limitFilter}</span>
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
                  key={option}
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
                        {option}
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

export default LimitFilter;
