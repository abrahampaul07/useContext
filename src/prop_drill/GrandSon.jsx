export default function GrandSon(props) {
    return (
        <>
        <div className="grandson">{props.info.onlyForGrandChildren()}</div>
        </>
    )
}