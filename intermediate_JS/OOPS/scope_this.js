//arrow functions override the normal this rules

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    const add1 = () => {
      this.score++;
    };

    add1();
  },
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);

user1.increment();

/*
    Now our inner function gets this set by where it 
    was saved - it's a 'lexically' scoped this

    arrow functions knows what this will be assigned from
    moment of definition allows this : user1 (to be set)

    thils.score++ === user1.score++
*/
