import React from 'react';
import './OfferModal.css'
import useOffer from '../../hooks/useOffer';
const OfferModal = ({ setOpenModal }) => {


    const [offers] = useOffer()

    return (
        <div className=' pt-24'>
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button
                            onClick={() => {
                                setOpenModal(false);
                            }}
                        >
                            X
                        </button>
                    </div>

                    {
                        offers.slice(0, 1).map(offer => <div offer={offer}>
                            <div className="title">
                                <h1>{offer.offerTitle}</h1>
                            </div>
                            <div className="body">
                                <p>{offer.offerDetails}</p>
                            </div>
                        </div>)
                    }


                    <div className="footer">
                        <button
                            onClick={() => {
                                setOpenModal(false);
                            }}
                            id="cancelBtn"
                        >
                            Cancel
                        </button>
                        <button>Continue</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OfferModal;