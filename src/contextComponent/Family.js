import Parent from "./Parent";
import { useContext } from "react";
import { FamilyContext } from "./FamilyContext";


export default function Family() {
    const info = useContext(FamilyContext);
    return (
        <div className="family">
            <h1>{info.familyName}: </h1>
            <Parent />
        </div>
    )
}