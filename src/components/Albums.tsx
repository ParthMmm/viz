type Props = {};
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { fetchTopAlbums } from '../utils/queries/fetchAlbums';
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
} from 'victory';
import { useEffect, useState } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';
import { CgCheck } from 'react-icons/cg';
type album = {
  name: string;
  playcount: number;
};

type timePeriod = {
  period: string;
  name: string;
};

const options: timePeriod[] = [
  { period: 'overall', name: 'all time' },
  { period: '7day', name: 'last week' },
  { period: '1month', name: '1 month' },
  { period: '3month', name: '3 months' },
  { period: '6month', name: '6 months' },
  { period: '12month', name: '12 months' },
];

function Albums({}: Props) {
  const queryClient = useQueryClient();
  const [filtered, setFiltered] = useState([]);
  const [timeFilter, setTimeFilter] = useState({
    period: 'overall',
    name: 'all time',
  });
  const { isLoading, isError, data, error } = useQuery(
    ['albums', timeFilter],
    () => fetchTopAlbums(5, 'parth_m', timeFilter?.period)
  );

  useEffect(() => {
    queryClient.invalidateQueries(['albums']);
    console.log('pog');
  }, [timeFilter]);

  if (isError) {
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(timeFilter);
  let res;

  if (data) {
    res = data.album.map((album: { name: any; playcount: any }) => {
      return {
        name: album.name,
        playcount: parseInt(album.playcount),
        // artist: album.artist.name,
      };
    });
  }

  const poop = [
    { name: 'a', playcount: 3 },
    { name: 'b', playcount: 2 },
    { name: 'c', playcount: 1 },
  ];

  //   console.log(res);
  //   console.log(poop);

  const chartTheme = {
    axis: {
      style: {
        tickLabels: { fill: 'white' },
        stroke: 'white',
        labels: {
          fill: 'red',
        },
      },
      grid: {
        stroke: 'white',
      },
    },
    bar: {
      style: {
        data: {
          fill: 'white',
          strokeWidth: 0,
          width: 20,
          //   padding: 40,
        },
        labels: {
          fill: 'green',
          padding: 5,
          fontSize: 12,
        },
      },
    },
    // width: 500,
  };

  //   const onChange = (x) => {
  //     console.log(x);
  //     setTimeFilter(x);
  //     // refetch;
  //     queryClient.invalidateQueries(['albums']);
  //   };

  return (
    <div className='text-white w-3/5  '>
      <div>
        <Listbox value={timeFilter} onChange={setTimeFilter}>
          {' '}
          <Listbox.Button>{timeFilter.name}</Listbox.Button>
          <Listbox.Options>
            {options.map((option) => (
              <Listbox.Option key={option.period} value={option}>
                {({ active, selected }) => (
                  <span
                    className={`${
                      active ? ' text-purple-400' : 'bg-none text-white'
                    } inline-block`}
                  >
                    {selected && <CheckIcon className='w-4 h-4' />}
                    {option.name}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <VictoryChart
        theme={chartTheme}
        padding={{ top: 20, bottom: 80, left: 240, right: 0 }}
        width={700}
        height={500}
        domainPadding={{ x: 10 }}
      >
        {/* <VictoryAxis /> */}
        <VictoryAxis dependentAxis />
        <VictoryAxis
          style={{
            // axis: { stroke: '#756f6a' },
            // axisLabel: { fontSize: 20, padding: 30 },
            // grid: { stroke: ({ tick }) => (tick > 0.5 ? 'red' : 'grey') },
            // ticks: { stroke: 'grey', size: 5 },
            tickLabels: { fontSize: 18, padding: 5 },
          }}
          //   fixLabelOverlap={true}
          tickCount={5}
          //   tickFormat={(t) => `${Math.round(t)}k`}
          //   width={600}
        />
        <VictoryBar
          horizontal
          data={res}
          x='name'
          y='playcount'
          sortKey='playcount'
          labels={({ datum }) => datum.playcount}
          labelComponent={<VictoryTooltip />}
          //   style={{ padding: { top: 10, bottom: 10 } }}
          //   width={5000}
          //   style={{
          //     labels: { fontSize: ({  }) => (text.length > 10 ? 8 : 12) },
          //   }}
          animate={{ duration: 2000, onLoad: { duration: 1000 } }}
        />
      </VictoryChart>
    </div>
  );
}

export default Albums;
