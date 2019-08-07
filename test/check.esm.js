class Name{
    #name = 'leon';
    get(){
        return this.#name;
    }
}

export default function(){
    let MyName = new Name();
    console.log(`My name is ${MyName.get()}`);
}