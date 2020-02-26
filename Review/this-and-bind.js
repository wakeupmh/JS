const people ={
    hello: 'Good Morning',
    speak () {
        console.log(this.hello);
    }
};
people.speak();

const peopleSpeaking = pessoa.falar.bind(people); // this resolved for people
peopleSpeaking();