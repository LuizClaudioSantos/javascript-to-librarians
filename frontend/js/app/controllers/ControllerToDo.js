class ControllerToDo{

     constructor (){
       let $ = document.querySelector.bind(document);
       this._title = $('#title');
       this._description = $('#description');
       this._date = $('#date');
       this._viewToDo = new ViewToDo($('#viewToDo'));
       this._tasks = [];
       this._viewToDo.update(this._tasks);
     }

    addToDo(event){
       event.preventDefault();
       let task = new Task(this._title.value,   this._description.value, this._date.value);
       this._tasks.push(task);
       console.log(task);
       this._viewToDo.update(this._tasks);
    }
}