import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';
import { Link } from 'react-router-dom';
import { MdLocalGroceryStore } from "react-icons/md";
import { useSelector } from 'react-redux';



export default function ModalPrice() {
    const [showModal, setShowModal] = useState(false);

    const cart = useSelector(state => state.cart)
    console.log(cart);
    

    return (
        <>

            <MdLocalGroceryStore onClick={() => setShowModal(!showModal)} onClose className="mx-5 relative text-2xl hover:text-amber-500" />
            <div className=" absolute top-4 end-48 bg-danger w-4 h-4 items-center d-flex justify-center rounded-circle text-lime-50 text-sm">
                <div>{cart.itemCart && cart.itemCart.length}</div>
            </div>

            {showModal && createPortal(
                <ModalContent onClose={() => setShowModal(false)} />,
                document.body
            )}
        </>
    );
}
