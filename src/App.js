import { useState } from "react";
import styles from "./app.module.scss";
function App() {
  const genIndices = (from, to, increment) => {
    let arr = [];
    for (let i = 0; i <= (to - from) / increment; i++) {
      arr.push(from + i * increment);
    }
    return arr;
  };
  const values = genIndices(0, 100, 1);

  // const [value, setValue] = useState(0);
  const [index, setIndex] = useState(0);
  return (
    <div className={`${styles.contentC}`}>
      <div className={`${styles.trackC}`}>
        <div className={`${styles.track}`} style={{ width: `${index}%` }}></div>
      </div>
      <input
        className={`${styles.input}`}
        type="range"
        min={0}
        max={100}
        value={index}
        onChange={(e) => setIndex(e.target.value)}
      />
      <div className={`${styles.tooltipC}`}>
        <div
          className={`${styles.arrow}`}
          style={{
            left: `calc(${(index * 100) / (values.length - 1)}% - 4px)`,
          }}
        ></div>
        <div
          className={`${styles.tooltip}`}
          style={{
            left: `calc(${(index * 100) / (values.length - 1)}% - 28px)`,
          }}
        >
          <div
            className={`${styles.valC}`}
            style={{
              left: `calc(50% - 15px - (24px + 4px) * ${Math.floor(index)})`,
            }}
          >
            {values.map((val) => (
              <div key={val}>{val}</div>
            ))}
          </div>
          <div className={`${styles.fadeLeft}`}></div>
          <div className={`${styles.fadeRight}`}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
