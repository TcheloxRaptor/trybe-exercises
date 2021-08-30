import React from 'react';
import './App.css';
import Image2 from './Image2';
import Order from './Order';
import UserProfile from './UserProfile'

function App() {

  const headphone = {
    id: 102,
    user: "cena@gmail.com",
    product: "HyperX Headphone",
    price: {
      value: 99.99,
      currency: "dollars"
    }
  };

  const energyDrink = {
    id: 77,
    user: "cena@gmail.com",
    product: "Monster 500mL",
    price: {
      value: 9.99,
      currency: "dollars"
    }
  };

  const users = [
    {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https:cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    },
    {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https:cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    }
  ];

  return (
    <div className="App">
      <Image2 source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Cute cat staring" />
      <h1>Orders recently created</h1>
      <Order order={headphone}/>
      <Order order={energyDrink} />
      <br />
      <div>
        <h2>Users:</h2>
        {users.map((user, index) => <UserProfile key={index} user={user} />)}
      </div>
    </div>
  );
}

export default App;
