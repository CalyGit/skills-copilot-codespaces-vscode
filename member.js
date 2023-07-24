function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['JS', 'CSS', 'HTML'],
        address: {
            street: '50 Main St',
            city: 'Boston',
            state: 'MA'
        },
        getBirthYear: function() {
            return 2017 - this.age;
        }
    };
    return member;
}
