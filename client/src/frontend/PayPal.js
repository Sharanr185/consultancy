import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";

export default function PayPal() {
    return (
        <center>
            <PayPalScriptProvider options={{ "client-id": "AQ5xIU0-_Sb5PugzetoiCyJJSSrmu0g63mq_-1CEdfmRrboZtbG4DQEitVReVykbnrRkvgs34OZdUXbK",
                "currency_code": "USD"
             }}>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        "value": "220.00"
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={async (data, actions) => {
                        const details = await actions.order.capture();
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    }}
                />
            </PayPalScriptProvider>
        </center>
    )
}
        /*<PayPalButton
        amount="0.01"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderId: data.orderID
            })
          });
        }}
        options={{
          clientId: "AQ5xIU0-_Sb5PugzetoiCyJJSSrmu0g63mq_-1CEdfmRrboZtbG4DQEitVReVykbnrRkvgs34OZdUXbK",
          currency: "USD",
        }}
      />*/
      /*export default function App() {
        const [state, setState] = useState(0);
        return (
          <div>
            <input
              type="number"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <PayPalButton
              options={{
                clientId: "AQ5xIU0-_Sb5PugzetoiCyJJSSrmu0g63mq_-1CEdfmRrboZtbG4DQEitVReVykbnrRkvgs34OZdUXbK",
                currency: "USD",
              }}
              amount={state}
              onSuccess={(details, data) => {
                alert("Transaction completed by " + details.payer.name.given_name);
      
                console.log({ details, data });
              }}
            />
          </div>
        );
      }*/