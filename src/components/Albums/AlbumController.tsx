// import { useState } from 'react';
// import Albums from './Albums';
// import PeriodFilter from '../Filters/PeriodFilter';
// import LimitFilter from '../Filters/LimitFilter';

// type Props = {};

// function AlbumController({}: Props) {
//   const [timeFilter, setTimeFilter] = useState({
//     period: 'overall',
//     name: 'all time',
//   });

//   const [limitFilter, setLimitFilter] = useState(5);

//   return (
//     <div className='w-full'>
//       <div className='flex flex-row'>
//         {' '}
//         <PeriodFilter timeFilter={timeFilter} setTimeFilter={setTimeFilter} />
//         <LimitFilter
//           limitFilter={limitFilter}
//           setLimitFilter={setLimitFilter}
//         />
//       </div>

//       <Albums timeFilter={timeFilter} limitFilter={limitFilter} />
//     </div>
//   );
// }

// export default AlbumController;
