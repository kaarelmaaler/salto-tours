import type { Trip } from "../../types/trip";
import { tripImage } from "./images";

export const maroko: Trip = {
  slug: "maroko",
  name: "Maroko",
  headline: "See on surfilaager, mis mahub igasse eelarvesse!",
  monthLabel: "November",
  lede: "Kujuta ette reisi, kus sa pikutad, sööd ja surfid ning ei pea üldse millegi pärast muretsema. Täielik puhkus. Täiuslik puhkus! Salto reis Taghazouti ongi midagi väga ägedat ja erilist. See on nagu märg unenägu.",
  startDate: "2026-11-07",
  endDate: "2026-11-14",
  published: false,
  backgroundImage: "/images/maroko-bg.png",
  images: [
    tripImage("maroko-1", "Rannalinn ja meri"),
    tripImage("maroko-2", "Inimesed surfilaudadega rannas"),
    tripImage("maroko-3", "Surfarid rannas"),
    tripImage("maroko-4", "Auto surfilaudadega katusel"),
    tripImage("maroko-5", "Auto rannas"),
  ],
  facts: [
    { label: "Sihtkoht:", value: "Taghazout, Maroko" },
    { label: "Kuupäevad:", value: "7–14.11.2026" },
    { label: "Tegevus:", value: "Surfamine, päikse käes pikutamine ja Maroko kultuuriga tutvumine" },
    { label: "Majutus:", value: "2–4 inimese toad" },
    { label: "Toitlustus:", value: "3x päevas" },
    { label: "Grupijuht:", value: "Vidrik-Jaan Korp" },
    { label: "Hind:", value: "Alates 550€" },
  ],
  program: [
    {
      rows: [
        { date: "7.11", text: "Transfeer lennujaamast laagrisse vastavalt sinu saabumisajale" },
        {
          date: "8-13.11",
          text: "Eat, surf, sleep, repeat. Muidugi ka Agadiris turul käimine, Paradise valley ja hammam-i külastus.",
        },
        { date: "14.11", text: "Check-out ja transfeer lennujaama" },
      ],
    },
  ],
  included:
    "Kohalik transport, surfivarustus, surfitunnid, majutus 2–4 inimese tubades, hommiku-, lõuna- ja õhtusöögid, väljasõidud.",
  excluded:
    "Lennupiletid, kindlustus, kavavälised lisategevused, alkohoolsed joogid, transfeer Marrakechist Taghazouti ja tagasi.",
  articles: [
    {
      heading: "Mis selles siis nii erilist on?",
      paragraphs: [
        {
          html: "Surfilaager Taghazoutis on aktiivne puhkus, kus me sinu eest kõik ära teeme. Viime lennujaamast laagrisse, anname surfitunde, toidame ja pakume ka kultuuriprogrammi. Kui omal käel proovima hakata, siis on lainesurf päris keeluline spordiala. Kuid kui seda teha pädevate instruktoritega, siis saab esimesed sõidud juba päris kiiresti tehtud. Niimoodi õpid surfama nagu tsiuvipsti. Salto surfilaager sobib nii algajatele kui ka edasijõudnud surfaritele.",
        },
        {
          html: "Surfitunnid toimuvad vastavalt laagri programmile üks kord päevas. Neile, kes end tõelisteks ässadeks peavad ja tahavad rohkem ringi seigelda, toimuvad koos kohaliku giidiga väljasõidud kohtadesse, kuhu omal käel nii naljalt ei jõuaks. Nõnda saab siin-seal ringi seigelda ning sõita line-upides, kus väga teisi surfareid pole. Seltskonnad komplekteerime kohapeal vastavalt osavõtjate arvule, sõidutasemele ja laineprognoosile.",
        },
      ],
    },
    {
      heading: "Hello Africa!",
      paragraphs: [
        {
          html: "Maroko asub Aafrikas, niisiis ära sellelelt reisilt täiesti euroopalikku kogemust oota. Ometi on Maroko on vägagi tsiviliseeritud ja samas küllaltki lähedal, niisiis on sinna hõlbus ja mugav lennata. Lisaks on seal soe, paremal juhul võib meie reisi ajal õhutemperatuur olla ka üle 30 kraadi. Taghazout on Maroko surfipealinn, kus on palju erinevaid surfirandasid igale sõidutasemele. Leidub laineid nii tõelistele ässadele kui ka neile, kes alles esimest korda lainesurfi proovivad.",
        },
        {
          html: "See on mõnusa surfivaibiga väike linnake, kus on väga chillid elanikud. Kui kardad hirmus pealetükkivaid ja tüütuid kaupmehi, siis ära muretse, seal neid ei ole. Taghazout asub Agadiri lennujaamast umbes tunnise sõidu kaugusel ja seega on sinna küllaltki lihtne kohale saada.",
        },
      ],
    },
    {
      heading: "Kas süüa saab?",
      paragraphs: [
        {
          html: "Süüa saab. Hommiku-ja õhtusöögid toimuvad meie majutuskoha katusel asuvas restoranis, niisiis on lisaks headele maitsetele ka imeline vaade. Lõunasöögiks sööme randa kaasa võetud võileibasid ja puuvilju.",
        },
        {
          html: "Igal reisil teeme endast parima, et reisiseltskonnas tekiks õige mõnus grupiharmoonia. Seepärast prioovime alati kõik üheskoos süüa ning veedame koos lõbusalt aega ka muul ajal. See tähendab, et isegi kui tuled meiega reisile päris üksinda, siis koju tagasi lendad juba suure pundi heade sõpradega.",
        },
      ],
    },
    {
      heading: "Miks reisida koos Saltoga?",
      paragraphs: [
        {
          html: "Salto teeb su päikesereisist tõeliselt mõnusa aktiivse puhkuse. Meil on väga hea kombinataioon majutusest, toitlustusest ja reisiprogrammist ning see tähendab, et koju minnakse värske jume, rõõmsate emotsioonide ja uute surfioskustega. Meie jaoks on oluline külaliste mugavus ning logistikaga tegelemise võid reisi ajaks rahumeeli ära unustada. Korraldame transpordi Agadirist Taghazouti ja tagasi ise ära - võtame su koos pagasiga lennujaama eest bussi peale, viime Taghazouti ning reisi lõppedes toome su täpselt samasse kohta jälle tagasi. Ole ainult õigel ajal õiges kohas. Majutust valides on esmatähtis selle asukoht ning meie reisil on see lausa imeline - asume keset Taghazouti linnakest otse mere ääres. Niisiis on kohvikud, restoranid, poekesed ja kõik muu eluks vajalik kohe käe-jala juures.",
        },
      ],
    },
    {
      heading: "Kas iga päev saab surfida?",
      paragraphs: [
        {
          html: "Surfida saab iga päev ja surfitunnid toimuvad kuuel päeval. Sõita saab nii palju, et käed hakkavad otsast ära kukkuma. Surfitunde annavad kogenud õpetajad, kes tunnevad lainelauasõidu hingeelu kohalikke olusid kõige paremini. Päevakava sõltub alati laineprognoosist, kuid suures plaanis näeb ta välja selline:",
        },
        {
          class: "schedule",
          html: "<span>9:30 transfeer kõige sobivamasse surfiranda</span><span>10:00–15:00 surfitund, lõunasöök ja vabasõit</span><span>15:00 transfeer tagasi Taghazout-i ja vaba aeg või kultuuriprogramm</span>",
        },
      ],
    },
    {
      heading: "Mis on kultuuriprogramm?",
      paragraphs: [
        {
          html: "Kultuuriprogramm tähendab väljasõite põnevatesse kohtadesse. Käime Agadiris maailma ühel suurimal siseturul, hüppame Paradise Valley-s kaljude otsast vette ja külastame väga kohalikku külasauna ehk hammam-i.",
        },
      ],
    },
    {
      heading: "Paketid",
      paragraphs: [
        {
          html: "<strong>Pakett Super Basic 550€</strong><br>2–4 inimese toad, WC 2–3 toa peale.<br>See pakett on mõeldud eelkõige neile, kes on juba kogenud sõitjad ja plaanivad oma surfivarustuse ise kaasa võtta. See ei sisalda surfiõpet ega rendivarustust.",
        },
        {
          html: "<strong>Pakett Surfcamp 650€</strong><br>2–4 inimese toad, WC 2–3 toa peale.<br>Surfcamp pakett sisaldab kõike, mida laager pakub, kuid tuba on ilma rõduta.",
        },
        {
          html: "<strong>Pakett Premium 750€</strong><br>rõduga 2-inimese tuba, WC 2–3 toa peale.<br>Premium pakett sisaldab sama, mida Surfcamp pakett, kuid tubades on rõdu ja imeline merevaade.",
        },
        {
          html: "<strong>Pakett Fancy</strong><br>kaunis hotellituba laagri lähedal asuvas peenes hotellis koos hommikusöögiga. Küsi hinda.",
        },
        { html: "Üheinimesetoa lisatasu on 150€." },
        {
          html: "Transfeerid korraldame päeva jooksul kahel korral vastavalt teie valitud lendudele.",
        },
      ],
    },
  ],
};
