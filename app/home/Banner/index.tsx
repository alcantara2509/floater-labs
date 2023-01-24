import { memo } from 'react';
import './styles.css';

function Banner() {
  return (
    <div className="banner-wrapper">
      <div className="banner-image">
        {/* <h1>título chamativo</h1>
        <p>meu parágrafo chamativo legal demais</p>
        <button type="button">call to action</button> */}
      </div>
    </div>
  );
}

export default memo(Banner);
