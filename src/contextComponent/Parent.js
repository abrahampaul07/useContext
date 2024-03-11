import { useContext } from "react";
import Child from "./Child";
import { FamilyContext } from "./FamilyContext";

export default function Parent() {
    const info = useContext(FamilyContext);
    return (
        <div className="parent">
        <div>{info.onlyForParents()}</div>
        <Child />
        </div>
    )
}