export const Transaction = ({ transaction }) => {


  return (
    <div>
      {`${transaction.fromUser.name} sent ${transaction.toUser.name} $${transaction.amount}`}    
    </div>
  )
}