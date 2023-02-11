import { schedule } from '@/business/schedule';
import { concatBelowZero } from './concat-below-zero';

export function isBetweenInterval(day: number, hours: number, minutes: number): boolean {
  const intervals = schedule[day as keyof typeof schedule];

  let isBetween: boolean = false;

  const time = Number(`${concatBelowZero(hours)}${concatBelowZero(minutes)}`);

  for (const interval of intervals) {
    const from = Number(interval.from.replace(':', ''));
    const to = Number(interval.to.replace(':', ''));    

    if (from <= time && time <= to) {
      isBetween = true;

      break;
    }
  }

  return isBetween;
}
