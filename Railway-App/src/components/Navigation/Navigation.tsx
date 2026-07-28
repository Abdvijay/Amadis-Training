import { useNavigate } from "@tanstack/react-router";

import "./Navigation.css";

function Navigation() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("booking");
        localStorage.removeItem("selectedTrain");

        navigate({
            to: "/",
        });
    };

    return (
        <nav className="navigation-container">
            <button
                className="navigation-button"
                onClick={() =>
                    navigate({
                        to: "/Railway/Train-Search",
                    })
                }
            >
                Train Search
            </button>

            <button
                className="navigation-button"
                onClick={() =>
                    navigate({
                        to: "/Railway/Booked-History",
                    })
                }
            >
                Booked History
            </button>

            <button className="navigation-button logout-button" onClick={handleLogout}>
                Logout
            </button>
        </nav>
    );
}

export default Navigation;