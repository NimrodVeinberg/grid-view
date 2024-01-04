import { FunctionalComponent } from 'preact';
import './style.css'

export type ColumnItemProps = {

}

const ColumnItem: FunctionalComponent<ColumnItemProps> = (props: ColumnItemProps) => {

    return (
        <div className="column-item">
            <input type="text" />

        </div >
    )
}

export default ColumnItem;