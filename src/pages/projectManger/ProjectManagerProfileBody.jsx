import React, { Fragment, useMemo } from 'react'
import ProjectManagerProfileUpdate from "../../components/projectManager/ProjectManagerProfileUpdate"
import { setProjectManager } from "../../store/slices/ProjectManagerSlice";
import { useSelector } from 'react-redux';
import Profile from '../../components/common/Profile';
import updateImageApi from '../../api/projectManager/updateImageApi';
import updateImage from '../../hoc/UpdateImage';

function ProjectManagerProfileBody() {
  const projectManager = useSelector((state) => state.projectManager.value);
  const UpdateImageElement=useMemo(()=>updateImage(updateImageApi,projectManager,setProjectManager),[projectManager])

    return (
        <Fragment>
            <Profile individual={projectManager} setIndividual={setProjectManager} UpdateProfileElement={ProjectManagerProfileUpdate} UpdateImageElement={UpdateImageElement}/>
        </Fragment>
    )
}

export default React.memo(ProjectManagerProfileBody)