import React from 'react'

const ConfirmOrder = () => {
  return (
    <div>
        <h1>Confirm Your Order</h1>

        <div>
            <form >
                <div>
                    <label > Cash on Delivery</label>
                    <input type="radio" value="cod" name='payment' />
                </div>

                <div>
                    <label > Pay online</label>
                    <input type="radio" value="online" name='payment' />
                </div>

                <div>
                    <a class="btn btn-primary btn-sm " href="#" role="button"> place order </a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ConfirmOrder