// Nakshatra list (27 nakshatras) with Tamil names
const nakshatras = [
    { english: 'Ashwini', tamil: 'அஸ்வினி' },
    { english: 'Bharani', tamil: 'பரணி' },
    { english: 'Krittika', tamil: 'கிருத்திகை' },
    { english: 'Rohini', tamil: 'ரோகிணி' },
    { english: 'Mrigashira', tamil: 'மிருகசீரிஷம்' },
    { english: 'Ardra', tamil: 'ஆர்த்ரா' },
    { english: 'Punarvasu', tamil: 'புனர்வசு' },
    { english: 'Pushya', tamil: 'புஷ்யம்' },
    { english: 'Ashlesha', tamil: 'ஆயில்யம்' },
    { english: 'Magha', tamil: 'மகம்' },
    { english: 'Purva Phalguni', tamil: 'பூரம்' },
    { english: 'Uttara Phalguni', tamil: 'உத்தரம்' },
    { english: 'Hasta', tamil: 'ஹஸ்தம்' },
    { english: 'Chitra', tamil: 'சித்திரை' },
    { english: 'Swati', tamil: 'ஸ்வாதி' },
    { english: 'Vishakha', tamil: 'விசாகம்' },
    { english: 'Anuradha', tamil: 'அனுஷம்' },
    { english: 'Jyeshta', tamil: 'கேட்டை' },
    { english: 'Mula', tamil: 'மூலம்' },
    { english: 'Purva Ashadha', tamil: 'பூராடம்' },
    { english: 'Uttara Ashadha', tamil: 'உத்திராடம்' },
    { english: 'Shravana', tamil: 'திருவோணம்' },
    { english: 'Dhanishta', tamil: 'அவிட்டம்' },
    { english: 'Shatabhisha', tamil: 'சதயம்' },
    { english: 'Purva Bhadrapada', tamil: 'பூரட்டாதி' },
    { english: 'Uttara Bhadrapada', tamil: 'உத்திரட்டாதி' },
    { english: 'Revati', tamil: 'ரேவதி' }
];

// Tithi data (30 lunar days) - 15 Shukla Paksha + 15 Krishna Paksha
const tithis = [
    { number: 1, name: 'Pratipada', tamil: 'பிரதமை', paksha: 'shukla', type: 'Nanda' },
    { number: 2, name: 'Dwitiya', tamil: 'துவிதியை', paksha: 'shukla', type: 'Bhadra' },
    { number: 3, name: 'Tritiya', tamil: 'திருதியை', paksha: 'shukla', type: 'Jaya' },
    { number: 4, name: 'Chaturthi', tamil: 'சதுர்த்தி', paksha: 'shukla', type: 'Rikta' },
    { number: 5, name: 'Panchami', tamil: 'பஞ்சமி', paksha: 'shukla', type: 'Poorna' },
    { number: 6, name: 'Shashthi', tamil: 'சஷ்டி', paksha: 'shukla', type: 'Nanda' },
    { number: 7, name: 'Saptami', tamil: 'சப்தமி', paksha: 'shukla', type: 'Bhadra' },
    { number: 8, name: 'Ashtami', tamil: 'அஷ்டமி', paksha: 'shukla', type: 'Jaya' },
    { number: 9, name: 'Navami', tamil: 'நவமி', paksha: 'shukla', type: 'Rikta' },
    { number: 10, name: 'Dashami', tamil: 'தசமி', paksha: 'shukla', type: 'Poorna' },
    { number: 11, name: 'Ekadashi', tamil: 'ஏகாதசி', paksha: 'shukla', type: 'Nanda' },
    { number: 12, name: 'Dwadashi', tamil: 'துவாதசி', paksha: 'shukla', type: 'Bhadra' },
    { number: 13, name: 'Trayodashi', tamil: 'த்ரயோதசி', paksha: 'shukla', type: 'Jaya' },
    { number: 14, name: 'Chaturdashi', tamil: 'சதுர்த்தசி', paksha: 'shukla', type: 'Rikta' },
    { number: 15, name: 'Purnima', tamil: 'பூர்ணிமா', paksha: 'shukla', type: 'Poorna' },
    { number: 1, name: 'Pratipada', tamil: 'பிரதமை', paksha: 'krishna', type: 'Nanda' },
    { number: 2, name: 'Dwitiya', tamil: 'துவிதியை', paksha: 'krishna', type: 'Bhadra' },
    { number: 3, name: 'Tritiya', tamil: 'திருதியை', paksha: 'krishna', type: 'Jaya' },
    { number: 4, name: 'Chaturthi', tamil: 'சதுர்த்தி', paksha: 'krishna', type: 'Rikta' },
    { number: 5, name: 'Panchami', tamil: 'பஞ்சமி', paksha: 'krishna', type: 'Poorna' },
    { number: 6, name: 'Shashthi', tamil: 'சஷ்டி', paksha: 'krishna', type: 'Nanda' },
    { number: 7, name: 'Saptami', tamil: 'சப்தமி', paksha: 'krishna', type: 'Bhadra' },
    { number: 8, name: 'Ashtami', tamil: 'அஷ்டமி', paksha: 'krishna', type: 'Jaya' },
    { number: 9, name: 'Navami', tamil: 'நவமி', paksha: 'krishna', type: 'Rikta' },
    { number: 10, name: 'Dashami', tamil: 'தசமி', paksha: 'krishna', type: 'Poorna' },
    { number: 11, name: 'Ekadashi', tamil: 'ஏகாதசி', paksha: 'krishna', type: 'Nanda' },
    { number: 12, name: 'Dwadashi', tamil: 'துவாதசி', paksha: 'krishna', type: 'Bhadra' },
    { number: 13, name: 'Trayodashi', tamil: 'த்ரயோதசி', paksha: 'krishna', type: 'Jaya' },
    { number: 14, name: 'Chaturdashi', tamil: 'சதுர்த்தசி', paksha: 'krishna', type: 'Rikta' },
    { number: 15, name: 'Amavasya', tamil: 'அமாவாசை', paksha: 'krishna', type: 'Poorna' }
];

