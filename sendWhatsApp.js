// Example JS function to send location via CallMeBot API
function sendWhatsAppLocation(lat, lon) {
    const phone = '09484665123'; // Your WhatsApp number
    const apikey = 'ZfM7GoyYF2sX'; // Your CallMeBot API key
    const text = encodeURIComponent(`🚨 EMERGENCY! User needs help. Location: https://www.google.com/maps?q=${lat},${lon}`);

    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${text}&apikey=${apikey}`;

    // Send request
    fetch(url)
        .then(response => {
            if (response.ok) {
                console.log('✅ WhatsApp message sent!');
            } else {
                console.error('❌ Failed to send WhatsApp message', response.status);
            }
        })
        .catch(err => console.error('❌ Error sending WhatsApp message', err));
}
