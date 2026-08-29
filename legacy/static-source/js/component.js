function executeFragmentScripts(container) {
    container.querySelectorAll('script').forEach(script => {
        const executableScript = document.createElement('script');

        [...script.attributes].forEach(attribute => {
            executableScript.setAttribute(attribute.name, attribute.value);
        });

        executableScript.textContent = script.textContent;
        script.replaceWith(executableScript);
    });
}

async function loadHTML(url, elementId) {
    const element = document.getElementById(elementId);

    if (!element) {
        console.error(`Element with id "${elementId}" not found.`);
        return;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        element.innerHTML = await response.text();
        executeFragmentScripts(element);
    } catch (error) {
        console.error(`Error loading HTML from ${url}:`, error);
        element.innerHTML = `<p class="component-load-error">Gagal memuat ${elementId}.</p>`;
    }
}

function showEl(element) {
    element?.classList.remove('d-none');
}

function hideEl(element) {
    element?.classList.add('d-none');
}

function parseRupiah(value) {
    return parseInt(String(value).replace(/\./g, ''), 10) || 0;
}

function formatRupiah(value) {
    return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function setupAvatarUpload() {
    const avatarBadge = document.querySelector('.profile-avatar-badge');
    if (!avatarBadge) return;

    avatarBadge.addEventListener('click', () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.classList.add('d-none');

        fileInput.addEventListener('change', () => {
            const [file] = fileInput.files || [];
            if (!file) return;

            const reader = new FileReader();
            reader.addEventListener('load', event => {
                const avatar = document.querySelector('.profile-avatar img');
                if (avatar) avatar.src = event.target.result;
            });
            reader.readAsDataURL(file);
        });

        document.body.appendChild(fileInput);
        fileInput.click();
        setTimeout(() => fileInput.remove(), 1000);
    });
}

function sweetDelete() {
    Swal.fire({
        title: 'Success!',
        text: 'Barang berhasil dihapus!',
        icon: 'success',
    });
}

function initPrivacyTermsNavigation() {
    document.querySelectorAll('.nav-tc-item').forEach(item => {
        item.addEventListener('click', function () {
            const target = document.getElementById(this.dataset.product);
            if (!target) return;

            target.style.scrollMarginTop = '50px';
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });

            document.querySelectorAll('.nav-tc-item').forEach(navItem => {
                navItem.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

function initSharedFragments() {
    loadHTML('templates/navbar.html', 'navbar-placeholder');
    loadHTML('templates/footer.html', 'footer-placeholder');
    loadHTML('templates/privacy-terms.html', 'privacy-terms-placeholder')
        .then(initPrivacyTermsNavigation);
}

function initBootstrapComponents() {
    document.querySelectorAll('.collapse').forEach(element => {
        new bootstrap.Collapse(element);
    });

    const toastTrigger = document.getElementById('liveToastBtn');
    const toastElement = document.getElementById('liveToast');
    if (!toastTrigger || !toastElement) return;

    const toast = bootstrap.Toast.getOrCreateInstance(toastElement);
    toastTrigger.addEventListener('click', () => toast.show());
}

function initTextInputSanitizer() {
    document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="search"], input:not([type])').forEach(input => {
        const shouldSkip = input.classList.contains('nomor-po-input')
            || input.classList.contains('number-separator');
        if (shouldSkip) return;

        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^a-zA-Z0-9\s.@[\]{}]/g, '');
        });
    });
}

function initNumberSeparators() {
    document.querySelectorAll('.number-separator').forEach(input => {
        input.addEventListener('keypress', event => {
            if (event.key === '.') input.value += ',';
        });

        input.addEventListener('input', () => {
            let cleanedValue = input.value
                .replace(/^[0]*/, '')
                .replace(/^[,]*/, '')
                .replace(/[^0-9\s.,]/g, '');

            if (input.classList.contains('quantity-input') || input.classList.contains('price-input')) {
                cleanedValue = cleanedValue.replace(/,/g, '');
            }

            input.value = cleanedValue;
        });

        easyNumberSeparator({
            selector: input,
            separator: '.',
            decimalSeparator: ',',
            resultInput: input.parentElement.querySelector('.result-input'),
        });
    });
}

function setSpecControlState(control, selected) {
    control.classList.toggle('selected', selected);
    control.querySelector('.ribbon')?.classList.toggle('d-none', !selected);

    const input = control.querySelector('.spec-input');
    if (input) input.checked = selected;
}

function initSpecificationControls() {
    document.querySelectorAll('.btn-spec').forEach(control => {
        control.addEventListener('click', event => {
            const group = control.parentElement;
            if (!group) return;

            const options = [...group.children]
                .filter(option => option.classList.contains('btn-spec'));
            const isActionButton = control.classList.contains('custom-size-btn')
                || control.classList.contains('custom-content-btn');

            if (isActionButton || options.length < 2) return;

            const input = control.querySelector('.spec-input');
            if (input) event.preventDefault();

            if (group.classList.contains('multiple-select')) {
                setSpecControlState(control, !control.classList.contains('selected'));
            } else {
                options.forEach(option => setSpecControlState(option, option === control));
            }

            input?.dispatchEvent(new Event('change', { bubbles: true }));
        });
    });
}

function getAncestorChain(element, maxLevels) {
    const chain = [];
    let parent = element;

    while (parent && chain.length < maxLevels) {
        parent = parent.parentElement;
        if (parent) chain.push(parent);
    }

    return chain;
}

function isInProximity(fromElement, toElement, maxLevels) {
    const fromAncestors = getAncestorChain(fromElement, maxLevels);
    const toAncestors = getAncestorChain(toElement, maxLevels);
    return fromAncestors.some(ancestor => toAncestors.includes(ancestor));
}

function initEnterNavigation() {
    const selector = 'input, textarea';

    document.addEventListener('keydown', event => {
        if (event.key !== 'Enter' || !event.target.matches(selector)) return;

        event.preventDefault();
        const activeElement = event.target;
        const inputs = [...document.querySelectorAll(selector)]
            .filter(element => !element.disabled && !element.readOnly && element.offsetParent !== null);
        const currentIndex = inputs.indexOf(activeElement);
        const nextInput = inputs
            .slice(currentIndex + 1)
            .find(element => isInProximity(activeElement, element, 6));

        if (nextInput) {
            nextInput.focus();
        } else {
            activeElement.blur();
        }
    });
}

function initSharedUI() {
    initSharedFragments();
    initBootstrapComponents();
    initTextInputSanitizer();
    initNumberSeparators();
    initSpecificationControls();
    initEnterNavigation();
}

document.addEventListener('DOMContentLoaded', initSharedUI);
