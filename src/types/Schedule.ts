type Hours = Exclude<
  `${0 | 1 | 2}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`,
  `2${4 | 5 | 6 | 7 | 8 | 9}`
>;

type Minutes = `${0 | 1 | 2 | 3 | 4 | 5}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`;

type Timestamp = `${Hours}:${Minutes}`;

type Interval = { from: Timestamp; to: Timestamp };

type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type Schedule = Record<Day, Interval[]>;
