const activityButton = document.getElementById("activityButton");
const btn = document.getElementById("btn");
const joke = document.getElementById("joke");
const answer = document.getElementById("answer");
const url = 'https://official-joke-api.appspot.com/random_joke';

activityButton.addEventListener("click", () => {
    async function fetchUserData() {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const userData = await response.json();
            console.log(userData);
            btn.style.display = "inline-block";
            joke.style.display = "block";
            answer.style.display = "none";
            joke.textContent = `Joke: ${userData.setup}`;
            answer.textContent = `Answer: ${userData.punchline}`;
        }
        catch (error) {
            console.error('Fetch error:', error);
        }
    }

    fetchUserData();
});

btn.addEventListener("click", () => {
    answer.style.display = "inline-block";
    btn.style.display = "none";

});