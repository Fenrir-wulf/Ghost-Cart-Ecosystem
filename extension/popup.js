document.getElementById('saveBtn').addEventListener('click', () => {
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    chrome.storage.local.set({ vulnerabilityStart: startTime, vulnerabilityEnd: endTime }, () => {
        const status = document.getElementById('statusMessage');
        status.style.display = 'block';
        setTimeout(() => {
            status.style.display = 'none';
        }, 2000);
    });
});

// Load saved settings when the popup opens
chrome.storage.local.get(['vulnerabilityStart', 'vulnerabilityEnd'], (result) => {
    if (result.vulnerabilityStart) {
        document.getElementById('startTime').value = result.vulnerabilityStart;
    }
    if (result.vulnerabilityEnd) {
        document.getElementById('endTime').value = result.vulnerabilityEnd;
    }
});
