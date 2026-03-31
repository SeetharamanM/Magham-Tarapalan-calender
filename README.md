# மக நட்சத்திர தரபாலன் நாட்காட்டி (Magha Nakshatra Tarapalan Calendar)

A web application that displays daily tarapalan (star compatibility) for Magha nakshatra specifically for the Madurai location. Features accurate astronomical calculations using the Jean Meeus method with Lahiri Ayanamsa.

🌐 **Live Demo**: [GitHub Repository](https://github.com/Seetharamanm/Magham-Tarapalan-Calender)

## ✨ Features

### Core Features
- **Tamil Interface**: Fully localized in Tamil language
- **Daily Tarapalan Calculation**: Traditional panchangam-based calculation for each day
- **Color-Coded Calendar**: Visual representation with:
  - 🟢 Green (Good): Sampat, Kshema, Sadhaka, Maithra, Parama Maithra
  - 🟠 Orange (Medium): Janma, Vipat, Pratyak, Vadha
  - 🔴 Red (Bad): (Traditional classification)
- **Location-Specific**: Configured for Madurai, Tamil Nadu (9.9252°N, 78.1198°E)

### Astronomical Accuracy
- **Jean Meeus Method**: Precise moon position calculation
- **Lahiri Ayanamsa**: Standard Indian astronomical correction
- **Nakshatra Timing**: Accurate start/end times for each nakshatra
- **Iterative Boundary Search**: Precise transition time calculation

### Calendar Integration
- **Google Calendar Sync**: Direct API integration for event creation
- **ICS Export**: Download and import to any calendar app with color coding
- **All-Day Events**: Clean display showing current nakshatra only

### Detailed Information
- **9 Tara Types Display**: Complete table with all tara calculations
- **Birth Star**: Fixed to Magha (மகம்) nakshatra
- **Calculation Breakdown**: Step-by-step formula display
- **Quality Indicators**: Good/Medium/Bad classification

## 🚀 Quick Start

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Seetharamanm/Magham-Tarapalan-Calender.git
   cd Magham-Tarapalan-Calender
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Google Calendar API (optional):
   - Follow `SETUP_GOOGLE_CALENDAR.md` for API setup
   - Add your `CLIENT_ID` and `API_KEY` to `google-calendar-config.js`

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## 📖 How Tarapalan is Calculated

### Traditional Panchangam Method

The calculation follows the standard Vedic astrology method:

1. **Count Forward**: From birth nakshatra (Magha) to current day's nakshatra
2. **Calculate Distance**: `((CurrentIndex - BirthIndex + 27) % 27) % 9`
3. **Determine Tara**: Result gives tara number (0-8)

### Tara Types (9 Categories)

| Distance | Tara Name | Quality | Meaning |
|----------|-----------|---------|---------|
| 0 | ஜன்ம தாரா | Bad | Birth - Avoid important activities |
| 1 | சம்பத் தாரா | Good | Wealth - Favorable |
| 2 | விபத் தாரா | Bad | Misfortune - Avoid |
| 3 | க்ஷேம தாரா | Good | Well-being - Favorable |
| 4 | பிரத்யக் தாரா | Bad | Opposition - Avoid |
| 5 | ஸாதக தாரா | Good | Success - Favorable |
| 6 | வத தாரா | Bad | Destruction - Avoid |
| 7 | மித்ர தாரா | Good | Friend - Favorable |
| 8 | பரம மித்ர தாரா | Good | Best Friend - Most Favorable |

### Astronomical Calculation

- **Julian Day**: Precise time calculation
- **Moon Longitude**: Jean Meeus algorithm
- **Ayanamsa**: Lahiri system for sidereal correction
- **Nakshatra**: 13°20' segments (27 total)

## 💻 Usage

### Web Interface
- **Navigation**: Use ← முந்தைய / அடுத்த → buttons to browse months
- **Today Highlight**: Current date has blue ring
- **Tara Details**: Click "அனைத்து தாரா வகைகளையும் காட்டு/மறை" for full table

### Google Calendar Sync
1. Click "கூகுள் உள்நுழைவு" to authenticate
2. Click "இந்த மாதத்தை ஒத்திசை" to sync all days
3. Events appear as all-day events with nakshatra name

### ICS Export
1. Click "ICS கோப்பாக ஏற்றுமதி"
2. Download `.ics` file
3. Import to any calendar application
4. Colors: Green (Good), Red (Bad), Orange (Medium)

## 🛠️ Technical Details

### Frontend
- **Framework**: Vanilla HTML5, CSS3, JavaScript
- **Styling**: Tailwind CSS with custom gradients
- **Fonts**: Noto Sans Tamil for Tamil text
- **Responsive**: Mobile and desktop compatible

### Astronomy Engine
- **Algorithm**: Jean Meeus "Astronomical Algorithms"
- **Correction**: Lahiri Ayanamsa (Chitrapaksha)
- **Precision**: Iterative search for nakshatra boundaries
- **Time Zone**: Asia/Kolkata (IST)

### Calendar Integration
- **Google API**: OAuth 2.0 with Calendar Events scope
- **ICS Format**: RFC 5545 compliant with color properties
- **Categories**: GOOD/BAD/MEDIUM for filtering

## 📁 Project Structure

```
Magham-Tarapalan-Calender/
├── index.html                  # Main HTML file
├── script.js                   # Core calculation logic
├── google-calendar-config.js   # Google API integration
├── package.json               # Dependencies
├── SETUP_GOOGLE_CALENDAR.md   # API setup instructions
├── README.md                  # This file
└── .gitignore                 # Git ignore rules
```

## 🔮 Future Enhancements

- [ ] Support for multiple birth nakshatras (user selectable)
- [ ] Additional panchanga elements (Tithi, Yoga, Karana)
- [ ] Rahu Kalam, Yama Gandam timings
- [ ] Push notifications for good tara days
- [ ] Mobile app (PWA)
- [ ] Multiple location support
- [ ] Yearly/Monthly PDF export

## ⚠️ Disclaimer

This application provides tarapalan calculations based on traditional Vedic astrology methods. While the astronomical calculations use established algorithms (Jean Meeus), the interpretation of results for important life decisions should be done in consultation with a qualified Vedic astrologer.

## 📜 License

This project is open source. Feel free to use, modify, and distribute.

## 🙏 Acknowledgments

- Jean Meeus for astronomical algorithms
- Lahiri Ayanamsa standard for Indian astrology
- Tamil astrological traditions

---

**Developed for**: Magha Nakshatra birth star holders in Madurai region  
**Calculation Method**: Traditional Panchangam with Jean Meeus Astronomy  
**Last Updated**: March 2026
