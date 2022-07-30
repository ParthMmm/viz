import { useEffect, Fragment, useState, Dispatch, SetStateAction } from 'react';

type album = {
  name: string;
  playcount: number;
};

type options = {
  period: string;
  name: string;
};

type FilterProps = {
  timeFilter: options;
  setTimeFilter: Dispatch<
    SetStateAction<{
      period: string;
      name: string;
    }>
  >;
};

export type { album, options, FilterProps };
