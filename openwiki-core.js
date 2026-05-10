
// openwiki-core.js
(function() {
    const footerHTML = `
    <footer id="openwiki-legal-core" style="background:#f8f9fa; border-top:1px solid #a2a9b1; padding:20px; font-size:12px; color:#555; margin-top:20px; font-family: sans-serif;">
        <div style="max-width:1200px; margin:0 auto; display:flex; justify-content:space-between; align-items:center;">
            <div>
                <p style="margin:0;">Content is available under <strong>MIT License</strong> | Verified by OpenWiki Ecosystem</p>
                <div style="margin-top:5px;">
                    <a href="#" style="color:#0645ad; text-decoration:none; margin-right:10px;">Privacy Policy</a>
                    <a href="#" style="color:#0645ad; text-decoration:none;">Terms of Service</a>
                </div>
            </div>
            <div style="display:flex; gap:10px;">
                <span style="border:1px solid #ccc; padding:4px 8px; background:#white;">MIT License</span>
                <span style="border:1px solid #a7d7f9; padding:4px 8px; background:#eaf3ff; color:#0645ad; font-weight:bold;">OpenWiki Support</span>
            </div>
        </div>
    </footer>`;

    window.injectOpenWikiFooter = function() {
        if (!document.getElementById('openwiki-legal-core')) {
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }
    };

    // ၃ စက္ကန့်တိုင်း Footer ရှိမရှိ စစ်ဆေးပြီး မရှိလျှင် ပြန်ထည့်မည်
    setInterval(window.injectOpenWikiFooter, 3000);
    window.addEventListener('load', window.injectOpenWikiFooter);
})();
