import { useCallback, useEffect, useState } from 'react'

function useCreateModal(modalId) {
    const [modalState, setModalState] = useState(false)
    const openModalFunction = useCallback(() => {
        setModalState(true)
    }, [])
    const closeModalFunction = useCallback(() => {
        setModalState(false)
    }, [])
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalState && !event.target.closest('#' + modalId)) {
                closeModalFunction();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [modalState]);

    return [modalState, openModalFunction, closeModalFunction]
}

export default useCreateModal
