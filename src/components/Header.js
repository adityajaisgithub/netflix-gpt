import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscrib();
  }, []);

  return (
    <div className="flex justify-between w-screen px-6 py-3 absolute bg-gradient-to-b from-black z-10">
      <img className="w-56  h-20" src={LOGO} alt="Netflix_Logo" />
      {user && (
        <div className="flex m-4">
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button className="text-white font-semibold" onClick={handleSignOut}>
            (sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
