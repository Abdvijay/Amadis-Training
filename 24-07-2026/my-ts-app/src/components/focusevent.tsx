import { useState } from "react";
import "../App.css";

function FocusEvent(){

    const [isFocused, setIsFocused] = useState(false);
    const handleOnFocus = () => {
        setIsFocused(true);
        console.log("Focus Event Triggered !!!");
    }
    
    const handleOnBlur = () => {
        setIsFocused(false);
        console.log("onBlur Event Triggered !!!");
    }

    return(
        <>
            Enter input :   <input id="glitter" 
                                 className={`glitter ${isFocused ? ':focus' : ''}`} 
                                 onFocus={handleOnFocus}
                                 onBlur={handleOnBlur} 
                            />
        </>
    )
}

export default FocusEvent;