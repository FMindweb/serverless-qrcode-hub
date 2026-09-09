const fs = require('fs');

let html = fs.readFileSync('dist/admin.html', 'utf8');

const navBtn = '<button id="static-qr-open-btn" class="btn btn-primary btn-sm" type="button" data-i18n="static_qr.title">固定二维码</button>\n          ';
html = html.replace('id="logout-btn"', navBtn + 'id="logout-btn"');

const zh = `
        'static_qr.title': '固定二维码生成器',
        'static_qr.upload.hint': '拖拽或点击上传二维码图片',
        'static_qr.data.label': '二维码内容',
        'static_qr.data.placeholder': '可手动输入内容或通过上方上传解析',
        'static_qr.generate': '生成二维码',
        'static_qr.download': '下载',
        'static_qr.type.text': '文本',
        'static_qr.type.vcard': '名片',
        'static_qr.type.wifi': 'WiFi',
        'static_qr.type.location': '导航',
        'vcard.ln': '姓氏',
        'vcard.fn': '名字',
        'vcard.org': '公司',
        'vcard.title': '职位',
        'vcard.tel': '电话',
        'vcard.email': '邮箱',
        'vcard.url': '网址',
        'vcard.addr': '地址',
        'wifi.ssid': '网络名称 (SSID)',
        'wifi.pw': '密码',
        'wifi.type.wpa': 'WPA/WPA2/WPA3',
        'wifi.type.wep': 'WEP',
        'wifi.type.nopass': '无密码',
        'wifi.hidden': '隐藏网络',
        'location.lat': '纬度 (可选)',
        'location.lng': '经度 (可选)',
        'location.query': '地点名称/地址',
`;
const en = `
        'static_qr.title': 'Static QR Generator',
        'static_qr.upload.hint': 'Drag or click to upload QR code',
        'static_qr.data.label': 'QR Code Content',
        'static_qr.data.placeholder': 'Enter content or upload an image above',
        'static_qr.generate': 'Generate QR Code',
        'static_qr.download': 'Download',
        'static_qr.type.text': 'Text',
        'static_qr.type.vcard': 'vCard',
        'static_qr.type.wifi': 'WiFi',
        'static_qr.type.location': 'Location',
        'vcard.ln': 'Last Name',
        'vcard.fn': 'First Name',
        'vcard.org': 'Company',
        'vcard.title': 'Title',
        'vcard.tel': 'Phone',
        'vcard.email': 'Email',
        'vcard.url': 'Website',
        'vcard.addr': 'Address',
        'wifi.ssid': 'Network Name (SSID)',
        'wifi.pw': 'Password',
        'wifi.type.wpa': 'WPA/WPA2/WPA3',
        'wifi.type.wep': 'WEP',
        'wifi.type.nopass': 'No Password',
        'wifi.hidden': 'Hidden Network',
        'location.lat': 'Latitude (Optional)',
        'location.lng': 'Longitude (Optional)',
        'location.query': 'Place Name / Address',
`;
html = html.replace(/'nav\.logout': '退出登录',/g, "'nav.logout': '退出登录',\n" + zh);
html = html.replace(/'nav\.logout': 'Logout',/g, "'nav.logout': 'Logout',\n" + en);

