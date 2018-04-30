angular.module('todo').factory('todoStorage',function (){
   var storage = {
       // todo ...
       todos: [
        {
           title:'요가 수행',
           completed:false,
           createAt: Date.now(),
           id:0
        },
        {
           title:'앵귤러 학습',
           completed:false,
           createAt: Date.now(),
           id:1
        },
        {
           title:'운동하기',
           completed:true,
           createAt: Date.now(),
           id:2
        }
       ],
       
       get: function () {
           return storage.todos;
       },

       remove: function(todo){
           var idx = storage.todos.findIndex(function(item) {
               return item.id === todo.id
           })
           if(idx > -1){
               storage.todos.splice(idx, 1)
           }
       },

       add: function(newTodoTitle){
           var newTodo = {
               title:newTodoTitle,
               completed:false,
               createAt:Date.now()
           };
           // push into todos
           storage.todos.push(newTodo);
       }
   }

   return storage;
});