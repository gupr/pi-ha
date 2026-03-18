# Hemmaväderstation

Ett system för att:
- Mäta temperatur och luftfuktighet
- Visa historik och grafer
- Se kamera utomhus
- Nå allt från mobilen

---

# 1. Raspberry Pi – installation och inkoppling

## Installera systemet
1. Ladda ner Raspberry Pi Imager
2. Välj:
   - Other specific-purpose OS
   - Home Assistant
3. Välj SD-kort
4. Klicka “Write”

---

## Koppla in Raspberry Pi
- Sätt i SD-kortet
- Koppla in nätverkskabel (rekommenderas)
- Koppla in ström

---

## Starta systemet
- Vänta 5–10 minuter
- Öppna i webbläsare:
http://homeassistant.local:8123


---

# 2. Home Assistant – setup

## Första uppstart
- Skapa konto
- Ange plats

---

## Kontrollera att allt fungerar
- Dashboard laddar
- Inga felmeddelanden

---

## Grundinställningar
Gå till:
Settings → System

- Kontrollera nätverk
- Uppdatera systemet om möjligt

---

## Installera tillägg
Settings → Add-ons:

- File Editor
- Samba Share

---

# 3. Dongle (Zigbee) setup

## Koppla in
- Sätt Zigbee-dongeln i Raspberry Pi
- Använd USB-förlängningskabel

---

## Starta Zigbee
1. Gå till:
   Settings → Devices & Services
2. Klicka “Add Integration”
3. Välj ZHA
4. Välj rätt enhet (t.ex. /dev/ttyUSB0)
5. Slutför installation

---

# 4. Koppla sensorer

## Lägg till sensor
1. Gå till ZHA
2. Klicka “Add device”
3. Håll in knapp på sensorn (5–10 sek)
4. Vänta tills den dyker upp

---

## Placering

### Inomhus
- Centralt i huset
- Inte nära element

### Utomhus
- Skydd från regn
- Inte i direkt solljus
- Placera i skugga

---

# 5. IP-kamera (WiFi eller PoE)

## Lägg till kamera
1. Gå till:
   Settings → Devices & Services
2. Klicka “Add Integration”
3. Välj:
   - ONVIF eller
   - RTSP

---

## Kontrollera
- Kamerabild visas i systemet

---

# 6. Main Dashboard

## Skapa dashboard
1. Gå till Overview
2. Klicka “Edit Dashboard”
3. Lägg till kort (Add Card)

---

## Lägg till följande:

### Temperatur inne
- Entity: temperatur-sensor inomhus

### Temperatur ute
- Entity: temperatur-sensor utomhus

### Luftfuktighet
- Entity: fukt-sensor

### Kamera
- Camera card

---

# 7. Backup

## Syfte
Systemet ska spara:
- historik
- inställningar
- sensorer

---

## Setup
1. Gå till:
   Settings → Add-ons
2. Installera backup-lösning (t.ex. Google Drive Backup)
3. Aktivera automatiska backuper

---

## Resultat
- Systemet säkerhetskopieras automatiskt
- Data försvinner inte vid SD-krasch

---

# 8. Grafer

## Visa historik
1. Gå till Overview
2. Edit Dashboard
3. Add Card

---

## Lägg till:
- History Graph

---

## Välj sensorer:
- Temperatur inne
- Temperatur ute
- Luftfuktighet

---

## Resultat
- Du kan se förändringar över tid
- Enkelt att följa temperatur och klimat

---

# Checklista

- [ ] Raspberry Pi installerad
- [ ] Home Assistant fungerar
- [ ] Zigbee-dongle fungerar
- [ ] Sensorer anslutna
- [ ] Kamera fungerar
- [ ] Dashboard skapad
- [ ] Backup aktiv
- [ ] Grafer fungerar

---

# Tips

- Använd nätverkskabel istället för WiFi
- USB-förlängning förbättrar Zigbee
- Skydda utomhussensor från väder och sol
- Ta regelbundna backuper

---

# Klart

Systemet är nu igång och kan användas från mobil och dator.
