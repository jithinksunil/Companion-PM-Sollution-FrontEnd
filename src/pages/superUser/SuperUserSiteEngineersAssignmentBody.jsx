import React from 'react'
import Kankan from '../../components/common/Kankan'
import ProjectDragAndDropTile from '../../components/superUser/ProjectDragAndDropTile'
import useFetchData from '../../customHooks/common/useFetchData'
import { fetchSiteEngineers } from '../../api/superUser/fetchSuperUserData'
import useDragAndDrop from '../../customHooks/common/useDragAndDrop'
import siteEngineerAssignmentApi from '../../api/superUser/siteEngineerAssignmentApi'

function SuperUserSiteEngineersAssignmentBody() {
  const [siteEngineers, setSiteEngineers] = useFetchData(fetchSiteEngineers,'/superUser/siteengineers','/',{})
  const siteEngineerAssignment=useDragAndDrop(siteEngineerAssignmentApi,setSiteEngineers)
  return (
    <div>
      <Kankan
        Div={ProjectDragAndDropTile}
        objectOfArrays={siteEngineers}
        dataBaseFunction={siteEngineerAssignment}
      />
    </div>
  )
}

export default SuperUserSiteEngineersAssignmentBody
