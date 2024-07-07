import React from 'react'

const OrderDetails = () => {
  return (
    <div>
        <div>
            <h1>Order Details</h1>

            <div>
                <h5>
                    Shipping
                </h5>
                <p>
                    <b>Address</b>
                    <p>{'nagpur'}</p>
                </p>
            </div>

            <div>
                <h5>
                    Contact
                </h5>
                <p>
                    <b>Name</b>
                    <p>{'Adnan'}</p>
                </p>
                <p>
                    <b>phone</b>
                    <p>{8319682557}</p>
                </p>
            </div>

            <div>
                <h5>
                    Status
                </h5>
                <p>
                    <b>Order Status</b>
                    <p>{'processing'}</p>
                </p>
                <p>
                    <b>Place at</b>
                    <p>{'22 may'}</p>
                </p>
                <p>
                    <b>Delivered at</b>
                    <p>{'22 may'}</p>
                </p>
            </div>

            <div>
                <h5>
                    Payment
                </h5>
                <p>
                    <b>Payment Method</b>
                    <p>{'online'}</p>
                </p>
                <p>
                    <b>Payment reference</b>
                    <p>{'54634572365'}</p>
                </p>
                <p>
                    <b>Paid at</b>
                    <p>{'22 may'}</p>
                </p>
            </div>

            <div>
                <h5>
                    Amount
                </h5>
                <p>
                    <b>items total</b>
                    <p>{2132}</p>
                </p>
                <p>
                    <b> Shipping charges</b>
                    <p>{22}</p>
                </p>
                <p>
                    <b>tax</b>
                    <p>{21}</p>
                </p>
                <p>
                    <b>total Amount</b>
                    <p>{2175}</p>
                </p>
            </div>
        </div>
    </div>
  )
}

export default OrderDetails