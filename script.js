(function () {
  var translations = {
    en: {
      intro: 'With the blessings of the Almighty and our elders,',
      lead: 'we are delighted to invite you to the',
      event: '60th Birthday & Marriage Reaffirmation Ceremony',
      of: 'of',
      and: '&',
      person1Name: 'Sri. H.D.Kumaravelu',
      person1Qualification1: 'Advocate | Mediator',
      person1Qualification2: 'MA(Mediation), BL, MBL',
      person1Parentage: 'Son of Late Sri Desingh & Smt. Saraswathi',
      person2Name: 'Smt. Kavitha Kumaravelu',
      person2Qualification1: 'B.Sc (Home Science)',
      person2Parentage: 'Daughter of Sri. Sundaram & Smt. Manohari',
      body: 'Join us as we celebrate this auspicious milestone with our family, friends and well-wishers.',
      labelDate: 'Date',
      valueDate: 'Thursday, 11 June 2026',
      labelTime: 'Time',
      valueTime: '8:30 AM to 11:00 AM',
      labelMuhurtham: 'Muhurtham',
      valueMuhurtham: '10:30 AM',
      venueTitle: 'Venue',
      venueName: 'Sri Oppiliappan Temple',
      venueLocation: 'Thirunageswaram, Tamil Nadu',
      mapLink: 'View on Google Maps',
      calendarLink: 'Add to Calendar',
      hostsGreeting: 'With Warm Regards,',
      host1Name: 'Vishnuprasadh Kumaravelu',
      host1Title: 'Doctoral Student in Artificial Intelligence',
      host2Name: 'Pragadeesh Kumaravelu',
      host2Title1: 'Advocate',
      host2Title2: 'BA.LLB | Dip. AI Law & Policy',
      host2Title3: 'Adv. Dip Corporate Law | MBL | LLM',
      pageTitle: 'Sashtiapthapoorthi | Invitation',
      calendarSummary: 'Sashtiapthapoorthi — 60th Birthday & Marriage Reaffirmation Ceremony',
      calendarDescription:
        'Muhurtham at 10:30 AM. Celebration of Sri. H.D.Kumaravelu & Smt. Kavitha Kumaravelu.'
    },
    ta: {
      intro: 'இறைவன் மற்றும் மூத்தோரின் ஆசியுடன்,',
      lead: 'உங்களை மகிழ்ச்சியுடன் அழைக்கின்றோம்',
      event: '60ஆம் பிறந்தநாள் மற்றும் திருமண உறுதிப்பிரமாண விழா',
      of: '—',
      and: '&',
      person1Name: 'திரு. எச். டி. குமாரவேலு',
      person1Qualification1: 'வழக்கறிஞர் | மத்தியஸ்தர்',
      person1Qualification2: 'MA (மத்தியஸ்தம்), BL, MBL',
      person1Parentage: 'காலமான திரு. தேசிங் மற்றும் திருமதி. சரஸ்வதியின் மகன்',
      person2Name: 'திருமதி. கவிதா குமாரவேலு',
      person2Qualification1: 'B.Sc (வீட்டு அறிவியல்)',
      person2Parentage: 'திரு. சுந்தரம் மற்றும் திருமதி. மனோகரியின் மகள்',
      body: 'எங்கள் குடும்பம், நண்பர்கள் மற்றும் உறவினர்களுடன் இந்த சுப நிகழ்வைக் கொண்டாட எங்களுடன் இணையுங்கள்.',
      labelDate: 'தேதி',
      valueDate: 'வியாழக்கிழமை, ஜூன் 11, 2026',
      labelTime: 'நேரம்',
      valueTime: 'காலை 8:30 மணி முதல் 11:00 மணி வரை',
      labelMuhurtham: 'முகூர்த்தம்',
      valueMuhurtham: 'காலை 10:30 மணி',
      venueTitle: 'இடம்',
      venueName: 'ஸ்ரீ ஒப்பிலியப்பன் கோயில்',
      venueLocation: 'திருநாகேஸ்வரம், தமிழ்நாடு',
      mapLink: 'கூகுள் வரைபடத்தில் காண்க',
      calendarLink: 'நாட்காட்டியில் சேர்க்க',
      hostsGreeting: 'அன்பார்ந்த வாழ்த்துகளுடன்,',
      host1Name: 'விஷ்ணுபிரசாத் குமாரவேலு',
      host1Title: 'செயற்கை நுண்ணறிவில் முனைவர் பட்ட மாணவர்',
      host2Name: 'பிரகதீஷ் குமாரவேலு',
      host2Title1: 'வழக்கறிஞர்',
      host2Title2: 'BA.LLB | Dip. AI Law & Policy',
      host2Title3: 'Adv. Dip Corporate Law | MBL | LLM',
      pageTitle: 'சஷ்டியப்தபூர்த்தி | அழைப்பிதழ்',
      calendarSummary: 'சஷ்டியப்தபூர்த்தி — 60ஆம் பிறந்தநாள் மற்றும் திருமண உறுதிப்பிரமாண விழா',
      calendarDescription:
        'முகூர்த்தம்: காலை 10:30 மணி. திரு. எச். டி. குமாரவேலு மற்றும் திருமதி. கவிதா குமாரவேலு ஆகியோரின் விழா.'
    }
  };

  var currentLang = 'en';
  var langSwitch = document.getElementById('lang-switch');
  var langLabelTa = document.getElementById('lang-label-ta');
  var langLabelEn = document.getElementById('lang-label-en');

  function setLanguage(lang) {
    currentLang = lang;
    var strings = translations[lang];

    document.documentElement.lang = lang === 'ta' ? 'ta' : 'en';
    document.body.classList.toggle('lang-ta', lang === 'ta');
    document.title = strings.pageTitle;

    document.querySelectorAll(
      '.invite-text [data-i18n], .details [data-i18n], .venue [data-i18n], .hosts [data-i18n]'
    ).forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (strings[key] !== undefined) {
        el.textContent = strings[key];
      }
    });

    if (langSwitch) {
      var isTamil = lang === 'ta';
      langSwitch.setAttribute('aria-checked', isTamil ? 'true' : 'false');
    }

    if (langLabelTa && langLabelEn) {
      langLabelTa.classList.toggle('lang-toggle__label--active', lang === 'ta');
      langLabelEn.classList.toggle('lang-toggle__label--active', lang === 'en');
    }
  }

  if (langSwitch) {
    langSwitch.addEventListener('click', function () {
      setLanguage(currentLang === 'en' ? 'ta' : 'en');
    });
  }

  setLanguage('en');

  var calendarBtn = document.getElementById('add-to-calendar');
  if (calendarBtn) {
    calendarBtn.addEventListener('click', function () {
      var strings = translations[currentLang];
      var ics = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Sashtiapthapoorthi//Invitation//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VTIMEZONE',
        'TZID:Asia/Kolkata',
        'BEGIN:STANDARD',
        'DTSTART:19700101T000000',
        'TZOFFSETFROM:+0530',
        'TZOFFSETTO:+0530',
        'TZNAME:IST',
        'END:STANDARD',
        'END:VTIMEZONE',
        'BEGIN:VEVENT',
        'UID:sashtiapthapoorthi-2026-06-11@sixty',
        'DTSTAMP:20260608T120000Z',
        'DTSTART;TZID=Asia/Kolkata:20260611T083000',
        'DTEND;TZID=Asia/Kolkata:20260611T110000',
        'SUMMARY:' + strings.calendarSummary,
        'LOCATION:https://maps.app.goo.gl/p8oYNp4ysghVrKzM8?g_st=ac',
        'DESCRIPTION:' + strings.calendarDescription,
        'BEGIN:VALARM',
        'ACTION:DISPLAY',
        'DESCRIPTION:' + strings.calendarSummary,
        'TRIGGER;TZID=Asia/Kolkata:20260610T180000',
        'END:VALARM',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');

      var blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url;
      link.download = 'sashtiapthapoorthi.ics';
      link.click();
      URL.revokeObjectURL(url);
    });
  }
})();