const modalHtml = `
  <dialog id="static-qr-modal" class="modal">
    <div class="modal-box modal-box-responsive max-w-2xl">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="text-lg font-bold" data-i18n="static_qr.title">固定二维码生成器</h3>
      
      <div class="mt-4 flex flex-col md:flex-row gap-6">
        <div class="flex-1 space-y-4">
          <button id="static-qr-upload-btn" type="button" class="dropzone flex min-h-32 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/40 bg-base-200 p-4 text-center hover:border-primary hover:bg-base-200/80">
            <div class="text-sm font-medium" data-i18n="static_qr.upload.hint">拖拽或点击上传二维码图片</div>
          </button>
          
          <div role="tablist" class="tabs tabs-bordered" id="static-qr-tabs">
            <a role="tab" class="tab tab-active" data-qr-type="text" data-i18n="static_qr.type.text">文本</a>
            <a role="tab" class="tab" data-qr-type="vcard" data-i18n="static_qr.type.vcard">名片</a>
            <a role="tab" class="tab" data-qr-type="wifi" data-i18n="static_qr.type.wifi">WiFi</a>
            <a role="tab" class="tab" data-qr-type="location" data-i18n="static_qr.type.location">导航</a>
          </div>

          <div id="static-qr-form-text" class="form-control mt-2">
            <textarea id="static-qr-data" class="textarea textarea-bordered h-32 w-full font-mono text-sm" placeholder="可手动输入内容或通过上方上传解析"></textarea>
          </div>

          <div id="static-qr-form-vcard" class="hidden flex-col gap-2 mt-2">
            <div class="flex gap-2">
              <input id="vcard-ln" type="text" class="input input-bordered input-sm w-full" data-i18n-ph="vcard.ln" placeholder="姓氏">
              <input id="vcard-fn" type="text" class="input input-bordered input-sm w-full" data-i18n-ph="vcard.fn" placeholder="名字">
            </div>
            <input id="vcard-org" type="text" class="input input-bordered input-sm w-full" data-i18n-ph="vcard.org" placeholder="公司">
            <input id="vcard-title" type="text" class="input input-bordered input-sm w-full" data-i18n-ph="vcard.title" placeholder="职位">
            <input id="vcard-tel" type="tel" class="input input-bordered input-sm w-full" data-i18n-ph="vcard.tel" placeholder="电话">
            <input id="vcard-email" type="email" class="input input-bordered input-sm w-full" data-i18n-ph="vcard.email" placeholder="邮箱">
            <input id="vcard-url" type="url" class="input input-bordered input-sm w-full" data-i18n-ph="vcard.url" placeholder="网址">
            <textarea id="vcard-addr" class="textarea textarea-bordered textarea-sm w-full" data-i18n-ph="vcard.addr" placeholder="地址"></textarea>
          </div>

          <div id="static-qr-form-wifi" class="hidden flex-col gap-2 mt-2">
            <input id="wifi-ssid" type="text" class="input input-bordered input-sm w-full" data-i18n-ph="wifi.ssid" placeholder="网络名称 (SSID)">
            <input id="wifi-pw" type="text" class="input input-bordered input-sm w-full" data-i18n-ph="wifi.pw" placeholder="密码">
            <select id="wifi-type" class="select select-bordered select-sm w-full">
              <option value="WPA" data-i18n="wifi.type.wpa">WPA/WPA2/WPA3</option>
              <option value="WEP" data-i18n="wifi.type.wep">WEP</option>
              <option value="nopass" data-i18n="wifi.type.nopass">无密码</option>
            </select>
            <label class="label cursor-pointer justify-start gap-2 p-0 mt-1">
              <input id="wifi-hidden" type="checkbox" class="checkbox checkbox-sm checkbox-primary">
              <span class="label-text" data-i18n="wifi.hidden">隐藏网络</span>
            </label>
          </div>

          <div id="static-qr-form-location" class="hidden flex flex-col gap-2 mt-2">
            <input id="location-query" type="text" class="input input-bordered input-sm w-full" data-i18n-ph="location.query" placeholder="地点名称/地址">
            <div class="flex gap-2">
              <input id="location-lat" type="number" step="any" class="input input-bordered input-sm w-full" data-i18n-ph="location.lat" placeholder="纬度 (可选)">
              <input id="location-lng" type="number" step="any" class="input input-bordered input-sm w-full" data-i18n-ph="location.lng" placeholder="经度 (可选)">
            </div>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-2">
            <select id="static-qr-dots-style" class="select select-bordered w-full sm:w-48">
              <option value="dots" data-i18n="qr_modal.dots.dots">圆点</option>
              <option value="rounded" data-i18n="qr_modal.dots.rounded">圆角</option>
              <option value="classy" data-i18n="qr_modal.dots.classy">优雅</option>
              <option value="classy-rounded" data-i18n="qr_modal.dots.classy_rounded">优雅圆角</option>
              <option value="square" data-i18n="qr_modal.dots.square">方形</option>
              <option value="extra-rounded" data-i18n="qr_modal.dots.extra_rounded">超圆角</option>
            </select>
          </div>
        </div>

        <div class="flex w-full md:w-64 flex-col items-center gap-4">
          <div id="static-qr-container" class="rounded-2xl bg-white p-4 shadow-sm w-full flex justify-center items-center aspect-square border border-base-300"></div>
          <button id="static-qr-download-btn" type="button" class="btn btn-primary w-full" data-i18n="static_qr.download">下载</button>
        </div>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button data-i18n="qr_modal.close">关闭</button>
    </form>
  </dialog>
  <input id="static-qr-file" type="file" accept="image/*" class="hidden">
`;
html = html.replace('</dialog>\n\n  <input id="qr-file"', '</dialog>\n' + modalHtml + '\n  <input id="qr-file"');

