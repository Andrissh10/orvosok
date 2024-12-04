function toggleInfo(selectedElement) {
    // Először eltávolítjuk az 'active' osztályt az összes munkatárs elemről
    const allElements = document.querySelectorAll('.munkatars');
    allElements.forEach(element => element.classList.remove('active'));

    // Az aktuálisan kiválasztott elemhez hozzáadjuk az 'active' osztályt
    selectedElement.classList.add('active');
}

function toggleInfo(selectedElement) {
    const allElements = document.querySelectorAll('.munkatars');
    
    // Ha az elem már aktív, távolítsuk el az 'active' osztályt
    if (selectedElement.classList.contains('active')) {
        selectedElement.classList.remove('active');
        return;
    }

    // Ha nem aktív, először távolítsuk el az 'active' osztályt az összes másik elemtől
    allElements.forEach(element => element.classList.remove('active'));

    // Adjunk 'active' osztályt a kiválasztott elemhez
    selectedElement.classList.add('active');
}