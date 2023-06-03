<template>
    <div class="container">
        <div class="card mt-4 mx-auto" style="max-width: 500px;">
            <div class="card-body">
                <h5 class="card-title">Inserisci i dati di pagamento</h5>

                <!-- Form inputs for card details -->
                <form @submit.prevent="processPayment">
                    <div class="form-group mt-2">
                        <input type="text" class="form-control" v-model="cardNumber"
                            placeholder="Numero Carta xxxxxxxxxxxxxxxx" @focus="resetValidation('cardNumber')"
                            :class="{ 'is-invalid': validationErrors.cardNumber }" required />
                        <div class="invalid-feedback">Numero carta non valido</div>
                    </div>

                    <div class="form-group mt-2">
                        <input type="text" class="form-control" v-model="cardName" placeholder="Intestatario Carta"
                            @focus="resetValidation('cardName')" :class="{ 'is-invalid': validationErrors.cardName }"
                            required />
                        <div class="invalid-feedback">Nome intestatario non valido</div>
                    </div>

                    <div class="form-group mt-2">
                        <input type="text" class="form-control" v-model="cardExpiry" placeholder="Data di scadenza xx/xx"
                            @focus="resetValidation('cardExpiry')" :class="{ 'is-invalid': validationErrors.cardExpiry }"
                            required />
                        <div class="invalid-feedback">Data di scadenza non valida</div>
                    </div>

                    <div class="form-group mt-2">
                        <input type="text" class="form-control" v-model="cardCVC" placeholder="CVC"
                            @focus="resetValidation('cardCVC')" :class="{ 'is-invalid': validationErrors.cardCVC }"
                            required />
                        <div class="invalid-feedback">CVC non valido</div>
                    </div>

                    <!-- Submit button -->
                    <button type="submit" class="btn btn-primary mt-3">Paga Ora</button>
                </form>
            </div>
        </div>

        <!-- Payment status message -->
        <p v-if="paymentStatus === 'completed'" class="text-success mt-3">Pagamento completato</p>

        <!-- Go to order summary button -->
        <button v-if="paymentStatus === 'completed'" class="btn btn-primary mt-3" @click="goToOrderSummary">Vai al riepilogo
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
            // Check if the form is valid
            if (this.validateForm()) {
                // All inputs are valid
                this.paymentStatus = 'completed';
            } else {
                // Invalid inputs
                this.paymentStatus = 'invalid';
            }
        },
        validateForm() {
            let isValid = true;
            this.validationErrors = {
                cardNumber: false,
                cardName: false,
                cardExpiry: false,
                cardCVC: false
            };

            if (this.cardNumber.length !== 16 || !/^\d+$/.test(this.cardNumber)) {
                this.validationErrors.cardNumber = true;
                isValid = false;
            }

            if (this.cardName.length < 3) {
                this.validationErrors.cardName = true;
                isValid = false;
            }

            if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(this.cardExpiry)) {
                this.validationErrors.cardExpiry = true;
                isValid = false;
            }

            if (this.cardCVC.length !== 3 || !/^\d+$/.test(this.cardCVC)) {
                this.validationErrors.cardCVC = true;
                isValid = false;
            }

            return isValid;
        },
        goToOrderSummary() {
            console.log('Go to order summary');
        },
        resetValidation(field) {
            this.validationErrors[field] = false;
        }
    }
};
</script>
  
<style scoped>
.container {
    margin-left: 20px;
}

.invalid-feedback {
    display: none;
}

.invalid-feedback.is-invalid {
    display: block;
    color: #dc3545;
}
</style>
  