// Google Calendar API Configuration
const GOOGLE_CALENDAR_CONFIG = {
    // You need to replace these with your actual Google Cloud Project credentials
    CLIENT_ID: 'YOUR_CLIENT_ID_HERE', // Get this from Google Cloud Console
    API_KEY: 'YOUR_API_KEY_HERE',     // Get this from Google Cloud Console
    DISCOVERY_DOCS: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
    SCOPES: 'https://www.googleapis.com/auth/calendar.events'
};

// Calendar ID for primary calendar (usually user's main calendar)
const PRIMARY_CALENDAR_ID = 'primary';

// Event colors for different tara qualities
const EVENT_COLORS = {
    good: '#10b981',    // Green
    medium: '#f59e0b',  // Orange  
    bad: '#ef4444'      // Red
};

// Initialize Google Calendar API
function initGoogleCalendar() {
    gapi.load('client:auth2', () => {
        gapi.client.init({
            apiKey: GOOGLE_CALENDAR_CONFIG.API_KEY,
            clientId: GOOGLE_CALENDAR_CONFIG.CLIENT_ID,
            discoveryDocs: GOOGLE_CALENDAR_CONFIG.DISCOVERY_DOCS,
            scope: GOOGLE_CALENDAR_CONFIG.SCOPES
        }).then(() => {
            // Listen for sign-in state changes
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
            
            // Handle initial sign-in state
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        }, (error) => {
            console.error('Error initializing Google Calendar API:', error);
        });
    });
}

// Update sign-in status
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        document.getElementById('authButton').style.display = 'none';
        document.getElementById('syncButton').style.display = 'block';
        document.getElementById('signOutButton').style.display = 'block';
    } else {
        document.getElementById('authButton').style.display = 'block';
        document.getElementById('syncButton').style.display = 'none';
        document.getElementById('signOutButton').style.display = 'none';
    }
}

// Sign in to Google
function handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn();
}

// Sign out from Google
function handleSignoutClick() {
    gapi.auth2.getAuthInstance().signOut();
}

// Create calendar event for tarapalan (simplified - shows only nakshatra name as all-day event)
async function createTarapalanEvent(date, nakshatraData, tarapalanData) {
    if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
        alert('கூகுள் கணக்கில் உள்நுழையவும்');
        return;
    }

    // Format date as YYYYMMDD for all-day event
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateStr = `${year}${month}${day}`;

    const event = {
        summary: `${nakshatraData.tamil} - ${tarapalanData.taraName}`,
        description: `
நட்சத்திரம்: ${nakshatraData.tamil}
தாரா: ${tarapalanData.taraName}
தரம்: ${tarapalanData.qualityText}
விளக்கம்: ${tarapalanData.description}
        `.trim(),
        start: {
            date: `${year}-${month}-${day}`,
            timeZone: 'Asia/Kolkata'
        },
        end: {
            date: `${year}-${month}-${day}`,
            timeZone: 'Asia/Kolkata'
        },
        colorId: tarapalanData.quality === 'good' ? '2' : 
                tarapalanData.quality === 'medium' ? '5' : '11'
    };

    try {
        const response = await gapi.client.calendar.events.insert({
            calendarId: PRIMARY_CALENDAR_ID,
            resource: event
        });
        
        console.log('Event created:', response.result);
        return response.result;
    } catch (error) {
        console.error('Error creating event:', error);
        throw error;
    }
}

// Sync entire month to Google Calendar (all days with current nakshatra)
async function syncMonthToGoogleCalendar() {
    if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
        alert('கூகுள் கணக்கில் உள்நுழையவும்');
        return;
    }

    const syncButton = document.getElementById('syncButton');
    const originalText = syncButton.innerHTML;
    syncButton.innerHTML = 'ஒத்திசைக்கிறது...';
    syncButton.disabled = true;

    try {
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        
        for (let day = 1; day <= lastDay.getDate(); day++) {
            const currentDate = new Date(currentYear, currentMonth, day);
            const nakshatraData = calculateNakshatraWithTime(currentDate);
            const tarapalanData = calculateTarapalan(nakshatras.findIndex(n => n.tamil === nakshatraData.tamil));
            
            // Sync all days with current nakshatra info
            await createTarapalanEvent(currentDate, nakshatraData, tarapalanData);
            
            // Add small delay to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        alert(`${tamilMonths[currentMonth]} ${currentYear} மாதம் வெற்றிகரமாக ஒத்திசைக்கப்பட்டது!`);
    } catch (error) {
        console.error('Error syncing month:', error);
        alert('ஒத்திசைப்பில் பிழை ஏற்பட்டது: ' + error.message);
    } finally {
        syncButton.innerHTML = originalText;
        syncButton.disabled = false;
    }
}

// Export calendar as ICS file with color coding (Google Calendar compatible)
function exportAsICS() {
    let icsContent = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Magha Tarapalan Calendar//EN\n';
    icsContent += 'CALSCALE:GREGORIAN\nMETHOD:PUBLISH\n';
    
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const currentDate = new Date(currentYear, currentMonth, day);
        const nakshatraData = calculateNakshatraWithTime(currentDate);
        const tarapalanData = calculateTarapalan(nakshatras.findIndex(n => n.tamil === nakshatraData.tamil));
        
        // Set color based on tarapalan quality
        let eventColor, googleColorId, categoryName;
        if (tarapalanData.quality === 'good') {
            eventColor = '#10b981'; // Green
            googleColorId = '10'; // Google Calendar Green
            categoryName = 'GOOD';
        } else if (tarapalanData.quality === 'bad') {
            eventColor = '#ef4444'; // Red
            googleColorId = '11'; // Google Calendar Red
            categoryName = 'BAD';
        } else {
            eventColor = '#f59e0b'; // Orange/Yellow for medium
            googleColorId = '5'; // Google Calendar Yellow
            categoryName = 'MEDIUM';
        }
        
        const startDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 
                                     parseInt(nakshatraData.startTime.split(':')[0]), 
                                     parseInt(nakshatraData.startTime.split(':')[1]));
        const endDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 
                                   parseInt(nakshatraData.endTime.split(':')[0]), 
                                   parseInt(nakshatraData.endTime.split(':')[1]));
        
        icsContent += `BEGIN:VEVENT\n`;
        icsContent += `UID:magha-tarapalan-${currentYear}-${currentMonth}-${day}@tarapalan.app\n`;
        icsContent += `DTSTAMP:${formatDateForICS(new Date())}\n`;
        icsContent += `SUMMARY:[${categoryName}] ${nakshatraData.tamil} - ${tarapalanData.taraName}\n`;
        icsContent += `DESCRIPTION:${nakshatraData.tamil} - ${tarapalanData.taraName}\\nதரம்: ${tarapalanData.qualityText}\\nவிளக்கம்: ${tarapalanData.description}\n`;
        icsContent += `DTSTART:${formatDateForICS(startDateTime)}\n`;
        icsContent += `DTEND:${formatDateForICS(endDateTime)}\n`;
        // Multiple color properties for different calendar apps
        icsContent += `COLOR:${eventColor}\n`;
        icsContent += `X-APPLE-COLOR:${eventColor}\n`;
        icsContent += `CATEGORIES:${categoryName},${tarapalanData.quality === 'good' ? 'Green' : tarapalanData.quality === 'bad' ? 'Red' : 'Orange'}\n`;
        icsContent += `END:VEVENT\n`;
    }
    
    icsContent += 'END:VCALENDAR';
    
    // Download the file
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `magha-tarapalan-${currentYear}-${String(currentMonth + 1).padStart(2, '0')}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Format date for ICS format
function formatDateForICS(date) {
    return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}
