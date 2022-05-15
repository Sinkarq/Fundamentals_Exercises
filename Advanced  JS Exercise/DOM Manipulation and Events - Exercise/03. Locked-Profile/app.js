function lockedProfile() {
    const profiles = document.querySelectorAll(".profile");

    for (const profile of profiles) {
        const button = profile.querySelector(`button`);
        button.addEventListener('click', () => {
           const locked = button.parentNode.querySelector(`input[value="lock"]`).checked;
           if (!locked) {
               const hiddenValuesDiv = button.parentNode.querySelector(`div`);
               if (button.textContent == 'Show more') {
                   hiddenValuesDiv.style.display = 'block';
                   button.textContent = "Hide it";
               }
               else {
                   hiddenValuesDiv.style.display = 'none';
                   button.textContent = "Show more";
               }
           }
        });
    }
}