// Yoga data (27 yogas)
const yogas = [
    { name: 'Vishkambha', tamil: 'விஷ்கம்ப', meaning: 'Support' },
    { name: 'Priti', tamil: 'பிரீதி', meaning: 'Love' },
    { name: 'Ayushman', tamil: 'ஆயுஷ்மான்', meaning: 'Longevity' },
    { name: 'Saubhagya', tamil: 'சௌபாக்ய', meaning: 'Good Fortune' },
    { name: 'Shobhana', tamil: 'சோபன', meaning: 'Splendor' },
    { name: 'Atiganda', tamil: 'அதிகண்ட', meaning: 'Great Danger' },
    { name: 'Sukarma', tamil: 'சுகர்மா', meaning: 'Good Works' },
    { name: 'Dhriti', tamil: 'த்ரிதி', meaning: 'Determination' },
    { name: 'Shoola', tamil: 'சூலா', meaning: 'Thorn' },
    { name: 'Ganda', tamil: 'கண்ட', meaning: 'Danger' },
    { name: 'Vriddhi', tamil: 'விருத்தி', meaning: 'Growth' },
    { name: 'Dhruva', tamil: 'த்ருவ', meaning: 'Fixed' },
    { name: 'Vyaghata', tamil: 'வ்யாகாத', meaning: 'Obstacle' },
    { name: 'Harshana', tamil: 'ஹர்ஷண', meaning: 'Joy' },
    { name: 'Vajra', tamil: 'வஜ்ர', meaning: 'Thunderbolt' },
    { name: 'Siddhi', tamil: 'சித்தி', meaning: 'Success' },
    { name: 'Vyatipata', tamil: 'வ்யதீபாத', meaning: 'Disaster' },
    { name: 'Varigha', tamil: 'வரீகா', meaning: 'Boon' },
    { name: 'Shiva', tamil: 'சிவ', meaning: 'Auspicious' },
    { name: 'Siddha', tamil: 'சித்தா', meaning: 'Accomplished' },
    { name: 'Sadhya', tamil: 'சாத்ய', meaning: 'Possible' },
    { name: 'Shubha', tamil: 'சுப', meaning: 'Good' },
    { name: 'Shukla', tamil: 'சுக்ல', meaning: 'Bright' },
    { name: 'Brahma', tamil: 'பிரம்ம', meaning: 'Creator' },
    { name: 'Indra', tamil: 'இந்திர', meaning: 'King' },
    { name: 'Vaidhriti', tamil: 'வைத்ருதி', meaning: 'Support' }
];

// Karana data (11 karanas - 7 movable + 4 fixed)
const karanas = [
    { name: 'Bava', tamil: 'பவ', type: 'movable', quality: 'good' },
    { name: 'Balava', tamil: 'பாலவ', type: 'movable', quality: 'good' },
    { name: 'Kaulava', tamil: 'கௌலவ', type: 'movable', quality: 'good' },
    { name: 'Taitila', tamil: 'தைதில', type: 'movable', quality: 'good' },
    { name: 'Garaja', tamil: 'கரஜ', type: 'movable', quality: 'mixed' },
    { name: 'Vanija', tamil: 'வணிஜ', type: 'movable', quality: 'good' },
    { name: 'Vishti', tamil: 'விஷ்டி', type: 'movable', quality: 'bad' },
    { name: 'Shakuni', tamil: 'சகுனி', type: 'fixed', quality: 'bad' },
    { name: 'Chatushpada', tamil: 'சதுட்பாத', type: 'fixed', quality: 'mixed' },
    { name: 'Naga', tamil: 'நாக', type: 'fixed', quality: 'bad' },
    { name: 'Kimstughna', tamil: 'கிம்ஸ்துக்ன', type: 'fixed', quality: 'mixed' }
];

