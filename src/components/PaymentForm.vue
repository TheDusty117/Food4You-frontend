<template>
    <div class="">
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
                        <input type="text" class="form-control" v-model="shippingPostalCode" placeholder="CAP"
                            @focus="resetValidation('shippingPostalCode')"
                            :class="{ 'is-invalid': validationErrors.shippingPostalCode }" required />
                        <div class="invalid-feedback">CAP non valido</div>
                    </div>

                    <div class="form-group mt-2">
                        <input type="text" class="form-control" v-model="shippingTelephone" placeholder="Numero di telefono"
                            @focus="resetValidation('shippingTelephone')"
                            :class="{ 'is-invalid': validationErrors.shippingTelephone }" required />
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
                        <router-link to="/restaurants" class="btn btn-primary">
                            Effettua un altro ordine
                        </router-link>
                        <router-link to="/home" class="btn btn-primary ml-2">
                            Torna alla home
                        </router-link>
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
            shippingPostalCode: '',
            shippingTelephone: '',
            validationErrors: {
                cardNumber: false,
                cardName: false,
                cardExpiry: false,
                cardCVC: false,
                shippingFullName: false,
                shippingAddress: false,
                shippingStreetNumber: false,
                shippingCity: false,
                shippingPostalCode: false,
                shippingTelephone: false,
            },
            paymentStatus: 'pending',
        };
    },
    methods: {
        processPayment() {
            // Validazione dei dati di pagamento e spedizione
            const isValid = this.validateForm();

            if (isValid) {
                // Simulazione del pagamento
                this.paymentStatus = 'completed';
            }
        },
        validateForm() {
            let isValid = true;

            // Validazione numero carta
            if (!this.cardNumber || !this.cardNumber.match(/^\d{16}$/)) {
                this.validationErrors.cardNumber = true;
                isValid = false;
            } else {
                this.validationErrors.cardNumber = false;
            }

            // Validazione nome intestatario
            if (!this.cardName || !this.cardName.match(/^[a-zA-Z\s]+$/)) {
                this.validationErrors.cardName = true;
                isValid = false;
            } else {
                this.validationErrors.cardName = false;
            }

            // Validazione data di scadenza
            if (!this.cardExpiry || !this.cardExpiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
                this.validationErrors.cardExpiry = true;
                isValid = false;
            } else {
                this.validationErrors.cardExpiry = false;
            }

            // Validazione CVC
            if (!this.cardCVC || !this.cardCVC.match(/^\d{3}$/)) {
                this.validationErrors.cardCVC = true;
                isValid = false;
            } else {
                this.validationErrors.cardCVC = false;
            }

            // Validazione nome e cognome per la spedizione
            if (!this.shippingFullName || !this.shippingFullName.match(/^[a-zA-Z\s]+$/)) {
                this.validationErrors.shippingFullName = true;
                isValid = false;
            } else {
                this.validationErrors.shippingFullName = false;
            }

            // Validazione indirizzo di spedizione
            if (!this.shippingAddress) {
                this.validationErrors.shippingAddress = true;
                isValid = false;
            } else {
                this.validationErrors.shippingAddress = false;
            }

            // Validazione numero civico
            if (!this.shippingStreetNumber) {
                this.validationErrors.shippingStreetNumber = true;
                isValid = false;
            } else {
                this.validationErrors.shippingStreetNumber = false;
            }

            // Validazione città
            if (!this.shippingCity || !this.shippingCity.match(/^[a-zA-Z\s]+$/)) {
                this.validationErrors.shippingCity = true;
                isValid = false;
            } else {
                this.validationErrors.shippingCity = false;
            }

            // Validazione CAP
            if (!this.shippingPostalCode || !this.shippingPostalCode.match(/^\d{4,8}$/)) {
                this.validationErrors.shippingPostalCode = true;
                isValid = false;
            } else {
                this.validationErrors.shippingPostalCode = false;
            }

            // Validazione numero di telefono
            if (!this.shippingTelephone || !this.shippingTelephone.match(/^\d{5,13}$/)) {
                this.validationErrors.shippingTelephone = true;
                isValid = false;
            } else {
                this.validationErrors.shippingTelephone = false;
            }


            return isValid;
        },
        resetValidation(field) {
            this.validationErrors[field] = false;
        },
    },
};
</script>
  
<style>
.is-invalid {
    border-color: red;
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
</style>
