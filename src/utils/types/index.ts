import { useEffect, Fragment, useState, Dispatch, SetStateAction } from 'react';

export type album = {
  name: string;
  playcount: number;
};

export type options = {
  period: string;
  name: string;
};

export type PeriodFilterProps = {
  timeFilter: options;
  setTimeFilter: Dispatch<
    SetStateAction<{
      period: string;
      name: string;
    }>
  >;
};

export type LimitFilterProps = {
  limitFilter: number;
  setLimitFilter: Dispatch<SetStateAction<number>>;
};

export type AlbumFilterProps = {
  timeFilter: options;
  limitFilter: number;
};
