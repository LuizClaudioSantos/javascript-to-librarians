class ViewToDo {

     constructor(element){
         this._element = element; 
     }

    _template(model){
       return `
        <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Dead Line</th>
                    </tr>
                </thead>
                <tbody>
                    ${ model.map(task => `
                         <tr>
                            <td>${task.title}</td>
                            <td>${task.description}</td>
                            <td>${task.date}</td>
                        </tr>
                    `).join('')}
                </tbody>
         </table>
        `;
    }

    update(model){
        this._element.innerHTML =  this._template(model);
    }


}