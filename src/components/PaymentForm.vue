<template>
    <div class="container">
        <div class="card mt-4 mx-auto mb-5" style="max-width: 500px;">
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

                    <!-- Form inputs for shipping details -->
                    <h5 class="card-title mt-4">Inserisci i dati per la spedizione</h5>

                    <div class="form-group mt-2">
                        <input type="text" class="form-control" v-model="shippingFullName" placeholder="Nome e Cognome"
                            @focus="resetValidation('shippingFullName')"
                            :class="{ 'is-invalid': validationErrors.shippingFullName }" required />
                        <div class="invalid-feedback">Nome e cognome non validi</div>
                    </div>

                    <div class="form-group mt-2">
                        <input type="text" class="form-control" v-model="shippingAddress" placeholder="Indirizzo"
                            @focus="resetValidation('shippingAddress')"
                            :class="{ 'is-invalid': validationErrors.shippingAddress }" required />
                        <div class="invalid-feedback">Indirizzo non valido</div>
                    </div>

                    <div class="form-group mt-2">
                        <input type="text" class="form-control" v-model="shippingStreetNumber" placeholder="Numero civico"
                            @focus="resetValidation('shippingStreetNumber')"
                            :class="{ 'is-invalid': validationErrors.shippingStreetNumber }" required />
                        <div class="invalid-feedback">Numero civico non valido</div>
                    </div>

                    <div class="form-group mt-2">
                        <input type="text" class="form-control" v-model="shippingCity" placeholder="Città"
                            @focus="resetValidation('shippingCity')"
                            :class="{ 'is-invalid': validationErrors.shippingCity }" required />
                        <div class="invalid-feedback">Città non valida</div>
                    </div>

                    <div class="form-group mt-2">
                        <input type="text" class="form-control" v-model="shippingProvince" placeholder="Provincia"
                            @focus="resetValidation('shippingProvince')"
                            :class="{ 'is-invalid': validationErrors.shippingProvince }" required />
                        <div class="invalid-feedback">Provincia non valida</div>
                    </div>

                    <div class="form-group mt-2">
                        <input type="text" class="form-control" v-model="shippingPostalCode" placeholder="CAP"
                            @focus="resetValidation('shippingPostalCode')"
                            :class="{ 'is-invalid': validationErrors.shippingPostalCode }" required />
                        <div class="invalid-feedback">CAP non valido</div>
                    </div>

                    <div class="form-group mt-2">
                        <input type="text" class="form-control" v-model="shippingPhoneNumber"
                            placeholder="Numero di telefono" @focus="resetValidation('shippingPhoneNumber')"
                            :class="{ 'is-invalid': validationErrors.shippingPhoneNumber }" required />
                        <div class="invalid-feedback">Numero di telefono non valido</div>
                    </div>

                    <!-- Submit button -->
                    <button type="submit" class="btn btn-primary mt-3">Paga Ora</button>
                </form>
            </div>
        </div>

        <!-- Payment status popup -->
        <div v-if="paymentStatus === 'completed'" class="modal fade show d-block" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header text-center d-flex justify-content-center">
                        <h5 class="modal-title text-center">Pagamento completato</h5>
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="goToOrderSummary">
                            Vai al riepilogo dell'ordine
                        </button>
                        <button type="button" class="btn btn-primary" @click="goToRestaurants">
                            Effettua un altro ordine
                        </button>
                    </div>
                </div>
            </div>
        </div>




        <!-- Overlay -->
        <div v-if="paymentStatus === 'completed'" class="overlay"></div>
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
            shippingFullName: '',
            shippingAddress: '',
            shippingStreetNumber: '',
            shippingCity: '',
            shippingProvince: '',
            shippingPostalCode: '',
            shippingPhoneNumber: '',
            paymentStatus: '',
            validationErrors: {
                cardNumber: false,
                cardName: false,
                cardExpiry: false,
                cardCVC: false,
                shippingFullName: false,
                shippingAddress: false,
                shippingStreetNumber: false,
                shippingCity: false,
                shippingProvince: false,
                shippingPostalCode: false,
                shippingPhoneNumber: false,
            },
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
                cardCVC: false,
                shippingFullName: false,
                shippingAddress: false,
                shippingStreetNumber: false,
                shippingCity: false,
                shippingProvince: false,
                shippingPostalCode: false,
                shippingPhoneNumber: false,
            };

            if (
                this.cardNumber.length !== 16 ||
                !/^\d+$/.test(this.cardNumber)
            ) {
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

            if (
                this.cardCVC.length !== 3 ||
                !/^\d+$/.test(this.cardCVC)
            ) {
                this.validationErrors.cardCVC = true;
                isValid = false;
            }

            if (this.shippingFullName.length < 3) {
                this.validationErrors.shippingFullName = true;
                isValid = false;
            }

            if (this.shippingAddress.length < 3) {
                this.validationErrors.shippingAddress = true;
                isValid = false;
            }

            if (this.shippingStreetNumber.length === 0) {
                this.validationErrors.shippingStreetNumber = true;
                isValid = false;
            }

            if (this.shippingCity.length < 3) {
                this.validationErrors.shippingCity = true;
                isValid = false;
            }

            if (this.shippingProvince.length < 2) {
                this.validationErrors.shippingProvince = true;
                isValid = false;
            }

            if (
                this.shippingPostalCode.length !== 5 ||
                !/^\d+$/.test(this.shippingPostalCode)
            ) {
                this.validationErrors.shippingPostalCode = true;
                isValid = false;
            }

            if (
                this.shippingPhoneNumber.length < 7 ||
                !/^\d+$/.test(this.shippingPhoneNumber)
            ) {
                this.validationErrors.shippingPhoneNumber = true;
                isValid = false;
            }

            return isValid;
        },
        goToOrderSummary() {
            console.log('Go to order summary');
        },
        resetValidation(field) {
            this.validationErrors[field] = false;
        },
        goToRestaurants() {
            this.$router.push('/restaurants');
        },
    },
};
</script>
  
<style scoped>
.container {
    margin-left: 20px;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.invalid-feedback {
    display: none;
}

.invalid-feedback.is-invalid {
    display: block;
    color: #dc3545;
}
</style>
  