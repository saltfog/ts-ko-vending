

class Quarter {
    
    //encapulation 
    //private value: number = .5

    value: number = .25

    //Properties Get and Setter
    get Value(){
        return this.value;
    }
    set Value(newValue: number){
        this.value = newValue
    }
    getImageUrl (): string {
        return "img/Quarter.png"
    }
}

var coin = new Quarter();