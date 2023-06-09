import React, { Fragment } from 'react'
import ProjectManagerProfileUpdate from "../../components/projectManager/ProjectManagerProfileUpdate"
import { setProjectManager } from "../../store/slices/ProjectManagerSlice";
import { useSelector } from 'react-redux';
import Profile from '../../components/common/Profile';

function ProjectManagerProfileBody() {
  const projectManager = useSelector((state) => state.projectManager.value);

    return (
        <Fragment>
            <Profile individual={projectManager} setIndividual={setProjectManager} UpdateProfileElement={ProjectManagerProfileUpdate}/>
        </Fragment>
    )
}

export default ProjectManagerProfileBody