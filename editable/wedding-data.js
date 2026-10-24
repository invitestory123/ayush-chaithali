/**
 * wedding-data.js — Customer-facing editable data layer for ever-after-bloom
 * Chaitali Poojari & Ayush Rai Wedding Invitation
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Chaitali",
    groom: "Ayush",
    brideFull: "Chaitali Poojari",
    groomFull: "Ayush Rai",
    initials: "C & A",
    title: "Chaitali & Ayush",
  },
  dateISO: "2026-12-09T16:00:00+05:30",
  dateLabel: "Wednesday, 9 December 2026",
  timeLabel: "4:00 PM – 7:00 PM",
  venue: {
    name: "Hotel Sea N Rock",
    address: "Thane Ghodbunder Road, Western Express Highway, Mira Road East, Mumbai, Maharashtra 401107",
    mapsUrl: "https://share.google/7p2zoPWsDFTgVdPYi",
    mapsQuery: "Hotel Sea N Rock Mira Road East Mumbai",
  },
  dressCode: "Traditional Indian — Light & Dark colors",
  hero: {
    kicker: "Together with our families",
    celebrateText: "We celebrate the wedding of",
    scrollText: "Scroll down",
    blessing: "Two souls, one sacred journey",
  },
  story: {
    title: "The Bride & The Groom",
    subtitle: "With the divine blessings of our families",
    shloka: "॥ श्री गणेशाय नमः ॥",
    ganpatiImage: "./editable/assets/ganpati.png",
    bride: {
      name: "Chaitali Poojari",
      role: "The Bride",
      parents: "D/O Shri. Ramesh Poojari & Shrimati. Sarojini Poojari",
      text: "Daughter of Shri. Ramesh Poojari & Shrimati. Sarojini Poojari. Stepping into this new dawn with grace, love, and a heart full of cherished dreams.",
    },
    groom: {
      name: "Ayush Rai",
      role: "The Groom",
      parents: "S/O Shri. Vishnu Deo Rai & Shrimati. Neelam Rai",
      text: "Son of Shri. Vishnu Deo Rai & Shrimati. Neelam Rai. Ready to embark on life's sweetest journey hand in hand, with boundless love and devotion.",
    },
    footnote: "Two souls embarking on life's sweetest sacred journey, blessed by our loved ones.",
  },
  scratchCard: {
    title: "Scratch to Reveal Our Date",
    subtitle: "",
    revealedDate: "09th December 2026",
    revealedTime: "Wednesday · 4:00 PM – 7:00 PM",
    revealedVenue: "Hotel Sea N Rock, Mumbai",
    weddingAlert: "The Wedding Alert",
  },
  functions: [
    {
      day: "8th December 2026",
      dayTitle: "",
      events: [
        {
          name: "Mehendi",
          time: "10:00 AM – 2:00 PM",
          venue: "Banquet Hall",
          dressCode: "Light green / Peach hue 🦚🌿",
          illustration: "./editable/assets/illustration-mehendi.jpg",
          desc: "Intricate henna designs, vibrant songs, and sweet beginnings as the celebrations unfold.",
        },
        {
          name: "Tilak Ceremony",
          time: "3:00 PM",
          venue: "Banquet Hall",
          dressCode: "Festive Indian Attire 🪔✨",
          illustration: "./editable/assets/illustration-tilak.jpg",
          desc: "Auspicious blessings and traditional sacred tilak rituals welcoming the groom and families.",
        },
        {
          name: "Engagement & Sangeet",
          time: "7:30 PM onwards (7:30 PM – 11:00 PM)",
          venue: "Banquet Hall",
          dressCode: "Shimmer darks 💍✨",
          illustration: "./editable/assets/illustration-sangeet.jpg",
          desc: "Exchange of rings followed by a sparkling musical sangeet celebration of dance and joy.",
        },
      ],
    },
    {
      day: "9th December 2026",
      dayTitle: "Wedding Day",
      events: [
        {
          name: "Haldi Ceremony",
          time: "10:00 AM – 1:00 PM",
          venue: "Banquet Hall",
          dressCode: "Sky blue / Rani Pink hue 🌻🌼 (For men: Kurta and Lungi)",
          illustration: "./editable/assets/illustration-haldi.jpg",
          desc: "Bathed in auspicious golden turmeric, surrounded by sunflowers, marigolds, and laughter.",
        },
        {
          name: "Baarat Procession",
          time: "3:30 PM",
          venue: "Hotel Sea N Rock",
          dressCode: "Royal Festive Indian 🎺🥁",
          illustration: "./editable/assets/illustration-baarat.jpg",
          desc: "A grand royal baarat procession with dhol, dance, and celebration to welcome the groom.",
        },
        {
          name: "Wedding Muhurat (Vidhi & Fera)",
          time: "4:00 PM – 7:00 PM (Vidhi & Fera 4:30 PM onwards)",
          venue: "Open Air",
          dressCode: "Traditional attire — Light and Dark colors 🌸🔥",
          illustration: "./editable/assets/illustration-wedding.jpg",
          desc: "Sacred wedding vows, exchange of varmala, and holy pheras around the agni under open skies.",
        },
        {
          name: "Reception",
          time: "8:30 PM onwards",
          venue: "Open Air",
          dressCode: "Traditional attire — Light and Dark colors (Shadi clothes continue) 🌷🥂",
          illustration: "./editable/assets/illustration-reception.jpg",
          desc: "An enchanting evening reception with dinner, blessings, and toasts. (Note: Shadi will be followed by reception from 8 PM onwards, so attire remains the same).",
        },
      ],
    },
  ],
    chapters: [
    {
        "no": "I",
        "when": "8TH DECEMBER 2026 • 10:00 AM – 2:00 PM",
        "title": "Mehendi Ceremony",
        "illustration": "./editable/assets/illustration-mehendi.jpg"
    },
    {
        "no": "II",
        "when": "8TH DECEMBER 2026 • 3:00 PM ONWARDS",
        "title": "Tilak Ceremony",
        "illustration": "./editable/assets/illustration-tilak.jpg"
    },
    {
        "no": "III",
        "when": "8TH DECEMBER 2026 • 7:30 PM – 11:00 PM",
        "title": "Engagement & Sangeet",
        "illustration": "./editable/assets/illustration-sangeet.jpg"
    },
    {
        "no": "IV",
        "when": "9TH DECEMBER 2026 • 10:00 AM – 1:00 PM",
        "title": "Haldi Ceremony",
        "illustration": "./editable/assets/illustration-haldi.jpg"
    },
    {
        "no": "V",
        "when": "9TH DECEMBER 2026 • 3:30 PM",
        "title": "Baarat Procession",
        "illustration": "./editable/assets/illustration-baarat.jpg"
    },
    {
        "no": "VI",
        "when": "9TH DECEMBER 2026 • 4:00 PM – 7:00 PM (FERA 4:30 PM)",
        "title": "Wedding Muhurat (Vidhi & Fera)",
        "illustration": "./editable/assets/illustration-wedding.jpg"
    },
    {
        "no": "VII",
        "when": "9TH DECEMBER 2026 • 8:30 PM ONWARDS",
        "title": "Grand Reception",
        "illustration": "./editable/assets/illustration-reception.jpg"
    }
],
  footer: {
    title: "Thank You",
    subtitle: "For Being Part of Our Story",
    line1: "With warm hearts and deepest gratitude,",
    line2: "Thank you for your love, blessings, and warm wishes as we begin our forever.",
    signoff: "With all our love, Chaitali & Ayush",
    date: "Wednesday, 9th December 2026",
  },
  images: {
    seal: "./editable/assets/invite-seal.png",
    openVideo: "./editable/assets/invite-open.mp4",
    lantern: "./editable/assets/lantern.png",
    heroPalace: "./editable/assets/hero-palace.jpg",
    bougainvillea: "./editable/assets/bougainvillea.png",
    goldFlourish: "./editable/assets/gold-flourish.png",
    ganpati: "./editable/assets/ganpati.png",
    portraitBride: "./editable/assets/portrait-bride.jpg",
    portraitGroom: "./editable/assets/portrait-groom.jpg",
    hotelPhoto: "./editable/assets/hotel-sea-n-rock.jpg",
    mapPlate: "./editable/assets/map-plate.jpg",
    weddingCar: "./editable/assets/wedding-car.png",
    gardenCourtyard: "./editable/assets/garden-courtyard.jpg",
    coupleLanterns: "./editable/assets/couple-lanterns.png",
    sunsetSky: "./editable/assets/sunset-sky.jpg",
  },
};

window.openCalendarModal = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  
  var existing = document.getElementById('cal-choice-modal');
  if (existing) { existing.remove(); }
  
  if (!document.getElementById('cal-anim-style')) {
    var s = document.createElement('style');
    s.id = 'cal-anim-style';
    s.textContent = '@keyframes calFadeIn{from{opacity:0;transform:scale(0.96)}to{opacity:1;transform:scale(1)}} .cal-option-btn:hover{transform:translateY(-2px);box-shadow:0 6px 16px rgba(0,0,0,0.08)!important;}';
    document.head.appendChild(s);
  }
  
  var w = window.WEDDING_DATA || {};
  var bride = (w.couple && (w.couple.brideFull || w.couple.bride)) || 'Chaitali Poojari';
  var groom = (w.couple && (w.couple.groomFull || w.couple.groom)) || 'Ayush Rai';
  var title = (w.couple && w.couple.bride && w.couple.groom) ? (w.couple.bride + ' & ' + w.couple.groom + ' — Wedding & Reception') : 'Chaitali & Ayush — Wedding & Reception';
  var venueName = (w.venue && w.venue.name) || 'Hotel Sea N Rock';
  var venueAddr = (w.venue && w.venue.address) || 'Thane Ghodbunder Road, Western Express Highway, Mira Road East, Mumbai, Maharashtra 401107';
  var fullLoc = venueName + ', ' + venueAddr;
  var desc = 'Join us to celebrate the wedding & reception of ' + bride + ' and ' + groom + ' at ' + venueName + ', Mumbai.';
  
  // 9 Dec 2026 16:00 IST = 10:30 UTC. End: 23:00 IST = 17:30 UTC
  var start = '20261209T103000Z';
  var end = '20261209T173000Z';
  
  var gcalUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    '&text=' + encodeURIComponent(title) +
    '&dates=' + start + '/' + end +
    '&details=' + encodeURIComponent(desc) +
    '&location=' + encodeURIComponent(fullLoc);
    
  var isApple = /iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent || '');
  var appleUrl = 'wedding.ics';
  if (isApple && window.location.protocol.startsWith('http')) {
    try {
      appleUrl = window.location.origin.replace(/^https?:/, 'webcal:') + window.location.pathname.replace(/\/[^\/]*$/, '/wedding.ics');
    } catch(err) {
      appleUrl = 'wedding.ics';
    }
  }
  
  var modal = document.createElement('div');
  modal.id = 'cal-choice-modal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:999999;display:flex;align-items:center;justify-content:center;background:rgba(20,15,10,0.65);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);padding:1.25rem;animation:calFadeIn 0.22s ease-out forwards;';
  
  modal.innerHTML = '' +
    '<div style="position:relative;width:100%;max-width:390px;background:#fbf8f2;border-radius:1.75rem;border:1px solid rgba(197,160,89,0.4);box-shadow:0 24px 50px rgba(0,0,0,0.28);padding:1.85rem 1.5rem 1.6rem;text-align:center;box-sizing:border-box;">' +
      '<button id="cal-close-btn" type="button" style="position:absolute;top:1rem;right:1rem;background:rgba(0,0,0,0.06);border:none;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#7a6245;font-size:1rem;" aria-label="Close">✕</button>' +
      '<p style="margin:0;font-family:sans-serif;font-size:0.65rem;letter-spacing:0.32em;text-transform:uppercase;color:#9b7a38;font-weight:700;">Save The Date</p>' +
      '<h3 style="margin:0.4rem 0 0.25rem;font-size:1.35rem;font-weight:600;color:#2c241b;font-family:\'Marcellus\',serif,Georgia;">Add to Calendar</h3>' +
      '<p style="margin:0 0 1.4rem;font-size:0.8rem;color:#7a6d60;font-family:sans-serif;">Wednesday, 9 December 2026 · 4:00 PM IST</p>' +
      '<div style="display:flex;flex-direction:column;gap:0.75rem;">' +
        '<a href="' + gcalUrl + '" target="_blank" rel="noopener noreferrer" class="cal-option-btn" style="display:flex;align-items:center;gap:0.95rem;padding:0.95rem 1.15rem;background:#ffffff;border:1px solid rgba(197,160,89,0.35);border-radius:1.15rem;text-decoration:none;color:#2c241b;box-shadow:0 3px 10px rgba(0,0,0,0.04);transition:all 0.15s ease;">' +
          '<svg style="width:26px;height:26px;flex-shrink:0;" viewBox="0 0 24 24"><path fill="#4285F4" d="M22 6c0-1.1-.9-2-2-2V2h-2v2H6V2H4v2c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 14H4V9h16v11z"/><path fill="#EA4335" d="M6 11h4v4H6z"/><path fill="#FBBC05" d="M14 11h4v4h-4z"/><path fill="#34A853" d="M6 16h4v3H6z"/><path fill="#4285F4" d="M14 16h4v3h-4z"/></svg>' +
          '<div style="text-align:left;flex:1;">' +
            '<div style="font-weight:600;font-size:0.95rem;color:#2c241b;font-family:sans-serif;">Google Calendar</div>' +
            '<div style="font-size:0.72rem;color:#8a7968;font-family:sans-serif;">For Android, Gmail & Web</div>' +
          '</div>' +
          '<span style="color:#9b7a38;font-size:1.25rem;font-weight:600;">›</span>' +
        '</a>' +
        '<a href="' + appleUrl + '" id="cal-apple-link" class="cal-option-btn" style="display:flex;align-items:center;gap:0.95rem;padding:0.95rem 1.15rem;background:#ffffff;border:1px solid rgba(197,160,89,0.35);border-radius:1.15rem;text-decoration:none;color:#2c241b;box-shadow:0 3px 10px rgba(0,0,0,0.04);transition:all 0.15s ease;">' +
          '<svg style="width:24px;height:24px;flex-shrink:0;" viewBox="0 0 170 170" fill="#2c241b"><path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.74 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.77-11.64-14.19-5.66-8.91-10.14-18.96-13.44-30.13-3.3-11.18-4.96-22.18-4.96-33 0-14.77 3.86-26.68 11.59-35.73 7.73-9.04 17.33-13.68 28.8-13.91 4.89 0 10.13 1.25 15.71 3.76 5.58 2.51 9.24 3.82 10.97 3.93 1.3.11 5.37-1.3 12.21-4.23 6.84-2.93 12.56-4.25 17.15-3.96 13.04.88 23.51 5.75 31.42 14.61-11.52 6.96-17.17 16.53-16.96 28.71.22 9.57 3.91 17.58 11.08 24.03 7.17 6.45 15.86 10.17 26.07 11.16-2.18 6.52-4.78 13.26-7.81 20.21zm-28.82-120.3c0 7.39-2.72 14.47-8.16 21.24-6.31 7.72-13.92 12.39-22.84 14.01-.22-1.31-.33-2.62-.33-3.92 0-7.39 3.04-14.68 9.12-21.87 3.26-3.81 7.28-6.96 12.06-9.46 4.78-2.5 9.47-3.92 14.07-4.25.07 1.42.08 2.84.08 4.25z"/></svg>' +
          '<div style="text-align:left;flex:1;">' +
            '<div style="font-weight:600;font-size:0.95rem;color:#2c241b;font-family:sans-serif;">Apple Calendar</div>' +
            '<div style="font-size:0.72rem;color:#8a7968;font-family:sans-serif;">For iPhone, iPad & Mac</div>' +
          '</div>' +
          '<span style="color:#9b7a38;font-size:1.25rem;font-weight:600;">›</span>' +
        '</a>' +
      '</div>' +
    '</div>';
    
  document.body.appendChild(modal);
  
  function closeModal() {
    modal.style.opacity = '0';
    modal.style.transition = 'opacity 0.18s ease-out';
    setTimeout(function() { if (modal.parentNode) modal.parentNode.removeChild(modal); }, 180);
  }
  
  var closeBtn = modal.querySelector('#cal-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(ev) {
    if (ev.target === modal) closeModal();
  });
  
  var appleLink = modal.querySelector('#cal-apple-link');
  if (appleLink) {
    appleLink.addEventListener('click', function() {
      setTimeout(closeModal, 400);
    });
  }
  var gcalLink = modal.querySelector('a[target="_blank"]');
  if (gcalLink) {
    gcalLink.addEventListener('click', function() {
      setTimeout(closeModal, 400);
    });
  }
};

