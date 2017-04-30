###vue相关笔记
    绑定事件
    html:div id='app'
            h1  {{message}}
            <button v-on:click='change'></button>   v-on:click="函数名"点击事件
    js: var app=new Vue({
            el:'#app',
            data:{      数据写在data里
                message:'内容',
            },
            methods:{       事件写methods里
                change:function(){
                    this.message='内容2'
                }
            }
        })

    绑定属性
        v-bind:属性='属性值'
        比如<a v-bind:href='href'></a>
                data:{
                    href:'http://baidu.com'
                }
        或者
        h1 v-bind:class='bg' v-for='(bg,index) in color'
        data:{
            color:[
                {bg:true},  true表示使用
                {bg2:false}  false表示不同
            ]
        }，
        methods:{
            this.color.bg=!this.color.bg
            this.color.bg2=!this.color.bg2
        }

    删除列表时可以建立数组删除数组的第几个内容

    绑定文本
        v-model='属性名'
        可以获取文本的内容

    for循环
        v-for='friet in frietlist'
        或者v-for='(friet,ind) in frietlist'

    建立组件
    html: <name></name>
    js: Vue.component('name',{
            tempalte='<h1>hello <a v-on:click='showname'>{{thisname}}</a></h1>'
                <!-- tempalte只能暴露一个标签 -->
            data:function(){    data在组件里使用要用函数
                thisname:'小明'
            }，
            methods:{           methods没变化
                showname:function(){
                    console.log(thisname)
                }
            }
        })
        new Vue({       组件要写在new的Vue上边
            el:'#app'
        })

    传值：
    利用标签传值
        <name name='小明' age='12'></name>
        Vue.component('name'{
            props:['name','age']
            tempalte="<h1>\     换行用\隔开
                        my name is{{name}},i am {{age}}years old
                    </h1>"
            })
    父级给子级传值
    son
        props:['fatherData'],
        <h1>{{fatherData}}</h1>
    father
        tempalte='<h1><son v-fatherData='name'></son></h1>',
        data:function(){
            return{
                name:'内容'
            }
        }
    自己给父级传值
    son         需要点击事件
        tempalte='<button v-on:click='showSon'></button>',
        data:function(){
            return{
                title:'内容'
            }
        }，
        methods:{
            showSon:function(){
                this.$emit('sonData',this.title)    触发事件
            }
        }
    father
        tempalte='<h1>{{title}}<son v-on:sonData='dataFather'></son></h1>',
        data:function(){            v-on:  建立事件
            return{
                title:''
            }
        },
        methods:{
            dataFather:function(mydata){    mydata是参数
                this.title:mydata
            }
        }

    Vuex:数据传输
        html:
        <span>{{number}}</span>
        <button>+</button>
        var store=new Vue.Store({
                state{
                    number=0        公用的数据
                }
            }),
                mutations:{
                    add:function(){
                         state.numver++;         mutations操作state内的数据
                    }
                }
        new Vue({
            el:'#app',
            methods:{
                btn:function(){
                    store.commit('add')
                    //commit 提交到mutation(add是用来传数据的函数)
                }
            }
        })

    vue-router:
        查文档，

    vue的工程化
        project 文件夹//英文
            node_moudules
            src
                components
                    .vue 文件
                store
                    index.js vuex 文件
                router
                    index.js vue-router 文件
                main.js
            index.html
            package.json
            webpack.config.js
    .vue文件与html文件相似
    template 标签内写网页，但是只能暴露一个标签
    Es6引入外部模块用
        import Vue from 'vue'不写地址会从moudules文件中找
    暴露接口
        export default 
    favicon 制作工具制作标签头像格式为ico
    npm install -g webpack  文件打包
    npm install -g webpack-dev-server  开服务器适合制作与调试
    submit.prevent阻止submit的默认行为即点击翻页


    

    





