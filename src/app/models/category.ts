interface CategoryData{
    id: string;
    icon: string;
    name: string;
    description: string;
    parents: string[];
    childs: string[];
}

export class Category{
    id: string = null;
    icon: string = null;
    name: string = null;
    description: string = null;
    parents: string[] = null;
    childs: string[] = null;
    constructor(data?: CategoryData){
        if(data){
            this.id = data.id? data.id: this.id;
            this.icon = data.icon? data.icon: this.icon;
            this.name = data.name? data.name: this.name;
            this.description = data.description? data.description: this.description;
            this.parents = data.parents? data.parents: this.parents;
            this.childs = data.childs? data.childs: this.childs;
        }else{
            this.id = null;
            this.icon = null;
            this.name = null;
            this.description = null;
            this.parents = null;
            this.childs = null;
        }
    }
}
