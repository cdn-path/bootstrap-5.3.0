// protection-check.js
(function() {
    function checkFooter() {
        const footer = document.querySelector('footer');
        if (!footer || !footer.textContent.includes('©️พัฒนาโดย ครูอั๋น ใจดี')) {
            showViolationScreen();
        }
    }

    function checkHtmlId() {
        const body = document.body;
        if (!body.id || body.id !== 'html-checked') {
            showViolationScreen();
        }
    }

    function preventInspect() {
        document.addEventListener('contextmenu', event => event.preventDefault());
        document.addEventListener('keydown', event => {
            if (event.ctrlKey && (event.key === 'u' || event.key === 's' || event.key === 'i' || event.key === 'c')) {
                event.preventDefault();
                showViolationScreen();
            }
        });
    }

    function showViolationScreen() {
        const violationScreen = document.createElement('div');
        violationScreen.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: black;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            text-align: center;
            z-index: 9999;
        `;
        violationScreen.innerHTML = `
            <div>
                <h2>คุณกำลังละเมิดทรัพย์สินทางปัญญา</h2>
                <p>กรุณาติดต่อครูอั๋น ใจดี</p>
                <p>โทร: 0952508587</p>
            </div>
        `;
        document.body.appendChild(violationScreen);
    }

    window.addEventListener('load', () => {
        checkFooter();
        checkHtmlId();
        preventInspect();
    });
})();
