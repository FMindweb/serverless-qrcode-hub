const fs = require('fs');
let html = fs.readFileSync('dist/admin.html', 'utf8');

const locationForm = `
          <div id="static-qr-form-location" class="hidden flex flex-col gap-2 mt-2">
            <input id="location-query" type="text" class="input input-bordered input-sm w-full" data-i18n-ph="location.query" placeholder="地点名称/地址">
            <div class="flex gap-2">
              <input id="location-lat" type="number" step="any" class="input input-bordered input-sm w-full" data-i18n-ph="location.lat" placeholder="纬度 (可选)">
              <input id="location-lng" type="number" step="any" class="input input-bordered input-sm w-full" data-i18n-ph="location.lng" placeholder="经度 (可选)">
            </div>
            <div class="text-xs opacity-70 mt-1 px-1">仅填地址将由扫码软件自动定位，填入经纬度定位更精确。</div>
          </div>
`;

// Insert the location form right after the wifi form
html = html.replace('</label>\\n          </div>\\n\\n          <div class="flex flex-col', '</label>\\n          </div>\\n' + locationForm + '\\n          <div class="flex flex-col');

// Wait, the newline matching might fail. Let's just use regex.
html = html.replace(/<span class="label-text" data-i18n="wifi\.hidden">隐藏网络<\/span>\s*<\/label>\s*<\/div>/, (m) => m + '\\n' + locationForm);

// Ensure the JS loops over elements that actually exist
html = html.replace(
  "['vcard-ln', 'vcard-fn', 'vcard-org', 'vcard-title', 'vcard-tel', 'vcard-email', 'vcard-url', 'vcard-addr', 'wifi-ssid', 'wifi-pw', 'wifi-type', 'wifi-hidden', 'location-query', 'location-lat', 'location-lng'].forEach(id => {",
  "['vcard-ln', 'vcard-fn', 'vcard-org', 'vcard-title', 'vcard-tel', 'vcard-email', 'vcard-url', 'vcard-addr', 'wifi-ssid', 'wifi-pw', 'wifi-type', 'wifi-hidden', 'location-query', 'location-lat', 'location-lng'].forEach(id => {\\n      const el = document.getElementById(id);\\n      if (el) {\\n        el.addEventListener('input', renderStaticQr);\\n        el.addEventListener('change', renderStaticQr);\\n      }"
);

// We need to also clean up the extra addEventListeners that were left behind
html = html.replace(
  "      document.getElementById(id).addEventListener('input', renderStaticQr);\n      document.getElementById(id).addEventListener('change', renderStaticQr);\n    });",
  "    });"
);


fs.writeFileSync('dist/admin.html', html, 'utf8');
console.log('Fixed DOM and JS error');
