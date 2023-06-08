import { useState } from 'react';
import Users from './components/users/Users';

import { USERS } from './constants/users';

const App = () => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			{/* <h1>{counter}</h1> */}
			<Users
				key={USERS[counter].userId}
				title={USERS[counter].title}
				name={USERS[counter].name}
				username={USERS[counter].username}
				email={USERS[counter].email}
				profileImage={USERS[counter].profileImage}
			/>

			<button onClick={() => handlePrev(counter, setCounter)}>Anterior</button>
			<button onClick={() => handleNext(counter, setCounter)}>Siguiente</button>
		</div>
	);
};

const handlePrev = (counter, setCounter) => {
	setCounter(counter - 1);
};

const handleNext = (counter, setCounter) => {
	setCounter(counter + 1);
};

export default App;
