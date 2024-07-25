function updateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    const timeString = `${day}${month}${year}${hours}${minutes}`;
    document.getElementById('timeInput').value = timeString;
}

setInterval(updateTime, 1000);

document.getElementById('copyButton').addEventListener('click', function() {
    const timeInput = document.getElementById('timeInput');
    timeInput.select();
    document.execCommand('copy');
    alert('Zaman kopyalandı: ' + timeInput.value);
});

// İlk yüklemede zamanı güncelle
updateTime();