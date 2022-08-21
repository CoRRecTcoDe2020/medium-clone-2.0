import { createContext, useState, useEffect } from "react";
import { collection, getDocs, setDocs, doc } from "firebase/firestore";
import { db } from "../firebase";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));

      querySnapshot.docs.map((doc) => console.log(doc));
    };

    getUsers();
  }, []);

  return (
    <MediumContext.Provider
      value={{ posts, users }}
      >
        {children}
      </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
