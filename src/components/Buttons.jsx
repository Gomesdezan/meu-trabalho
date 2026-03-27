export default function Buttons(props){
    return(
        <button onClick={props.funcao}>
            {props.btnText}
        </button>
    )
}