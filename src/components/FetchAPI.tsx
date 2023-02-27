import { useState, useEffect } from 'react';
import '../server';

type UserProps = {
  id: string;
  name: string;
};

export default function FetchAPI() {
  const [users, setUsers] = useState<UserProps[] | undefined>();

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  if (!users) return null;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
