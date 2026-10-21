import type { Trip } from "../../types/trip";
import { tripImage } from "./images";

export const himos: Trip = {
  slug: "himos",
  name: "Himos",
  headline: "Kaks Himose reisi. Söö. Joo. Sõida. Kõik hinnas.",
  monthLabel: "Detsember / Jaanuar",
  lede: "Oled sa kunagi käinud reisil, kus sinu eest kõik ette-taha ära tehti, kõht täis söödeti ja kõige tipuks ka lumelauatama või suusatama õpetati? Kui oled, siis tead, mida oodata ja võid kohe reisi ära broneerida. Kui ei ole, siis nüüd on sul selleks suurepärane võimalus.",
  startDate: "2026-12-27",
  endDate: "2027-01-03",
  published: true,
  registerUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScoaCH1D82aNRpBZLErRIXxBJrJONo22o09Czyn89mdev79-A/viewform",
  images: [
    tripImage("himos-1", "Himosel nõlv ja suusakeskus"),
    tripImage("himos-2", "Lapsed suuskadel"),
    tripImage("himos-3", "Lapse suusasaabaste kinnitamine"),
    tripImage("himos-4", "Suusaõpe nõlval"),
    tripImage("himos-5", "Täiskasvanu ja laps suuskadega"),
  ],
  facts: [
    { label: "Sihtkoht:", value: "Himos, Soome" },
    { label: "Kuupäevad:", value: "27.–30.12 ja 30.12–03.01" },
    { label: "Tegevus:", value: "Suusatamine ja lumelauasõit" },
    { label: "Majutus:", value: "Kolmes suures mökis, kahestes tubades" },
    { label: "Toitlustus:", value: "Hommiku-, lõuna- ja õhtusöögid" },
    { label: "Õpe:", value: "Suusa- ja lumelauaõpe iga päev" },
    { label: "Lapsehoidja:", value: "Sisaldub" },
    { label: "Hind:", value: "Alates 900€" },
  ],
  program: [
    {
      kicker: "Reis 1",
      rows: [
        {
          date: "27.12",
          text: "Kell 9:00 kohtume Linnahalli Circle K kõrval. Helsinkisse sõidame kell 10:30 väljuva laevaga. Himosele jõuame umbes kell 16:00 ning pärast sisse kolimist läheme esimese asjana mäele.",
        },
        { date: "28–29.12", text: "Sõidame mäest alla, sööme-joome ja veedame lõbusalt aega." },
        {
          date: "30.12",
          text: "Teeme viimased sõidud, pakime asjad bussi ja sõidame tagasi Helsinki poole. Hilisõhtuks oleme kodus.",
        },
      ],
    },
    {
      kicker: "Reis 2",
      rows: [
        {
          date: "30.12",
          text: "Kell 6:00 kohtume Linnahalli Circle K kõrval. Helsinkisse sõidame kell 7:00 väljuva laevaga. Himosele jõuame umbes kell 13:00 ning pärast sisse kolimist läheme esimese asjana mäele.",
        },
        { date: "30.12–02.01", text: "Sõidame mäest alla, sööme-joome ja veedame lõbusalt aega." },
        {
          date: "02.01",
          text: "Teeme viimased sõidud, pakime asjad bussi ja sõidame tagasi Helsinki poole. Hilisõhtuks oleme kodus.",
        },
      ],
    },
  ],
  included:
    "Buss inimeste ja varustuse vedamiseks, laevapiletid, majutus kolmes suures ja lahedas mökkis kahestes tubades, voodilinad ja käterätikud, mäepiletid, suusa- ja lumelauaõpe iga päev, lapsehoidja, hommiku-, lõuna- ja õhtusöögid, viisakal hulgal kääritatud, pruulitud ja destilleeritud jooke.",
  excluded:
    "Reisikindlustus, suusa- ja lumelauavarustus, kavavälised lisategevused, toitlustus bussi- ja laevasõidu ajal.",
  prices: [
    {
      label: "Reisi hind 27–30.12:",
      lines: [
        "Lapsed kuni 6a – 900€",
        "Lapsed kuni 11a – 1000€",
        "Noored kuni 17a – 1100€",
        "Täiskasvanud – 1200€",
      ],
    },
    {
      label: "Reisi hind 30.12–03.01:",
      lines: [
        "Lapsed kuni 6a – 1000€",
        "Lapsed kuni 11a – 1100€",
        "Noored kuni 17a – 1200€",
        "Täiskasvanud – 1300€",
      ],
    },
  ],
  articles: [
    {
      heading: "Miks reisida koos Saltoga?",
      paragraphs: [
        {
          html: "Salto teeb su mäereisist tõeliselt mõnusa aktiivse puhkuse. Meil on väga hea kombinatsioon majutusest, toitlustusest ja reisiprogrammist ning see tähendab, et koju minnakse täis kõhu, heade emotsioonide ja uute oskustega.",
        },
        {
          html: "Meie jaoks on oluline külaliste mugavus ning logistikaga tegelemise võid reisi ajaks rahumeeli ära unustada. Korraldame transpordi Himosele ja tagasi koju ise ära - võtame su koos pagasiga sadama lähedusest bussi peale, viime Himosele ning reisi lõppedes toome su täpselt samasse kohta jälle tagasi. Ole ainult õigel ajal õiges kohas.",
        },
        {
          html: "Majutust valides on esmatähtis selle asukoht ning meie reisil on see lausa imeline - distants lähima tõstukini on umbes 100 meetrit. Niisiis saad iga kell koju puhkama või keha kinnitama minna.",
        },
        {
          html: "Toidust rääkides võib tõdeda, et ilmselt pakume terve Himose parimat sööki ja dieedi peale ei tasu sel reisil isegi mitte mõelda. Grupiga on kaasas professionaalne kokk, kes kolm korda päevas süüa teeb ning isegi söögikordade vahel laua kaetuna hoiab. Samuti hoolitseme selle eest, et keegi janusse ei jääks - reisipakett sisaldab nii alkoholivabasid kui ka alkohoolseid jooke. Viimased jätame mõistagi pigem õhtusesse vööndisse.",
        },
        {
          html: "Igal reisil teeme endast parima, et reisiseltskonnas tekiks õige mõnus grupiharmoonia. Seepärast sööme alati kambakesi ühe pika laua taga ning veedame koos lõbusalt aega ka muul ajal. See tähendab, et isegi kui tuled meiega reisile päris üksinda, siis koju tagasi sõidad juba suure pundi heade sõpradega.",
        },
        {
          html: "Salto reis Himosele on kõige ägedam aga selle poolest, et meil toimuvad iga päev suusa-ja lumelauaõpped. Grupiga on kaasas kogenud instruktorid, kes teevad koolitusi nii mäesuusatajatele kui lumelauduritele ning seda igal tasemel. Võid meiega kaasa tulla isegi siis, kui sa pole kunagi varem mäest alla lasknud. Loomulikult võtame avasüli vastu ka kogenud sõitjad, kes soovivad talvehooaja alguses vanu oskusi meelde tuletada ja senist sõiduoskust parandada.",
        },
      ],
    },
    {
      heading: "Kas lapsed võivad ka kaasa tulla?",
      paragraphs: [
        {
          html: "Salto reis Himosele on väga lapsesõbralik ning ootame sinna igas vanuses lumesõpru. Suusa-ja lumelauakoolitused toimuvad eelkõige rühmatundidena ning ootame sinna lapsi, kes on valmis iseseisvalt õppima. Need, kes on nooremad kui 6, vajavad vähemalt esimesed tunni-kaks rohkem tähelepanu ning sellisel juhul ootame lapsevanemaid instruktoritele appi. Elu on näidanud, et 3-4 aastased jõuavad paari päevaga nii kaugele, et suudavad iseseisvalt nii tõstukiga mäest üles minna kui ka sealt turvaliselt alla sõita.",
        },
      ],
    },
    {
      heading: "Kas võin niisama kaasa tulla ja mäest alla laskmise asemel midagi muud teha?",
      paragraphs: [
        {
          html: "Vabalt! Himosel saab lisaks mäest alla tuhisemisele sõita murdmaasuuskadega, käia husky-safaril või mootorsaaniga sõitmas. Mõistagi võib seal lihtsalt kõige täiega lõõgastuda ja üldse mitte midagi teha.",
        },
        {
          html: "Kui soovid midagi programmivälist teha, siis aitame selle hea meelega ära korraldada. Ainult küsi!",
        },
      ],
    },
    {
      heading: "Miks minna Himosele?",
      paragraphs: [
        {
          html: "Eesti parim suusakeskus on Himos ja see on fakt. Esiteks on ta meile nii lähedal, et sinna võiks kasvõi üheks päevaks sõita. Teiseks on ta päris hea suurusega - Himosel on kokku 26 nõlva ja 17 mäetõstukit. Seda on ilmselt rohkem kui teiste Eesti mäekeskuste peale kokku. Neid jätkub igale maitsele ja tasemele, alustades pisipõnnidele mõeldud Lumilast ning lõpetades mitte ühe, vaid lausa kahe trikipargiga. Himosel on lahe ja seepärast korraldabki Salto jõuluvaheaja lumereisi just sinna.",
        },
      ],
    },
  ],
};
