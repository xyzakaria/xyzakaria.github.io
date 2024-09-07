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
    const hoursDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return { days: daysDifference, hours: hoursDifference };
}

function updateCountdown() {
    const timeUntil = calculateTimeUntil('October 26, 2024');
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerText = `J-${timeUntil.days} et ${timeUntil.hours} heure(s)`;
}

// Update the countdown immediately and then every hour
updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60);