// Location coordinates for Madurai
const MADHURAI_LOCATION = {
    latitude: 9.925211875760796,
    longitude: 78.11977005959939,
    timezone: 'Asia/Kolkata'
};

// Birth nakshatra (Magha)
const birthNakshatra = 'மகம்';
const birthNakshatraIndex = 9; // Magha is the 10th nakshatra (0-indexed)

// Current date and month tracking
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Tamil month names
const tamilMonths = [
    'ஜனவரி', 'பிப்ரவரி', 'மார்ச்', 'ஏப்ரல்', 'மே', 'ஜூன்',
    'ஜூலை', 'ஆகஸ்ட்', 'செப்டம்பர்', 'அக்டோபர்', 'நவம்பர்', 'டிசம்பர்'
];

// Calculate sunrise time for the location
function calculateSunrise(date) {
    // Simplified sunrise calculation for Madurai location
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
    const lat = MADHURAI_LOCATION.latitude;
    
    // Approximate sunrise calculation
    const declination = -23.45 * Math.cos((2 * Math.PI * (dayOfYear + 10)) / 365);
    const hourAngle = Math.acos(-Math.tan(lat * Math.PI / 180) * Math.tan(declination * Math.PI / 180));
    const sunriseHour = 12 - hourAngle * 12 / Math.PI;
    
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 
                   Math.floor(sunriseHour), Math.floor((sunriseHour % 1) * 60));
}

// Convert date to Julian Day (UT)
function getJulianDay(date) {
    let year = date.getUTCFullYear();
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate() + (date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600) / 24;

    if (month <= 2) {
        year -= 1;
        month += 12;
    }

    let A = Math.floor(year / 100);
    let B = 2 - A + Math.floor(A / 4);
    let JD = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
    return JD;
}

// Calculate Lahiri Ayanamsa for a given Julian Day
function getLahiriAyanamsa(jd) {
    const T = (jd - 2451545.0) / 36525;
    // Standard Lahiri Ayanamsa formula: 23° 51' 25.53" at J2000.0 + rate
    let ayanamsa = 23.856507 + 1.3969713 * T + 0.0003086 * T * T;
    return ayanamsa;
}

// Calculate Moon's Geocentric Longitude using Jean Meeus (simplified version of Chapter 47)
function calculateMoonPosition(date) {
    const jd = getJulianDay(date);
    const T = (jd - 2451545.0) / 36525;

    // Mean longitude of the Moon
    let L0 = 218.3164477 + 481267.88123421 * T - 0.0015786 * T * T + T * T * T / 538841 - T * T * T * T / 65194000;
    
    // Mean elongation of the Moon
    let D = 297.8501921 + 445267.1114034 * T - 0.0018819 * T * T + T * T * T / 545868 - T * T * T * T / 113065000;
    
    // Mean anomaly of the Sun
    let M = 357.5291092 + 35999.0502909 * T - 0.0001536 * T * T + T * T * T / 24490000;
    
    // Mean anomaly of the Moon
    let M_prime = 134.9633964 + 477198.8675055 * T + 0.0087414 * T * T + T * T * T / 69699 - T * T * T * T / 14712000;
    
    // Moon's argument of latitude
    let F = 93.2720950 + 483202.0175233 * T - 0.0036539 * T * T - T * T * T / 3526000 + T * T * T * T / 863310000;

    // Major corrections in longitude (Arcseconds)
    let sum_l = 22640 * Math.sin(M_prime * Math.PI / 180)
              - 4586 * Math.sin((M_prime - 2 * D) * Math.PI / 180)
              + 2370 * Math.sin(2 * D * Math.PI / 180)
              + 769 * Math.sin(2 * M_prime * Math.PI / 180)
              - 668 * Math.sin(M * Math.PI / 180)
              - 412 * Math.sin(2 * F * Math.PI / 180)
              - 212 * Math.sin((2 * M_prime - 2 * D) * Math.PI / 180)
              - 206 * Math.sin((M_prime + M - 2 * D) * Math.PI / 180)
              + 192 * Math.sin((M_prime + 2 * D) * Math.PI / 180)
              - 165 * Math.sin((M - 2 * D) * Math.PI / 180)
              + 148 * Math.sin((M_prime - M) * Math.PI / 180)
              - 125 * Math.sin(D * Math.PI / 180)
              - 110 * Math.sin((M_prime + M) * Math.PI / 180)
              - 55 * Math.sin((2 * F - 2 * D) * Math.PI / 180);

    let moonLongitude = L0 + (sum_l / 3600);
    
    // Apply Lahiri Ayanamsa
    let ayanamsa = getLahiriAyanamsa(jd);
    let siderealLongitude = (moonLongitude - ayanamsa) % 360;
    if (siderealLongitude < 0) siderealLongitude += 360;

    return { longitude: siderealLongitude };
}

