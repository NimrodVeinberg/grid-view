import { FunctionalComponent } from 'preact';
import './style.css'
import DivideButton from '../DivideButton/DivideButton';
import { useEffect, useState } from 'preact/hooks';

export type GridContainerProps = {
  gridRootContainer: boolean;
  divideColumn: (key: string) => void;
  divideRow: (key: string) => void;
  initialColumns: (key: string) => void;
  initialRows: (key: string) => void;
  rows: {};
  columns: {};
}

const GridContainer: FunctionalComponent<GridContainerProps> = (props: GridContainerProps) => {
  const [key,] = useState<string>(Date.now().toString());

  useEffect(() => {
    props.initialColumns(key);
    props.initialRows(key);
  }, [])

  return (
    <div key={key}
      className="grid-container" style={{ display: "flex", height: "100%", position: "relative" }}>
      <DivideButton buttonStyle={{ top: 0, left: "50%" }} text="Add column" callback={() => props.divideColumn(key)} />
      <DivideButton buttonStyle={{ top: "50%", left: 0 }} text="Add row" callback={() => props.divideRow(key)} />
      <div
        className="grid-sub-item" style={{ flex: 1, backgroundColor: "red" }}>
      </div >
      {/* {props.gridRootContainer && <div className="grid-sub-item" style={{ flex: 1, backgroundColor: "blue" }}>{"asda"}</div>} */}
    </div >
  )
}

export default GridContainer;