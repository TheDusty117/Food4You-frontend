<template>
    <div class="container">
        <!-- Form inputs for card details -->
        <div class="form-group col-3 mt-5">
            <input type="text" class="form-control" v-model="cardNumber" placeholder="Numero Carta xxxxxxxxxxxxxxxx"
                @focus="resetValidation('cardNumber')" />
            <p v-show="validationErrors.cardNumber" class="text-danger">Invalid card number</p>
        </div>

        <div class="form-group col-3 mt-1">
            <input type="text" class="form-control" v-model="cardName" placeholder="Intestatario Carta"
                @focus="resetValidation('cardName')" />
            <p v-show="validationErrors.cardName" class="text-danger">Invalid cardholder name</p>
        </div>

        <div class="form-group col-3 mt-1">
            <input type="text" class="form-control" v-model="cardExpiry" placeholder="Data di scadenza xx/xx"
                @focus="resetValidation('cardExpiry')" />
            <p v-show="validationErrors.cardExpiry" class="text-danger">Invalid expiry date</p>
        </div>

        <div class="form-group col-3 mt-1">
            <input type="text" class="form-control" v-model="cardCVC" placeholder="CVC"
                @focus="resetValidation('cardCVC')" />
            <p v-show="validationErrors.cardCVC" class="text-danger">Invalid CVC</p>
        </div>

        <!-- Submit button -->
        <button class="btn btn-primary my-4" @click="processPayment">Paga Ora</button>

        <!-- Payment status message -->
        <p v-if="paymentStatus === 'completed'" class="text-success">Pagamento completato</p>

        <!-- Go to order summary button -->
        <button v-if="paymentStatus === 'completed'" class="btn btn-primary" @click="goToOrderSummary">Vai al riepilogo
            dell'ordine</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            cardNumber: '',
            cardName: '',
            cardExpiry: '',
            cardCVC: '',
            paymentStatus: '',
            validationErrors: {
                cardNumber: false,
                cardName: false,
                cardExpiry: false,
                cardCVC: false
            }
        };
    },
    methods: {
        processPayment() {
            // Validate card details
            if (this.validateCardDetails()) {
                // All card details are valid
                this.paymentStatus = 'completed';
            } else {
                // Invalid card details
                this.paymentStatus = 'invalid';
            }
        },
        validateCardDetails() {
            // Reset validation errors
            this.validationErrors = {
                cardNumber: false,
                cardName: false,
                cardExpiry: false,
                cardCVC: false
            };

            // Implement card details validation logic here
            // Set validationErrors to true for invalid fields

            // Example card number validation: Check if it contains exactly 16 digits
            if (this.cardNumber.length !== 16 || !/^\d+$/.test(this.cardNumber)) {
                this.validationErrors.cardNumber = true;
            }

            // Example cardholder name validation: Check if it contains at least 3 characters
            if (this.cardName.length < 3) {
                this.validationErrors.cardName = true;
            }

            // Example expiry date validation: Check if it is in MM/YY format
            if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(this.cardExpiry)) {
                this.validationErrors.cardExpiry = true;
            }

            // Example CVC validation: Check if it contains exactly 3 digits
            if (this.cardCVC.length !== 3 || !/^\d+$/.test(this.cardCVC)) {
                this.validationErrors.cardCVC = true;
            }

            // Check if there are any validation errors
            for (const field in this.validationErrors) {
                if (this.validationErrors[field]) {
                    return false; // Validation failed
                }
            }

            return true; // Validation passed
        },
        goToOrderSummary() {
            // Redirect to order summary page or perform any desired action
            console.log('Go to order summary');
        },
        resetValidation(field) {
            // Reset validation error for the specified field
            this.validationErrors[field] = false;
        }
    }
};
</script>
  
<style>
/* Custom styles */
</style>
  