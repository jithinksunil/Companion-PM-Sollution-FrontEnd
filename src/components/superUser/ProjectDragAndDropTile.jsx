import React from "react"

function ProjectDragAndDropTile({ element }) {
    return (
        <div className="px-3 my-1 py-2 rounded bg-gray-800">
            <p className="text-white font-semibold">
                {element}</p>
        </div>
    )
}
export default React.memo(ProjectDragAndDropTile)