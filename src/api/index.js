const users = [
  {
    id: 1,
    name: 'Ivan',
    description:
      'Menu at the top; needs to work on hover and fly out as per the live client website',
    age: 25,
  },
  {
    id: 2,
    name: 'Vlad',
    description:
      'The correct product data needs to be used - styling to achieve the same look as the client site',
    age: 22,
  },
  {
    id: 3,
    name: 'Nick',
    description:
      'any click on the product - including the plus and minus signs and ‘add to trolly’ need to link to the product.link URL',
    age: 28,
  },
  {
    id: 4,
    name: 'Sara',
    description: 'Make the menu appear and work like the client website',
    age: 25,
  },
];


function all () {
    return emulateRequest().then(()=>{
        return users.map( user => { return {id: user.id, name: user.name }})
    })
}

function get(id) {
    return emulateRequest().then(() => {
      let num = users.findIndex(user => user.id === id);
      return num === -1 ? null : users[num];
    });
}

export {get, all}

function emulateRequest() {
  return new Promise((resolve) => {
    window.setTimeout(resolve, 200);
  });
}