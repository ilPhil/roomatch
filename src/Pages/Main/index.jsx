import { useSelector } from "react-redux"


const Main = () => {
    const reduxStore = useSelector(state => state)

    return (
        <div>
            {console.log(reduxStore)}
        </div>
    )
}

export default Main