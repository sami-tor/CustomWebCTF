# ToorSec CTF Platform

A modern, secure Capture The Flag (CTF) platform built with React and TypeScript, featuring real-time session management, secure authentication, and automated achievement tracking.

![ToorSec CTF](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200)

## Features

- 🔐 10 Progressive Security Challenges
- 👥 User Authentication System
- 🏆 Achievement System with Certificates
- ⏱️ Session Management
- 📊 Real-time Progress Tracking
- 🎯 IP-based Attempt Monitoring
- 🏅 Hall of Fame Leaderboard

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- CryptoJS
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation
git clone https://github.com/sami-tor/CustomWebCTF

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

### Deployment

The platform is optimized for cPanel hosting:

1. Build the project using `npm run build`
2. Upload the contents of the `dist` directory to your hosting
3. Ensure the `.htaccess` file is included for proper routing

## Security Features

- Secure session management
- Password hashing with salt
- Rate limiting for flag submissions
- IP tracking for attempt monitoring
- Encrypted storage for achievements
- Progressive challenge unlocking

## Challenge Write-up & Solutions

### Challenge 1: Hidden in Plain Sight
**Difficulty**: Easy
**Category**: Web Security Basics
**Description**: The first challenge introduces participants to basic web security concepts.
**Solution**: View the page source and find the comment containing `c0ff33_br3w_1337`
**Learning**: Always remove sensitive comments from production code

### Challenge 2: Event Handler Exploitation
**Difficulty**: Easy-Medium
**Category**: XSS Prevention
**Description**: Focuses on JavaScript event handler vulnerabilities
**Solution**: Inject `xor_b1t_fl1p_42` into the event handler parameter
**Learning**: Properly sanitize user input in event handlers

### Challenge 3: IDOR Vulnerability
**Difficulty**: Medium
**Category**: Access Control
**Description**: Exploiting Insecure Direct Object References
**Solution**: Modify user ID to access unauthorized profile containing `r0t13_sh1ft_99`
**Learning**: Implement proper access controls and user authorization

### Challenge 4: JWT Manipulation
**Difficulty**: Medium
**Category**: Authentication
**Description**: JWT token manipulation challenge
**Solution**: Decode and modify JWT to include `b64_r3v3rs3_789`
**Learning**: Use strong JWT secrets and proper validation

### Challenge 5: Authorization Bypass
**Difficulty**: Medium-Hard
**Category**: Authorization
**Description**: Bypass authorization checks
**Solution**: Modify request headers to include `h3x_dump_4cc3ss`
**Learning**: Implement robust authorization checks

### Challenge 6: NoSQL Injection
**Difficulty**: Hard
**Category**: Database Security
**Description**: NoSQL injection vulnerability
**Solution**: Inject query operator to reveal `n0sql_1nj3ct_42`
**Learning**: Properly sanitize database queries

### Challenge 7: Cryptographic Weakness
**Difficulty**: Hard
**Category**: Cryptography
**Description**: Weak cryptographic implementation
**Solution**: Exploit weak encryption to find `rc4_str3am_1337`
**Learning**: Use strong cryptographic algorithms

### Challenge 8: Header Security
**Difficulty**: Hard
**Category**: Web Security
**Description**: HTTP header manipulation
**Solution**: Add custom header containing `z3r0_day_fl4g`
**Learning**: Secure header configuration

### Challenge 9: Buffer Overflow
**Difficulty**: Expert
**Category**: Binary Exploitation
**Description**: Buffer overflow vulnerability
**Solution**: Overflow input buffer to reveal `buff3r_0v3rfl0w`
**Learning**: Implement proper input validation

### Challenge 10: File Upload Vulnerability
**Difficulty**: Expert
**Category**: File Security
**Description**: File upload exploitation
**Solution**: Upload specially crafted file containing `sh3ll_c0d3_exe`
**Learning**: Implement secure file upload handling

## Achievement System

- Real-time tracking of solved challenges
- Automatic certificate generation
- Permanent Hall of Fame records
- Downloadable certificates for completions

## Session Management

- 1-hour active sessions
- Real-time countdown display
- Secure session validation
- IP-based session tracking

## Security Implementation Details

### Authentication System
- Password requirements: 8-10 characters, including uppercase, lowercase, numbers, and special characters
- Salted password hashing using PBKDF2
- Rate limiting on login attempts
- Session-based authentication with secure token management

### Data Storage
- Encrypted local storage for user data
- Secure session management with automatic timeout
- IP-based attempt tracking and rate limiting

### Certificate System
- Unique certificate generation for challenge completion
- Tamper-proof achievement verification
- Permanent record in Hall of Fame
- Downloadable HTML certificates with modern design

## Contributing

For major changes, please open an issue first to discuss what you would like to change.

## License

© 2025 ToorSec CTF. All rights reserved.

## Support

For support, please email [Anony Abu Bolo]

## Acknowledgments

- Special thanks to the cybersecurity community
- Built for educational purposes
- Designed for both beginners and advanced security enthusiasts

---
*Note: This CTF platform is designed for educational purposes. Any unauthorized attempts to exploit the platform outside of the designated challenges are strictly prohibited.*
