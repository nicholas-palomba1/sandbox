import React from "react";
import { User } from "../App"

interface Item {
    id: number;
}

interface DataGridProps<T> {
    //  Do NOT use any 
    items: T[]
}

function DataGrid <T extends Item>({items}: DataGridProps<T>) {

    return(
        <div>
            <h2>DataGrid Example with Generic Types</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </div>
    )
}

export default DataGrid