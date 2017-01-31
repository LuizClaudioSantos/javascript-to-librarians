class Task {

    constructor(title, description, date){
        this._title = title;
        this._description = description;
        this._date = date;
        Object.freeze(this);
    }

    get description(){
        return this._description;
    }
    get title(){
        return this._title;
    }

    get date(){
        return new Date(this._date.getTime());
    }


}