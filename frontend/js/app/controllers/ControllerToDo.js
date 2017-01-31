class ControllerToDo{

     constructor (){
       let $ = document.querySelector.bind(document);
       this._title = $('#title');
       this._description = $('#description');
       this._date = $('#date');
     }

    addToDo(event){
       event.preventDefault();
       let task = new Task(this._title.value,   this._description.value, this._date.value);
       console.log(task);
    }
}