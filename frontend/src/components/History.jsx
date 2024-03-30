import React from 'react'
import '../styles/history.scss'
import { useGlobalContext } from '../context/globalContext'

const History = () => {
  const {transactionHistory} = useGlobalContext();
  const [...history] = transactionHistory();

  return (
    <div className='history-component'>
      <h2>Recent History</h2>
      {history.map(item=> {
        const {_id, title, amount, type} = item;
        return (
          <div key={_id} className="history-item">
            <p
              style={{
                color: type === 'expense' ? 'red' : 'var(--color-green)'
              }}
            >
              {title}
            </p>
            <p
              style={{
                color: type === 'expense' ? 'red' : 'var(--color-green)'
              }}
            >
              {
                type ==='expense' ? `-${amount}` : `+${amount}`
              }
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default History