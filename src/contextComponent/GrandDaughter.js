import { useContext } from "react"
import { FamilyContext } from "./FamilyContext"

export default function GrandDaughter() {
    const info = useContext(FamilyContext);
    return (
        <div className="granddaughter">
        <div>{info.onlyForGrandChildren()}</div>
        </div>
    )
}