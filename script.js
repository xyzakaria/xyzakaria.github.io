


function calculateDaysUntil(targetDate) {
    const currentDate = new Date();
    const target = new Date(targetDate);
    const timeDifference = target - currentDate;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}

function calculateTimeUntil(targetDate) {
    const currentDate = new Date();
    const target = new Date(targetDate);
    const timeDifference = target - currentDate;

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return { days: daysDifference };
}

function updateCountdown() {
    const timeUntil = calculateTimeUntil('October 26, 2024');
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerText = `J-${timeUntil.days}`;
}

// Update the countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);




