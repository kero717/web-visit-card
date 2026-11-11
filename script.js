"use strict";

const input = document.getElementById('address');
const MapFrame = document.getElementById('MapFrame');
const WAFLIST = document.getElementById('WAFLIST');
const generalContainer = document.getElementById('generalContainer');
const output = document.getElementById('output');

const generalCard = document.getElementById('generalCard');
const editForm = document.getElementById('editForm');
const inputSite = document.getElementById('inputSite');
const inputPhone = document.getElementById('inputPhone');
const saveBtn = document.getElementById('saveBtn');
const displaySite = document.getElementById('displaySite');
const displayPhone = document.getElementById('displayPhone');

WAFLIST.addEventListener('click', function() {
    generalContainer.classList.toggle('hidden');
});

generalCard.addEventListener('click', function() {
    editForm.classList.toggle('hidden');
});

saveBtn.addEventListener('click', function() {
    if (inputSite.value.trim() !== '') {
        displaySite.textContent = inputSite.value;
        let url = inputSite.value;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        displaySite.href = url;
    }

    if (inputPhone.value.trim() !== '') {
        displayPhone.textContent = inputPhone.value;
    }

    editForm.classList.add('hidden');
});

Dadata.createSuggestions(input, {
    token: '8d9fbe069a7c1fad40a74450450611e2d09bc8a4',
    type: 'address',
    floating: false,
    beforeRender: (container) => {
        container.style.maxHeight = '200px';  
        container.style.overflowY = 'auto';  
    },
    onSelect: (suggestion) => {
        output.innerHTML = `<p>Выбран адрес: <strong>${suggestion.value}</strong></p>`;
        MapFrame.style.display = 'block';
    }
});