// Calculate Sun's Geocentric Longitude using Jean Meeus (simplified)
function calculateSunPosition(date) {
    const jd = getJulianDay(date);
    const T = (jd - 2451545.0) / 36525;

    // Mean longitude of the Sun
    let L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
    L0 = L0 % 360;
    if (L0 < 0) L0 += 360;

    // Mean anomaly of the Sun
    let M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
    M = M % 360;
    if (M < 0) M += 360;

    // Equation of center
    let C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M * Math.PI / 180)
          + (0.019993 - 0.000101 * T) * Math.sin(2 * M * Math.PI / 180)
          + 0.000289 * Math.sin(3 * M * Math.PI / 180);

    // True longitude
    let sunLongitude = L0 + C;
    sunLongitude = sunLongitude % 360;
    if (sunLongitude < 0) sunLongitude += 360;

    // Apply Lahiri Ayanamsa
    let ayanamsa = getLahiriAyanamsa(jd);
    let siderealLongitude = (sunLongitude - ayanamsa) % 360;
    if (siderealLongitude < 0) siderealLongitude += 360;

    return { longitude: siderealLongitude };
}

// Calculate Tithi (lunar day)
function calculateTithi(date) {
    const moon = calculateMoonPosition(date);
    const sun = calculateSunPosition(date);
    
    // Tithi is based on the difference between Moon and Sun longitude
    let diff = (moon.longitude - sun.longitude) % 360;
    if (diff < 0) diff += 360;
    
    // Each tithi is 12 degrees (360 / 30)
    const tithiIndex = Math.floor(diff / 12);
    const paksha = tithiIndex < 15 ? 'shukla' : 'krishna';
    const tithiNumber = (tithiIndex % 15) + 1;
    
    return {
        index: tithiIndex,
        number: tithiNumber,
        paksha: paksha,
        name: tithis[tithiIndex],
        diff: diff
    };
}

// Calculate Yoga (27 combinations of Sun + Moon positions)
function calculateYoga(date) {
    const moon = calculateMoonPosition(date);
    const sun = calculateSunPosition(date);
    
    // Yoga is based on sum of Moon and Sun longitude
    let sum = (moon.longitude + sun.longitude) % 360;
    if (sum < 0) sum += 360;
    
    // Each yoga is 13°20' (same as nakshatra - 360 / 27)
    const yogaIndex = Math.floor(sum / (13 + 20/60)) % 27;
    
    return {
        index: yogaIndex,
        name: yogas[yogaIndex],
        sum: sum
    };
}

// Calculate Karana (half of a tithi)
function calculateKarana(date) {
    const tithi = calculateTithi(date);
    const moon = calculateMoonPosition(date);
    const sun = calculateSunPosition(date);
    
    // Karana is half of a tithi (6 degrees each)
    let diff = (moon.longitude - sun.longitude) % 360;
    if (diff < 0) diff += 360;
    
    // Each tithi has 2 karanas
    const karanaIndexInTithi = Math.floor((diff % 12) / 6);
    const tithiNumber = tithi.number;
    const paksha = tithi.paksha;
    
    // Fixed karanas at specific times
    let karanaIndex;
    const tithiIndex = tithi.index;
    if (paksha === 'shukla' && tithiNumber === 1 && karanaIndexInTithi === 0) {
        karanaIndex = 10; // Kimstughna
    } else if (paksha === 'krishna' && tithiNumber === 15 && karanaIndexInTithi === 1) {
        karanaIndex = 10; // Kimstughna
    } else {
        // Movable karanas cycle through 0-6
        karanaIndex = ((tithiIndex * 2 + karanaIndexInTithi) % 7);
    }
    
    return {
        tithiIndex: tithi.index,
        tithiNumber: tithiNumber,
        karanaIndex: karanaIndex,
        name: karanas[karanaIndex],
        paksha: paksha
    };
}

