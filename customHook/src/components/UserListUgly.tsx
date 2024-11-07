// src/components/UserList.tsx
import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { uselocalStorage } from "../hooks/uselocalStorage";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
  location: {
    country: string;
    city: string;
  };
}

interface RandomUserResponse {
  results: User[];
}

const { count, saveCount } = uselocalStorage("elad",[]);

// const UserListUgly = () => {
//   // State לטיפול במספר המשתמשים - במקום useLocalStorage
//   const [count, setCount] = useState<number>(() => {
//     try {
//       const savedCount = window.localStorage.getItem("userCount");
//       return savedCount ? JSON.parse(savedCount) : 5;
//     } catch (error) {
//       console.error("Error reading userCount from localStorage:", error);
//       return 5;
//     }
//   });

  const { state: users} = useFetch<RandomUserResponse>(
    `https://randomuser.me/api/?gender=male&results=${count}`
  );

  // State לטיפול במועדפים - במקום useLocalStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const savedFavorites = localStorage.getItem("favorites");
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      console.error("Error reading favorites from localStorage:", error);
      return [];
    }
  });
  const [loadingFavorite, setLoadingFavorite] = useState<string | null>(null);

  // שמירת count בלוקל סטורג'
  // useEffect(() => {
  //   try {
  //     localStorage.setItem("userCount", JSON.stringify(count));
  //   } catch (error) {
  //     console.error("Error saving count to localStorage:", error);
  //   }
  // }, [count]);

  // שמירת favorites בלוקל סטורג'
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
      console.error("Error saving favorites to localStorage:", error);
    }
  }, [favorites]);

  const toggleFavorite = (email: string) => {
    setLoadingFavorite(email);
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.includes(email)
        ? prevFavorites.filter((e) => e !== email)
        : [...prevFavorites, email];
      setLoadingFavorite(null);
      return newFavorites;
    });
  };

  if (users.loading) return <div className="loading">Loading...</div>;
  if (users.error) return <div className="error">{users.error.message}</div>;
  if (!users.data) return null;

  return (
    <div className="container">
      <div className="controls">
        <label>
          Number of users:
          <input
            type="number"
            min="1"
            max="10"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="user-grid">
        {users.data.results.map((user: User) => (
          <div key={user.email} className="user-card">
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
            />
            <h3>{`${user.name.first} ${user.name.last}`}</h3>
            <p>{user.email}</p>
            <p>{`${user.location.city}, ${user.location.country}`}</p>
            <button
              className={`favorite-btn ${
                favorites.includes(user.email) ? "active" : ""
              }`}
              onClick={() => toggleFavorite(user.email)}
              disabled={loadingFavorite === user.email}
            >
              {loadingFavorite === user.email
                ? "..."
                : favorites.includes(user.email)
                ? "★"
                : "☆"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListUgly;
