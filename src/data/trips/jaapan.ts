import type { Trip } from "../../types/trip";
import { tripImage } from "./images";

export const jaapan: Trip = {
  slug: "jaapan",
  name: "Jaapan",
  headline: "Saltoga tõusva päikese maale",
  monthLabel: "Jaanuar",
  lede: "Kui kuskil on maailma kõige kohevam puuder, siis on see Jaapanis. Jaapani kõige parem lumi on Hokkaido saarel. Kõige rohkem erinevaid suusakeskusi on Asahikawa linna ümber ja sinna me jaanuari lõpus lähemegi!",
  startDate: "2027-01-20",
  endDate: "2027-01-30",
  published: true,
  registerUrl:
    "https://docs.google.com/forms/d/1lgzyabDT6-tcpp-2eLdBjsGBwIpyHJ5C486smPJLRdA/viewform",
  images: [
    tripImage("jaapan-1", "Suusatajad lumises metsas"),
    tripImage("jaapan-2", "Lumelaudur lumises metsas"),
    tripImage("jaapan-3", "Matkajad lumisel mäenõlval"),
    tripImage("jaapan-4", "Lumelaudurid lumes"),
    tripImage("jaapan-5", "Tänavatoit öises Jaapanis"),
  ],
  facts: [
    { label: "Sihtkoht:", value: "Asahikawa, Hokkaido, Jaapan" },
    { label: "Kuupäevad:", value: "20.–30. jaanuar 2027" },
    { label: "Tegevus:", value: "suusatamine, lumelauasõit, freeride ja backcountry touring" },
    { label: "Majutus:", value: "Hotell Route Inn Grand Asahikawa Ekimae****" },
    { label: "Hind:", value: "alates 2000€" },
  ],
  program: [
    {
      kicker: "Soojendusprogramm",
      rows: [
        {
          date: "20–23.01",
          text: "Saltoga pea ees Tokyosse. Imelised toiduelamused, kirev ööelu ja kamaluga ägedat Jaapani kultuuri. Vaatame tuunikalaoksjonit, sõidame kartidega mööda linna ringi, käime sumotrennis, õpime saket jooma ning tutvume ööeluga.",
        },
      ],
    },
    {
      kicker: "Põhiprogramm",
      rows: [
        { date: "23.01", text: "Transfeer Asahikawa lennujaamast hotelli." },
        { date: "24–29.01", text: "Hullame lumes, möllame mäel, sööme head-paremat ja mõnuleme onsenis." },
        { date: "30.01", text: "Check-out, transfeer lennujaama ja reisi lõpp." },
      ],
    },
  ],
  prices: [
    {
      label: "Reisi hind:",
      lines: [
        "Pakett light – 2000€",
        "Pakett medium – 2300€",
        "Pakett hardcore – 2600€",
        "Soojendusprogramm – xxx€",
      ],
    },
  ],
  articles: [
    {
      heading: "Miks Jaapan ja Asahikawa?",
      paragraphs: [
        {
          html: "Salto reis Jaapanisse on väga eriline ja äge. Esimene põhjus on loomulikult Jaapan ise, mis on täiesti uskumatu koht. Pole teist riiki, mis oleks nii viisakas, puhas ja korralik, kuid samas nii pöörane.",
        },
        {
          html: "Järgmiseks põhjuseks on loomulikult lumi. Siberi kohalt tulnud külm õhk jahutab Hokkaido üsna sooja ookeanivee kohale tekkinud auru kiirelt maha ning sellest tulevad lumepilved, mis oma sisu Hokkaido saare kohal alla lasevad. Tekkinud lumi on aga kõige peenema kristalliga paks vaip, mida sajab aastas maha kuni 15 meetrit. 15 meetrit! See on lihtsalt uskumatu.",
        },
        {
          html: "Ja see ei ole veel kõik – Hokkaidos on sellise lume jaoks täpselt õiged mäed. Piisavalt kõrged, et pikki laskumisi teha, kuid siiski piisavalt madalad, et mäed oleks kaetud metsaga. Puud on laiade okste ja lehtedega ning ei jäta maapinnale piisavalt päikesevalgust, et seal võiks võsa kasvada. Seega on puude vahel sõitmiseks väga mõnusalt ruumi.",
        },
        {
          html: "Asahikawa on Hokkaido suuruselt teine linn ning Tokyost saab sinna otselennuga. Kuid miks me seekord üldse linnas elame ja mitte otse suusanõlval? Seda seepärast, et Asahikawast tunnise sõidu kaugusel on kümneid kohti, kus saab mäest alla sõita.",
        },
        {
          html: "Seal on moodsaid, kiirete tõstukitega suusakeskusi; lahedaid, kuid mitte nii kiireid 90ndate stiilis kuurorte; rohkelt mägesid, kus mäest saab üles ainult jalgsi jne. Erinevalt paremini tuntud sihtkohtadest ei ole seal kuigi palju teisi sõitjaid, kes puutumatut lund himustaksid. Kui lund sajab, siis jätkub teda kõigile ja kauaks!",
        },
        {
          html: "Asahikawas ei käi liiga palju välisturiste ning see tähendab, et sealt saab väga autentse kogemuse, mida suusakuurortis elades ei leia. Linnas on palju erinevaid söögikohti ja baare ning uskumatult head toitu, millest siin võid ainult unistada.",
        },
        {
          html: "Seal on pisikesed rameni-urkad, kust saab imelisi nuudleid ja seetõttu on nad alati kohalikku rahvast täis; hubased izakayad, kus on tunne, et oled vanaemale külla sattunud; melu täis yakinikud, kus saad oma wagyu steiki ise grillida jne. Asahikawa kulinaarne elamus on peaaegu sama hea kui see, mille tekitab lumi. Lühidalt – see on imeline!",
        },
      ],
    },
    {
      heading: "Kus me elame?",
      paragraphs: [
        {
          html: "Hotell Route Inn Grand Asahikawa Ekimae**** asub keset linna ja melu. Hotellis on väga hea hommikusöök ning loomulikult onsen, kus on end pärast mäepäeva õige mõnus turgutada.",
        },
        {
          html: "Hotellitoad Jaapanis on pigem väikesed ning seepärast soovitame võtta üheinimesetoaga paketi. Loomulikult saab ka kahekesi hakkama, kuid üksi on mugavam.",
        },
      ],
    },
    {
      heading: "Kolm paketti – light, medium ja hardcore",
      paragraphs: [
        {
          html: "Light (loe: laisk) pakett tähendab, et kasutad mäest üles saamiseks mäetõstukeid ja matkamise osa jätad üldse vahele. See pakett sobib eelkõige neile, kes tahavad radadel sõita või pole veel kuigi kogenud freeride-sõitjad.",
        },
        {
          html: "Kuna kasutame mäegiide vaid matkamiseks ehk backcountry touringuks, siis selle paketiga giidiga koos sõitmist ei ole. See ei tähenda, et lõbus ei ole või et jätame teid täitsa omapead. Valime igaks sõidupäevaks parima kuurorti, hoolitseme alati selle eest, et saaksite ilusti mäkke ja tagasi koju ning keegi Salto pundist käib aeg-ajalt teiega koos ka sõitmas.",
        },
        {
          html: "Paketid medium ja hardcore on juba spordilaagri mõõtu. Medium pakett tähendab kahte ning hardcore lausa nelja matkapäeva koos giidiga.",
        },
        {
          html: "Matkamise all mõtleme kas touring-suuskade või splitboardidega mäest üles jalutamist ja siis sealt alla sõitmist. Miks minna jalgsi, kui saab tõstukiga? Jalgsi mäest üles matkates saad minna kohtadesse, kuhu mäetõstukid ei vii ja kus võib juhtuda, et sa ei kohta päeva jooksul ühtegi teist inimest peale oma grupikaaslaste.",
        },
        {
          html: "Kõvema matkapäevaga jõuad teha 2–3 sõitu, kuid võid kindel olla, et viimne kui pööre jääb meelde. Ja see pole niisama lahe tunne. See on puhas kaif. Nagu öeldakse välismaal – you’ve got to earn your turns. See võib sulle meeldima hakata. See hakkab sulle meeldima!",
        },
        {
          html: "Meie giidid on kohalikud asjatundjad, kes mitte ainult ei tea kõige paremaid sõidukohti, vaid ka seda, kus pärast matkapäeva oleks kõige mõnusam onsenis pikutada, kohalikke delikatesse süüa või õlut juua.",
        },
        {
          html: "Giidiga sõitmise päevad on 25–29.01 ning täpsemad detailid selgitame välja vastavalt huviliste arvule.",
        },
      ],
    },
    {
      heading: "Kellele see reis sobib?",
      paragraphs: [
        {
          html: "Väljasõit Hokkaidosse sobib kõigile, ka neile, kes ei taha üldse mäkke minna, sest Jaapanis on täiega äge! Kuid eelkõige on ta mõeldud lumesõpradele, kellele meeldib puudris sõita või kes tahaks sellega algust teha.",
        },
        {
          html: "Koolitusi me sel reisil ei paku, kuid vajadusel leiame teile mäesuusa- või lumelauainstruktorid, kes teile kõik põhitõed selgeks teevad.",
        },
        {
          html: "Kui sul freeride-kogemust pole, kuid tahaksid selle imelise maailmaga tuttavaks saada, siis aitame sul seda kindlasti teha, niisiis võid nime rahumeeli kirja panna.",
        },
        {
          html: "Giidipäevad on mõeldud juba kogenud lumelauduritele ja suusatajatele, kes ka väljaspool märgistatud radasid sõitmisega hakkama saavad.",
        },
        {
          html: "Võib juhtuda, et sõidame metsas ja see on keerulisem ning ohtlikum kui lagedal väljal sõitmine. Mäest üles matkamine ei nõua imelist spordivormi, kuid teatav füüsiline ettevalmistus võiks siiski olla. Palun arvesta sellega, kui reisile registreerud.",
        },
      ],
    },
    {
      heading: "Mida kaasa võtta?",
      paragraphs: [
        {
          html: "Lisaks sobivale riietusele soovitame kaasa võtta ka kogu sõiduvarustuse, sest kohapealt rentimine tähendab alati natuke lisapeavalu. Kui valid paketi light, siis peale kiivri sul ohutusvarustust vaja ei lähe.",
        },
        {
          html: "Giidiga matkamisel läheb vaja splitboardi või skitouringuks sobilikke suuski, matkakeppe ning laviinivarustust – laviinipiiparit, labidat ja lumesondi.",
        },
        {
          html: "Soovitame alati võtta ka laviinikoti, kuid see ei ole kohustuslik.",
        },
        {
          html: "Kui sul üht, teist või kolmandat endal pole, siis ei ole hullu, sest <a href=\"http://www.surfhouse.ee/\">Surfhouse</a>’ist saad kogu vajaliku rentida.",
        },
        {
          html: "Isegi kui kavatsed matkata vaid kaks päeva, soovitame vajamineva sellegipoolest Eestist kaasa võtta.",
        },
      ],
    },
    {
      heading: "Kuidas lennata?",
      paragraphs: [
        {
          html: "Kõige mugavam viis kohale jõuda on lennata Tokyosse ning sealt siselennuga Asahikawasse edasi minna.",
        },
        {
          html: "Kui plaanite Jaapanisse mõneks päevaks kauemaks jääda, mida me ka tungivalt soovitame, siis tehke seda pigem enne mägedesse minekut. Elu on näidanud, et pärast kuut mäepäeva vaatamisväärsuste jaoks enam liiga palju särtsu alles ei ole.",
        },
        {
          html: "Seepärast pakume võimalust tulla Tokyosse juba mõned päevad varem ning võtta osa Salto ametlikust soojendusprogrammist.",
        },
      ],
    },
    {
      heading: "Soojendusprogramm 20–23.01",
      paragraphs: [
        {
          html: "Miks tulla Tokyosse sooja tegema? Esiteks seepärast, et Tokyo on üks maailma ägedamaid linnasid, kus toimub kogu aeg midagi põnevat. See on koht, mis kunagi ei maga ja kust leiab kogemusi, mis on nii pöörased, et nende peale on ise raske tulla.",
        },
        {
          html: "Soojendusprogramm Tokyos juhatab ühtlasi ka võimaluse enne mägedesse minekut ajavahega kohaneda ning Jaapani elu-oluga ära harjuda. Nii on Asahikawasse jõudmise ajaks juba kombed selged, keel suus ja puusad soojad.",
        },
        {
          html: "Soojendusprogrammi hind sisaldab majutust ja kultuuriprogrammi.",
        },
      ],
    },
  ],
};
