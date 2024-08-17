// public/js/clubDetails.js
document.addEventListener("DOMContentLoaded", () => {
  const joinButtons = document.querySelectorAll(".clubDetails-join-button");

  joinButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const clubId = button.getAttribute("data-club-id");
      const token = "YOUR_USER_AUTH_TOKEN"; // Replace with actual authentication token retrieval logic

      try {
        const response = await fetch(`/clubs/join/${clubId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Adjust as necessary
          },
          body: JSON.stringify({}),
        });

        if (response.ok) {
          alert("Successfully joined the club!");
        } else {
          const errorMessage = await response.text();
          alert(`Error: ${errorMessage}`);
        }
      } catch (error) {
        console.error("Error joining club:", error);
        alert("Failed to join the club.");
      }
    });
  });
});