// Calculate complete Panchanga for a date
function calculatePanchanga(date) {
    const tithi = calculateTithi(date);
    const yoga = calculateYoga(date);
    const karana = calculateKarana(date);
    const nakshatra = calculateNakshatraWithTime(date);
    
    return {
        tithi: tithi,
        yoga: yoga,
        karana: karana,
        nakshatra: nakshatra,
        date: date
    };
}

// Calculate nakshatra for a given date with location-specific timing
function calculateNakshatraWithTime(date) {
    const currentMoon = calculateMoonPosition(date);
    const nakshatraIndex = Math.floor(currentMoon.longitude / (13 + 20/60)) % 27;
    const nakshatra = nakshatras[nakshatraIndex];
    
    // Find transition times (simplified binary search/iterative approach)
    // We look 24 hours before and after to find the boundary
    let startTime = "00:00";
    let endTime = "24:00";
    
    const findBoundary = (targetTime, direction) => {
        let low = 0;
        let high = 24 * 60; // 24 hours in minutes
        let boundaryTime = targetTime;
        
        for (let i = 0; i < 15; i++) { // Binary search precision ~1 min
            let mid = (low + high) / 2;
            let testDate = new Date(targetTime.getTime() + (direction * mid * 60 * 1000));
            let testMoon = calculateMoonPosition(testDate);
            let testIndex = Math.floor(testMoon.longitude / (13 + 20/60)) % 27;
            
            if (testIndex === nakshatraIndex) {
                low = mid;
                boundaryTime = testDate;
            } else {
                high = mid;
            }
        }
        return boundaryTime;
    };

    const startBoundary = findBoundary(date, -1);
    const endBoundary = findBoundary(date, 1);
    
    const formatTime = (d) => `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;

    return {
        ...nakshatra,
        startTime: formatTime(startBoundary),
        endTime: formatTime(endBoundary),
        location: MADHURAI_LOCATION,
        longitude: currentMoon.longitude
    };
}

// Verify tarapalan calculation with detailed breakdown
function verifyTarapalanCalculation(date) {
    const nakshatraData = calculateNakshatraWithTime(date);
    const currentIndex = nakshatras.findIndex(n => n.tamil === nakshatraData.tamil);
    
    // Step-by-step calculation
    const step1 = currentIndex - birthNakshatraIndex;
    const step2 = step1 + 27;
    const forwardDistance = step2 % 27;
    const taraCode = forwardDistance % 9;
    
    // Get nakshatra names in sequence
    const sequence = [];
    for (let i = 0; i <= forwardDistance; i++) {
        const idx = (birthNakshatraIndex + i) % 27;
        sequence.push(nakshatras[idx].tamil);
    }
    
    return {
        date: date.toLocaleDateString('ta-IN'),
        birthNakshatra: birthNakshatra,
        birthIndex: birthNakshatraIndex,
        currentNakshatra: nakshatraData.tamil,
        currentIndex: currentIndex,
        calculation: `${currentIndex} - ${birthNakshatraIndex} = ${step1}`,
        add27: `${step1} + 27 = ${step2}`,
        mod27: `${step2} mod 27 = ${forwardDistance}`,
        mod9: `${forwardDistance} mod 9 = ${taraCode}`,
        taraName: getTaraName(taraCode),
        sequence: sequence,
        moonLongitude: nakshatraData.longitude
    };
}

function getTaraName(code) {
    const names = ['ஜன்ம தாரா', 'சம்பத் தாரா', 'விபத் தாரா', 'க்ஷேம தாரா', 
                   'பிரத்யக் தாரா', 'ஸாதக தாரா', 'வத தாரா', 'மித்ர தாரா', 'பரம மித்ர தாரா'];
    return names[code];
}

// Calculate tarapalan based on distance between birth nakshatra and current nakshatra
function calculateTarapalan(currentNakshatraIndex) {
    // Traditional method: Count forward from birth nakshatra to current nakshatra
    // Formula: ((current - birth + 27) % 27) % 9
    let forwardDistance = (currentNakshatraIndex - birthNakshatraIndex + 27) % 27;
    
    // Tara is determined by modulo 9 of the forward distance
    const taraDistance = forwardDistance % 9;
    
    // Tara names in Tamil based on distance (0-8) - Traditional Panchangam Order
    const taraNames = {
        0: { name: 'ஜன்ம தாரா', quality: 'bad', tamil: 'ஜன்ம', meaning: 'பிறப்பு - தவிர்க்கவும்', description: 'ஜன்ம தாரா - முக்கிய செயல்களைத் தவிர்க்கவும்', qualityText: 'கெட்டது' },
        1: { name: 'சம்பத் தாரா', quality: 'good', tamil: 'சம்பத்', meaning: 'செல்வம் - நல்லது', description: 'சம்பத் தாரா - செல்வம் தரும்', qualityText: 'நல்லது' },
        2: { name: 'விபத் தாரா', quality: 'bad', tamil: 'விபத்', meaning: 'துன்பம் - தவிர்க்கவும்', description: 'விபத் தாரா - துன்பம் தரும்', qualityText: 'கெட்டது' },
        3: { name: 'க்ஷேம தாரா', quality: 'good', tamil: 'க்ஷேம', meaning: 'நலம் - நல்லது', description: 'க்ஷேம தாரா - நலம் தரும்', qualityText: 'நல்லது' },
        4: { name: 'பிரத்யக் தாரா', quality: 'bad', tamil: 'பிரத்யக்', meaning: 'எதிர்ப்பு - தவிர்க்கவும்', description: 'பிரத்யக் தாரா - எதிர்ப்பு', qualityText: 'கெட்டது' },
        5: { name: 'ஸாதக தாரா', quality: 'good', tamil: 'ஸாதக', meaning: 'வெற்றி - நல்லது', description: 'ஸாதக தாரா - வெற்றி தரும்', qualityText: 'நல்லது' },
        6: { name: 'வத தாரா', quality: 'bad', tamil: 'வத', meaning: 'அழிவு - தவிர்க்கவும்', description: 'வத தாரா - அழிவு தரும்', qualityText: 'கெட்டது' },
        7: { name: 'மித்ர தாரா', quality: 'good', tamil: 'மித்ர', meaning: 'நண்பன் - நல்லது', description: 'மித்ர தாரா - நண்பன் போல்', qualityText: 'நல்லது' },
        8: { name: 'பரம மித்ர தாரா', quality: 'good', tamil: 'பரம மித்ர', meaning: 'சிறந்த நண்பன் - நல்லது', description: 'பரம மித்ர தாரா - சிறந்த நண்பன்', qualityText: 'நல்லது' }
    };
    
    const taraInfo = taraNames[taraDistance];
    
    return {
        quality: taraInfo.quality,
        distance: forwardDistance,
        taraName: taraInfo.name,
        description: taraInfo.description,
        qualityText: taraInfo.qualityText,
        calculation: `(${currentNakshatraIndex} - ${birthNakshatraIndex} + 27) mod 27 = ${forwardDistance}, mod 9 = ${taraDistance}`
    };
}

// Calculate all 9 tara types for detailed display (Traditional Panchang Method)
function calculateAllTaraTypes() {
    const allTaras = [];
    
    for (let distance = 0; distance < 9; distance++) {
        // Traditional: Start from birth nakshatra and count forward
        const taraIndex = (birthNakshatraIndex + distance) % 27;
        const nakshatra = nakshatras[taraIndex];
        
        const taraInfo = {
            0: { name: 'ஜன்ம தாரா', quality: 'bad', tamil: 'ஜன்ம', meaning: 'பிறப்பு - தவிர்க்கவும்' },
            1: { name: 'சம்பத் தாரா', quality: 'good', tamil: 'சம்பத்', meaning: 'செல்வம் - நல்லது' },
            2: { name: 'விபத் தாரா', quality: 'bad', tamil: 'விபத்', meaning: 'துன்பம் - தவிர்க்கவும்' },
            3: { name: 'க்ஷேம தாரா', quality: 'good', tamil: 'க்ஷேம', meaning: 'நலம் - நல்லது' },
            4: { name: 'பிரத்யக் தாரா', quality: 'bad', tamil: 'பிரத்யக்', meaning: 'எதிர்ப்பு - தவிர்க்கவும்' },
            5: { name: 'ஸாதக தாரா', quality: 'good', tamil: 'ஸாதக', meaning: 'வெற்றி - நல்லது' },
            6: { name: 'வத தாரா', quality: 'bad', tamil: 'வத', meaning: 'அழிவு - தவிர்க்கவும்' },
            7: { name: 'மித்ர தாரா', quality: 'good', tamil: 'மித்ர', meaning: 'நண்பன் - நல்லது' },
            8: { name: 'பரம மித்ர தாரா', quality: 'good', tamil: 'பரம மித்ர', meaning: 'சிறந்த நண்பன் - நல்லது' }
        };
        
        allTaras.push({
            distance: distance,
            taraName: taraInfo[distance].name,
            taraShort: taraInfo[distance].tamil,
            quality: taraInfo[distance].quality,
            meaning: taraInfo[distance].meaning,
            nakshatra: nakshatra.tamil,
            nakshatraIndex: taraIndex,
            formula: `(${birthNakshatraIndex} + ${distance}) mod 27 = ${taraIndex}`,
            panchangMethod: `Forward count from ${birthNakshatra} to ${nakshatra.tamil} = ${distance}`
        });
    }
    
    return allTaras;
}

// Display all tara types in the UI
function displayAllTaraTypes() {
    const allTaras = calculateAllTaraTypes();
    const today = new Date();
    const todayNakshatra = calculateNakshatraWithTime(today);
    const todayIndex = nakshatras.findIndex(n => n.tamil === todayNakshatra.tamil);
    // Traditional calculation: forward distance from birth to today, then mod 9
    const forwardDistance = (todayIndex - birthNakshatraIndex + 27) % 27;
    const todayDistance = forwardDistance % 9;
    
    let html = `
        <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse border border-gray-300">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-3 py-2 text-left tamil-text">தூரம்</th>
                        <th class="border border-gray-300 px-3 py-2 text-left tamil-text">தாரா பெயர்</th>
                        <th class="border border-gray-300 px-3 py-2 text-left tamil-text">அர்த்தம்</th>
                        <th class="border border-gray-300 px-3 py-2 text-left tamil-text">நட்சத்திரம்</th>
                        <th class="border border-gray-300 px-3 py-2 text-left tamil-text">கணக்கீடு</th>
                        <th class="border border-gray-300 px-3 py-2 text-left tamil-text">தரம்</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    allTaras.forEach(tara => {
        const isToday = tara.distance === todayDistance;
        const rowClass = isToday ? 'bg-yellow-100 font-bold' : 
                        tara.quality === 'good' ? 'bg-green-50' : 
                        tara.quality === 'bad' ? 'bg-red-50' : 'bg-orange-50';
        
        const qualityText = tara.quality === 'good' ? '✓ நல்லது' : 
                           tara.quality === 'bad' ? '✗ கெட்டது' : '◐ நடுத்தரம்';
        
        html += `
            <tr class="${rowClass}">
                <td class="border border-gray-300 px-3 py-2">${tara.distance}</td>
                <td class="border border-gray-300 px-3 py-2 tamil-text font-semibold">${tara.taraName}</td>
                <td class="border border-gray-300 px-3 py-2 tamil-text text-xs">${tara.meaning}</td>
                <td class="border border-gray-300 px-3 py-2 tamil-text">${tara.nakshatra}</td>
                <td class="border border-gray-300 px-3 py-2 text-xs font-mono">${tara.panchangMethod}</td>
                <td class="border border-gray-300 px-3 py-2 tamil-text">${qualityText}</td>
            </tr>
        `;
    });
    
    html += `
                </tbody>
            </table>
        </div>
        <div class="mt-4 p-4 bg-blue-50 rounded-lg">
            <h4 class="font-bold tamil-text mb-2">பாரம்பரிய பஞ்சாங்க கணக்கீட்டு முறை:</h4>
            <p class="text-sm tamil-text mb-2">
                <strong>பிறந்த நட்சத்திரம்:</strong> ${birthNakshatra} (index: ${birthNakshatraIndex})
            </p>
            <p class="text-sm tamil-text mb-2">
                <strong>இன்றைய நட்சத்திரம்:</strong> ${todayNakshatra.tamil} (index: ${todayIndex})
            </p>
            <p class="text-sm tamil-text mb-2">
                <strong>முன்னோக்கு கணக்கீடு:</strong> (${todayIndex} - ${birthNakshatraIndex} + 27) mod 27 = ${forwardDistance}
            </p>
            <p class="text-sm tamil-text mb-2">
                <strong>தாரா குறியீடு:</strong> ${forwardDistance} mod 9 = ${todayDistance}
            </p>
            <p class="text-sm tamil-text font-bold text-blue-800">
                <strong>இன்றைய தாரா:</strong> ${allTaras[todayDistance].taraName} - ${allTaras[todayDistance].meaning}
            </p>
        </div>
    `;
    
    return html;
}

