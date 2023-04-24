import './body.css'

function Kankan({objectOfArrays,Div,setObjectOfArrays,dataBaseFunction,addButton}) {
    
console.log(objectOfArrays);

    let dragStartIndex=undefined
    let dragEnterIndex=undefined

    const onDragOver = (e) => {
        e.preventDefault()
    }

    const onDragStart = (e,index, startColumn) => {
        e.dataTransfer.setData("startColumn", startColumn)
        dragStartIndex=index
        console.log(index,startColumn);
    }
    
    const onDragEnter = (e, index) => {
        e.preventDefault()
        dragEnterIndex=index
        console.log(index);
    }

    const onDrop = (e, endColumn) => {
        e.preventDefault()
        const startColumn=e.dataTransfer.getData("startColumn")
        console.log(dragEnterIndex,startColumn);
        const item=objectOfArrays[startColumn][dragStartIndex]
        const itemId=objectOfArrays[startColumn][dragStartIndex]._id
        
        if(startColumn===endColumn){
            if(dragEnterIndex===undefined){
                dragEnterIndex=objectOfArrays[endColumn].length-1
                
            }
            
            if(dragEnterIndex>=dragStartIndex){
                objectOfArrays[endColumn].splice(dragEnterIndex+1,0,item)
                objectOfArrays[startColumn].splice(dragStartIndex,1)
                dataBaseFunction(startColumn,dragStartIndex,objectOfArrays[startColumn][dragStartIndex]._id,endColumn,dragEnterIndex)
            }
            else{
                objectOfArrays[endColumn].splice(dragEnterIndex,0,item)
                objectOfArrays[startColumn].splice(dragStartIndex+1,1)
                dataBaseFunction(startColumn,dragStartIndex,itemId,endColumn,dragEnterIndex)
            }
        }
        else{
            if(dragEnterIndex===undefined){
                dragEnterIndex=objectOfArrays[endColumn].length
            }
            // item.category=endColumn
            
            objectOfArrays[endColumn].splice(dragEnterIndex,0,item)
            objectOfArrays[startColumn].splice(dragStartIndex,1)
            dataBaseFunction(startColumn,dragStartIndex,itemId,endColumn,dragEnterIndex)
        }
        setObjectOfArrays({...objectOfArrays})
        
    }
    

    return (
        <div className=" flex overflow-x-scroll scrollbar-hidden h-full">
          {
            Object.keys(objectOfArrays).map((key)=>{
              return(
                <div key={key} className="flex-shrink-0 w-72 pb-20 mr-3 overflow-y-scroll scrollbar-hidden"
                onDragOver={onDragOver}
                onDrop={
                    (e) => {
                        onDrop(e, key)
                    }}>
                <span className=" text-gray-300 px-3 font-bold">{key}</span>
                {addButton&&<Div element={<div className="text-center"><p className="font-extrabold text-xl">+</p></div>}/>}
                {
                objectOfArrays[key].map((element, index) => {
                    return ( 
                        <div
                        key={{index}}
                        draggable
                        onDragStart={
                            (e) => {
                                onDragStart(e, index, key)
                            }
                        }
                        onDragEnter={(e)=>{onDragEnter(e,index)}}>
                        <Div element={element.name?element.name:element._id}/>
                        </div>
                    )
                })
            }
            </div>
              )
              
            })
          }
        </div>
    )
}

export default Kankan