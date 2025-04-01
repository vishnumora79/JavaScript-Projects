document.getElementById("fetch-btn").addEventListener("click", fetchUsers);


function fetchUsers() {
    const loading = document.getElementById("loading");
    const userContainer = document.getElementById("user-container");

    loading.classList.remove("hidden");
    userContainer.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }).then(users => {
            loading.classList.add("hidden");

            users.forEach(user => {
                const userCard = document.createElement("div");
                userCard.className = "user-card";
                userCard.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                    <p><strong>Address:</strong> ${user.address.street},  ${user.address.city}</p>`;
                userContainer.appendChild(userCard);
            });
        }).catch(error => {
            loading.classList.add("hidden");

            userContainer.innerHTML = `
                <div class = "error">
                <p>Error fetching data: ${error.message}</p>
                </div>`;
            console.error("Error:", error);
        });
}
