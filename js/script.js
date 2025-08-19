fetch('https://uemorin.ytkg.workers.dev/')
  .then(response => response.json())
  .then(data => {
    const latitude = data.is_home ? 35.685175 : parseFloat(data.latitude);
    const longitude = data.is_home ? 139.7528 : parseFloat(data.longitude);
    const map = L.map('map').setView([latitude, longitude], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
    const marker = L.marker([latitude, longitude]).addTo(map)
    marker.bindPopup("うえもりん").openPopup()
    marker.bindTooltip(`滞在時間: ${data.stayed_time}<br/>バッテリー: ${data.battery}%くらい`, { permanent: true })//, direction: 'bottom' })

    document.getElementById("address").innerText = data.address;
  })
