# Logistika — Lux Apartmani Budva

## 1. Booking/Airbnb integracija

Najjednostavnije i najpraktičnije rešenje — **ne praviš svoj booking sistem**. Umesto toga:

- **Booking modal** preusmeri korisnika direktno na njihov Airbnb/Booking.com listing za izabrani apartman
- Klijent ti da linkove ka svakom apartmanu na Airbnb i Booking.com (5 apartmana x 2 platforme = 10 linkova)
- Dugme "Rezervišite" otvara njihov listing gde je kalendar dostupnosti, cene i plaćanje već rešeno

Za **kalendar dostupnosti** na sajtu imaš opcije:
- Airbnb/Booking nemaju javni API za male iznajmljivače
- Alternativa: klijent koristi **iCal feed** (i Airbnb i Booking nude export kalendara) — možeš napraviti sync ali zahteva backend
- **Najlakše**: skloni mock kalendar, stavi samo CTA dugmad ka platformama

## 2. Domen — gde kupiti

Preporuči **Namecheap** (namecheap.com):
- Jeftini (.com ~$10/god)
- Jednostavan interfejs
- Besplatan WHOIS privacy
- Lako se podesi DNS

Alternativa: **Porkbun** (još jeftiniji), ili ako klijent preferira domaće — **LoopiaRS** ili **Plus.rs**

## 3. Hosting + DNS setup

Pošto koristiš **GitHub Pages** (besplatno):

**Koraci kad klijent kupi domen:**

1. Klijent kupi `luxapartmanibudva.com` na Namecheap
2. Ti mu kažeš da podesi DNS (ili ti da pristup DNS panelu):
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  <tvoj-username>.github.io
   ```
3. Ti u GitHub repo Settings > Pages dodaš custom domain: `luxapartmanibudva.com`
4. Uključiš "Enforce HTTPS" — GitHub daje besplatan SSL

**Što ti treba od klijenta:**
- Pristup DNS podešavanjima (ili da ti pošalje login za Namecheap da sam podesiš)
- Linkove ka svih 5 apartmana na Airbnb i Booking.com
