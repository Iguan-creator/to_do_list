
const App = {

    data(){
        return {
            message: 'Вы ввели пустое дело',
            title: 'Список дел',
            placeholderString: 'введите ваше дело',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2']
        }
    },
    methods: {

        //inputChangeHandler(event) { - убрали метод, так как заменили прослушку инпута на v-model="inputValue"
          //  this.inputValue = event.target.value
        //},
        addNewNote () {
            let ok = document.querySelector('#name_ok');
            if(this.inputValue=='') {
                ok.innerHTML = 'не заполнена задача';
            }
            if (this.inputValue !==''){
                this.notes.push(this.inputValue),
                    this.inputValue = '',
                    ok.innerHTML=''
            }
        },

        toUpperCase(item) {
            return item.toUpperCase()
        },

        removeNote (idx){
            this.notes.splice(idx, 1)
        },
    },

    watch: { // следит за длиной инпута .
        inputValue(value) {
            if (value.length >10) {
                this.inputValue = ''
            }
        }
    }


}




Vue.createApp(App).mount('#app')
