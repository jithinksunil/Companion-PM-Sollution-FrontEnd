import { Fragment, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import UpdateImage from "../../components/superUser/UpdateImage";
import { useSelector } from "react-redux";
import { setSuperUser } from "../../store/slices/SuperUserSice";
import SuperUserTokenCheck from "../../customHooks/SuperUserTokenCheck";
import './customizedModal.css'
import ProfileUpdate from "./ProfileUpdate";
import Membership from "./Membership";


function SuperUserProfileBody() {
  const [openUpdateImage, setOpenUpdateImage] = useState(false);
  const [openUpdateProfile, setOpenUpdateProfile] = useState(false);
  const [openMembership, setOpenMembership] = useState(false);
  const superUser = useSelector((state) => state.superUser.value);
  const onOpenUpdateImage = () => setOpenUpdateImage(true);
  const onCloseUpdateImage = () => setOpenUpdateImage(false);
  const onOpenUpdateProfile = () => setOpenUpdateProfile(true);
  const onCloseUpdateProfile = () => setOpenUpdateProfile(false);
  const onOpenMembership = () => setOpenMembership(true);
  const onCloseMembership = () => setOpenMembership(false);

  SuperUserTokenCheck("/profile", setSuperUser);
  return (
    <Fragment>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <main className="profile-page">
        <section className="relative block h-64 "></section>
        <section className="relative pt-16 pb-6 rounded-xl bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className=" lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="-mt-20">
                      <img
                        src={`${superUser?.image}`}
                        alt="sdfsd"
                        className=" mb-3 shadow-xl rounded-full h-40  border-none"
                      />
                      <p
                        className="cursor-pointer text-black text-center border border-black rounded-lg py-3/4"
                        onClick={onOpenUpdateImage}
                      >
                        Update Image
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 text-center md:text-right">
                    <div className="py-6 px-3 ">
                      <button
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={onOpenUpdateProfile}
                      >
                        Update Profile
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Site Engineers
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Project Mangers
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                    {superUser?.name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <button
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={onOpenMembership}
                      >
                        Membership-{superUser?.membership}
                      </button>
                    {superUser?.place}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    {superUser?.email}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a href="#pablo" className="font-normal text-pink-500">
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Modal open={openUpdateImage}
       onClose={onCloseUpdateImage} 
       center
       showCloseIcon={false}
       classNames={{
        overlay: 'customOverlay',
        modal: 'customModal',
      }}>
        <UpdateImage />
      </Modal>
      <Modal
       open={openUpdateProfile}
        onClose={onCloseUpdateProfile}
         center
         showCloseIcon={false}
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}>
        <ProfileUpdate/>
      </Modal>
      <Modal
       open={openMembership}
        onClose={onCloseMembership}
         center
         showCloseIcon={false}
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}>
          <Membership superUser={superUser}/>
      </Modal>
    </Fragment>
  );
}

export default SuperUserProfileBody;
