function calculateDaysUntil(targetDate) {
    const currentDate = new Date();
    const target = new Date(targetDate);
    const timeDifference = target - currentDate;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}

function updateCountdown() {
    const daysUntil = calculateDaysUntil('October 26, 2024');
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerText = `J-${daysUntil}`;
}

// Update the countdown immediately and then every day
updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60 * 24);