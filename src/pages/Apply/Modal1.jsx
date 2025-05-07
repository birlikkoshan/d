import { useState } from "react";
import FormPage from './../ApplyForms/list'
import Btn from './../../components/Btns/SendForm/btn'
const Modal = ({trs, lang}) => {
    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(!modal);
    }
    return (
        <>
            <Btn text={trs.btn1} url='/to-apply' func={openModal}/>
            {modal && <FormPage func={openModal} trs={trs} lang={lang}/>}
        </>
    )
}

export default Modal;