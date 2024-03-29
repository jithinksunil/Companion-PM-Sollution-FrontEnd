import React, { useState } from 'react';
import './body.css'
import CenterModalContaier from './CenterModalContaier';

function Kankan({ heading,tileHeading, objectOfArrays, Div, dataBaseFunction, addButton, addButtonModalComponent, setAddButtonColumn }) {

    const [movingItem, setMovingItem] = useState({})

    let dragStartIndex = undefined
    let dragEnterIndex = undefined

    const onDragOver = (e) => {
        e.preventDefault()
    }

    const onDragStart = (e, index, startColumn, item) => {
        setMovingItem(item)
        e.dataTransfer.setData("startColumn", startColumn)
        dragStartIndex = index
        console.log(index, startColumn);
    }

    const onDragEnter = (e, index) => {
        e.preventDefault()
        dragEnterIndex = index
        console.log(index);
    }

    const onDrop = (e, endColumn) => {
        e.preventDefault()
        const startColumn = e.dataTransfer.getData("startColumn")
        console.log(dragEnterIndex, startColumn);

        if (startColumn === endColumn) {
            if (dragEnterIndex === undefined) {
                dragEnterIndex = objectOfArrays[endColumn].length - 1
            }

            if (dragEnterIndex >= dragStartIndex) {
                objectOfArrays[endColumn].splice(dragEnterIndex + 1, 0, movingItem)
                objectOfArrays[startColumn].splice(dragStartIndex, 1)
                dataBaseFunction(startColumn, dragStartIndex, movingItem, endColumn, dragEnterIndex)
            }
            else {
                objectOfArrays[endColumn].splice(dragEnterIndex, 0, movingItem)
                objectOfArrays[startColumn].splice(dragStartIndex + 1, 1)
                dataBaseFunction(startColumn, dragStartIndex, movingItem, endColumn, dragEnterIndex)
            }
        }
        else {
            if (dragEnterIndex === undefined) {
                dragEnterIndex = objectOfArrays[endColumn].length
            }
            // item.category=endColumn

            objectOfArrays[endColumn].splice(dragEnterIndex, 0, movingItem)
            objectOfArrays[startColumn].splice(dragStartIndex, 1)
            dataBaseFunction(startColumn, dragStartIndex, movingItem, endColumn, dragEnterIndex)
        }

    }


    return (
        <div className=" flex overflow-x-scroll scrollbar-hidden h-full">
            {
                Object.keys(objectOfArrays).map((key) => {
                    return (
                        <div key={key} className="flex-shrink-0 w-72 pb-20 mr-3 overflow-y-scroll scrollbar-hidden"
                            onDragOver={onDragOver}
                            onDrop={
                                (e) => {
                                    onDrop(e, key)
                                }}>
                            <span className=" text-gray-300 px-3 font-bold">{heading? heading+':- ':''} {key}</span>
                            {addButton && <Div element={<div id={'clickHereToOpenModal' + key} onClick={() => { setAddButtonColumn(key) }} className="text-center cursor-pointer"><p className="font-extrabold text-xl">+</p></div>} />}
                            {
                                objectOfArrays[key].map((element, index) => {
                                    return (
                                        <div
                                            key={{ index }}
                                            draggable
                                            onDragStart={
                                                (e) => {
                                                    onDragStart(e, index, key, element)
                                                    console.log(element);
                                                }
                                            }
                                            onDragEnter={(e) => { onDragEnter(e, index) }}>
                                            <Div element={element.name ?tileHeading+':- '+ element.name :tileHeading+':- '+ element._id} />
                                        </div>
                                    )
                                })
                            }
                            <CenterModalContaier openModalButtonId={'clickHereToOpenModal' + key}>
                                {addButtonModalComponent}
                            </CenterModalContaier>
                        </div>
                    )

                })
            }

        </div>
    )
}

export default React.memo(Kankan)