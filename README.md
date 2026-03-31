# Magha Nakshatra Tarapalan Calendar

A web application that displays daily tarapalan (star compatibility) for Magha nakshatra specifically for the Madurai location.

## Features

- **Daily Tarapalan Calculation**: Calculates the tarapalan for each day based on the distance between Magha nakshatra (birth star) and the current day's nakshatra
- **Color-Coded Calendar**: Visual representation with green for good days, orange for medium days, and red for bad days
- **Location-Specific**: Configured for Madurai location
- **Interactive Calendar**: Navigate between months to view tarapalan for any date
- **Today's Information**: Detailed view of current day's tarapalan status

## How Tarapalan is Calculated

Tarapalan is calculated based on the distance between your birth nakshatra (Magha) and the current day's nakshatra:

- **Good Tara** (Green): Distance of 2, 4, 6, 8, or 9 stars
- **Medium Tara** (Orange): Distance of 1, 3, 5, or 7 stars  
- **Bad Tara** (Red): Distance of 0 or multiple of 9 stars

## Installation and Running

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Usage

- Use the navigation buttons to browse through different months
- Click on any day to see detailed information
- Refer to the legend to understand the color coding
- Check "Today's Tarapalan" section for current day's status

## Technical Details

- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript
- **Nakshatra Calculation**: Simplified astronomical calculation for demonstration
- **Responsive Design**: Works on desktop and mobile devices
- **No Backend**: Pure frontend application

## Future Enhancements

- Integration with Google Calendar API for event creation
- More precise astronomical calculations for accurate nakshatra timing
- Support for multiple birth nakshatras
- Location-based sunrise/sunset calculations
- Panchanga integration (Tithi, Yoga, Karana)

## Disclaimer

This application uses simplified nakshatra calculations for demonstration purposes. For accurate astrological calculations and important life decisions, please consult with a qualified Vedic astrologer.
