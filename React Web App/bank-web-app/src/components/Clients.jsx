import React from 'react'
import {clients} from "../constants"
import styles from '../style'

const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4 sm:px-0 px-2`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[240px] min-w-[120px]`}>
            <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain hover:brightness-200'/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Client