import { Podcast } from '../components/Podcast';
import { ToBegin } from '../components/ToBegin';
import { Who } from '../components/Who';

export default function Home() {
  return (
    <main>
      <Who />
      <Podcast />
      <ToBegin />
    </main>
  );
}
