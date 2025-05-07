import { useState } from "react";
import FormPage from './../ApplyForms/AnimatedFormPage'
import Btn from './../../components/Btns/SendForm/btn'
const Modal = ({trs}) => {
    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(!modal);
    }
    return (
        <>
            <Btn text={trs.btn2} url='/to-apply' func={openModal}/>
            {modal && <FormPage func={openModal} trs={trs}/>}
        </>
    )
}

export default Modal;