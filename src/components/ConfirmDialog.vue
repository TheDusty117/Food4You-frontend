<template>
    <div class="confirm-dialog">
        <div class="confirm-dialog-overlay"></div>
        <div class="confirm-dialog-content card d-flex flex-column align-items-center">
            <div class="card-body">
                <slot></slot>
            </div>
            <div class="confirm-dialog-actions">
                <button @click="confirm" class="btn btn-primary mx-2">Conferma</button>
                <button @click="cancel" class="btn btn-secondary mx-2">Annulla</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
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
.confirm-dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.confirm-dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
}

.confirm-dialog-content {
    max-width: 400px;
    border-radius: 15px;
}

.confirm-dialog-actions {
    display: flex;
    justify-content: center;
    margin: 15px;
}

.confirm-dialog button {
    margin-left: 0;
}
</style>
  