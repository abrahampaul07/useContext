import GrandDaughter from "./GrandDaughter";
import GrandSon from "./GrandSon";

export default function Child(props) {
    return (
        <div className="child">
        <div>{props.info.onlyForChild()}</div>
        <GrandDaughter info={props.info}/>
        <GrandSon info={props.info}/>
        </div>
    )
}