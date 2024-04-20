import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const bstyle = {
    width: "fit-content",
    padding: "8px",
    fontFamily: "Poppins",
  }

  return (
    <button style={bstyle} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      LogOut
    </button>
  );
};

export default LogoutButton;