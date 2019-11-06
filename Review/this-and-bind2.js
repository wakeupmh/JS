function People() {
    this.age = 0;
    const self = this; //prevent varying of this

    setInterval(() => {
        self.age++;
    }, 1000);
}

new People