import React, { useState } from 'react'
import useSuperUserTokenCheck from '../../customHooks/useSuperUserTokenCheck'
import Kankan from '../../components/common/Kankan'
function SuperUserSiteEngineersAssignmentBody() {
    const [data, setData] = useState({})
    useSuperUserTokenCheck('/siteengineerlist',setData)
  return (
    <div>
    <Kankan
    setData={setData}
    Div={ProjectDragAndDropTile}
    objectOfArrays={data}
    dataBaseFunction={siteEngineerAssignment}
    />
    </div>
  )
}
import ProjectDragAndDropTile from '../../components/superUser/ProjectDragAndDropTile'
import { siteEngineerAssignment } from '../../api/superUser/siteEngineerAssignmentBody'

export default SuperUserSiteEngineersAssignmentBody
