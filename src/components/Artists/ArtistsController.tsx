// import { useState } from 'react';
// import PeriodFilter from '../Filters/PeriodFilter';
// import LimitFilter from '../Filters/LimitFilter';
// import Artists from './Artists';

// type Props = {};

// function ArtistsController({}: Props) {
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

//       <Artists timeFilter={timeFilter} limitFilter={limitFilter} />
//     </div>
//   );
// }

// export default ArtistsController;