const jsLogic = `
    let staticQrInstance = null;
    let currentStaticQrType = 'text';

    function getStaticQrOptions(data, style) {
      return {
        width: 300,
        height: 300,
        type: 'svg',
        data: data || 'https://example.com',
        margin: 10,
        qrOptions: {
          typeNumber: 0,
          mode: 'Byte',
          errorCorrectionLevel: 'Q'
        },
        dotsOptions: {
          color: '#000000',
          type: style
        },
        backgroundOptions: {
          color: '#ffffff',
        }
      };
    }

    function buildVCardData() {
      const ln = document.getElementById('vcard-ln').value.trim();
      const fn = document.getElementById('vcard-fn').value.trim();
      const org = document.getElementById('vcard-org').value.trim();
      const title = document.getElementById('vcard-title').value.trim();
      const tel = document.getElementById('vcard-tel').value.trim();
      const email = document.getElementById('vcard-email').value.trim();
      const url = document.getElementById('vcard-url').value.trim();
      const addr = document.getElementById('vcard-addr').value.trim();
      
      let vcard = 'BEGIN:VCARD\\nVERSION:3.0\\n';
      vcard += 'N:' + (ln || '') + ';' + (fn || '') + ';;;\\n';
      vcard += 'FN:' + (fn ? fn + ' ' : '') + (ln || '') + '\\n';
      if (org) vcard += 'ORG:' + org + '\\n';
      if (title) vcard += 'TITLE:' + title + '\\n';
      if (tel) vcard += 'TEL:' + tel + '\\n';
      if (email) vcard += 'EMAIL:' + email + '\\n';
      if (url) vcard += 'URL:' + url + '\\n';
      if (addr) vcard += 'ADR:;;' + addr.replace(/\\n/g, ' ') + ';;;;\\n';
      vcard += 'END:VCARD';
      return vcard;
    }

    function buildWifiData() {
      const ssid = document.getElementById('wifi-ssid').value.trim();
      const pw = document.getElementById('wifi-pw').value.trim();
      const type = document.getElementById('wifi-type').value;
      const hidden = document.getElementById('wifi-hidden').checked ? 'true' : 'false';
      if (!ssid) return '';
      return 'WIFI:S:' + ssid + ';T:' + type + ';P:' + pw + ';H:' + hidden + ';;';
    }

    function buildLocationData() {
      const query = document.getElementById('location-query').value.trim();
      const lat = document.getElementById('location-lat').value.trim() || '0';
      const lng = document.getElementById('location-lng').value.trim() || '0';
      if (!query && lat === '0' && lng === '0') return '';
      let geo = 'geo:' + lat + ',' + lng;
      if (query) geo += '?q=' + encodeURIComponent(query);
      return geo;
    }

    function getActiveStaticQrData() {
      if (currentStaticQrType === 'vcard') return buildVCardData();
      if (currentStaticQrType === 'wifi') return buildWifiData();
      if (currentStaticQrType === 'location') return buildLocationData();
      return document.getElementById('static-qr-data').value.trim();
    }

    function updateStaticQrFormVisibility() {
      document.getElementById('static-qr-form-text').classList.toggle('hidden', currentStaticQrType !== 'text');
      document.getElementById('static-qr-form-vcard').classList.toggle('hidden', currentStaticQrType !== 'vcard');
      document.getElementById('static-qr-form-wifi').classList.toggle('hidden', currentStaticQrType !== 'wifi');
      document.getElementById('static-qr-form-location').classList.toggle('hidden', currentStaticQrType !== 'location');
    }

    function renderStaticQr() {
      const container = document.getElementById('static-qr-container');
      const data = getActiveStaticQrData();
      const style = document.getElementById('static-qr-dots-style').value;
      container.innerHTML = '';
      if (!data) return;
      staticQrInstance = new QRCodeStyling(getStaticQrOptions(data, style));
      staticQrInstance.append(container);
    }

    // Attach listeners safely within a DOMContentLoaded block or just rely on the elements existing.
    // They exist here because this script is inserted at the bottom of the body.
    document.getElementById('static-qr-open-btn').addEventListener('click', () => {
      document.getElementById('static-qr-modal').showModal();
      updateStaticQrFormVisibility();
      renderStaticQr();
    });

    document.getElementById('static-qr-data').addEventListener('input', renderStaticQr);
    document.getElementById('static-qr-dots-style').addEventListener('change', renderStaticQr);

    document.querySelectorAll('#static-qr-tabs .tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('#static-qr-tabs .tab').forEach(t => t.classList.remove('tab-active'));
        e.target.classList.add('tab-active');
        currentStaticQrType = e.target.dataset.qrType;
        updateStaticQrFormVisibility();
        renderStaticQr();
      });
    });

    ['vcard-ln', 'vcard-fn', 'vcard-org', 'vcard-title', 'vcard-tel', 'vcard-email', 'vcard-url', 'vcard-addr', 'wifi-ssid', 'wifi-pw', 'wifi-type', 'wifi-hidden', 'location-query', 'location-lat', 'location-lng'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', renderStaticQr);
        el.addEventListener('change', renderStaticQr);
      }
    });

    document.getElementById('static-qr-download-btn').addEventListener('click', () => {
      if (!staticQrInstance) return;
      const data = getActiveStaticQrData();
      if (!data) return;
      staticQrInstance.download({ name: 'qr-code', extension: 'png' });
    });

    const staticQrUploadBtn = document.getElementById('static-qr-upload-btn');
    const staticQrFileInput = document.getElementById('static-qr-file');

    staticQrUploadBtn.addEventListener('click', () => staticQrFileInput.click());

    staticQrUploadBtn.addEventListener('dragover', (e) => {
      e.preventDefault();
      staticQrUploadBtn.classList.add('dragover', 'border-primary', 'bg-base-200/80');
    });
    staticQrUploadBtn.addEventListener('dragleave', () => {
      staticQrUploadBtn.classList.remove('dragover', 'border-primary', 'bg-base-200/80');
    });
    staticQrUploadBtn.addEventListener('drop', async (e) => {
      e.preventDefault();
      staticQrUploadBtn.classList.remove('dragover', 'border-primary', 'bg-base-200/80');
      const file = e.dataTransfer?.files?.[0];
      if (file) handleStaticQrFile(file);
    });

    staticQrFileInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) handleStaticQrFile(file);
      e.target.value = '';
    });

    function parseToForm(text) {
      if (text.startsWith('WIFI:')) {
        document.querySelector('#static-qr-tabs .tab[data-qr-type="wifi"]').click();
        const ssidMatch = text.match(/S:([^;]+);/);
        const pwMatch = text.match(/P:([^;]+);/);
        const typeMatch = text.match(/T:([^;]+);/);
        const hiddenMatch = text.match(/H:([^;]+);/);
        document.getElementById('wifi-ssid').value = ssidMatch ? ssidMatch[1] : '';
        document.getElementById('wifi-pw').value = pwMatch ? pwMatch[1] : '';
        document.getElementById('wifi-type').value = typeMatch ? typeMatch[1] : 'nopass';
        document.getElementById('wifi-hidden').checked = hiddenMatch && hiddenMatch[1] === 'true';
      } else if (text.startsWith('geo:')) {
        document.querySelector('#static-qr-tabs .tab[data-qr-type="location"]').click();
        const coordsMatch = text.match(/geo:([-\\d\\.]+),([-\\d\\.]+)/);
        const queryMatch = text.match(/\\?q=([^&]+)/);
        document.getElementById('location-lat').value = (coordsMatch && coordsMatch[1] !== '0') ? coordsMatch[1] : '';
        document.getElementById('location-lng').value = (coordsMatch && coordsMatch[2] !== '0') ? coordsMatch[2] : '';
        document.getElementById('location-query').value = queryMatch ? decodeURIComponent(queryMatch[1]) : '';
      } else if (text.startsWith('BEGIN:VCARD')) {
        document.querySelector('#static-qr-tabs .tab[data-qr-type="vcard"]').click();
        const nMatch = text.match(/\\nN:([^;]*);([^;]*)/);
        const orgMatch = text.match(/\\nORG:([^\\n]+)/);
        const titleMatch = text.match(/\\nTITLE:([^\\n]+)/);
        const telMatch = text.match(/\\nTEL[^:]*:([^\\n]+)/);
        const emailMatch = text.match(/\\nEMAIL[^:]*:([^\\n]+)/);
        const urlMatch = text.match(/\\nURL[^:]*:([^\\n]+)/);
        const addrMatch = text.match(/\\nADR[^:]*:;;([^;]+)/);

        document.getElementById('vcard-ln').value = nMatch ? nMatch[1] : '';
        document.getElementById('vcard-fn').value = nMatch ? nMatch[2] : '';
        document.getElementById('vcard-org').value = orgMatch ? orgMatch[1] : '';
        document.getElementById('vcard-title').value = titleMatch ? titleMatch[1] : '';
        document.getElementById('vcard-tel').value = telMatch ? telMatch[1] : '';
        document.getElementById('vcard-email').value = emailMatch ? emailMatch[1] : '';
        document.getElementById('vcard-url').value = urlMatch ? urlMatch[1] : '';
        document.getElementById('vcard-addr').value = addrMatch ? addrMatch[1] : '';
      } else {
        document.querySelector('#static-qr-tabs .tab[data-qr-type="text"]').click();
      }
    }

    async function handleStaticQrFile(file) {
      try {
        staticQrUploadBtn.classList.add('opacity-50', 'pointer-events-none');
        const { text } = await decodeQrFile(file);
        document.getElementById('static-qr-data').value = text;
        parseToForm(text);
        renderStaticQr();
        showAlert(t('alert.qr_success'), 'success');
      } catch (error) {
        showAlert(error.message, 'error');
      } finally {
        staticQrUploadBtn.classList.remove('opacity-50', 'pointer-events-none');
      }
    }
`;

html = html.replace('async function init() {', jsLogic + '\n    async function init() {');

fs.writeFileSync('dist/admin.html', html, 'utf8');
console.log('Patched dist/admin.html holistically.');
