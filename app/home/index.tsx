import { memo } from 'react';
import Banner from './Banner';
import Solutions from './Solutions';

function Home() {
  return (
    <div>
      <Banner />
      <Solutions />
    </div>
  );
}

export default memo(Home);
