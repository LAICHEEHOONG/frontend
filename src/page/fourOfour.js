import React, {useEffect} from "react";
import { checkDataStatusAndTargetGroup } from "../util/tool";

const FourOFour = () => {
    useEffect(() => {
        checkDataStatusAndTargetGroup();
    }, [])

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
        </div>
    )
}

export default FourOFour;