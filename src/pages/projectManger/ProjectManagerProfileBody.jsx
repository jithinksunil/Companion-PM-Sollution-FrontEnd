import React, { Fragment } from 'react'
import ProjectManagerProfileUpdate from "../../components/projectManager/ProjectManagerProfileUpdate"
import { setProjectManager } from "../../store/slices/ProjectManagerSlice";
import { useSelector } from 'react-redux';
import Profile from '../../components/common/Profile';
import updateImageApi from '../../api/projectManager/updateImageApi';
import UpdateImage from '../../customHooks/common/UpdateImage';

function ProjectManagerProfileBody() {
  const projectManager = useSelector((state) => state.projectManager.value);
  const UpdateImageElement=UpdateImage(updateImageApi,projectManager,setProjectManager)

    return (
        <Fragment>
            <Profile individual={projectManager} setIndividual={setProjectManager} UpdateProfileElement={ProjectManagerProfileUpdate} UpdateImageElement={UpdateImageElement}/>
        </Fragment>
    )
}

export default ProjectManagerProfileBody