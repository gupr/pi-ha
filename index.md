# Hemmaväderstation

Ett enkelt system för att:
- Mäta temperatur och luftfuktighet
- Se historik över tid
- Kolla kamera utomhus

---

## Inköpslista

### Bas
- Raspberry Pi 5 (8GB)
- 27W nätadapter (USB-C)
- microSD 64GB (helst High Endurance)
- Raspberry Pi-låda med fläkt

### Zigbee
- Zigbee USB-dongle
- USB-förlängningskabel (0.5–1 meter)

### Sensorer
- Temperatur + luftfuktighetssensorer
- Minst:
  - 1 inomhus
  - 1 utomhus

### Kamera
- IP-kamera (RTSP eller ONVIF)
- Helst:
  - PoE (mest stabilt)
  - eller WiFi

---

## Installation

### Steg 1 – Starta systemet
- Installera Home Assistant på Raspberry Pi
- Starta och vänta 5–10 minuter
- Öppna i webbläsare:
  - http://homeassistant.local:8123

---

### Steg 2 – Grundinställning
- Skapa konto
- Sätt plats
- Kontrollera att dashboard fungerar

---

### Steg 3 – Zigbee
- Sätt i USB-dongeln (via förlängningskabel)
- Gå till:
  - Settings → Devices & Services
- Lägg till:
  - ZHA

---

### Steg 4 – Koppla sensorer
- Klicka “Add device”
- Håll in knapp på sensor (ca 5 sek)
- Vänta tills den dyker upp

---

### Steg 5 – Placering

#### Inomhus
- Central plats
- Inte nära element

#### Utomhus
- Skydd från regn
- Inte i direkt solljus

---

### Steg 6 – Kamera
- Lägg till via:
  - ONVIF eller RTSP
- Kontrollera att bild visas

---

## Dashboard

Systemet visar:
- Temperatur inne
- Temperatur ute
- Luftfuktighet
- Kamerabild

---

## Checklista

- [ ] Köpt alla delar
- [ ] Installerat system
- [ ] Zigbee fungerar
- [ ] Sensorer visar värden
- [ ] Kamera fungerar

---

## Tips

- Använd nätverkskabel istället för WiFi (stabilare)
- USB-förlängning förbättrar Zigbee
- SD-kort kan slitas ut → backup rekommenderas

---

## Klart

När allt fungerar har du ett system som:
- kör lokalt
- sparar historik
- kan nås från mobil
