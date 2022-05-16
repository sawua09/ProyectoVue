Vue.component('modal', {
    props: ['showModal'],
    template: `
        <div class="modal-mask" v-if="showModal==true">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <h3>{{ title }}</h3>
                    <slot name="body"></slot>
                    <footer>
                        <button v-on:click="close">Cerrar</button>
                    </footer>
                </div>
            </div>
        </div>`,

    data () {
        return{
            title: "Titulo del modal"
        }
    },
    methods:{
        close(){
            this.$emit("close")
        }
    }
})

new Vue({
    el: '#app',
    data (){
        return{
          showModal: false
        }
    },
    methods: {
        toggleModal () {
            this.showModal = !this.showModal
        }
    }
})