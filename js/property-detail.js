// Property Detail page logic: loads a listing by ?slug=, renders gallery,
// facts, description, amenities, enquiry sidebar, and wires the lightbox
// + enquiry form interactions.
(function () {
  var ICONS = {
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-2h6l2 2h3v11H4z"/><circle cx="12" cy="13" r="3.2"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.4"/><path d="M5 19c1.5-3.5 4.5-5 7-5s5.5 1.5 7 5"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/></svg>'
  };

  var CAPTION_POOL = ['Living Room', 'Kitchen', 'Master Bedroom', 'Balcony View', 'Dining Area', 'Bedroom 2', 'Bathroom', 'Building Exterior', 'Clubhouse', 'Parking Area'];

  // Real photos supplied for the property the original design was built around.
  // Every other mock listing falls back to styled placeholder tiles.
  var REAL_GALLERY = {
    '3bhk-future-towers-amanora': [
      { caption: '3 BHK Future Towers — main photo', src: 'images/amanora-dome-dusk.jpg' },
      { caption: 'Living room', src: 'images/living-room.jpg' },
      { caption: 'Kitchen', src: 'images/kitchen.jpg' },
      { caption: 'Bedroom', src: 'images/bedroom.jpg' },
      { caption: 'Amanora skyline', src: 'images/amanora-skyline-day.jpg' },
      { caption: 'Master bedroom', src: 'images/master-bedroom.jpg' },
      { caption: 'Dining area', src: 'images/dining.jpg' },
      { caption: 'Bathroom', src: 'images/bathroom.jpg' },
      { caption: 'Building exterior', src: 'images/tower-facade-low-angle.jpg' },
      { caption: 'Amanora Park Town at night', src: 'images/amanora-tower-night.jpg' }
    ]
  };

  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function placeholderTile(opts) {
    opts = opts || {};
    var classes = ['placeholder-tile'];
    if (opts.extraClass) classes.push(opts.extraClass);
    if (opts.noCaption) classes.push('no-caption');
    if (opts.src) classes.push('has-photo');
    var icon = ICONS[opts.icon || 'camera'];
    var caption = opts.caption || '';
    var safeCaption = caption.replace(/"/g, '&quot;');
    var img = opts.src ? '<img src="' + opts.src + '" alt="' + safeCaption + '" loading="lazy">' : '';
    var tile = el(
      '<div class="' + classes.join(' ') + '" tabindex="0" role="img" aria-label="' + safeCaption + '">' +
        icon +
        '<span class="cap">' + caption + '</span>' +
        img +
      '</div>'
    );
    return tile;
  }

  function floorLine(p) {
    if (!p.totalFloors || p.totalFloors <= 2) return p.floor;
    var short = p.floor.replace(/\s+Floor$/i, '');
    return short + ' of ' + p.totalFloors;
  }

  function buildDescription(p) {
    var config = p.bhk + ' BHK';
    var parkingPhrase = p.parking ? ' with ' + p.parking.toLowerCase() + ' parking' : '';
    return 'A ' + p.furnishing.toLowerCase() + ' ' + config + ' home in ' + p.tower +
      ', Amanora Park Town, offering ' + p.area + ' of living space' + parkingPhrase +
      '. ' + p.tower + ' is one of the well-established addresses in Amanora, close to the central park, retail street and schools.';
  }

  function purposeBadgeText(purpose) {
    return purpose === 'Rent' ? 'FOR RENT' : 'FOR SALE';
  }

  function statusBadge(status) {
    if (status === 'Sold') return { text: 'SOLD', cls: 'badge-sold' };
    if (status === 'Rented') return { text: 'RENTED', cls: 'badge-rented' };
    return { text: 'AVAILABLE', cls: 'badge-available' };
  }

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var params = new URLSearchParams(window.location.search);
    var slug = params.get('slug');
    var property = (slug && window.RP.findBySlug(slug)) || window.RP.properties[0];

    document.title = property.title + ' — ' + property.tower + ' | Reliable Properties';

    // Breadcrumb
    document.getElementById('breadcrumb-tower').textContent = property.tower;
    document.getElementById('breadcrumb-title').textContent = property.title;

    // Badges
    var badgeRow = document.getElementById('badge-row');
    var sBadge = statusBadge(property.status);
    badgeRow.innerHTML =
      '<span class="badge badge-purpose">' + purposeBadgeText(property.purpose) + '</span>' +
      '<span class="badge ' + sBadge.cls + '">' + sBadge.text + '</span>';

    // Header text
    document.getElementById('detail-title').textContent = property.title;
    document.getElementById('detail-address').textContent = property.tower + ', Amanora Park Town, Pune';
    document.getElementById('detail-price').textContent = property.price;

    // Facts grid
    document.getElementById('fact-config').textContent = property.bhk + ' BHK';
    document.getElementById('fact-baths').textContent = property.baths;
    document.getElementById('fact-area').textContent = property.area;
    document.getElementById('fact-furnishing').textContent = property.furnishing;
    document.getElementById('fact-parking').textContent = property.parking;
    document.getElementById('fact-floor').textContent = floorLine(property);

    // Description
    document.getElementById('detail-description').textContent = buildDescription(property);

    // Amenities
    var amenitiesGrid = document.getElementById('amenities-grid');
    window.RP.amenities.forEach(function (a) {
      var item = el('<div class="amenity-item"></div>');
      item.textContent = a;
      amenitiesGrid.appendChild(item);
    });

    // Location
    document.getElementById('location-tower').textContent = property.tower;

    // ---------- Gallery ----------
    var galleryImages;
    if (REAL_GALLERY[property.slug]) {
      galleryImages = REAL_GALLERY[property.slug];
    } else {
      var mainCaption = property.title + ' — main photo';
      var pool = CAPTION_POOL;
      var thumbCount0 = Math.min(3, Math.max(property.images - 1, 0));
      var rowCount0 = Math.max(property.images - 1 - thumbCount0, 0);
      galleryImages = [{ caption: mainCaption }];
      for (var i = 0; i < thumbCount0; i++) galleryImages.push({ caption: pool[i % pool.length] });
      for (var j = 0; j < rowCount0; j++) galleryImages.push({ caption: pool[(thumbCount0 + j) % pool.length] });
    }
    var thumbCount = Math.min(3, Math.max(galleryImages.length - 1, 0));
    var rowCount = Math.max(galleryImages.length - 1 - thumbCount, 0);

    var mainWrap = document.getElementById('gallery-main-wrap');
    var isCompleted = property.status === 'Sold' || property.status === 'Rented';
    if (isCompleted) mainWrap.classList.add(property.status === 'Sold' ? 'is-sold' : 'is-rented');
    mainWrap.querySelector('.gallery-main-slot').appendChild(placeholderTile({ caption: galleryImages[0].caption, src: galleryImages[0].src }));
    mainWrap.querySelector('.image-counter').textContent = '1 / ' + galleryImages.length;
    if (isCompleted) {
      mainWrap.querySelector('.status-overlay span').textContent = property.status === 'Sold' ? 'SOLD' : 'RENTED';
    }
    mainWrap.querySelector('.gallery-main-slot').addEventListener('click', function () { openLightbox(0); });

    var thumbStack = document.getElementById('thumb-stack');
    for (var t = 1; t <= thumbCount; t++) {
      (function (idx) {
        var tile = placeholderTile({ caption: galleryImages[idx].caption, src: galleryImages[idx].src });
        tile.addEventListener('click', function () { openLightbox(idx); });
        thumbStack.appendChild(tile);
      })(t);
    }

    var galleryRow = document.getElementById('gallery-row');
    if (rowCount === 0) {
      galleryRow.style.display = 'none';
    } else {
      for (var r = thumbCount + 1; r < galleryImages.length; r++) {
        (function (idx) {
          var tile = placeholderTile({ caption: galleryImages[idx].caption, src: galleryImages[idx].src, noCaption: true });
          tile.addEventListener('click', function () { openLightbox(idx); });
          galleryRow.appendChild(tile);
        })(r);
      }
    }

    // ---------- Lightbox ----------
    var lightbox = document.getElementById('lightbox');
    var stage = document.getElementById('lightbox-stage');
    var countEl = document.getElementById('lightbox-count');
    var currentIndex = 0;

    function renderLightbox() {
      stage.innerHTML = '';
      stage.appendChild(placeholderTile({ caption: galleryImages[currentIndex].caption, src: galleryImages[currentIndex].src }));
      countEl.textContent = (currentIndex + 1) + ' / ' + galleryImages.length;
    }

    function openLightbox(idx) {
      currentIndex = idx;
      renderLightbox();
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.getElementById('lightbox-prev').addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      renderLightbox();
    });
    document.getElementById('lightbox-next').addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      renderLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') document.getElementById('lightbox-prev').click();
      if (e.key === 'ArrowRight') document.getElementById('lightbox-next').click();
    });

    // ---------- Agent photo placeholder ----------
    document.getElementById('agent-photo-slot').appendChild(
      placeholderTile({ caption: 'Shyam', icon: 'user', extraClass: 'circle', noCaption: true })
    );

    // ---------- Map placeholder ----------
    document.getElementById('map-slot').appendChild(
      placeholderTile({ caption: 'Map — Amanora Park Town', icon: 'pin' })
    );

    // ---------- WhatsApp / Call links ----------
    var propertyUrl = window.location.href;
    var waPropertyText = "Hi Shyam, I'm interested in this property: " + property.bhk + ' BHK, ' + property.tower + ', ' + property.price + '. ' + propertyUrl;
    document.getElementById('wa-property-link').setAttribute('href', window.RP.waLink(waPropertyText));

    var callHref = 'tel:' + window.RP.PHONE_PRIMARY;
    document.querySelectorAll('[data-call-primary]').forEach(function (a) {
      a.setAttribute('href', callHref);
    });

    // ---------- Enquiry form ----------
    var toggleBtn = document.getElementById('toggle-enquiry-form');
    var form = document.getElementById('enquiry-form');
    toggleBtn.addEventListener('click', function () {
      form.classList.toggle('open');
    });
    document.getElementById('submit-enquiry').addEventListener('click', function () {
      form.classList.add('submitted');
    });
  });
})();
