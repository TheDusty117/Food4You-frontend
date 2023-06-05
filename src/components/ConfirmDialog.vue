<template>
    <div class="modal" :class="{ 'is-active': isOpen }">
        <div class="modal-dialog">
            <div class="modal-content with-shadow">
                <div class="modal-body text-center">
                    <slot></slot>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button class="btn btn-success mx-2" @click="confirm">Conferma</button>
                    <button class="btn btn-danger mx-2" @click="cancel">Annulla</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        confirm() {
            this.$emit('confirm');
        },
        cancel() {
            this.$emit('cancel');
        },
    },
}
</script>
  
<style scoped>
.modal {
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-dialog {
    width: 400px;
}

.modal-content {
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.modal-body {
    padding: 1rem;
}

.modal-footer {
    padding: 1rem;
    border-top: 1px solid #dee2e6;
}

.btn {
    text-align: center;
}
</style>
