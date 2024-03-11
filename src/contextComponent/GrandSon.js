import { useContext } from "react"
import { FamilyContext } from "./FamilyContext"

export default function GrandSon() {
    const info = useContext(FamilyContext);
    return (
        <div className="grandson">
        <div>{info.onlyForGrandChildren()}</div>
        </div>
    )
}