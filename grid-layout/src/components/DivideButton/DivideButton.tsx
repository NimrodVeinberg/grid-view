import { FunctionalComponent } from 'preact';
import './style.css'

export type GridLayoutProps = {
  text: string;
  callback: () => void;
  buttonStyle?: any;
}

const DivideButton: FunctionalComponent<GridLayoutProps> = (props: GridLayoutProps) => {

  return (
    <>
      <div
        style={props.buttonStyle}
        className="divide-button" onClick={props.callback}>
        {props.text}
      </div >
    </>
  )
}

export default DivideButton;