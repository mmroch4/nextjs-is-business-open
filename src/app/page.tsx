import { schedule } from '@/business/schedule';
import { isBetweenInterval } from '@/function/is-between-interval';
import styles from './page.module.css';

const daysOfTheWeek = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

export default function Home() {
  const now = new Date();

  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const isOpen = isBetweenInterval(day, hours, minutes);

  return (
    <main className={styles.container}>
      <h1 className={isOpen ? styles.open : styles.closed}>{isOpen ? 'Open' : 'Closed'}</h1>

      <table className={styles.schedule}>
        <thead>
          <tr>
            <th></th>

            <th></th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(schedule).map(([key, intervals], i) => {
            return (
              <tr key={key + Math.random()}>
                <td className={Number(key) === day ? styles.current_day : ''}>
                  {daysOfTheWeek[key as any]}
                </td>

                <td>
                  <ul>
                    {intervals.map((interval) => {
                      return (
                        <li key={i + Math.random()}>
                          {interval.from} - {interval.to}
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <footer className={styles.footer}>
        Feito por{' '}
        <a href="http://www.miguelrocha.dev/" target="_blank" rel="noopener noreferrer">
          Miguel Rocha
        </a>
      </footer>
    </main>
  );
}
