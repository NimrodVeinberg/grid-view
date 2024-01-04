import { useContext, useEffect, useRef } from 'preact/hooks';
import './style.css';
import { GridContext } from '../../context/gridContext';
import RowItem from '../RowItem/RowItem';

const GridLayout = () => {
  const gridRootContainer = useRef<boolean>(true);

  const { columns, setColumns, rows, setRows } = useContext(GridContext);

  useEffect(() => {
    setRows(["test1", "test2", "test3", "test4"])
  }, [])

  return (
    <div className="grid-layout">
        {
            Array.isArray(rows)
            ? rows.map(row => (<RowItem style={{
                width: "100%",
                height: `${100 / rows.length}%`,
            }} key={row} />))
            : <RowItem style={{
                width: "100%",
                height: "100%"
            }} />
        }
    </div>
  );
};

export default GridLayout;
