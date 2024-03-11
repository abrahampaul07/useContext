import { useContext } from "react";
import { FamilyContext } from "./FamilyContext";
import GrandDaughter from "./GrandDaughter";
import GrandSon from "./GrandSon";

export default function Child() {
    const info = useContext(FamilyContext);
    return (
        <div className="child">
        <div>{info.onlyForChild()}</div>
        <GrandDaughter />
        <GrandSon />
        </div>
    )
}