import type { Trip } from "../../types/trip";
import { tripImage } from "./images";

export const himaalaja: Trip = {
  slug: "himaalaja",
  name: "Himaalaja",
  headline: "Himaalajasse jalgratta sõitma ja matkama! Annapurna Circuit 2026.",
  monthLabel: "Oktoober",
  lede: "Salto x Indrek Kaljuvee on jalgratta- ja matkareis, mille sihtpunkt on Annapurna Circuit Nepaalis. See imeliste vaadetega mägitee on täis silmailu, kuid kõva pähkel ka kogenud mägedesõbrale ning eelnev treening on tungivalt soovitatav.",
  startDate: "2026-10-08",
  endDate: "2026-10-21",
  published: false,
  registerUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfI_lyD4xsyRsUEKGn5uiBnJ3P77VYAbDGTjEIwZ9doTxKomg/viewform",
  backgroundImage: "/images/himaalaja-bg.png",
  images: [
    tripImage("himaalaja-1", "Jalgrattur tänaval"),
    tripImage("himaalaja-2", "Inimesed mootorratastega"),
    tripImage("himaalaja-3", "Jalgrattur mägedes"),
    tripImage("himaalaja-4", "Inimesed mägedes"),
    tripImage("himaalaja-5", "Inimesed söömas"),
  ],
  facts: [
    { label: "Sihtkoht:", value: "Annapurna piirkond, Nepaal" },
    { label: "Kuupäevad:", value: "8.–21. oktoober 2026" },
    { label: "Kestus:", value: "14 päeva" },
    { label: "Tegevus:", value: "Mägiratta ekspeditsioon või jalgsimatk" },
    { label: "Kõrgeim punkt:", value: "Thorong La – 5416 m" },
    { label: "Majutus:", value: "Mägikülade teemajad" },
    { label: "Toitlustus:", value: "Hommiku- ja õhtusöögid" },
    { label: "Grupijuht:", value: "Indrek Kaljuvee + kohalik giiditiim" },
    { label: "Hind:", value: "1725 €" },
  ],
  program: [
    {
      rows: [
        { date: "08.10", text: "Kathmandu–Besisahar" },
        { date: "09.–12.10", text: "Liigume Brakasse" },
        { date: "13.10", text: "Aklimatiseerumismatk 4600 m kõrgusele Ice Lake'i juurde" },
        { date: "14.10", text: "Vaba päev" },
        { date: "15.–16.10", text: "Ületame Thorong La kuru (5416 m)" },
        { date: "17.10", text: "Puhkepäev" },
        { date: "18.–20.10", text: "RATTURID – liigume koos Pokhara suunas" },
        {
          date: "18.–20.10",
          text: "MATKAJAD – sõidetakse autoga Tatopani külla, kust suundutakse matkaradadele, mis viivad läbi Poon Hilli piirkonna otse Pokhara poole",
        },
        { date: "21.10", text: "Sõidame autoga tagasi Kathmandusse" },
      ],
    },
  ],
  excluded:
    "Lennupiletid, viisa, lõunasöögid, jalgratta rent, kindlustus (kuni 5500 m evakuatsioonikattega)",
  articles: [
    {
      heading: "Miks Annapurna Circuit ja miks Salto x Indrek Kaljuvee?",
      paragraphs: [
        {
          html: "Annapurna Circuit’i peetakse Nepaali kõige ilusamate vaadetega matkarajaks. See teeb ringi ümber Annapurna mäemassiivi ning kulmineerub Thorong La’ga, mis on maailma üks kõrgemaid läbitavaid mäekurusid. Lisaks imekaunistele vaadetele on see paik põnev ka kultuuriliselt, sest ajalooliselt on seda rada mööda käinud kaubandus Nepaali ja Tiibeti vahel. Niisiis on see paik segu budismi ja hinduismi mõjutustest, mõlema riigi tavadest ja toidust.",
        },
        {
          html: "Grupijuht Indrek Kaljuvee on tänavu selle raja juba omal käel läbi sõitnud ning veendunud, et see on kõva katsumus, kuid kindlasti tehtav. Ratturitele on eelnev treening kindlasti vajalik, matkajatele pole see nii oluline. Nende jaoks on igapäevane liikumine ajaliselt pikem, kuid keha kurnab see vähem.",
        },
        {
          html: "14 päeva jooksul liigume kokku ratastel 280 km, jalgsi 200 km. Mõni teelõik on väga järsk (kuni 30% tõusuga) ning sellistel lõikudel tuleb ratast käekõrval vedada. Kokkuvõttes ei ole tegemist lihtsa reisiga, vaid tõelise katsumusega – katsumusega, mis jääb sulle igaveseks meelde, kasvatab sind ratturi või matkajana ning tuletab meelde, millised on meie tegelikud igapäevased vajadused.",
        },
        {
          html: "Meie reisi teevad lihtsamaks kohalikud giidid, kes juhatavad meid nii jalgrattal, jalgsi kui ka autos. Saateauto olemasolu teeb kogu seikluse kindlamaks – terve marsruudi vältel ei pea kandma endaga kaasas rohkem kui 2 kg asju. Ratta tehniliste probleemide korral on meie saateautos mehaanik ja piisavalt Shimano ning SRAM varuosi jalgrataste parandamiseks.",
        },
        {
          html: "Kui sa tahad aga jalgsi tulla, oleme teinud kogu reisi sisse väikesed muudatused. Esimesel päeval saad 10–15 km edumaad, et meie peatumispunkt oleks õhtul samas teemajas. Viimasel kahel päeval liigud ratturitest erineval marsruudil koos kohaliku giidiga – erinevus tuleneb sellest, et me liigume lõpuks allamäge ning ratturite keskmine kiirus ületab sellel lõigul matkaja oma pea 3–4 korda. Ülesmäge liikudes oleme aga samas taktis.",
        },
        {
          html: "Vot nii – kui tunned, et oled valmis uueks seikluseks, siis pane end julgelt kirja! Kuupäev on lähedal!",
        },
      ],
    },
  ],
};