// Format date for display in Tamil
function formatDate(date) {
    return date.toLocaleDateString('ta-IN', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Generate calendar for current month
function generateCalendar() {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const calendarGrid = document.getElementById('calendarGrid');
    calendarGrid.innerHTML = '';
    
    // Update month display in Tamil
    document.getElementById('currentMonth').textContent = `${tamilMonths[currentMonth]} ${currentYear}`;
    
    // Generate 42 days (6 weeks)
    for (let i = 0; i < 42; i++) {
        const cellDate = new Date(startDate);
        cellDate.setDate(startDate.getDate() + i);
        
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day border rounded-lg p-2 transition-all hover:shadow-md';
        
        // Check if date is in current month
        if (cellDate.getMonth() !== currentMonth) {
            dayElement.className += ' bg-gray-100 opacity-50';
        } else {
            const panchanga = calculatePanchanga(cellDate);
            const nakshatraData = panchanga.nakshatra;
            const tarapalan = calculateTarapalan(nakshatras.findIndex(n => n.tamil === nakshatraData.tamil));
            
            // Add color coding based on tarapalan
            if (tarapalan.quality === 'good') {
                dayElement.className += ' good-tara text-white';
            } else if (tarapalan.quality === 'medium') {
                dayElement.className += ' medium-tara text-white';
            } else {
                dayElement.className += ' bad-tara text-white';
            }
            
            // Highlight today
            const today = new Date();
            if (cellDate.toDateString() === today.toDateString()) {
                dayElement.className += ' ring-4 ring-blue-400';
            }
        }
        
        dayElement.innerHTML = `
            <div class="font-semibold text-sm">${cellDate.getDate()}</div>
            ${cellDate.getMonth() === currentMonth ? `
                <div class="text-xs mt-1 tamil-text">${calculatePanchanga(cellDate).nakshatra.tamil}</div>
                <div class="text-xs mt-1 tamil-text text-yellow-200">${calculatePanchanga(cellDate).tithi.name.tamil}</div>
                <div class="text-xs tamil-text">${calculateTarapalan(nakshatras.findIndex(n => n.tamil === calculatePanchanga(cellDate).nakshatra.tamil)).taraName}</div>
            ` : ''}
        `;
        
        calendarGrid.appendChild(dayElement);
    }
    
    updateTodayInfo();
}

// Update today's information in Tamil with Panchanga
function updateTodayInfo() {
    const today = new Date();
    const panchanga = calculatePanchanga(today);
    const todayNakshatra = panchanga.nakshatra;
    const todayTarapalan = calculateTarapalan(nakshatras.findIndex(n => n.tamil === todayNakshatra.tamil));
    
    const todayInfo = document.getElementById('todayInfo');
    todayInfo.innerHTML = `
        <div class="space-y-2 tamil-text">
            <p><strong>தேதி:</strong> ${formatDate(today)}</p>
            <p><strong>இடம்:</strong> மதுரை (${MADHURAI_LOCATION.latitude.toFixed(4)}, ${MADHURAI_LOCATION.longitude.toFixed(4)})</p>
            
            <div class="border-t pt-2 mt-2">
                <h4 class="font-bold text-indigo-700">பஞ்சாங்கம்:</h4>
                <p><strong>திதி:</strong> ${panchanga.tithi.name.tamil} (${panchanga.tithi.name.paksha === 'shukla' ? 'சுக್ಲ पక்ष' : 'கிருஷ்ண பட்ஷ'})</p>
                <p><strong>நட்சத்திரம்:</strong> ${todayNakshatra.tamil} (${todayNakshatra.startTime} - ${todayNakshatra.endTime})</p>
                <p><strong>யோகம்:</strong> ${panchanga.yoga.name.tamil}</p>
                <p><strong>கரணம்:</strong> ${panchanga.karana.name.tamil} (${panchanga.karana.name.type === 'movable' ? 'சர' : 'ஸ்திர'})</p>
            </div>
            
            <div class="border-t pt-2 mt-2">
                <h4 class="font-bold text-indigo-700">தரபாலன்:</h4>
                <p><strong>பிறந்த நட்சத்திரம்:</strong> ${birthNakshatra}</p>
                <p><strong>தாரா:</strong> <span class="font-semibold">${todayTarapalan.taraName}</span></p>
                <p><strong>தரம்:</strong> <span class="font-semibold">${todayTarapalan.qualityText}</span></p>
                <p><strong>விளக்கம்:</strong> ${todayTarapalan.description}</p>
            </div>
        </div>
        <div class="mt-4">
            <button onclick="toggleTaraDetails()" class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition tamil-text">
                அனைத்து தாரா வகைகளையும் காட்டு/மறை
            </button>
        </div>
        <div id="taraDetails" style="display:none;" class="mt-4">
            ${displayAllTaraTypes()}
        </div>
    `;
}

// Toggle tara details display
function toggleTaraDetails() {
    const taraDetails = document.getElementById('taraDetails');
    if (taraDetails.style.display === 'none') {
        taraDetails.style.display = 'block';
    } else {
        taraDetails.style.display = 'none';
    }
}

// Navigation functions
function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar();
}

// Event listeners
document.getElementById('prevMonth').addEventListener('click', previousMonth);
document.getElementById('nextMonth').addEventListener('click', nextMonth);

// Initialize calendar on page load
document.addEventListener('DOMContentLoaded', function() {
    generateCalendar();
});
