import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default function Payment() {

    const onToken = (token) => {
        console.log(token);
    };

  return (
    <div>
      <StripeCheckout
        token={onToken}
        name='ARAVINDH'
        currency='Inr'
        amount='50000'
        stripeKey="pk_test_51NquMqSBBUua4Px8Qzr7DeyDtiJV5n7Mq4BoqSzBg09swvu12w4KRIAYBoif5aLSyezXxDLRW7bk2WlAytRnlimX00huNNFNGk"
      /> <br/><br />
      <a href="/movie"><button type='submit'>Back</button></a>
    </div>
  )
}
