import { FunctionalComponent } from 'preact';
import './style.css'
import { CSSProperties } from 'preact/compat';

export type RowItemProps = {
    style?: CSSProperties
}

const RowItem: FunctionalComponent<RowItemProps> = (props: RowItemProps) => {

    // useEffect(() => {

    // }, [])

    return (
        <div style={props.style} className="row-item">
            {/* <input type="text" /> */}
        </div >
    )
}

export default RowItem;