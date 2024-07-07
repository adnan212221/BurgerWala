import React from 'react'
import {Country, State} from 'country-state-city'

const Checkout = () => {
  return (
    <>
    <div>
      <form >
        <div>
          <label >
            H.NO
          </label>
          <input type="text" name="house" id="house" placeholder='house no.' />
        </div>
        <div>
          <label >
            Country
          </label>
          <select  id="country">
            <option value="">Country</option>
            {
              Country && Country.getAllCountries().map((i)=>(
                <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
              ))
            }
          </select>
        </div>
        <div>
          <label >
            state
          </label>
          <select  id="state">
            <option value="">state</option>
            {
              State && State.getStatesOfCountry('IN').map((i)=>(
                <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
              ))
            }
          </select>
        </div>
        <div>
          <label >
            Pincode
          </label>
          <input type="text" name="pincode" id="pincode" placeholder='pincode' />
        </div>
        <div>
          <label >
            phone no
          </label>
          <input type="text" name="phone" id="phone" placeholder='enter phone' />
        </div>
        <div>
          <button type='submit' className='btn'>Confirm Button</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Checkout