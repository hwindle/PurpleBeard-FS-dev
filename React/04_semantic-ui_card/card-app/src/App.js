import Bio from './Components/Card/Card';
import './App.css';
import { faker } from '@faker-js/faker';

function App() {
  const bioString =
    faker.name.jobTitle() + ' living in ' + faker.address.city();
  const bio = {
    avatar: faker.image.avatar(),
    firstName: faker.name.firstName(),
    description: bioString,
    friendsNo: Math.floor(Math.random() * 100),
  };

  return (
    <div className='App'>
      <main className='App-header'>
        <Bio bio={bio} />
      </main>
    </div>
  );
}

export default App;
