

Vue.component('task',{
    props: ['data'],
    data() {
        return {
        }
    },
    methods: {
        task_done(){
            this.$emit('task_done')
        }
    },
    template: `
    <div class="task">
        <div>
            <h3 class="task__title">{{data.title}}</h3>
            <p class="task__desk">{{data.desc}}</p>
        </div>
        <button class="task__done" @click="task_done()">✔</button>
        
        
    </div>`

})

var vue = new Vue({
    el: '#app',
    data: {
        new_task : {
            title: '',
            desc: ''
        },
        tasks: [
            {
                title: ' Изучить vue.js',
                desc: ' Просмотреть все видео по vue.js'
            },
            {
                title: ' Vueex end vue router',
                desc: ' Просмотреть видео по vue.router'
            },
        ]
    },
    methods: {
        delete_task(id){
            this.tasks.splice(id,1);
        },
        add_task ()  {
            let ok = document.querySelector('#name_ok');
            if(this.new_task.title=='') {
                ok.innerHTML = 'не заполнена задача';
            }
                if(this.new_task.title!=''){
                    this.tasks.push({
                        title: this.new_task.title,
                        desc: this.new_task.desk
                    });
                    this.new_task.title='';
                    this.new_task.desk='';
                    ok.innerHTML = '';
            }
        }
    }
});


  



