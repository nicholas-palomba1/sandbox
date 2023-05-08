import React from "react"

interface AppProps { //sort of like declaring an object, you must define what type of variable your working with
    headerText: string; 
    extraText?: string; // question mark makes it opitional 
  }

const PropsTest = ({ headerText, extraText }: AppProps) => {

    return (
        <div>
            <h1>{headerText}</h1>
            <p>{extraText}</p>
        </div>
    )
}

export default PropsTest;