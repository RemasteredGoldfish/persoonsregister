fetch('opdracht1_bijlage.json')
  .then(response => response.json())
  .then(data => {
    const { voornaam, achternaam, nationaliteit, leeftijd, gewicht } = data;

    // Update de gegevens op het scherm
    document.getElementById('first-name').textContent = voornaam;
    document.getElementById('last-name').textContent = achternaam;
    document.getElementById('nationality').textContent = nationaliteit;
    document.getElementById('age').textContent = leeftijd;
    document.getElementById('weight').textContent = gewicht;
  })
  .catch(error => {
    console.log('Er is een fout opgetreden bij het laden van de gegevens:', error);
  });
