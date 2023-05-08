import React from "react";

// Details
// Shipping
// Payment
// type CheckoutStep = "Details" | "Shipping" | "Payment"
enum CheckoutStep {
    Details = "Details",
    Shipping = "Shipping",
    Payment = "Payment", 
}

const EnumsEx = () => {
    const [checkoutStep, setCheckoutStep] = React.useState<CheckoutStep>(CheckoutStep.Details)

    return (
        <div>
            {checkoutStep === "Details" && 
            <div>
            <h1>Details</h1>
            <button type="button" onClick={()=>setCheckoutStep(CheckoutStep.Shipping)}>Next</button>
            </div>
            }

            {checkoutStep === "Shipping" && 
            <div>
            <h1>Shipping</h1>
            <button type="button" onClick={()=>setCheckoutStep(CheckoutStep.Payment)}>Next</button>
            </div>
            }

            {checkoutStep === "Payment" && 
            <div>
            <h1>Payment</h1>
            {/* <button type="button" onClick={()=>setCheckoutStep("Shipping")}></button> */}
            </div>
            }

        </div>
    )
}

export default EnumsEx