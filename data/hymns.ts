export type Stanza = { id: number; title: string; content: string };
export type Hymn = { id: number; number: number; categoryId: number; category: string; title: string; stanzas: Stanza[] };

export const categories = [
  {
    "id": 1,
    "name": "Nduyo Dzokudira",
    "short": "Worship",
    "icon": "music-note"
  },
  {
    "id": 2,
    "name": "Nziyo Dzevhangeri",
    "short": "Gospel",
    "icon": "auto-awesome"
  }
];

export const hymns: Hymn[] = [
  {
    "id": 1,
    "number": 1,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mucheni! Mucheni! Mucheni!",
    "stanzas": [
      {
        "id": 101,
        "title": "Stanza 1",
        "content": "M`cheni! M`cheni! M`cheni!\nUnesimbe reshe, Zuva richabuda, tinom`kudza,\nM`cheni! M`cheni! M`cheni! Unenyasha huru,\nUri umwe, Uri vatatuzve"
      },
      {
        "id": 102,
        "title": "Stanza 2",
        "content": "M`cheni! M`cheni! M`cheni!\nUnesimba reshe\nVanodira Jesu, Vasunhurwa\nM`cheni! M`cheni! M`cheni!\nUri Mambo wedu\nTinogonda teshe,\nWatidahe"
      },
      {
        "id": 103,
        "title": "Stanza 3",
        "content": "M`cheni! M`cheni! M`cheni!\nTisinganyam`oni\nVanom`ona Kristu, vanom`tenda,\nWakachena Mwari,\nSimba rake guru.\nVeshe vaponeswa, watidahe"
      }
    ]
  },
  {
    "id": 2,
    "number": 2,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Tinokudza Mwari",
    "stanzas": [
      {
        "id": 201,
        "title": "Stanza 1",
        "content": "Tinokudza Mwari,\nUri baba wedu.\nWakatuma kwetiri\nMuponesi wedu"
      },
      {
        "id": 202,
        "title": "Khorasi",
        "content": "Tinobonga kuna Mwari,\nTinobonga Jesu,\nTinobonga Mweya wake,\nTimuse zvino"
      },
      {
        "id": 203,
        "title": "Stanza 2",
        "content": "Tinokudza Jesu,\nUri Mambo wedu.\nWakatambudzwa\nNgokushaisha kwedu."
      },
      {
        "id": 204,
        "title": "Stanza 3",
        "content": "Tinobonga Mweya,\nUnotizarisa.\nUnogara mumwoyo,\nKutitungamira."
      },
      {
        "id": 205,
        "title": "Stanza 4",
        "content": "Timuse zvino,\nUzarise mwoyo,\nNgesimba norudo,\nNenyasha dzako."
      }
    ]
  },
  {
    "id": 3,
    "number": 3,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Baba, Nyamasi Tashongana",
    "stanzas": [
      {
        "id": 301,
        "title": "Stanza 1",
        "content": "Baba, nyamashi toshongana\nNgenyasha dzounadzo iwe;\nNgatiashire nyasha dzako,\nNahwo utende hwomudenga."
      },
      {
        "id": 302,
        "title": "Stanza 2",
        "content": "Izwi raJesu rinoronza\nNdakavafira vanhu veshe,\nAsi avandizii ini\nVanochadira nemidzimu."
      },
      {
        "id": 303,
        "title": "Stanza 3",
        "content": "Tinodzitenda nyasha dzako\nDzaunoitira isu.\nNdiwe wakangwarira teshe\nMazuva eshe edu muno"
      },
      {
        "id": 304,
        "title": "Stanza 4",
        "content": "Wechizwa, Baba, zvinopano\n\nNokukumbira kwedu kwo`ri\nTumira Mweya womugore\nUuye, utidakadzise."
      }
    ]
  },
  {
    "id": 4,
    "number": 4,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kwedzerai ngatitende",
    "stanzas": [
      {
        "id": 401,
        "title": "Stanza 1",
        "content": "Kwedzerai ngatitende\nKwaJehovha, timudire;\nNgatiuye pano pa`ri;\nTimukudze teshe."
      },
      {
        "id": 402,
        "title": "Stanza 2",
        "content": "Uri Mambo e,Jehovha,\nTakasikwa ndiwe wega.\nNyika yakaizwa ndiwe\nNazvo zveshe zvayo."
      },
      {
        "id": 403,
        "title": "Stanza 3",
        "content": "Tagwadama `mberi kwako,\nTikudire muiiti wedu,\nTiri vanhu vako isu,\nUri Mambo wedu."
      }
    ]
  },
  {
    "id": 5,
    "number": 5,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Zuva raJesu raguma nyamashi",
    "stanzas": [
      {
        "id": 501,
        "title": "Stanza 1",
        "content": "Zuva raJesu raguma nyamashi;\nVaripo nevekaretu,\nIguru zuva mudakare ndiro:\nOnai Jesu unoguma."
      },
      {
        "id": 502,
        "title": "Stanza 2",
        "content": "Chakwadi ndiye wakaza kufira,\nAvo vanotambudzika.\nNgezuva iro wakanyisa kufa:\nOnai Jesu unesimba."
      },
      {
        "id": 503,
        "title": "Stanza 3",
        "content": "Pindanyi mweshe mumhatso\nyaMwari,\nMutende Mwana waMwari\nNendaa dzomuno,\nunodziripira;\n\nOnai Jesu Mponesi."
      },
      {
        "id": 504,
        "title": "Stanza 4",
        "content": "Jesu, Mukororo ega waMwari,\nMudzichemere kwaari.\nMusunungurwe zvishaishi zvenyu,\nNgezuva rake rakanaka."
      }
    ]
  },
  {
    "id": 6,
    "number": 6,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "O Vanhu veshe muno",
    "stanzas": [
      {
        "id": 601,
        "title": "Stanza 1",
        "content": "O Vanhu veshe muno,\nEmbai kuna Mambo.\nNgokutya mukudzenyi,\nUyai, dakaranyi"
      },
      {
        "id": 602,
        "title": "Stanza 2",
        "content": "Mwazia Jesu, Mwari;\nWakatisika teshe.\nTiri mapwizhi ake,\nUnozotipa kudya."
      },
      {
        "id": 603,
        "title": "Stanza 3",
        "content": "Ngatimuirikidze\nNgokudakara zvino.\nNgenguva dzeshe ngati-\nMuirikidze Jesu"
      },
      {
        "id": 604,
        "title": "Stanza 4",
        "content": "O Mwari mwakanaka,\nMwakaitire nyasha.\nGwinyiso rinoema\nMhera nekare kweshe."
      }
    ]
  },
  {
    "id": 7,
    "number": 7,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Izuva raMambo raguma nyamashi",
    "stanzas": [
      {
        "id": 701,
        "title": "Stanza 1",
        "content": "Izuva raMambo raguma nyamashi,\nIzuva rake rom`chena mukuru;\nIzuva ravanoshangana kwaari,\nRavanhu vaMambo wegore."
      },
      {
        "id": 702,
        "title": "Stanza 2",
        "content": "Izuva resonto nedare rorira\n\nZuva ravo vanodaidzirwa;\nIzuva vodira, votenda, vopangwa\nNeizwi raMambo vorizwa."
      },
      {
        "id": 703,
        "title": "Stanza 3",
        "content": "Ngezuva wogara naMambo wegore,\nWakasikazve gore nenyika;\nNgezuva wamuka M`sunhuri mukuru,\nWabuda mwerake muguva."
      },
      {
        "id": 704,
        "title": "Stanza 4",
        "content": "Ngezuva vanhu vaMambo vanobva\nKuti vazwewo ndaa yenyasha;\nNgezuva vatendi vanoangirira\nUgaro hwavangashongona."
      },
      {
        "id": 705,
        "title": "Stanza 5",
        "content": "Tendai, atendi, tendanyizve mweshe,\nMutendeyi Jehovha mukuru;\nKwoguma nezuva rezvinozopera,\nMunozorora mudenga"
      }
    ]
  },
  {
    "id": 8,
    "number": 8,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "A! Kunaka kwokupona",
    "stanzas": [
      {
        "id": 801,
        "title": "Stanza 1",
        "content": "A! Kunaka kwokupona,\nKwetinakwo,\nApo Jesu unopinda\nMumwoyo unopfaa,\nUnodisa kuponesa\nVashaishi,\nNokudetsazve varombo,\nVanokumbira."
      },
      {
        "id": 802,
        "title": "Khorasi",
        "content": "Ngamakore eshe eshe,\nJesu unoda\nKuponesa vashaishi,\nNgaakudzwe,\nNgaakudzwe,\nNgaakudzwe,\nJesu ndiye Muponesi,\nNgaakudzwe."
      },
      {
        "id": 803,
        "title": "Stanza 2",
        "content": "Uwo wakatsvaka avo\nVakarashika\nUnotsvaka vashaishi\nVarimukufa\nUnoronza nanyamashi,\nNdiri pano\nNdinomuitire nyasha\nUyai zvino."
      },
      {
        "id": 804,
        "title": "Stanza 3",
        "content": "Achapona wakadzinga\nNhenda nokufa\nNanyamashi zvinoenda\nNgezwi raJesu;\nWakaperekedza vanhu\nVakagonda,\nNesu tinohamba naye,\nMambo wedu."
      }
    ]
  },
  {
    "id": 9,
    "number": 9,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Uyai Mambo wedu",
    "stanzas": [
      {
        "id": 901,
        "title": "Stanza 1",
        "content": "Uyai Mambo wedu\nTiirikidze zina\nTinomukudza Baba wedenga\nVanonyisa\nUyai Mambo titonge."
      },
      {
        "id": 902,
        "title": "Stanza 2",
        "content": "Uyai, izwi rake tichapingura zvino;\nTinokumbira kuti muuye kufumisa,\nMweya waMwari, uyai."
      },
      {
        "id": 903,
        "title": "Stanza 3",
        "content": "Uyai, Mununuri,\nKupupura ndiye,\nTinodakara ndimwi nesimba,\ntongai mwoyo\nUsatisiya mweyawo."
      },
      {
        "id": 904,
        "title": "Stanza 4",
        "content": "Uyai imwi M`kuru,\nMusikazoperi,\nHwenyu umambo,\ntoona m`denga\n\nTomudira, kusikaperi,\nMambowe."
      }
    ]
  },
  {
    "id": 10,
    "number": 10,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Hakuna zita kunga Jesu",
    "stanzas": [
      {
        "id": 1001,
        "title": "Stanza 1",
        "content": "Hakuna zita kunga Jesu,\nKana nekudenga,\nHakuna rimwe rakadaro,\nZita raM`ponesi."
      },
      {
        "id": 1002,
        "title": "Khorasi",
        "content": "Tinoda kuimbira Jesu,\nTichimupa mbiri,\nNgekuti hatizivi zita,\nRinokunda iri."
      },
      {
        "id": 1003,
        "title": "Stanza 2",
        "content": "NdiJesu wakafira vese,\nWakatida kwazvo,\nZvotanga takaraswa tese,\nNgezvitadzo zvedu."
      },
      {
        "id": 1004,
        "title": "Stanza 3",
        "content": "NdiJesu wakaita Nyasha,\nWakamukanganwa,\nWakati, \"Enda hako mwana,\nUsazotadzezve\"."
      },
      {
        "id": 1005,
        "title": "Stanza 4",
        "content": "NdiJesu wakatiudzira,\nKutunhidza Mwari,\nNekusarudza vashamwari,\nVakanaka chete."
      },
      {
        "id": 1006,
        "title": "Stanza 5",
        "content": "NdiJesu wakarapa vanhu,\nAkavasimbisa,\nNdiJesu wakamutsa vafi,\nKune hama dzawo."
      },
      {
        "id": 1007,
        "title": "Stanza 6",
        "content": "NdiJesu unoenda nesu,\nKwese tinoenda,\nNdiJesu unotibatsira,\n\nMuupenyu hwedu."
      }
    ]
  },
  {
    "id": 11,
    "number": 11,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Uya, Mambo Jesu",
    "stanzas": [
      {
        "id": 1101,
        "title": "Stanza 1",
        "content": "Uya, Mambo Jesu,\nPatakashongana,\nvanhu veshe ngavatende\nMazwi okupona."
      },
      {
        "id": 1102,
        "title": "Stanza 2",
        "content": "Uyai, Mambo Jesu\nNokujeka kwako,\nTijekise isu teshe,\nTiri mumhatso muno."
      },
      {
        "id": 1103,
        "title": "Stanza 3",
        "content": "Uya, Mambo Jesu\nNoutende hwako;\nItai vanhu vakudire,\nVade iwe wega"
      },
      {
        "id": 1104,
        "title": "Stanza 4",
        "content": "Uya, Mambo Jesu\nMuno munyika mwako;\nUdzidzise vanhu vako\nVakudire wega."
      },
      {
        "id": 1105,
        "title": "Stanza 5",
        "content": "Mwari ndiwe wega\nUnesimba reshe,\nRokutiponesa isu;\nTinokuda teshe."
      }
    ]
  },
  {
    "id": 12,
    "number": 12,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Baba, ngezuva renyu iri",
    "stanzas": [
      {
        "id": 1201,
        "title": "Stanza 1",
        "content": "Baba, ngezuva renyu iri\nNgatiireke nemishando;\nTiende kune mhatso yenyu,\nTidire Musiki wedu teshe."
      },
      {
        "id": 1202,
        "title": "Stanza 2",
        "content": "Tinokumbira teshe kwo`ri\n\nNgatiashire Mweya wenyu\nNemwoyo yedu yechichena\nNgeizwi renyu rokupona."
      },
      {
        "id": 1203,
        "title": "Stanza 3",
        "content": "Nenzee dzedu dzechibata\nZveshe zvironzo zvamururi;\nNemwoyo yedu yechinaka,\nYechinasirwa ndimwi, Baba."
      },
      {
        "id": 1204,
        "title": "Stanza 4",
        "content": "Kuti isisu m`nyika muno\nTechigonera kuna Jesu,\nTingapotera nomudenga\nKwomuri, Baba wedu, Mwari"
      }
    ]
  },
  {
    "id": 13,
    "number": 13,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jehovha, uri M`kuru",
    "stanzas": [
      {
        "id": 1301,
        "title": "Stanza 1",
        "content": "Jehovha uri m`kuru,\nMusiki wazvo zveshe,\nJehovha uri m`kuru\nMunyika mwake mweshe."
      },
      {
        "id": 1302,
        "title": "Stanza 2",
        "content": "Jehovha uri m` kuru,\nUnokuziva kweshe,\nJehovha uri m`kuru,\nUnaro simba reshe."
      },
      {
        "id": 1303,
        "title": "Stanza 3",
        "content": "Jehovha uri m`kuru\nUnoda vanhu vake,\nJehovha uri m`kuru\nTendai nyasha dzake."
      },
      {
        "id": 1304,
        "title": "Stanza 4",
        "content": "Jehovha uri m`kuru,\nNaJesu, Mwana wake;\nJehovha uri m`kuru,\nNomweya wakachena."
      }
    ]
  },
  {
    "id": 14,
    "number": 14,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mwakazviamba Mwari",
    "stanzas": [
      {
        "id": 1401,
        "title": "Stanza 1",
        "content": "Mwakazviamba, Mwari,\nZviara zveshe\nNavanhu vomunyika\nVomudira"
      },
      {
        "id": 1402,
        "title": "Stanza 2",
        "content": "Zviara azvim`zii,\nJehovha m`kuru\nZvinodya kudya kwazvo,\nAzvimutendi."
      },
      {
        "id": 1403,
        "title": "Stanza 3",
        "content": "Isisu atidaro\n TinodaMwari;\nTinozobata zvake,\n orudo rwake"
      },
      {
        "id": 1404,
        "title": "Stanza 4",
        "content": "Ngokuti watidetsa,\nNdiJesu Kristu,\nWakaza kutifira,\nNgatimudire"
      }
    ]
  },
  {
    "id": 15,
    "number": 15,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ngomukuwo wechidima",
    "stanzas": [
      {
        "id": 1501,
        "title": "Stanza 1",
        "content": "Ngomukuwo wechidima\nTifumisei Mwariwe\nTinotenda kushaisha,\nMungatichenesa."
      },
      {
        "id": 1502,
        "title": "Stanza 2",
        "content": "Ngozi dziri nesu pano,\nTinodzitya, Mambowe,\nTangwarirwa ngengirosi\nAtichina ngozi."
      },
      {
        "id": 1503,
        "title": "Stanza 3",
        "content": "Dambudziko rakashata,\nArifishi imwimwi;\nMuri aye munorinda\nVanhu venyu veshe."
      },
      {
        "id": 1504,
        "title": "Stanza 4",
        "content": "Dai kufa kwanyabata\n\nVanhu venyu, Mwariwe,\nMutimuse mangwanani\nMunotijekisa."
      }
    ]
  },
  {
    "id": 16,
    "number": 16,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Baba, toshangana pano",
    "stanzas": [
      {
        "id": 1601,
        "title": "Stanza 1",
        "content": "Baba, toshongana pano\nKomudira nokutenda.\nZvino tinoparadzana,\nNgatiende nemwi"
      },
      {
        "id": 1602,
        "title": "Stanza 2",
        "content": "Tipei kunyarara kwenyu,\nKwakapuwa kuvadzidzi.\nTinotama mweya kwawo\nWokutipa simba."
      },
      {
        "id": 1603,
        "title": "Stanza 3",
        "content": "Hambai nesu techienda.\nTipangidze njira yenyu\nTisanyiswa ngezviedzo,\nTizoguma nem`denga"
      }
    ]
  },
  {
    "id": 17,
    "number": 17,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Timudire, O Mwariwe",
    "stanzas": [
      {
        "id": 1701,
        "title": "Stanza 1",
        "content": "Timudire, O Mwariwe,\nTimuirikidze, rudo rwake,\nMusiki, mubati, kunyikayo,\nMudenga, umambo,\nngatimukudze."
      },
      {
        "id": 1702,
        "title": "Stanza 2",
        "content": "Kungwarirwa, O Mwariwe,\nNgatimukurise, Mambo wedu,\nKuchena, kujeka, kutongwawo.\nBeto nemvura zvinobva\nkwomuri."
      },
      {
        "id": 1703,
        "title": "Stanza 3",
        "content": "Kugondeka, O Mwariwe,\nNgirosi dzoda kumuembera\nNemhuka neshiri dzokudzawo,\n\nTinomukurisa, O Baba edu."
      }
    ]
  },
  {
    "id": 18,
    "number": 18,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Bako rangu ndiJesu",
    "stanzas": [
      {
        "id": 1801,
        "title": "Stanza 1",
        "content": "Bako rangu ndiJesu,\nNgandihwande kwaari.\nOna Jesu nengazi\nYakabomha parutii,\nKusuka kushaisha.\nNdisuke, ndicheneswe."
      },
      {
        "id": 1802,
        "title": "Stanza 2",
        "content": "Mishando yangu yeshe.\nNesimba rangu reshe\nNemisodzi yanguzve\nAzvikwani kudusa\nZvishaishi nendaa\nZvendakaita ini."
      },
      {
        "id": 1803,
        "title": "Stanza 3",
        "content": "Andina chokumupa,\nNdinoda muchinjiko.\nInga ndisina simba\nNdidetsere kuuya,\nNdisuke, ndisazofa."
      },
      {
        "id": 1804,
        "title": "Stanza 4",
        "content": "Nguva yedu yepashi\nInokasa kupera.\nNdozoenda mudenga.\nPachigaro chaMambo\nNdozoona Jesuzve,\nNdozohwara kwaari."
      }
    ]
  },
  {
    "id": 19,
    "number": 19,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Uri Mwari musunhuri",
    "stanzas": [
      {
        "id": 1901,
        "title": "Stanza 1",
        "content": "Uri Mwari musunhuri,\nWakaita zveshe;\nUri Mwari, musunhuri,\nWakafira veshe."
      },
      {
        "id": 1902,
        "title": "Stanza 2",
        "content": "Wafa munhu, musunhuri,\nKuripira isu;\nWafa munhu, musunhuri\nKuti tidakare."
      },
      {
        "id": 1903,
        "title": "Stanza 3",
        "content": "UneNyasha, musunhuri,\nKwavo vakashata;\nUnenyasha, musunhuri,\nKwawovakasungwa."
      },
      {
        "id": 1904,
        "title": "Stanza 4",
        "content": "Unesimba musunhuri,\nKuponesa veshe;\nUnesimba musunhuri,\nKutidakadzisa."
      },
      {
        "id": 1905,
        "title": "Stanza 5",
        "content": "Unotida, musunhuri,\nUnenyasha dzeshe;\nUnotida, musunhuri\nNgatim`tsvake teshe."
      }
    ]
  },
  {
    "id": 20,
    "number": 20,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Chinyarara Mwoyo wangu",
    "stanzas": [
      {
        "id": 2001,
        "title": "Stanza 1",
        "content": "Chinayarara mwoyo wangu,\nJesu ndiye Mwari,\nZviro zveshe zviri muno\nZvakasikwa ndiye."
      },
      {
        "id": 2002,
        "title": "Khorasi",
        "content": "Kristu, uyai\nKristu, uyai,\nEya uyai Mambo."
      },
      {
        "id": 2003,
        "title": "Stanza 2",
        "content": "Chinyarara mwoyo wangu,\nDakarira Mambo.\nUnotenda kuna Mwari,\nTenda kuna Jesu."
      },
      {
        "id": 2004,
        "title": "Stanza 3",
        "content": "Chinyarara mwoyo wangu,\nJesu unoaka\n\nMhatso yako yakanaka.\nKune denga rake."
      },
      {
        "id": 2005,
        "title": "Stanza 4",
        "content": "Chinyarara mwoyo wangu,\nUchadakadziswa.\nAugari nguva rebu,\nUchaenda m`denga."
      },
      {
        "id": 2006,
        "title": "Stanza 5",
        "content": "Chinyarara mwoyo wangu,\nJesu ndiye Mwari,\nKuda kwake kwakanaka,\nNgakuitwe ndiwe."
      }
    ]
  },
  {
    "id": 21,
    "number": 21,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Detsa vanofa, ngwarira vanhu",
    "stanzas": [
      {
        "id": 2101,
        "title": "Stanza 1",
        "content": "Detsa vanofa, ngwarira vanhu,\nAvo vanozwe denda yaemho,\nVanoshaisha, vanochema\nVaronzere ndiMuponesi."
      },
      {
        "id": 2102,
        "title": "Khorasi",
        "content": "Vadetsere avo vanofa\nJesu Muponesi, une nyasha."
      },
      {
        "id": 2103,
        "title": "Stanza 2",
        "content": "Vanosiya, wovagarira\nWovapetudza kwaari veshe,\nPota kwari, pota ngenyasha,\nVokungurirwa vanoendawo."
      },
      {
        "id": 2104,
        "title": "Stanza 3",
        "content": "Detsa vanofa, kunosisira.\nMwari unopa simba reshe.\nVaunze vanhu kuna Jesu,\nVaronzere ndiMuponesi."
      }
    ]
  },
  {
    "id": 22,
    "number": 22,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Emai, emai naJesu",
    "stanzas": [
      {
        "id": 2201,
        "title": "Stanza 1",
        "content": "Emai, emai naJesu,\nVatendi vaKristu;\n\nMirudzai muchinjiko\nUsazoshoorwa.\nMunozonyisa mweshe\nImbi dzomunorwa;\nMapandu enyu eshe\nAnozopfaiswa."
      },
      {
        "id": 2202,
        "title": "Stanza 2",
        "content": "Emai, emai naJesu,\nUnoridza gwama\nKuunganidza vanhu\nVehondo yake.\nVamuna ngavabude\nNaavo vanoshinga,\nMugwinye kumurwira\nNgoMweya waJesu."
      },
      {
        "id": 2203,
        "title": "Stanza 3",
        "content": "Emai, emai naJesu,\nNgesimba raMambo;\nKugwinya kwomuiri\nAkuzodetseri.\nPfekai zvokurwa zvenyu,\nMurinde, mukumbire.\nUripo Mambo wenyu\nUnomugwinyisa."
      }
    ]
  },
  {
    "id": 23,
    "number": 23,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Gura Chingwa, Mambowe",
    "stanzas": [
      {
        "id": 2301,
        "title": "Stanza 1",
        "content": "Gura chingwa, Mambowe,\nSezvo wakamboita zuvero.\nMutsamba yenyu ndinozwahe,\nMweya unomudira,\nMambowe."
      },
      {
        "id": 2302,
        "title": "Stanza 2",
        "content": "Muri chingwa, Mambowe,\nMazwi arimwo okuponawo;\nNdodo kugara mudengomwo,\nNdipewo rudo rwenyu,\nMwariwe."
      },
      {
        "id": 2303,
        "title": "Stanza 3",
        "content": "Tuma Mweya kwendiri,\n\nKutiandionise kwomuri;\nBeura mazwi arimwohe,\nMutsamba ndioone\ngwinyiso."
      }
    ]
  },
  {
    "id": 24,
    "number": 24,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "O Mambo ngandihambe",
    "stanzas": [
      {
        "id": 2401,
        "title": "Stanza 1",
        "content": "O Mambo, ngandihambe\nMunjira dzokudetsa;\nNdironze zano renyu,\nNdisazopera simba."
      },
      {
        "id": 2402,
        "title": "Stanza 2",
        "content": "O Mambo, ndipe rudo,\nNamazwi anokweya;\nVapepesheki vamwe\nVaunzwe ndini kanyi."
      },
      {
        "id": 2403,
        "title": "Stanza 3",
        "content": "O Mambo, ndidzidzise\nKusengerera kwenyu;\nNdishande ndechigonda,\nKushata kunonyiswa."
      },
      {
        "id": 2404,
        "title": "Stanza 4",
        "content": "Kugonda ngakujeke\nMazuva anouya;\nMukunyarara kwenyu,\nNdigare newe, Mambo."
      }
    ]
  },
  {
    "id": 25,
    "number": 25,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Hama dzedu dzetakada",
    "stanzas": [
      {
        "id": 2501,
        "title": "Stanza 1",
        "content": "Hama dzedu dzetakada\nDzakaenda mukufa;\nAsiatidziriarwi\nDai dzisipano.\nNgokukarakadza isu,\nTinochadziona,\nHope dzavo dzinodika\nDziri pedo pedu."
      },
      {
        "id": 2502,
        "title": "Stanza 2",
        "content": "Mwoyo yedu inofara,\nNgomukarakadzo,\nKuti tinozodziona\nNgamazuva awo.\nKuti dzafa dzechitenda\nJesu Muponesi,\nDzinozoashira nesu\nKanyi romudenga."
      },
      {
        "id": 2503,
        "title": "Stanza 3",
        "content": "Ngatitende Mwari wedu\nNgokugonda kwedu;\nNgokutenda Jesu ega\nTinozoashira\nKanyi kwakanaka kwega,\nKwakanasirirwa\nNeshe vanotenda nesu\nJesu Muponesi."
      }
    ]
  },
  {
    "id": 26,
    "number": 26,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Hambai vatendi",
    "stanzas": [
      {
        "id": 2601,
        "title": "Stanza 1",
        "content": "Hambai vatendi\nVanoda Jehovha.\nNgatembe ruyo rwedu,\nNgatiembe ruyo rwedu,\nTimuremeredze,\nTimuremeredze."
      },
      {
        "id": 2602,
        "title": "Khorasi",
        "content": "Toenda Zioni, Pakanaka paZioni;\nTokwira kwari Zioni,\nDhorobha romudengomwo."
      },
      {
        "id": 2603,
        "title": "Stanza 2",
        "content": "Vangapurutana Vanoda Jehovha,\nAsi vana vaJehovha,\nAsi vana vaJehovha,\nVokudza M`ponesi,\nVokudza M`ponesi."
      },
      {
        "id": 2604,
        "title": "Stanza 3",
        "content": "kenda Zioni Kunotidakadza,\nNomwoyo yedu yofara,\nNomwoyo yedu yofara,\n\nTisati taguma,\nTisati taguma."
      },
      {
        "id": 2605,
        "title": "Stanza 4",
        "content": "Ndizvo ngatiembe,\nTidakare teshe;\nToenda kuna Mponesi,\nToenda kuna Mponesi,\nKugara mudenga,\nKugara mudenga."
      }
    ]
  },
  {
    "id": 27,
    "number": 27,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ini Jesu ndiri njira",
    "stanzas": [
      {
        "id": 2701,
        "title": "Stanza 1",
        "content": "Ini Jesu ndiri njira\nNegwinyiso renyu;\nMwechizai mukwedzere,\nMuashire zveshe.\nJesu iwe uri njira,\nTinoenda ndiwe:\nIwe wakatiripira\nkubva mukushata."
      },
      {
        "id": 2702,
        "title": "Stanza 2",
        "content": "Iwe Jesu, ngamashwiro\nNdiwo mazwi ako;\nZviro zveshe zvokunyepa\nZvakashata kwori;\nWoponeswa mwoyo yavo vanotenda veshe."
      }
    ]
  },
  {
    "id": 28,
    "number": 28,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Wakadzitwara ndaa dzedu",
    "stanzas": [
      {
        "id": 2801,
        "title": "Stanza 1",
        "content": "Wakadzitwara ndaa dzedu,\nIwe usina ndaa na`mwe.\nWakavafira veshe Jesu.\nKuti vapone ndiwe veshe."
      },
      {
        "id": 2802,
        "title": "Stanza 2",
        "content": "Wakakusiya kanyi kwako,\nWakazoita munhu newe;\nNengazi yako yakarashwa,\nKuti tichenesiswe ndiyo."
      },
      {
        "id": 2803,
        "title": "Stanza 3",
        "content": "Kushata kwedu kweshe, kweshe\nKwakaripirwa ndiwe Mambo;\nNokushaisha kwedu kweshe\nKwakairwazve ndiwe, Jesu."
      },
      {
        "id": 2804,
        "title": "Stanza 4",
        "content": "Tozoponeswa, tocheneswa\nNgesimba rako rechakwadi;\nTozoshambidzwa mwoyo yedu,\nTechiitenda ngazi yako."
      }
    ]
  },
  {
    "id": 29,
    "number": 29,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndakagara muchidima",
    "stanzas": [
      {
        "id": 2901,
        "title": "Stanza 1",
        "content": "Ndakagara muchidima,\nMambo wangu;\nNdakagura mazwi ako,\nMambo wangu;\nWakauya mudzidzisi,\nwakaronza izwi rako;\nNdakatendereku kwo`ri,\nMambo wangu."
      },
      {
        "id": 2902,
        "title": "Stanza 2",
        "content": "Ndinopenya kwo`ri Jesu,\nMambo wangu;\nNdiwe wakafira vanhu,\nMambo wangu;\nWakadzaka mudengomwo,\nKuponesa isu vanhu:\nNdipe zvino mweya wako,\nMambo wangu."
      },
      {
        "id": 2903,
        "title": "Stanza 3",
        "content": "Izwi rako ngarihambe,\nMambo wangu;\nVanhu veshe ngavarizwe,\nMambo wangu;\nKuti vaponeswe ndiro,\nVamudire nyika yeshe,\nMambo wangu."
      }
    ]
  },
  {
    "id": 30,
    "number": 30,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Uyanyi vatendi, uyanyi vanyisi",
    "stanzas": [
      {
        "id": 3001,
        "title": "Stanza 1",
        "content": "Uyanyi vatendi, uyanyi vanyisi,\nuyai muone Imanuel!\nKu Bhet`rehema mugume,\nMudire, muembe.\nMudire, muembe, Mudire, muembe,\nMudire, muembe ndiJesu."
      },
      {
        "id": 3002,
        "title": "Stanza 2",
        "content": "Ndimwana waMwari\nWakabva mudenga\nWakatenda kubarwa ndiMaria.\nKuBhet`rehema mugume,\nMudire, muembe, Mukasire mweshe,\nMudire, muembe ndiJesu."
      },
      {
        "id": 3003,
        "title": "Stanza 3",
        "content": "Ngirosi dzinobva kwaMwari\nmudenga\nDzinoda kudira Imanuel.\nKu Bhet`rehema dzaguma,\nDzaemba, dzadira,\nDzidire, dziembe,\nDzidire, dziembe ndiJesu."
      }
    ]
  },
  {
    "id": 31,
    "number": 31,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Uyanyi vatendi",
    "stanzas": [
      {
        "id": 3101,
        "title": "Stanza 1",
        "content": "Uyanyi vatendi,\n dakaranyi mweshe,\nUyai paguta\nreBheterehema,\nMuone Jesu ,\n Mambo wengirosi;\n Uyai timudire,\n Uyai timudire,\n Uyai timudire Kristu."
      },
      {
        "id": 3102,
        "title": "Stanza 2",
        "content": "NdiMwari chakwadi\nWakatiponesa.\nWatenda kubarwa ndiMaria,\n\nWakada kutiite vana vake;\nUyai timudire,\nUyai timudire,\nUyai timudire Kristu."
      },
      {
        "id": 3103,
        "title": "Stanza 3",
        "content": "Embanyi Ngirosi,\nEmbanyi mudakare,\nNavanhu veiyi nyika, embai,\nMuirikidze Mwari\nMomudenga;\nUyai timudire,\nUyai timudire,\nUyai timudire Kristu."
      }
    ]
  },
  {
    "id": 32,
    "number": 32,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mwechizwanyi izwi",
    "stanzas": [
      {
        "id": 3201,
        "title": "Stanza 1",
        "content": "Mwechizwanyi izwi\nRinobuda m`gore,\nVakamboriemba,\nNengirosi kare."
      },
      {
        "id": 3202,
        "title": "Stanza 2",
        "content": "Nengirosi dzati\nKuvaushi apo,\nMusazonyatitya\nTine zvakanaka."
      },
      {
        "id": 3203,
        "title": "Stanza 3",
        "content": "Unobarwa zvino\nNdiMesia wenyu;\nMungam`ona apo,\nPane danga iro."
      },
      {
        "id": 3204,
        "title": "Stanza 4",
        "content": "Kwakaguma kamwe,\nNengirosi idzo,\nVaungana veshe,\nVechiti \"Embanyi\"'"
      },
      {
        "id": 3205,
        "title": "Stanza 5",
        "content": "Kurisanyi Mwari\nNouMambo hwake;\nVanokunyarara\n\nVomunyika muno."
      },
      {
        "id": 3206,
        "title": "Stanza 6",
        "content": "Mwechizwanyi mweshe.\nWakaguma Jesu;\nNgatipurutane\nTimukudze teshe."
      }
    ]
  },
  {
    "id": 33,
    "number": 33,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mwechizwanyi nengirosi",
    "stanzas": [
      {
        "id": 3301,
        "title": "Stanza 1",
        "content": "Mwechizwanyi nengirosi,\nDzinoemba m`denga,\nDzechiemba ndiye Mambo,\nAye Mambo m`kuru.\nAshiranyiwo mashoko,\nEdzino`reketa,\nNgaakure Muponesi,\nAye uno`mambo."
      },
      {
        "id": 3302,
        "title": "Stanza 2",
        "content": "Kunyarara kwemunyika\nKwayo yaka`kiwa,\nKwako vanozoponeswa\nKwavo vanopaurwa.\nDzinotenda, dzechiemba,\n\"Wakaguma Jesu,\nNyika navo vomudega,\nAshiranyi Jesu\"."
      },
      {
        "id": 3303,
        "title": "Stanza 3",
        "content": "Vanhu veshe, kasiranyi\nKuridzidza zina;\nKuti mwazokona aro,\nMunozopfaiswa.\nMuizie ndaa huru\nYokubarwa kwake,\nIhambire kakurutu,\nKune nyika dzeshe."
      }
    ]
  },
  {
    "id": 34,
    "number": 34,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Emba, emba, emba",
    "stanzas": [
      {
        "id": 3401,
        "title": "Stanza 1",
        "content": "Emba, emba, emai,\n\nWabarwa Muponesi;\nEmba, emba, emba\nmunyika mweshe.\nPanga, panga, panga\nMashoko akanaka.\nNavanhu vomunyika,\nVatende veshe."
      },
      {
        "id": 3402,
        "title": "Khorasi",
        "content": "Emba, emba, emba,\nEmba Muponesi.\nEmba, emba, emba,\nMunyika mweshe."
      },
      {
        "id": 3403,
        "title": "Stanza 2",
        "content": "Emba, emba, emba,\nMunyika mwe Judia;\nIzwa, dzinoemba\nNgirosi dzeshe.\nEmba, emba, emba\nNgorudo ngokupona,\nKunobva kunaMwari,\nTinozoona."
      },
      {
        "id": 3404,
        "title": "Stanza 3",
        "content": "Emba, emba, emba,\nMashoko akanaka,\nChaya, chaya simbi,\nNgokudarozve;\nRira, rira, rira,\nUrimudengadenga,\nTitende teshe Jesu,\nTinone teshe."
      }
    ]
  },
  {
    "id": 35,
    "number": 35,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Hondo yemakorwa",
    "stanzas": [
      {
        "id": 3501,
        "title": "Stanza 1",
        "content": "Hondo yemakorwa,\nEndai koorwa\nNom`chinjiko wake\nMberi kwenyu,\nAtiparadzani,\nTiri pamwe;\nMberi ngwazi dzake\n\nmberi koorwa."
      },
      {
        "id": 3502,
        "title": "Khorasi",
        "content": "Ngwazi dzake Jesu,\nNgatiambane\nNeimbi yaSathani\nTinozorwa."
      },
      {
        "id": 3503,
        "title": "Stanza 2",
        "content": "Zina rake Jesu\nRinonyisa\nHondo dzaSathani\nDzinotyisa.\nTinoirikidza\nNduna yedu,\nMberi ngwazi dzake\nMberi koorwa."
      },
      {
        "id": 3504,
        "title": "Stanza 3",
        "content": "Vanhu vanopera\nNoumambo,\nAsi hwaM`ponesi\nHunogara;\nAhunyiswizve\nMberi ngwazi dzake\nMberi koorwa."
      },
      {
        "id": 3505,
        "title": "Stanza 4",
        "content": "Mberi, imwi vanhu,\nUyai nesu;\nNgatikudze Jesu\nNgezwi rimwe.\nChikuponeswa,\nMberi ngwazi dzake\nMberi koorwa."
      }
    ]
  },
  {
    "id": 36,
    "number": 36,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndinoona muti wake",
    "stanzas": [
      {
        "id": 3601,
        "title": "Stanza 1",
        "content": "Ndinoona muti wake,\nMuti wokukohomerwa;\nApo wakafira vanhu,\nMuponesi, Mambo wedu."
      },
      {
        "id": 3602,
        "title": "Stanza 2",
        "content": "Ndinoona ngazi yake,\nWakabaiwa ngemikondo;\nNdinoona hope yake\nWakapfeka minzwa nayo."
      },
      {
        "id": 3603,
        "title": "Stanza 3",
        "content": "Asi kutifira apo,\nKuda kwake akubviri;\nWakatwara ndaa dzedu,\nWakatiitire nyasha."
      },
      {
        "id": 3604,
        "title": "Stanza 4",
        "content": "Kuda kwake kunonyisa,\nAndichamurambi ini,\nNdomutenda Mambo wangu,\nNdogwadama kwaari zvino."
      }
    ]
  },
  {
    "id": 37,
    "number": 37,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndakam’ona Muponesi",
    "stanzas": [
      {
        "id": 3701,
        "title": "Stanza 1",
        "content": "Ndakam�ona Muponesi,\nPam`chinjiko muno;\nWakafira vashaishi\nVakashata zvino,\nWakasia kanyi kwake;\nKurarama wakurasha.\nKuvaita vanhu veke\nWakaira veshe."
      },
      {
        "id": 3702,
        "title": "Stanza 2",
        "content": "Vanhu vake, ringiranyi,\nRingiranyi muno;\nRingiranyi Mwari wedu,\nWaaguma zvino.\nRasha njira yomunyika,\nReka zviro zvinopera,\nUya kwa`ri pam`chinjiko;\nWakafira veshe."
      },
      {
        "id": 3703,
        "title": "Stanza 3",
        "content": "Mungaona Muripiri,\nPam`chinjiko pake;\nMungazia Jesu Kristu,\nMude rudo rwake.\nNgokutambudzika kwake,\n\nEya, wakamuripira;\nIrikidzai muchinjiko;\nWakafira veshe."
      }
    ]
  },
  {
    "id": 38,
    "number": 38,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Muchinjiko wake",
    "stanzas": [
      {
        "id": 3801,
        "title": "Stanza 1",
        "content": "Muchinjiko wake\nWakaemeserwa\nJesu wavaJuda,\nPamutunhu uwo,\nNgamapandu ake\nKuti afe apo."
      },
      {
        "id": 3802,
        "title": "Stanza 2",
        "content": "Vanhu vakawanda\nVakachema apo\nPam`chinjiko wake;\nVakadaidzira,\n\"Ngaakohomerwe,\nKuti afe aye\"."
      },
      {
        "id": 3803,
        "title": "Stanza 3",
        "content": "Muchinjiko wake\nWakafishwa yaemho.\nMwari wakadusa,\nZuva rokujeka\nKuti Jesu afe,\nVasikamuoni."
      },
      {
        "id": 3804,
        "title": "Stanza 4",
        "content": "Asi muchinjiko\nUri chioniso\nChokusunungurwa\nKwamadzinza eshe,\nTiponeswe teshe,\nJesu Muripiri."
      }
    ]
  },
  {
    "id": 39,
    "number": 39,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ona Mweya wangu zvino",
    "stanzas": [
      {
        "id": 3901,
        "title": "Stanza 1",
        "content": "Ona Mweya wangu zvino\nM`ponesiwo, wamirudzwa pamumbuti\npadunhupo.\n\nNyika iri muchidima,\nMweya yeshe inotyiswa;\nMwari wake wamureka\nUnofahe."
      },
      {
        "id": 3902,
        "title": "Stanza 2",
        "content": "Munotinyi, unofira\nIsisuhe?\nZvakanaka kuti Jesu\nAfirehe?\nIzwi raPiratu rati,\n\"Andioni ndaa kwaari\nYakasisa kuti afe;\"\nWagurazve."
      },
      {
        "id": 3903,
        "title": "Stanza 3",
        "content": "Jesu Muponesi wedu,\nNowenyuhe;\nWatifira teshe kuti\nTisafazve;\nKasirai, muashire\nChipo chake chakanaka,\nKuti musunhurwe ndiye\nM`ponesiwo."
      }
    ]
  },
  {
    "id": 40,
    "number": 40,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Wakamuka Jesu Mambo",
    "stanzas": [
      {
        "id": 4001,
        "title": "Stanza 1",
        "content": "Wakamuka Jesu Mambo,\nHaleluya!\nWakanyisa kweshe kufa,\nHaleluya!\nWakafira ini ndega,\nHaleluya!\nnavamweni munyikeyi,\nHaleluya!"
      },
      {
        "id": 4002,
        "title": "Stanza 2",
        "content": "Ngatitende aye Mwari,\nHaleluya!\nWakatipa Mambo Jesu,\nHaleluya!\nAtambudzwe m`nyika muno,\nHaleluya!\n\nTiponeswe isu ndiye,\nHaleluya!'"
      },
      {
        "id": 4003,
        "title": "Stanza 3",
        "content": "Dakaranyi mweshe vanhu,\nHaleluya!\nMambo Jesu unozoza,\nHaleluya!\nKutitora teshe muno,\nHaleluya!\nTisazofa mudengomwo,\nHaleluya!"
      }
    ]
  },
  {
    "id": 41,
    "number": 41,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mambo wangu ndotenda",
    "stanzas": [
      {
        "id": 4101,
        "title": "Stanza 1",
        "content": "Mambo wangu, ndotenda\nUmambo ngohwako.\nNdisariarwa dzungudza\nNdiende Kalvari."
      },
      {
        "id": 4102,
        "title": "Khorasi",
        "content": "Ndisariarwa Getsimane\n Ndisariarwa dambudziko\nNdisariarwa rudo rwako\n, Ndiende Kalvari."
      },
      {
        "id": 4103,
        "title": "Stanza 2",
        "content": "Ndionise iba,\nPavaichema.\nDzaikurinda ngirosi,\nPawaiata."
      },
      {
        "id": 4104,
        "title": "Stanza 3",
        "content": "Ndouyawo kwouri\n Nechipo changu.\nJesu wamuka muiba,\n Ndiende Kalvari."
      },
      {
        "id": 4105,
        "title": "Stanza 4",
        "content": "Nditwari muchinjiko\nMazuva eshe,\nNditambudzikewo newe\nWakandifira.'"
      }
    ]
  },
  {
    "id": 42,
    "number": 42,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kunosisa here Jesu ega",
    "stanzas": [
      {
        "id": 4201,
        "title": "Stanza 1",
        "content": "Kunosisa here Jesu ega\nAtware muchinjiko?\nHaiwa, unozotwara hake,\nNeni ndinotwarawo."
      },
      {
        "id": 4202,
        "title": "Stanza 2",
        "content": "Muchinjiko wangu ndozotwara,\nNdoshanda metsa kufa,\nKane ndozoenda m`denga,\nKanyi, kuona dzungudza."
      },
      {
        "id": 4203,
        "title": "Stanza 3",
        "content": "Muchinjiko wake unondika!\nO Zuva rokumuka!\nUyai ngirosi dzaMwari wedu,\nKutora mweya."
      }
    ]
  },
  {
    "id": 43,
    "number": 43,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jehovha ngaakudzwe",
    "stanzas": [
      {
        "id": 4301,
        "title": "Stanza 1",
        "content": "Jehovha ngaakudzwe,\nMururi wedu teshe.\nZita rake ngaribongwe\nMunyika muno mweshe."
      },
      {
        "id": 4302,
        "title": "Stanza 2",
        "content": "Jehovha ngaakudzwe\nNgokuti ndiye Mwari.\nIsu vanhu tiri vake\nNgatimudire teshe."
      },
      {
        "id": 4303,
        "title": "Stanza 3",
        "content": "Jehovha ngaakudzwe\nNgokuti unotida.\nIzwi rake regwinyiso\nTinozopona ndiro."
      },
      {
        "id": 4304,
        "title": "Stanza 4",
        "content": "Jehovha ngaakudzwe\nNaJesu, Mambo wakachena\nTikudze nokudira."
      }
    ]
  },
  {
    "id": 44,
    "number": 44,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Hekani kuna Jehovha",
    "stanzas": [
      {
        "id": 4401,
        "title": "Stanza 1",
        "content": "Hekani kuna Jehovha,\nTinozotenda kwa`ri\nTironzere zveshe hedu,\nTim`tende Mambo wedu."
      },
      {
        "id": 4402,
        "title": "Stanza 2",
        "content": "Ndiye uri Muripi,\nWakati`tire nyasha,\nWakasia zvakanaka,\nWakaza kutifira."
      },
      {
        "id": 4403,
        "title": "Stanza 3",
        "content": "Onai, unozouya,\nVeshe vanozom`ona\nNavo vakamuuraya,\nEchiza namakore"
      },
      {
        "id": 4404,
        "title": "Stanza 4",
        "content": "Kudai echitiona,\nTichashambidzwa ndiye;\nWokasira kutidetsa,\nToenda kanyi kwa`ri."
      }
    ]
  },
  {
    "id": 45,
    "number": 45,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mumakore unodzaka",
    "stanzas": [
      {
        "id": 4501,
        "title": "Stanza 1",
        "content": "Mumakore unodzaka,\nWakafira veshe.\nNezviara zveshe,\nZvinoona kudakara."
      },
      {
        "id": 4502,
        "title": "Khorasi",
        "content": "Hekani, hekani\nMumakore unodzaka.\nHekani, Amen."
      },
      {
        "id": 4503,
        "title": "Stanza 2",
        "content": "Unoonwa ndivo veshe\nVechigara m`denga;\nAvo kwavakamuramba,\nVakamuuraya,\nVakam`tsumba,\n\nVakam`tsumba."
      },
      {
        "id": 4504,
        "title": "Stanza 3",
        "content": "Ngakugume zvinopano\nU\nkwo kuponeswa;\nVakanaka vake veshe.\nVanozomuona.\nVanoemba kakurutu."
      },
      {
        "id": 4505,
        "title": "Stanza 4",
        "content": "Eya, Ameni, tokumbira,\nKuna Muponesi.\nTora, Mambo, Simba rako\nTonga muumambo,\nApo tinozoembera."
      }
    ]
  },
  {
    "id": 46,
    "number": 46,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jesu wouya kutibhadhara",
    "stanzas": [
      {
        "id": 4601,
        "title": "Stanza 1",
        "content": "Jesu woya kutibhadhara,\n Echiuya nguveyi,\nWotiona, tagondeka,\n Nezvibani zvatije.'"
      },
      {
        "id": 4602,
        "title": "Khorasi",
        "content": "Tinochena zvino hama.\nMwoyo yacheneswa?\nApo waguma munyika muno,\nHere, munomugashira?"
      },
      {
        "id": 4603,
        "title": "Stanza 2",
        "content": "Dai mangwanani okudaidza,\nKuonisa m`shandopo,\nWoringira m`shando yedu,\nWozotinyi kwouri?"
      },
      {
        "id": 4604,
        "title": "Stanza 3",
        "content": "Takagondeka kunaMambo\nWedu\nTichimushandirawo,\nDai mwoyo isatitonga,\nTinozodakara."
      },
      {
        "id": 4605,
        "title": "Stanza 4",
        "content": "Vanomuchena vanoringira\nJesu echiuyazve,\nVoshandira Mambo wavo,\nVechirinda munohe."
      }
    ]
  },
  {
    "id": 47,
    "number": 47,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Rindanyi nguva iyo",
    "stanzas": [
      {
        "id": 4701,
        "title": "Stanza 1",
        "content": "Rindanyi nguva iyo\nYokuza kwake\nKuzovatora vake\nAgare navo`mwo.\n\"Ndinoza zvinopano,\nBatsira nazvo,\nAuzii nguva\nYendinoza."
      },
      {
        "id": 4702,
        "title": "Stanza 2",
        "content": "Rindanyi nguva iyo\nTokuza kwake,\n\"Vanozom`ona veshe\nNavo vakam`baya\"\nUnoza nengirosi\nKutonga nyika,\nUnozoemba pari\nNgenguveyo."
      },
      {
        "id": 4703,
        "title": "Stanza 3",
        "content": "Kasira `uye, Mambo,\nKuzotitora\nTigare newe, Mambo,\nMu`mambo mwakomwo,\nNgokuti iwe, Mambo,\nUzotitora,\nTinozogara newe\nmuutende."
      },
      {
        "id": 4704,
        "title": "Stanza 4",
        "content": "Ungazotinyi iwe\nAgume Jesu?\nUngazoenda navo\nKomuchingamidza?\nKuti usikazii\nKumugarira?\n\nTiende kanyi zvino,\nUsaramba."
      }
    ]
  },
  {
    "id": 48,
    "number": 48,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Dzaka, Mweya, Mweya kwaye",
    "stanzas": [
      {
        "id": 4801,
        "title": "Stanza 1",
        "content": "Dzaka, Mweya, Mweya\n kwaYe,\nUya utidetse,\nIwe uri wakanaka\n Uya utikweye,\nTionese zvakashata.\nZvetinoshandisa,\nUiite vanoreka\nZveshe zvetinoda."
      },
      {
        "id": 4802,
        "title": "Stanza 2",
        "content": "Musa mwoyo yavakafa\nIngwarire yeshe,\nIite ikarakadze,\nMazwi eshe ako,\nVaonise ngokuchema,\nNgemitoro yavo,\nVaashire simba rako,\nVakudire iwe."
      },
      {
        "id": 4803,
        "title": "Stanza 3",
        "content": "Tihambisezve munjira\nInoenda m`gore,\nKuti tisahamba isu\nNgeimwe njira,\nKuti wazotidaidza.\nAtizokurambi\nTikutende zvinopano\nTikute`re zvino."
      }
    ]
  },
  {
    "id": 49,
    "number": 49,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Dzaka, Mweya wakachena",
    "stanzas": [
      {
        "id": 4901,
        "title": "Stanza 1",
        "content": "Dzaka, Mweya wakachena,\nTizariswe ndiye,\nTimudire Mambo Jesu,\nTimudire teshe."
      },
      {
        "id": 4902,
        "title": "Stanza 2",
        "content": "Dzaka, Mweya wakachena,\nTidzidziswe ndiwe,\nKuda kwedu tikureke,\nKuda kwako tiite."
      },
      {
        "id": 4903,
        "title": "Stanza 3",
        "content": "Dzaka, Mweya wakachena,\nTirigwinyise ndiwe,\nMwoyo yedu icheneswe.\nInasirwe ndiwe."
      },
      {
        "id": 4904,
        "title": "Stanza 4",
        "content": "Dzaka, Mweya wakachena,\nVanhu vamutsvake\nMambo wedu, Jesu Kristu,\nVaponeswe ndiye."
      }
    ]
  },
  {
    "id": 50,
    "number": 50,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Uya, Mweya wakanaka",
    "stanzas": [
      {
        "id": 5001,
        "title": "Stanza 1",
        "content": "Uya, Mweya wakanaka,\nUriM`detsi wedu;\nTipe simba rako isu\nNomumwoyo yedu."
      },
      {
        "id": 5002,
        "title": "Stanza 2",
        "content": "Ona mwoyo yedu iyi\nYakaza kufa,\nTiri vanhu vakashata,\nUngatisukawo."
      },
      {
        "id": 5003,
        "title": "Stanza 3",
        "content": "M`detsi wedu, kungurira\nIsu vashaishi,\nTidzidzise nenyamashi\nKuti rikuzie."
      },
      {
        "id": 5004,
        "title": "Stanza 4",
        "content": "Kuti nesu tikudewo\nNawo mazwi ako,\nAnotironzera zveshe\nZvakanaka zvako."
      }
    ]
  },
  {
    "id": 51,
    "number": 51,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jesu ndishamwari yedu",
    "stanzas": [
      {
        "id": 5101,
        "title": "Stanza 1",
        "content": "Jesu ndishamwari yedu,\nMungwariri wakanaka,\nTinodakadziswa ndiye\nTine hama yakadai\nKuti techimukumbira,\nNdizvo nuotipingura,\nUnotipa zvakanaka,\nAtichazotami chiro."
      },
      {
        "id": 5102,
        "title": "Stanza 2",
        "content": "Kuti tine dambudziko,\nKuti takachengedzerwa,\nAtizoa nourombo\nTinotendenda kuna Jesu,\nAtioni imwe hama,\nYakanaka kunga Jesu,\nUnozia vanhu veshe,\nMukumbire unokuzwa."
      },
      {
        "id": 5103,
        "title": "Stanza 3",
        "content": "Kuti tisina simba,\nRokuitazve mushando, Jesu\nUnotidetsera\nUnotipa simba raka,\nKana kuti takatukwa,\nTinonyararidzwa ndiye,\nJesu ndishamwari yedu,\nRudo rwake rwakanaka."
      }
    ]
  },
  {
    "id": 52,
    "number": 52,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Izwi rake Mwari wedu",
    "stanzas": [
      {
        "id": 5201,
        "title": "Stanza 1",
        "content": "Izwi raka, mwari wedu,\nRakanaka haro,\nRajekesa muchidima,\nRine simba haro."
      },
      {
        "id": 5202,
        "title": "Khorasi",
        "content": "Ngatirirwe izwi rako,\nTiritende aro,\nTirizwise,tiribate,\n\nTiteere aro."
      },
      {
        "id": 5203,
        "title": "Stanza 2",
        "content": "Aro rinotidzidzisa,\nTinozia ndiro,\nNemishando mikurutu,\nTaronzerwa ndiro."
      },
      {
        "id": 5204,
        "title": "Stanza 3",
        "content": "Aro rinotijekisa,\nRiri zuva redu,\nAro rinotikweera,\nRiri m`kweyi wedu."
      }
    ]
  },
  {
    "id": 53,
    "number": 53,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jesu wakashoorwa",
    "stanzas": [
      {
        "id": 5301,
        "title": "Stanza 1",
        "content": "Jesu wakashoorwa,\nWakasvipa mwoyo,\nWakatinunurira,\nHaleluya, Muponesi."
      },
      {
        "id": 5302,
        "title": "Stanza 2",
        "content": "Inga takafuratira,\nWakatora ndaa dzedu,\nHaleluya Muponesi."
      },
      {
        "id": 5303,
        "title": "Stanza 3",
        "content": "Wakatambudzikira,\nVashaishi veshe;\nNgokuvada wakafa,\nHaleluya Muponesi."
      },
      {
        "id": 5304,
        "title": "Stanza 4",
        "content": "Unozovaonazve,\nVari muumambo,\nvanokudadziswa\nHaleluya Muponesi."
      }
    ]
  },
  {
    "id": 54,
    "number": 54,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Tina mazwi omururi",
    "stanzas": [
      {
        "id": 5401,
        "title": "Stanza 1",
        "content": "Tina mazwi omururi,\nTinoponandiwo,\n\nTinozia ndaa dzedu.\nNdiye Muponesi."
      },
      {
        "id": 5402,
        "title": "Stanza 2",
        "content": "Akaguma manzwi aya,\nAchahamba hawo;\nNamadzinza arikure\nAnoagarira."
      },
      {
        "id": 5403,
        "title": "Stanza 3",
        "content": "Namagaa oMururi,\nAnonyiswa ndiwo;\nNyika dzeshe dzozariswa\nNdiwo manzwi ake."
      },
      {
        "id": 5404,
        "title": "Stanza 4",
        "content": "Kumitunhu nemikova\nVanodzidza navo;\nVana vamadzinza eshe,\nVanongwara ndiwo"
      },
      {
        "id": 5405,
        "title": "Stanza 5",
        "content": "Madzimambo namakota\nAnopera pano;\nAsi manzwi oMururi\nAatongoperi."
      }
    ]
  },
  {
    "id": 55,
    "number": 55,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jesu watipanga kujeka",
    "stanzas": [
      {
        "id": 5501,
        "title": "Stanza 1",
        "content": "Jesu watipanga kujeka,\nKudai ngechibani muusiku.\nMunyika yechidima ngatijeke,\nMuugaro hwako nohwangu."
      },
      {
        "id": 5502,
        "title": "Stanza 2",
        "content": "Jesu wodo kuti timujekere,\nUnoona dai tisingajeki.\nUnotiringira techijeka,\nMuugaro hwako nohwangu."
      },
      {
        "id": 5503,
        "title": "Stanza 3",
        "content": "Jesu watipanga kujeka,\nNyika yakazara ngechidima.\nNyika inotama Jesu Kristu,\n\nNgatimujekerewo Jesu"
      }
    ]
  },
  {
    "id": 56,
    "number": 56,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mambo wangu waindida",
    "stanzas": [
      {
        "id": 5601,
        "title": "Stanza 1",
        "content": "Mambo wangu waindida\nMukurashika kwangu;\nMambo wakanditeera\nMunjira mwangu mweshe;\nNdaonekwa ndiMambo"
      },
      {
        "id": 5602,
        "title": "Stanza 2",
        "content": "Mambo wangu, izwi\nRako ririkujeka kwangu;\nMambo wangu, nyasha dzako\nDzinondidakadzisa;\nNdafumiswa ndiMambo"
      }
    ]
  },
  {
    "id": 57,
    "number": 57,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Wakade nyika iyi",
    "stanzas": [
      {
        "id": 5701,
        "title": "Stanza 3",
        "content": "Mambo wangu, mweya wako\nUnondizarisazve;\nMambo wangu, gore rako,\nApo ikanyi rangu\nNdipoteremwo Mambo"
      },
      {
        "id": 5702,
        "title": "Stanza 1",
        "content": "Wakade nyika iyi\nKakuru kundidetsa,\nKuponesa vanhu vake;\nMuirikidzenyi Baba"
      },
      {
        "id": 5703,
        "title": "Khorasi",
        "content": "Irikidzai Baba,\nIrikidzai Baba,\nIrikidzai\nIrikidzai,\nMuirikidzenyi Baba."
      },
      {
        "id": 5704,
        "title": "Stanza 2",
        "content": "Wakatihambira Kristu,\nNgorudo waronzera,\nNgokutifira kwake;\n\nMuirikidzenyi Baba."
      },
      {
        "id": 5705,
        "title": "Stanza 3",
        "content": "Wapfeka hunhu hwedu,\nWaita myanisi,\nWapedza kutambudzwa;\nMuirikidzenyi Baba"
      },
      {
        "id": 5706,
        "title": "Stanza 4",
        "content": "Pambuti wakafira,\nVenyika vaizofa;\nNeguva wakanyisa;\nMuirikidzenyi Mambo."
      },
      {
        "id": 5707,
        "title": "Stanza 5",
        "content": "Mukuru Mambo Mgore,\nNgaakuriswe yaemho,\nVazvino nevakare,\nMuirikidzenyi Baba."
      }
    ]
  },
  {
    "id": 58,
    "number": 58,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ngazi ino m’tengo mkuru",
    "stanzas": [
      {
        "id": 5801,
        "title": "Stanza 1",
        "content": "Ngazi ino m`tengo m`kuru,\nYakadonha pamchijiko,\nKuripa"
      },
      {
        "id": 5802,
        "title": "Khorasi",
        "content": "Ngazi ino m`tengo m`kuru,\nInoerera,\nGonda ngazi yakabomha,\n Upone."
      },
      {
        "id": 5803,
        "title": "Stanza 2",
        "content": "Ngazi ino m`tengo m`kuru,\nNgaichenese,\nZveshe zvishaishi zvako,\nZvipere."
      },
      {
        "id": 5804,
        "title": "Stanza 3",
        "content": "Ngazi ino m`tengo m`kuru,\nYakabeura,\nNjira yakuenda kanyi,\nMudenga."
      },
      {
        "id": 5805,
        "title": "Stanza 4",
        "content": "Ngazi ino m`tengo mkuru,\nInonyisazve,\nZveshe zvaanotiedza\nSatani."
      }
    ]
  },
  {
    "id": 59,
    "number": 59,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndichazoramba metsa riini",
    "stanzas": [
      {
        "id": 5901,
        "title": "Stanza 1",
        "content": "Ndichazoramba metsa rini,\nKumunda Mambo Jesu,\nNazvino uchaitidaidza,\nUyai muponeswe."
      },
      {
        "id": 5902,
        "title": "Khorasi",
        "content": "Ndapota hangu Mambo,\nUndikungurire,\nNdareka kushaisha,\nNdinokutenda Jesu"
      },
      {
        "id": 5903,
        "title": "Stanza 2",
        "content": "Nemwiwo hama dzinodika,\nNgatimutende teshe\n Tireke zveshe zvakashata,\ntidire Jesu ega."
      },
      {
        "id": 5904,
        "title": "Stanza 3",
        "content": "Nazvino unachakahudza\nmumwoyo mwedu teshe;\nTisazoramba kubeura,\nngatim`potedze hedu."
      },
      {
        "id": 5905,
        "title": "Stanza 4",
        "content": "Jehovha, ndiye Mwana wake,\nunochatitendera;\nTechikwedzera kwa`ri zvino,\nunotikungurira'"
      }
    ]
  },
  {
    "id": 60,
    "number": 60,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kuemba kwakanaka, kwazwika usiku",
    "stanzas": [
      {
        "id": 6001,
        "title": "Stanza 1",
        "content": "Kuemba kwakanaka,\nKwazwika usiku,\nNgirosi dzakaguma\npaBheterehema,\n\nDzakati kunyarara kunobva\nmudenga,\nKuvanhu vomunyika\nvadakadziswe."
      },
      {
        "id": 6002,
        "title": "Stanza 2",
        "content": "Nazvino dzichauya munyika muno,\nKuemba kwakanaka kuriyo pedo,\nKudusa nemasodzi pahope yedu\nTione kuzororo panyaika iyo."
      },
      {
        "id": 6003,
        "title": "Stanza 3",
        "content": "Uyanyi kwamuponesi\nngezuva iri,\nMumuda Jesu Kristu,\nmupote kwaari,\nAmuitire nyasha ngezuva rake."
      }
    ]
  },
  {
    "id": 61,
    "number": 61,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndinozom ’ kurisa",
    "stanzas": [
      {
        "id": 6101,
        "title": "Stanza 1",
        "content": "Ndinozom`kuri musunhuri;\nWakandiponesa,\nKushaisha.\nUnondifarisa,\nMukugara,\nNdizvo ndom`kurisa\nMusunhuri."
      },
      {
        "id": 6102,
        "title": "Stanza 2",
        "content": "Ini ndakabarwa\nMukushata;\nNeni ndarashika,\nMuchidima.\nInga wakapera,\nMwoyo weshe,\nWakauponesa\nIwe Mambo."
      },
      {
        "id": 6103,
        "title": "Stanza 3",
        "content": "Ndakagara ndiye,\nMusunhuri;\nNdinohamba naye,\nMukuenda;\nIye uri m�gore,\n\nNdinoenda;\nNdozogarisika\nNo M�sunhuri."
      }
    ]
  },
  {
    "id": 62,
    "number": 62,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Tenda Jesu ngokutenda",
    "stanzas": [
      {
        "id": 6201,
        "title": "Stanza 1",
        "content": "Tenda Jesu ngokutenda,\nTenda rudo rwaanarwo;\nIsu takapona ndiye,\nToza kwaari."
      },
      {
        "id": 6202,
        "title": "Stanza 2",
        "content": "Ndiyo ngazi wakadetsa,\nZvishaishi zvakaduswa;\nTichahamba, wati�mesa,\nTimukirise."
      },
      {
        "id": 6203,
        "title": "Stanza 3",
        "content": "Nomusango watikweya,\nNdiyo mana watidetsa,\nNomunjira yeshe yake\nEmba zvake."
      },
      {
        "id": 6204,
        "title": "Stanza 4",
        "content": "Uyu mambo tamuona,\nWagumeyo kwe�ri iyo;\nTenda ndiwo mweya wedu\nBaba Mambo."
      },
      {
        "id": 6205,
        "title": "Stanza 5",
        "content": "Tenda Jesu ngokutenda,\nTenda rudo rwaanarwo,\nTenda takapona ndirwo,\nToza kwaari."
      }
    ]
  },
  {
    "id": 63,
    "number": 63,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mukurisenyi Mwari",
    "stanzas": [
      {
        "id": 6301,
        "title": "Stanza 1",
        "content": "Mukurisenyi Mwari,\nImwi vari mudenga;\nNemwiwo mukudzenyi,\nVari munyika muno."
      },
      {
        "id": 6302,
        "title": "Stanza 2",
        "content": "Imwimwi vanhu vake,\nMukurisenyi mwari,\nNemwiwo vouMambo,\nMukurisenyi mweshe."
      },
      {
        "id": 6303,
        "title": "Stanza 3",
        "content": "Neiro zuva rake\nRinojekisa zveshe;\nNadzo nyeredzi dzeshe\nNgadzimuirikidze'"
      },
      {
        "id": 6304,
        "title": "Stanza 4",
        "content": "Imwimwi varumbgwana,\nMukurisenyi mweshe;\nNemwiwo vasikana,\nMukurisenyi aye"
      },
      {
        "id": 6305,
        "title": "Stanza 5",
        "content": "Imwimwi madziMambo,\nMukurisenyi Mwari;\nNemwiwo vanhu veshe,\nMukurisenyi aye."
      }
    ]
  },
  {
    "id": 64,
    "number": 64,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kugonda kwangu",
    "stanzas": [
      {
        "id": 6401,
        "title": "Stanza 1",
        "content": "Kugonda kwangu kunogara\nPane ngazi yake,\nAndingagondi zvino\nUnhanhi asi Jesu"
      },
      {
        "id": 6402,
        "title": "Khorasi",
        "content": "PaJesu Kristu,\nBuwe rangu,\nNdinoema zvino\nNamhera nekare."
      },
      {
        "id": 6403,
        "title": "Stanza 2",
        "content": "Kugonda kwangu kwakagwinya,\nNdozoona ndambi;\nNazveshe zvinopera\nNdinozogonda Jesu."
      },
      {
        "id": 6404,
        "title": "Stanza 3",
        "content": "Apo ouya Mambo Jesu,\n\nNgandigwinye kwaari;\nMukurarama kwake\nNdinozoema naye."
      }
    ]
  },
  {
    "id": 65,
    "number": 65,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kujeka kuri mumwoyo",
    "stanzas": [
      {
        "id": 6501,
        "title": "Stanza 1",
        "content": "Kujeka kuri mumwoyo,\nKunongaikira;\nNdiye Jesu unojeka,\nUri kujeka."
      },
      {
        "id": 6502,
        "title": "Khorasi",
        "content": "Kunojeka, kunojeka,\nKwoguma kunyarara;\nNdozoona hope yake Jesu,\nKunojeka mumwoyo."
      },
      {
        "id": 6503,
        "title": "Stanza 2",
        "content": "Kujeka kuri mumwoyo,\nKunomuembera.\nNdiye Jesu unotizwa\nKuemba kwedu."
      },
      {
        "id": 6504,
        "title": "Stanza 3",
        "content": "Kufara kuri mumwoyo,\nJesu wokwedzera.\nNdinobonga kufumiswa\nNorudo rwake"
      }
    ]
  },
  {
    "id": 66,
    "number": 66,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Uyai vatendi vanomuda",
    "stanzas": [
      {
        "id": 6601,
        "title": "Stanza 1",
        "content": "Uyai vatendi vanomuda\nMwari,\nMupenye mum�khumbi\nMwaakaata,\nMwana waMwari,\nMambo wokupona,\nUyai timukudze Jesu."
      },
      {
        "id": 6602,
        "title": "Stanza 2",
        "content": "Wakabva mudenga,\nWakadzipfaisa\n\nWakaza munyika kuponesa;\nWakatifira tiri vakashata,\nUyai timukudze Jesu."
      },
      {
        "id": 6603,
        "title": "Stanza 3",
        "content": "Budanyi ngirosi,\nMumukudze nemwi\nNe�sisu tiembe, tidakare;\nMambo wenyasha,\nMambo wokupona,\nUyai timukudze Jesu"
      },
      {
        "id": 6604,
        "title": "Stanza 4",
        "content": "Ngavazwe, mudenga\nKukuriswa kwake;\nNenzira raJesu ripfairwe;\nVanhu vadaire,\nVechiremeredza,\nUyai timukudze Jesu"
      }
    ]
  },
  {
    "id": 67,
    "number": 67,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kune nyika inodakadza",
    "stanzas": [
      {
        "id": 6701,
        "title": "Stanza 1",
        "content": "Kune nyika inodakadza,\nNgokugonda tinoiona,\nMuponesi wakakwireyo\nKunasira ugaro hwedu."
      },
      {
        "id": 6702,
        "title": "Khorasi",
        "content": "Tinozoonana,\nKune ngome dzedu\nmudenga,\nTinozoonana\nKune ngome dzedu\nmudenga."
      },
      {
        "id": 6703,
        "title": "Stanza 2",
        "content": "Kunoembwa ngokudakara\nNdwiyo dzavo dzevanopona,\nNokusvipo mwoyo\nAkuna kumigano yenyika yavo."
      },
      {
        "id": 6704,
        "title": "Stanza 3",
        "content": "Tinobonga mururi wedu,\nUwo wakatikoka isu,\n\nWakatuma M�ponesi wedu,\nUwo wakatidakadzisa."
      }
    ]
  },
  {
    "id": 68,
    "number": 68,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndinodakara ndiMwari mudenga",
    "stanzas": [
      {
        "id": 6801,
        "title": "Stanza 1",
        "content": "Ndinodakara ndimwari\nmudenga,\nBhaibheri rinoronzera\nngerudo,\nZviro zvinotishamisa tadzidza\nChiro chikuru unondida."
      },
      {
        "id": 6802,
        "title": "Khorasi",
        "content": "Ndinodakara Jesu wandida,\nJesu wandida, Jesu wandida,\nNdinodakara, Jesu wandida,\nJesu wandidawo."
      },
      {
        "id": 6803,
        "title": "Stanza 2",
        "content": "Dai ndomusia ndechimuriarwa\nAye wondida kunyazi ngepari,\nKwaari ndozopetuka,\nNdatenda ndakarakadza, unondida."
      },
      {
        "id": 6804,
        "title": "Stanza 3",
        "content": "Kwega ndoemba ndiJesu,\nM�ponesi,\nNgokumuona mukunaka kwake,\nKuemba kwangu kukudza\nM�ponesi,\nNdinoshamiswa, unondida."
      }
    ]
  },
  {
    "id": 69,
    "number": 69,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Izwai vanhu veshe",
    "stanzas": [
      {
        "id": 6901,
        "title": "Stanza 1",
        "content": "Inzwai vanhu veshe,\nMuzie Mwari wenyu;\nMishando yake yeshe\nInom�onisa,\nNemvura inonaya,\nNezviyo zvinomera,\nRobuda zuva naro\nRitijekise."
      },
      {
        "id": 6902,
        "title": "Stanza 2",
        "content": "Izvizvi zvinoronza,\nKuvanhu veshe veshe,\nUriyo Mwari wazvo\nWakazvisika;\nRuandhle rwake\nNarwo nomwedzi nenyeredzi,\nNenyama yeshe yeshe\nInom�onis."
      },
      {
        "id": 6903,
        "title": "Stanza 3",
        "content": "Tinodya kudya kwake,\nTifuke nguwe nadzo,\nTimire nyika yake\nTinomwa mvura,\nTapuwa izvi zveshe\nNdiMambo Mwari wedu;\nNgatimukurise hino,\nTiite vake."
      }
    ]
  },
  {
    "id": 70,
    "number": 70,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mambo, tifumise zvino",
    "stanzas": [
      {
        "id": 7001,
        "title": "Stanza 1",
        "content": "Mambo, tifumise zvino,\nTipe kunyarara;\nNgatiedze kuonisa\nRudo rwake Jesu.\nTifumise,tizarise,\nTechihamba muno."
      },
      {
        "id": 7002,
        "title": "Stanza 2",
        "content": "Tinotenda Mwari wedu,\nMazwi adakadza;\nMumimwoyo nokupona\nTimutende Jesu,\nTigondeke, techibonga,\nTionise rudo."
      },
      {
        "id": 7003,
        "title": "Stanza 3",
        "content": "Apo kufa kwadainza\nTisatyiswa ndiko;\nTikakare ngokutenda\nKuzogara naye,\nTiembere, timkurrise Jesu,\n\nMambo wedu."
      }
    ]
  },
  {
    "id": 71,
    "number": 71,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndidetse ndichene",
    "stanzas": [
      {
        "id": 7101,
        "title": "Stanza 1",
        "content": "Ndidetse dichene\nReketa naMwari.\nTigare naye; ndidzidzise\nShamwari dzaJesu ndoiyana\nNdidetsere vanhu vasikamuzii."
      },
      {
        "id": 7102,
        "title": "Stanza 2",
        "content": "Ndidetse, ndichene\nNyika inopinda\nTiite inopinda tiite nguva,\nTikumbire ndechimuringira,\nNdimutodze\nVanhu vamuona Mambo\nJesu."
      },
      {
        "id": 7103,
        "title": "Stanza 3",
        "content": "Ndidetse, ndichene\nAite mukweyi\nUsatungamira Jesu Mambo\nWechitambudzika,\nmuringire\nTeera Mponesi, timugonde."
      }
    ]
  },
  {
    "id": 72,
    "number": 72,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mambo ndidzo nyasha dzako",
    "stanzas": [
      {
        "id": 7201,
        "title": "Stanza 1",
        "content": "Mambo ndidzo nyasha dzako,\nOna mwoyo wangu;\nNdinotura pasi pako\nKushaisha kwangu"
      },
      {
        "id": 7202,
        "title": "Stanza 2",
        "content": "Baba, inga ndarashika,\nNdariarwa kwako;\nNgokushata inga ndafa,\nDusa ngezwi rako."
      },
      {
        "id": 7203,
        "title": "Stanza 3",
        "content": "Iwe une nyasha dzeshe,\n\nIwe wandionga;\nNdakaramba wandipota,\nDusa kushaisha."
      },
      {
        "id": 7204,
        "title": "Stanza 4",
        "content": "Ndinomuziya Muponesi,\nMuponesi wangu;\nNdakaremba, undidetse,\nDusa kushaisha."
      }
    ]
  },
  {
    "id": 73,
    "number": 73,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndichenese Mambo",
    "stanzas": [
      {
        "id": 7301,
        "title": "Stanza 1",
        "content": "Ndichenese, Mambo,\nNdiringire kwori\nNyara dzangu dzishandire\nMukukuda iwe wega\nMukukuda kwedu."
      },
      {
        "id": 7302,
        "title": "Stanza 2",
        "content": "Dzihambise tsoka,\nDzishandire iwe.\nIzwi rangu riembere\nIwe wega, Mambo wangu,\nIwe wega Mambo."
      },
      {
        "id": 7303,
        "title": "Stanza 3",
        "content": "Nomuromo wangu uzariswe ndiwe.\nTora pfumi hweshe hwangu,\nAndikoni kumunyima,\nAndikoni kumnyima."
      },
      {
        "id": 7304,
        "title": "Stanza 4",
        "content": "Tora nguva yangu,\nNdikuirikidze.\nUshandise simba rangu,\nSimba reshe, rounoda,\nSimba reshe rangu."
      },
      {
        "id": 7305,
        "title": "Stanza 5",
        "content": "Kuda kwangu Mambo\nNgakuite kwako.\nUchenese mwoyo wangu,\nNgauite mhatso yako.\nNgauite yako."
      },
      {
        "id": 7306,
        "title": "Stanza 6",
        "content": "Rudo rwangu,Mambo,\nndinohina kwori.\nUnditore, ndishandire,\nZveshe zvangu zvounoda,\nZveshe zvangu ngezvako."
      }
    ]
  },
  {
    "id": 74,
    "number": 74,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndine zvishaishi ini",
    "stanzas": [
      {
        "id": 7401,
        "title": "Stanza 1",
        "content": "Ndine zvishaishi ini,\nZvinonditambudza;\nNdinopenya musunhuri\nKusunhura mweya:"
      },
      {
        "id": 7402,
        "title": "Khorasi",
        "content": "Iwe Jesu! Iwe Jesu!\nUri Mdetsi wangu,\nIwe Jesu! Iwe Jesu!\nUri Mdetsi wangu"
      },
      {
        "id": 7403,
        "title": "Stanza 2",
        "content": "Wakandida, ndakashata,\nWakafira ini;\nJesu unondiripira,\nUponeswe mweya."
      },
      {
        "id": 7404,
        "title": "Stanza 3",
        "content": "Andina kupona ini,\nUnozofa mweya;\nTuma munasiri wako,\nAnasire mweya."
      },
      {
        "id": 7405,
        "title": "Stanza 4",
        "content": "Ndakasia njira yako,\nNdikweere, Mambo;\nIzwi rako ngaribate\nRiumuse mweya."
      },
      {
        "id": 7406,
        "title": "Stanza 5",
        "content": "Ndinozofa zvinopano,\nMweya wangu wotya;\nGara neni, ini newe\nApo pendinofa."
      }
    ]
  },
  {
    "id": 75,
    "number": 75,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Uya, Mwari wedu",
    "stanzas": [
      {
        "id": 7501,
        "title": "Stanza 1",
        "content": "Uya, Mwari wedu,\nUri simba redu,\nUtidetse.\nBaba vokujeka\nIwe unonyisa,\nIwe unodetsa,\nTiringire."
      },
      {
        "id": 7502,
        "title": "Stanza 2",
        "content": "Jesu M`tongi wedu,\nNyisa gaa redu,\nIwe wega;\nUnza simba rako,\nUtidetse teshe;\nAyo mwoyo yedu\nIkugonde."
      },
      {
        "id": 7503,
        "title": "Stanza 3",
        "content": "Mweya wakachena uya\nUtikweye,tiumise.\nUtisukisise\nayo mwoyo yedu;\nGara nesu teshe,\nTinasire."
      },
      {
        "id": 7504,
        "title": "Stanza 4",
        "content": "Mwari, iwe wega\nNdiJehovha wedu,\nNgaatendwe;\nTinoenda kwa`ri\nKuzogara naye\nMuuMambo hwake\nHwomudenga."
      }
    ]
  },
  {
    "id": 76,
    "number": 76,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Rabira zuva, gara neni",
    "stanzas": [
      {
        "id": 7601,
        "title": "Stanza 1",
        "content": "Rabira zuva,gara neni,\nChidima zvino chinosvika\nNdinokupota, ndidetsere,\n\nMudetsi wangu, gara neni."
      },
      {
        "id": 7602,
        "title": "Stanza 2",
        "content": "Ndinokutsvaka nguva dezshe,\nNenyasha dzako\nNdandinyisa;\nKuzia kwako kwandikweya,\nMudima iri, gara neni."
      },
      {
        "id": 7603,
        "title": "Stanza 3",
        "content": "Ndinokupona kwo`ri pano,\nUrombo andina akadi\nNokufa andichazokutyi,\nNdonyisa ndiwe, gara neni."
      },
      {
        "id": 7604,
        "title": "Stanza 4",
        "content": "Undionise, iwe Mambo,\nUndijekise ngezwi rako;\nKujeka uku kunodetsa\nM`ponesi wangu, gara neni."
      }
    ]
  },
  {
    "id": 77,
    "number": 77,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kuremadzwa ngendaa dzangu",
    "stanzas": [
      {
        "id": 7701,
        "title": "Stanza 1",
        "content": "Kuremadzwa ngendaa dzangu,\nJesu wakaremadzirwa inini,\nNdinosunhurwa mumwoyo mwangu,\nNgokuti Jesu wakaremadzwa."
      },
      {
        "id": 7702,
        "title": "Stanza 2",
        "content": "Wakafira kushaisha,\nJesu wakafa kuti ndipone;\nAndichazofi ngomweya wangu,\nNgokuti Jesu wakandifira."
      },
      {
        "id": 7703,
        "title": "Stanza 3",
        "content": "Wakamuka, wakamuka,\nJesu wakamukira inini,\nNeni ndinomuka muiba,\nNgokuti Jesu unondimusa."
      },
      {
        "id": 7704,
        "title": "Stanza 4",
        "content": "Unouya, unouya,\nJesu unouyire ini,\nTinoonana mugore isu,\n\nNgokuti Jesu unozouya."
      }
    ]
  },
  {
    "id": 78,
    "number": 78,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jesu, Mambo wedu",
    "stanzas": [
      {
        "id": 7801,
        "title": "Stanza 1",
        "content": "Jesu, Mambo, wedu,\nGara nesu teshe;\nTiashire izwi rako (2)\nNgemimwoyo yedu."
      },
      {
        "id": 7802,
        "title": "Stanza 2",
        "content": "Gara nesu teshe,\nTirigwinyise;\nNgwarisira mwoyo yedu (2)\nIsu tiridise.'"
      },
      {
        "id": 7803,
        "title": "Stanza 3",
        "content": "Variyo vazhinji,\nVari muchidima;\nRinosvika izwi rako (2)\nRinovajekisa."
      },
      {
        "id": 7804,
        "title": "Stanza 4",
        "content": "Wakaema kare.\nVanokukurisa;\nAvo kare vairamba, (2)\nZvino vanotenda."
      },
      {
        "id": 7805,
        "title": "Stanza 5",
        "content": "Jesu Mwari wedu,\nGara nesu teshe,\nTijekise ngomukati, (2)\nNgokujeka kwako.'"
      }
    ]
  },
  {
    "id": 79,
    "number": 79,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kushai mangwanani mbeu dzakanaka",
    "stanzas": [
      {
        "id": 7901,
        "title": "Stanza 1",
        "content": "Kushai mangwanani mbeu\ndzakanaka;\nKushai masikati emadeiko,\nZuva rokucheka rinozokasira,\nTinozodakara apo tovhuna."
      },
      {
        "id": 7902,
        "title": "Khorasi",
        "content": "Dakaranyi zvino\nKushai mbeu dzake\nDzinozomeriswa mumwoyo yavo.\nDzinodakadzisa\nmwoyo yevazhinji.\nMazwi okupona\nngatiakushe."
      },
      {
        "id": 7903,
        "title": "Stanza 2",
        "content": "Kushai mbeu dzake\nmukutambudzika,\nKushai apo mweya inoremba,\nKushai apo mwoyo inopera simba,\nTinozozorora kanyi kwedu."
      },
      {
        "id": 7904,
        "title": "Stanza 3",
        "content": "Kushai ngokuchema, kushai\nngemasodzi,\nAnodiridzira mbeu dzake.\nTinozozorora, tinozodakara,\nTozouya navo vakatenda."
      }
    ]
  },
  {
    "id": 80,
    "number": 80,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mwari wakatigondisa",
    "stanzas": [
      {
        "id": 8001,
        "title": "Stanza 1",
        "content": "Mwari wakatigondisa,\nUnozopingura;\nUnozorwa nguva dzeshe\nTechizokumbira."
      },
      {
        "id": 8002,
        "title": "Khorasi",
        "content": "Unozozwa, unozopingura.\nUnozozwa, unozopingura;\nKumbirai ngokutenda\nUnozopingura."
      },
      {
        "id": 8003,
        "title": "Stanza 2",
        "content": "Aarambi rufumiso,\nUnozopa kwouri;\nMwari unozopingura\nVanozokumbira."
      },
      {
        "id": 8004,
        "title": "Stanza 3",
        "content": "Ungakuzwa kuumbira,\nKweshe nokudoko;\n\nKuna Mwari kumbirai,\nUnozopingura."
      },
      {
        "id": 8005,
        "title": "Stanza 4",
        "content": "Enda kwa`ri namazano\nNguva dzeshe Mwari.\nUnozopingura veshe,\nMikumbiro yeshe"
      }
    ]
  },
  {
    "id": 81,
    "number": 81,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mukumbiro waMambo",
    "stanzas": [
      {
        "id": 8101,
        "title": "Stanza 1",
        "content": "Baba edu ari kudenga, ngariremekedzwe zina renyu; Umambo hwenyu ngahuuye; Kuda\nkwenyu ngakuitwe munyika, kudai ngekudenga; Tipeiwo nyamushi kudya kwedu,\nkunotamika nyamashi. Tirekererei ndaa dzedu kudai tisu tinorekerera avo vane ndaa\nkwatiri; Musatipinza mukuedzwa, asi tinunurei kuno uwo wakashata; Ngokuti ngohwenyu\numambo, nesimba neutende kunoti mhera nekare. Amen"
      }
    ]
  },
  {
    "id": 82,
    "number": 82,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Zuva rinobira",
    "stanzas": [
      {
        "id": 8201,
        "title": "Stanza 1",
        "content": "Zuva rinobira,\nZvino hwausiku,\nNamabvute zvino\nAnodzaka."
      },
      {
        "id": 8202,
        "title": "Stanza 2",
        "content": "Jesu ngaandipe\nHope dzakanaka,\nNdingwarire zvino\nNdatswatira."
      },
      {
        "id": 8203,
        "title": "Stanza 3",
        "content": "Muusiku hweshe\nNgengirosi dzize\nNgamapapirozve\nDzindisite."
      },
      {
        "id": 8204,
        "title": "Stanza 4",
        "content": "Apo mangwanani,\nNgandimuke neni\nNdisinazve ndaa,\nKwo`ri Mambo."
      }
    ]
  },
  {
    "id": 83,
    "number": 83,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mwakaremba mwakapera simba",
    "stanzas": [
      {
        "id": 8301,
        "title": "Stanza 1",
        "content": "Mwakaremba mwakapera simba,\nRonzera Jesu, ronzera Jesu\nKudakara kwako kwapera,\nRonzera Jesu hai!'"
      },
      {
        "id": 8302,
        "title": "Khorasi",
        "content": "Ronzera Jesu, ronzera Jesu,\nHama ine nyasha.\nMwechido kupuwa simba ndiye,\nRonzera Mambo hai."
      },
      {
        "id": 8303,
        "title": "Stanza 2",
        "content": "Munochema apo musikadi\nRonzera Jesu,\nRonzera Jesu mune zvishaishi zvakafishwa,\nRinzera Jesu hai!"
      },
      {
        "id": 8304,
        "title": "Stanza 3",
        "content": "Musatya Madambudziko enyu,\nRonzera Jesu\nMunoritya zuva ramangwani\nRonzera Jesu hai!"
      },
      {
        "id": 8305,
        "title": "Stanza 4",
        "content": "Munotambudzikawo ngokufa\nRonzera Jesu,\nRonzera Jesu\nMunorinda Jesu echiuya\nRonzera Jesu hai!"
      },
      {
        "id": 8306,
        "title": "Stanza 5",
        "content": "Hama dzenyu dzakaenda m`denga,\nRonzera Jesu, ronzera Jesu\nMwakasara muri mwega muno,\nRonzera Jesu hai!"
      }
    ]
  },
  {
    "id": 84,
    "number": 84,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jesu atonge nyika dzeshe",
    "stanzas": [
      {
        "id": 8401,
        "title": "Stanza 1",
        "content": "Jesu atonge nyika dzeshe\nKeweshe kwerinohamba zuva.\nUMambo hwako hunozokura\n\nPeshe pounojeka mwedzi."
      },
      {
        "id": 8402,
        "title": "Stanza 2",
        "content": "Kwaari ngatikumbire teshe,\nTechimuirikidza yaemho,\nNezina rake rakadai ngohwema\nRiremeredzwe ngokudira."
      },
      {
        "id": 8403,
        "title": "Stanza 3",
        "content": "Vanhu namadzimambo eshe\nVanozoronza rudo rwake,\nNavana veshe vanozoemba\nZina raJesu, mu`shi wavo."
      },
      {
        "id": 8404,
        "title": "Stanza 4",
        "content": "Nyasha nesimba zviri kwaari,\nNehloko dzeshe dzasunhurwa,\nUnozorodza avo vakremba,\nNavo vatami vafumiswe."
      }
    ]
  },
  {
    "id": 85,
    "number": 85,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Wechita izwi rako",
    "stanzas": [
      {
        "id": 8501,
        "title": "Stanza 1",
        "content": "Wechita izwi rako,\nMambo Mwari wamashwiro,\nNyika yeshe vana veshe\nNgavaone kuponeswa."
      },
      {
        "id": 8502,
        "title": "Stanza 2",
        "content": "Mabvi ashe amadzinza\nAgwadame kwo`ri Jesu\nNemiromo yeshe nayo."
      },
      {
        "id": 8503,
        "title": "Stanza 3",
        "content": "Uya, uya Mambo Jesu\nTidakadzwe teshe ndiwe\nKutambudzwa ngakupere\nNyika yeshe icheneswe."
      },
      {
        "id": 8504,
        "title": "Stanza 4",
        "content": "Penya hama dzedu dzeshe,\nUdzitenderudze kwori\nDzisaona ushungu hwako,\nKani dzinoponeswa ndiwe."
      },
      {
        "id": 8505,
        "title": "Stanza 5",
        "content": "Ronza, Mambo, atirambi\nMazwi amashwiro ako,\nTizarise, mwoyo yedu,\nNdokunaka kwese kwako."
      }
    ]
  },
  {
    "id": 86,
    "number": 86,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Tiri pamberi pako",
    "stanzas": [
      {
        "id": 8601,
        "title": "Stanza 1",
        "content": "Tiri pamberi pako,\nJehovha mukuru,\nKutsvake nyasha dzako,\nNgokudira kwedu,\nTinonzwa nokuchema\nKwavarashika,\n\nKuti vaponeswe."
      },
      {
        "id": 8602,
        "title": "Stanza 2",
        "content": "Nenyika dzakawanda,\nDziri muchidima,\nDzahamba njira dzadzo\nNgokutenda m`kufa,\nItira nyasha dzako,\nUdzipe izwi,\nDziduse muchidima\nNgokujeka kwako."
      },
      {
        "id": 8603,
        "title": "Stanza 3",
        "content": "Ngaikasire nguva\nYaJesu M`ponesi,\nNaapo vanhu veshe\nVade izwi rako.\nVazie naJehovha,\nMusiki wavo,\nVamude Jesu Kristu,\nMuponesi wavo.'"
      }
    ]
  },
  {
    "id": 87,
    "number": 87,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Baba ,ona nyika yedu",
    "stanzas": [
      {
        "id": 8701,
        "title": "Stanza 1",
        "content": "Baba ona nyika yedu,\nInogara muchidima,\nAizii izwi rako,\n\nInogara muchidima."
      },
      {
        "id": 8702,
        "title": "Stanza 2",
        "content": "Mambo, inodziuraya\nNgokuita zvakashata,\nAizii izwi rako\nIri izwi rokupona."
      },
      {
        "id": 8703,
        "title": "Stanza 3",
        "content": "Vanhu vayo veshe, veshe,\nVanofira muchidima,\nAvazii njira iyi,\nIyi njira yokupona."
      },
      {
        "id": 8704,
        "title": "Stanza 4",
        "content": "Tuma vadzidzisi vako,\nVadzidzise nyika yedu,\nVanhu vayo vakuzie\nMambo Jesu, Muponesi."
      },
      {
        "id": 8705,
        "title": "Stanza 5",
        "content": "Zveshe tinozvikumbira\nKwouri Mambo, Jesu Kristu,\nKuda kwako ngakuitwe,\nVanhu veshe vaponeswe."
      }
    ]
  },
  {
    "id": 88,
    "number": 88,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Zvondakadai ndoza",
    "stanzas": [
      {
        "id": 8801,
        "title": "Stanza 1",
        "content": "Zvandakadai ndoza,\nWakandifira iwe,\nNgokuti unondida,\nNdinoza kwo`ri Jesu."
      },
      {
        "id": 8802,
        "title": "Stanza 2",
        "content": "Zvondakadai ini\nNdinokushata kweshe\nNdinoza kuzosukwa,\nNdinoza kwo`ri, Jesu."
      },
      {
        "id": 8803,
        "title": "Stanza 3",
        "content": "Zvanadakadai\nNdoza andingadzichenesi,\nNdingaponeswa ndiwe,\nNdonoza kwo`ri Jesu."
      },
      {
        "id": 8804,
        "title": "Stanza 4",
        "content": "Zvanadakadai ini\nNdiri murombo uno\nNdinozoona zveshe,\nNdinoza kwo`ri, Jesu."
      },
      {
        "id": 8805,
        "title": "Stanza 5",
        "content": "Zvanadakadai ini,\nNdikungurire iwe\nNgokuti ndinotenda,\nNdinoza kwo`ri Jesu."
      },
      {
        "id": 8806,
        "title": "Stanza 6",
        "content": "Zvanadakadai ini,\nKurimwo kurwa m`woyo,\nKunyararise, Mambo,\nNdinoza kwo`ri Jesu."
      },
      {
        "id": 8807,
        "title": "Stanza 7",
        "content": "Zvanadakadai rudo\nRwazozvinyisa zveshe,\nNdaita wako, Mambo,\nNdinoza kwo`ri Jesu."
      }
    ]
  },
  {
    "id": 89,
    "number": 89,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mwari Baba ndarashika",
    "stanzas": [
      {
        "id": 8901,
        "title": "Stanza 1",
        "content": "Mwari baba ndarashika,\nGara neni zvinopano;\nNdidzidzise iwe Baba\nNyasha dzako."
      },
      {
        "id": 8902,
        "title": "Stanza 2",
        "content": "Mushumweni ndozofirwa,\nHama dzangu dzangu dzinodika;\nNgandigonde iwe wega\nNyasha dzako."
      },
      {
        "id": 8903,
        "title": "Stanza 3",
        "content": "Mushumweni ndarekera,\nZvikurutu zvakanaka;\nNdandigonde iwe, Baba,\nNyasha dzako."
      },
      {
        "id": 8904,
        "title": "Stanza 4",
        "content": "Ndiponese, Mambo wangu;\nNdipe ini Mwenya wako,\nUzogara neni pano,\nNyasha dzako."
      },
      {
        "id": 8905,
        "title": "Stanza 5",
        "content": "Garisika Mweya wangu,\nWozopuwo kudakara,\nNdiye Mwari Baba ako;\nNyasha dzako"
      },
      {
        "id": 8906,
        "title": "Stanza 6",
        "content": "Munyikeyi undidetse,\nNemisodzi nom`kumbiro.\nNgazvizwike ndiwe, Baba,\nNyasha dzako."
      }
    ]
  },
  {
    "id": 90,
    "number": 90,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jekesa nyika dzeshe",
    "stanzas": [
      {
        "id": 9001,
        "title": "Stanza 1",
        "content": "Jekesa nyika dzeshe;\nKujekiswe vanhu.\nAuna kusvipiswa\nMuchidima chedu,\nInga usikaoni,\nZvino unozwika.\nUnokujeka kweshe,\nAuna kudzimwa."
      },
      {
        "id": 9002,
        "title": "Khorasi",
        "content": "Jekisa nyika dzeshe;\nKujekiswe vanhu,\nAuna kusvipiswa\nMuchidima chedu."
      },
      {
        "id": 9003,
        "title": "Stanza 2",
        "content": "Sviura namadziso,\nAvo vanhu veshe.\nNaye waiva bofu\nNgaoone kweshe.\nVasina kurarama,\nVanozofa mwoyo,\nUnovakungurira\nUnovarapazve."
      },
      {
        "id": 9004,
        "title": "Stanza 3",
        "content": "Muchene munyikomwo,\nNyika yeJudia;\nWakamuona iwe,\nJesu, Mambo wedu.\nKwouri wakabarwa\nMwana waDavida\nUnojekisa veshe\nVanote`ra iye."
      }
    ]
  },
  {
    "id": 91,
    "number": 91,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Techivatsvaka vapepesheki",
    "stanzas": [
      {
        "id": 9101,
        "title": "Stanza 1",
        "content": "Techivatsvaka vapepesheki\nTechivaonga ngenyasha,\nKuti vauye kuna M`ponesi\nUnodainza uyai."
      },
      {
        "id": 9102,
        "title": "Khorasi",
        "content": "Tinozoenda Techivatsvaka\nKuti va`shire Jesu, Jesu.\nTinovaunza kuna\n M`ponesi,\nJesu wakafira, tifira."
      },
      {
        "id": 9103,
        "title": "Stanza 2",
        "content": "Techivatsvaka vasikatendi\nTivaonise Jesu,\nKuti vatende Muripiri\nUnozovapa Mweya."
      },
      {
        "id": 9104,
        "title": "Stanza 3",
        "content": "Tinozoronza rudo rwaJesu\nTechimute`ra M`ponesi,\nTinozodetsa vanotambudzwa\nTovaonisa njira."
      }
    ]
  },
  {
    "id": 92,
    "number": 92,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kwedzedza Mwoyo wangu kwo’ri",
    "stanzas": [
      {
        "id": 9201,
        "title": "Stanza 1",
        "content": "Kwedzedza mwoyo wangu kwori,\nNdikweye, Jesu, Mudikani.\nNdigare newe, Mambo wangu,\nNdingwaririke paditi\nrako. (2)"
      },
      {
        "id": 9202,
        "title": "Stanza 2",
        "content": "Kwedzedza mwoyo wang kwori,\nChipo andina chokuhina,\nChega chomwoyo wakashata.\nNdisukisise ngengazi\nyako. (2)"
      },
      {
        "id": 9203,
        "title": "Stanza 3",
        "content": "Kwedzedza mwoyo wangu kwori,\nNdiite wako munyika muno;\nNdinorekera njira dzangu,\nNdinoda Jesu, ndiJesu\nega. (2)'"
      }
    ]
  },
  {
    "id": 93,
    "number": 93,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kune mwoyo inotama",
    "stanzas": [
      {
        "id": 9301,
        "title": "Stanza 1",
        "content": "Kune mwoyo inotama,\nNguva inopinda.\nVakaremba vanozofa,\nNguva inopinda.\nTechivadetsera\nVarimuno munyika,\nTingavadetsera,\nNguva inopinda."
      },
      {
        "id": 9302,
        "title": "Khorasi",
        "content": "Inopinda, inopinda (2)\nTichavadetsera, nguva inopinda."
      },
      {
        "id": 9303,
        "title": "Stanza 2",
        "content": "Ngatirashe godo reshe,\nNguva inopinda.\nHope ngadzinganikire\nNguva inopinda.\nVanhu vakaremba,\nVanochema veshe.\nNgatidetse vawa,\nNguva inopinda."
      },
      {
        "id": 9304,
        "title": "Stanza 3",
        "content": "Tinoisa vanhu veshe,\nNguva inopinda,\nAvo vanotida veshe,\n\nNguva inopinda,\nTechisima mbeu\nDzinokura muno,\nDzinofamba mwoyo,\nNguva inopinda."
      }
    ]
  },
  {
    "id": 94,
    "number": 94,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kumbiranyi Nguva dzeshe",
    "stanzas": [
      {
        "id": 9401,
        "title": "Stanza 1",
        "content": "Kumbiranyi nguva dzeshe,\nKwa`ri une zviro zveshe,\nAtizvipe.\nMwe`tendai nyasha dzake,\nMukumbire rudo rwake,\nMukumbire rudo rwake\nRwatamika. (2)"
      },
      {
        "id": 9402,
        "title": "Stanza 2",
        "content": "Kumbiranyi ngokugonda,\nKana musazokumbira ngezwi ega;\nKumbirenyizve ngomwoyo\nKwaJehovha, unozia, kwaJehovha, unozia,\nUri Mambo. (2)"
      },
      {
        "id": 9403,
        "title": "Stanza 3",
        "content": "Kumbiranyi ndiro zina raM`ponesi,\nMutendei, Unenyasha;\nKani isu tashaisha,\nNdiyo ngazi yake yega,\nNdiyo ngazi yake yega\nIngasuka."
      },
      {
        "id": 9404,
        "title": "Stanza 4",
        "content": "kukumbira kunosisa,\nMwe`ngwarira kakurutu,\nMweya yenyu;\nKuri kudya kwomwoyozve,\nMunoona ngokutsvaka\nMunoona ngokutsvaka\n Kuponeswa. (2)"
      }
    ]
  },
  {
    "id": 95,
    "number": 95,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jesu ndipe mwoyo mutsva",
    "stanzas": [
      {
        "id": 9501,
        "title": "Stanza 1",
        "content": "Jesu, ndipe mwoyo mutsva,\nIzwa kukumbira kwangu.\nMwoyo wokuita zveshe\nZvounoda pashi pano. (2)"
      },
      {
        "id": 9502,
        "title": "Stanza 2",
        "content": "Jesu, ndipe mwoyo mutsva,\nNdikudire, Mwari wangu,\nMwoyo wokutenda zveshe\nZvinoronzwa ngezwi rako. (2)"
      },
      {
        "id": 9503,
        "title": "Stanza 3",
        "content": "Jesu, ndipe mwoyo mutsva,\nWokupinimidza ndiwe,\nMwoyo unokarakadza\nNgamashwiro ako ega."
      },
      {
        "id": 9504,
        "title": "Stanza 4",
        "content": "Jesu, ndipe mwoyo mutsva,\nDusa uwo une buwe,\nNdipe mwoyo wakanaka\nMwoyo wakadai ngowako. (2)"
      }
    ]
  },
  {
    "id": 96,
    "number": 96,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kwo’ri, Mambo wangu",
    "stanzas": [
      {
        "id": 9601,
        "title": "Stanza 1",
        "content": "Kwo�ri Mambo wangu,\nNdinouya kwo�ri,\nMambo wangu,\nNdinotenda, Ndeiti,\nKwo�ri, Mambo wangu,\nNdize kwo�ri."
      },
      {
        "id": 9602,
        "title": "Stanza 2",
        "content": "Ndinotambudzika,\nUndikarakadze,\nMambo wangu;\nNdinochema kwo�ri,\nNdinoronza, ndeiti,\nKwo�ri Mambo wangu,\nNdize kwo�ri."
      },
      {
        "id": 9603,
        "title": "Stanza 3",
        "content": "Muchidima mwangu,\nUndiveneka, Mambo wangu;\n\nKushaisha kwangu.\nUnondiripira,\nIzwa, ndinoronza.\nMambo wangu."
      },
      {
        "id": 9604,
        "title": "Stanza 4",
        "content": "Ndinopera, ndiende,\nKwouri mudenga, Mambo wangu:\nUya und`emere\nPendinofa muno,\nNd`ende kanyi kwangu,\nMambo wangu."
      }
    ]
  },
  {
    "id": 97,
    "number": 97,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Madambudziko ndomuronzera",
    "stanzas": [
      {
        "id": 9701,
        "title": "Stanza 1",
        "content": "Madambudziko ndomuronzera,\nJesu M`ponesi wangu;\nAndidetsere ngomutwaro,\nUnoda vake yaemho."
      },
      {
        "id": 9702,
        "title": "Khorasi",
        "content": "Ndomukumbira, ndomukumbira,\nMudetsi wangu uripo.\nNdomukumbira, ndomukumbira\nMudetsi wwangu unozwa."
      },
      {
        "id": 9703,
        "title": "Stanza 2",
        "content": "Apo ndoedzwa, ndotama Jesu,\nMudetsi wangu, uya.\nNdechikumbira ndinozonyisa;\nZviedzo zvangu zvoenda."
      },
      {
        "id": 9704,
        "title": "Stanza 3",
        "content": "Zviro zvenyika zvinondikweya,\nNdinoedzwa muno;\nNdechikumbira wozondidetsa,\nJesu, Mudetsi mukuru."
      }
    ]
  },
  {
    "id": 98,
    "number": 98,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndine shamwari imwe",
    "stanzas": [
      {
        "id": 9801,
        "title": "Stanza 1",
        "content": "Ndine shamwari imwe yakagondeka,\nIsikandirekeri, ndechipukaira,\n\nNdechinyabva munjira,\nNdechipukaira,\nNdechinyabva munjira,\nNdechirashika,\nKudai ngakabwizhi\nkari m`shango."
      },
      {
        "id": 9802,
        "title": "Stanza 2",
        "content": "Unondirinda, aye,\nMazuva eshe,\nNdisawa mumurau\nWom`edzi mukuru.\nUsiku hweshe aye\nUnondirwira:\nNgokukungurira kwake\nNdisita."
      },
      {
        "id": 9803,
        "title": "Stanza 3",
        "content": "Nomweya wangu, kudza kutenda kwake,\nUteketese mbiri yaJesu, M`ponesi.\nRonzera vanhu veshe\nNgorudo rwake,\nNgokuti unovada\nVashaishi."
      },
      {
        "id": 9804,
        "title": "Stanza 4",
        "content": "Ndemene andinakwo kunaka kwake,\nNdingacheneswa ndiye, akuna umweni.\nNgengazi yake yega.\nYakarashika kugonda\nKwomugore\nKwagwinyiswa."
      }
    ]
  },
  {
    "id": 99,
    "number": 99,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jesu wauya kuBheterehema",
    "stanzas": [
      {
        "id": 9901,
        "title": "Stanza 1",
        "content": "Jesu wauya kuBheterehema,\nWakabarwa pakati pedanga,\nKunoshamisa Mambowe\nWainditsaka."
      },
      {
        "id": 9902,
        "title": "Khorasi",
        "content": "Wainditsvaka inini (2)\nKunoshamisa, Mambowe\nWainditsvaka."
      },
      {
        "id": 9903,
        "title": "Stanza 2",
        "content": "Jesu wakatiripira isu,\nWakafira padunhu reKalvari.\nKunoshamisa, Mambowe\nWaindifira."
      },
      {
        "id": 9904,
        "title": "Stanza 3",
        "content": "Jesu, M`ponesi,\nWonditsvaka\nNdechinyapepesheka\n kuretu. Kunoshamisa,\nNyashawo wandidaidza."
      },
      {
        "id": 9905,
        "title": "Stanza 4",
        "content": "Jesu, M`ponesi, ozouya,\nChigondiso chaMwari chanaka.\nKunoshamisa,\nRudowo wozonditora."
      }
    ]
  },
  {
    "id": 100,
    "number": 100,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Techihamba naMwari, mukujeka mwake",
    "stanzas": [
      {
        "id": 10001,
        "title": "Stanza 1",
        "content": "Techihamba naMwari,\nMukujeka mwake,\nJesu unotidakadzisa;\nUnogara nesu, apotinoita\nZvaanoda munyika muno."
      },
      {
        "id": 10002,
        "title": "Khorasi",
        "content": "Ngatigonde\nTechipurutana,\nTechikudza M`ponesi,\nNgokugonda kwa`ri.'"
      },
      {
        "id": 10003,
        "title": "Stanza 2",
        "content": "Akuchina mitwaro inotidzimbira\nYaasikatidetsi ndiyo.\nTechisvipo mwoyo,\nUnoembedzera avo\nVanomupurutana."
      },
      {
        "id": 10004,
        "title": "Stanza 3",
        "content": "Atimbotongozii kudakara kwake\nMetsa tinomuhina zveshe;\n\nJesu unodisa kuvadakadzisa\nZvo vanomupurutana."
      }
    ]
  },
  {
    "id": 101,
    "number": 101,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jesu uri M’ushi wangu",
    "stanzas": [
      {
        "id": 10101,
        "title": "Stanza 1",
        "content": "Jesu uri m�ushi wangu,\nUnondingwarira;\nAnditongotami chiro,\nUnondipa zveshe."
      },
      {
        "id": 10102,
        "title": "Stanza 2",
        "content": "Unozonditungamira,\nNdinozomuteera;\nTsani yangu yatipenyu\nInondikwanisa"
      },
      {
        "id": 10103,
        "title": "Stanza 3",
        "content": "Dai ndechienda kofa,\nAndityiswi ini;\nNdonga nemutaza wake\nZvinondigwinyisa."
      },
      {
        "id": 10104,
        "title": "Stanza 4",
        "content": "Nyasha nokunaka kwake\nNdinoona pano;\nNdinogara m�zuva eshe\nKanyi mudengomwo"
      }
    ]
  },
  {
    "id": 102,
    "number": 102,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kudai ndingaona",
    "stanzas": [
      {
        "id": 10201,
        "title": "Stanza 1",
        "content": "Kudai ndingaona\nM�ponesi uri Mambo,\nNdione hope yake,\nNdibate nyara yake."
      },
      {
        "id": 10202,
        "title": "Stanza 2",
        "content": "Kudai ndingarasha\nZvinotondirambidza,\nKute�ra sure kwake,\nNdihambe njira yake."
      },
      {
        "id": 10203,
        "title": "Stanza 3",
        "content": "Kudai ndingagwinya,\nKuedzwa kwangu kweshe,\nKudai ndinganyisa\nKushata kwese,kwese."
      },
      {
        "id": 10204,
        "title": "Stanza 4",
        "content": "Kudai hama yangu\nUngamutenda newe;\nKudai ungauya,\nAsati akurasa."
      },
      {
        "id": 10205,
        "title": "Stanza 5",
        "content": "E,Mambo, Jesu Kristu,\nUnodikana iwe,\nTinoda kuponeswa,\nTinochema kwo�ri."
      }
    ]
  },
  {
    "id": 103,
    "number": 103,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mambo Jesu une simba",
    "stanzas": [
      {
        "id": 10301,
        "title": "Stanza 1",
        "content": "Mambo Jesu une simba\nRokutiponesa.\nHama dzangu ngatimude\nMwanawo waMwari (2)"
      },
      {
        "id": 10302,
        "title": "Stanza 2",
        "content": "Ndiye eya une nyasha\nDzokukungurira;\nVanotenda kuponeswa,\nNdiye Mambo Jesu.(2)"
      },
      {
        "id": 10303,
        "title": "Stanza 3",
        "content": "Mambo ita izwi rako\nRiponese teshe;\nIsu vanhu vakashata,\nTiponeswe ndiro.(2)"
      },
      {
        "id": 10304,
        "title": "Stanza 4",
        "content": "Ngatitende izwi rako,\nTiridzidze teshe;\nKuda kwako tikuite,\nJesu Mambo wedu.(2)"
      }
    ]
  },
  {
    "id": 104,
    "number": 104,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndashamba nyara dzangu",
    "stanzas": [
      {
        "id": 10401,
        "title": "Stanza 1",
        "content": "Ndashamba nyara\nDzangu kuchena kuti mbe,\nNdadzipa kuna Jesu,\nKumushandira."
      },
      {
        "id": 10402,
        "title": "Khorasi",
        "content": "Tsoka dzakatsonga\nChingwarira.\nNdiitire Jesu\nZvega zvake."
      },
      {
        "id": 10403,
        "title": "Stanza 2",
        "content": "Ndapanga nzee dzangu\nKupurutana\nNgezveshe zvingaitwa\nNgenyara doko."
      },
      {
        "id": 10404,
        "title": "Stanza 3",
        "content": "Madziso anoona kuita kwangu,\nKuti ndisapauka\nMunjira yake."
      }
    ]
  },
  {
    "id": 105,
    "number": 105,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kuzoti apo ndega",
    "stanzas": [
      {
        "id": 10501,
        "title": "Stanza 1",
        "content": "Kuzoti apo ndega,\nNdokuringira,\nNokuti ndinokutya,\nNdokuchemera.(2)"
      },
      {
        "id": 10502,
        "title": "Stanza 2",
        "content": "Apo vakoma vangu\nNaBaba angu\nVanoti ndiri benzi,\nNdicherechedze.(2)"
      },
      {
        "id": 10503,
        "title": "Stanza 3",
        "content": "Na�apo muiri\nWangu unokurwara,\nNdokuronzera Jesu,\nUnondiponesa.(2)"
      },
      {
        "id": 10504,
        "title": "Stanza 4",
        "content": "Na�po Sathani\nAye unondiedza,\nNdodzidza manzwi ako,\nNdim�nyise ndiwo.(2)"
      }
    ]
  },
  {
    "id": 106,
    "number": 106,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ngezvashe zvandakaitirwa",
    "stanzas": [
      {
        "id": 10601,
        "title": "Stanza 1",
        "content": "Ngezveshe zvandakaitirwa\nAndizoreki kumuda;\nNgenyasha dzandakaitirwa,\nAndizoreki kumuda."
      },
      {
        "id": 10602,
        "title": "Khorasi",
        "content": "Andizoreki kumuda,\nMuponesi, Muponesi,\nAndizoreki kumuda,\nWandida yaemho."
      },
      {
        "id": 10603,
        "title": "Stanza 2",
        "content": "Wondipa simba m�zuva eshe,\nAndizoreki kumuda;\nUnondikweya njira yeshe,\nAndizoreki kumuda."
      },
      {
        "id": 10604,
        "title": "Stanza 3",
        "content": "Kunyazi veshe vamusia,\nAndizoreki kumuda,\nAndingakoni kumuramba;\nAndizoreki kumuda."
      },
      {
        "id": 10605,
        "title": "Stanza 4",
        "content": "Wondiponesa m�zuva eshe,\nAndizoreki kumuda;\nNazvino unondichenesa,\nAndizoreki kumuda."
      },
      {
        "id": 10606,
        "title": "Stanza 5",
        "content": "Munjira muno dzomunyika,\nAndizoreki kumuda,\nNdinozoenda naye m�denga,\nAndizoreki kumuda."
      }
    ]
  },
  {
    "id": 107,
    "number": 107,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Tafa ngokushaisha",
    "stanzas": [
      {
        "id": 10701,
        "title": "Stanza 1",
        "content": "Tafa ngokushaisha\nNezvakashata zvose\nZvinotireya teshe,\nTopona zvinongenyi?"
      },
      {
        "id": 10702,
        "title": "Stanza 2",
        "content": "Zvawanda zvekudai\nNgejecha riri m�jombe,\nZvinotitsikirira\nTopona zvino ngenyi?"
      },
      {
        "id": 10703,
        "title": "Stanza 3",
        "content": "Tinozohuta ndizvo,\nTinozouya Mambo,\nNdiMambo wedu, Jesu,\nTopona zvino ngenyi?"
      },
      {
        "id": 10704,
        "title": "Stanza 4",
        "content": "Kwouri Jesu Kristu,\nWakada vashaishi,\nWakazokohomerwa,\nKwouri tingapona."
      },
      {
        "id": 10705,
        "title": "Stanza 5",
        "content": "Ngendonga wakarohwa\nDzaisisira isu;\nWatwaro kushaisha,\nKwouri tingapona."
      }
    ]
  },
  {
    "id": 108,
    "number": 108,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Madziso aJehovha anopenya munyika",
    "stanzas": [
      {
        "id": 10801,
        "title": "Stanza 1",
        "content": "Madziso aJehovha\nAnopenya munyika,\nNenzee dzake dzinonzwa\nKuchema kwavanhu,\nAvo vanoruramisa\nNokugonda kwa�ri\nVachipo panyika."
      },
      {
        "id": 10802,
        "title": "Khorasi",
        "content": "Ngatibonge kuna Jesu,\n\nNgatibonge kuna Jesu,\nNgatibonge kuna Jesu,\nUnozwa kupota."
      },
      {
        "id": 10803,
        "title": "Stanza 2",
        "content": "Wouya mumakore\nNengirosi dzake,\nEchiunganidza vanhu\nVari muno m�nyika;\nWohina vanhu veshe\nZvakasisira izvo\nZvakaitwa ndivo."
      },
      {
        "id": 10804,
        "title": "Stanza 3",
        "content": "Ngatiite vanogwinya\nMukutenda mwedu;\nTisatya kuonana\nNaye ngokushaisha.\nMiromo yedu yeshe\nNgaibate gwinyiso\nReizwi raJESU."
      }
    ]
  },
  {
    "id": 109,
    "number": 109,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jesu unoda vatendi",
    "stanzas": [
      {
        "id": 10901,
        "title": "Stanza 1",
        "content": "Jesu unoda vatendi\n Vanodakara;\nVanogwinyira kwaari\nMazuva eshe."
      },
      {
        "id": 10902,
        "title": "Khorasi",
        "content": "Unoda vatendi,\nJesu unoda vatendi;\nTiite vatendi\nVanogondeka."
      },
      {
        "id": 10903,
        "title": "Stanza 2",
        "content": "Jesu unoda vatendi\n Vanokumbira,\nVanoronzera kwaari\nZvifiso zvavo."
      },
      {
        "id": 10904,
        "title": "Stanza 3",
        "content": "Jesu unoda vatendi\n Vanoungana\n\nApo panochumaerwa\nZvironzo zvake."
      },
      {
        "id": 10905,
        "title": "Stanza 4",
        "content": "Jesu unoda vatendi\n Vanozodzidza\nManzwi orudo nenyasha\nAakatipa"
      }
    ]
  },
  {
    "id": 110,
    "number": 110,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Onai mum’khumbi",
    "stanzas": [
      {
        "id": 11001,
        "title": "Stanza 1",
        "content": "Onai, mum�khumbi\nmusina uraro,\nMambo Jesu mudoko\nvakaata�mwo.\nNyeredzi mugore\ndzakamurinda,\nMambo Jesu\naata pamwenjepo."
      },
      {
        "id": 11002,
        "title": "Stanza 2",
        "content": "Nengombe dzochema\nnomwana womuka,\nAsi Jesu mudoko\nwakanyararamwi.\nNdokudawo Jesu\nndiringirewo;\nGara pasinde pangu,\nmetsa mangwani."
      }
    ]
  },
  {
    "id": 111,
    "number": 111,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Iwe mwoyo wangu!",
    "stanzas": [
      {
        "id": 11101,
        "title": "Stanza 1",
        "content": "Iwe mwoyo wangu!\nWechingwara zvino;\nSiya kushaisha kwako,\nKuno kudzimbira."
      },
      {
        "id": 11102,
        "title": "Stanza 2",
        "content": "Gara wechidira muponesi wako;\nPota ngamazuva eshe,\nKuna Mambo wako"
      },
      {
        "id": 11103,
        "title": "Stanza 3",
        "content": "Usarasha iwe kuangira kwako;\nNguva yako inopera\nNomushando wako."
      }
    ]
  },
  {
    "id": 112,
    "number": 112,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Madziso angu beurai",
    "stanzas": [
      {
        "id": 11201,
        "title": "Stanza 1",
        "content": "Madziso angu beurai,\nNdinezve gwinyiso,\nNdipe panyara chivhuro chako,\nKuti ndisunhurike."
      },
      {
        "id": 11202,
        "title": "Khorasi",
        "content": "Ngokunyarara zvino,\nNdinogarira mambo,\nMadziso angu beurai,\nMweya kwaye"
      },
      {
        "id": 11203,
        "title": "Stanza 2",
        "content": "Nenzee dzangu beurai,\nNdizwisezve gwinyiso;\nNeizwirenyu ndizwe,\nNdiite kuda kwenyu."
      },
      {
        "id": 11204,
        "title": "Stanza 3",
        "content": "Muromo wangu beurai,\nNdironzezve gwinyiso,\nBeurai mwoyo wangu,\nNdione rudo rwenyu."
      }
    ]
  },
  {
    "id": 113,
    "number": 113,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "O Jehovha ndakashata",
    "stanzas": [
      {
        "id": 11301,
        "title": "Stanza 1",
        "content": "O Jehovha, ndakashata ,\nApo pachigaro chako,\nKunonaka kuti ndifa,\nAsi ndiponese hako."
      },
      {
        "id": 11302,
        "title": "Stanza 2",
        "content": "Ndakaramba kukudira,\nMambo uri miti wangu,\nNdaitenda muchengedzi,\nNgemikuwo yangu yeshe."
      },
      {
        "id": 11303,
        "title": "Stanza 3",
        "content": "Kuponazve andinakwo,\nKwawo mwoyo unetsvina,\nJesu ndakupota hangu,\nNdidusire zvishaishi."
      }
    ]
  },
  {
    "id": 114,
    "number": 114,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mambo Jesu Kristu",
    "stanzas": [
      {
        "id": 11401,
        "title": "Stanza 1",
        "content": "Mambo Jesu Kristu,\nMambo womudenga,\nMambo wenyika yeshe,\nTinomudira, tinomudira,\nO Mambo wedu Jesu."
      },
      {
        "id": 11402,
        "title": "Stanza 2",
        "content": "Minda yeshe yedu\nNemitunhu mikuru,\nZvinofarisa vanhu\nJesu Kristu, Mambo wedu,\nNuozvipinda zveshe."
      },
      {
        "id": 11403,
        "title": "Stanza 3",
        "content": "Zuva rinojeka,\nTinozoritama\nNezvomunyika zveshe,\nJesu Kristu, Mambo wedu\nUnozvipinda zveshe."
      }
    ]
  },
  {
    "id": 115,
    "number": 115,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "NdiMwari uri Bako",
    "stanzas": [
      {
        "id": 11501,
        "title": "Stanza 1",
        "content": "NdiMwari uri bako\nUgaro hwokuwara\nChinyini chingauya\nUgaro hwokuhwara."
      },
      {
        "id": 11502,
        "title": "Khorasi",
        "content": "NdiJesu uri buwe redu,\nNgeredu hwokuhwara.\nNdiJesu uri buwe redu,\nUgaro hwokuhwara."
      },
      {
        "id": 11503,
        "title": "Stanza 2",
        "content": "Ngezuva tine bvuta,\n\nUgaro hwokuhwara,\nUsiku atizotyi,\nUgaro hwokuhwara."
      },
      {
        "id": 11504,
        "title": "Stanza 3",
        "content": "Akuna chinotyisa,\nUgaro hwakuhwara,\nMagaa atizotyi,\nUgaro hwukuhwara."
      },
      {
        "id": 11505,
        "title": "Stanza 4",
        "content": "Mubvumo wechiuya,\nUgaro hwokuhwara,\nAtizosii Mwari,\nUgaro hwokuhwara."
      },
      {
        "id": 11506,
        "title": "Stanza 5",
        "content": "Zviedzo zvechiuya,\nUgaro hwokuhwara,\nNorufa rwechiuya,\nUgaro hwokuhwara."
      }
    ]
  },
  {
    "id": 116,
    "number": 116,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mambo, taungana",
    "stanzas": [
      {
        "id": 11601,
        "title": "Stanza 1",
        "content": "Mambo, taungana muno\nM,mhatso yenyu,\nUyawozve tapinda,\nMambo, mberi kwenyu."
      },
      {
        "id": 11602,
        "title": "Stanza 2",
        "content": "Ndiyo mwoyo yenyu\nInomuchemera,\nNeiyi mweya yedu Mambo\nInomuringira."
      },
      {
        "id": 11603,
        "title": "Stanza 3",
        "content": "'Baba, ngatizie\nKuti muri pano.\nNgatirizwe izwi renyu\nRabeurwa ndimwi."
      },
      {
        "id": 11604,
        "title": "Stanza 4",
        "content": "Tinasirirenyi\nIsu vanhu venyu,\n\nKuti tafa mutiise\nKune denga renyu."
      }
    ]
  },
  {
    "id": 117,
    "number": 117,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Wakakohomerwa Mambo Jesu Kristu",
    "stanzas": [
      {
        "id": 11701,
        "title": "Stanza 1",
        "content": "Wakakohomerwa Mambo\n Jesu Kristu\nPamutunhu weKalvari,\nNesu tinomuda uwo wakafira\nIsisu vashaishi."
      },
      {
        "id": 11702,
        "title": "Khorasi",
        "content": "Ndizvo muchinjiko waJesu\nUnoremeredzwa munyika,\nTinogonda nemwoyo yedu,\nKungazi yake Jesu."
      },
      {
        "id": 11703,
        "title": "Stanza 2",
        "content": "Vanhu vomunyika Vanonyenya Jesu\nNomushando waakaita\nAsi hwai yaMwari yakavaripira\nPamutunhu weKalvari."
      },
      {
        "id": 11704,
        "title": "Stanza 3",
        "content": "Muchinjiko wake\nUnodakadzisa\nVeshe avo vakaponeswa,\nNavo vanoemba ngenyasha dzake,\nDzaakaitira avo"
      }
    ]
  },
  {
    "id": 118,
    "number": 118,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mugore muna Mambo",
    "stanzas": [
      {
        "id": 11801,
        "title": "Stanza 1",
        "content": "Mugore muna Mambo,\nNgaavakanaka vega.\nMudenga mugoremwo,\nNgavakachena vega."
      },
      {
        "id": 11802,
        "title": "Stanza 2",
        "content": "Unoda kuendomwo,\nNgaadzikumbirire,\nAnasirirwe ndiye\nNdiMweya Wakachena."
      },
      {
        "id": 11803,
        "title": "Stanza 3",
        "content": "NdiJesu watifira\nKufira ndaa dzedu.\nKuzoti uzochena\nNomwoyo wedu weshe."
      },
      {
        "id": 11804,
        "title": "Stanza 4",
        "content": "Techinyadyiwa ndikwo\nNgokufa munyikeyi,\nTisarambwa kwaari\nKuenda mugoremwo."
      }
    ]
  },
  {
    "id": 119,
    "number": 119,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndimouda Jesu",
    "stanzas": [
      {
        "id": 11901,
        "title": "Stanza 1",
        "content": "Ndinomuda Jesu, unondida,\nNdinom`teera Jesu wondikweya,\nUnondiripira ngokufa kwake.\nNdinomuda Jesu,\nNdakaponeswa."
      },
      {
        "id": 11902,
        "title": "Stanza 2",
        "content": "Ndinomuda Jesu unovada;\nKwavanom`kumbira une nyasha.\nUnovahambira, unovashira,\nVanomuda Jesu,\nNdiMambo wavo."
      },
      {
        "id": 11903,
        "title": "Stanza 3",
        "content": "Ndinomuda Jesu, ngaam`tende,\nMadzinza omuno ngaam`teere.\nUri M`iti wao ngaam`teere.\nNgatimude Jesu\nUsikaperi"
      }
    ]
  },
  {
    "id": 120,
    "number": 120,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndinotama M’ponesi Jesu",
    "stanzas": [
      {
        "id": 12001,
        "title": "Stanza 1",
        "content": "Ndinotama M`ponesi Jesu,\nAkuna wakadai ndiJesu.\nNdinotama M`ponesi wangu,\nVamweni vanotwara vega,\nNdinotama."
      },
      {
        "id": 12002,
        "title": "Khorasi",
        "content": "Ndinotama (Jesu),\nNdinotama (Jesu),\nNdinotama Jesu (Jesu),\nnguva yokujeka,\nNguva yechidima, zuva reshe,\nNjira yeshe Jesu Kristu."
      },
      {
        "id": 12003,
        "title": "Stanza 2",
        "content": "Ndinotama shamwari Jesu,\nMukweyi mukupona kwedu,\nndinotama maga`ouya,\nInini ndega ndokorera,\nNdinotama."
      },
      {
        "id": 12004,
        "title": "Stanza 3",
        "content": "Ndinotama, kugumisira,\nAkuna wakadai ndiJesu,\nNdinotama uyu, nenyasha,\nMugwinyi mudetseri wangu,\nNdinotama."
      }
    ]
  },
  {
    "id": 121,
    "number": 121,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndinomupa Jesu zveshe",
    "stanzas": [
      {
        "id": 12101,
        "title": "Stanza 1",
        "content": "Ndinomupa Jesu zveshe,\nNdinozvihina kwaari.\nNdinomuda ndechitenda,\nNdechimuponera"
      },
      {
        "id": 12102,
        "title": "Khorasi",
        "content": "Ndinohinazve, zveshe zvangu.\nZveshe, Muponesi wangu,\nZviri zvenyu"
      },
      {
        "id": 12103,
        "title": "Stanza 2",
        "content": "Ndinomupa Jesu zveshe,\nNdomugwadamira.\nKuda nyika ndorekere,\nNdiashire Jesu."
      },
      {
        "id": 12104,
        "title": "Stanza 3",
        "content": "Ndinomupa Jesu zveshe,\nEya mwoyo wangu.\n\nNdizarisezve ngorudo\nRufumiso rwenyu"
      }
    ]
  },
  {
    "id": 122,
    "number": 122,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mwana washaisha",
    "stanzas": [
      {
        "id": 12201,
        "title": "Stanza 1",
        "content": "Mwana washaisha!\nTenderuka wadaidzwa, uponeswe;\nUsati mangwani,\nUya zvino mwana\nWakashisha uya iwe."
      },
      {
        "id": 12202,
        "title": "Stanza 2",
        "content": "Mwana washaisha, unozofa.\nPota uzopuwa ndiye Mwari\nUne simba rokudetsa,\nMwana washaisha,\nMwana washaisha tsvaka hako"
      },
      {
        "id": 12203,
        "title": "Stanza 3",
        "content": "Mwana washaisha, w`enda kuri?\nNdiyo nguva iyo, inozoza,\nInopedza kuponesaswa,\n Mwana washaisha w`enda kuri?"
      },
      {
        "id": 12204,
        "title": "Stanza 4",
        "content": "Mwana washaisha,\nOna aye Muponesi wedu\nWatifa uya kwa`ri, uya zvino,\nMwana washaisha woponeswa."
      }
    ]
  },
  {
    "id": 123,
    "number": 123,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Vanhu vari m’nyika muno",
    "stanzas": [
      {
        "id": 12301,
        "title": "Stanza 1",
        "content": "Vanhu vari m`nyika nuno,\nAtendenyi mazwi,\nEtinopangirwa ndiwo\nMazwi okupona"
      },
      {
        "id": 12302,
        "title": "Khorasi",
        "content": "Aye une simba reshe,\nRokutiponesa.\nNgatitende Jesu ega\nTinoneswe ndiye"
      },
      {
        "id": 12303,
        "title": "Stanza 2",
        "content": "Mambo unotishamisa\nNgokuvada veshe,\nVanhu kwavo namapenzi,\nUnovadaidza."
      },
      {
        "id": 12304,
        "title": "Stanza 3",
        "content": "Ndizvo ngatimuteere,\nMwari une simba wakatuma\nMwana wake kutifira teshe.'"
      },
      {
        "id": 12305,
        "title": "Khorasi",
        "content": "Mambo ndiro simba\nRako vanotenderuka;\nVacharamba nanyamashi\nVanozokudira."
      }
    ]
  },
  {
    "id": 124,
    "number": 124,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mambo wangu unopona",
    "stanzas": [
      {
        "id": 12401,
        "title": "Stanza 1",
        "content": "Mambo wangu unopona,\nUnopinda veshe,\nMukuhamba kwangu kweshe\nNgandihambe newe."
      },
      {
        "id": 12402,
        "title": "Khorasi",
        "content": "Pasinde pako,\nPasinde pako,\nMumuhambo mwangu mweshe,\nNgandihambe newe."
      },
      {
        "id": 12403,
        "title": "Stanza 2",
        "content": "Anditsvaki kudakara,\nKuzorora muno,\nNgokufara ngandishanhe,\nNgandihambe newe."
      },
      {
        "id": 12404,
        "title": "Stanza 3",
        "content": "Ngomukuwo wendinofa,\nNdidetsere Mambo,\nMukuponazve mudenga,\nNgandihambe newe"
      }
    ]
  },
  {
    "id": 125,
    "number": 125,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "O Ngatikure munyasha",
    "stanzas": [
      {
        "id": 12501,
        "title": "Stanza 1",
        "content": "O ngatikure munyasha\nNomurudo rwaJesu.\nI dzakakura nyasha dzake,\nTaponeswa ndidzo."
      },
      {
        "id": 12502,
        "title": "Khorasi",
        "content": "Endai muti, \"ngenyasha,\nMungapona nemwi.\nI huru nyasha dzake Jesu,\nTingapona teshe."
      },
      {
        "id": 12503,
        "title": "Stanza 2",
        "content": "O vanokura munyasha,\nNomurudo rwaJesu,\nSa ava ndivo vakarasha\nGodo nendurumwa."
      },
      {
        "id": 12504,
        "title": "Stanza 3",
        "content": "O dzakauya idzi nyasha\nKune vanhu veshe,\nI asi kuti atikuri\nAvangaponeswi."
      },
      {
        "id": 12505,
        "title": "Stanza 4",
        "content": "NdiJesu vakatuma vanhu\nKune nyika dzeshe\nVakaparadza idzi nyasha,\nKune nyika vanhu veshe."
      }
    ]
  },
  {
    "id": 126,
    "number": 126,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mukuwo wokukumbira",
    "stanzas": [
      {
        "id": 12601,
        "title": "Stanza 1",
        "content": "Mukuwo wokukumbira\nUnodakarisa mwoyo.\nApo ndinogwadamazve,\nPadendemaro raBaba.\nApo ndinotambudzika,\nNdinoona kuzorora.\nZviedzo ndinozviphepha\nNgokuuya kukumbira. (2)"
      },
      {
        "id": 12602,
        "title": "Stanza 2",
        "content": "Mukuwo wokukumbira,\nKupota kwangu kwokwira\nKwaari unogondakeka,\nUnozozwa kukumbira.\nUnoti, tsvakai mwoona,\nKuhudzai ndobeura.\nZveshe zvinonditambudza\nNdotura ngokukumbira. (2)"
      },
      {
        "id": 12603,
        "title": "Stanza 3",
        "content": "Mukuwo wokukumbira,\nNdinoembedzerwa ndiwo,\nNaapo ndinokumbira\nKugonda kwondizarisa,\nNekanyi kwomudengomwo\nNdoona ngokukumbira.\nNemwi vanhu vomunyika\nSaranyi mwechikumbira. (2)"
      }
    ]
  },
  {
    "id": 127,
    "number": 127,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Zvounodisa, ita kwendiri",
    "stanzas": [
      {
        "id": 12701,
        "title": "Stanza 1",
        "content": "Zvounodisa, itakwendiri,\nUri muumbi, Shanda mumwoyo\nNdisukisise, Mambo Jesu,\nNdichaemera mushandowo."
      },
      {
        "id": 12702,
        "title": "Stanza 2",
        "content": "Zvounodisa, ita kwendiri,\nUtsvakisise zviri mwoyo.\nKushata kweshe ngakucheneswe,\nPamberi pako ndinogwadama."
      },
      {
        "id": 12703,
        "title": "Stanza 3",
        "content": "Zvounodisa, ita kwendiri,\nKutambudzika kweshe kupere,\nSimba nenyasha zviri kwouri\nPedza mushando,\nMwana waMwari."
      },
      {
        "id": 12704,
        "title": "Stanza 4",
        "content": "Zvounodisa, ita kwendiri,\nKonga mumwoyo, utonge yaambo.\nNdizarisise ngomweya wako,\nKristu wemene, pona kwendiri"
      }
    ]
  },
  {
    "id": 128,
    "number": 128,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mwari Baba angu",
    "stanzas": [
      {
        "id": 12801,
        "title": "Stanza 1",
        "content": "Mwari Baba angu\nNdinoona vanhu\nVakasia njira yenyu,\nVari varashika.\nGarai neni, garai neni,\nNgokusikaperi.(2)"
      },
      {
        "id": 12802,
        "title": "Stanza 2",
        "content": "Nokupona kwangu\nKwakatsonga hakwo,\nAsi ndinotenda kuti\nMunogara neni.\nGarai neni, garai\nNgokusikaperi. (2)"
      },
      {
        "id": 12803,
        "title": "Stanza 3",
        "content": "Pashi pano peshe\nNdinoona kuti\nZviro zveshe zvichapera,\nBaba munogara.\nGarai neni, garai neni\nNgokusikaperi.(2)"
      },
      {
        "id": 12804,
        "title": "Stanza 4",
        "content": "Vanhu vanobarwa,\nIvo vanokura,\nAsi kufa kuchauya,\nBaba garai neni.\nGarai neni, garai neni\nNgokusikaperi.(2)"
      },
      {
        "id": 12805,
        "title": "Stanza 5",
        "content": "Kuti ndechichema\nNgemadambudziko,\nAchapera, ndidakare,\nBaba Garai neni,\nGarai neni, garai neni,\nNgokusikaperi. (2)"
      }
    ]
  },
  {
    "id": 129,
    "number": 129,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mwari watipa zvigondiso",
    "stanzas": [
      {
        "id": 12901,
        "title": "Stanza 1",
        "content": "Mwari watipa zvigondiso,\nZvinopinda mazwi eshe azwika,\nMweya waJesu wakaperera,\nUnotungamira aye mudenga."
      },
      {
        "id": 12902,
        "title": "Khorasi",
        "content": "Ndinozomuteera njira yeshe,\nNdinozomuteera Jesu nguva dzeshe."
      },
      {
        "id": 12903,
        "title": "Stanza 2",
        "content": "Rudo rwaJesu rwakapfaa,\nRunopinda rudo rweshe rwazwika;\nWakaitira nyasha kwetiri\nUnotungamira aye mudenga."
      },
      {
        "id": 12904,
        "title": "Stanza 3",
        "content": "Izwai mazwi, mwechiuya,\nImwi mwakararemba ngomutwarowo.\nZvigondiso zvinogondeka,\nUnotungamira aye mudenga."
      }
    ]
  },
  {
    "id": 130,
    "number": 130,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Unozoenda kuri",
    "stanzas": [
      {
        "id": 13001,
        "title": "Stanza 1",
        "content": "Unozoenda kuri,\nMushiwo wounozofa?\nUnoizia njira (2)\nYounohamba ndiyo?"
      },
      {
        "id": 13002,
        "title": "Stanza 2",
        "content": "Unochahambirenyi\nMunjira mwokurova?\nKushata kwako kweshe (2)\nKwakungurirwa here?"
      },
      {
        "id": 13003,
        "title": "Stanza 3",
        "content": "Nezvishaishi zvako,\nChakwadi zvakawanda,\nAuzotongopindi (2)\nMudenga uchinazvo."
      },
      {
        "id": 13004,
        "title": "Stanza 4",
        "content": "Chiuya kana Jesu\nUkungurirwe ndiye;\nNdiJesu unenyasha, (2)\nUzoashirwa ndiye."
      }
    ]
  },
  {
    "id": 131,
    "number": 131,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mune nguva yokuazwa",
    "stanzas": [
      {
        "id": 13101,
        "title": "Stanza 1",
        "content": "Mune nguva yokuazwa,\nImwi vanhu mweshe;\nMusabatahe kuramba\nNdiyo mwoyo nenyu."
      },
      {
        "id": 13102,
        "title": "Stanza 2",
        "content": "Ngaitende mwoyo yeshe,\nImudire Jesu,\nKuti azogara nemwi,\nMweshe vanhu vake."
      },
      {
        "id": 13103,
        "title": "Stanza 3",
        "content": "Muchakokwa nanyamashi\nKuti muponeswe;\nMusabatahe kuremba,\nMirukanyi mweshe."
      },
      {
        "id": 13104,
        "title": "Stanza 4",
        "content": "Iyi ndiyo nguva kwayo\nYavo vakashata,\nIzwi rake rakanaka\nRiri gonda renyu."
      },
      {
        "id": 13105,
        "title": "Stanza 5",
        "content": "Inozoza nguva yenyu\nYokutongwa ndiye,\nYavanozochema kwa`ri\nAvo vacharamba."
      }
    ]
  },
  {
    "id": 132,
    "number": 132,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndakachema kuti ndisukwe",
    "stanzas": [
      {
        "id": 13201,
        "title": "Stanza 1",
        "content": "Ndakachema kuti ndisukwe\nPamuchinjiko waM`ponesi,\nNengazi yakasuka mwoyo,\nNgaakuriswe."
      },
      {
        "id": 13202,
        "title": "Khorasi",
        "content": "Mukurisisenyi,\nMukurisisenyi,\nNgazi iyo yakandisuka,\nNgaakuriswe"
      },
      {
        "id": 13203,
        "title": "Stanza 2",
        "content": "Ndiponeswa kushaisha;\nJesu unogara mumwoyo.\nPamuchinjiko wakandida,\nNgaakuriswe."
      },
      {
        "id": 13204,
        "title": "Stanza 3",
        "content": "Ndine chinyuka chinosuka\nKushata kweshe kwendinakwo.\nApo Jesu unondishamba,\nNgaakuriswe."
      },
      {
        "id": 13205,
        "title": "Stanza 4",
        "content": "Uyai kune chinyukacho;\nRashai zvishaishi zvenyuzvo.\nPotera nemwi munosukwa,\nNgaakuriswe."
      }
    ]
  },
  {
    "id": 133,
    "number": 133,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kuti mwechiremba",
    "stanzas": [
      {
        "id": 13301,
        "title": "Stanza 1",
        "content": "Kuti mwechiremba\nNgomutwaro wenyu,\nKuti mwadzimbirwa\nNgokushata kwenyu."
      },
      {
        "id": 13302,
        "title": "Khorasi",
        "content": "Uya kuna Jesu,\nMuzorodzwe ndiye,\nUya kuno Jesu,\nMusunhurwe ndiye."
      },
      {
        "id": 13303,
        "title": "Stanza 2",
        "content": "Kuti mwechinyiswa,\nNgoushungu hwenyu,\nKuti mwasvipiswa\nNgokuita kwenyu."
      },
      {
        "id": 13304,
        "title": "Stanza 3",
        "content": "Kuti mwechishekwa,\nMusatyiswa ndikwo,\nKuti mwechitukwa,\nMusaende sure."
      },
      {
        "id": 13305,
        "title": "Stanza 4",
        "content": "Avo vanopona kwake,\nAvo vanoona kudakadzwa kwake."
      },
      {
        "id": 13306,
        "title": "Khorasi",
        "content": "Vanouya kwaari\nVamubeurira,\nMwoyo yavo yeshe,\nKuti vacheneswe."
      }
    ]
  },
  {
    "id": 134,
    "number": 134,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jesu mununuri izwa",
    "stanzas": [
      {
        "id": 13401,
        "title": "Stanza 1",
        "content": "Jesu, Mununuri,\nIzwa ndechichema;\nNdipe simba rokunyisa\nKushaisha."
      },
      {
        "id": 13402,
        "title": "Khorasi",
        "content": "Ndinogara ndechinyisa\nNdiro simba;\nEya, ndinonyisa ini\nNgezwi rako"
      },
      {
        "id": 13403,
        "title": "Stanza 2",
        "content": "Ndichauya kwo`ri, Jesu,\nNdiponeswe;\nUzarise mwoyo wangu\nUdakare."
      },
      {
        "id": 13404,
        "title": "Stanza 3",
        "content": "Ndidzidzise, ndikuite\nKuda kwako;\nNgandireke kuda kwangu,\nNdikudire."
      }
    ]
  },
  {
    "id": 135,
    "number": 135,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jesu wakandida",
    "stanzas": [
      {
        "id": 13501,
        "title": "Stanza 1",
        "content": "Jesu wakandida,\nKwakanyorwa ndiye;\nVana vanomuda,\nJesu unovada."
      },
      {
        "id": 13502,
        "title": "Khorasi",
        "content": "Wandida Jesu, (3)\nNdomuda neni."
      },
      {
        "id": 13503,
        "title": "Stanza 2",
        "content": "Jesu wakandida, Wakasia denga;\nWakadzaka muno kuponesa ini. '"
      },
      {
        "id": 13504,
        "title": "Stanza 3",
        "content": "Jesu wakandida,\nWakabeurira\nRuvi rwomudenga,\nNdinozopotera."
      },
      {
        "id": 13505,
        "title": "Stanza 4",
        "content": "Jesu wakandida\nWakandipa mhatso,\nKuti ndikamuda\nUnozonditora."
      }
    ]
  },
  {
    "id": 136,
    "number": 136,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "A! Kupona kwavanakwo",
    "stanzas": [
      {
        "id": 13601,
        "title": "Stanza 1",
        "content": "A`! kupona kwavanakwo,\nVakanaka vomudenga;\nVanoemba pedo pako\nPane dendemaro guru."
      },
      {
        "id": 13602,
        "title": "Stanza 2",
        "content": "Wakanaka m`tungwe wavo,\nNengirosi dziri apo;\nRakanaka ruyo rwavo,\nRwokuemba vachitenda."
      },
      {
        "id": 13603,
        "title": "Stanza 3",
        "content": "Vana nguwo dzakachena,\nVeshe avo vamudenga;\nDzacheneswa nge`yo ngazi\nYakarashwa kuripira."
      },
      {
        "id": 13604,
        "title": "Stanza 4",
        "content": "Vanodira veshe avo,\nVechikudza Mambo Jesu,\nVanotenda Mwari wavo\nNgokuvaponesa veshe."
      },
      {
        "id": 13605,
        "title": "Stanza 5",
        "content": "Ndaadzavo dzakapera,\nKushaisha akuchina,\nNzara avachaioni,\nVano`pfumi hwakawanda"
      },
      {
        "id": 13606,
        "title": "Stanza 6",
        "content": "Ndingatenda kuzoema,\nN`avo vanhu vakanaka,\nNdikurise Mambo wavo,\nUwo wakafira teshe."
      }
    ]
  },
  {
    "id": 137,
    "number": 137,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndechimutama Jesu uneni",
    "stanzas": [
      {
        "id": 13701,
        "title": "Stanza 1",
        "content": "Ndechimutama Jesu uneni,\nNdechigononda, ndechityahe,\nWodo kudetsa, wofadzahe,\nNdechimutamazve.'"
      },
      {
        "id": 13702,
        "title": "Khorasi",
        "content": "Ndechimutamahe,\nNdechimutahe,\nJesu uri pasinde pangu,\nNdechimutamahe."
      },
      {
        "id": 13703,
        "title": "Stanza 2",
        "content": "Ndechimutama unogondeka.\nAandisii munjira,\nWondidakadza ndogwinyahe,\nNdechimutamahe"
      },
      {
        "id": 13704,
        "title": "Stanza 3",
        "content": "Ndechimutama Jesu wagwinya,\nWechitwarira ndaa dzangu,\nWondiembedza ndechitsumba,\nNdechimutamahe."
      },
      {
        "id": 13705,
        "title": "Stanza 4",
        "content": "Ndechimutama wondipa zveshe,\n\nUnopingura ndapota,\nWondingwarira ndisawahe,\nNdechimutamahe."
      }
    ]
  },
  {
    "id": 138,
    "number": 138,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndinoda kumukudza",
    "stanzas": [
      {
        "id": 13801,
        "title": "Stanza 1",
        "content": "Ndinoda kumukudza,\nO Mwari wangu.\nAye wakandifira\nPamuchinjiko."
      },
      {
        "id": 13802,
        "title": "Stanza 2",
        "content": "Ndinoda mwoyo kwavo\nWakadzihina.\nKunyazi ndiri pari,\nUnozotonga."
      },
      {
        "id": 13803,
        "title": "Stanza 3",
        "content": "Mwoyo unozogonda\nGwinyiso rake.\nNdinoda kumuteera\nMhera narini."
      },
      {
        "id": 13804,
        "title": "Stanza 4",
        "content": "Ndinoda kufumiswa\nNdimweya kwawo,\nKuti ndiite wako,\nO Mwari wedu."
      }
    ]
  },
  {
    "id": 139,
    "number": 139,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Wafa,wafa Musunhuri",
    "stanzas": [
      {
        "id": 13901,
        "title": "Stanza 1",
        "content": "Wafa, wafa Musunhuri\nVezvironzo zvake;\nWafa kuti vaponeswe,\nWafa ndivo vashatisi,\nWafa kuti vapotere\nMuutende hwake."
      },
      {
        "id": 13902,
        "title": "Stanza 2",
        "content": "Adzo nyasha adziperi,\nAdzo nyasha dzakagara,\nTechinyashaisha.\n\nMambo unotishamisa,\nMambo watiremeredza,\nNgezvo unoita."
      },
      {
        "id": 13903,
        "title": "Stanza 3",
        "content": "Kukarakadzisa kwako,\nNgokutiripira teshe,\nNdaa dzedu teshe.\nZvino tinogwinyisisa,\nZvino tinopinimidza,\nNdiyo mwoyo yedu."
      }
    ]
  },
  {
    "id": 140,
    "number": 140,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Takashongana patafura",
    "stanzas": [
      {
        "id": 14001,
        "title": "Stanza 1",
        "content": "Takashongana patafura\nKukarakadza kufa kwake;\nPamberi pedu zvakaiswa\nZvinoonisa kupa kwake."
      },
      {
        "id": 14002,
        "title": "Stanza 2",
        "content": "Chakabweshurwa chingwa ichi,\nKuti chiemere muiri;\nVhini rinoonisa ngazi\nYakarashika pamumbuti"
      },
      {
        "id": 14003,
        "title": "Stanza 3",
        "content": "Inonamata mwoyo yeshe,\nTinozwa kuti uri pano.\nUwo wakatifira teshe,\nUnoponazve, ndiM`ponesi"
      },
      {
        "id": 14004,
        "title": "Stanza 4",
        "content": "Ngaadetsere, Mwari,\nKuti isu taia vashaisi\nTiite vako vanosisa\nKutora chingwa chakadai."
      },
      {
        "id": 14005,
        "title": "Stanza 5",
        "content": "Apo techimwa vhini iri,\nNgazviripirwe zvishaishi,\nKuti tigare takanaka\nMberi kwaMambo wedu Jesu."
      }
    ]
  },
  {
    "id": 141,
    "number": 141,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndinoda kuzwa ndiJesu",
    "stanzas": [
      {
        "id": 14101,
        "title": "Stanza 1",
        "content": "Ndinoda kuzwa ndiJesu;\nNdipe mashoko ake,\nAri mashoko orudo\nAkapinda kunaka.\nNgirosi dzakaembera\nApo wakaberekwa,\nKudzai Mwari mudenga,\nVanhu vanoponeswa."
      },
      {
        "id": 14102,
        "title": "Khorasi",
        "content": "Ndinoda kuzwa ndiJesu;\nNdipe mashoko ake,\nAri mashoko orudo\nAkapinda kunaka."
      },
      {
        "id": 14103,
        "title": "Stanza 2",
        "content": "Wakaedzwa ari ega\nEchipera ngenzara,\nSathani wakamuedza\nAsi wakamunyisa.\nWakadetsera varombo\nNokutambisa vanhu;\nWakashoorwa munyika\nAsina kanyi rake."
      },
      {
        "id": 14104,
        "title": "Stanza 3",
        "content": "Wakatitambudzikira\nAri pamuchinjiko;\nWakaradzikwa muiba\nRakatsiwa mapuwe.\nAsi wakanyisa kufa\nNgomweya waMarure;\nWakakwira mudengomwo\nKuti atiemere apo."
      }
    ]
  },
  {
    "id": 142,
    "number": 142,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mudengomwo kwo’ri, Baba",
    "stanzas": [
      {
        "id": 14201,
        "title": "Stanza 1",
        "content": "Mudengomwo kwo`ri, Baba,\nMwakanaka yaemho;\nmudengomwo kwo`ri Baba,\n\nMuutende hwega"
      },
      {
        "id": 14202,
        "title": "Stanza 2",
        "content": "Akupindi kushaisha,\nHaiwa nakamwe;\nAripindi denda hamwo,\nHai amuna umwo."
      },
      {
        "id": 14203,
        "title": "Stanza 3",
        "content": "Vakanaka varimwozve,\nVakagara havo;\nVanomuda, vamudire\nAye, Mwari wavo."
      },
      {
        "id": 14204,
        "title": "Stanza 4",
        "content": "Vazopuwa muzi kwawo,\nMuzi usikafa;\nVazoona kudakara\nKusikazoperi."
      },
      {
        "id": 14205,
        "title": "Stanza 5",
        "content": "Nda, ndarembawo munyika,\nNdipe zvemudenga;\nNgandipinde ndiwe Jesu,\nKuzo mudengomwo."
      }
    ]
  },
  {
    "id": 143,
    "number": 143,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "'Kanyi kwangu, kanyi kwaro",
    "stanzas": [
      {
        "id": 14301,
        "title": "Stanza 1",
        "content": "Kanyi kwangu, kanyi kwaro\nNdipotere, Mambo umwo;\nNdipotere, ndizorore,\nKanyi kwaro iro."
      },
      {
        "id": 14302,
        "title": "Stanza 2",
        "content": "Kare ndaipepesheka,\nNdisinakwozve kunaka;\nNdinotsvaka ngechishuwo\nNdikuone kanyi."
      },
      {
        "id": 14303,
        "title": "Stanza 3",
        "content": "Kudakara kwo`ri, kanyi,\nNokuchema akuchina\nNamasodzi opukutwa,\nKanyi kwaro iro."
      },
      {
        "id": 14304,
        "title": "Stanza 4",
        "content": "Nzara akuchina apo,\nNyota akuchina,\nVanoushwa ndiye Jesu,\nVavasvika kanyi."
      },
      {
        "id": 14305,
        "title": "Stanza 5",
        "content": "Ndozwa kudakara umwo,\nKunozobva kwo`ri kanyi;\nNdopotera zvinopano,\nKanyi kwangu, iyo!"
      }
    ]
  },
  {
    "id": 144,
    "number": 144,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Munyika aikanyi, ndinopinda",
    "stanzas": [
      {
        "id": 14401,
        "title": "Stanza 1",
        "content": "Munyika aikanyi ndinopinda,\nUpfumi ndatumira apo m`denga,\nNgirosi dzinondidaidza m`denga,\nNdizvo andidakari ngenyika zvino."
      },
      {
        "id": 14402,
        "title": "Khorasi",
        "content": "O mambo wangu, wandizia,\nAndina hama muno kudai ndiJesu;\nNgirosi dzino ndidaidza m`denga,\nNdizvo andidakari ngenyika zvino."
      },
      {
        "id": 14403,
        "title": "Stanza 2",
        "content": "Vondigarira apo, ndinozia\nNdatenda Mambo Jesu ngekaretu.\nUnondibata nyara njira yeshe,\nNdizvo andidakari ngenyika zvino."
      },
      {
        "id": 14404,
        "title": "Stanza 3",
        "content": "Mudenga tozogara nekaretu\nVanyisi vanoemba nokumkudza,\nKwakanaka, Ndizvo\nandidakakari ngenyika, zvino"
      }
    ]
  },
  {
    "id": 145,
    "number": 145,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndinoda tsamba yako'",
    "stanzas": [
      {
        "id": 14501,
        "title": "Stanza 1",
        "content": "Ndinoda tsamba yako;\nAkuna tsamba yakadai.\n\nInotikweya mudenga,\nMusina kushaisha."
      },
      {
        "id": 14502,
        "title": "Stanza 2",
        "content": "Mubhaibheri renyu\nTinomuona Jesuwe.\nMazwi anotidzidzisa,\nTinozogara nemwi."
      },
      {
        "id": 14503,
        "title": "Stanza 3",
        "content": "Tirimunyika , Mweya,\nUnoonisa rudowo;\nNdinorudzisa muno,\nNgokudakara mudenga."
      }
    ]
  },
  {
    "id": 146,
    "number": 146,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndinomuda Muponesi",
    "stanzas": [
      {
        "id": 14601,
        "title": "Stanza 1",
        "content": "Ndinomuda Muponesi\nAye vakandida.\nNdinotenda Baba angu,\nNaya Mweya kwaYe.\nNdinorarasha zvishaishi,\nZvinondiuraya,\nNdiringire kuna Jesu,\nAye mununuri."
      },
      {
        "id": 14602,
        "title": "Stanza 2",
        "content": "Ndazwa zvino kazhinjitu\nVanondidzidzisa,\nKuti Jesu wakandida,\nNgandimude neni.\nZvino hama dzangu mweshe,\nNgatimuda teshe;\nTizvirashe zvishaishi,\nTiponeswe ndiye."
      }
    ]
  },
  {
    "id": 147,
    "number": 147,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Endai, vanhu vangu",
    "stanzas": [
      {
        "id": 14701,
        "title": "Stanza 1",
        "content": "Endai vanhu vangu,\nMupange mazwi,\nMuvaonise veshe,\nZvandakaita.\n\nVanonditenda, eya,\nVaite mazwi angu,\nNdinozovaashira\nMugore mwangu."
      },
      {
        "id": 14702,
        "title": "Stanza 2",
        "content": "Gumai nyika dzeshe,\nMuvadzidzise, Muvaronzere, muti,\nUyai, mupone:\nUnondiramba aye,\nArashe nyasha dzangu Aachazoponeswi,\nNdinozom`rasha."
      },
      {
        "id": 14703,
        "title": "Stanza 3",
        "content": "Purutanai vanhu\nMuzwise mazwi;\nPurutanai mweshe,\nMutye zvironzo;\nMuite kuda kwake,\nMuremeredze Mwari,\nMuitwe vokujeka\nMugarisike."
      }
    ]
  },
  {
    "id": 148,
    "number": 148,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndinomugonda,Mambo Jesu",
    "stanzas": [
      {
        "id": 14801,
        "title": "Stanza 1",
        "content": "Ndinomugonda Mambo Jesu,\nIwe wega, kuti undiponese yaemho Mambowe.\nNdinomugonda kucheneswe ndiwe, Mambo.\nNyasha wakanddiitira,\nJesu, rudozve."
      },
      {
        "id": 14802,
        "title": "Stanza 2",
        "content": "Ndinoda kuti ndifumiswe ndiwe Mwari.\nNdodo kukweya vanhu veshe kwouri."
      },
      {
        "id": 14803,
        "title": "Stanza 3",
        "content": "Ndinomugonda, Mambo Jesu,\nNguva dzeshe,\nKuti ndinyise mukuwo weshe,\nMambowe"
      }
    ]
  },
  {
    "id": 149,
    "number": 149,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mambo ,Mwari wedu",
    "stanzas": [
      {
        "id": 14901,
        "title": "Stanza 1",
        "content": "Mambo, Mwari wedu,\nUri m`mhatso mwake,\nUri m`mhatso huru yake yokudira.\nNyararanyi mweshe,\nMuri mberi kwake,\nNyararanyi mweshe,\nMuri mberi kwake,\nnyararanyi mberi kwake."
      }
    ]
  },
  {
    "id": 150,
    "number": 150,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Endai mberi, vaKristu",
    "stanzas": [
      {
        "id": 15001,
        "title": "Stanza 1",
        "content": "Endai mberi, vaKristu,\nEndai kunyika dzeshe,\nRonzerai kuvanhu ngemashoko aJesu."
      },
      {
        "id": 15002,
        "title": "Khorasi",
        "content": "Mwakaponeswa kudetserana,\nKuronzera vanhu veshe;\nRonzerai mashoko\nAMwari kuti vaponeswe."
      },
      {
        "id": 15003,
        "title": "Stanza 2",
        "content": "Ngatimushandire,\nShandirai metsa kufa,\nKudzai zina rake\nMwechironza ndiJesu."
      },
      {
        "id": 15004,
        "title": "Stanza 3",
        "content": "Ongai vashaishi\nKuvaponesa ndiye,\nMwechionisa njira yakanaka."
      }
    ]
  },
  {
    "id": 151,
    "number": 151,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kune nyika dziri mbiri",
    "stanzas": [
      {
        "id": 15101,
        "title": "Stanza 1",
        "content": "Kune nyika dziri mbiri,\nDzinohambwa pashi pano,\nImwe iri yokurova,\nImwe iri yokupona."
      },
      {
        "id": 15102,
        "title": "Stanza 2",
        "content": "Iyo iri yokurova,\nYakafara yakatsvuka.\n\nInohambwa ngavazhinji,\nVechiita zvevanoda."
      },
      {
        "id": 15103,
        "title": "Stanza 3",
        "content": "Vane hasha ve`yo njira,\nVanoramba kuponeswa;\nKana vanozopotera\nMukurova nokushata."
      },
      {
        "id": 15104,
        "title": "Stanza 4",
        "content": "Iyo iri yokupona,\nYakatsonga, idodoko;\nVanohamba vashomani nge`yo\nNjira yakanaka."
      },
      {
        "id": 15105,
        "title": "Stanza 5",
        "content": "Kani vanhu vakangwara,\nNdivo vanohamba ndiyo,\nVachienda kanyi kwavo,\nKuna Mwari wokupona.'"
      },
      {
        "id": 15106,
        "title": "Stanza 6",
        "content": "Vanohamba noM`ponesi,\nNgeyo njira yakatsonga,\nVanotsvak`umambo hwake,\nHuri hwaMarure wavo"
      },
      {
        "id": 15107,
        "title": "Stanza 7",
        "content": "Poterai iyo njira,\nMuponeswe nemwi mweshe,\nMusatora yakafara,\nMusarashikiswa ndiyo."
      }
    ]
  },
  {
    "id": 152,
    "number": 152,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndiri m`hambi munyika",
    "stanzas": [
      {
        "id": 15201,
        "title": "Stanza 1",
        "content": "Ndiri m`hambi munyika\nRa-rapera simbazve;\nNda-ndaremba ngokuhamba,\nNdinopenya kanyiro,\nE Jehovha, E Jehovha,\nNdiwe mudetseriwo."
      },
      {
        "id": 15202,
        "title": "Stanza 2",
        "content": "Ndipe iwe simba rako,\n\nUgwinyise mweyazve;\nUndikwere munjira inoenda kanyiro.\nNdikasire, ndikasire\nKuti ndizogumeyo."
      },
      {
        "id": 15203,
        "title": "Stanza 3",
        "content": "Ndinozofa zvinopano,\nNda-ndapedza njirayi,\nNomukufa undidetse, mudengomwo,\nMudengomwo uashire mweyazve."
      }
    ]
  },
  {
    "id": 153,
    "number": 153,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "'Ndohamba, ndohamba",
    "stanzas": [
      {
        "id": 15301,
        "title": "Stanza 1",
        "content": "Ndohamba, ndohamba,\nNdokwira mudenga,\nKunyika yaMwari,\nIsina urombo."
      },
      {
        "id": 15302,
        "title": "Stanza 2",
        "content": "Hambai, vatendi,\nKunyika yaMwari,\nInoda vashingi\nKuguma`yo nyika."
      },
      {
        "id": 15303,
        "title": "Stanza 3",
        "content": "Upfumi huriyo,\nHakuna murombo,\nHakuna naumwe,\nNaumwe hakuna."
      },
      {
        "id": 15304,
        "title": "Stanza 4",
        "content": "Madzinza ariyo,\nKunyika yaMwari,\nKavachazochemi,\nHavana chisuwo."
      },
      {
        "id": 15305,
        "title": "Stanza 5",
        "content": "Vatendi variyo,\nVane kudakara,\nVogara naJesu,\nWakafira veshe."
      }
    ]
  },
  {
    "id": 154,
    "number": 154,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Shandai, rabuda zuva",
    "stanzas": [
      {
        "id": 15401,
        "title": "Stanza 1",
        "content": "Shandai, rabuda zuva,\nShandai, robira,\nShandai, mubeto umwo,\nIchadetsa.\nShandai, rino kudzia,\nShandai, rajeka,\nShandai, robira zuva,\nRotisia."
      },
      {
        "id": 15402,
        "title": "Stanza 2",
        "content": "Shandai, ropota zuva,\nShandai, ropisha,\nShandai, richaanika,\nTozorora.\nZarisai m`kuwo weshe,\nNgezvokudetsa,\nShandai, robira zuva,\nToupedza."
      },
      {
        "id": 15403,
        "title": "Stanza 3",
        "content": "Shandai, rabiraa zuva,\nM`dengamwo mweshe.\nShandai, rinoti,\nNyenye, rinofota.\nShandai, kurichidima,\nKusazojeka,\nShandai, kwasvipa kweshe\nKwausiku."
      }
    ]
  },
  {
    "id": 155,
    "number": 155,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ngamazuva eshe Jesu unozondikweya",
    "stanzas": [
      {
        "id": 15501,
        "title": "Stanza 1",
        "content": "Ngamazuva eshe Jesu unozondikweya.\nKugononda akuchina,\nNdinonona nyasha.\nKunyarara kukri pano,\nNdichigonda kwaari;\nNdinozia kuti zvveshe\nZvinondidetsera. (2)"
      },
      {
        "id": 15502,
        "title": "Stanza 2",
        "content": "Ngamazuva eshe Jesu unozondikweya,\nUnodipa muzviedza simba rokugwinya;\nNokunyati tsoka dzangu dzinohuta hadzo,\nDzinoema dzakagwinya,\nDziri kuna Jesu.(2)"
      },
      {
        "id": 15503,
        "title": "Stanza 3",
        "content": "Ngamazuva eshe Jesu unozondikweya,\nNdinozozorora neni kune ngome dzake.\nMweya wangu usikafi,\nUnogara naye,\nNgokuemba ndinoronza\nKuti wakandikweya."
      }
    ]
  },
  {
    "id": 156,
    "number": 156,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ngandidai Jesu",
    "stanzas": [
      {
        "id": 15601,
        "title": "Stanza 1",
        "content": "Ngandidai ndiJesu,\nWainga akapfaa,\nWainga akapfaa,\nNdizvo ngandidai ndiye. (2)"
      },
      {
        "id": 15602,
        "title": "Stanza 2",
        "content": "Ngandidai ndiJesu\nNgamazwi angu eshe,\nApfae mazwi angu\nEndinoreketa. (2)"
      },
      {
        "id": 15603,
        "title": "Stanza 3",
        "content": "Ngandidai ndiJesu,\nApo akatambudzwa,\nApo vakamunyenya\nWakavakumbirira.(2)"
      },
      {
        "id": 15604,
        "title": "Stanza 4",
        "content": "Ngandidai ndiJesu\nMukukumbira kwangu;\nWaikumbirira vanhu\nAripo pamutunhu.(2)"
      },
      {
        "id": 15605,
        "title": "Stanza 5",
        "content": "Ngandidai ndiJesu\nNgemishando yangu yeshe;\nNdimuteere Jesu\nMunjira dzangu dzeshe.(2)"
      },
      {
        "id": 15606,
        "title": "Stanza 6",
        "content": "Ndemene ndinawo\nmuemo wake Jesu,\nNdinoda kuzariswa\nNdiMweya wakachena,\nMetsa ndidai ndiJesu."
      }
    ]
  },
  {
    "id": 157,
    "number": 157,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Wakaza Muponesi",
    "stanzas": [
      {
        "id": 15701,
        "title": "Stanza 1",
        "content": "Wakaza Muponesi,\nIzai pano.\nMumwoyo mwenyu\nMuembe muti\nWakaza Jesu. (4)"
      },
      {
        "id": 15702,
        "title": "Stanza 2",
        "content": "Zvino unovatonga,\nVom`nyika yeshe.\nOnai Mambo;\nMutende muti,\nWakaza Jesu. (4)"
      },
      {
        "id": 15703,
        "title": "Stanza 3",
        "content": "Kwanyiswa kufa kweshe\nNokutambudzwa:\nMutende muti,\nWakaza Jesu. (4)"
      },
      {
        "id": 15704,
        "title": "Stanza 4",
        "content": "Vanozoshama ndiye,\nVarimwo veshe;\nAvo vakati,\nAtizomudi;\nWakaza Jesu. (4)"
      },
      {
        "id": 15705,
        "title": "Stanza 5",
        "content": "Mudzingwarire zvino,\nMudzichemere;\nAadi kuti\nMur`awe mweshe;\nWakaza Jesu. (4)"
      }
    ]
  },
  {
    "id": 158,
    "number": 158,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Torima minda yedu",
    "stanzas": [
      {
        "id": 15801,
        "title": "Stanza 1",
        "content": "Torima minda yedu,\nTokusha zvio;\nKumera nokuibva\nNgezva Mururi;\nImvura inotumwa\nNgekare zuva;\nNebeto nokudzia,\nNedutu dete."
      },
      {
        "id": 15802,
        "title": "Khorasi",
        "content": "Zveshe zvatapuwa\nZvabva mudenga;\nTendayi Mambo,\nMwariwo unotida."
      },
      {
        "id": 15803,
        "title": "Stanza 2",
        "content": "Uri musiki ega wezviro zveshe,\nMaruva akanaka, nomwedzi wake,\nNeshiri dzomushango\nNgezvake zveshe;\nKwetiri vanhu vake,\nTapuwa kudya"
      },
      {
        "id": 15804,
        "title": "Stanza 3",
        "content": "Totenda, Baba, kwo`ri\nZvipuwo zvedu;\nMikuwo yokuibva,\nKutamba kwedu.\nAshira zvipo\nZvedu zvetinokupa.\nNeicho chounoda,\nKutenda kwedu."
      }
    ]
  },
  {
    "id": 159,
    "number": 159,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ngatitende Baba edu",
    "stanzas": [
      {
        "id": 15901,
        "title": "Stanza 1",
        "content": "Ngatitende Baba edu,\nVanotipa zvakanaka,\nVanoda vanhu veshe\nVaponeswe veshe m`pfumvu,\nPfumvu dzeshe dzinotyisa\n\nKurindidza nokunyepa.\nNgatitende simba rake,\nRingatiponesa teshe."
      },
      {
        "id": 15902,
        "title": "Stanza 2",
        "content": "Tinovachemera avo\nVanosungwa ngokushata;\nZvishaishi zvichagara\nNokudzidza kwakakura;\nVanoramba Mambo Jesu\nNdiyo mwoyo yavo yeshe:\nBeurai namadziso kuti\nVakutsvake Mwari!'"
      },
      {
        "id": 15903,
        "title": "Stanza 3",
        "content": "Vana vedu vanotama,\nVanotama zvakawanda:\nNguwa dzeshe dzokufuka\nNadzo tsamba dzokudzidza,\nMhatso dzino mweya\nKwawo wokudira nokudana;\nO! detsera navabari,\nVamutende Mambo Jesu."
      },
      {
        "id": 15904,
        "title": "Stanza 4",
        "content": "Baba, tipe simba rako,\nKuti tidetserwe ndiro,\nUtikwee utirinde,\nTirekere zvakashata;\nVanhu veshe vakanaka\nVanozoponeswa ndiye;\nNgatitende Mambo Jesu,\nAye Muponesi wedu."
      }
    ]
  },
  {
    "id": 160,
    "number": 160,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ngadiite kukumbira",
    "stanzas": [
      {
        "id": 16001,
        "title": "Stanza 1",
        "content": "Ngandiite kukumbira\nKuna Mambo aye,\nWakandiita ndidakare;\nNdinotenda Mambo.\nNdaiapo panokufa\nNdaibatwa ngendaa;\nNdaipenya pamuriro\n\nWandidusa Mambo."
      },
      {
        "id": 16002,
        "title": "Stanza 2",
        "content": "Wandizwisa izwi rako,\nWaidaidza ndiro.\nNdozoita munhu wako,\nNdiponeswe, Mambo.\nWandidusa mukuchema,\nWakandijekisa,\nNdinopenya nomudenga\nNyasha dzako, Mambo."
      }
    ]
  },
  {
    "id": 161,
    "number": 161,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Baba wedu une simba",
    "stanzas": [
      {
        "id": 16101,
        "title": "Stanza 1",
        "content": "Baba wedu une simba,\nTaungana kukumbira,\nTine chidisiso chimwe,\nKuti vanhu vaponeswe."
      },
      {
        "id": 16102,
        "title": "Khorasi",
        "content": "wari wedu, unesimba,\nTizwei tinomukumbira,\nTumai vafundisi uno\nKune nyika dzechidima"
      },
      {
        "id": 16103,
        "title": "Stanza 2",
        "content": "Vatumenyi mangwanani,\nVatumenyi masikati,\nVatumenyi madeikoni,\nKune mizi yavo yeshe."
      },
      {
        "id": 16104,
        "title": "Stanza 3",
        "content": "Neisisu vanhu vako,\nTakaona ruponeso,\nTine hama neshamwari,\nDzinogara muchidima.'"
      }
    ]
  },
  {
    "id": 162,
    "number": 162,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mwechitambudzika munyikei",
    "stanzas": [
      {
        "id": 16201,
        "title": "Stanza 1",
        "content": "Mwechitambudzika munyikei,\nMwechipera simba mwarashika,\nErengai zvifumisa zveshe,\n\nMunozoshamiswa ndizvo zvake."
      },
      {
        "id": 16202,
        "title": "Khorasi",
        "content": "Erengai zvifumisa,\nAye Mwari wakaita,\nRonza iwe zvifumiso,\nErengai zvifumiso zveshe"
      },
      {
        "id": 16203,
        "title": "Stanza 2",
        "content": "Munotambudzika ngomutswaro,\nMuchinjiko wako wakarema,\nErengai zvifumiso zveshe,\nMwechiemba ngokugonda ndiye."
      },
      {
        "id": 16204,
        "title": "Stanza 3",
        "content": "Munyikeyi mwechiona pfuma,\nKarakadza pfuma Jesu wopa,\nErengai zvifumiso zveshe,\nKanyi m`denga,\nNomusharo wenyu."
      },
      {
        "id": 16205,
        "title": "Stanza 4",
        "content": "Ndizvo mumadamudziko eshe,\nMusapera simba, Mwari nemwi;\nErengai zvifumiso zveshe,\nMunozodetserwa kuti mwofa."
      }
    ]
  },
  {
    "id": 163,
    "number": 163,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndinomuzia Muponesi",
    "stanzas": [
      {
        "id": 16301,
        "title": "Stanza 1",
        "content": "Ndinomuzia Muponesi,\nWaia muno munyika\nWakabva muno kuenda kanyi,\nNdozomuona m`denga."
      },
      {
        "id": 16302,
        "title": "Khorasi",
        "content": "Usandiaraidza, hai\nMbungano iri huru;\nWondidaidza ndodaira (2)\nNdom`chingamidza m`denga. (2)"
      },
      {
        "id": 16303,
        "title": "Stanza 2",
        "content": "Ndichachitama nanyamashi\nChokumutenda ndicho;\nWasia kanyi roumambo\n\nKuzotifira muno."
      },
      {
        "id": 16304,
        "title": "Stanza 3",
        "content": "Ndinomukarakadza hangu,\nNdichi munyika muno.\nNdichapedzisa m`shando wangu,\nUri munyra dzangu"
      },
      {
        "id": 16305,
        "title": "Stanza 4",
        "content": "Ndine chisuwo ndichahamba,\nNdozodaidzwa rini?\nMunyika muno mwakashata,\nAmuchandidakadzi."
      }
    ]
  },
  {
    "id": 164,
    "number": 164,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jesu wakaza kufira isisu",
    "stanzas": [
      {
        "id": 16401,
        "title": "Stanza 1",
        "content": "Jesu wakaza kofira isisu,\nGonde nyasha dzaJesu;\nTiri mukufa, wakaza kwetiri,\nTenda rudo rwaJesu."
      },
      {
        "id": 16402,
        "title": "Khorasi",
        "content": "Uyai, uyai Mweshe mungaponeswa;\nGondai nyasha norudo rwaJesu,\nNemwi munoponeswa."
      },
      {
        "id": 16403,
        "title": "Stanza 2",
        "content": "Jesu wakafa pamsoro pavanhu,\nGonde nyasha dzaJesu;\nTingaponeswa kudai techitenda,\nTenda rudo rwaJesu."
      },
      {
        "id": 16404,
        "title": "Stanza 3",
        "content": "Atichahambi nenjira yokufa,\nGonde nyasha dzaJesu,\nTinodakara munjira yaMwari,\nTenda rudo rwaJesu."
      },
      {
        "id": 16405,
        "title": "Stanza 4",
        "content": "Tinomuchena nazvino munyika,\nGonde nyasha dzaJesu;\nM`denga toona kupona kwaari,\ntenda rudo rwaJesu."
      }
    ]
  },
  {
    "id": 165,
    "number": 165,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndopeneswa ndiye",
    "stanzas": [
      {
        "id": 16501,
        "title": "Stanza 1",
        "content": "Ndopeneswa ndiye,\nJesu, Muponesi ega;\nNdocheneswa ndiye,\nJesu, Muponesi ega."
      },
      {
        "id": 16502,
        "title": "Khorasi",
        "content": "Unaro simba\nRokushambidza;\nAkuna`mweni,\nJesu, Muponesi ega."
      },
      {
        "id": 16503,
        "title": "Stanza 2",
        "content": "Unodida ndiye\nJesu, Muponesi ega.\nUno rudo rweshe,\nJesu, Muponesi ega."
      },
      {
        "id": 16504,
        "title": "Stanza 3",
        "content": "Unogarirenyi?\nJesu, Muponesi ega;\nUsaita hasha,\nJesu, Muponesi ega."
      },
      {
        "id": 16505,
        "title": "Stanza 4",
        "content": "Veshe vanotenda,\nJesu, Muponesi ega;\nTende nyasha dzake,\nJesu, Muponesi ega."
      },
      {
        "id": 16506,
        "title": "Stanza 5",
        "content": "Uya kwa`ri zvino,\nJesu, Muponesi ega,\nTende nyasha dzake,\nJesu, Muponesi ega."
      }
    ]
  },
  {
    "id": 166,
    "number": 166,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndinozwa izwi",
    "stanzas": [
      {
        "id": 16601,
        "title": "Stanza 1",
        "content": "Ndinozwa izwi Rinondidana\nKusukwa ndiyo ngazi,\nYakaparadzwa."
      },
      {
        "id": 16602,
        "title": "Khorasi",
        "content": "Ndinouya,\nMambo kwo`ri;\nNdicheneswe zvino\nNgengazi yako."
      },
      {
        "id": 16603,
        "title": "Stanza 2",
        "content": "Nezvishaishi\nZvinondinyisa;\nNdinoza, Jesu, kwo�ri,\nUndiponese."
      },
      {
        "id": 16604,
        "title": "Stanza 3",
        "content": "NdiJesu Mambo,\nNgandimuteere;\nUnozonyararisa\nKuchema kwangu."
      },
      {
        "id": 16605,
        "title": "Stanza 4",
        "content": "Unovadana,\nVanokushata;\nVangaponeswa ndiye,\nVaone nyasha."
      },
      {
        "id": 16606,
        "title": "Stanza 5",
        "content": "Usina simba,\nNgaaze kwa`ri.\nAsie kushaisha,\nAkungurirwe."
      },
      {
        "id": 16607,
        "title": "Stanza 6",
        "content": "Tendanyi ngazi,\nTendanyi nyasha,\nTendanyi Jesu, Mambo,\nM`ponesi wedu."
      }
    ]
  },
  {
    "id": 167,
    "number": 167,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Murapi wemimwoyo",
    "stanzas": [
      {
        "id": 16701,
        "title": "Stanza 1",
        "content": "Murapi wemimwoyo\nUriyo pedo pedu,\nNdiJesu une nyasha,\nUri Muponesi wedu."
      },
      {
        "id": 16702,
        "title": "Khorasi",
        "content": "Amuna nyanga muno,\n\nAmuna nemugore;\nNdiye unorapa,\nNdiye Jesu ega."
      },
      {
        "id": 16703,
        "title": "Stanza 2",
        "content": "Nezina rake ndikwo\nKugonda kweshe kwangu;\nNengazi yake\nInosukisa kweshe kwangu.'"
      },
      {
        "id": 16704,
        "title": "Stanza 3",
        "content": "Vakoma veshe,\nNgatimutende Muponesi.\nVakunda veshe vedu,\nNgatimuirikidze."
      },
      {
        "id": 16705,
        "title": "Stanza 4",
        "content": "Ngokugumeyo kwedu,\nMudenga kanyi kwedu;\nTinoritenda zina\nRaMambo wedu Jesu."
      }
    ]
  },
  {
    "id": 168,
    "number": 168,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ngorudo rwake Jesu ndinozoemba",
    "stanzas": [
      {
        "id": 16801,
        "title": "Stanza 1",
        "content": "Ngorudo rwake Jesu\nNdinozoemba,\nNgenyasha dzandikweya\nKumuzi wake zve.\nMuurefu noudzamu\nKwenyasha dzake,\nKupinda ruandhle,\nNdinozomukudza."
      },
      {
        "id": 16802,
        "title": "Khorasi",
        "content": "Jesu wakapinda\nZveshe ngamakore eshe,\nWakanakisisa, Zve unogondeka,\nJesu une nyasha."
      },
      {
        "id": 16803,
        "title": "Stanza 2",
        "content": "Munyika yeJudhia Jesu\nWakahamba,\nMbungano yakauya\nKudzidza kwaari;\n\nWakarapa vamapere\nNavakaita mapofu,\nNazvino mwoyo wake\nUnoda veshe."
      },
      {
        "id": 16804,
        "title": "Stanza 3",
        "content": "Rwaia rudo rwake\nRwakatifira,\nWakatambudzika yaemho\nPamuchinjiko,\nNavo vakatanga kare\nTinozoemba navo,\nTinozomukudza\nNgerudo rwake"
      }
    ]
  },
  {
    "id": 169,
    "number": 169,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Uri njira yakanaka",
    "stanzas": [
      {
        "id": 16901,
        "title": "Stanza 1",
        "content": "Uri njira yakanaka,\nJesu Mambo, Mwariwe;\nNdiwe wega ndaponeswa\nKushaisha kweshe."
      },
      {
        "id": 16902,
        "title": "Khorasi",
        "content": "Ndopeneswa ngezwi\nRako rakaereketwa;\nNdaponeswa ndiyo ngazi\nYakaparadzika."
      },
      {
        "id": 16903,
        "title": "Stanza 2",
        "content": "Mazwi ako emashwiro\nNgaadzake,\nMambowe,\nAchenese mwoyo wangu,\nKujekiswe kweshe."
      },
      {
        "id": 16904,
        "title": "Stanza 3",
        "content": "Ndiwe rwizi rwokupona,\nJesu, Mambo, Mwariwe;\nTakapuwe mvura yarwo,\nTaponeswa teshe."
      },
      {
        "id": 16905,
        "title": "Stanza 4",
        "content": "Ndizvo ngatimukurise\nJesu Mambo, Mwariwe;\n\nTimutende,\nTimudire ngamazuva eshe"
      }
    ]
  },
  {
    "id": 170,
    "number": 170,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Andinazve Kungwara",
    "stanzas": [
      {
        "id": 17001,
        "title": "Stanza 1",
        "content": "Andinazve Kungwara\nKuzia rudo rwake;\nChendinozia ichi,\nUriyo Muponesi."
      },
      {
        "id": 17002,
        "title": "Stanza 2",
        "content": "Ndinoagonda mazwi\nKuti wakatifira;\nNdinozomuda Jesu,\nAye M`ponesi wangu."
      },
      {
        "id": 17003,
        "title": "Stanza 3",
        "content": "Wakarisia kanyi\nkufira vashaishi;\nZvinoshamisa iwe\nNeniwo ndishama."
      },
      {
        "id": 17004,
        "title": "Stanza 4",
        "content": "NdiJesu uri njira\nYokwenda ndiyo m`gore;\nApanazve imweni,\nAye njira ega."
      },
      {
        "id": 17005,
        "title": "Stanza 5",
        "content": "Mukufa nokupona\nNdinozogara naye;\nNgokuti wakamuka,\nNdizvo ndinozomuka."
      }
    ]
  },
  {
    "id": 171,
    "number": 171,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ngorudo rwoM`ponesi",
    "stanzas": [
      {
        "id": 17101,
        "title": "Stanza 1",
        "content": "Ngorudo rwoM`ponesi\nTinoemba teshe,\nNgenyasha dzake huru\ndzisingaerengwi;\nKukuru nokudzama\nKunopinda ruahle,\n\nNedenga rinonyiswa\nNgorudo rwaJesu."
      },
      {
        "id": 17102,
        "title": "Khorasi",
        "content": "Rudo rwake rukurutu\nRunotidakadisa;\nRudo rwake Jesu\nRwakakurisisa\nRunotidakadzisa"
      },
      {
        "id": 17103,
        "title": "Stanza 2",
        "content": "Kunyika yeJudhia\nWakavahambira;\nNavanhu vakaona\nMishando yesimba,\nMapofu akaona,\nZvirema zvakahamba;\nNomwoyo wake Jesu\nWaia nenyasha."
      },
      {
        "id": 17104,
        "title": "Stanza 3",
        "content": "Ngorudo wakatenda\nKutikungurira\nKutwara muchinjiko\nEchitambudzika.\nVakaponeswa veshe,\nNgavariirikidze\nZina raJesu Kristu\nMuponesi wavo"
      }
    ]
  },
  {
    "id": 172,
    "number": 172,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Nyasha hurutu dzaMambo",
    "stanzas": [
      {
        "id": 17201,
        "title": "Stanza 1",
        "content": "Nyasha hurutu dzaMambo,\nNyasha dzkapinda kushata\nsei padunhu reKalvari,\nTakaripirwa ngengazi."
      },
      {
        "id": 17202,
        "title": "Khorasi",
        "content": "Nyasha! Nyasha!\nNyasha dzasuka mukati.\nNyasha! Nyasha!\nNyasha dzapinda kushata."
      },
      {
        "id": 17203,
        "title": "Stanza 2",
        "content": "Takasvipiswa munyika;\nTingaitenyi kudetswa?\nRingira rwizi rwengaziyo,\nTinozochena nyamashi."
      },
      {
        "id": 17204,
        "title": "Stanza 3",
        "content": "Nyasha dzisina magumo\ndzinozopuwa vatendi.\nHope yaJesu toonawo;\nMumuashire nyamashi."
      }
    ]
  },
  {
    "id": 173,
    "number": 173,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Zvinozve Mweya uya",
    "stanzas": [
      {
        "id": 17301,
        "title": "Stanza 1",
        "content": "Zvinozve mweya uya,\nSvika kwendiiri;\nNgesimba udzimuse,\nMumwoyo yedu.\nNga`wo mazuva `nhani,\nVanhu vakaponeswa,\nMweya wakada isu,\nTakadya naye pfuma."
      },
      {
        "id": 17302,
        "title": "Khorasi",
        "content": "Zvinozve Mweya uya,\nSvika kendiri;\nNgesimba udzimuse,\nMumwoyo yedu."
      },
      {
        "id": 17303,
        "title": "Stanza 2",
        "content": "Tauya tariarwa,\nNgokunonoka;\nNomweya takam`dusa\nNgokushaisha.\nNemwoyo yeshe yedu\nInokutambudzika.\nNdaa dzedu dziripire,\nUya mumwoyo yedu"
      },
      {
        "id": 17304,
        "title": "Stanza 3",
        "content": "Utionise zvino\nKushata kwedu;\nUduse zvishaishi\nZvinotirasha;\nMweyazve wakanaka,\n\nGara pakati pedu;\nNgesimba udzimuse,\nMumwoyo mweshe mwedu."
      }
    ]
  },
  {
    "id": 174,
    "number": 174,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Nyika inondidaidza",
    "stanzas": [
      {
        "id": 17401,
        "title": "Stanza 1",
        "content": "Nyika inondidaidza,\nNdodo kudai ndiJesu.\nZviro zvenyika zvisabata,\nNdodo kudai ndiJesu."
      },
      {
        "id": 17402,
        "title": "Khorasi",
        "content": "Ita kudai ndiJesu,\nPakanyi nepavanhu.\nIta zuva reshe,\nIta kudai ndiJesu."
      },
      {
        "id": 17403,
        "title": "Stanza 2",
        "content": "Wakanyisa kushaisha,\nNdodo kudai ndiJesu.\nMwoyo unoda kumushandira,\nNdodo kudai ndiJesu."
      },
      {
        "id": 17404,
        "title": "Stanza 3",
        "content": "Njira yeshe mudengomwo,\nNdodo kudai ndiJesu.\nNdodo kuronza ndiMuponesi,\nNdodo kudai ndiJesu."
      },
      {
        "id": 17405,
        "title": "Stanza 4",
        "content": "Kuti ndimuone mudenga,\nNdodo kudai ndiJesu.\nNdinoda kuzwa, Wakanasa\nNdodo kudai ndiJesu."
      }
    ]
  },
  {
    "id": 175,
    "number": 175,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Uya, Mweya wakanaka",
    "stanzas": [
      {
        "id": 17501,
        "title": "Stanza 1",
        "content": "Uya, Mweya wakanaka,\nUya, uzogara nesu;\nIsu tinokuemera,\nMambo utitende."
      },
      {
        "id": 17502,
        "title": "Khorasi",
        "content": "Mweya wakanaka,\nGara nesu;\nIsu tinokuda Mambo,\nGara nesu."
      },
      {
        "id": 17503,
        "title": "Stanza 2",
        "content": "Uri Mweya wekaretu,\nEya, auzikubarwa;\nAsi tino kushaisa,\nTino kufa teshe."
      },
      {
        "id": 17504,
        "title": "Stanza 3",
        "content": "Uri Mweya wokudana,\nIwe unoite nyasha;\nKurashika tinowanza,\nTingarashwa teshe."
      }
    ]
  },
  {
    "id": 176,
    "number": 176,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Panga mazwi kwao",
    "stanzas": [
      {
        "id": 17601,
        "title": "Stanza 1",
        "content": "Panga mazwi kwao,\nMazwi okupona;\nIzwa mazwi kwao,\nMazwi okupona,\nMazwi akanaka,\nAdzidzisa veshe."
      },
      {
        "id": 17602,
        "title": "Khorasi",
        "content": "Anakazve, azwikazve,\nMazwi okupona;\nAnakazve,\nAzwikazve,\nMazwi kwo."
      },
      {
        "id": 17603,
        "title": "Stanza 2",
        "content": "Jesu unovapa\nMazwi okupona,\nVashaishi veshezve,\nMazwi akanaka,\nAdzidzisa veshe."
      },
      {
        "id": 17604,
        "title": "Stanza 3",
        "content": "Akanaka mazwiwo,\nMazwi okupona,\nVeshe vosunhurwa,\n\nMazwi okupona,\nMazwi akanaka,\nAdzidzisa veshe."
      }
    ]
  },
  {
    "id": 177,
    "number": 177,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Uri pano, Mwari wedu",
    "stanzas": [
      {
        "id": 17701,
        "title": "Stanza 1",
        "content": "Uri pano Mwari wedu,\nWokutiponesa,\nKudurura Mweya wake\nKuti ticheneswe."
      },
      {
        "id": 17702,
        "title": "Khorasi",
        "content": "Ngatimuzwe, timutende,\nTidakare ndiye,\nUri pano,\nMwari wedu,\nUya kwa`ri zvino."
      },
      {
        "id": 17703,
        "title": "Stanza 2",
        "content": "Uri pano, Mwari wedu,\nWokutisunhura,\nKushaisha kwedu kweshe\nNgezwi rake guru."
      },
      {
        "id": 17704,
        "title": "Stanza 3",
        "content": "Uri pano, Mwari wedu,\nWokutingwarira,\nTisazofa muchidima,\nAsi tijekiswe."
      },
      {
        "id": 17705,
        "title": "Stanza 4",
        "content": "Uri pano, Mwari wedu,\nTinogonda kwa`ri,\nTipfaiswe zvinopano,\nKuti tikuriswe."
      }
    ]
  },
  {
    "id": 178,
    "number": 178,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Dakaranyi, dakaranyi inouya nguva",
    "stanzas": [
      {
        "id": 17801,
        "title": "Stanza 1",
        "content": "Dakaranyi, dakaranyi\nInouya nguva!\nDakaranyi, dakaranyi\nKwomera m`shango;\n\nNgatidaidze, tiende, (2)\nKwaJehovha, tim`kurise."
      },
      {
        "id": 17802,
        "title": "Stanza 2",
        "content": "Dakaranyi, dakaranyi,\nUnotuma mazwi!\nDakaranyi, dakaranyi,\nYopona nyika!\nDzinoronzerwa nyikazve; (2)\nDzavanhu veshe venyika."
      },
      {
        "id": 17803,
        "title": "Stanza 3",
        "content": "Dakaranyi, dakaranyi,\nInouya nguva!\nDakaranyi, dakaranyi,\nKwomera m`shango;\nNevanhu vakaparadzwa, (2)\nVeJubile vazoemba."
      }
    ]
  },
  {
    "id": 179,
    "number": 179,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Wakachena Mambo M`kuru",
    "stanzas": [
      {
        "id": 17901,
        "title": "Stanza 1",
        "content": "Wakachena Mambo, m`kuru,\nEmbai vanhu, mum`kurise;\nNemitunhu ngaihute,\nNemitunhu ngaiembe.\nWakangwara une nyasha\nM`kuru Jehovha Mambo."
      },
      {
        "id": 17902,
        "title": "Khorasi",
        "content": "Wakachena Mambo m`kuru\nNemitunhu ngaidakare."
      },
      {
        "id": 17903,
        "title": "Stanza 2",
        "content": "Mukudzei, muakare\nImwi vanhu varim`nyika;\nKushaisha nakwo kufa\nKunopedzwa ndiye Mambo;\nMukudzeiwo ngirosi,\nMunomuona m`gore"
      },
      {
        "id": 17904,
        "title": "Stanza 3",
        "content": "Unom`chena Mambo wedu;\nVana vake ngavam`kudze;\nVeshe vanomuda zvino,\n\nVanozodakara ndiye,\nVanozochema pakumuka,\nVanozotodza Mwari."
      }
    ]
  },
  {
    "id": 180,
    "number": 180,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ngatim`kudze, ngatim`kudze",
    "stanzas": [
      {
        "id": 18001,
        "title": "Stanza 1",
        "content": "Ngatim`kudze, ngatim`kudze,\nJesu, Muponesi wedu. (2)"
      },
      {
        "id": 18002,
        "title": "Khorasi",
        "content": "Haleluya, Haleluya,\nJesu, Muponesi wedu. (2)"
      },
      {
        "id": 18003,
        "title": "Stanza 2",
        "content": "Ndiye Mambo, ndiye Mambo,\nJesu, Muponesi wedu. (2)"
      },
      {
        "id": 18004,
        "title": "Stanza 3",
        "content": "Unouya, unouya,\nJesu, Muponesi wedu. (2)"
      },
      {
        "id": 18005,
        "title": "Stanza 4",
        "content": "Tinom`ona tinom`ona,\nJesu, Muponesi wedu. (2)"
      },
      {
        "id": 18006,
        "title": "Stanza 5",
        "content": "Ngauye, ngaauye,\nJesu, Muponesi wedu. (2)"
      },
      {
        "id": 18007,
        "title": "Stanza 6",
        "content": "Atitore, atitore,\nJesu, Muponesi wedu. (2)"
      }
    ]
  },
  {
    "id": 181,
    "number": 181,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Purutanyi, Purutanyi",
    "stanzas": [
      {
        "id": 18101,
        "title": "Stanza 1",
        "content": "Purutanyi, purutanyi\nMashoko aMwari;\nTenderanyi vanhu veshe,\nTimutende"
      },
      {
        "id": 18102,
        "title": "Khorasi",
        "content": "Hekani, hekani,\nNyasha huru dzaJesu.\n\nNgatitende nyamashi,\nTimutende."
      },
      {
        "id": 18103,
        "title": "Stanza 2",
        "content": "Wakafira, wakafira\nKushaisha kwedu;\nTaponeswa kwokushata\nTazopona"
      },
      {
        "id": 18104,
        "title": "Stanza 3",
        "content": "Uripano, uripano\nNavanhu vomuno;\nVanohamba ndiyo njira\nYakanaka."
      },
      {
        "id": 18105,
        "title": "Stanza 4",
        "content": "Ngatitende, ngatitende\nM`ponesi ndiJesu;\nNgatimude, timudire\nNgamazuva."
      }
    ]
  },
  {
    "id": 182,
    "number": 182,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Dakaranyi kwaJehovha",
    "stanzas": [
      {
        "id": 18201,
        "title": "Stanza 1",
        "content": "Dakaranyi kwaJehovha,\n`Mwomunyika mweshe;\nMumudire, mumutende,\nMudakare ndiye."
      },
      {
        "id": 18202,
        "title": "Khorasi",
        "content": "Uri Mambo, E Jehovha\nUri muiti wedu;\nWotibata ngokunaka\nTiri vanhu vako."
      },
      {
        "id": 18203,
        "title": "Stanza 2",
        "content": "Poteranyi, mumudire,\nMuende pachimana\nDakaranyi, mumutende,\nMum`kurise zvino"
      },
      {
        "id": 18204,
        "title": "Stanza 3",
        "content": "Wakanaka. E Jehovha,\nNgechakwadi nyasha,\nKugwinyisa kwagara,\n\nMuno akuperi."
      }
    ]
  },
  {
    "id": 183,
    "number": 183,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Hama dzedu, ngatitende Jesu",
    "stanzas": [
      {
        "id": 18301,
        "title": "Stanza 1",
        "content": "Hama dzedu, ngatitende Jesu\nTeshe ngatidire Jesu ega;\nEya tiponeswe mwoyo yedu,\nTechigarisika."
      },
      {
        "id": 18302,
        "title": "Khorasi",
        "content": "Teshe ngatitende Jesu, (3)\nTiponeswe ndiye."
      },
      {
        "id": 18303,
        "title": "Stanza 2",
        "content": "Teshe ngatireke namazinda,\nNavadzimu vedu veshe, veshe,\nEya namanhiki eshe, eshe,\nTechidira Jesu."
      },
      {
        "id": 18304,
        "title": "Stanza 3",
        "content": "Zvino veshe vanodira Jesu,\nUri Muponesi wedu ega;\nEya, vanoona kudakara,\nKunoti nekare."
      },
      {
        "id": 18305,
        "title": "Stanza 4",
        "content": "Ona, kufa akuchazonyisi\nAvo vanodira Jesu ega;\nEya, vanogara kuna Mwari,\nKarekare kweshe."
      }
    ]
  },
  {
    "id": 184,
    "number": 184,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndinouya namashoko, Haleluya",
    "stanzas": [
      {
        "id": 18401,
        "title": "Stanza 1",
        "content": "Ndinouya namashoko\n Haleluya,\nNdina mazwi akanaka:\nJesu wakafira vanhu.\n Haleluya,\nMuringise unopona."
      },
      {
        "id": 18402,
        "title": "Khorasi",
        "content": "Ringiranyi mweshemwo\n\nKuna Jesu wenyuhe;\nAvo vanotenda Jesu,\nHaleluya,\nVanozopona hama dzangu."
      },
      {
        "id": 18403,
        "title": "Stanza 2",
        "content": "Ndinouya namashoko\n Haleluya,\nAkanaka kakurutu;\nJesu wangu unondida,\n Haleluya,\nNdinomuda kakurutu."
      },
      {
        "id": 18404,
        "title": "Stanza 3",
        "content": "Jesu Kristu unondida\n, Haleluya,\nNdinodira Jesu wangu;\nNdinotenda izwi rake,\n Haleluya,\nMweya wangu unopona."
      }
    ]
  },
  {
    "id": 185,
    "number": 185,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndione, Baba, ndidzo nyasha dzako",
    "stanzas": [
      {
        "id": 18501,
        "title": "Stanza 1",
        "content": "Ndione, Baba, ndidzo\nNyasha dzako,\nDziduse zvishaishi zvangu;\nNgengazi yake yoM`kororo wako,\nUpurutane izwi rangu."
      },
      {
        "id": 18502,
        "title": "Stanza 2",
        "content": "Ndinakwo, Mambozve,\nKushata hakwo,\nAndingasuki mwoyo wangu;\nNdagonda nyasha adzo\nDzako dzega\nKukungurira ndaa dzangu."
      },
      {
        "id": 18503,
        "title": "Stanza 3",
        "content": "Kushata kweshe uku\nKwandaita,\nKwashata kweshe m`hope mwangu;\nNdarunzikira zveshe zvandaita.\nYarema ndizvo ndaa yangu."
      },
      {
        "id": 18504,
        "title": "Stanza 4",
        "content": "Ndikungurire ini nanyamashi\nNgengazi yoM`ponesi wangu;\nNdamuzwa neni nokutenda ndiyo\nNdoda kudanzwa ndiye\nMambo."
      }
    ]
  },
  {
    "id": 186,
    "number": 186,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kuponeswa kwanaka",
    "stanzas": [
      {
        "id": 18601,
        "title": "Stanza 1",
        "content": "Kuponeswa kwanaka,\nNgokuzwisa kwedu;\nNdizvo tiponeswe\nNdikwo kushaisha kwedu."
      },
      {
        "id": 18602,
        "title": "Khorasi",
        "content": "Mudirenyi, mudirenyi,\nMune wesimba,\nmudirenyi, ngatitende,\nNgatitende, ngatidire Jesu."
      },
      {
        "id": 18603,
        "title": "Stanza 2",
        "content": "Takadzirashira teshe,\nMukushata kwedu;\nKana isu tazoduswa,\nKani inga tafa."
      },
      {
        "id": 18604,
        "title": "Stanza 3",
        "content": "Kuponeswa ngakutendwe,\nNdiyo nyika yeshe;\nNomugore kunotendwa,\nNgavarimwo veshe."
      }
    ]
  },
  {
    "id": 187,
    "number": 187,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndapota Jesu",
    "stanzas": [
      {
        "id": 18701,
        "title": "Stanza 1",
        "content": "Ndapota Jesu,\nMuripiri;\nNdapota Mambo\nUne nyasha"
      },
      {
        "id": 18702,
        "title": "Khorasi",
        "content": "Ndapota Mambo wangu,\nJesu Muponesi,\nWanditiire nyasha,\n\nNdaza kwo�ri."
      },
      {
        "id": 18703,
        "title": "Stanza 2",
        "content": "Ndapota hangu,\nWandidetsa;\nNdapota aye\nwandibata."
      },
      {
        "id": 18704,
        "title": "Stanza 3",
        "content": "Ndapota Jesu\nWandizwira;\nNdapota Jesu,\nNdaponeswa."
      },
      {
        "id": 18705,
        "title": "Stanza 4",
        "content": "Neimwimwi izwai,\nNgezuvero;\nMudzidetsere,\nDzichemere."
      },
      {
        "id": 18706,
        "title": "Stanza 5",
        "content": "Mupote, Mambo Jesu,\nMuripi wenyu;\nWomuitire nyasha,\nTenderanyi."
      }
    ]
  },
  {
    "id": 188,
    "number": 188,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Tinoata zvino, Baba",
    "stanzas": [
      {
        "id": 18801,
        "title": "Stanza 1",
        "content": "Tinoata zvino Baba,\nTinotenda kwo�ri;\nUtingwarirewo, Baba,\nTinokugondawo."
      },
      {
        "id": 18802,
        "title": "Khorasi",
        "content": "Baba, Baba, tinogonda,\nTinogonda kwo�ri;\nBaba, tipe kuzorora,\nTinogonda kwo�ri."
      },
      {
        "id": 18803,
        "title": "Stanza 2",
        "content": "Zuva iri tozopona,\nTangwarirwa ndiwe;\nTiitire nyasha, Baba,\nTinokukumbira."
      },
      {
        "id": 18804,
        "title": "Stanza 3",
        "content": "Tine zvishaishi, Baba,\nTinochema ndizvo;\nUya, utidetse, Baba,\nZvibve pedo pedu."
      }
    ]
  },
  {
    "id": 189,
    "number": 189,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndinoenda kuri",
    "stanzas": [
      {
        "id": 18901,
        "title": "Stanza 1",
        "content": "Ndinoenda kuri\nKwousikaoni?\nNdinohwara kuri\nKwousikabati?"
      },
      {
        "id": 18902,
        "title": "Khorasi",
        "content": "Ndapota hangu,\nNdapota Jesu,\nNdapota hangu, Andina zano."
      },
      {
        "id": 18903,
        "title": "Stanza 2",
        "content": "Kuti nd`ende m`gore,\nUri pedo apo:\nKuti ndiende m`rindi,\nWondiona iyo."
      },
      {
        "id": 18904,
        "title": "Stanza 3",
        "content": "Jesu Mwan`aMwari,\nNdiponese hangu;\nNyasha dzako dzega,\nAndichina zano."
      },
      {
        "id": 18905,
        "title": "Stanza 4",
        "content": "Kuziyoku kwako\nKunotishamisa;\nNokutenda kwako\nKutifira teshe."
      }
    ]
  },
  {
    "id": 190,
    "number": 190,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Nyika iyi ngeyaMwari nezvisikwa zvake",
    "stanzas": [
      {
        "id": 19001,
        "title": "Stanza 1",
        "content": "Nyika iyi ngeyaMwari\nNezvisikwa zvake,\nZvinokudza Mambo munyika yeshe.\n\nInyika yake,\nNdinodakara kuona\nDenga nendwizi,\nZvisika zvake."
      },
      {
        "id": 19002,
        "title": "Stanza 2",
        "content": "Nyika iyi ngeyaMwari,\nDzinoemba shiri,\nKuedza namaruva anomukudza.\nInyika yake,\nUnojekisa mumwenje\nUnoonwawo nomuugaro hweshe."
      },
      {
        "id": 19003,
        "title": "Stanza 3",
        "content": "Nyika iyi ngeyaMwari,\nNdisariarwa mukuru\nUnotonga munyika dzeshe.\nInyika yake,\nWanyisa zveshe,\nMudenga vanomukudza\nNomunyika dzeshe."
      }
    ]
  },
  {
    "id": 191,
    "number": 191,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mambo Jesu unozoza",
    "stanzas": [
      {
        "id": 19101,
        "title": "Stanza 1",
        "content": "Mambo Jesu unozoza\nKuti zuva raguma,\nRukuunza veshe vanhu\nMberi kwake Mutongi.\nNeniwo! Neniwo!\nUnozonditorawo."
      },
      {
        "id": 19102,
        "title": "Stanza 2",
        "content": "Mambo Jesu unochada\nKuti atiponese;\nUnozovaramba veshe kuti\nNguva yapinda.\nNeniwo! Neniwo!\nUnozondirambawo."
      },
      {
        "id": 19103,
        "title": "Stanza 3",
        "content": "Mambo Jesu ndiye\nNjira yokuenda mudenga;\nUnozovatenda veshe\nVanouya kwaari.\n\nNeniwo! Neniwo!\nUnozonditendawo"
      }
    ]
  },
  {
    "id": 192,
    "number": 192,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Uponese, Mambo wangu",
    "stanzas": [
      {
        "id": 19201,
        "title": "Stanza 1",
        "content": "Uponese, Mambo wangu,\nMwoyo wangu;\nNdiwe une simba\nWega rokuponesa."
      },
      {
        "id": 19202,
        "title": "Khorasi",
        "content": "Ndiponese, Jesu\nM`ponesi wangu;\nO Mambo Jesu,\nNdiite wako."
      },
      {
        "id": 19203,
        "title": "Stanza 2",
        "content": "Ndiponese, Mambo wangu,\nNdicheneswe;\nZvendinoda ngandireke,\nNdikude Jesu."
      },
      {
        "id": 19204,
        "title": "Stanza 3",
        "content": "Kungurira, Mambo wangu,\nNdaa dzangu;\nNgandireke zvakashata,\nZvendinoita."
      }
    ]
  },
  {
    "id": 193,
    "number": 193,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Usazondisiya Jesu",
    "stanzas": [
      {
        "id": 19301,
        "title": "Stanza 1",
        "content": "Usazondisiya Jesu,\nWechindizwa;\nApo wovadana vamwe,\nUzondizwa."
      },
      {
        "id": 19302,
        "title": "Khorasi",
        "content": "Muponesi wechindizwa;\nApo wovadana vamwe,\nUzondizwa."
      },
      {
        "id": 19303,
        "title": "Stanza 2",
        "content": "Pachigaro choumambo,\n\nNdinoza`po;\nNdogwadama mberi kwako,\nWechindizwa."
      },
      {
        "id": 19304,
        "title": "Stanza 3",
        "content": "Ndinogonda mazwi ako,\nAonisa zveshe zvounoda pano,\nNdizviite."
      },
      {
        "id": 19305,
        "title": "Stanza 4",
        "content": "Ndiwe une pfuma\nYangu nayo njira;\nNdizvo ndinoketeera\nNdize kwo�ri."
      }
    ]
  },
  {
    "id": 194,
    "number": 194,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Izwa mununuri wedu",
    "stanzas": [
      {
        "id": 19401,
        "title": "Stanza 1",
        "content": "Izwa mununuri wedu,\nIzwa kudaidza;\nIsu tinochema teshe\nTinokutya teshe."
      },
      {
        "id": 19402,
        "title": "Khorasi",
        "content": "Isu teshe tino\nKushaisha;\nJesu, iwe wega\nUngatiponesa."
      },
      {
        "id": 19403,
        "title": "Stanza 2",
        "content": "Inga ticharamba iwe,\nIzwi razoguma;\nApo isu taidaro,\nTazozia ndiri."
      },
      {
        "id": 19404,
        "title": "Stanza 3",
        "content": "Ndikwo kukasira\nKwedu nokuramba kwedu;\nMwoyo wedu yakakonza,\nTakarashika ndikwo."
      },
      {
        "id": 19405,
        "title": "Stanza 4",
        "content": "Zvino isu tazoona,\nZvino tazvirasha zveshe\nIzvo zvishaishi,\n\nZviri `mberi kwedu."
      },
      {
        "id": 19406,
        "title": "Stanza 5",
        "content": "Mambo, tingachazodini?\nWotikungurira,\nTiashidzwe ngazi yako,\nTiponeswe ndiyo."
      }
    ]
  },
  {
    "id": 195,
    "number": 195,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndibate nyara, ndiri mwana m`doko",
    "stanzas": [
      {
        "id": 19501,
        "title": "Stanza 1",
        "content": "Ndibate nyara,\nNdiri mwana m`doko,\nAndingahambi ini ndega,\nNdibate nyara ,\nNdizvo ndisazotya kuti\nNdinewe, Jesu Mambo."
      },
      {
        "id": 19502,
        "title": "Stanza 2",
        "content": "Ndibate nyara,\nNdikwedzere kwo�ri.\nNdione simba rokunyisa;\nNdibate nyara kuti\nNdisabira munjira yako,\nJesu Mambo."
      },
      {
        "id": 19503,
        "title": "Stanza 3",
        "content": "Ndibate nyara,\nNjira yakasvipa,\nNdingaoni ini ndega,\nNgokuti ndiwe wakahamba ndiyo,\nNdizvo ndinoda nyara yako."
      },
      {
        "id": 19504,
        "title": "Stanza 4",
        "content": "Ndibate nyara\nYangu apo ndofa,\nNdoza kwouri, Jesu Mambo,\nNgandizorizwa\nizwi rako, Mambo,\nRechindidana kuza kwo�ri."
      }
    ]
  },
  {
    "id": 196,
    "number": 196,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Toenda kuri Mwari?",
    "stanzas": [
      {
        "id": 19601,
        "title": "Stanza 1",
        "content": "Toenda kuri Mwari?\nUri Baba wedu.\nNdiani wotidetsa?\nTinopenya kwo�ri;\nWakasika zviro zveshe,\nWakatiitahe.\nWatuma Mambo Jesu.\nTiponeswe ndiye."
      },
      {
        "id": 19602,
        "title": "Stanza 2",
        "content": "Auriarwi iwe,\nUne simba reshe,\nNovaona veshe,\nUnovaziahe;\nTibate nesu, Mambo,\nTikwee kwo�rihe,\nTivenekere Mambowe.\nNgokujeka kwako."
      },
      {
        "id": 19603,
        "title": "Stanza 3",
        "content": "Ti`tire nyasha, Jesu,\nMukuhamba mwedu.\nTiregerere, Jesu,\nKushaisha kwedu,\nTibate tisazowa,\nTisahwirirahe,\nt`ashe mudengomwo,\nkuzogara newe."
      }
    ]
  },
  {
    "id": 197,
    "number": 197,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mavimbi ezviedzo",
    "stanzas": [
      {
        "id": 19701,
        "title": "Stanza 1",
        "content": "Mavimbi ezviedzo\nAwanda kundinyisa,\nNesimbazve ropera\nNokutya kuri neni;\nNdirangarire Mambo.(2)"
      },
      {
        "id": 19702,
        "title": "Stanza 2",
        "content": "Nendozwa chipambano\nNokuti chinorema,\nHendodo kuchireka,\nNgokutya kuremerwa;\nNdirangarire, Mambo.(2))"
      },
      {
        "id": 19703,
        "title": "Stanza 3",
        "content": "Heyoza nyara svipe\nKuzondibata ini;\nHendodo kuambuka.\nMurambo wakasvipa;\nNdirangarire, Mambo.(2)"
      },
      {
        "id": 19704,
        "title": "Stanza 4",
        "content": "Heyo kwedzera nguva\nYokuza kwangu kwaari;\nHedzoungana hama,\nHendodo kudzisia;\nNdirangarire, Mambo, (2)"
      }
    ]
  },
  {
    "id": 198,
    "number": 198,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Naapo zvipupuri",
    "stanzas": [
      {
        "id": 19801,
        "title": "Stanza 1",
        "content": "Naapo zvipupuri zvotora\nMweya wangu;\nKushata kunokwira,\nMuedzi echitonga'"
      },
      {
        "id": 19802,
        "title": "Khorasi",
        "content": "Ndikarakadze, Mambo,\nNdikarakadze, Mambo."
      },
      {
        "id": 19803,
        "title": "Stanza 2",
        "content": "Naapo ndechi`mbuka\nruahle rwakashata,\nNaapo pfumvu dzarwo\nDzechida kundimedza."
      },
      {
        "id": 19804,
        "title": "Stanza 3",
        "content": "Naapo kushaisha\nKworema mwoyo wangu;\nKu`duse iwe, Baba,\nNgenyasha idzo dzako"
      },
      {
        "id": 19805,
        "title": "Stanza 4",
        "content": "Naapo nguva yangu\nYatsonga m`nyika muno;\nNgandikuone, Mambo,\nNdikwire apo kwo�ri."
      },
      {
        "id": 19806,
        "title": "Stanza 5",
        "content": "Ndiringirise kwo�ri,\nUndiponese, Mambo,\nKuchema kwangu kuzwe\nNgakusvikeyo kwo�ri"
      }
    ]
  },
  {
    "id": 199,
    "number": 199,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Nyisai kuedzwa kwenyama",
    "stanzas": [
      {
        "id": 19901,
        "title": "Stanza 1",
        "content": "Nyisai kuedzwa kwenyama,\nJesu unodetsa mwatenda,\nNyisai ngesimba raJesu,\nMuringire Jesu,\nMwodetserwawo."
      },
      {
        "id": 19902,
        "title": "Khorasi",
        "content": "Kumbirai kwaari kuti\nAmugwinyise.\nIye unodetsa, une simba."
      },
      {
        "id": 19903,
        "title": "Stanza 2",
        "content": "Sia kushata, kureya;\nNgaaremeredzwe ngesimba;\nNyisai zviedzo ndiJesu,\nMuringire Jesu,\nMwodetserwawo."
      },
      {
        "id": 19904,
        "title": "Stanza 3",
        "content": "Nyisai, mwopuwa dzungudza,\nKutenda kwonyisa zviedzo,\nTada M`ponesi, tigwinye;\nTiringe Jesu,\nTodetserwawo."
      }
    ]
  },
  {
    "id": 200,
    "number": 200,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndiri munhu wako, Jesu",
    "stanzas": [
      {
        "id": 20001,
        "title": "Stanza 1",
        "content": "Ndiri munhu wako, Jesu,\nWakandiponesazve;\nNdakasia kushaisha\nKukudira Jesuwe."
      },
      {
        "id": 20002,
        "title": "Khorasi",
        "content": "Ndiri munhu wako, Jesu,\nUnondingwarirahe;\n\nWakandiitire nyasha,\nMambo wangu, Jesuwe"
      },
      {
        "id": 20003,
        "title": "Stanza 2",
        "content": "Ndinogara, Mambo Jesu,\nNdigwinyiswe ndiwehe;\nUne simba mwoyo wangu.\nNdagwinyiswa ndiwezve."
      },
      {
        "id": 20004,
        "title": "Stanza 3",
        "content": "Ndichabata, Mambo Jesu,\nMazwi ako eshe, hai;\nNdinoenda kanyi kwangu\nKwo�ri, Jesu Mambowe."
      }
    ]
  },
  {
    "id": 201,
    "number": 201,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Tora Nyika, ndipe Jesu",
    "stanzas": [
      {
        "id": 20101,
        "title": "Stanza 1",
        "content": "Tora nyika, ndipe Jesu,\nNdodakara kwa`ri;\nNdinoona Mambo wangu\nMetsa nekaretu."
      },
      {
        "id": 20102,
        "title": "Khorasi",
        "content": "Nyasha dzake, huru huru,\nRudo rwakakura.\nRuponeso rwomunyika,\nRudo rwakakura."
      },
      {
        "id": 20103,
        "title": "Stanza 2",
        "content": "Tora nyika ndipe Jesu,\nNdanyaradzwa ndiye;\nParufambo rwomunyika\nIni andichadi"
      },
      {
        "id": 20104,
        "title": "Stanza 3",
        "content": "Tora nyika, ndipe Jesu,\nNdinogara kwa`ri;\nNyika inogumisira,\nDenga rinoguma.'"
      },
      {
        "id": 20105,
        "title": "Stanza 4",
        "content": "Asi izwi rake Jesu\nAriperi aro;\nMwoyo wangu,\n\nChingwarira\nIzwi rake Jesu."
      }
    ]
  },
  {
    "id": 202,
    "number": 202,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jesu M’sunhuri, ndiri wako wega",
    "stanzas": [
      {
        "id": 20201,
        "title": "Stanza 1",
        "content": "Jesu M`sunhuri, ndiri wako wega,\nNdinozvipira kwo�ri, Mambo,\nMukutambudzika,\nNokusvipa mwoyo\nNdinoembedzerwa\nNdiwe, Mambo."
      },
      {
        "id": 20202,
        "title": "Khorasi",
        "content": "Jesu Mambo wangu,\nZvino ndiri wako;\nUnodiwa ndini,\nUri wangu."
      },
      {
        "id": 20203,
        "title": "Stanza 2",
        "content": "Ndichakuramba, wakandida iwe,\nWakandifira pam`chinjiko.\nZvino ndasunhurwa ndiwe,\nMuponesi."
      },
      {
        "id": 20204,
        "title": "Stanza 3",
        "content": "Ndinodakara ndirwo rudo, rwako,\nNdinoshamiswa ndidzo nyasha.\nMwoyo wangu weshe ndauhina kwo�ri,\nWechitongwa ndiwe\nMambo wangu"
      },
      {
        "id": 20205,
        "title": "Stanza 4",
        "content": "Ndodokuita kuda kwako kwega;\nNdarasha zveshe zvomunyika;\nZvaindidakadza zvino ndozvisia,\nKuda kwako, Mambo,\nKwandidzadza."
      }
    ]
  },
  {
    "id": 203,
    "number": 203,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndoema patsoka dzaJesu",
    "stanzas": [
      {
        "id": 20301,
        "title": "Stanza 1",
        "content": "Ndoema patsoka dzaJesu\nWakatiripira,\n\nNdoshama ngorudo\nRukuru rwatakaoniswa."
      },
      {
        "id": 20302,
        "title": "Khorasi",
        "content": "Mushaishi, mushaishi,\nPenya rudo rwako. (2)"
      },
      {
        "id": 20303,
        "title": "Stanza 2",
        "content": "Wakavakumbirira inini,\nEchidonha ngazi,\nNdisafa munjira yokufa,\nNdipone kwaari"
      },
      {
        "id": 20304,
        "title": "Stanza 3",
        "content": "Ngirosi dzakam`kungurira,\nDzakadzaka kwa`ri;\nDzakaza kumuembedzera\nEchitambudzika."
      },
      {
        "id": 20305,
        "title": "Stanza 4",
        "content": "Ndopinda mu`mambo hwaMwari,\nNdinozomukudza;\nMudenga ndinozodakara\nKuemba kwaari"
      }
    ]
  },
  {
    "id": 204,
    "number": 204,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndine hama inondida",
    "stanzas": [
      {
        "id": 20401,
        "title": "Stanza 1",
        "content": "Ndine hama inondida,\nndiJesu Kristu,\nNgokugonda ndakasia zveshe.\nUnouya mumakore kutiashira,\nTechienda kuzogara naye."
      },
      {
        "id": 20402,
        "title": "Khorasi",
        "content": "Ndeitambudzika muno munokuedzwa,\nUnondiembedzera iye.\nUri Mambo wekupona wendinotenda.\nUnopinda kudikanwa iye."
      },
      {
        "id": 20403,
        "title": "Stanza 2",
        "content": "Unondipa zveshe,\nZveshe zvendinotama.\nUnondichenesa mwoyo wangu;\nNdinokudza iye ega munyika muno,\n\nAndisari apo, unouya."
      },
      {
        "id": 20404,
        "title": "Stanza 3",
        "content": "Aatongorambi munhu\nunokumbira;\nVangapona vanhu veshe, veshe.\nNamakorwa anotenda\nKutongwa ndiye\nUnovapa Mweya wakachena."
      }
    ]
  },
  {
    "id": 205,
    "number": 205,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Akuna hama kudai ndiJesu",
    "stanzas": [
      {
        "id": 20501,
        "title": "Stanza 1",
        "content": "Akuna hama kudai ndiJesu,\nAkuna, akuna,\nApana ungaponesa isu,\nApana, apana."
      },
      {
        "id": 20502,
        "title": "Khorasi",
        "content": "Jesu unotizia isu,\nUnozohamba nesuzve;\nAkuna hama kudai ndiJesu,\nAkuna, akuna."
      },
      {
        "id": 20503,
        "title": "Stanza 2",
        "content": "Akuna hama kudai kukura,\nAkuna, akuna,\nApana hama kudai kupfaa,\nApana, apana."
      },
      {
        "id": 20504,
        "title": "Stanza 3",
        "content": "Akuna nguva usipo nesu,\nAkuna, akuna,\nUsiku uri pasinde pedu,\nUripo, uripo."
      },
      {
        "id": 20505,
        "title": "Stanza 4",
        "content": "Akuna wakariarwa ndiye,\nAkuna, akuna,\nApana kwaari unorambwaa,\nApana, apana"
      }
    ]
  },
  {
    "id": 206,
    "number": 206,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndino M’ponesi, unondichemera",
    "stanzas": [
      {
        "id": 20601,
        "title": "Stanza 1",
        "content": "Ndino M`ponesi, unondichemera,\nShamwari ihuru munyika muno;\nParipo ngenyasha unondigarira,\nKudai angaita wako."
      },
      {
        "id": 20602,
        "title": "Khorasi",
        "content": "Ndinokuchemera, (3)\nUponeswe."
      },
      {
        "id": 20603,
        "title": "Stanza 2",
        "content": "Uripo Baba, wakandipe gonda,\nKugonda kwekare, kwopinda kuno;\nUnondidaidza, arimwo mudenga;\nKudai angaapo newe."
      },
      {
        "id": 20604,
        "title": "Stanza 3",
        "content": "Ndinaro jira rinongaikira,\nRinondishamisa rinogaramwo;\nKudai ringaapo kudaro nerako,\nKudai ringakufarisa."
      },
      {
        "id": 20605,
        "title": "Stanza 4",
        "content": "Nokunyarara, kudai ngemvura,\nAkuna kumweni, munyika muno;\nKuri kwaM`ponesi, kunogara naye;\nKudai ungatenda newe."
      }
    ]
  },
  {
    "id": 207,
    "number": 207,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndazwa Jesu wandidana",
    "stanzas": [
      {
        "id": 20701,
        "title": "Stanza 1",
        "content": "Ndazwa Jesu wandidana,\nWati, nditeere iwe;\nNdinomuteera aye\nNgamazuva angu eshe."
      },
      {
        "id": 20702,
        "title": "Khorasi",
        "content": "Ndinomuteere Jesu, (3)\nNdinoenda naye Mambo."
      },
      {
        "id": 20703,
        "title": "Stanza 2",
        "content": "Ndinoenda kuna Jesu,\nNom`chinjiko ndinotora;\nUnondiitire nyasha,\nNyasha huru, huru dzake."
      },
      {
        "id": 20704,
        "title": "Stanza 3",
        "content": "Ndomute`ra Getsemani,\nNapakutambudzikazve,\nNapakurashikwa kweshe,\nNdinomuteera kanyi."
      },
      {
        "id": 20705,
        "title": "Stanza 4",
        "content": "Ndinotenda zvirokwazvo,\nWakandipa nyasha dzake,\nWakandipa mwoyo mutsva;\nNdinotenda Jesu wangu.'"
      }
    ]
  },
  {
    "id": 208,
    "number": 208,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Paanoda Jesu ndingaenda",
    "stanzas": [
      {
        "id": 20801,
        "title": "Stanza 1",
        "content": "Paanoda Jesu ndingaenda,\nNokunyati pari pashi pano;\nPaasikahambi neni muno\nAndingadakari Jesu asipo."
      },
      {
        "id": 20802,
        "title": "Khorasi",
        "content": "Naye, naye andizotyi,\nPaanoda Jesu ndingaenda."
      },
      {
        "id": 20803,
        "title": "Stanza 2",
        "content": "Paanoda Jesu ndine hama,\nNokunyati vanhu vondisia;\nNyara ya M`ponesi yondikweya\nNeni ndina Jesu ndingakudza."
      },
      {
        "id": 20804,
        "title": "Stanza 3",
        "content": "Paanoda Jesu ndingaata,\nZviro zvechidima zvityisi;\nNdinozia kuti ndozomuka\nNdina Jesu kanyi mukupona."
      }
    ]
  },
  {
    "id": 209,
    "number": 209,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jesu unokudana",
    "stanzas": [
      {
        "id": 20901,
        "title": "Stanza 1",
        "content": "Jesu unokudana,\nMushatiwo,\nEya unokudana,\nMushatiwo,\nNguva ichakanaka,\nMushatiwo,\n\nInguva yako zvino,\nMushatiwo."
      },
      {
        "id": 20902,
        "title": "Stanza 2",
        "content": "Unoponeswa ngenyi,\nMushatiwo?\nUnozokuzorodza,\nMushatiwo.\nAkuchengedzi Jesu,\nMushatiwo,\nUnozokupa pfuma\nMushatiwo."
      },
      {
        "id": 20903,
        "title": "Stanza 3",
        "content": "Izwa, achakudana,\nMushatiwo,\nUnokupa utende,\n Mushatiwo.\nKwakare echidana,\n Mushatiwo,\nNazvino uchadana,\nMushatiwo."
      }
    ]
  },
  {
    "id": 210,
    "number": 210,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndiri mwana wakashata",
    "stanzas": [
      {
        "id": 21001,
        "title": "Stanza 1",
        "content": "Ndiri mwana wakashata,\nNdinozoza kwo�ri, Mambo;\nNdinasire undisuke;\nNdine zvidu ini;\nKwakaretu ndechiita\nZvinodiwa mwoyo wangu,\nKwo�ri Jesu ndairamba\nKuita kuda kwako."
      },
      {
        "id": 21002,
        "title": "Stanza 2",
        "content": "Ndakagarazve makore\nMazhinjitu muno m`nyika;\nIwe wakandisunhura,\nUponeswe mweya;\nWadaidza ngezwi rako\nKakurutu mwoyo wangu.\nWaitsvaka mwoyo wangu\nKuudzadza yaemho."
      },
      {
        "id": 21003,
        "title": "Stanza 3",
        "content": "zvinopano mwoyo wangu\nUnobva wakaruka,\nNgamashwiro ndinotya,\nSimba rinopera;\nBaba vangu vakanaka,\nMuonei mwana wenyu;\nNdiri pano,\n ndadzikanda\nMberi kwako, Mambo."
      }
    ]
  },
  {
    "id": 211,
    "number": 211,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Imwi mweshe mwakaremba",
    "stanzas": [
      {
        "id": 21101,
        "title": "Stanza 1",
        "content": "Imwi mweshe mwakaremba,\nMwakarashika mweshe;\nMwechizai kwaM`ponesi\nWakafira teshe.\nMwechidawo kuzoona\nKuzorora kwenyu;\nMungashambawo mugandwa\nRine ngazi yake."
      },
      {
        "id": 21102,
        "title": "Stanza 2",
        "content": "Paugaro mwarashika,\nMunopinda m`kufa;\nMwechizai zvinopano,\nMunozoponeswa;\nMambo uri mudengomwo\nKwa`ri Mambo ega;\nMuzopuwa noutende\nNdiye une nyasha."
      },
      {
        "id": 21103,
        "title": "Stanza 3",
        "content": "Mwechitenda iri izwi,\nRechakwadi rega;\nMwakapuwa mwana wake,\nMwari unomuda;\nZororai mudakare,\nMwakaremba mweshe,\nNdiwozve mumvuri wenyu\nMuzorore kwa`ri."
      },
      {
        "id": 21104,
        "title": "Stanza 4",
        "content": "Zvino dakarai mweshe,\nMuzoona muno\nKuponeswa kwakadai\nNdikwo kwomugore;\nAkupindi kushaisha,\nNousiku uhu;\nAvatami nerumvenu,\nJesu ndiye zuva."
      }
    ]
  },
  {
    "id": 212,
    "number": 212,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Dang’unaro simba iwe",
    "stanzas": [
      {
        "id": 21201,
        "title": "Stanza 1",
        "content": "Dang�unaro simba iwe,\nKumute`ra Jesu?\nDang�unaro simba iwe,\nNyika yanyasheka?\nDang�unaro simba iwe,\nWomute`ra Jesu aye,\nUnokungwarira?"
      },
      {
        "id": 21202,
        "title": "Stanza 2",
        "content": "Zvino Jesu uri m`kuru,\nKune mwoyo yedu.\nAifishi kunyarara\nMukukorwa kwako?\nNoupfumi hwomunyika\nAhudetsi chiro.\nKunosisa hake Jesu\nAzarise nyika."
      },
      {
        "id": 21203,
        "title": "Stanza 3",
        "content": "Kushaisa kweshe kwako,\nKwounakwo zvino,\nNokuramba Mambo wako,\nNgakurashwe kweshe;\nUkumbire nyasha dzake;\nKwa`ri Muponesi;\nKumbirazve naro simba,\nKumbira kwa`ri."
      },
      {
        "id": 21204,
        "title": "Stanza 4",
        "content": "Karakadza waripirwa,\nRasha zveshe zvino;\nKuti wanyatambudzika,\n\nUnozodakara,\nNaro simba waanaro\nwomute`ra Jesu;\nKutya kwako kunopera,\nJesu mungwariri."
      }
    ]
  },
  {
    "id": 213,
    "number": 213,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Uya hako kuna Jesu",
    "stanzas": [
      {
        "id": 21301,
        "title": "Stanza 1",
        "content": "Uya hako kuna Jesu,\nhounodaidzwa ndiye;\nTenda Muponesi wako,\nUitirwe nyasha."
      },
      {
        "id": 21302,
        "title": "Khorasi",
        "content": "Rasha hasha dzako dzeshe,\nUnozopera kufa ndidzo;\nUya kwaM`ponesi wako,\nUitirwe nyasha."
      },
      {
        "id": 21303,
        "title": "Stanza 2",
        "content": "Uya hako kuna Jesu,\nUya hako uchimutsva;\nUsaita zvekugara,\nUya zvino kwa`ri"
      },
      {
        "id": 21304,
        "title": "Stanza 3",
        "content": "Kumbira, unopuwa,\nWechitsvaka unoona,\nKuhudzai wobeurirwa,\nZvino zuva rako."
      }
    ]
  },
  {
    "id": 214,
    "number": 214,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Here munoitawani",
    "stanzas": [
      {
        "id": 21401,
        "title": "Stanza 1",
        "content": "Here munoitawani?\nMwodo kufa ngenyi?\nMwari wedu unobvunza,\nMwodo kufa ngenyi?\nMwangwarirwa ndini;\nAndivadi vanu here?\nAmundidi ngenyi?"
      },
      {
        "id": 21402,
        "title": "Stanza 2",
        "content": "Here munoitawani?\nMwodo kufa ngenyi?\nMuponesi unobvunza,\nMwandirasha ngenyi?\nNdakafira `mwimwi mweshe\nKuti muponeswe;\nMwondiramba zvino ngenyi?\nKana ndinomuda."
      },
      {
        "id": 21403,
        "title": "Stanza 3",
        "content": "Here munoitawani?\nMwodo kufa ngenyi?\nWeya wakachena naye\nMunom`dzinga ngenyi?\nKakaretu mwakakokwa,\nMwadaidzwa mweshe,\nMwakaronzwa ngoupona,\nKani amutendi"
      },
      {
        "id": 21404,
        "title": "Stanza 4",
        "content": "Here munoitawani?\nMwodo kufa ngenyi?\nAvo vanozofa ndikwo\nVanozotambudzwa;\nKani tenderuka hino,\nUya kwaM`ponesi ngenyi zvino\nAmutendi here?"
      }
    ]
  },
  {
    "id": 215,
    "number": 215,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Apo Gwama raJehovha rinorira muno",
    "stanzas": [
      {
        "id": 21501,
        "title": "Stanza 1",
        "content": "Apo gwama raJehovha\nRinorira muno,\nNevakafa vanomuswa naro,\nAvo vanozoponeswa\nVanozoungana,\nNamazina anozodaidzwa."
      },
      {
        "id": 21502,
        "title": "Khorasi",
        "content": "Odzaidzwa namazina, (3)\nNdinozodaira zina rangu."
      },
      {
        "id": 21503,
        "title": "Stanza 2",
        "content": "Apo Kristu unouya noutende hwake,\nNengirosi dzake huru nadzo,\n\nAvovanogonda kwa`ri vanoenda kanyi,\nNamazina anozodaidzwa."
      },
      {
        "id": 21504,
        "title": "Stanza 3",
        "content": "Ngatishande m`shando wake\nTiri muno m`nyika,\nNgatikudze rudo rwake narwo,\nNokupona kweshe kwechipera muno,\nNamazina anozodaidzwa."
      }
    ]
  },
  {
    "id": 216,
    "number": 216,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "O Mwari, ndiri pashi pano",
    "stanzas": [
      {
        "id": 21601,
        "title": "Stanza 1",
        "content": "O Mwari, ndiri pashi pano,\nO Mwari, ndiri pashi pano,\nO Mwari, ndiri pashi pano,\nKutsvake nyasha dzenyu."
      },
      {
        "id": 21602,
        "title": "Khorasi",
        "content": "Ndotenda kuna Jesu Kristu,\nNdotenda kuna Jesu Kristu,\nNdotenda kuna Jesu Kristu,\nWandipa ruponeso."
      },
      {
        "id": 21603,
        "title": "Stanza 2",
        "content": "Ndisunungurei Baba zvino (3)\nPam`soro pake Jesu"
      },
      {
        "id": 21604,
        "title": "Stanza 3",
        "content": "Kupona kwangu kwakashata, (3)\nUndipe mwoyo mutsva."
      },
      {
        "id": 21605,
        "title": "Stanza 4",
        "content": "Ndinoda simba renyu Baba (3)\nNdigare zvakanaka"
      },
      {
        "id": 21606,
        "title": "Stanza 5",
        "content": "Uyai Mweya wakachena, (3)\nMutungamiri wangu."
      },
      {
        "id": 21607,
        "title": "Stanza 6",
        "content": "Rujeko runogara neni(3)\nKupona kwangu kweshe"
      }
    ]
  },
  {
    "id": 217,
    "number": 217,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Uyai kuna M ’ ponesi",
    "stanzas": [
      {
        "id": 21701,
        "title": "Stanza 1",
        "content": "Uyai kuna M`ponesi,\nUnoemera imwimwi;\nUyai achaidza,\nMubva m`kushata."
      },
      {
        "id": 21702,
        "title": "Khorasi",
        "content": "Tinozodakara teshe,\nTaonana naye m`gore;\nTaunganidzwa ndiJesu\nMukanyi mwake."
      },
      {
        "id": 21703,
        "title": "Stanza 2",
        "content": "Tenderukai nyamashi,\nMureke kupepesheka;\nUyai mweshe kubako,\nUyai kanyi."
      },
      {
        "id": 21704,
        "title": "Stanza 3",
        "content": "Uyai, izwi raJesu\nRinomupota nazvino;\nUyai mwadaidzirwa\nNdiMuponesi."
      },
      {
        "id": 21705,
        "title": "Stanza 4",
        "content": "Uyai, musaurasha\nMuripo waakadusa;\nUyai zvino, ndiJesu\nWakamufira."
      },
      {
        "id": 21706,
        "title": "Stanza 5",
        "content": "Uyai zvino kum`dira\nMusiki wedu, mukudze;\nUyai nezvo zvipuwo\nMupe kwaari."
      }
    ]
  },
  {
    "id": 218,
    "number": 218,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Uyai kwaM’ponesi wedu",
    "stanzas": [
      {
        "id": 21801,
        "title": "Stanza 1",
        "content": "Uya kwaM`ponesi wedu,\nWoponeswa;\nKushaisha\nKwako kweshe\n\nKushambidzwe"
      },
      {
        "id": 21802,
        "title": "Khorasi",
        "content": "Muponesi une simba;\nTenda zvino ngazi yake,\nWocheneswa."
      },
      {
        "id": 21803,
        "title": "Stanza 2",
        "content": "'Uya kwaM�ponesi wedu,\nWoashirwa;\nUne nyasha, une simba,\nWozwa ndiye."
      },
      {
        "id": 21804,
        "title": "Stanza 3",
        "content": "Uya kwaM�ponesi wedu,\nPenya kwari;\nJesu ega wakufira,\nUya zvino."
      },
      {
        "id": 21805,
        "title": "Stanza 4",
        "content": "Uya kwaM�ponesi wedu,\nWakusika;\nMupe zvino mwoyo wako,\nWoponeswa"
      }
    ]
  },
  {
    "id": 219,
    "number": 219,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Pupura ndiye Jesu",
    "stanzas": [
      {
        "id": 21901,
        "title": "Stanza 1",
        "content": "Pupura ndiyeJesu,\nNdihama yako,\nDakadza mwoyo yedu,\nUnoitenyi?"
      },
      {
        "id": 21902,
        "title": "Khorasi",
        "content": "Pupura ndiye Jesu;\nTinozodetswa teshe;\nUsamuramba Jesu,\nPupura ndiye."
      },
      {
        "id": 21903,
        "title": "Stanza 2",
        "content": "Pupura ndiye Jesu,\nKushata kwako\nkwarekererwa kweshe\nNgenyasha dzake."
      },
      {
        "id": 21904,
        "title": "Stanza 3",
        "content": "Pupura ndiye Jesu,\nKwakareruka\nKutironzera teshe\nNdinoda Jesu."
      },
      {
        "id": 21905,
        "title": "Stanza 4",
        "content": "Pupura ndiye Jesu,\nNgenguvo ino;\nUnozorashikirwa\nNgokudakara."
      },
      {
        "id": 21906,
        "title": "Stanza 5",
        "content": "Pupura ndiye Jesu,\nKutenda kwako\nKunogwinyiswa ndikwo,\nMugonde Mambo."
      }
    ]
  },
  {
    "id": 220,
    "number": 220,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Techihamba mukujeka",
    "stanzas": [
      {
        "id": 22001,
        "title": "Stanza 1",
        "content": "Techihamba mukujeka\nPamutunhu mubanimwo,\nJesu wakati, andimusii\nChigondiso, gwinyiso."
      },
      {
        "id": 22002,
        "title": "Khorasi",
        "content": "Tinozohamba mukujeka,\nTinodakara mumwoyo.\nHaleluya! ndinodakara\nNdinomukudza Mambo."
      },
      {
        "id": 22003,
        "title": "Stanza 2",
        "content": "Techona madambudzo\nAtifishi M`ponesi,\nHuri kujeka hweshe ugaro\nNdinozohamba naJesu."
      },
      {
        "id": 22004,
        "title": "Stanza 3",
        "content": "Pasinde pake tinodakara,\nTinozoenda m`dengomwo,\nTinozoemba techimukudza\nMunjira mwake, Mambowe,"
      }
    ]
  },
  {
    "id": 221,
    "number": 221,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ndiye Jesu, ndiye Jesu",
    "stanzas": [
      {
        "id": 22101,
        "title": "Stanza 1",
        "content": "Ndiye Jesu, ndiye Jesu,\nUya kwa`ri zvino."
      },
      {
        "id": 22102,
        "title": "Khorasi",
        "content": "Zvino uya kwa`ri,\nUya kwa`ri zvino"
      },
      {
        "id": 22103,
        "title": "Stanza 2",
        "content": "Une simba."
      },
      {
        "id": 22104,
        "title": "Stanza 3",
        "content": "Pota kwa`ri."
      },
      {
        "id": 22105,
        "title": "Stanza 4",
        "content": "Unotenda."
      },
      {
        "id": 22106,
        "title": "Stanza 5",
        "content": "Unozozwa."
      },
      {
        "id": 22107,
        "title": "Stanza 6",
        "content": "Wokusuka."
      },
      {
        "id": 22108,
        "title": "Stanza 7",
        "content": "Gonda kwa`ri."
      },
      {
        "id": 22109,
        "title": "Stanza 8",
        "content": "Uponeswe."
      }
    ]
  },
  {
    "id": 222,
    "number": 222,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Here munhu unotwara",
    "stanzas": [
      {
        "id": 22201,
        "title": "Stanza 1",
        "content": "Here munhu unotwara\nKushaisha kwako,\nUya kwa M`ponesi wako,\nUzorodzwe ndiye."
      },
      {
        "id": 22202,
        "title": "Khorasi",
        "content": "Jesu wakafira\nKushaisha kwako.\nWakafira vanhu veshe\nKuti vaponeswe."
      },
      {
        "id": 22203,
        "title": "Stanza 2",
        "content": "Uri pano Muponesi\n\nKuponesa veshe,\nVanotenda ngazi yake\nYakaparadzika."
      },
      {
        "id": 22204,
        "title": "Stanza 3",
        "content": "Une simba reshe Jesu\nRokukugwinyisa,\nUne nyasha dzeshe Jesu\nDzokusunungura."
      },
      {
        "id": 22205,
        "title": "Stanza 4",
        "content": "Kushaisha kwako kweshe\nKungapera zvino;\nHasha dzako dzeshe nadzo\nDzingarekererwa."
      },
      {
        "id": 22206,
        "title": "Stanza 5",
        "content": "Uya kwa`ri zvino iwe,\nUdzikumbirire,\nUponeswe ndiye zvino,\nUitirwe nyasha."
      }
    ]
  },
  {
    "id": 223,
    "number": 223,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Pamutunhuwo wekalvari",
    "stanzas": [
      {
        "id": 22301,
        "title": "Stanza 1",
        "content": "Pamutunhuwo weKalvari,\nMambo Jesu wakahina\nNgazi yake pamuchinjiko\nKuripira ndaa dzangu."
      },
      {
        "id": 22302,
        "title": "Khorasi",
        "content": "PaKalvari, PaKalvari,\nNgazi yakaparadzirwa;\nPaKalvari, paKalvari,\nJesu wakakohomerwa."
      },
      {
        "id": 22303,
        "title": "Stanza 2",
        "content": "Chidima chakadzakira\nNemapuwe akamweswa,\nMukuwo waaafira\nMukororo waMarure."
      },
      {
        "id": 22304,
        "title": "Stanza 3",
        "content": "Jesu Mambo wakahina\nNgazi yake ngenyi apo,\n\nEchitwara muchinjiko\nPamutunhuwo weKalvari?"
      }
    ]
  },
  {
    "id": 224,
    "number": 224,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Isisu tasungwawo",
    "stanzas": [
      {
        "id": 22401,
        "title": "Stanza 1",
        "content": "Isisu tasungwawo,\nNgorudo rwake;\nKuzwana kwake Jesu\nUri mudengomwo."
      },
      {
        "id": 22402,
        "title": "Stanza 2",
        "content": "Padendemaropo,\nTinokumbira,\nKugonda namadambudzo,\nAnotodzanazve."
      },
      {
        "id": 22403,
        "title": "Stanza 3",
        "content": "Tinozwiranawo,\nTinotwarira,\nMadambudziko nem`sodzi,\nZviri kwo`rizve"
      },
      {
        "id": 22404,
        "title": "Stanza 4",
        "content": "Toparadzanawo,\nZvinotirwadza,\nTogonda kushongana,\nMudenga nayezve."
      }
    ]
  },
  {
    "id": 225,
    "number": 225,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mugore ndine kanyi rakanaka",
    "stanzas": [
      {
        "id": 22501,
        "title": "Stanza 1",
        "content": "Mugore ndine kanyi rakanaka,\nRandakanasirirwa kare,\nNdiJesu Musunhuri wangu ega,\nWakafira pam`chinjiko."
      },
      {
        "id": 22502,
        "title": "Stanza 2",
        "content": "Ndinodo kuti ndiashire pfuma,\nYo`garo hwomugore umwo;\nKuringiriso `tende hwake uhu\nHwehope yake,\nMusunhuri.'"
      },
      {
        "id": 22503,
        "title": "Stanza 3",
        "content": "Ngenguva ndizoenda kumudira\nNdiJesu, Mambo uno rudo;\nNdigare naye mhera nekaretu\nMukanyi rinodarisa."
      },
      {
        "id": 22504,
        "title": "Stanza 4",
        "content": "Ndizogara ndirichingwarire ,\nKutwaro muchinjiko wake,\nKuti mumhatso dziri ngapaseri\nNdinozoashidzwa `tende hwake."
      }
    ]
  },
  {
    "id": 226,
    "number": 226,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "O Mukoma, uya zvino",
    "stanzas": [
      {
        "id": 22601,
        "title": "Stanza 1",
        "content": "O Mukoma, uya zvino\nKuna Muponesi;\nZvino potawo kwaari,\nHwara kuna Jesu."
      },
      {
        "id": 22602,
        "title": "Khorasi",
        "content": "Uya zvino, uya zvino,\nUya kuna Jesu;\nUya zvino, uya zvino,\nUya kuna Jesu."
      },
      {
        "id": 22603,
        "title": "Stanza 2",
        "content": "Waihamb`ukarashikwa,\nUsazononoka.\nUsaramba nyasha dzake,\nUya kwaM�ponesi."
      },
      {
        "id": 22604,
        "title": "Stanza 3",
        "content": "Nyika aina kunyarara,\nNdizvo warunzika;\nUzorore kuna Mwari,\nWoitirwe nyasha."
      },
      {
        "id": 22605,
        "title": "Stanza 4",
        "content": "Rasha kushaisha kwako,\nTsvaka kwaari nyasha;\nNaye Jesu unokuda,\nWoponeswa ndiye"
      }
    ]
  },
  {
    "id": 227,
    "number": 227,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Baba tinounza zvipo",
    "stanzas": [
      {
        "id": 22701,
        "title": "Stanza 1",
        "content": "Baba, tinounza zvipo\nZvemishando yenyu,\nTinounza ngokufara,\nTafumiswa ndimwi;\nTipei mwoyo ine nyasha,\nKuna varashika kuti\nVanhu vane nzara,\nMungavapa zvipo."
      },
      {
        "id": 22702,
        "title": "Stanza 2",
        "content": "Asi tinotenda imwi,\nTinomuembera,\nAtimbiriarwi vamwe\nVari muchidima.\nTorai zvipo zvedu, Baba,\nTinofara kupa;\nTumai zvino vafundisi\nKuti vadzidzise."
      },
      {
        "id": 22703,
        "title": "Stanza 3",
        "content": "Zvipo zvedu zvanyamashi,\nNavarombo, detsai,\nNgazvitore rudo rwedu,\nKune vari kure.\nAvazii Mambo, Baba,\nTumai izvi zvipo\nKuna vanotamba."
      }
    ]
  },
  {
    "id": 228,
    "number": 228,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mwari, Gara nesu zvino",
    "stanzas": [
      {
        "id": 22801,
        "title": "Stanza 1",
        "content": "Mwari, gara nesu zvino,\nHamba navo vanoenda,\nSara navo vanosara;\nMwari, gara nesu teshe."
      },
      {
        "id": 22802,
        "title": "Khorasi",
        "content": "Metsa tinozoshongana kwa`ri\nJesu, Mambo ega,\nMetsa tinozoshongana;\nMwari, gara nesu nesu zvino."
      },
      {
        "id": 22803,
        "title": "Stanza 2",
        "content": "Mwari, gara nesu zvino,\nTisapindomwo mupfumvu,\nTinogonda kwo�ri, Mambo;\nMwari, gara nesu teshe."
      },
      {
        "id": 22804,
        "title": "Stanza 3",
        "content": "Mwari, gara nesu zvino,\nVangwarire vana vako;\nNgavaushwe ndiwe wega;\nMwari, gara nesu teshe."
      },
      {
        "id": 22805,
        "title": "Stanza 4",
        "content": "Mwari, gara nesu zvino,\nTipe simba rokunyisa\nZvishaishi zvomunyika;\nMwari, gara nesu teshe."
      }
    ]
  },
  {
    "id": 229,
    "number": 229,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Tenderukai vanhu veshe",
    "stanzas": [
      {
        "id": 22901,
        "title": "Stanza 1",
        "content": "Tenderukai, vanhu, mweshe, (2)\nMwari wati Tenderukai,\nMwechida kuendawo mudenga,\nMwari wati, Tenderukai"
      },
      {
        "id": 22902,
        "title": "Stanza 2",
        "content": "Tenderukai, madzimambo. (2)"
      },
      {
        "id": 22903,
        "title": "Stanza 3",
        "content": "Tenderukai, masaguta. (2)"
      },
      {
        "id": 22904,
        "title": "Stanza 4",
        "content": "Tenderukai, madzibaba. (2)"
      },
      {
        "id": 22905,
        "title": "Stanza 5",
        "content": "Tenderukai, madzimai. (2)"
      },
      {
        "id": 22906,
        "title": "Stanza 6",
        "content": "Tenderukai, vakomana. (2)"
      },
      {
        "id": 22907,
        "title": "Stanza 7",
        "content": "Tenderukai, vasikana. (2)"
      },
      {
        "id": 22908,
        "title": "Stanza 8",
        "content": "Tenderukai, vadodoko. (2)"
      }
    ]
  },
  {
    "id": 230,
    "number": 230,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Tashongana pano, Mwari womudenga",
    "stanzas": [
      {
        "id": 23001,
        "title": "Stanza 1",
        "content": "Tashongana pano, Mwari Womudenga,\nWumudira, Baba, ngeSondo.\nNemwi munoda Mwari, kwedzerai;\nMumhatso mugwadame,\nMumhatso mugwadame,\nMumhatso mugwadame kwa`ri."
      },
      {
        "id": 23002,
        "title": "Stanza 2",
        "content": "Wakaripaura iro zuva rake,\nWakatipangira izwi iro;\nJesu ngeiri zuva wakamuka,\nNokufa kwakanyiswa,\nnokufa kwanyiswa\nNokufa kwakanyiswa ndiye."
      },
      {
        "id": 23003,
        "title": "Stanza 3",
        "content": "Madzinza enyika, unganai\n zvino,\nNgesondo rake rakanaka,\nJesu Mukomana\nUri Mwari ega,\nUriye Muponesi, Uriye Muponesi,\nUriye MupWonesi ega."
      },
      {
        "id": 23004,
        "title": "Stanza 4",
        "content": "Ngatimukurise, tiembe\nnyasha dzake,\nTiitewo nemishando yake;\nTimukudze, timudire teshe,\nMumhatso yokudira,\nmumhatso yokudira\nMumhatso yokudira teshe."
      }
    ]
  },
  {
    "id": 231,
    "number": 231,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Pane chinyuka chengazi",
    "stanzas": [
      {
        "id": 23101,
        "title": "Stanza 1",
        "content": "Pane chinyuka chengazi,\nChinobva paditi\nRomukororo waMwari,\nChinotishambidza."
      },
      {
        "id": 23102,
        "title": "Khorasi",
        "content": "Nevashaishi veshe\nVanozocheneswa;\nAvo vanoshamba ndicho\nVanozocheneswa."
      },
      {
        "id": 23103,
        "title": "Stanza 2",
        "content": "Mubi wakakohomerwa\nWakashamba ndicho,\nNeniniwo kudai ndiye\nNdingasukwa mwoyo."
      },
      {
        "id": 23104,
        "title": "Stanza 3",
        "content": "Apo ndakagonda ngazi,\nYakabomha kwaari;\nRudo runotiripira\nRwakandishamisa."
      }
    ]
  },
  {
    "id": 232,
    "number": 232,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Toronzerwa ndiye Mwari",
    "stanzas": [
      {
        "id": 23201,
        "title": "Stanza 1",
        "content": "Taronzerwa ndiye Mwari,\nMazwi akanaka,\nAtamyorerwa kare,\nKuti tiponeswe."
      },
      {
        "id": 23202,
        "title": "Khorasi",
        "content": "Jesu wakafira isu\nKuti tiponeswe;\nNgatitende, tivadire\nMwari noM`ponesi."
      },
      {
        "id": 23203,
        "title": "Stanza 2",
        "content": "Mwari ndiyo tsamba yake,\nUnotironzera\nKuti wakaita zveshe,\nKuti tiri vake."
      },
      {
        "id": 23204,
        "title": "Stanza 3",
        "content": "Tinodzidza kupauka\nKwavabari vedu,\nKubva m`njira yakanaka\nNokuenda m`kufa"
      },
      {
        "id": 23205,
        "title": "Stanza 4",
        "content": "Tinoona rudo rwake,\nNdiye Jesu Kristu,\nNdiye Mukororo ega\nNaJehovha Mwari."
      }
    ]
  },
  {
    "id": 233,
    "number": 233,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Tinoonana naJesu",
    "stanzas": [
      {
        "id": 23301,
        "title": "Stanza 1",
        "content": "Tinoonana naJesu\nNesu tinodakara,\nTinopenyana muhope\nNaye wakatifira."
      },
      {
        "id": 23302,
        "title": "Khorasi",
        "content": "Tinoonana mudenga,\nMberi kwenyeredzidzo;\nTinoonana mudenga\nGare gare kwaari."
      },
      {
        "id": 23303,
        "title": "Stanza 2",
        "content": "Tinozodakara apo\nTim`ringe muhope,\nNavo vakagwinyisira\nVakatanga pamberi."
      },
      {
        "id": 23304,
        "title": "Stanza 3",
        "content": "Tioona hope yake,\nHope yaJesu Kristu;\nNazvo zveshe zvakashata\nTinosia munyika."
      },
      {
        "id": 23305,
        "title": "Stanza 4",
        "content": "Tinoona nengirosi\nDzechikudza Jehovha;\nDDziripo padendemaro\nDnRoumambo hwaMwari."
      }
    ]
  },
  {
    "id": 234,
    "number": 234,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Unondikweya muno",
    "stanzas": [
      {
        "id": 23401,
        "title": "Stanza 1",
        "content": "Unondikweya muno,\nO mazwi anodetsa;\nAndingazorashiki,\nNgenyara yake wondikweya."
      },
      {
        "id": 23402,
        "title": "Khorasi",
        "content": "Unondikweya zvino,\nNgenyara yake wondikweya.\nNdinozom`te`ra muno,\nNgenyara yake wondikweya."
      },
      {
        "id": 23403,
        "title": "Stanza 2",
        "content": "Ngenguva yokuchema,\nNgenjira yakanakahe,\nAndizoperi simba,\nNgenyara yake wondikweya."
      },
      {
        "id": 23404,
        "title": "Stanza 3",
        "content": "Ndapedza mushando muno,\nNgenyasha ndakazvinyisa;\nAndizokutyi kufa,\nNgokuti Mwari unokweya."
      }
    ]
  },
  {
    "id": 235,
    "number": 235,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Wouya, Wouya mushi wokupera'",
    "stanzas": [
      {
        "id": 23501,
        "title": "Stanza 1",
        "content": "Wouya, wouya mushi wokupera,\nIzuva gurutu rinotyisa.\nZuva rinofa\nzviro zveshe zveshe."
      },
      {
        "id": 23502,
        "title": "Stanza 2",
        "content": "Nyikeyi hurutu inozungunyiswa\nnokufa kunokwedzera zvino;\nMweshe onai nyika inopishwa\nnezviro zvayo zveshe zvino."
      },
      {
        "id": 23503,
        "title": "Stanza 3",
        "content": "Izwanyi imwimwi kutinhira kwayo\nkwamusa vakafa venyika;\nMwari wodzaka, unozodaidza\nkwaari vanhu veshe veshe."
      },
      {
        "id": 23504,
        "title": "Stanza 4",
        "content": "Tomuka isisu, tibve m`guva redu\nTigongwe ndiMwari wedu m`kuru;\nTadaidzirwa ndiM`ponesi wedu,\nngatizwe izwi rake kwaro."
      }
    ]
  },
  {
    "id": 236,
    "number": 236,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Usakakaseka iwe",
    "stanzas": [
      {
        "id": 23601,
        "title": "Stanza 1",
        "content": "Usakakaseka iwe,\nMwari unokuda.\nUnozondingwarirwa ndiye,\nMwari unokuda."
      },
      {
        "id": 23602,
        "title": "Khorasi",
        "content": "Mwari unokuda zuva reshe;\nNjira yeshe;\nMwari unokuda,\nUnogara newe."
      },
      {
        "id": 23603,
        "title": "Stanza 2",
        "content": "Apo mwoyo unosvipa,\nMwari unokuda.\nNgozi dzechikugumira,\nMwari unokudza."
      },
      {
        "id": 23604,
        "title": "Stanza 3",
        "content": "Zveshe zounozotama,\nMwari unokupa.\nTseama kwaari zvino,\nMwari unokuda"
      },
      {
        "id": 23605,
        "title": "Stanza 4",
        "content": "Pasina hama dzimweni,\nMwari unokuda.\nDzihine munyara dzake,\nMwari unokudza."
      }
    ]
  },
  {
    "id": 237,
    "number": 237,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Usiku vaushi vakazwa ngirosi",
    "stanzas": [
      {
        "id": 23701,
        "title": "Stanza 1",
        "content": "Usiku vaushi vakanzwa ngirosi\nDzechiemba mudenga,\nDzechikudza M`ponesi\nDzechiti, Hekani. (2)"
      },
      {
        "id": 23702,
        "title": "Stanza 2",
        "content": "Dzakati, adakarai Jesu wabarirwa\nBheterehema reJudhia,\nKuponesa ngenyasha,\nHaleluya kwaari. (2)"
      },
      {
        "id": 23703,
        "title": "Stanza 3",
        "content": "Mashoko akati, Kudzai Marure\nMunoiyananiswa kwaari\nNgoMukororo wake\nKristu M`ponesi.(2)"
      }
    ]
  },
  {
    "id": 238,
    "number": 238,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Vashandi vake Jesu",
    "stanzas": [
      {
        "id": 23801,
        "title": "Stanza 1",
        "content": "Vashandi vake Jesu,\nEmai apo.\nMadziso nga`ringire\nYaibva minda."
      },
      {
        "id": 23802,
        "title": "Khorasi",
        "content": "Kumbira kuna Mwari\nAtume vake,\nVaunze veshe vanhu\nMunyika mwake"
      },
      {
        "id": 23803,
        "title": "Stanza 2",
        "content": "Varape vane nhenda,\nVakumbire,\nNavanotambudzika\nVaite nane."
      },
      {
        "id": 23804,
        "title": "Stanza 3",
        "content": "Vaite vanhu veshe,\nVamude Mwari;\nVam`tsvake vanhu\nVeshe vakarashika."
      }
    ]
  },
  {
    "id": 239,
    "number": 239,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Wakakwira mutunhu weKalvari Mambo Jesu",
    "stanzas": [
      {
        "id": 23901,
        "title": "Stanza 1",
        "content": "Wakakwira mutunhu\nWeKalvari Mambo Jesu,\nWakakohomerwapo pamutunhu Mambo Jesu,\nWakadai ngehwai isikarwisi,\nWakatiripira vashaishi\nMambo Jesu."
      },
      {
        "id": 23902,
        "title": "Khorasi",
        "content": "Tinoshama teshe ngorudo\nRwake, rwake,\nTinoshama teshe\nngorudo rwaJesu."
      },
      {
        "id": 23903,
        "title": "Stanza 2",
        "content": "Wakazia mutunhu\nWeKalvari Mambo Jesu,\nKuti vanhu vanofa munyikeyi,\nMambo Jesu,\nAsi sure aazikuendazve;\nWakatitwarira muchinjiko\nMambo Jesu."
      },
      {
        "id": 23904,
        "title": "Stanza 3",
        "content": "Kumukweya pam`tunhu weKalvari\n Mambo Jesu,\nvaizomukorera pamutunhu\nMambo Jesu.\nWainga ane simba raMwarizve,\nAazikuramba kutifira\nMambo Jesu."
      },
      {
        "id": 23905,
        "title": "Stanza 4",
        "content": "Wakadusa ndaa dzedu\nPaKalvari Mambo Jesu,\nAtichazofiripo\nPamutunhu isu vanhu;\nMuumambo hwaMwari tomuonazve,\nTinozogwadama kuna\nMuponesi, Mambo Jesu."
      }
    ]
  },
  {
    "id": 240,
    "number": 240,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Njiku yanyamashi",
    "stanzas": [
      {
        "id": 24001,
        "title": "Stanza 1",
        "content": "Njiku yanyamashi,\nHaleluya, Amen!\nNdiyo yokupota,\nHaleluya, amen.\nTarega mabasa.\nTinotsvaka Mwari,\nMambo womudenga.\nHaleluya, amen."
      },
      {
        "id": 24002,
        "title": "Stanza 2",
        "content": "Njiku yanyamashi,\nHaleluya, amen.\nNdiyo yokupfara,\nHaleluya, amen.\nJesu wakumuka,\nWari unopona,\nWari unotonga,\nHaleluya, amen."
      },
      {
        "id": 24003,
        "title": "Stanza 3",
        "content": "Njiku yanyamasi,\nHaleluya, amen.\nNdiyo yokubonga,\nHaleluya, amen.\nInzan`,mwi jihama,\nNgatikujen`Jesu\nNgokuemba kwedu,\nHaleluya amen."
      },
      {
        "id": 24004,
        "title": "Stanza 4",
        "content": "Njiku yanyamashi,\nHaleluya, amen.\nNdiyo yokupona,\nHaleluya, amen.\nTino Muponesi,\nUnotipa hwomi,\nHuchingazoperi,\nHaleluya, amen."
      }
    ]
  },
  {
    "id": 241,
    "number": 241,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Kweshe kuna Jesu",
    "stanzas": [
      {
        "id": 24101,
        "title": "Stanza 1",
        "content": "Kweshe kuna Jesu,\nWoti muKristo,\nIyo kwaanozoda,\nNdinozoenda.\nPamakubozve pake,\nApana kutya;\nKweshe kuna Jesu,\nMuno munyika"
      },
      {
        "id": 24102,
        "title": "Khorasi",
        "content": "Kweshe kuna Jesu,\nKweshevo, kweshevo;\n\nKweshe kuna Jesu,\nNdinozoenda'"
      },
      {
        "id": 24103,
        "title": "Stanza 2",
        "content": "Kweshe kuna Jesu,\nPikija ndiri\nMunjira yakareba\nIngandityisa.\nAnganditoreravo\nZvose zvokwangu,\nKweshe kuna Jesu,\nNdinozogara."
      },
      {
        "id": 24104,
        "title": "Stanza 3",
        "content": "Kweshe kuna Jesu,\nPikija kuza\nKurwara nedambujo\nNayona nyatwa.\nAngapangira, Batai,\nNokuti, Rindai,\nKweshe kuna Jesu\nNdinozoenda"
      }
    ]
  },
  {
    "id": 242,
    "number": 242,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Twara Muchinjiko wako",
    "stanzas": [
      {
        "id": 24201,
        "title": "Stanza 1",
        "content": "Twara muchinjiko wako, (2)\nKwakaronzwa kuvadzidzi,\nUzvisie zvomunyika,\nUzvirege zvomunyika,\nNditeere ngegwinyiso."
      },
      {
        "id": 24202,
        "title": "Stanza 2",
        "content": "Twara muchinjiko wako, (2)\nUsatye kurema kwawo,\nNdiye unokugwinyisa,\nNdiye unokugwinyisa,\nNgamazuva ako eshe."
      },
      {
        "id": 24203,
        "title": "Stanza 3",
        "content": "Twara muchinjiko wako, (2)\nUsatya chiro nechimwe,\nNdiye unokushingisa,\nNdiye unokutungamira,\nIyo njira yomudenga."
      },
      {
        "id": 24204,
        "title": "Stanza 4",
        "content": "Twara muchinjiko wako, (2)\nUsatya chimene chawo,\nNdiye Jesu wakatwara,\nNdiye Jesu wakatwarwa,\nKufira isusu teshe."
      },
      {
        "id": 24205,
        "title": "Stanza 5",
        "content": "Twara muchinjiko wako, (2)\nUusie mukufa,\nNdiwe wega unotwara,\nNdiwe wega unotwara,\nWoponeswa ndiye ega."
      }
    ]
  },
  {
    "id": 243,
    "number": 243,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Zano chiro chakanaka",
    "stanzas": [
      {
        "id": 24301,
        "title": "Stanza 1",
        "content": "Zano chiro chakanaka,\nTeshe tinorida zano;\nZano haritengwi haro,\nRiri chipo chaJehovha."
      },
      {
        "id": 24302,
        "title": "Khorasi",
        "content": "Zano ndega,zano ndega,\nZano ndega rakashata,\nZano ndega wakorera,\nZano pangwa ndiJehovha."
      },
      {
        "id": 24303,
        "title": "Stanza 2",
        "content": "Izwi rake rine zano\nKumirudza vanhu veshe;\nRiri simba remadzinza,\nRiri gwinyiso narini."
      },
      {
        "id": 24304,
        "title": "Stanza 3",
        "content": "Nge�ro zano tine simba,\nRokuita zvakanaka,\nAsi ropuwa kwavari,\nVanomukumbira Mwari."
      },
      {
        "id": 24305,
        "title": "Stanza 4",
        "content": "Soromoni wakarida,\nAkarikumbira Mwari,\nNdizvo Mwari vakamupa,\n\nZano pfuma norukudzo."
      },
      {
        "id": 24306,
        "title": "Stanza 5",
        "content": "Apo tinotame zano,\nNgatiende kuna Mwari,\nUwo une rakakwana.\nKupa kune vanhu veshe."
      }
    ]
  },
  {
    "id": 244,
    "number": 244,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mwari, ndatarisana nemwi",
    "stanzas": [
      {
        "id": 24401,
        "title": "Stanza 1",
        "content": "Mwari, ndatarisana nemwi,\nTenzi, ndiponese;\nIzwi rukuchema kwangu,\nNgarizwiwe ndimwi."
      },
      {
        "id": 24402,
        "title": "Stanza 2",
        "content": "Ndimwi muri Tenzi wangu\nWendinogarira;\nMwoyo wangu kudai waitiwa\nNdichazomuona."
      },
      {
        "id": 24403,
        "title": "Stanza 3",
        "content": "Zvinodaro pakufunga\nPamazuva ese,\nNdotondera zvekuenda\nApo munogara."
      },
      {
        "id": 24404,
        "title": "Stanza 4",
        "content": "Tenzi ndibvumidze iwo\nKuti ndimuone,\nPane uyo musha wenye,\nTenzi, ndiregere."
      }
    ]
  },
  {
    "id": 245,
    "number": 245,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Mambo komborera Africa",
    "stanzas": [
      {
        "id": 24501,
        "title": "Stanza 1",
        "content": "Mambo, komborera Afrika,\nNgariremeredzwe zina rayo;\nIzwai mikumbiro yedu,\nO Mambo komborera\nIsu, vana vayo."
      },
      {
        "id": 24502,
        "title": "Khorasi",
        "content": "(Uya) Mweya!\n (Uya,uya) Mweya,\n (Uya) Mweya!\n(Uya,uya) Mweya\nWakachena;\n O Mambo, komborera Isu, vana vayo."
      }
    ]
  },
  {
    "id": 246,
    "number": 246,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Wozoteera Jesu nokuita wake",
    "stanzas": [
      {
        "id": 24601,
        "title": "Stanza 1",
        "content": "Wozoteera Jesu nokuita wake?\nWozohamba naye munjira yake?\nWodo kuti atware mutwaro.\n wenyu?\nHina zveshe kwaari."
      },
      {
        "id": 24602,
        "title": "Khorasi",
        "content": "Ngesimba rake wozogwinyiswa,\nNgengazi yake wozocheneswa,\nNgerudo unozozariswa,\nChakwadi une simba reshe."
      },
      {
        "id": 24603,
        "title": "Stanza 2",
        "content": "Wodo kusunhurwa nokumutevera?\nWozoona kunyarara kwake?\nWodo kuponeswa kuti usanyiswa?\nHina zveshe kwaari."
      },
      {
        "id": 24604,
        "title": "Stanza 3",
        "content": "Muumambo hwake unozodakara?\nUnozia Jesu, munhu kwaye?\nWozomushandira Jesu nguva dzeshe?\nHina zveshe kwaari."
      }
    ]
  },
  {
    "id": 247,
    "number": 247,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Zuva romweya M’ponesi",
    "stanzas": [
      {
        "id": 24701,
        "title": "Stanza 1",
        "content": "Zuva romweya, M�ponesi,\nKusina svipa muripo;\nTisatambudzwa muno,\nTechimuzia muripo."
      },
      {
        "id": 24702,
        "title": "Stanza 2",
        "content": "Apo toata ngeusiku,\n\nMutingwarire Mambowe,\nTipinimidze ndimwe,\nKugara nemwi kanyiyo."
      },
      {
        "id": 24703,
        "title": "Stanza 3",
        "content": "Kwedzerai pano tifumiswe,\nTechizomuka nemwiwo,\nTechizohamba nemwi,\nMetsa tigume mudenga"
      }
    ]
  },
  {
    "id": 248,
    "number": 248,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Zvangu zveshe ngezvaJesu",
    "stanzas": [
      {
        "id": 24801,
        "title": "Stanza 1",
        "content": "Zvangu zveshe ngezvaJesu,\nMweya nemuiri weshe,\nMishando nezviito,\nNguva nemazuva eshe,\nNgezvaJesu,ngezvaJesu,\nNguva nemazuva eshe. (2)"
      },
      {
        "id": 24802,
        "title": "Stanza 2",
        "content": "Nemioko yangu yeshe\nNgaishandire Jesu,\nNemirenje yangu nayo,\nNgaihambire Mambo,\nNgezvaJesu, ngezvaJesu,\nNgazviite kuda kwake. (2)"
      },
      {
        "id": 24803,
        "title": "Stanza 3",
        "content": "Ngemadziso angu eshe\nNdimuone Muponesi,\nNorurimi rwangu narwo\nNgaruirikidze Jesu,\nNgezvaJesu, ngezvaJesu,\nNgazvikudze M�ponesi. (2)"
      },
      {
        "id": 24804,
        "title": "Stanza 4",
        "content": "Zvino ndinoona Jesu\nUyo wakandifira;\nNdinomuringira iye\nUyo wakandiripira,\nZveshe zvangu, ngezvaJesu,\nUwo wakandiponesa. (2)"
      },
      {
        "id": 24805,
        "title": "Stanza 5",
        "content": "Vanhu vanotsvake pfuma,\nIchatsvakatika hayo.\nNgavatsvake pfuma,\nInokufa handidi,\nNgezvaJesu, ngezvaJesu,\nNdiri munhu wake Jesu. (2)"
      },
      {
        "id": 24806,
        "title": "Stanza 6",
        "content": "Mukutama nourombo\nNdinogonda Mambo Jesu.\nWakatigondisa zveshe,\nMukumbire unokupa;\nNgezvaJesu, ngezvaJesu,\nMukupfuma nourombo. (2)"
      }
    ]
  },
  {
    "id": 249,
    "number": 249,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Zvino takwedzera kwo’ri",
    "stanzas": [
      {
        "id": 24901,
        "title": "Stanza 1",
        "content": "Zvino takwedzera kwe�ri\nTaza kuzodzidza;\nNgatipuwe uwo mwoyo,\nBaba, wokuziya."
      },
      {
        "id": 24902,
        "title": "Stanza 2",
        "content": "Vakafira muchidima,\nVana nevakuru;\nVaigara muno m�nyika,\nVarashika veshe."
      },
      {
        "id": 24903,
        "title": "Stanza 3",
        "content": "Asi tine tsamba isu,\nTajekiswa ndiyo.\nNdizvo ngatidzidze iyo,\nNdiwo mwoyo wedu."
      },
      {
        "id": 24904,
        "title": "Stanza 4",
        "content": "Mambo ngatipuratane\nIri izwi rako;\nTidzidzise kakurutu\nIyo tsamba yako."
      }
    ]
  },
  {
    "id": 250,
    "number": 250,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Zvishaishi zvakawanda",
    "stanzas": [
      {
        "id": 25001,
        "title": "Stanza 1",
        "content": "Zvishaishi zvakawanda,\nZvinozondochena mbe,\nZvishaishi zvakawanda,\nZvinozondochena mbe.\nZvakanyatsvuka tsvuka,\nZvinochena mbe."
      },
      {
        "id": 25002,
        "title": "Stanza 2",
        "content": "Zvishaishi zvakawanda,\nZvishaishi zvakawanda,\nZvinozondochena mbe,\nZvinozondochena mbe."
      },
      {
        "id": 25003,
        "title": "Stanza 3",
        "content": "Tenda izwi rinopota,\nUya kuna Jesuwe.\nTenda izwi rinopota,\nUya kuna Jesuwe.\nUchinenyasha huru,\nNarwo rudozvee."
      },
      {
        "id": 25004,
        "title": "Stanza 4",
        "content": "Womusunhura zveshe,\nUnozviriarwahe.\nWomusunhura zveshe,\nUnozviriarwahe.\nKwaari ringirayi,\nOnai Mambowe"
      }
    ]
  },
  {
    "id": 251,
    "number": 251,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Tenzi, taungana Muno mumba yenyu",
    "stanzas": [
      {
        "id": 25101,
        "title": "Stanza 1",
        "content": "Tenzi, taungana muno\n  mumba yenyu,\nUyanyiwo zvo tapinda.\nTenzi, mbiri kwenyu;\nIyo mwoyo yedu inomuchemera,\nNeyi mweya yedu, Tenzi,\n inomutarira."
      },
      {
        "id": 25102,
        "title": "Stanza 2",
        "content": "Baba, ngatizive kuti muri pano,\nNgatirizwe izwi renyu,\nRazarurwe ndimwi;\nTigadzirirenyi, isu vanhu venyu,\n\nKuti tafa mutipinze kune\n musha wenyu."
      }
    ]
  },
  {
    "id": 252,
    "number": 252,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Jesu Kristu ndiM’ponesi",
    "stanzas": [
      {
        "id": 25201,
        "title": "Stanza 1",
        "content": "Jesu Kristu ndiM`ponesi,\nWakatida isu tese,\nWakaunza ruponeso\nKuti tese tinopeswe."
      },
      {
        "id": 25202,
        "title": "Khorasi",
        "content": "Ndiri pano, ndiponesei,\nHandichadi zvakaipa.\nNdoda kuva mwana wenyu\nMisi yese yeupenyu."
      },
      {
        "id": 25203,
        "title": "Stanza 2",
        "content": "Jesu kristu ndiM`ponesi,\nAne rudo kuvatadzi,\nWonai, ari pa m`chijiko\nKutifira vanyangadzi"
      },
      {
        "id": 25204,
        "title": "Stanza 3",
        "content": "Jesu kristu ndiM`ponesi,\nUsagare neurombo,\nUya zvino, uponeswe,\nKuti uve nerufaro."
      },
      {
        "id": 25205,
        "title": "Stanza 4",
        "content": "Jesu kristu ndiM`ponesi,\nUsazotya, uya hako,\nKana wakatadza senyi\nUya hako uponeswe."
      },
      {
        "id": 25206,
        "title": "Stanza 5",
        "content": "Jesu kristu ndiM`ponesi,\nKuti uchirasa zvese\nZvakaipa zvako nasi\nUnogara naye Jesu."
      }
    ]
  },
  {
    "id": 253,
    "number": 253,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Baba, ndinoshama kwazvo",
    "stanzas": [
      {
        "id": 25301,
        "title": "Stanza 1",
        "content": "Baba ndinoshama kwazvo\nKuti ndidaidzwe ndimwi,\nNdakagara muzvitaidzo,\nAsi hamusakaramwa,\nMakadida henyu, Baba."
      },
      {
        "id": 25302,
        "title": "Stanza 2",
        "content": "Baba kunakanyi kwenyu,\nNhamburiko dzakaiitwa,\nKunditsvaka pasi pano,\nNdakawonwa ndiri kufa,\nNdikaitwa unopona,\nTenzi, ndinomutevera."
      },
      {
        "id": 25303,
        "title": "Stanza 3",
        "content": "Kuti mune basa renyu,\nIro ndingakona kuita,\nNdingafadzwa kuriita,\nHandizodi mumbayiro,\nNdinodisa kushandira,\nImwi basi tinzi wangu."
      },
      {
        "id": 25304,
        "title": "Stanza 4",
        "content": "Ndinotsidza nhasi uno\nKumutsvaka misi yese,\nNekuteerera zvese\nIzvo munotaurarazvo Nekutsvaka varasiki,\nTese tizogara nemwi."
      }
    ]
  },
  {
    "id": 254,
    "number": 254,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Fambanyiwo, Majoni",
    "stanzas": [
      {
        "id": 25401,
        "title": "Stanza 1",
        "content": "Fambanyiwo , majoni,\nA Mwari wedu imwi,\nMusatye mhandu dzenyu,\nHadzina simba, kwete;\nTinozokunda kwazvo\nPanyika kwese kwese,\nMasimba ake, Jesu,\nHaachazokundwiba."
      },
      {
        "id": 25402,
        "title": "Stanza 2",
        "content": "Fambanyiwo vatendi,\nVaMwari wedu imwi,\nHamuna simba mwega,\n\nMusazvikudze zvenyu;\nMupfeke nhumbi dzese\nDzaMwari wakanaka,\nMuende kune basa,\nMuite vanhu imwi"
      },
      {
        "id": 25403,
        "title": "Stanza 3",
        "content": "Fambanyiwo vatsvene,\nMunyika dzese dzese,\nMushumaire izwi\nRaJesu Tenzi wedu;\nMukundi uchapiwa\nChiremba cheupenyu,\nAnozowona Jesu\nAtonge naye iyo."
      }
    ]
  },
  {
    "id": 255,
    "number": 255,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ngatiende Vadikani",
    "stanzas": [
      {
        "id": 25501,
        "title": "Stanza 1",
        "content": "Ngatiende, vadikani,\nKune munda wake Tenzi,\nUnodiwa vekurima,\nNdiSamunda wadaidza."
      },
      {
        "id": 25502,
        "title": "Khorasi",
        "content": "Kasikai kuendayo,\nKune zunde rake Mambo,\nEndai iyo, endai iyo,\nKune zunde rake Mambo."
      },
      {
        "id": 25503,
        "title": "Stanza 2",
        "content": "Jesu wati kuna Pita,\n\"Chitevera sure kwangu,\nUnozovabvuwa vanhu,\"\nKubva mune dima guru."
      },
      {
        "id": 25504,
        "title": "Stanza 3",
        "content": "Jesu Tenzi watiudza,\n\"Endai kune pasi pese,\nMuchiparidzira Izwi\nKune ndudzi dzese dzese."
      },
      {
        "id": 25505,
        "title": "Stanza 4",
        "content": "Zvino rava jana redu\nRekutora iri soko\n\nKuna ivo vari kure,\nVasikamuzivi Tenzi."
      },
      {
        "id": 25506,
        "title": "Stanza 5",
        "content": "Jesu wati, \"Kumbiranyi\nVapupuri kuna Ishe,\nZvokwasvika kupupura\nVashomana vapupuri."
      }
    ]
  },
  {
    "id": 256,
    "number": 256,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Tondera kumusha ikoyo",
    "stanzas": [
      {
        "id": 25601,
        "title": "Stanza 1",
        "content": "Tondera kumusha ikoyo,\nKwakanaka kudenga zvikuru,\nKwakazara vatsvene ikoyo,\nTondera kumusha ikoyo."
      },
      {
        "id": 25602,
        "title": "Khorasi",
        "content": "Ikoyo ikoyo, tondera kumusha\nIkoyo, ikoyo,ikoyo,tondera\nKumusha ikoyo."
      },
      {
        "id": 25603,
        "title": "Stanza 2",
        "content": "Tondera shamwari ikoyo,\nDzakaenda kudenga kogara,\nDzinoimba rukudzo rwaBaba,\nTondera kumusha ikoyo."
      },
      {
        "id": 25604,
        "title": "Stanza 3",
        "content": "Tondera ndiJesu ikoyo,\nNevekwedu vagere ikoyo,\nNdinoita chisuwo ngeiyo,\nKumusha mutsvene ikoyo"
      },
      {
        "id": 25605,
        "title": "Stanza 4",
        "content": "Tondera vakuru ikoyo,\nVagarira kuwona ndosvika,\nVanogara naJesu M`ponesi,\nTondera kumusha ikoyo."
      },
      {
        "id": 25606,
        "title": "Stanza 5",
        "content": "Tondera vacheche ikoyo,\nVakaenda kogara naBaba,\nVanogara kugara`yo zvino,\nKupfuwa vabari vepasi."
      },
      {
        "id": 25607,
        "title": "Stanza 6",
        "content": "Ndinoda kuenda ikoyo,\nHandichadi kugara panyika,\nNdinodisa kugara naJesu,\nKumusha waBaba wevese."
      }
    ]
  },
  {
    "id": 257,
    "number": 257,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Tinosungwa isu",
    "stanzas": [
      {
        "id": 25701,
        "title": "Stanza 1",
        "content": "Tinosungwa isu,\nNgorudo rwaJesu,\nKuiyana kwetinakwo,\nKunobva kwaari."
      },
      {
        "id": 25702,
        "title": "Stanza 2",
        "content": "Tinounganidzwa,\nKuti tikumbire,\nPadendemaro raMwari.\nBaba womudenga."
      },
      {
        "id": 25703,
        "title": "Stanza 3",
        "content": "Tinoembedzera\nAvo vanotsumba,\nAvo vanodakara\nVanotigwinyisa."
      },
      {
        "id": 25704,
        "title": "Stanza 4",
        "content": "Apo toparadzwa,\nTinosvipa mwoyo,\nAsi tinozoshongana\nKuna Mambo wedu."
      }
    ]
  },
  {
    "id": 258,
    "number": 258,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Hosana wokudenga",
    "stanzas": [
      {
        "id": 25801,
        "title": "Stanza 1",
        "content": "Hosana wokudenga.\nNdoimba nezwi rangu,\nKumwana waDavida Wouya kwandiri.\nHosana, ndiyamure\nPakurema kwangu;\nWouya asadanwa\nMuponesi wangu."
      },
      {
        "id": 25802,
        "title": "Stanza 2",
        "content": "Ndoshonga dzakadini\nZvomondishanyira?\nNdigadzirire imi\nMwoyo wangu wose;\nNdoupira kwamuri\nMununuri wangu,\nNdopfugame kwamuri\nChokwadi She wangu."
      },
      {
        "id": 25803,
        "title": "Stanza 3",
        "content": "Ndasunungurwa nemi\nMudorongo rangu;\nRikadimurwa nemi\nIro joti rangu;\nRakandirasikira\nNdasiya upenyu,\nMakandifarisazve\nPakuchema kwangu."
      }
    ]
  },
  {
    "id": 259,
    "number": 259,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Watakura kuipa Jesu",
    "stanzas": [
      {
        "id": 25901,
        "title": "Stanza 1",
        "content": "Watakura kuipa Jesu,\nKusi kuipa kwake;\nUkaripa moswa Jesu,\nIsi moswa yako."
      },
      {
        "id": 25902,
        "title": "Stanza 2",
        "content": "Woibo munu unetsitsi,\nUsatadza Iwe;\nRaparara ropa rako,\nWakanaka Iwe."
      },
      {
        "id": 25903,
        "title": "Stanza 3",
        "content": "Kudaira kwedu kose\nKwakanyorwa newe;\nNezvirandu zvedu zvose,\nZvakanyorwa newe."
      },
      {
        "id": 25904,
        "title": "Stanza 4",
        "content": "Taregerwa taponiswa,\nNezvirwadzo pakaipa\nNero ropa rako."
      }
    ]
  },
  {
    "id": 260,
    "number": 260,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Tine dama renyu Mwari",
    "stanzas": [
      {
        "id": 26001,
        "title": "Stanza 1",
        "content": "Tine dama renyu, Mwari,\nNoupenyu naro;\nRinotiziisa zvivi\nNoM`ponesi wedu."
      },
      {
        "id": 26002,
        "title": "Stanza 2",
        "content": "Rakafamba iro dama\nRichafamba iro;\nOse marudzi enyika\nAmirira iro"
      },
      {
        "id": 26003,
        "title": "Stanza 3",
        "content": "Dzinokundwa hondo dzose\nNeri dama Ishe;\nIchazara nyika yose\nNeri dama Ishe."
      },
      {
        "id": 26004,
        "title": "Stanza 4",
        "content": "Dzose nzizi dzapanyika\nDzichafara naro;\nNavanhu vose venyika\nVopfumiswa naro."
      },
      {
        "id": 26005,
        "title": "Stanza 5",
        "content": "Dzichapera hondo dzose\nNezwi renyu Mwari;\nKuchauya kuwadzana,\nNezwi renyu Mwari."
      }
    ]
  },
  {
    "id": 261,
    "number": 261,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Baba ndiri Mwana wenyu",
    "stanzas": [
      {
        "id": 26101,
        "title": "Stanza 1",
        "content": "Baba, ndiri mwana wenyu\nNyange ndakatadza;\nNdinochema mberi kwenyu\nMundiregerere."
      },
      {
        "id": 26102,
        "title": "Stanza 2",
        "content": "Zvitadzo zvangu zvizhinji\nHazvingaverengwe;\nNdozviisa kwamuri\nMundiregerere."
      },
      {
        "id": 26103,
        "title": "Stanza 3",
        "content": "Mirau yenyu ndakatyora,\nNdakakuzvidzai,\nMununuri ndamusara,\nMundiregerere."
      },
      {
        "id": 26104,
        "title": "Stanza 4",
        "content": "Ndakatadza nokureva,\nNokufunga kwangu.\nNdakatadza namabasa;\nMundiregerere."
      },
      {
        "id": 26105,
        "title": "Stanza 5",
        "content": "Nyange ndanga ndafanera\nKukurumbidza;\nNdakatadza nokukanganwa;\nMundiregerere."
      },
      {
        "id": 26106,
        "title": "Stanza 6",
        "content": "Nezvakaipa zvizhinji\nBaba, ndakatadza,\nNdakakunyadzisai imi,\nMundiregerere."
      },
      {
        "id": 26107,
        "title": "Stanza 7",
        "content": "Muri Mwari mune ngoni,\nDzisingazopera;\nNaizvozvo ndinochema\nMundiregerere."
      }
    ]
  },
  {
    "id": 262,
    "number": 262,
    "categoryId": 1,
    "category": "Nduyo Dzokudira",
    "title": "Ishe, taungana",
    "stanzas": [
      {
        "id": 26201,
        "title": "Stanza 1",
        "content": "Ishe, taungana\nMuno mumba yenyu;\nUya iwo zvatapinda,\nIshe mberi kwenyu."
      },
      {
        "id": 26202,
        "title": "Stanza 2",
        "content": "Iyo mwoyo tedu\nYokurwarirai;\nNayo mweya yedu Ishe\nYokutarisai."
      },
      {
        "id": 26203,
        "title": "Stanza 3",
        "content": "Hurukuro dzenyu\nBaba, ngatidzinzwe;\nRazarurwa dama renyu;\nNemi tikunzwei."
      },
      {
        "id": 26204,
        "title": "Stanza 4",
        "content": "Tinatsewo, Ishe\nIsu vanhu venyu;\nKana tafa, tipinzwewo\nMune denga renyu."
      }
    ]
  },
  {
    "id": 263,
    "number": 1,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "She Jesu, Mose rumbidzai",
    "stanzas": [
      {
        "id": 26301,
        "title": "Stanza 1",
        "content": "She Jesu mose rumbidzao\nVatumwa pfugamai! (Pamhidza)\nZvoUshe hwake farirai!"
      },
      {
        "id": 26302,
        "title": "Khorasi",
        "content": "Kudzai She, imi, mose\nKudzai She, Iye She\nStanza2\n\nVatendi mose, tarirai\nShe wenyu, chimudai; (Pamhidza)\nNezvipo zvenyu chiuyai;"
      },
      {
        "id": 26303,
        "title": "Stanza 3",
        "content": "Gwayana raShe chivongai,\nMufiri chitendai; (Pamhidza)\nChengeto yenyu farirai!"
      },
      {
        "id": 26304,
        "title": "Stanza 4",
        "content": "Ikweyo kuchanzi; Farai;\nUyai, chipfugamai! (Pamhidza)\nVarwirwa vose, pfugamai!"
      }
    ]
  },
  {
    "id": 264,
    "number": 2,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Zvikomborero kwamuri",
    "stanzas": [
      {
        "id": 26401,
        "title": "Stanza 1",
        "content": "Zvikomborero kwamuri, izvi chitsidzo chaMwari,\n\nTichazopiwa masimba, tichazokura mumweya."
      },
      {
        "id": 26402,
        "title": "Khorasi",
        "content": "Zvikomborero, zvikomborero zvizhinji,\nZvikomborero tinoda, Zvikomborero zvaMwari.\nStanza2\n\nZvikomborero zvichena, zvinochenesa mumwoyo,\nZvinopfumisa varombo, zvinosimbisa vapwere."
      },
      {
        "id": 26403,
        "title": "Stanza 3",
        "content": "Zvikomborero zvedenga, hazvitutsiri urombo,\nHazvitiiti vadadi, zvinobatsira vatendi."
      },
      {
        "id": 26404,
        "title": "Stanza 4",
        "content": "Zvikomborero zvizhinji, ngazvitambirwe nhasi\nNgatikumbire Jehovha, mupi wezvipo zvose."
      }
    ]
  },
  {
    "id": 265,
    "number": 3,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Nditungamirei Jehovha",
    "stanzas": [
      {
        "id": 26501,
        "title": "Stanza 1",
        "content": "Nditungamirei Jehovha, ndichifamba panyika;\nPachangu ndarukutika,\nNdibatei namasimba; Muponisi; Muponisi,\nItai ndipiwe simba.(Pamhidza)"
      },
      {
        "id": 26502,
        "title": "Stanza 2",
        "content": "Zarura tsime remvura, mvura yokuponisa;\nNdipiwe kuvhenekerwa,\nKwomwenje waJehovha ; Mununuri, Mununuri,\nMuchandidzivirira.(Pamhidza)"
      },
      {
        "id": 26503,
        "title": "Stanza 3",
        "content": "Kana ndasvika parufu, buritsai kutya kwangu;\nNgandipinde denga renyu,\nNokubatidzwa kwenyu; ndichaimba, ndichaimba\nNziyo dzinokukudzai. (Pamhidza)"
      }
    ]
  },
  {
    "id": 266,
    "number": 4,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndinovimba Nemi",
    "stanzas": [
      {
        "id": 26601,
        "title": "Stanza 1",
        "content": "Ndinovimba nemi, Ishe weKalvari,\nMuponisi; inzwai muteuro, bvisai zvivi zvangu,\nKuti ndive wenyu,muteveri."
      },
      {
        "id": 26602,
        "title": "Stanza 2",
        "content": "Ndipei ngoni dzenyu, ndisimbiwe nar\no\nSimba renyu; zvawakandifira,\nNdinoda kumupa rudo runobvira kunge moto."
      },
      {
        "id": 26603,
        "title": "Stanza 3",
        "content": "Murima renyika, munkutambudzika, tungamirai;\nRima richeneswe, kusuwa kubviswe,\nNgandisatenderwe kurasika."
      },
      {
        "id": 26604,
        "title": "Stanza 4",
        "content": "Upenyu hwapera, ndasvika pakufa,\nNdiyamurei; m`ponesi worudo, muburitse kutya,\nKudenga kumsoro, Ngandipinde."
      }
    ]
  },
  {
    "id": 267,
    "number": 5,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Uyai Mambo mukuru",
    "stanzas": [
      {
        "id": 26701,
        "title": "Stanza 1",
        "content": "Uya Mambo mukuru; tokudza zita renyu.\nMurumbidzwei, Baba mupenyu\nMakakunda zvose, titungamirirei, Mwari wedu"
      },
      {
        "id": 26702,
        "title": "Stanza 2",
        "content": "Uyai Shoko benyu: imi mutikundisei,\nMurumbidzwe, Mutikomborere tive vateveri,\nMweya woUtsvene, tizadzisei."
      },
      {
        "id": 26703,
        "title": "Stanza 3",
        "content": "Uyai Munyaradzi: mutipe mwoyo mutsva;\nKuda kwenyu ngakuitwe zvino,\nTinokunda nako. Chigarai nesu, munyaradzi."
      }
    ]
  },
  {
    "id": 268,
    "number": 6,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndichaimba kuna Mwari",
    "stanzas": [
      {
        "id": 26801,
        "title": "Stanza 1",
        "content": "Ndichaimba kuna Mwari, narwo rudo rwake,\nAkatuma Mwana wake kukndifira ini, zve."
      },
      {
        "id": 26802,
        "title": "Khorasi",
        "content": "Ndichaimba iyi nyaya, ndinopona kuna`She,\nNdiboimba nengirozi, dzinogara kuna`She."
      },
      {
        "id": 26803,
        "title": "Stanza 2",
        "content": "Ndinotenda Tenzi Jesu, wakandida kwazvo,\nNdakaita zvakaipa, wakandisunungurawo."
      },
      {
        "id": 26804,
        "title": "Stanza 3",
        "content": "Wakandipa mweya mutsva mwoyo wakanakawo,\nIni, ndiri mwana wake. Ndinogara naYewo."
      },
      {
        "id": 26805,
        "title": "Stanza 4",
        "content": "Ndinotenda izwi rake roupenyu,\nRinofadza kure kure, kune nyika dzose."
      }
    ]
  },
  {
    "id": 269,
    "number": 7,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndinoda kurumbidza imi",
    "stanzas": [
      {
        "id": 26901,
        "title": "Stanza 1",
        "content": "Ndinoda kurumbidza imi, nezvikomborero izvo\nZviri mamuri She; ndomuimbira nenziyo\nDzoruponiso rwanyu, kumsoro kudenga,\nKudenga ikweyo."
      },
      {
        "id": 26902,
        "title": "Stanza 2",
        "content": "Ndinoimba neropa raShe, iro randadeurirwa,\nPamuchinjikwa wake, rakandidzikinura\nParufu napakutsamwa, kururama uko\nKwandakapiwawo."
      },
      {
        "id": 26903,
        "title": "Stanza 3",
        "content": "Ndoimba zvorudo rukuru rwakanga rwandizadzeni\nRwakabva kunemi. Nenziyo dzinofadza sei,\nNdichaziva narini, zvorudo rwake urwo,\nUrwo rudo r`kuru."
      },
      {
        "id": 26904,
        "title": "Stanza 4",
        "content": "Zuva rokufara rinozouya raanozondifambisa\nKudenga`ko naro. Nehama iyeyo, Kristu,\nNdichagara naYe uko, ndakundiswa nengoni,\nNgoni huru dzaShe."
      }
    ]
  },
  {
    "id": 270,
    "number": 8,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Tariro yangu yamira",
    "stanzas": [
      {
        "id": 27001,
        "title": "Stanza 1",
        "content": "Tariro yangu yamira. Paropa raJesu, Ishe;\nHandichavimba nomumwe, ndoviba nezita raShe."
      },
      {
        "id": 27002,
        "title": "Khorasi",
        "content": "Kristu ibwe pandimire,\nKwose kumwe kune jecha,\nKwose kumwe kune jecha."
      },
      {
        "id": 27003,
        "title": "Stanza 2",
        "content": "Uso hwake hwapfidigwa, ngoni dzake dzozorodza;\nNapadutu roupenyu, ndabatwa naishe wangu"
      },
      {
        "id": 27004,
        "title": "Stanza 3",
        "content": "Mhiko nevimbiso yake zvinotsiga mumurove;\nNdarasikirwa nazvose, Iye, ndichavimba naYe."
      }
    ]
  },
  {
    "id": 271,
    "number": 9,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Mutsai chisimbisai",
    "stanzas": [
      {
        "id": 27101,
        "title": "Stanza 1",
        "content": "Mutsai, chisimbisai She basa renyu!\nNesimba guru, She, revai Kuvana venyu."
      },
      {
        "id": 27102,
        "title": "Khorasi",
        "content": "Mutsai, chisimbisai She basa renyu!\nMuuye She, chitizadzai\nNomweya wenyu !"
      },
      {
        "id": 27103,
        "title": "Stanza 2",
        "content": "Mutsai, chisimbisai She basa renyu!\nNorudo rwenyu chitumai mukati medu"
      },
      {
        "id": 27104,
        "title": "Stanza 3",
        "content": "Mutsai, chisimbisai She basa renyu!\nMumwoyo yedu tendesai NeShoko renyu !"
      },
      {
        "id": 27105,
        "title": "Stanza 4",
        "content": "Mutsai, chisimbisai She basa renyu!\nZvikomborero chinisai pakati pedu !"
      }
    ]
  },
  {
    "id": 272,
    "number": 10,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Nokunaka kwenyika",
    "stanzas": [
      {
        "id": 27201,
        "title": "Stanza 1",
        "content": "Nokunaka kwenyika, nedenga zvamakapa,\nNokutida kwenyu, kubvira tiri vana, Kristu.\nTenzi wedu, tinokurumbidza."
      },
      {
        "id": 27202,
        "title": "Stanza 2",
        "content": "Kuyevedza kwenguva, siku nesikati,\nGomo, rwizi, maruva, zuva, mwedzi, nyenyedzi,\nKristu, Tenzi wedu, tinokurumbidza."
      },
      {
        "id": 27203,
        "title": "Stanza 3",
        "content": "Rufaro remaziso, nzeve, hana, mwoyo,\nAnotiratidza, rugare rukuru,\nKristu, Tenzi, wedu, tinokurumbidza."
      },
      {
        "id": 27204,
        "title": "Stanza 4",
        "content": "Anodana vose, vabereki, vana.\nZvenyika nezvedenga, zvipo zvokururama,\nKristu, Tenzi, wedu, tinokurumbidza"
      },
      {
        "id": 27205,
        "title": "Stanza 5",
        "content": "Zvipovo zvatapiwa, mutifadze nazvo,\nMumazuva edu, anopera panyika,\nKristu, Tenzi, wedu, tinokurumbidza."
      }
    ]
  },
  {
    "id": 273,
    "number": 11,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Kudzai! Kudzai!",
    "stanzas": [
      {
        "id": 27301,
        "title": "Stanza 1",
        "content": "Kudzai! Kudzai! Jesu M`ponesi Mukuru!\nImbai rudo runoshamisa!\nMuomberei Mambo Mukuru wedenga!\nTaurai zita, mumuremekedze\nSoMufudzi, Jesu Mutungamiri\nMasikati napausikuwo\nMukudzei Mambo naTenzi Mukuru!\nImbai, kudzai, ukuru hwake!"
      },
      {
        "id": 27302,
        "title": "Stanza 2",
        "content": "Kudzai! Kudzai! Jesu M`ponesi Mukuru!\nWakanunura upenyu hwedu;\nOnai! pam`chinjikwa ari`po norudo\nKutisunungura pazvitadzo.\nOnai Onai! Kristu naTenzi wenyu.\nWakatambudzikira imi.\nMukudzei! Mambo naTenzi Mukuru\nImbai, kudzai, ukuru hwake!"
      },
      {
        "id": 27303,
        "title": "Stanza 3",
        "content": "Kudzai! Kudzai! Jesu M`ponesi Mukuru!\nDenga rose rinomukudza,\nJesu, Tenzi, ndiye mutongi narini;\nMbiri namsimba ndezvake.\nMugadzirei Mambo mumwoyo yenyu,\nMungakunde nokururama,\nMukudzei Mamba naTenzi Mukuru!\nImbai, kudzai, ukuru hwake!"
      },
      {
        "id": 27304,
        "title": "Stanza 4",
        "content": "Kudzai! Kudzai! Jesu M`ponesi Mukuru!\nMose makaponiswa na`Ye!\nMwoyo yenyu ngaizarurwe nhasi,\nMupei nzvimbo kuti agare`mo!\nMose imi, ndudzi dzepasi pose,\nMukudzei Mambo wavose!\nMukudzei Mambo naTenzi Mukuru!\nImbai, kudzai, ukuru hwake!"
      }
    ]
  },
  {
    "id": 274,
    "number": 12,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Jesu ndiye M`ponisi",
    "stanzas": [
      {
        "id": 27401,
        "title": "Stanza 1",
        "content": "Takanzwa shoko guru, Jesu ndiye M`ponisi;\nEnda-i muparidzewo, Jesu ndiye M`ponisi;\nMuyayambuke makungwa, nokukwira makomo,\nEndai makarayirwa, Jesu ndiye M`ponisi."
      },
      {
        "id": 27402,
        "title": "Stanza 2",
        "content": "Takura-i mashoko, Jesu ndiye M`ponisi;\nOkuudza vatadzi, Jesu ndiye M`ponisi;\nNzizi dzose imba-i, Namafungu egungwa,\nNdudzi dzose dzifare, Jesu ndiye M`ponisi."
      },
      {
        "id": 27403,
        "title": "Stanza 3",
        "content": "Vakundi vanoimba, Jesu ndiye M`ponisi;\nMwoyo usina simba, Jesu ndiye M`ponisi;\nVanosuwa ngavanzwe, Vachishaya rugare,\nNgangwe rufu rwoimba, Jesu ndiye M`ponisi."
      },
      {
        "id": 27404,
        "title": "Stanza 4",
        "content": "Mhepo ichashevedza, Jesu ndiye M`ponisi;\nTeverai nokuimba, Jesu ndiye M`ponisi;\nAkauyira vose, Vari panyika pose,\nRwiyo Rwokuzivisa Jesu ndiye M`ponisi."
      }
    ]
  },
  {
    "id": 275,
    "number": 13,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Riripo tsime",
    "stanzas": [
      {
        "id": 27501,
        "title": "Stanza 1",
        "content": "Riripo tsime rizere neropa raJesu;\nVatadzi vanoshamba`mo, vowana upenyu."
      },
      {
        "id": 27502,
        "title": "Khorasi",
        "content": "Ndinotenda, ndinofara, Jesu wandifira;\nNapamuchinjikwa ropa randaparadzirwa"
      },
      {
        "id": 27503,
        "title": "Stanza 2",
        "content": "Mbavha iye yakafara kuona tsime`ro;\nNeni mutadzi mukuru, ndashamba mun`ero."
      },
      {
        "id": 27504,
        "title": "Stanza 3",
        "content": "Ropa reGwayana raShe rine simba rose\nRokukusunungura vose . Pane zvakaipa."
      },
      {
        "id": 27505,
        "title": "Stanza 4",
        "content": "Kubvira nguva iyoyo yokuona ropa,\nNdakaparidza kuvanhu, kuti anovada."
      },
      {
        "id": 27506,
        "title": "Stanza 5",
        "content": "Ndichaimba ne`ro shoko, nguva dzangu dzose,\nNokudenga ndichafara, nokusingaperi."
      }
    ]
  },
  {
    "id": 276,
    "number": 14,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndichaimba zvaShe Jesu",
    "stanzas": [
      {
        "id": 27601,
        "title": "Stanza 1",
        "content": "Ndichaimba zvaShe Jesu, zvaakada neniwo;\nWakandifira`po padanda, wakandisunungurawo."
      },
      {
        "id": 27602,
        "title": "Khorasi",
        "content": "Imba neni zvaShe Jesu, wandifira neniwo;\nWakaripa mhaka dzangu,\nWakandisunungurawo"
      },
      {
        "id": 27603,
        "title": "Stanza 2",
        "content": "Ndichataurira vamwe, zvokutengwa naYe She.\nWakazondinzwira ngoni, wandidzikinurazve."
      },
      {
        "id": 27604,
        "title": "Stanza 3",
        "content": "Ndichakudza Jesu wangu, ane simba guru sei!\nAnondikundisa zvivi, rufu rungandiitei?"
      },
      {
        "id": 27605,
        "title": "Stanza 4",
        "content": "Ndichazoimbira Iye, muchengeti wanguwo,\nAnozondiperekedza kundisvitsa ikoko."
      }
    ]
  },
  {
    "id": 277,
    "number": 15,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Wafa M`ponisi Pachinjikano",
    "stanzas": [
      {
        "id": 27701,
        "title": "Stanza 1",
        "content": "Wafa M`ponisi Pachinjikano,\nNdini mutadzi ndafirwa na`Ye;\nNdinosukiwa neropa rake,\nNdakawana Ushe."
      },
      {
        "id": 27702,
        "title": "Khorasi",
        "content": "Ndakawana Ushe, Ndakawana Ushe,\nNdakacheneswa mwoyo wangu\nNdakawanaa Ushe."
      },
      {
        "id": 27703,
        "title": "Stanza 2",
        "content": "Ndicho chidziva cheropa rake,\nHwose utadzi hwosukwa nacho;\nMachiri mungandisuke Jesu,\nNdakawana Ushe"
      },
      {
        "id": 27704,
        "title": "Stanza 3",
        "content": "Ndakaponeswa ndokatyamara,\nJesu agere mumwoyo mangu;\nAkapindamo pachinjikano,\nNdakawana Ushe."
      },
      {
        "id": 27705,
        "title": "Stanza 4",
        "content": "Iwe mutadzi chiuya zvino,\nUise mweya paMupinisi;\nUya ushande muropa rake,\nUchawana Ushe"
      },
      {
        "id": 27706,
        "title": "Khorasi",
        "content": "Uchawana Ushe, Uchawana Ushe,\nUchacheneswa mwoyo wako\nUchawana Ushe."
      }
    ]
  },
  {
    "id": 278,
    "number": 16,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Rava zvose zvaakakupa",
    "stanzas": [
      {
        "id": 27801,
        "title": "Stanza 1",
        "content": "Kana nhamo zhinji dzichikukomba;\nIwe, uchityawo kuparadzwa,\nRava zvose zvawakambopiwa,\nUchaona zvawakaitirwa."
      },
      {
        "id": 27802,
        "title": "Khorasi",
        "content": "Rava zvose zvaakakupa,\nFunga zvose zvaakaita;\nRava zvose, chiverenga;\n\nUchazokanuka zvawakapiwa."
      },
      {
        "id": 27803,
        "title": "Stanza 2",
        "content": "Kana mwoyo wako waremerwa.\nUchazokoniwawo mutoro,\nDzinga kunyunyuta, chiverenga,\nZvikomborero She zvaakakupa."
      },
      {
        "id": 27804,
        "title": "Stanza 3",
        "content": "Kana uchiona vakafuma,\nRangarira zvawakavigirwa;\nFunga zvawakandogadzirirwa;\nFunga She akakugadzirira."
      }
    ]
  },
  {
    "id": 279,
    "number": 17,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndinoona Jesu Kristu",
    "stanzas": [
      {
        "id": 27901,
        "title": "Stanza 1",
        "content": "Ndinoona Jesu Kristu pakuguma kwoupenyu,\nNdinoona norufaro Muponisi wanguwo."
      },
      {
        "id": 27902,
        "title": "Khorasi",
        "content": "Ndinoona uso hwake, une tsitsi kwandiri;\nNdinoona mbri yake, ndinogara naYe."
      },
      {
        "id": 27903,
        "title": "Stanza 2",
        "content": "Zvino handingamuoni, asi ndomuda kwazvo.\nNdinoenda kundomuona nokudzimba dzake`dzo."
      },
      {
        "id": 27904,
        "title": "Stanza 3",
        "content": "Ndinoimbira Jesu She, pakusvika kudenga;\nZvinyangadzo zvapfuura, zvose zvava zvitsva`ko."
      },
      {
        "id": 27905,
        "title": "Stanza 4",
        "content": "Ndinoona uso hwake, ndomutya Iye oga,\nNdinomutarisa kwazvo, ndinomunamatawo."
      }
    ]
  },
  {
    "id": 280,
    "number": 18,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ane simba kukuponesa",
    "stanzas": [
      {
        "id": 28001,
        "title": "Stanza 1",
        "content": "Tanzwa rwiyo rwakanakisa,\nRwapinda dzimwe dzepasi pano;\nRwiyo runoimbwa panyika dzose,\nMwari ane simba kukuponesa."
      },
      {
        "id": 28002,
        "title": "Khorasi",
        "content": "Ane simba kukuponesa,\nAne simba kukuponesa,\nKuti tichisiya zvitema zvedu,\nMwari ane simba kukuponesa."
      },
      {
        "id": 28003,
        "title": "Stanza 2",
        "content": "Tanzwa rwiyo rwabva kudenga,\nMazwi aarwo ano upenyu,\nAnotiunzira ndiBaba vedu,\nIye ane simba kukuponesa."
      },
      {
        "id": 28004,
        "title": "Stanza 3",
        "content": "Tanzwa rwiyo rwakanakisa,\nRunosvika kudenga napasi;\nNgatiudze vanhu panyika dzose,\nMwari ane simba kuvaponesa."
      }
    ]
  },
  {
    "id": 281,
    "number": 19,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Jesu muri rudo diko",
    "stanzas": [
      {
        "id": 28101,
        "title": "Stanza 1",
        "content": "Jesu muri rudo diko makadzika pasi pano,\nNokusunungura isu, tanga tiri varaswi.\nTakadiwa zvirokwazvo\n, muUmambo hwenyu She,\nZvino basa redu repano, ngarionewe rudo."
      },
      {
        "id": 28102,
        "title": "Stanza 2",
        "content": "Mwari mune mwoyochena, munodisa vanhu vose.\nHamuregi kuvadisa, munovada vose.\nZvino tinomukumbira, bvisai zvose zvakaipa,\nNharo, shungu, kuba, nhema, kuti tifanane`mi."
      },
      {
        "id": 28103,
        "title": "Stanza 3",
        "content": "Tinomukumbira Baba, mweya wakachena dzikai.\nPindai mumwoyo yedu, tizarurirei imi.\nPindai, garai muno nhasi, nokusingaperi-peri,\nToda kuva vanhu venyu, kumufadza misi yose."
      }
    ]
  },
  {
    "id": 282,
    "number": 20,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Chinjikano Ipapo",
    "stanzas": [
      {
        "id": 28201,
        "title": "Stanza 1",
        "content": "Chinjikano ndirero tsime roupenyu,\nRinopodza vose `She, vanouya kwenyu."
      },
      {
        "id": 28202,
        "title": "Khorasi",
        "content": "Ipapo, ipapo, Jesu ndichakudza,\nKusvikira ikweyo, ndichimurumbidza."
      },
      {
        "id": 28203,
        "title": "Stanza 2",
        "content": "Chinjikano ipapo, ndanga ndichihuta,\nBva, nenyasha ndipapo, pandakazofara."
      },
      {
        "id": 28204,
        "title": "Stanza 3",
        "content": "Maratidza ipapo, tsitsi dzengu huru,\nZvino mundibatsirei, kuifunga kwazvo."
      },
      {
        "id": 28205,
        "title": "Stanza 4",
        "content": "Ndorambira ipapo, ndichitenda kwoga,\nPamwe handizivi`po, asi apo poga."
      }
    ]
  },
  {
    "id": 283,
    "number": 21,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Mazwi oruponiso",
    "stanzas": [
      {
        "id": 28301,
        "title": "Stanza 1",
        "content": "Mazwi akanakisa, imbaizve kwandiri,\nNgandione kunaka, mazwi oruponiso.\nMazwi akanaka, anotipa zano."
      },
      {
        "id": 28302,
        "title": "Khorasi",
        "content": "Akanaka, oshamisa, mazwi oruponiso;\nAkanaka, oshamisa, mazwi oruponiso"
      },
      {
        "id": 28303,
        "title": "Stanza 2",
        "content": "Anopiwa naKristu, mazwi oruponiso;\nInzwai mose vatadzi, mazwi oruponiso\nMazwi oupenyu, mungapiwe na`Ye."
      },
      {
        "id": 28304,
        "title": "Stanza 3",
        "content": "Inzwai mose maShoko, mazwi oruponiso;\nAnokupai rufaro, mazwi oruponiso;\nUngasunungurwe, chipo choM`ponisi."
      }
    ]
  },
  {
    "id": 284,
    "number": 22,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Hama dzangu dzavatendi",
    "stanzas": [
      {
        "id": 28401,
        "title": "Stanza 1",
        "content": "Hama dzangu dzavatendi, musanete-ba,\nNgatishinge zvirokwazvo, tisakundiwe."
      },
      {
        "id": 28402,
        "title": "Khorasi",
        "content": "Tiri vanhu vakadini? Hatineti-ba,\nTinomira takasimba hatineti-ba"
      },
      {
        "id": 28403,
        "title": "Stanza 2",
        "content": "Hama dzangu ngattirinde, tichengete`su;\nTiteure kuna Baba, ndiMwari wedu."
      },
      {
        "id": 28404,
        "title": "Stanza 3",
        "content": "Hama dzangu tine nzira tisaishore,\nInoenda kuna Baba, tinodaidzwa."
      },
      {
        "id": 28405,
        "title": "Stanza 4",
        "content": "Hama dzangu kune nzvimbo kwatichagara,\nNgatifambe zvakanaka, tichikudza; She."
      }
    ]
  },
  {
    "id": 285,
    "number": 23,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Jesu Mutungamiri",
    "stanzas": [
      {
        "id": 28501,
        "title": "Stanza 1",
        "content": "Jesu Mutungamiri, wevatendi vepasi;\nMafungu ndinoatya, kana mhepo yasvika;\nNdinotenda, Handityi, Jesu Mutungamiri (Pamhidza)"
      },
      {
        "id": 28502,
        "title": "Stanza 2",
        "content": "Jesu Mutungamiri, paupenyu hwepasi;\nNdinotenda ndofara, ndinoumwe wakadai,\nM`perekedzi wavose, Jesu Mutungamiri. (Pamhidza)"
      },
      {
        "id": 28503,
        "title": "Stanza 3",
        "content": "Jesu Mutungamiri, wokuenda kudenga;\nNzira ine mwenje, zano renyu rigere,\nAngu wonditsusa tenzi, mundichengetei. (Pamhidza)"
      }
    ]
  },
  {
    "id": 286,
    "number": 24,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Mazita anodaidzwa",
    "stanzas": [
      {
        "id": 28601,
        "title": "Stanza 1",
        "content": "Apo Tenzi anoridza tsuri yokuguma`yo,\nApo nguva yepasi yaperawo,\nApo vakanaka vose vanounganidzwa`po,\nMazita anodaidzwa ndiri`ko."
      },
      {
        "id": 28602,
        "title": "Khorasi",
        "content": "Mazita anodaidzwa,\nMazita anodaidzwa,\nMazita anodaidzwa,\nAnodaidzwa kudenga ndiriko."
      },
      {
        "id": 28603,
        "title": "Stanza 2",
        "content": "Pamusiyo wokumuka vakafa muna Kristu,\nVanoona mbiri huru yake`yo;\nApo vasarudzwi vanosangana kumushako,\nMazita anodaidzwa ndiri`ko."
      },
      {
        "id": 28604,
        "title": "Stanza 3",
        "content": "Ngandibate basa rake kuti rinozopera,\nNgandishumaire rudo rwaMwari\nNdizvo Jesu anouya kutora vanhu vake,\nMazita anodaidzwa ndiri`ko."
      }
    ]
  },
  {
    "id": 287,
    "number": 25,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Rakanaka iro zuva",
    "stanzas": [
      {
        "id": 28701,
        "title": "Stanza 1",
        "content": "Rakanaka iro zuva randakatenda kuna She;\nMwoyo wangu unofara, ndinoudza vanhu vose."
      },
      {
        "id": 28702,
        "title": "Khorasi",
        "content": "Ndafara, ndafara, nokuti ndakashambidzwa;\nJesu wakandidzidzisa kutsunga nokuteura; Ndafara, ndafara, nokuti ndakashambidzwa."
      },
      {
        "id": 28703,
        "title": "Stanza 2",
        "content": "Chitenderano chitsvene chinondisunga kuna She\nNgaizadzwe imba yeake, nenziyo dzinomukudza."
      },
      {
        "id": 28704,
        "title": "Stanza 3",
        "content": "Basa guru rakapedzwa, ari wangu, ndiri wake;\nNdinofara kumubvuma, ndayevedzwa nezwi rake."
      },
      {
        "id": 28705,
        "title": "Stanza 4",
        "content": "Mwoyo wangu uzorore, neichi Chitenderano;\nUrege kusiya Ishe, iye anadzo nduramo."
      },
      {
        "id": 28706,
        "title": "Stanza 5",
        "content": "Wokudenga wakachinzwa ichi chivimbiso changu;\nAchachinzwa misi yose dakara rusvike rufu."
      }
    ]
  },
  {
    "id": 288,
    "number": 26,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Dyara mangwanani",
    "stanzas": [
      {
        "id": 28801,
        "title": "Stanza 1",
        "content": "Dyara mangwanani, mbeu dzakanaka,\nDyara masikati, namadekwana,\nVakushi vashoma; unodamnwa nhasi;\nTinodanwa tose kubasa raShe."
      },
      {
        "id": 28802,
        "title": "Khorasi",
        "content": "Uyai navo, uyai navo,\nVanhu varasika, chidzoserai,\nUyai navo, uyai navo,\nVanhu varasika, chivadzoserai."
      },
      {
        "id": 28803,
        "title": "Stanza 2",
        "content": "Mbeu tinodyara ndiro Shoko raShe,\nRinotidzidzisa nzira kudenga,\nRinoratidzawo Jesu soM`ponesi\nWavatadzi vose vakarasika."
      },
      {
        "id": 28804,
        "title": "Stanza 3",
        "content": "Varipo vazhinji vanofamba zvavo,\nVasina kuudzwa zvoMuponesi Isu vanyai vaShe, takapiwa basa\nKudzosera vose vari murima"
      },
      {
        "id": 28805,
        "title": "Stanza 4",
        "content": "Tiende, tidyare, tirege kkuzeza,\nZuva rinouya tichazorora,\nTichapiwa tose mubayiro wedi\nTichakwana tose nokufarawo."
      }
    ]
  },
  {
    "id": 289,
    "number": 27,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Kakuna hama kupinda Jesu",
    "stanzas": [
      {
        "id": 28901,
        "title": "Stanza 1",
        "content": "Hakuna hama kupinda Jesu, hakuna, hakuna;\nHakuna mumwe kurapa vose, hakuna, hakuna."
      },
      {
        "id": 28902,
        "title": "Khorasi",
        "content": "Jesu ndiye shamwari yedu\nWonatsa kutungamira;\nHakuna hama kupinda Jesu,\nHakuna, hakuna."
      },
      {
        "id": 28903,
        "title": "Stanza 2",
        "content": "Hakuna mumwe mukuru saYe, hakuna, hakuna;\nHakuna mumwe musununguri, hakuna, hakuna."
      },
      {
        "id": 28904,
        "title": "Stanza 3",
        "content": "Hakuna chipo chikuru secho, hakuna, hakuna,\nHakuna, mumwe kurapamwoyo hakuna, hakuna."
      },
      {
        "id": 28905,
        "title": "Stanza 4",
        "content": "Hakuna nguva tisingaonwi, hakuna, hakuna;\nHapana nzvimbo asingazivi, hakuna, hakuna."
      }
    ]
  },
  {
    "id": 290,
    "number": 28,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Mune simba muropa reGwayana",
    "stanzas": [
      {
        "id": 29001,
        "title": "Stanza 1",
        "content": "Ungasunungurwe pakuipa,\nMuropa raShe, muna masimba;\nUngakunde zvose zvakaipa,\nRopa rake rine simba."
      },
      {
        "id": 29002,
        "title": "Khorasi",
        "content": "Mune simba, simba, rinoshamisa,\nMuropa, reGwayana;\nMune simba, simba, rinoshamisa\nMuropa reGwayana."
      },
      {
        "id": 29003,
        "title": "Stanza 2",
        "content": "Ungasunungurwe pane hasha;\nMuropa raShe muna masimba;\nUya ushambidzwe pakavari, Ropa rake rine simba."
      },
      {
        "id": 29004,
        "title": "Stanza 3",
        "content": "Ungatseniswe-tsveniswe kwazvo,\nMuropa raShe, muna masimba;\nUnganunurwe mumanyangadzo\nRopa rake rine simba."
      },
      {
        "id": 29005,
        "title": "Stanza 4",
        "content": "Ungamuitire basa Mambo,\nMuropa raShe, muna masimba;\nUngagaromukudza nenziyo,\nRopa rake rine simba."
      },
      {
        "id": 29006,
        "title": "Khorasi",
        "content": "Riripo simba, simba, rinoshamisa\nMuropa reGwayana;\nRiripo simba, simba, rinoshamisa,\nMuropa reGwayana."
      }
    ]
  },
  {
    "id": 291,
    "number": 29,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Vimba Na`She",
    "stanzas": [
      {
        "id": 29101,
        "title": "Stanza 1",
        "content": "Tichifamba isu, neizwi raJesu,\nAnovenekera panzira;\nTichiita kuda kwaJesu, wakatida\nAnogara nesu nesimba."
      },
      {
        "id": 29102,
        "title": "Khorasi",
        "content": "Vimba naShe, ngatimoterere,\nTichafara misi yose, Ticivimba naYe."
      },
      {
        "id": 29103,
        "title": "Stanza 2",
        "content": "Kana tingaone mimvuri, makore,\nZichabviswa noUso hwake;\nHapana kuchema, hapana kutyiswa,\nKana tichivimba naIshe."
      },
      {
        "id": 29104,
        "title": "Stanza 3",
        "content": "Hapana mutoro, namatambudziko,\nZvisina mubayiro wazvo\nHakuna kusuwa, hapana M`chinjikwa,\nZvose zvina makomborero."
      },
      {
        "id": 29105,
        "title": "Stanza 4",
        "content": "Hatizivi rudo, rufaro rwaMambo,\nTisingazvipire kuna She;\nNyasha waratidza, rufaro watipa\nNdorwavo vanovimba naYe."
      },
      {
        "id": 29106,
        "title": "Stanza 5",
        "content": "Nomukuwadzana na`Ye munzira;\nTichafamba naYe munzira,\nTichamutera, tichamutevera\nHatichazotya, tichivimba."
      }
    ]
  },
  {
    "id": 292,
    "number": 30,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndingashambidzwe nei?",
    "stanzas": [
      {
        "id": 29201,
        "title": "Stanza 1",
        "content": "Ndingashambidzwe nei? Iropa raJesu chete;\nNdingatsveniswe nei? Irpoa raJesu chete.'"
      },
      {
        "id": 29202,
        "title": "Khorasi",
        "content": "Itsime reropa rinondishambidza,\n Handizivi rimwe, Iropa raJesu chete."
      },
      {
        "id": 29203,
        "title": "Stanza 2",
        "content": "Hakuna kucheniswa, kunze kweropa raJesu;\nHakuna kuregerwa, kunze kweropa raJesu"
      },
      {
        "id": 29204,
        "title": "Stanza 3",
        "content": "Hakuna kununurwa, kunze kweropa raJesu,\nHandigoni kurapwa kunze kweroparaJesu."
      },
      {
        "id": 29205,
        "title": "Stanza 4",
        "content": "Hapana netariro, kunze kuweropa raJesu;\nHapana kururama, kuknze kweropa raJesu."
      }
    ]
  },
  {
    "id": 293,
    "number": 31,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Pachinjikano",
    "stanzas": [
      {
        "id": 29301,
        "title": "Stanza 1",
        "content": "Ndinotenda Jesu wangu, handinyari Tenzi,\nNdovimba nezvipo zvenyu, ndinokurumbidzai."
      },
      {
        "id": 29302,
        "title": "Khorasi",
        "content": "Pa-chinjikano, ndaona chiedza\nKuremerwa kwomwoyo kwabviswa\nNdakacheniswa, nokusvinudziwa,\nNdapiwa rufaro rwomwoyo."
      },
      {
        "id": 29303,
        "title": "Stanza 2",
        "content": "Jesu Ishe, ndinoziv, ndinokurumbidza!\n Musazondikanganwa. Musazondirasa."
      },
      {
        "id": 29304,
        "title": "Stanza 3",
        "content": "Ndinozvipira kwaari, ndozikanwa naYe,\nNdinovanzika maari pamazuva ose."
      },
      {
        "id": 29305,
        "title": "Stanza 4",
        "content": "Achidana zita rangu, kuna Baba vake,\nNdichapinda mumusha wokusingaperi"
      }
    ]
  },
  {
    "id": 294,
    "number": 32,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndinotevera, ndotevera Jesu",
    "stanzas": [
      {
        "id": 29401,
        "title": "Stanza 1",
        "content": "Muchiunde ndichaenda naTenzi wangu,\nKunoyerera mvura tsvenewo;\nKwose kwaari kunditungamirira,\nNdichatevera mumakwara ake."
      },
      {
        "id": 29402,
        "title": "Khorasi",
        "content": "Ndinotevera, ndotevera Jesu,\nPamusha, parwendo, ndomutevera,\nNdinotevera, ndotevera Jesu,\nKwose kwaanoenda, ndotevera."
      },
      {
        "id": 29403,
        "title": "Stanza 2",
        "content": "Muchiunde ndichaenda naTenzi wangu\nNyangwe pose padutu guru;\nAchazondichengeta handichazoeziba\n\nNjodzi zhinji hadzichazondityisi."
      },
      {
        "id": 29404,
        "title": "Stanza 3",
        "content": "Muchiunde ndichaenda naTenzi wangu,\nNdichivimbisika nM`ponisi\nAchanditungamirawo kuenda kudenga\nKwandichazofara rini narini."
      }
    ]
  },
  {
    "id": 295,
    "number": 33,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Sezva ndakadai",
    "stanzas": [
      {
        "id": 29501,
        "title": "Stanza 1",
        "content": "Sezva ndakadai, Jesu, ndisina chinhu pachangu,\nWakafa nom`towo wangu, gwayana raShe ndouya."
      },
      {
        "id": 29502,
        "title": "Stanza 2",
        "content": "Sezva-ndakadai, Ishe, Ndisingambozvitsenisa,\nNdimi mungandishambidze, gwayana raShe ndouya."
      },
      {
        "id": 29503,
        "title": "Stanza 3",
        "content": "Sezva;-ndakadai, Jes, handizivi nzira yangu;\nNokukahadzika kwangu, gwayana raShe ndouya"
      },
      {
        "id": 29504,
        "title": "Stanza 4",
        "content": "Sezva-ndakadai, Ishe ndiri bofu, ndiri rombe,\nSezva ndinoshaya zvose, gwayana raShe, ndouya."
      },
      {
        "id": 29505,
        "title": "Stanza 5",
        "content": "Sezva-ndakadai, Ishe, ndimi mungandigam`chire,\nWoita ndiregererwe, gwayana raShe, ndouya."
      },
      {
        "id": 29506,
        "title": "Stanza 6",
        "content": "Sezva-ndakadai, Jesu, norudo rwenyu rukuru,\nNdiri wenyu, muri wangu; gwayana raShe, ndouya."
      }
    ]
  },
  {
    "id": 296,
    "number": 34,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Vanhu uyai kuna Jesu `She",
    "stanzas": [
      {
        "id": 29601,
        "title": "Stanza 1",
        "content": "Vanhu uyai kuna Jesu`She,\nMucharatidzwa nzira na`Ye;\nNhasi anomudana imi, achiti, \"Chiuyai\""
      },
      {
        "id": 29602,
        "title": "Khorasi",
        "content": "Tichazondofara ikweyo,\nKwatichandosunungurwawo,\nKana tazosangana naShe,\n\nUko kudenga`ko."
      },
      {
        "id": 29603,
        "title": "Stanza 2",
        "content": "Mose uyai, ngatimunzwei,\nNzwi rake tose tifarirei!\nZvino ngatimusanangurei, tichanonokerei?"
      },
      {
        "id": 29604,
        "title": "Stanza 3",
        "content": "Ari pakati pedu, fungai\nAmnomudana, chitererai;\nNzwi rake nyoro mose inzwai; \"Kwandiri chiuyai.\""
      }
    ]
  },
  {
    "id": 297,
    "number": 35,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Kristu anodisa vanhu",
    "stanzas": [
      {
        "id": 29701,
        "title": "Stanza 1",
        "content": "Kristu anodisa vanhu, anodaidzira vose,\nVakaipa ngavauye, na`vo vasisina simba."
      },
      {
        "id": 29702,
        "title": "Khorasi",
        "content": "Udzai vose, udzai vose, Kristu anodisa vose,\nUdzai vose pakachena, Kristu anodisa vose."
      },
      {
        "id": 29703,
        "title": "Stanza 2",
        "content": "Izwi rake rechokwadi, rinogara nokugara;\nNdiri kunyatsochengeta mazzwi ake oupenyu."
      },
      {
        "id": 29704,
        "title": "Stanza 3",
        "content": "Kana uyo ane shave, ngaauye kuna Jesu,\nNdiye oga ane simba, rokubvisa zvakaipa."
      },
      {
        "id": 29705,
        "title": "Stanza 4",
        "content": "Zvino pano handiraswi, ndiri mwana wake, Tenzi,\nHandichatyiba rufu, ndoponeswa misi yose."
      }
    ]
  },
  {
    "id": 298,
    "number": 36,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Wagadzira nzvimbo yomuponisi?",
    "stanzas": [
      {
        "id": 29801,
        "title": "Stanza 1",
        "content": "Wagadzira nhasi here, nzvimbo yoMuponisi?\nAkabvisa zvivi zvako, anokumirirawo"
      },
      {
        "id": 29802,
        "title": "Khorasi",
        "content": "Hongu ndine nzvimbo Jesu!\nMambo wemadzimambo!\nNdazarura mwoyo wangu,\nKutambira Jesu`She.'"
      },
      {
        "id": 29803,
        "title": "Stanza 2",
        "content": "Mwari wakatisikira kuva nzvimbo yokugara;\nAnotuma Mweya Mutsvene kuti agare nesu."
      },
      {
        "id": 29804,
        "title": "Stanza 3",
        "content": "Une nzvimbo yoM`ponisi, uyo wakakununura;\nZvose zvako zvawarasa, akauya kunonokurei?"
      },
      {
        "id": 29805,
        "title": "Stanza 4",
        "content": "Ipa mwoyo wako wose, ari kukumirira,\nNyasha dzake dzinopera, uri kunonokerei?"
      }
    ]
  },
  {
    "id": 299,
    "number": 37,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndakanzwa Jesu achiti",
    "stanzas": [
      {
        "id": 29901,
        "title": "Stanza 1",
        "content": "Ndakanzwa Jesu achiti; kwandiri, chiuyai;\nManeta maremerwawo, ndichakuzorodzai!\nNdauya kuna Jesu`She. Ndanga ndaneta sei!\nNdikazopiwa zoror naYe, ndofara sei!"
      },
      {
        "id": 29902,
        "title": "Stanza 2",
        "content": "Ndakanzwa Jesu achiti: uyai ndigokupai;\nImvura mhenyu iyoyi, mutore chiinwayi;\nNdauya kuna Jesu`She ndatora ndikanwa;\nNdapodza nyota yangu sei, ndappiwa upenyu."
      },
      {
        "id": 29903,
        "title": "Stanza 3",
        "content": "Ndakanzwa Jesu achiti kwandiri tarirai!\nChiedza ndinongokupai ndichakuperekai.\nNdauya kuna Jesu She, izuva ranguwo,\nRichandivhenekera zve parwendo rwangu`rwu!"
      }
    ]
  },
  {
    "id": 300,
    "number": 38,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndiri kudaidzwa",
    "stanzas": [
      {
        "id": 30001,
        "title": "Stanza 1",
        "content": "Ndiri kudaidzwa zvino nezwi raShe.\nKuti ndishambidzwe zvangu, neropa rake."
      },
      {
        "id": 30002,
        "title": "Khorasi",
        "content": "Ndouya Jesu, kwamuri zvino;\nShambidzai mwoyo wangu\nNeropa renyu"
      },
      {
        "id": 30003,
        "title": "Stanza 2",
        "content": "Ndashaya masimba asi achandipa;\nAchandishambidza kwazvo, achanditsvenisa."
      },
      {
        "id": 30004,
        "title": "Stanza 3",
        "content": "Jesu anodana kuti ndinzwe rudo,\nNorugare netariro yenyika nedenga."
      },
      {
        "id": 30005,
        "title": "Stanza 4",
        "content": "Jesu wasimbisa zvaitwa mandiri;\nNokuwanza tsitsi dzake munzvimbo yezvivi."
      }
    ]
  },
  {
    "id": 301,
    "number": 39,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Farirai vadikanwa",
    "stanzas": [
      {
        "id": 30101,
        "title": "Stanza 1",
        "content": "Farirai vadikanwa muna Jesu`She wedu,\nTinodanwa zvino pano kudenga kum`soro`ko"
      },
      {
        "id": 30102,
        "title": "Khorasi",
        "content": "Zvotopinda kudenga,\nKuona Jesu M`ponisi wedu;\nTichafara tose, tichaimba, Hareruya!"
      },
      {
        "id": 30103,
        "title": "Stanza 2",
        "content": "Tinopfeka musi uyo zvisimiro zvichena\nZvotopinda mberi kwaShe kudenga kum`soro`k`o"
      },
      {
        "id": 30104,
        "title": "Stanza 3",
        "content": "Imi hama makadini munozofamba nesu\nToonana zuva iro kudenga kum`soro`ko."
      }
    ]
  },
  {
    "id": 302,
    "number": 40,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Uya zvako kuna Jesu",
    "stanzas": [
      {
        "id": 30201,
        "title": "Stanza 1",
        "content": "Uya zvako kuna Jesu, uri kudaidzwa zvino;\nTenda Muponisi wako, uitirwe nyasha na`Yo."
      },
      {
        "id": 30202,
        "title": "Khorasi",
        "content": "Rasha hasha dzako dzose,\nNokuti dzinofungamidza pasi,\nUya kwaM`ponisi wako\nUitirwe nyasha na`Ye."
      },
      {
        "id": 30203,
        "title": "Stanza 2",
        "content": "Uya zvako kuna Jesu, rega kungomira bedzi,\nGaramuchira Muponisi, anobvisa zvitema zvako."
      },
      {
        "id": 30204,
        "title": "Stanza 3",
        "content": "Kumbira, munopiwa, tsvagaiwo, munowana,\nGogodza, muzarurirwe, Kristu agopinda mamuri."
      }
    ]
  },
  {
    "id": 303,
    "number": 41,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Zuva guru richauya",
    "stanzas": [
      {
        "id": 30301,
        "title": "Stanza 1",
        "content": "Zuva guru richauya, chitarira richauya,\nIraviro yakaitwa, She achiti, Ndichauya."
      },
      {
        "id": 30302,
        "title": "Khorasi",
        "content": "Tichaimba zuva iro, tichiona She wouya.\nImbirai, farira, wouya She wedu\nImbirai, farirai, wouya She wedu."
      },
      {
        "id": 30303,
        "title": "Stanza 2",
        "content": "Nyika yedu ichafara She wouya tichafara\nPamakore achauya titarirei tichifara."
      },
      {
        "id": 30304,
        "title": "Stanza 3",
        "content": "Pachigaro chinopenya, uchagara achitonga\nNdudzi dzose dzichamira dzichihuta achitonga."
      },
      {
        "id": 30305,
        "title": "Stanza 4",
        "content": "Vokurudyi uchavati, chipinda mumufaro.\nMakakunda chipindai mumufaro waShe wedu."
      }
    ]
  },
  {
    "id": 304,
    "number": 42,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Chindinatsai!",
    "stanzas": [
      {
        "id": 30401,
        "title": "Stanza 1",
        "content": "She Jesu ndinoda kunatswa nemi,\nMupinde mumwoyo mugosabvazve!\nBvisai zvivi zvose, mapfumo dzingai;\nNdisukeiwo zvino She, chindinatsai,"
      },
      {
        "id": 30402,
        "title": "Khorasi",
        "content": "Chindinatsai She, chindinatsai!\nNdisukeiwo zvino She, chindinatsai!"
      },
      {
        "id": 30403,
        "title": "Stanza 2",
        "content": "She Jesu makwapa ezvivi dzimai;\nIsai ropa renyu,netsvina sukai;\nNdorasawo zvivi nezvose, onai!\nNdisukeiwo zvino She, chindinatsai!"
      },
      {
        "id": 30404,
        "title": "Stanza 3",
        "content": "She Jesu ndipiwe mwoyo m`tsva nemi,\nMungandibatsire, ndigozvipe`mi;\nMuchandidaidza, ndinomutendai;\nNdisukeiwo zvino, She, chindinatsai!"
      }
    ]
  },
  {
    "id": 305,
    "number": 43,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Kana ndaona M`chinjikwa",
    "stanzas": [
      {
        "id": 30501,
        "title": "Stanza 1",
        "content": "Kana ndaona M`chinjikwa, paakafa Jesu Kristu;\nZvose zvangu ndaderedza,nokuzvishora pachangu"
      },
      {
        "id": 30502,
        "title": "Stanza 2",
        "content": "Ndirambidze kuzvikudza, kunze kwokufa kwaishe;\nZvose zvinondinyangadza, zvibviswe neropa rake."
      },
      {
        "id": 30503,
        "title": "Stanza 3",
        "content": "Uso, zvanza, tsoka dzake, zvose zvinoreva rudo;\nNengundu yeminzwa yake, inorevawo rusuwo."
      },
      {
        "id": 30504,
        "title": "Stanza 4",
        "content": "Dai ndine zvinhu zvose,nezvivi hazvikodzeri;\nRudo urwu rwakadai, runodisa ndizvipire."
      }
    ]
  },
  {
    "id": 306,
    "number": 44,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "M`nyaradzi auya",
    "stanzas": [
      {
        "id": 30601,
        "title": "Stanza 1",
        "content": "Paridza-i Shoko kuna vanhu vose,\nKwose kwose kuna vanotambudzika,\nKune ndudzi dzose, Shoko romufaro\n\"M`nyaradzi auya."
      },
      {
        "id": 30602,
        "title": "Khorasi",
        "content": "M`nyaradzi auya, Abva kudenga`ko,\nMweya Mutsvenewo chipikirwa chaShe Paridza-i Shoko, kuna vanhu vose\n\"M`nyaradzi auya.\""
      },
      {
        "id": 30603,
        "title": "Stanza 2",
        "content": "Kana kune rima, chiedza chauya;\nKutivhenekera, kutipa upenyu;\nNdiJesu Kristu She akatitumira,\n\"M`nyaradzi auya.\""
      },
      {
        "id": 30604,
        "title": "Stanza 3",
        "content": "Ishe wamadzishe, waswedera pedyo,\nKusunungurawo, vose vakasungwa,\nTichafara navo, vakasunungurwa,\n\"M`nyaradzi auya.\""
      },
      {
        "id": 30605,
        "title": "Stanza 4",
        "content": "Handei, tiparidzei, mashoko anzwike,\nVazhinji vatende, vazhinji vazadzwe,\nKuti vagoziva, simba ratapiwa,\n\"M`nyaradzi auya.\""
      }
    ]
  },
  {
    "id": 307,
    "number": 45,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "She Jesu ndazvisunga",
    "stanzas": [
      {
        "id": 30701,
        "title": "Stanza 1",
        "content": "She Jesu ndazvisunga, kuzokushumirai;\nMugare pedyo neni She wangu chiuyai;\nHandityi pfumo rose, muchipandirizve,\nHandichazotsauki, ndisi pamuri She!"
      },
      {
        "id": 30702,
        "title": "Stanza 2",
        "content": "Ishe ngandimunzwei, imi munondida;\nNzwi renyu ndirizive nditerer iroro,\nRevai ndigonzwa kwazvo ndigomufadza She!"
      },
      {
        "id": 30703,
        "title": "Stanza 3",
        "content": "She Jesu! makamboti: vanokushumirai,\nPamakakwira, apo vachakuteverai;\nShe Jesu ndazvisunga kuzokushumirai,\nMundipe nyasha dzenyu ndigokuteverai!"
      },
      {
        "id": 30704,
        "title": "Stanza 4",
        "content": "She Jesu ngandione makwara enyu`po;\nNdigozotsika awo nesimba renyuwo;\nMutungamirei Jesu ndikweverei`po;\nMugondigamuchira kudenga ikoko!"
      }
    ]
  },
  {
    "id": 308,
    "number": 46,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndiswededzei Mwari pedyo nemi",
    "stanzas": [
      {
        "id": 30801,
        "title": "Stanza 1",
        "content": "Ndiswededzei Mwari pedyo nemi,\nKana ndoremerwa, ndisimbise,\nRumbo rwangu ruve \"Pedyo Mwari nemi,\nPedyo Mwari nemi, pedyo nemi.\""
      },
      {
        "id": 30802,
        "title": "Stanza 2",
        "content": "Ndichinge mufambi pamauro,\nNdokotsira bedzi pamatombo,\nNdidoda muhope, kuva nemi Ishe,\nPedyo nemi Ishe, pedyo nemi."
      },
      {
        "id": 30803,
        "title": "Stanza 3",
        "content": "Nzira yangu ive yokudenga,\nZvinopiwa nemi ndezvomutsa\nNgirozi dziuye, dzinditungamire,\nPedyo nemi Ishe, pedyo nemi."
      },
      {
        "id": 30804,
        "title": "Stanza 4",
        "content": "Norufaro rwenyu ndichamuka,\nPakutambudzika, ndomukudza;\nPakutambudzika, anditungamire,\nPedyo nemi Ishe,pedyo nemi."
      },
      {
        "id": 30805,
        "title": "Stanza 5",
        "content": "Ndichibhururka pakudenga,\nPam`soro pezuva ndichienda,\nNdichazoimbazve, pedyo Mwari nemi,\nPedyo Mwari nemi, pedyo nemi."
      }
    ]
  },
  {
    "id": 309,
    "number": 47,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndikomborerei Ishe",
    "stanzas": [
      {
        "id": 30901,
        "title": "Stanza 1",
        "content": "Muchikomborera vamwe, musandipfuure, Ishe;\nMwoyo wangu une nyota; She nditonhodzei"
      },
      {
        "id": 30902,
        "title": "Khorasi",
        "content": "Ishe wangu, Ishe wangu,\nNdikomborerei She wangu,\nIshe wangu, Ishe wangu,\nNdikomborerei She wangu."
      },
      {
        "id": 30903,
        "title": "Stanza 2",
        "content": "Ndaigara ndakotsira, ndichikuzvidza Ishe;\nNdakabatwa nezvenyika, She ndiregerei."
      },
      {
        "id": 30904,
        "title": "Stanza 3",
        "content": "Regai kundipfuura Baba, nyangwe ndiri mutadzi;\nMusandisiye She, asi, She ndinzwirei tsitsi."
      },
      {
        "id": 30905,
        "title": "Stanza 4",
        "content": "Mweya wamasimba ose, Itai kuti ndione,\nNdiri bofu, ndiYamurei, She ndisimbisei."
      },
      {
        "id": 30906,
        "title": "Stanza 5",
        "content": "Rudo rwaMwari rutsvene, ropa roMuponisi,\nNgoni dzashe dzisingafi, She zviwanzei muneni."
      }
    ]
  },
  {
    "id": 310,
    "number": 48,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Panguva yokuteura",
    "stanzas": [
      {
        "id": 31001,
        "title": "Stanza 1",
        "content": "Panguva yokutenda, ndinobviswa pazvenyika;\nNdinoiswa kuna Baba, ndikumbire zvandoshaya\nPanguva yokutambudzwa,\nMweya wangu wanyaradzwa, panguva yokuteura."
      },
      {
        "id": 31002,
        "title": "Stanza 2",
        "content": "Panguva yokuteura, inguva yokukumbira\nKwaari, anoimbika, anogarokomborera,\nAnondidaidza Iye, ndimutsvake, ndimutende,\nNaizvo ndomugarira, panguva yokuteura."
      },
      {
        "id": 31003,
        "title": "Stanza 3",
        "content": "Panguva yokuteura ngandiwane kuyamura\nNdinogara panyika, misi yose ndoteura;\nKana ndichisiya panyika kuti ndiende kudenga\nNdichatenda, ndichakudza. Nguva`yo, yokuteura."
      }
    ]
  },
  {
    "id": 311,
    "number": 49,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndinosimuda Ishe",
    "stanzas": [
      {
        "id": 31101,
        "title": "Stanza 1",
        "content": "Ndinokudisa She, kundibatsira;\nNzwi renyu ndigonzwa kundinyaradza!"
      },
      {
        "id": 31102,
        "title": "Khorasi",
        "content": "Ndotsvaga imi moga,\nMwoyo`wangu wokushuva;\nNditaririrei Jesu, Ndinyaradzei!"
      },
      {
        "id": 31103,
        "title": "Stanza 2",
        "content": "Ndinokudisa She, garai neni;\nNdingazokundawo, garai pandiri"
      },
      {
        "id": 31104,
        "title": "Stanza 3",
        "content": "Ndinokudisa She, pandinofara;\nPandotamburazve, musandisiya!"
      },
      {
        "id": 31105,
        "title": "Stanza 4",
        "content": "Ndinokudisa She, ndinatswe chose;\nNdikushumireiwwo nomwoyo wose!"
      }
    ]
  },
  {
    "id": 312,
    "number": 50,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Pedyo nouMambo",
    "stanzas": [
      {
        "id": 31201,
        "title": "Stanza 1",
        "content": "Pedyo noumambo, unoshayei?\nMutadzi, chinokudzivisa chiyi?\nUya urase zvinokunyangadza\nUya kunamuponisi, anoshevedzera."
      },
      {
        "id": 31202,
        "title": "Khorasi",
        "content": "Jesu anokushevedza, Jesu M`ponisi, anokushevedza"
      },
      {
        "id": 31203,
        "title": "Stanza 2",
        "content": "Unonzwa nziyodzavo vakatenda,\nAvo vakawanda kuregerwa;\nAsi haudi kusiya kuripa,\nKunyange Jesu achikushevedza."
      },
      {
        "id": 31204,
        "title": "Stanza 3",
        "content": "Wafunga here nenyaya yokufa?\nUsina Kristu, mweya unoraswa\nHama tapota chiuya kwaari,\nJesu amire achikushevedza."
      }
    ]
  },
  {
    "id": 313,
    "number": 51,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "She anondifambisa",
    "stanzas": [
      {
        "id": 31301,
        "title": "Stanza 1",
        "content": "She anondifambisa ishoko rinofadza!\nPandinoenda pose aneni misi yose."
      },
      {
        "id": 31302,
        "title": "Khorasi",
        "content": "She anondifambisa\nOndibata norudyi;\nNdinoda kusesedzwa\nNaye mutungamiri"
      },
      {
        "id": 31303,
        "title": "Stanza 2",
        "content": "Parima napanhamo pachiedza nomutaro,\nParwendo rwangu rwose aneni misi yose."
      },
      {
        "id": 31304,
        "title": "Stanza 3",
        "content": "Ndibate chanza cheyu ndiite kuda kwenyu,\nNdichingotenda zvose, muneni misi yose."
      },
      {
        "id": 31305,
        "title": "Stanza 4",
        "content": "Bva kana ndazopedza basa pano panyika,\nHandityi rufu chose, muneni misi yose."
      }
    ]
  },
  {
    "id": 314,
    "number": 52,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Nguva yenhamo",
    "stanzas": [
      {
        "id": 31401,
        "title": "Stanza 1",
        "content": "Nguva yenhamo tinoshamiswa.\nZvinoitirwa nguva dzose,\nZvakune vamwwe vakatipota,\nHavavinzwi kana vatadza."
      },
      {
        "id": 31402,
        "title": "Khorasi",
        "content": "Tichazviziva zvose pamberi,\nTichazwisisa gare-gare;\nFara shamwari, ukudze Mwari\nTichanzwisisa zvose zuva`ro."
      },
      {
        "id": 31403,
        "title": "Stanza 2",
        "content": "Kana rufu rwatora vadiwa,\nTosara tine shungu kwazvo;\nTinoshama vamwe vachifara,\nNokugara muzviv zvavo."
      },
      {
        "id": 31404,
        "title": "Stanza 3",
        "content": "Tendai kusvikira rufu,\nKwassara nguva shomanana\nNhamo ichazokanganwika`ko,\nPazuva ratichaona She."
      },
      {
        "id": 31405,
        "title": "Stanza 4",
        "content": "Kana toona Jesu wouya\nWobva kudenga nokupenya.\nTichasangana na`Ye zuva`ro,\nTichanzwa zvose gare-gare."
      }
    ]
  },
  {
    "id": 315,
    "number": 53,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Wakamukazve, Inzwai",
    "stanzas": [
      {
        "id": 31501,
        "title": "Stanza 1",
        "content": "Wakamukazve, inzwai! Hareruya!\nVanhu vose chiimbai! Hareruya!\nVokudenga uchirai: Hareruya!\nVapanyika davirai: Hareruya!"
      },
      {
        "id": 31502,
        "title": "Stanza 2",
        "content": "`Bwe rabva, navarindi; Hareruya!\nGuva rakakundwa`po ; Hareruya!\nRufu harubati She; Hareruya!\nKristu She amuka nhasi; Hareruya!"
      },
      {
        "id": 31503,
        "title": "Stanza 3",
        "content": "Jesu araramazve! Akakunda ndiye She; Hareruya!\nAkafa kurwire`su; Hareruya!\nTigosatya guva zve; Hareruya!"
      },
      {
        "id": 31504,
        "title": "Stanza 4",
        "content": "Kuna Kristu chikwirai! Hareruya!\nKuna Tenzi akadai!; Hareruya!\nZvivi, rufu, azvikunda! Hareruya!\nKuna-Ye She hendei! Hareruya!"
      }
    ]
  },
  {
    "id": 316,
    "number": 54,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "PaM`chinjikwa waJesu",
    "stanzas": [
      {
        "id": 31601,
        "title": "Stanza 1",
        "content": "PaM`chinjikwa waJesu, ndinoda kugara,\nMumumvuri wedombo, munyika yenyota;\nMusha wedu murenje, bumudzo panzira,\nPatibotura zvose, patinotonhodzwa."
      },
      {
        "id": 31602,
        "title": "Stanza 2",
        "content": "PaM`chinjikwa waJesu ndinoona mumwe.\nWakandifira ini, andidzikinure;\nNdoonazve zviviri, zvinondishamisa,\nRudo rwake rukuru nokwangu kuipa."
      },
      {
        "id": 31603,
        "title": "Stanza 3",
        "content": "Ndogara mumumvuri woM`chinjikwa waShe;\nNdinofadzwa nezuva repa uso hwake;\nHandichada zvenyika, kana kugarika;\nNdosema zvivi, asi ndoda Muchinjikwa."
      }
    ]
  },
  {
    "id": 317,
    "number": 55,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Mukai vatendi",
    "stanzas": [
      {
        "id": 31701,
        "title": "Stanza 1",
        "content": "Mukai, mukai, vatendi! She wenyu chirwirai!\nVepfumo rake rose, mireza murudzai! Pakurwa muchakunda, She Jesu anemi,\nVavengi vagoopera, Kristu agova She."
      },
      {
        "id": 31702,
        "title": "Stanza 2",
        "content": "Mukai, mukai,vatendi! hwamanda tererai;\nEndai kupfumo mose, She wenyu teverai; Imi, varanda vaShe, uyai, mushumire;\nNyange munjodzi huru nesimba murwirei."
      },
      {
        "id": 31703,
        "title": "Stanza 3",
        "content": "Mukai, mukai, vatendi! She wenyu mirirai;\nNesimba rake roga varume simukai! Nenhumbi dzose dzaShe mutore, chipfekai;\nPamunodanwa pose, musatya, chipindai."
      },
      {
        "id": 31704,
        "title": "Stanza 4",
        "content": "Mukai, mukai, vatendi! anozoperawo\nMapfumo pano pasi, patairwa nawo;\nVakundi vanopiwa korona ikweyo;\nVachazobata ushe Husingaperi`ko."
      }
    ]
  },
  {
    "id": 318,
    "number": 56,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Murapi ari pano",
    "stanzas": [
      {
        "id": 31801,
        "title": "Stanza 1",
        "content": "Murapi ari pano, chiremba wokudenga\nAuya pasi pano, kurapa mwoyo yose."
      },
      {
        "id": 31802,
        "title": "Khorasi",
        "content": "Zita rakanakisa,ngatimuimbire\nNziyo dzoupenyu Jesu Tenzi wedu."
      },
      {
        "id": 31803,
        "title": "Stanza 2",
        "content": "Zvitadzo anobvisa, inzwai inzwi rake.\nFambai zvakanaka kudenga kuna Jesu."
      },
      {
        "id": 31804,
        "title": "Stanza 3",
        "content": "Rukudzo kuna Jesu, ndotenda kuna iye,\nNdinoda zita rake, ndinoda Muponisi."
      },
      {
        "id": 31805,
        "title": "Stanza 4",
        "content": "Hapana rimwe zita, rinokunda raJesu,\nRadzinga kutya kwangu, ndokudza zita rake."
      },
      {
        "id": 31806,
        "title": "Stanza 5",
        "content": "Uyai vashamwari, kudza zita raJesu,\nTaurai norurimi zvikomborero zvake."
      },
      {
        "id": 31807,
        "title": "Stanza 6",
        "content": "Kudenga tikasvika, tichazoona Jesu,\nNehondo dzokudenga tichaimbira Jesu"
      }
    ]
  },
  {
    "id": 319,
    "number": 57,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Zvakanaka kuda Jesu",
    "stanzas": [
      {
        "id": 31901,
        "title": "Stanza 1",
        "content": "Zvakanaka kuda Jesu, muponisi weidi,\nmuchengeti neshamwari, Tinomuda kwazvo"
      },
      {
        "id": 31902,
        "title": "Khorasi",
        "content": "Jesu, Jesu, mudikani, tinofara naiye;\nJesu, Jesu wakanaka, tinomuda kwazvo."
      },
      {
        "id": 31903,
        "title": "Stanza 2",
        "content": "Zvakanaka kuda Jesu, nokuvimba naiye;\nNokutendaizwi rake, rinotipfumisa."
      },
      {
        "id": 31904,
        "title": "Stanza 3",
        "content": "Zvakanaka kuda Jesu,nokumuombera;\nAkatipa mwoyo mitsva, rudo norufaro."
      },
      {
        "id": 31905,
        "title": "Stanza 4",
        "content": "Zvakanaka kuda Jesu, Tenzi wedu kwaye,\nZvino tine mubatsiri nokusingaperi."
      }
    ]
  },
  {
    "id": 320,
    "number": 58,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndoda kuziva zvaJesu",
    "stanzas": [
      {
        "id": 32001,
        "title": "Stanza 1",
        "content": "Ndoda kuziva zvaJesu, nenyasha dzake huru\nAkafira ini mutadzi.\nNdokubvisa zvivi zvangu"
      },
      {
        "id": 32002,
        "title": "Khorasi",
        "content": "Ndouya kwamuri, Ndouya kwamuri,\nMakafira zvivi zvangu,\nNdimi Muponisi wangu."
      },
      {
        "id": 32003,
        "title": "Stanza 2",
        "content": "Ndoda kuziva zvaJesu, nokuda utsvene hwake,\nNdidzidzisei Mweya M`tsvene,\nNdiratidzei zvaJesu She."
      },
      {
        "id": 32004,
        "title": "Stanza 3",
        "content": "Ndoda kuziva zvaJesu,muShoko rake dzvene;\nInzwi rake rakanaka;\nRinondipa rugare"
      },
      {
        "id": 32005,
        "title": "Stanza 4",
        "content": "Ndoda kuziva zvaJesu, muchinda worugare;\nPindai ndinokugashirai\nKuti ndiyanane nemi."
      }
    ]
  },
  {
    "id": 321,
    "number": 59,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Femera Kwandiri",
    "stanzas": [
      {
        "id": 32101,
        "title": "Stanza 1",
        "content": "Femra kwandiri; mweya Mutsvene;\nKuti ndide zvamunoda, nokuita semi."
      },
      {
        "id": 32102,
        "title": "Stanza 2",
        "content": "Femera kwandiri, ndichenise mwoyo;\nNdive nechido sechenyu, ndive kuda kwenyu,"
      },
      {
        "id": 32103,
        "title": "Stanza 3",
        "content": "Femera kwandiri, kuti mweya wangu,\nMwoyo nomuviri wose zvinzwe simba renyu;"
      },
      {
        "id": 32104,
        "title": "Stanza 4",
        "content": "Femera kwandiri, kuti ndingosafa,\nKuti ndigogaranemi, nokusingaperi."
      }
    ]
  },
  {
    "id": 322,
    "number": 60,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndinomuda M`ponisi",
    "stanzas": [
      {
        "id": 32201,
        "title": "Stanza 1",
        "content": "Ndinomuda M`ponisi, nomwoyo wangu,\nNdasiya zvitadzo, kukutevera,\nMununuri wakanaka, makandiponesa,\nNdinokuda kwazvo, Muponisi wangu."
      },
      {
        "id": 32202,
        "title": "Stanza 2",
        "content": "Ndinokuda M`ponisi, nesimba rangu,\nNdinoshuva kwazvo kufamba nemi;\nNdofunga kazhinji, zvomuchinjikwa wenyu,\nNdinokuda kwazvo, Muponisi wangu."
      },
      {
        "id": 32203,
        "title": "Stanza 3",
        "content": "Muupenyu norufu ndichazokuda,\nKusingaperi nemi ndichazogara;\nNdichakudza mufiri wakandiraramisa,\nNdinokuda kwazvo, Muponisi wangu"
      }
    ]
  },
  {
    "id": 323,
    "number": 61,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Pasi pamakumbo aJesu",
    "stanzas": [
      {
        "id": 32301,
        "title": "Stanza 1",
        "content": "Pasi pamakumbo aJesu,pane mazwi akakomba,\nNzvimbo yakanaka kwazvo, ndakasunungurwa`po;\nPasi pamakumbo aJesu, ndinodzidza misi yose,\nRudo rwokufira ini, wandishamisa kwazvo."
      },
      {
        "id": 32302,
        "title": "Stanza 2",
        "content": "Pasi pamakumbo aJesu, ndakakomborerwawo,\nPano ndakazvipfavisa, ndakawana zororo;\nPasi pamakumbo aJesu, nzvimbo yokukumbira,\nNdotambira simba pano, rokuterera Baba."
      },
      {
        "id": 32303,
        "title": "Stanza 3",
        "content": "Pasi pamakumbo aJesu, ndinogara nokunzwa,\nNdoda kudzidziswa nemi, ndoda mwoyo muchena;\nNdichenesesei, Tenzi, ndive mwana wenyu kwaye,\nKuti ndionese rudo,muupenyu hwanguwo."
      }
    ]
  },
  {
    "id": 324,
    "number": 62,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Kuvimba nguva dzose",
    "stanzas": [
      {
        "id": 32401,
        "title": "Stanza 1",
        "content": "Ndovimba nguva dzose, mumatambudzo ose,\nKunyange mukutsamwa, naJesu ndinovimba"
      },
      {
        "id": 32402,
        "title": "Khorasi",
        "content": "Kuvimba nguva dzose kuvimba misi yose,\nKunezvinoitika, naJesu ndinovimba."
      },
      {
        "id": 32403,
        "title": "Stanza 2",
        "content": "Mweya wake wopenya mumwoyo une rima\nNaye handichazowa, naJesu ndinovimba.."
      },
      {
        "id": 32404,
        "title": "Stanza 3",
        "content": "Munzira ndinovimba, murima ndoteura,\nMunjodzi ndomudana, naJesu ndinovimba."
      },
      {
        "id": 32405,
        "title": "Stanza 4",
        "content": "M`upenyu ndovimba, murufu ndichavimba;\nKudenga ndichavimba, naJesu ndinovimba."
      }
    ]
  },
  {
    "id": 325,
    "number": 63,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Mwari ngaakudzwe",
    "stanzas": [
      {
        "id": 32501,
        "title": "Stanza 1",
        "content": "Mwari ngarumbidzwe.... waita zvose,\nWakada nyika sei, wakaipa Mwana;\nWakazvipira kuripira zvivi,\nWakazarura musuwo, tipinde."
      },
      {
        "id": 32502,
        "title": "Khorasi",
        "content": "Kudzai She, kudzai She, nyika inzwai Shoko,\nKudzai She, kudzai She, vanhu faraiwo;\nUyai kuna Baba muna Jesu She,\nMumupe kukudza waita zvose."
      },
      {
        "id": 32503,
        "title": "Stanza 2",
        "content": "Ruponeso kwarwo, mutengo, ropa,\nVatendi vakarwuvimbiswa naShe,\nMutadzi mukuru, kana atenda, Ipapo, anosunungurwa naYe."
      },
      {
        "id": 32504,
        "title": "Stanza 3",
        "content": "Wakatidzidzisa zvinhu zvikuru,\nMuna Jesu rufaro wakakura, Asi chishamiso chedu chikuru,\nChichakunda, kana tawona Jesu."
      }
    ]
  },
  {
    "id": 326,
    "number": 64,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Gam`chira Mweya wangu",
    "stanzas": [
      {
        "id": 32601,
        "title": "Stanza 1",
        "content": "Gam`chira mweya wangu, nahwo upenyu hwangu;\nGam`chira misi yose, ngaikurumidze She."
      },
      {
        "id": 32602,
        "title": "Stanza 2",
        "content": "Ugam`chire maoko, aite basa rako;\nGam`chira tsoka Ishe, kuti ndikumhanyire'"
      },
      {
        "id": 32603,
        "title": "Stanza 3",
        "content": "Gam`chira izwi rangu, riimbire She wangu,\nUgam`chire muromo,uparidzire Mambo"
      },
      {
        "id": 32604,
        "title": "Stanza 4",
        "content": "Mari yangu gam`chira, pasina yondosiya,\nGam`chira ndangariro chiita basa nadzo."
      },
      {
        "id": 32605,
        "title": "Stanza 5",
        "content": "Gam`chira kuda kwangu kuti kusave kwangu;\nZvino gam`chira mwoyo, uve chigaro chako."
      },
      {
        "id": 32606,
        "title": "Stanza 6",
        "content": "Gam`chira rudo rwangu, nepfuma dzose dzarwo,\nNdigam`chire pachangu, zvose zvangu ndezvako."
      }
    ]
  },
  {
    "id": 327,
    "number": 65,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ngatitsvakei vakarasika",
    "stanzas": [
      {
        "id": 32701,
        "title": "Stanza 1",
        "content": "Ngatitsvakei, vakarasika, vodzungaira mumakomo;\nTigovaudza Shoko raJesu, ati. \"Uya kwandiri nhasi!"
      },
      {
        "id": 32702,
        "title": "Khorasi",
        "content": "Handei kure... kumakomo`ko;...\nTinotsvaka....varasika....\nTiuye navo.... kunamuponisi....\nJesu Mufiri....wavatadzi...."
      },
      {
        "id": 32703,
        "title": "Stanza 2",
        "content": "Ngatitsvakei, vakarasika, tivaratidze kuna Jesu,\nTifambe navo tiri munzira, yoruponiso rwaShe Jesu."
      },
      {
        "id": 32704,
        "title": "Stanza 3",
        "content": "Tinofanira kuti tiite, basa rake rokuparidza\nTichizorodza vakanetawo, tivaratidze kuna Jesu."
      }
    ]
  },
  {
    "id": 328,
    "number": 66,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndopira zvose",
    "stanzas": [
      {
        "id": 32801,
        "title": "Stanza 1",
        "content": "Kuna Jesu ndozvipira zvose ndinomupira\nNdichavimba nokumua. Ndichazogara naYe."
      },
      {
        "id": 32802,
        "title": "Khorasi",
        "content": "Ndopira zvose ndopira zvose Zvose kwauri\nM`ponisi ndopira zvose."
      },
      {
        "id": 32803,
        "title": "Stanza 2",
        "content": "Kuna Jesu ndozvipira Ishe pamberi penyu\nZvinhu zvenyika ndosiya, ndigamuchirei Jesu."
      },
      {
        "id": 32804,
        "title": "Stanza 3",
        "content": "Kuna Jesu ndozvipira ndiite ndive wenyu\nNdibate Mweya Mutsvene ndizive Uri wangu."
      },
      {
        "id": 32805,
        "title": "Stanza 4",
        "content": "Kuna Jesu ndozvipira She kunemi ndopira\nNdizadze nesimba renyu ndiropafadze imi."
      }
    ]
  },
  {
    "id": 329,
    "number": 67,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Chivimbiso chakakosha",
    "stanzas": [
      {
        "id": 32901,
        "title": "Stanza 1",
        "content": "Chivimbiso chakakosha, chakapiwa naMwari,\nKumufambi wakaneta, \"Ndiri mutungamiri.\""
      },
      {
        "id": 32902,
        "title": "Khorasi",
        "content": "Ndotungamira, ndotungamira\nNdotungamira neziso rangu;\nNzira yose yokudenga,\nIni ndichakutungamira\""
      },
      {
        "id": 32903,
        "title": "Stanza 2",
        "content": "Kunyange une zviyedzo, shamwari dzichitiza;\nBata chivimbiso ichi, \"Neziso ndotungamira.\""
      },
      {
        "id": 32904,
        "title": "Stanza 3",
        "content": "Kana makore atora tariro nokuvimba,\nFunga chivimbiso ichi \"Neziso ndotungamira.\""
      },
      {
        "id": 32905,
        "title": "Stanza 4",
        "content": "Upenyu hwoda kupera, kana kwasvika kufa;\nMutungamiri odana; \"Neziso ndotungamira.\""
      }
    ]
  },
  {
    "id": 330,
    "number": 68,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Tarirai kune nyika uko",
    "stanzas": [
      {
        "id": 33001,
        "title": "Stanza 1",
        "content": "Tarirai kune nyika uko! nokutenda toona iyo;\nBaba vedu vanogara`po vachitigadzirira isu."
      },
      {
        "id": 33002,
        "title": "Khorasi",
        "content": "Tichandofarawo musi watichazosvikako!\nTichandofarawo musi watichazosvikako."
      },
      {
        "id": 33003,
        "title": "Stanza 2",
        "content": "Tichazondoimbira uko, nziyo dzvadikanwa vaShe;\nMweya yedu ichafarawo, ichingozorodziwa naye."
      },
      {
        "id": 33004,
        "title": "Stanza 3",
        "content": "Tichandunganira apo, tichandokudza zita raShe;\nNyasha dzake tichavongawo, tazopiwa zororo naYe."
      }
    ]
  },
  {
    "id": 331,
    "number": 69,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Pasuwo rakashama`po",
    "stanzas": [
      {
        "id": 33101,
        "title": "Stanza 1",
        "content": "Pasuwo rakashama`po ndoonawo chiedza,\nChichibva kuGorokota, She wakachitungidza"
      },
      {
        "id": 33102,
        "title": "Khorasi",
        "content": "Inyasha huru idzodzo; Ndingandopinda ipapo;\nNeni! Neni! Ndingandopindawo!"
      },
      {
        "id": 33103,
        "title": "Stanza 2",
        "content": "Rakashamira ipapo vodo kuuya vose;\nVarombo navapfumiwo marudzi ose-ose!"
      },
      {
        "id": 33104,
        "title": "Stanza 3",
        "content": "Musatya henyu, chiuya; mugozopinda naro!\nKudenga She achakupai korona yomufaro!"
      },
      {
        "id": 33105,
        "title": "Stanza 4",
        "content": "Bva, seri kwaro ikweyo kuchema kunopera;\nTichandoona Jesu`ko uko kune rufaro."
      }
    ]
  },
  {
    "id": 332,
    "number": 70,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Onai, Jesu anouya",
    "stanzas": [
      {
        "id": 33201,
        "title": "Stanza 1",
        "content": "Rindai imi munoyera, kudenga kozununguka,\nMwenje yenyu batidzai, mundochingamidza Tenzi."
      },
      {
        "id": 33202,
        "title": "Khorasi",
        "content": "Onai, Anouya: Jesu Mambo Anouya\nAnouya kuzotonga. Onai, Anouya."
      },
      {
        "id": 33203,
        "title": "Stanza 2",
        "content": "Jesu avimbisa kuti muponeswe, mugopiwa,\nNguo chena nezviremba, kasikai pupurai."
      },
      {
        "id": 33204,
        "title": "Stanza 3",
        "content": "Atigadzirira nzvimbo, mu-umambo hwake iye,\nPupuraizve nezvake, tsuri isati yaridzwa"
      },
      {
        "id": 33205,
        "title": "Stanza 4",
        "content": "Vanyangadzi uyai zvino Kristu anotinunura,\nKaikai ichipo nguva Kristu anoda kuuya."
      }
    ]
  },
  {
    "id": 333,
    "number": 71,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Kana Jesu achidzoka",
    "stanzas": [
      {
        "id": 33301,
        "title": "Stanza 1",
        "content": "Kana Jesu achidzoka achaunganidza\n\nMwabwe ose anokosha, anobwinya sei!"
      },
      {
        "id": 33302,
        "title": "Khorasi",
        "content": "Sechiedza chezuva anovaimazvikuru,\nPakorona yaJesu, anobwinya sei!"
      },
      {
        "id": 33303,
        "title": "Stanza 2",
        "content": "Achashara, achashara, aise kudenga,`\nMabwe ose akanaka, anobwinya sei!"
      },
      {
        "id": 33304,
        "title": "Stanza 3",
        "content": "Vana vose,vana vose, vanoda She Jesu,\nNdivo mabwe akanak, anobwinya sei!"
      }
    ]
  },
  {
    "id": 334,
    "number": 72,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndichafara kumuona",
    "stanzas": [
      {
        "id": 33401,
        "title": "Stanza 1",
        "content": "Kana ndapedza kuedzwa kwangu,\nNdichisvika kudenga kutsvene; Kuti ndive pedyo naYe Jesu,\nNdichafara nokusingaperi."
      },
      {
        "id": 33402,
        "title": "Khorasi",
        "content": "Ndichafara kuMuona\nNdichafara, ndichafara,\nKana ndichiona Muponisi,\nNdichafara kuMutarisa."
      },
      {
        "id": 33403,
        "title": "Stanza 2",
        "content": "Kana nechipo chengoni dzake,\nNdikaona nzvimbo ko,kudenga,\nKana ndotarisa uso hwake,\nNdichafara nokusingaperi."
      },
      {
        "id": 33404,
        "title": "Stanza 3",
        "content": "Ndinozoona shamwari dzangu,\nDzandaimbodisa kare asi,\nPakumuona M`ponisi wangu,\nNdichafara nokusingaperi."
      }
    ]
  },
  {
    "id": 335,
    "number": 73,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "O Jesu ndomuda",
    "stanzas": [
      {
        "id": 33501,
        "title": "Stanza 1",
        "content": "Pane zita rakanaka,ndinoda kuimba;\nIzita ratenzi wangu, zita rakanaka."
      },
      {
        "id": 33502,
        "title": "Khorasi",
        "content": "O Jesu ndomuda, O Jesu ndomuda,\nO Jesu ndomuda, muponisi wangu."
      },
      {
        "id": 33503,
        "title": "Stanza 2",
        "content": "Rinotiudza zvorudo rwaJesu Kristu `She.\nWakatifira, neropa rinotinatsazve."
      },
      {
        "id": 33504,
        "title": "Stanza 3",
        "content": "Rinotiudza zvaMwari anotigadzirira,\nNyangwe tofamba murima toona ch`edza chake."
      },
      {
        "id": 33505,
        "title": "Stanza 4",
        "content": "Rinotiudza zvomwoyo waJesu Kristu `She;\nUnoziva suwwo radu, ndokubatsirazve."
      }
    ]
  },
  {
    "id": 336,
    "number": 74,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Jesu anoti ngativhenekere",
    "stanzas": [
      {
        "id": 33601,
        "title": "Stanza 1",
        "content": "Jesu anoti ngativhenekere,\nSomwenje uri pakati perima;\nRima iri munyika, riburitswe\nIwe, uri kwako, neni kwangu"
      },
      {
        "id": 33602,
        "title": "Stanza 2",
        "content": "Jesu anoda kuti tichene;\nAnoziva zvose zvatinoita,\nAnotarisa nokutichengeta,\nIwe, uri kwako, neni kwangu."
      },
      {
        "id": 33603,
        "title": "Stanza 3",
        "content": "Jesu anoti ngatibatsire,\nVose varombo navakaneta,\nNgaivafadze tishambidzike,\nIwe, uri kwako, neni kwangu."
      }
    ]
  },
  {
    "id": 337,
    "number": 75,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Shamwari yedu, ndiJesu",
    "stanzas": [
      {
        "id": 33701,
        "title": "Stanza 1",
        "content": "Shamwari yedu, ndiJesu anotidaidza;\nAnotipa upenyu azarura denga."
      },
      {
        "id": 33702,
        "title": "Khorasi",
        "content": "Shamwari yedu, ndiJesu, Jesu, Jesu.\nAkafa kutiponesa, Shamwari yedu, ndiYe."
      },
      {
        "id": 33703,
        "title": "Stanza 2",
        "content": "Shamwari yedu, ndiJesu, hatinaba mumwe;\nAnotichengeta isu, kupinda voswewo."
      },
      {
        "id": 33704,
        "title": "Stanza 3",
        "content": "Shamwari yedu, ndiJesu timubatsire Iye;\nMabasa nokufara timuzwei Iye"
      },
      {
        "id": 33705,
        "title": "Stanza 4",
        "content": "Shamwari yedu, ndiJesu, tive shamwari dzake;\nHaachatongotisiya nokusingaperi"
      }
    ]
  },
  {
    "id": 338,
    "number": 76,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "O ndinofara",
    "stanzas": [
      {
        "id": 33801,
        "title": "Stanza 1",
        "content": "Mune nziyo mumwoyo mwangu, yatanga isimo;\nJesu wabvisa zvivi zvangu, O ndinofara."
      },
      {
        "id": 33802,
        "title": "Khorasi",
        "content": "O ndinofara, fara, O ndinofara;\nJesu wapinda mumwoyo wangu,\nO ndinofara"
      },
      {
        "id": 33803,
        "title": "Stanza 2",
        "content": "Rudo rwake runoshamisa, wapinda mumwoyo,\nKana panhamo ndinoimba O ndinofara."
      },
      {
        "id": 33804,
        "title": "Stanza 3",
        "content": "Tine yanano yakanaka, isingataurwi,\nKuti tichagara maari-- O ndinofara."
      },
      {
        "id": 33805,
        "title": "Stanza 4",
        "content": "Uya kuna Jesu, ukande mutoro wako;\nNewe, uchaimba nesu -- O ndinofara."
      }
    ]
  },
  {
    "id": 339,
    "number": 77,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Jesu atida",
    "stanzas": [
      {
        "id": 33901,
        "title": "Stanza 1",
        "content": "Jesu atida, atiponesa;\nTapiwa nyasha naIye She!'"
      },
      {
        "id": 33902,
        "title": "Khorasi",
        "content": "Isu tinotizve Jesu atida,\nIsuwo tose timudewo!"
      },
      {
        "id": 33903,
        "title": "Stanza 2",
        "content": "Tanga tasungwa nemhaka zhinji;\nTasunungurwa naIye She!"
      },
      {
        "id": 33904,
        "title": "Stanza 3",
        "content": "Tanga taneta, tisina simba;\nBva, tazorodzwa naIy She!"
      },
      {
        "id": 33905,
        "title": "Stanza 4",
        "content": "Ta`tiri vafi, vafi vezvivi,\nTarwirwa zvino naIye She!"
      }
    ]
  },
  {
    "id": 340,
    "number": 78,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndafara kuti Baba wedu",
    "stanzas": [
      {
        "id": 34001,
        "title": "Stanza 1",
        "content": "Ndafara kuti Baba wedu,\nWareva rudo rwake rukuru,\nMurugwaro rwake rwakanaka\nNdonzwa kuti Jesu anondida."
      },
      {
        "id": 34002,
        "title": "Khorasi",
        "content": "Ndinofara Jesu wandida,\nAnondida, anondida;\nNdinofara Jesu wandida, ini anondida."
      },
      {
        "id": 34003,
        "title": "Stanza 2",
        "content": "Kana ini ndinomukanganwa,\nIye anogondiyeuchidza;\nZvino kwaari ndinodzokera,\nNdonzwa kuti Jesu anondida."
      },
      {
        "id": 34004,
        "title": "Stanza 3",
        "content": "Jesu anondida ini kwazvo\nSaka wandipa upenyu hwake;\nKutadza kwangu akakufira;\nNdonzwa kuti Jesu anondida."
      },
      {
        "id": 34005,
        "title": "Stanza 4",
        "content": "Mwoyo wangu uno Muyamuri\nNdinotenda Jesu Mununuri,\nZvino ndinogomubatirira\nNokuti ndonzwa Jesu anondida."
      }
    ]
  },
  {
    "id": 341,
    "number": 79,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Dai ndine ndimi zhinji",
    "stanzas": [
      {
        "id": 34101,
        "title": "Stanza 1",
        "content": "Dai ndine ndimi zhinji dzokumurumbidza She,\nNdoimba zvembiri yake, ngoni huru dzake."
      },
      {
        "id": 34102,
        "title": "Stanza 2",
        "content": "Ishe wangu une ngoni, ndibatsirei ini,\nKuti ndiparidze kwose nezve zita raShe."
      },
      {
        "id": 34103,
        "title": "Stanza 3",
        "content": "Jesu, zita rakanaka rinotanda kutya;\nRinorapa vakaipa, rinopa upenyu."
      },
      {
        "id": 34104,
        "title": "Stanza 4",
        "content": "Anokunda simba rose rezvivi zvom`tadzi,\nAngashambidzww neropa rake Muponisi."
      }
    ]
  },
  {
    "id": 342,
    "number": 80,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Chendai vatendi",
    "stanzas": [
      {
        "id": 34201,
        "title": "Stanza 1",
        "content": "Chiendai vatendi, endai kundorwa,\nMunotungamirirwa nomuChinjikwa;\nAnotungamira, ndiye Kristu She\nMunotungamirirwa nomuChinjikwa"
      },
      {
        "id": 34202,
        "title": "Khorasi",
        "content": "Chiendai vatendi, endai kundorwa;\nMunotungamirirwa nomuChinjikwa."
      },
      {
        "id": 34203,
        "title": "Stanza 2",
        "content": "Satani achatiza, anotya imi,\nChiendai vatendi, muchakundazve;\nAnohuta kwazvo, achinzwa imi,\nSimudzai mazwi, rumbidzai She."
      },
      {
        "id": 34204,
        "title": "Stanza 3",
        "content": "Pfumo raShe Jes, ndiyo kereke;\nNgatitevereiwo, kundorwira She;\nTiri vamwe isu, muviri mumwe,\nVamwe pakutenda, vamwe murudo"
      },
      {
        "id": 34205,
        "title": "Stanza 4",
        "content": "Chiuyai vehama, tose tiendei,\nRwiyo rwokukunda, ngatiruimbei,\nKristu, ndiShe wedu, ngatimukudzei\nNokusingaperi timurumbidzei."
      }
    ]
  },
  {
    "id": 343,
    "number": 81,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Chiponesai vafi",
    "stanzas": [
      {
        "id": 34301,
        "title": "Stanza 1",
        "content": "Chiponesai vafi, vanotandadza,\nVose vabatwa nezvivi rwirai;\nVakagumburwawo, muvamurudze,\nSimba raJesu She, chivavudzai!"
      },
      {
        "id": 34302,
        "title": "Khorasi",
        "content": "Chiponesai vafi, vanotandadza,\nVose vabatwa nezvivi rwirai!'),"
      },
      {
        "id": 34303,
        "title": "Stanza 2",
        "content": "Kana vorambawo, anomirira\nKuvagashira kana vadzoka;\nVanyengetedzei, vauye zvino,\nMhaka vachakanganwira na`Ye!"
      },
      {
        "id": 34304,
        "title": "Stanza 3",
        "content": "Mwoyo womunhuwo, kana washata\nUnongonatswa nenyasha dzashe;\nUnodzosiwazve, ukashandurwa\nUnomutsiwa, ugotendazve!"
      },
      {
        "id": 34305,
        "title": "Stanza 4",
        "content": "Chiponesai vafi, She anodaro,\nMuchasimbiswa naJesu, tsungai!\nNenzira nhetewo muvaratidze\nMuvaudzezve She anomudai!"
      }
    ]
  },
  {
    "id": 344,
    "number": 82,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Chibatsirai vose vasungwa nezvivi",
    "stanzas": [
      {
        "id": 34401,
        "title": "Stanza 1",
        "content": "Varipo nhasi vanokukurwa\nVanofanirwa kundonyukurwa;\nVonyura muzvivi chimbidzikai,\nMusanonoke kuvabatsira"
      },
      {
        "id": 34402,
        "title": "Khorasi",
        "content": "Chibatsirai, chibatsirai,\nVose vasungwa nezvivi,\nChibatsirai, chibatsirai,\nVose vasungwa nazvo."
      },
      {
        "id": 34403,
        "title": "Stanza 2",
        "content": "Dorangarira vakaremerwa\nVasino mumwe angaremudze,\nMuvadzidzise mumufaro waShe,\nAvatakurire nhamo dzose."
      },
      {
        "id": 34404,
        "title": "Stanza 3",
        "content": "Kuna vazhinji vakadzokera\nPanzira dzavakambotevera\nNemwoyo yavo yakaoresa\nTivaratidze rudo rwaIshe."
      }
    ]
  },
  {
    "id": 345,
    "number": 83,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Tora zita raShe Jesu",
    "stanzas": [
      {
        "id": 34501,
        "title": "Stanza 1",
        "content": "Tora zita raJesu mwana wokutambura,\nRinokupa runyararo,norudo rukuru."
      },
      {
        "id": 34502,
        "title": "Khorasi",
        "content": "Zita rakanakisa, raJesu Tenzi wangu,\nZita rakanakisa, raJesu Tenzi wangu."
      },
      {
        "id": 34503,
        "title": "Stanza 2",
        "content": "Tora zita raShe Jesu uri pakuedzwa;\nDana zita iro dzvene, simba icharipiwa"
      },
      {
        "id": 34504,
        "title": "Stanza 3",
        "content": "Zita raJesu M`ponisi, ndinomufarira sei,\nNorudo anondimbunda, nziyo hadzidziviswi"
      },
      {
        "id": 34505,
        "title": "Stanza 4",
        "content": "Pazita ndinokotama, ndicharipfugamira,\nIshe wamadzishe ose, achagadzwa ikoko."
      }
    ]
  },
  {
    "id": 346,
    "number": 84,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ishe Jesu danai vamwe",
    "stanzas": [
      {
        "id": 34601,
        "title": "Stanza 1",
        "content": "Kurefu nepedyo pose, vanhu vose vanotadza;\nHavafungi zvoM`ponisi, kana zvaMwari wavo."
      },
      {
        "id": 34602,
        "title": "Khorasi",
        "content": "Ishe Jesu, tumai vamwe vaenda koparidza,\nKuna`vo vasingatendi, vasingadi Mwari."
      },
      {
        "id": 34603,
        "title": "Stanza 2",
        "content": "Vatumei pamangwanani vatimei pamasikati\n\nKana zuva richidoka, vatumeiwo neShoko."
      },
      {
        "id": 34604,
        "title": "Stanza 3",
        "content": "Imi muri kutumiwa naJesu Tenzi wedu;\nEndai zvenyu, mundokoka vose kuna Jesu `She."
      }
    ]
  },
  {
    "id": 347,
    "number": 85,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Jesu mutongi wenyika",
    "stanzas": [
      {
        "id": 34701,
        "title": "Stanza 1",
        "content": "Jesu mutongi wenyika akasika zvinhu zvose,\nUmambo hwake ukuru kukunda umambo hwose."
      },
      {
        "id": 34702,
        "title": "Stanza 2",
        "content": "Ngatiteure kwaari, nenguva dzisingaperi;\nTorumbidza zita rake, tonamata misi yose."
      },
      {
        "id": 34703,
        "title": "Stanza 3",
        "content": "Marudzi ose evanhu, anoimba zita rake;\nNenziyo dzakanakisa, vacheche vanoimbaze."
      },
      {
        "id": 34704,
        "title": "Stanza 4",
        "content": "Zvikomborero tapiwa paanotonga vatendi;\nVaneta vanozorodzwa, anonunura vanyai."
      },
      {
        "id": 34705,
        "title": "Stanza 5",
        "content": "Anorapa vanorwara; paari hapana kufa\nNgirozi dziri kuimba nyika nayo ichaimba."
      }
    ]
  },
  {
    "id": 348,
    "number": 86,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Uyai vatendi",
    "stanzas": [
      {
        "id": 34801,
        "title": "Stanza 1",
        "content": "Uyai vatendi! Uyai norufaro.\nUyai, uyai Betrehema;\nMutarisei Ishe wengirozi,\nO,ngatimurumbidzei, Kristu Ishe."
      },
      {
        "id": 34802,
        "title": "Stanza 2",
        "content": "Imbai ngirozi, imbai nokufara,\nImbaiwo munogara kudenga;\nKudzai Mwari agere kudenga,\nO, ngatimurumbidzei, Kristu Ishe"
      },
      {
        "id": 34803,
        "title": "Stanza 3",
        "content": "She tinokukwazisai nhasi uno,\nTinokurumbidzai mazvarwa nhasi;\n\nIzwi raBaba rauya panyika,\nO, ngatimurumbidzei, Kristu Ishe."
      }
    ]
  },
  {
    "id": 349,
    "number": 87,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Rwiyo rutsva rwengirozi",
    "stanzas": [
      {
        "id": 34901,
        "title": "Stanza 1",
        "content": "Rwiyo rutsva rwengirozi kumusiki wedu.\nRwiyo rutsva rwengirozi kumusununguri."
      },
      {
        "id": 34902,
        "title": "Khorasi",
        "content": "Hareruya Hareruya!\nKristu nhasi azvarwa."
      },
      {
        "id": 34903,
        "title": "Stanza 2",
        "content": "Rukudzo rwengirozi kuna Mwari wedu,\nRukudzo rwengirozi nerwenyasha huru"
      },
      {
        "id": 34904,
        "title": "Stanza 3",
        "content": "Hondo zhinji dzokudenga dziri kumukudza;\nHondo zhinji dzokudenga dziri mukufara"
      },
      {
        "id": 34905,
        "title": "Stanza 4",
        "content": "Ruponiso kuna vanhu mbiri kuna Mwari,\nKumsoro nokumatenga, nyasha dzakadzikiswa."
      },
      {
        "id": 34906,
        "title": "Stanza 5",
        "content": "Muponisi wakaberekwa kuponesa vanhu;\nMununuri azouya muBetrehema"
      },
      {
        "id": 34907,
        "title": "Stanza 6",
        "content": "Vachenjeri vakona, vakafara kwazvo,\nVakatungamirwa nayo nyenyedzi yake."
      }
    ]
  },
  {
    "id": 350,
    "number": 88,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Vafudzi zvavaifudza",
    "stanzas": [
      {
        "id": 35001,
        "title": "Stanza 1",
        "content": "Vafudzi zvavaifudza hwai pausiku;\nVakatumirwa ngirozi takapenya kwazvo."
      },
      {
        "id": 35002,
        "title": "Stanza 2",
        "content": "Ikati: Regai kutya, ndokupai mose\nMazwi anofadza kwamuri navose."
      },
      {
        "id": 35003,
        "title": "Stanza 3",
        "content": "Uko kuBetrehema nhasi azvarwako Kristu\n\nIshe noM`ponisi, wavanhu venyika"
      },
      {
        "id": 35004,
        "title": "Stanza 4",
        "content": "Muchaona Iye Mwana atobva kudenga;\nDzakaimba kuna Mwari, dzichimurumbidza.'"
      },
      {
        "id": 35005,
        "title": "Stanza 5",
        "content": "Rurumbidzo ngaruvepo kuna Mwari wedu;\nNorugare rusingafi ngaruve kuvanhu."
      }
    ]
  },
  {
    "id": 351,
    "number": 89,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndiani kudanga`ko",
    "stanzas": [
      {
        "id": 35101,
        "title": "Stanza 1",
        "content": "Ndiani kudanga`ko\nAnopfugamirwa`po ?"
      },
      {
        "id": 35102,
        "title": "Khorasi",
        "content": "Ndiye She wesimba rose.\nNdiye She wevanhu vose\nNgatimupfugamirei;\nShe wavashe, tikkudzei!"
      },
      {
        "id": 35103,
        "title": "Stanza 2",
        "content": "Ndiani musango`mo,\nWozvinyima kudya`po?"
      },
      {
        "id": 35104,
        "title": "Stanza 3",
        "content": "Ndiani wochemawo\nPakavigwa Razaro?"
      },
      {
        "id": 35105,
        "title": "Stanza 4",
        "content": "Ndiani kumunda`ko\nAnonyengetera`po"
      },
      {
        "id": 35106,
        "title": "Stanza 5",
        "content": "Napachinjikanowo\nNdiani wafira`po?"
      },
      {
        "id": 35107,
        "title": "Stanza 6",
        "content": "Ndiani womukazve,\nAnotipa rugare?"
      },
      {
        "id": 35108,
        "title": "Stanza 7",
        "content": "Ndiani kudenga`ko\nAnobata ushe`ko?"
      }
    ]
  },
  {
    "id": 352,
    "number": 90,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ikoko, ikoko kumsoro kudenga",
    "stanzas": [
      {
        "id": 35201,
        "title": "Stanza 1",
        "content": "Muchidyiro chemombe She Jesu wakarara,\nMadzishe enyika akamuramba,\nVachenjeri vouya kumukandira zvipo\nNavafudzi vakamunamatawo."
      },
      {
        "id": 35202,
        "title": "Khorasi",
        "content": "Ikoko, ikoko, kumsoro kudenga`ko,\nAchazotiudza zvose ikoko,\nMunyika yomufaro, tichamuona Jesu,\nAchazotiudza zvose ikoko."
      },
      {
        "id": 35203,
        "title": "Stanza 2",
        "content": "Mutemberi apinda ari Mwana muduku,\nVanhu vose vakashamiswa naye,\nMakwara ake ose tinatse kutevera,\nTichitaurira vasingazivi."
      },
      {
        "id": 35204,
        "title": "Stanza 3",
        "content": "Zvino pawava munhu sezvakagadzwa naMwari,\nAbhapatidzwa naJohane muJoridan,\nDenga rikazaruka, Izwi guru rikanzwika,\nMweya ukaburukira senjiva."
      }
    ]
  },
  {
    "id": 353,
    "number": 91,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Makasiya koron`nouMambo",
    "stanzas": [
      {
        "id": 35301,
        "title": "Stanza 1",
        "content": "Makasiya koron`noumambo hwenyu\nNdokuuya kunyika ino,\nPakanga pasina nzvimbo paBetrehema\nKuti imi muvate`mo."
      },
      {
        "id": 35302,
        "title": "Khorasi",
        "content": "Pinda-i mumwoyo mangu.\nIrimo nzvimbo yenyu She."
      },
      {
        "id": 35303,
        "title": "Stanza 2",
        "content": "Vatumwa vakamuimbira\nDenga rikadengenyeka,\nBva, makazvarwa nokuzvininipisa\nMuurombo hwenyika."
      },
      {
        "id": 35304,
        "title": "Stanza 3",
        "content": "Makasvitsa, Ishe, Shoko benyu,\nKusunungura vanhu venyu, Bva,vakakuzvidza nekoron`yeminzwa\nNokumuisa kuGorgota."
      },
      {
        "id": 35305,
        "title": "Stanza 4",
        "content": "Kana muchiuya kuzobata ushe\nNokubwinya kukuru kwenyu,\nIzwi renyu richati,\"Uyai, iripo,\nNzvimbo yamakagadzirirwa.\""
      }
    ]
  },
  {
    "id": 354,
    "number": 92,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Inzwai mose dzimbo",
    "stanzas": [
      {
        "id": 35401,
        "title": "Stanza 1",
        "content": "Inzwai mose dzimbo ngaarumbidzwe Mambo;\nNyika`yi igarike, vanhu vadzikinurwe,\nFarai marudzi ose, kudzai nedenga rose,\nPamwechete muimbe, azvarwa Kristu Ishe."
      },
      {
        "id": 35402,
        "title": "Khorasi",
        "content": "Inzwai mose dzimbo,\nNgaarumbidzwe Mambo."
      },
      {
        "id": 35403,
        "title": "Stanza 2",
        "content": "Kristu wedenga rose, Kristu She asingafe\nKuvanhu anouya, akazvarwa somwana;\nMunhu asi ndiMwari, mukwazise saMwari,\nAkada kuva muhu kuti agare nesu."
      },
      {
        "id": 35404,
        "title": "Stanza 3",
        "content": "Tomukwazisai Mambo, zuva rakanaka\nAnototivhenekera, upenyu anotipa;\nAkasiya kubwinya, kuzoponesa vanhu,\nIye akazvarirwa kuti tizvarwe patsva."
      }
    ]
  },
  {
    "id": 355,
    "number": 93,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "She wangu akarohwa",
    "stanzas": [
      {
        "id": 35501,
        "title": "Stanza 1",
        "content": "She wangu akarohwa, nokutambudzwa,\nMusoro wabayiwa neiyo minzwa;\nMusoro worumbidzwa; navatendiwo,\nBva zvino navatadzi , munosekiwa."
      },
      {
        "id": 35502,
        "title": "Stanza 2",
        "content": "Pamberi penyu Jesu, ndowira pasi,\n\nNdichikumbira nyasha, musandirase!\nChiso chakanakisa chachenuruka\nMeso akasibwinya anokaruka."
      },
      {
        "id": 35503,
        "title": "Stanza 3",
        "content": "She, takurai zvino zvitadzo zvangu\nNdaifanira ini kurohwa hangu;\nNdichiremerwa nazvo, ndinotizira\nKwamuri muchengeti makandifira."
      },
      {
        "id": 35504,
        "title": "Stanza 4",
        "content": "She, Jesu,kudziwai makandirwira;\nMundipeiwo zoror, ndovimba nemi;\nNdinoda kunamata Muponesi Ishe,\nRufu makarukunda, ndifire mamuri."
      }
    ]
  },
  {
    "id": 356,
    "number": 94,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Wakamuka paguva",
    "stanzas": [
      {
        "id": 35601,
        "title": "Stanza 1",
        "content": "Mukati meguva Jesu M`ponisi,\nWagarira zuva, Jesu, Ishe."
      },
      {
        "id": 35602,
        "title": "Khorasi",
        "content": "Wakamuka paguva, wakakunda vavengi vake,\nWakakunda pakufa nokumuka, nokusingaperi achazogara;\nWamuka pakufa, ariruya, wamuka."
      },
      {
        "id": 35603,
        "title": "Stanza 1",
        "content": "Kugarira kaavo, Jesu M`ponisi,\nVakagara nhando, Jesu Ishe."
      },
      {
        "id": 35604,
        "title": "Stanza 2",
        "content": "Kufa kwakakundwa, Jesu M`ponisi,\nNdiye wakakunda,Jesu, Ishe."
      }
    ]
  },
  {
    "id": 357,
    "number": 95,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ariruya, Muponisi",
    "stanzas": [
      {
        "id": 35701,
        "title": "Stanza 1",
        "content": "Wokusuwa, wakanzi, Iye Mwana waMwari,\nAnotidzikinura; Ariruya, Muponisi!"
      },
      {
        "id": 35702,
        "title": "Stanza 2",
        "content": "Akasekwa, atongwa, akaparadza ropa,\nIro randinunura, ariruya, Muponisi!"
      },
      {
        "id": 35703,
        "title": "Stanza 3",
        "content": "Isu tatadza chose, asi Iye, Mutsvene,\nAnotidzikinura; ariruya, Muponisi!"
      },
      {
        "id": 35704,
        "title": "Stanza 4",
        "content": "Akasimutswa afa,\"Zvapera\", izwi rake,\nPakuenga agere; ariruya, Muponisi!"
      },
      {
        "id": 35705,
        "title": "Stanza 5",
        "content": "Pakuuya kwake She, kuti titorwe naye\nTichaimba zvakare, ariruya, Muponisi!"
      }
    ]
  },
  {
    "id": 358,
    "number": 96,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Tipei rugare Tenzi Jesu",
    "stanzas": [
      {
        "id": 35801,
        "title": "Stanza 1",
        "content": "She Jesu Muponisi wedu\nTomuimbira rwiyo rwedu,\nTopararira tichienda;\nUyai ko-zvino kutinatsa."
      },
      {
        "id": 35802,
        "title": "Stanza 2",
        "content": "Tipei rugare mumwoyo medu,\nToenda zvino kumba kwedu;\nMwoyo, muromo, chengetawo\nZvotomushumirawo zvino."
      },
      {
        "id": 35803,
        "title": "Stanza 3",
        "content": "Tipei rugare nousiku,\nTivhenekei rima ribve, Mutirwirei panjodzi dzose,\nPakuedza naparimawo"
      },
      {
        "id": 35804,
        "title": "Stanza 4",
        "content": "Tipei rugare, Tenzi Jesu,\nMisi yose youpenyu hwedu;\nBva musi wamuchatidana\nMutipe rugare kudenga`ko."
      }
    ]
  },
  {
    "id": 359,
    "number": 97,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Muteuro wamadekwana",
    "stanzas": [
      {
        "id": 35901,
        "title": "Stanza 1",
        "content": "Kana ava madekwana, tingavate ssei kudai?\nZvivi zvedu zvinorema, kanganwiro chitipai!\nKana zuva rikadoka, meso enyu achi`po\nAnoona nokurinda,vana venyu variko."
      },
      {
        "id": 35902,
        "title": "Stanza 2",
        "content": "Nhamo ingazotivinga, Pfumo ringasvikawo,\nBva vatumwa vokudenga, vanongochengete`su\nKana rufu rwotidana, tikatorwa narwowo,\nTichamukazve mangwana pakubwinya kwnyu She!"
      }
    ]
  },
  {
    "id": 360,
    "number": 98,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Jesu taungana pano",
    "stanzas": [
      {
        "id": 36001,
        "title": "Stanza 1",
        "content": "Jesu, taungana pano kumutenda mangwana`no!\nMutifadze paungano, muve pedyo nesu She!"
      },
      {
        "id": 36002,
        "title": "Stanza 2",
        "content": "Zvino rima rakaenda, tinotenda matirinda,\nMutimutse, muchipinda nechiedza chenyu, She!'"
      },
      {
        "id": 36003,
        "title": "Stanza 3",
        "content": "Tipei mwoyo yakanaka,mutikanganwire mhaka,\nMutnzweiwo, tichitsvaga nyasha dzenyu huru, She!"
      },
      {
        "id": 36004,
        "title": "Stanza 4",
        "content": "Simbisai maoko edu, tichibata basa redu,\nChinatsaiwo nzaira dzedu nomufaro wenyu She!"
      },
      {
        "id": 36005,
        "title": "Stanza 5",
        "content": "Muchengete vanhu venyu, tigotenda shoko renyu,\nTichifamba nzira dzenyu, mutipewo rugare, She!"
      }
    ]
  },
  {
    "id": 361,
    "number": 99,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ngatiungane",
    "stanzas": [
      {
        "id": 36101,
        "title": "Stanza 1",
        "content": "Ngatiungane, tiudze Tenzi wedu!\nNgatimuke, tiimbe nziyo dzedu!\nHareruya! Hareruya!"
      },
      {
        "id": 36102,
        "title": "Stanza 2",
        "content": "Ngatifare, She wakatiponesa! Bva ngatikudze, akatiraramisa,\nTimukudzei, timukudzei!"
      },
      {
        "id": 36103,
        "title": "Stanza 3",
        "content": "Ngatimuvonge, nokuti zvirokwazvo.\nTichingodai, tinomufadza nazvo;\nAnozvida, anozvida."
      },
      {
        "id": 36104,
        "title": "Stanza 4",
        "content": "Chiterera-i nemi masara shure?\n\nChiswedera-i mamirirei kure?\nTimbisei! Timbisei"
      },
      {
        "id": 36105,
        "title": "Stanza 5",
        "content": "Chibvumira-i, nemiwo, ndudzi dzose!\nChirumbidza-i She wamadzishe ose;\nHareruya! Hareruya!"
      }
    ]
  },
  {
    "id": 362,
    "number": 100,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Jesu wangu wakanaka",
    "stanzas": [
      {
        "id": 36201,
        "title": "Stanza 1",
        "content": "Jesu wangu wakanaka, Jesu wangu uripi?\nMisi yose ndinotsvaga, Bva ndichamuwanepi?\n Mwoyo wangu unochema. Uchanyaradziwa nei?\nZvivi zvangu zvinorema, Bva ndicharemudzwa sei?"
      },
      {
        "id": 36202,
        "title": "Stanza 2",
        "content": "Nyika haingandifadzi, Zvayo handichazvidi;\nIni zvandiri mutadzi, Shungu dzangu hadzipwi,\nDzichapera ndichiwana Muponisi Jesu She!\nNdinohamba ndichidana; Jesu wangu uripi?"
      },
      {
        "id": 36203,
        "title": "Stanza 3",
        "content": "Ngandipiwe mapapiro Ndigokwasha Jesu She,\nNdichafara zuva iro Rondosvika kwaari;\nWakadana vakaneta, vagowana zororo;\nVane shungu vachafa, Neni ndichafarawo!"
      }
    ]
  },
  {
    "id": 363,
    "number": 101,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Uyai mose makashata",
    "stanzas": [
      {
        "id": 36301,
        "title": "Stanza 1",
        "content": "Uyai mose marasikawo, mose marasikawo;\nJesu akamirire`mi, anokudzidzai;\nAne simba! Ane simba! Musatya kutendawo!"
      },
      {
        "id": 36302,
        "title": "Stanza 2",
        "content": "Navarombo, mungauye, Muchachingamidzwawo!\nMunofanira kutsvaga kanganwiro ipapo.\nPana Jesu! Pana Jesu! Chiuyai mupiwe`yo!"
      },
      {
        "id": 36303,
        "title": "Stanza 3",
        "content": "Chiregai kunonoka, uyai nhasi, chitendai!\nChimwe choga chinorehwa mwoyo wose chimupai!\nChidura-i! Chidura-i Zvivi zvenyu chirasai!"
      },
      {
        "id": 36304,
        "title": "Stanza 4",
        "content": "Imi mose, maremerwa, kana makanetsa sei!\nSwederai iko zvino, rufu muchatsvagirei?\nAnodana!Anodana kana vakaradza sei!"
      },
      {
        "id": 36305,
        "title": "Stanza 5",
        "content": "Navatumwa vokudenga vachafara ikoko;\nMusha wose wakanaka uchafarisisa`ko;\nHareruya! Hareruya! Tingarwirwa ne`suwo!"
      }
    ]
  },
  {
    "id": 364,
    "number": 102,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Mutadzi uya",
    "stanzas": [
      {
        "id": 36401,
        "title": "Stanza 1",
        "content": "Jesu anokudana, mutadzi uya!\nChinzwa anokudana, mutadzi uya!\nNguva ichakanaka, mutadzi uya!\nInguva yako zvino,mutadzi uya!"
      },
      {
        "id": 36402,
        "title": "Stanza 2",
        "content": "Wakaremerwa kwazvo, mutadzi uya!\nAchaurasa mutoro, mutadzi uya!\nKristu haanyengedzi, mutadzi uya!\nAnoda kukuzorodza, mutadzi uya"
      },
      {
        "id": 36403,
        "title": "Stanza 3",
        "content": "Chinzwa izwi raJesu, mutadzi uya!\nUya ukomborerwe, mutadzi uya!\nMhanya ukurumidze, mutadzi uya!\nZvino inguva yokumuziva, mutadzi uya!"
      }
    ]
  },
  {
    "id": 365,
    "number": 103,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Jesu She musandisiya",
    "stanzas": [
      {
        "id": 36501,
        "title": "Stanza 1",
        "content": "Jesu She musandisiya, nyasha mundipei!\nMuchivatarira vamwe , neni ndinatsei!"
      },
      {
        "id": 36502,
        "title": "Khorasi",
        "content": "Jesu, Tenzi, chidosweserai;\nMuchivatarira vamwe, neni ndinatsei!"
      },
      {
        "id": 36503,
        "title": "Stanza 2",
        "content": "Zvino ndopfugama Jesu, Ndinokutendai;\nNdinotsvaga nyasha dzenyu, zvino, dondipai!"
      },
      {
        "id": 36504,
        "title": "Stanza 3",
        "content": "Ndokunamatai,Jesu, Ndikutarirai;\nMuponese mweya wangu, chindibatsirai!"
      },
      {
        "id": 36505,
        "title": "Stanza 4",
        "content": "Mungandinyaradze moga ndinokuda sei!\nPano pasi nokudenga ndichazotsvagei?"
      }
    ]
  },
  {
    "id": 366,
    "number": 104,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Nzwi renyu ndinonzwa",
    "stanzas": [
      {
        "id": 36601,
        "title": "Stanza 1",
        "content": "Nzwi renyu ndinonzwa, rinondidana\nKuuya zvino kunemi, Ndigosukiwa!"
      },
      {
        "id": 36602,
        "title": "Khorasi",
        "content": "Ndinouya She, zvino neniwo!\nNdisuke, She, ndinatsei\nNeropa renyu!"
      },
      {
        "id": 36603,
        "title": "Stanza 2",
        "content": "Ndakakutadzirai, Bva mune nyasha;\nMangava angu chirasai, Munondinatsa."
      },
      {
        "id": 36604,
        "title": "Stanza 3",
        "content": "NdiJesu andida, akandirwira;\nAnonditungamira. Agondisvitsa."
      },
      {
        "id": 36605,
        "title": "Stanza 4",
        "content": "Ndotenda ropa sei, Ndotenda nyasha;\nNdotenda Jesu Kristu She akandifira"
      }
    ]
  },
  {
    "id": 367,
    "number": 105,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Chindimedurira!!",
    "stanzas": [
      {
        "id": 36701,
        "title": "Stanza 1",
        "content": "Chindimedurira, ndigondya`She,\nZvamakaitawo, paGarire!\nPashoko renyu, `She, ndotsvake imi;\nNdikushuva sei! Muzvipe`mi!"
      },
      {
        "id": 36702,
        "title": "Stanza 2",
        "content": "Mundipe chingwa neniwo `She,\nNeshoko renyuwo ndiponesei;\nUye kudenga`ko ndidye nemi;\nChingwa chipenyu` ndipiwe`ni."
      },
      {
        "id": 36703,
        "title": "Stanza 3",
        "content": "Mutume Mweya, `She, Uve neni;\nUndisvinudzewo, ndionemi;\nNdipiwe zvokwadi muBhaibheri;\nMuBhuku irori ndione `She."
      },
      {
        "id": 36704,
        "title": "Stanza 4",
        "content": "Chitarirazve mashoko, `She,\nSezvingwa zviyawo, paGarire!\nZvisungo ipapo zvichazobva;\nRugare nairwo muchandipa."
      }
    ]
  },
  {
    "id": 368,
    "number": 106,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Rakanaka zuva rino",
    "stanzas": [
      {
        "id": 36801,
        "title": "Stanza 1",
        "content": "Rakanaka zuva rino! ratinoungana naro;\nTinofara naro zvino, tichikudza She Jehovha\nTichikudza She Jehovha!"
      },
      {
        "id": 36802,
        "title": "Stanza 2",
        "content": "Rakanaka zuva iro! Iro rakasanangurwa,\nRakasikwa nyika naro, Uye zvose zvokudenga!\nUye zvose zvokudenga!'"
      },
      {
        "id": 36803,
        "title": "Stanza 3",
        "content": "Rakanaka zuva rino! Iro rinotizorodza,\nRatisingabati naro tigokwasha zvokudenga !\nTigokwashe zvokudenga!"
      },
      {
        "id": 36804,
        "title": "Stanza 4",
        "content": "Rakanaka zuva rino! Ndiro zuva rokumuka!\nKwoMuraramisi wedu, Jesu, mwwana woWedenga!\nJesu, Mwana woWedenga!"
      },
      {
        "id": 36805,
        "title": "Stanza 5",
        "content": "Rakanaka zuva rino! Ngatiimbe nziyo dzedu,\nNgatimukudzei nadzo, She Jehovha, Tenzi wedu.\nShe Jehovha, Tenzi wedu."
      }
    ]
  },
  {
    "id": 369,
    "number": 107,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Jesu, makandibayirwa",
    "stanzas": [
      {
        "id": 36901,
        "title": "Stanza 1",
        "content": "Jesu, makandibayirwa,munemi ndovanda; Ropa rateurwa,\nrondidzikinura;Ndikanganwirei, She ! Zvivi ndizvibviswe! (Pamhidza)"
      },
      {
        "id": 36902,
        "title": "Stanza 2",
        "content": "Ndokoniwa chose mirayiro yose; Kana ndikatsunga Ndikashingaira, Mhaka hadziripwi,\nAsi noMufiri. (Pamhidza)"
      },
      {
        "id": 36903,
        "title": "Stanza 3",
        "content": "Ndinoshayiwa zvose, nguvo, simba, njere; Zvose ndokumbira, ndichigwadamira,\nNdichinamatira, Chinjikano yoga. (Pamhidza)"
      },
      {
        "id": 36904,
        "title": "Stanza 4",
        "content": "Ndichi pasi pano, Kukasvika rufu; Pakugurwa uko Ndichengete, Jesu! Imi,\nmandibayirwa, Munemi ndovanda. (Pamhidza)"
      }
    ]
  },
  {
    "id": 370,
    "number": 108,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Rudo rwaShe Baba vedu",
    "stanzas": [
      {
        "id": 37001,
        "title": "Stanza 1",
        "content": "Rudo rwaShe Baba vedu rukuru;\nNounyoro hwoWedenga, ukuru;\nRopa raShe ratipodza nyasha dzake dzatifadza,\nNoruoko atirwira, tofara !"
      },
      {
        "id": 37002,
        "title": "Stanza 2",
        "content": "Kana tichiona nhamo, hatityi,\nAkatipawo chengeto, zvokwadi!\nKuna Jesu tinotenda, toshumira She wedenga\nMweya wotiperekedza tofara!"
      },
      {
        "id": 37003,
        "title": "Stanza 3",
        "content": "Tinongochitarirawo mufaro!\nKunyangova tichichema; Totenda!\nBaba vedu vanotida, Jesu otitaririra;\nRufu kana ruchisvika, tofara!'"
      }
    ]
  },
  {
    "id": 371,
    "number": 109,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "She wedenga wedu",
    "stanzas": [
      {
        "id": 37101,
        "title": "Stanza 1",
        "content": "She wedenga,unoone`su;\nKana tiri vana; otidanawo;\nKana tiri vana; otidanawo."
      },
      {
        "id": 37102,
        "title": "Stanza 2",
        "content": "Neminyengetero unoinzwawo;\nNounyoro hwake anorinde`su,\nNounyoro hwake anorinde`su"
      },
      {
        "id": 37103,
        "title": "Stanza 3",
        "content": "Sadza redu rose anotipawo;\n\nNamaoko ose otibatawo,\nNamaoko ose otibatawo."
      },
      {
        "id": 37104,
        "title": "Stanza 4",
        "content": "Udza vana vose kuti Jesu She,\nAnotida tose, nesu timudei!\nAnotida tose, nesu timudei!"
      }
    ]
  },
  {
    "id": 372,
    "number": 110,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Vanana, zvino tarirai",
    "stanzas": [
      {
        "id": 37201,
        "title": "Stanza 1",
        "content": "Vanana, zvino tarirai, Ndomusha wenyu;\nKudenga mose chipindai, Madanwa henyu!"
      },
      {
        "id": 37202,
        "title": "Stanza 2",
        "content": "She Jesu anogugudza pamwoyo yenyu;\nAnoti: Ngandipinde`mo, ndipei ugaro!"
      },
      {
        "id": 37203,
        "title": "Stanza 3",
        "content": "Waramba Jesu ndiyewo achache,era\nKuzondopinda ikweyo, Bva, acharambwa!"
      }
    ]
  },
  {
    "id": 373,
    "number": 111,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Tererai mazwi aya",
    "stanzas": [
      {
        "id": 37301,
        "title": "Stanza 1",
        "content": "Tererai mazwi aya anoimbwa ikoko;\nKo, haazi avatumwa vanogara ikweyo?\nVanhu nhasi maponerwa muchengeti, chifarai!\nChiimbaiwwo: Hareruya, Kristu Jesu chikudzai!'"
      },
      {
        "id": 37302,
        "title": "Stanza 2",
        "content": "Ndokubwinya kwaShe wedu Wokudenga-denga`ko;\nVanhu vave nomufaro, rugare panyikawo!\nZuva rino taponerwa muchengeti Kristu She\nNgatiimbe: Hareruya, tigokudza Jesu zve."
      }
    ]
  },
  {
    "id": 374,
    "number": 112,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Hama yedu ndishe Jesu",
    "stanzas": [
      {
        "id": 37401,
        "title": "Stanza 1",
        "content": "Hama yedu ndiShe Jesu,anotibatsira sei!\nNhamo yedu misi Yose kuna Iye tiisei!\nTinoshaiwa zvomufaro, tinodzinzwa shunguwo,\nKana tisingasiendi kundoudza She Jesu."
      },
      {
        "id": 37402,
        "title": "Stanza 2",
        "content": "Musi watinoedziwa, kana totambura sei,\nTirege kurasa mwoyo, kuna She tiizirei!\nKunomumwe angatore nhamo dzedu idzodzo?\nAsi iye anoziva; tindoudza She Jesu."
      },
      {
        "id": 37403,
        "title": "Stanza 3",
        "content": "Nguva yatinoremedzwa, tichishayiwa simbawo,\nJesu ndiye nhare yedu, titizire ipapo!\nKana tichisi`wa toga, tindoudza Jesu wo,\nMumaoko ake ose tichandonyaradzwamo."
      }
    ]
  },
  {
    "id": 375,
    "number": 113,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "She mumwoyo mangu",
    "stanzas": [
      {
        "id": 37501,
        "title": "Stanza 1",
        "content": "Ndakanga ndiri kure naShe, ndigere murima;\nChiedza chindivhenekera, mumwoyo mapinda She."
      },
      {
        "id": 37502,
        "title": "Khorasi",
        "content": "Ndakanga ndiri kure naShe, ndigere murima;\nChiedza chikandivhenekera, mumwoyo mapinda `She"
      },
      {
        "id": 37503,
        "title": "Stanza 2",
        "content": "Ndosuwa sei kutodza Ishe ndifanane naye;\nNdorangarira misi yose Ishe mumwoyo mangu."
      }
    ]
  },
  {
    "id": 376,
    "number": 114,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ishe, uri chipotera",
    "stanzas": [
      {
        "id": 37601,
        "title": "Stanza 1",
        "content": "Ishe,uri chipotero kana mweya uchitya;\nUnogona kusimbiswa padutu rine hasha;\nNdokutenda, uchagarondibata. (Pamhidza)"
      },
      {
        "id": 37602,
        "title": "Stanza 2",
        "content": "Dzimwe nguva dzapfuura, handina kukutenda,\nZvaasakaona meso, handina kuzvitenda,\nIshe Jesu, ndidzidzise kuvimba (Pamhidza)"
      },
      {
        "id": 37603,
        "title": "Stanza 3",
        "content": "Ngandikunde nokutenda ndave pakukundika;\nRutendo runoshandura Kurwa kuve kukunda;\nNgandikunde, ndisingazive kutya. (Pamhidza)"
      }
    ]
  },
  {
    "id": 377,
    "number": 115,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ngosangana sei naJesu",
    "stanzas": [
      {
        "id": 37701,
        "title": "Stanza 1",
        "content": "Ndosangana sei naJesu, ndichandomuvigirei?\nHati ndakamubatira Zuva rimwe; ndoitei?"
      },
      {
        "id": 37702,
        "title": "Khorasi",
        "content": "Ndosangana sei naJesu, ndichandomuvigirei?\nZvandisina mumwe oga kundoisa kuna She!"
      },
      {
        "id": 37703,
        "title": "Stanza 2",
        "content": "Handichatyi rufu hangu, zvandarwirwawo naYe;\nBva, ndosvoda zvandisina chandingavigira She."
      },
      {
        "id": 37704,
        "title": "Stanza 3",
        "content": "Dai makore aokuchinya ndaiadzoserwazve,\nNdaiapa Jesu wangu, ndaiterera Iye!"
      },
      {
        "id": 37705,
        "title": "Stanza 4",
        "content": "Sva, mutendi, usazeza, muka, chibatira She;\nShingaira varasiki, rwisa kuvadzosazve!'"
      }
    ]
  },
  {
    "id": 378,
    "number": 116,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Hakuna zita seraJesu",
    "stanzas": [
      {
        "id": 37801,
        "title": "Stanza 1",
        "content": "Hakuna zita seraJesu kana nokudenga,\nHakuna rimwe rakadai zita roM`ponisi."
      },
      {
        "id": 37802,
        "title": "Khorasi",
        "content": "Tinoda kuimbira Jesu tichimupa mbira;\nNokuti hatizive zita rinokunda iri."
      },
      {
        "id": 37803,
        "title": "Stanza 2",
        "content": "NdiJesu wakafira vose wakatida kwazvo.\nZvatanga takaraswa tose nezvitadzo zvedu."
      },
      {
        "id": 37804,
        "title": "Stanza 3",
        "content": "NdiJesu wakaita nyasha takamukanganwa;\nWakati: enda zvako mwana. Usazotadzezve."
      },
      {
        "id": 37805,
        "title": "Stanza 4",
        "content": "NdiJesu wakatiudzira kutunhidza Mwari.\nNokusarudza vashamwari vakanaka chete."
      }
    ]
  },
  {
    "id": 379,
    "number": 117,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Haapana paasiri",
    "stanzas": [
      {
        "id": 37901,
        "title": "Stanza 1",
        "content": "Hapana paasi-ri wekedenga Baba She;\nBva, posewo pati-ri ndipo paari She !\nMirangariro yo-se painokwirapo\nKum`soro pasi po-se, wedenga uripo!"
      },
      {
        "id": 37902,
        "title": "Stanza 2",
        "content": "Hapana zvinhu zvo-se zvinodarikwapo;\nVanomutenda vo-se vachachengetwawo!\nMazana ezveshiri, nebundo nairo;\nNyanguwawo mako worinda zvose `zvo."
      },
      {
        "id": 37903,
        "title": "Stanza 3",
        "content": "Zviri munyika yo-se zvir mumvurawo,\nNezvinofamba po-se, zviri mudengamo\nZviumbwa zvake zvo-se Uchazvinyimirei?\nMazuva ose o-se Zvinochengetwa sei!"
      },
      {
        "id": 37904,
        "title": "Stanza 4",
        "content": "Bva, vana vaShe Ba-ba Votaririrwawo;\nUri parudyi rwa-vo Nokiruboshweko.\nPavanoshayiwa si-mba, Panhamo dzosewo,\nNyanguvawo parufu Wedenga uripo!."
      }
    ]
  },
  {
    "id": 380,
    "number": 118,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Mweya wangu uno Muponisi",
    "stanzas": [
      {
        "id": 38001,
        "title": "Stanza 1",
        "content": "Mweya wangu uno muponisi wauri kupiwa;\nNdafanira kusarudza zvino; ndichagamuchirasu?"
      },
      {
        "id": 38002,
        "title": "Khorasi",
        "content": "Ndoda, ndoda, ndoda,\nMwari muyamuri muri wangu\nNdakatengwa neropa raIshe\nNdava wenyu chose."
      },
      {
        "id": 38003,
        "title": "Stanza 2",
        "content": "Nengoni ndichagam`chira tsitsi; rudo rwenyu Kristu\nRwakunda mwoyo wangu kwazvo, ndichavimba nemi."
      },
      {
        "id": 38004,
        "title": "Stanza 3",
        "content": "Munoziva kusasimba kwangu, ndotya kurasika;\nAsi imi muri simba wangu, munondipa simba."
      },
      {
        "id": 38005,
        "title": "Stanza 4",
        "content": "Hongu, Ishe, tipei isu tose ngoni dzenyu nhasi,\nNezvinobva mumwoyo tichiti ndichava waKristu."
      },
      {
        "id": 38006,
        "title": "Stanza 5",
        "content": "Vakauya vamwe vachibvunza; tingapone here?\nHongu, ndinoda muponiswewo, nesu tinodaro."
      }
    ]
  },
  {
    "id": 381,
    "number": 119,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Baba ndiri Mwana wenyu",
    "stanzas": [
      {
        "id": 38101,
        "title": "Stanza 1",
        "content": "Baba ndiri mwana wenyu nyange ndakatadza;\nNdinochema mberi kwenyu, mundiregerere."
      },
      {
        "id": 38102,
        "title": "Stanza 2",
        "content": "Zvitadzo zvangu zvizhinji, hazvingaverengwe;\nNdinozviisa kwamuri mundiregerere."
      },
      {
        "id": 38103,
        "title": "Stanza 3",
        "content": "Mirau yenyu ndakatyora,ndakakuzvidzai,\nMununuri ndamurasa mundiregerere.'"
      },
      {
        "id": 38104,
        "title": "Stanza 4",
        "content": "Ndakatadza nokureva nokufunga kwangu,\nNdakatadza namabasa, mundiregerere."
      },
      {
        "id": 38105,
        "title": "Stanza 5",
        "content": "Nyangwe ndanga ndafanira kukurumbidza;\nNdatadza nokukanganwa; mundiregerere."
      },
      {
        "id": 38106,
        "title": "Stanza 6",
        "content": "Nezvakaipa zvizhinji Baba, ndakatadza,\nNdakakunyadzisai imi, mundiregerere."
      },
      {
        "id": 38107,
        "title": "Stanza 7",
        "content": "Muri Mwari mune ngoni dzisingazopera,\nNaizvozvo ndinochema mundiregerere."
      }
    ]
  },
  {
    "id": 382,
    "number": 120,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Wouya, wouya, Mucheki mukuru",
    "stanzas": [
      {
        "id": 38201,
        "title": "Stanza 1",
        "content": "Wouya, wouya, Mucheki mukuru,\nVanhu vachaona Ishe wokudenga;\nVanogozomutswa vari kumakuva,\n\nKuti vaonekwe vose pakachena."
      },
      {
        "id": 38202,
        "title": "Stanza 2",
        "content": "Mucheki ndiJesu wakatambudzika,\nKuti vaponiswe norudo rwaBaba,\nAvo vakamuda havachatongiswa,\nNokuti vamire naIshe wedenga."
      },
      {
        "id": 38203,
        "title": "Stanza 3",
        "content": "Asi vasingadi kunzwa dama rake,\nRokuti vadzoke pane chakaipa,\nVakatozvikona pamberi poM`cheki\nVakatozvipinza pakutambudzika."
      },
      {
        "id": 38204,
        "title": "Khorasi",
        "content": "Ngatidzoke tose pakuipa kwedu,\nTinzwe izwi rake, tinamate tose,\nIshe ari pano anotsvaka iwe,\nInguva nazvino.uya ugam`chire."
      }
    ]
  },
  {
    "id": 383,
    "number": 121,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Nguva yakanakisa",
    "stanzas": [
      {
        "id": 38301,
        "title": "Stanza 1",
        "content": "Nguva yakanaka yokukurumbidza,\nKana tadzoredzaniswa Pam`soro kudenga;\nNdizvozvo tichanzwa mazwi echisimbiso,\nChokuti kana tikafa pane ino nyika."
      },
      {
        "id": 38302,
        "title": "Khorasi",
        "content": "Tinosangana kudenga reropa raJesu\nNokutenda kuna Jesu tichasanganiswa."
      },
      {
        "id": 38303,
        "title": "Stanza 2",
        "content": "Kunakisa korugare rwakasunga mwoyo;\nIsu kana taungana muzita raKristu,\nMwanakomana waBaba, wakakomborerwa!\nNdiye chivimbo chokuti tichasanganiswa."
      },
      {
        "id": 38304,
        "title": "Stanza 3",
        "content": "Nyangwe tsoka dzakaneta dzichayambukira\nZambuko rine ndarama nokukurumidza.\nApo patakagarirwa nayo vanotida\nVanokuridzira isu Kuti tiyambuke."
      },
      {
        "id": 38305,
        "title": "Stanza 4",
        "content": "Nyangwe takatsaukaniswa navo vanotida,\n\nTichazosangana navo patsoka dzaIshe.\nTigogara naYe Jesu Pane iyo nzvimbo,\nTisingatsaukaniswe Pahukama humwe.'"
      }
    ]
  },
  {
    "id": 384,
    "number": 122,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Amai navana",
    "stanzas": [
      {
        "id": 38401,
        "title": "Stanza 1",
        "content": "Amai navana vauya kuna Jesu,\nVadzidzi vavadzivira, vachiti, Ibvai;\nAsi Jesu haabvume ati kuna vakukutu;\nRegai vaduku musavarambidze.\nRegai vaduku musavarambidze."
      },
      {
        "id": 38402,
        "title": "Stanza 2",
        "content": "Ndinovagam`chira, Ndinogovafungata, Ndichava\nMufudzi wavo musavarambise;\nNdinoda vaduku vose Vagare upenyu neni;\nRegai vaduku musavarambidze.\nRegai vaduku musavarambidze."
      },
      {
        "id": 38403,
        "title": "Stanza 3",
        "content": "Jesu wakapfava, wakavaropafadza;\nNyamba zviuru zvavana vasati nyangwe,\nHavanamashoko ake, havanzwe kuti adaro;\nRegai vaduku musavarambidze,\nRegai vaduku musavarambidze."
      },
      {
        "id": 38404,
        "title": "Stanza 4",
        "content": "Tokuteurai kuti marudzi ose\nAsiye vamwari vavo auye kwamuri;\nMuvavhenekere Mwari, muve navo noupenyu\nMuvadzidzise vauye kwamuri\nMuvadzidzise vauye kwamuri."
      }
    ]
  },
  {
    "id": 385,
    "number": 123,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Dzidzisai vadzidzisi",
    "stanzas": [
      {
        "id": 38501,
        "title": "Content note",
        "content": "[No hymn text/stanzas found in the APK database.]"
      }
    ]
  },
  {
    "id": 386,
    "number": 124,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ishe ndinozvipira",
    "stanzas": [
      {
        "id": 38601,
        "title": "Stanza 1",
        "content": "Ishe, ndinozvipira pachangu kwauri,\nNguva nendangariro dzaibatwa neni;\nNdanzwa kudaidzira kwenyika, nokwako,\nNditume kuponisa, nditumei, ndiripo."
      },
      {
        "id": 38602,
        "title": "Khorasi",
        "content": "Ndiripo, She, nditumei,\nNdiripo, She, nditumei,\nNdinozvipira kukushandirasi;\nNdiripo, She, nditumei."
      },
      {
        "id": 38603,
        "title": "Stanza 2",
        "content": "Kare handakakuda, ndakazvidza bedzi;\nAsi, ndakatarisa Vanhu varasiki.\nZvino handingasiye Mweya yavatadzi,\nVashandiri vashoma, Mabasa mazhinji."
      },
      {
        "id": 38604,
        "title": "Stanza 3",
        "content": "Inzwai, Mwari weDenga zvivimbiso zvangu,\nKwauri ndozvipira noupenyu hwangu.\nKunyange ndichizvidzwa, neshamwari dzangu,\nNdinokupa muviri, diramhamba rangu."
      }
    ]
  },
  {
    "id": 387,
    "number": 125,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndinomuchema, muponisi wangu",
    "stanzas": [
      {
        "id": 38701,
        "title": "Stanza 1",
        "content": "Ndinemuchema, Muponesi wangu,\nZvandaremerwa ngemangava angu,\nHakuna mumwe ungandiponesa\nWandinoziva."
      },
      {
        "id": 38702,
        "title": "Stanza 2",
        "content": "Naizvozvo ndauya mberi kwenyu,\nZvandinosinzwariya Shoko renyu,\nRinotiudza zvamatiitira,\nMuchitifira!"
      },
      {
        "id": 38703,
        "title": "Stanza 3",
        "content": "Makandifira, ini ndakatadza,\nNdakamunetsa, imi mandifadza;\nNdakamuramba, imi makanditsvaka,\nShe wakanaka!"
      },
      {
        "id": 38704,
        "title": "Stanza 4",
        "content": "She wangu, Jesu, makandida sei!\nNenyasha dzenyu ndadziona nei\nNdakaponeswa nounyoro hwenyu\nNokuda kwenyu!"
      },
      {
        "id": 38705,
        "title": "Stanza 5",
        "content": "She, ndibatei neruoko rwenyu\nMundichengete, ini, mwana wenyu;\nMupinde, ndamuzarurira mwoyo,\nJesu She wangu!"
      }
    ]
  },
  {
    "id": 388,
    "number": 126,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Pindai, pindai",
    "stanzas": [
      {
        "id": 38801,
        "title": "Stanza 1",
        "content": "Pindai, pindai, mutambo uripo;\nMunodaniwa kuzopindawo!"
      },
      {
        "id": 38802,
        "title": "Khorasi",
        "content": "Pindai, pindai, ugaro huchimo."
      },
      {
        "id": 38803,
        "title": "Stanza 2",
        "content": "Rodokuvira zvino pinda-I,\nKwodokusviba, chimbidzika-i."
      },
      {
        "id": 38804,
        "title": "Stanza 3",
        "content": "Yodo-kuzara imba iyeyo;\nPindai, pindai, chiomba chavepo!"
      },
      {
        "id": 38805,
        "title": "Stanza 4",
        "content": "Rakazaruka suo irero,\nNerudo rwaShe; nhamo ichipo."
      },
      {
        "id": 38806,
        "title": "Stanza 5",
        "content": "Kedenga kwose kwomumirira,\nInzwai, vatumwa vanomudanai!"
      },
      {
        "id": 38807,
        "title": "Stanza 6",
        "content": "Zwi ravo rinozwika,tererai!\nMusanonoka zvino chipindai."
      }
    ]
  },
  {
    "id": 389,
    "number": 127,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Tofara sei?",
    "stanzas": [
      {
        "id": 38901,
        "title": "Stanza 1",
        "content": "Tofara sei munyika makadai?\nIropa raShe roti, Zororai!"
      },
      {
        "id": 38902,
        "title": "Stanza 2",
        "content": "Tofara sei, tichingonetswazve?\nMufaro kwawo kubatira She!"
      },
      {
        "id": 38903,
        "title": "Stanza 3",
        "content": "Tofara sei munhamo dzakada?\nIzwi raShe roti, Nyararai!"
      },
      {
        "id": 38904,
        "title": "Stanza 4",
        "content": "Tofara Sei nehama dzisipo?\nShe uri pedyo navo nesuwo!"
      },
      {
        "id": 38905,
        "title": "Stanza 5",
        "content": "Tofara se, tisingazivi�su?\nToziva Jesu, ndiye She wedu"
      },
      {
        "id": 38906,
        "title": "Stanza 6",
        "content": "Tofara sei, norufu ruripo?\nShe Jesu wakakunda rufuwo!"
      },
      {
        "id": 38907,
        "title": "Stanza 7",
        "content": "Chimborega! Tichambofarapo;\nShe Jesu wotidanira uko."
      }
    ]
  },
  {
    "id": 390,
    "number": 128,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ndini chibwizana",
    "stanzas": [
      {
        "id": 39001,
        "title": "Stanza 1",
        "content": "Ndini chibwiza-na, pana She ndofa-ra.\nWandimbundiki-ra ndini cha-ke!"
      },
      {
        "id": 39002,
        "title": "Stanza 2",
        "content": "Jesu unondi-da, unondiche-sa,\nUnondichenge-ta, ndini cha-ke!"
      },
      {
        "id": 39003,
        "title": "Stanza 3",
        "content": "Unondifudzawo,unondifambi-sa,\nNokundisimbi-sa Ndini cha-ke!"
      },
      {
        "id": 39004,
        "title": "Stanza 4",
        "content": "Unondifambi-sa, ndiye wondifa-dza.\nTinogarodana; Ndiri cha-ke."
      }
    ]
  },
  {
    "id": 391,
    "number": 129,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Nhambo dzinongosienda",
    "stanzas": [
      {
        "id": 39101,
        "title": "Stanza 1",
        "content": "Nhambo dzinongosienda,zuva, mwedzi, gore;\nPasi pose tinoshayiwa chisingazoori,\nPamakwara edu tose tsoka dzinodzmwa;\nNhambo dzinoenda chose. Bva todzivhunziwa."
      },
      {
        "id": 39102,
        "title": "Stanza 2",
        "content": "Madzibaba akaenda tiri shure kwawo;\nVana vachazotichema, towa samasanzu,\nTose tichazongofamba nzira imwe iyi.\nKunze kwenyu, She wedenga, vanhu vachadini?"
      },
      {
        "id": 39103,
        "title": "Stanza 3",
        "content": "Baba, paurombo hwangu, Baba, pamufaro;\nBabawo, parufu rwangu, Baba nemuguva;\nNyange zvose zvoshanduka, munogara henyu;\nNyange ndofa,ndozorora muruoko rwenyu."
      }
    ]
  },
  {
    "id": 392,
    "number": 130,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Tine chipo chakakomba",
    "stanzas": [
      {
        "id": 39201,
        "title": "Stanza 1",
        "content": "Tine chipo chakakomba, chatakapiwa iyesu;\nTakapiwa naJehovha, ichi chipo chatinacho."
      },
      {
        "id": 39202,
        "title": "Stanza 2",
        "content": "Chakakomba icho chipo, kwavari vakachiwana;\nVanochida kwazvo icho, pam`soro pezvinhu zose."
      },
      {
        "id": 39203,
        "title": "Stanza 3",
        "content": "Chine simba icho chipo, kwavari vakachiwana;\nChoupenyu icho chipo, kwavari vakagam`chira."
      },
      {
        "id": 39204,
        "title": "Stanza 4",
        "content": "Icho chipo ndiYe Jesu chatakapiwa iyesu;\nNdiye chipo chakakomba kwavari vanomutenda."
      },
      {
        "id": 39205,
        "title": "Stanza 5",
        "content": "Tinomutenda Jehova, naicho chipo chikuru;\nTinotenda Mwari oga, nokutipa Mwana wake."
      }
    ]
  },
  {
    "id": 393,
    "number": 131,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Jesu ndowangu",
    "stanzas": [
      {
        "id": 39301,
        "title": "Stanza 1",
        "content": "Jesu ndowangu, ndofara sei;\nZvandiri wake, ndichatsvakei?\nNeropa ndasukiwa naYe,\nNdapiwa nhaka naBaba She."
      },
      {
        "id": 39302,
        "title": "Khorasi",
        "content": "Ndicharumbidza She wangu sei\nNenziyo dzangu ndimukudzei."
      },
      {
        "id": 39303,
        "title": "Stanza 2",
        "content": "Ndinozorora norugare,\nNdinongotenda kuda kwaShe\nNyasha norudo unondipa,\nNdinosifara nowandida!"
      },
      {
        "id": 39304,
        "title": "Stanza 3",
        "content": "Ndakachengetwa, ndinomuda,\nChandinoshayiwa hapachina,\nMeso anongotarira She,\nNdapiwa nyasha huru naYe!"
      }
    ]
  },
  {
    "id": 394,
    "number": 132,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Usiku ihwohwo",
    "stanzas": [
      {
        "id": 39401,
        "title": "Stanza 1",
        "content": "Usiku ihwohwo! Vose vovatapo,\nBva, vorinda ndibaba namai,\nVasvinura pamwana, onai! Tisvinure nesu!"
      },
      {
        "id": 39402,
        "title": "Stanza 2",
        "content": "Usiku ihwohwo! Jesu wakatida,\nWakauya panyika kudai.\nWatoberekwa nhasi, farai, Ngatifare nesu!"
      },
      {
        "id": 39403,
        "title": "Stanza 3",
        "content": "Usiku ihwohwo! Voufura uko\nVakaona vatumwa vaShe,\nVachiimba, svikai: Rugare rwakasvika pasi!"
      },
      {
        "id": 39404,
        "title": "Stanza 4",
        "content": "Usiku unowo Todo kukudza She;\nNesu tinomufarirawo\nSezvaita vafudzi uko tomutenda nesu!"
      }
    ]
  },
  {
    "id": 395,
    "number": 133,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Mbira dzinorira",
    "stanzas": [
      {
        "id": 39501,
        "title": "Stanza 1",
        "content": "Dzidzisai vadzidzisi, imi vanhu vake!\nMudzidzise Shoko rake kudzo dzose nyika."
      },
      {
        "id": 39502,
        "title": "Stanza 2",
        "content": "Asi ngoro yezwi renyu ngaifambe iyo;\nKudzo dzose nzvimbo Jesu, ngaisvike uko"
      },
      {
        "id": 39503,
        "title": "Stanza 3",
        "content": "Vadzidzisi dzidzisai, imi vanhu vake!\n\nNgarinzwiwe dama rake navatadzi vose."
      },
      {
        "id": 39504,
        "title": "Stanza 4",
        "content": "Asi dama renyu Ishe, ngarisvike muno;\nNgarikwane nyika dzose, ridzidzise vanhu."
      },
      {
        "id": 39505,
        "title": "Stanza 5",
        "content": "Idzo nyika dziri kure ngadzirizivewo,\nDzitarire kuna Jesu dzichitenda iye."
      },
      {
        "id": 39506,
        "title": "Stanza 1",
        "content": "Mbira dzinorira, vanoimbazve; suwo rakashama\nPanopinda She; Jesu wakakwira, mukudenga`mo;\nUnogwadamirwa Navagereko."
      },
      {
        "id": 39507,
        "title": "Stanza 2",
        "content": "Zvose zvakapera, ngatiimbezve;\n\"Jesu wakakwira, ngatikudze She!\""
      },
      {
        "id": 39508,
        "title": "Stanza 3",
        "content": "NdiYe watifira, wakarwire`su; zvino wokudziwa,\nWorumbidzwapo. Ha`chazokundiwi, Kristu Jesu She;\nNhamo ha`zozivi, nyange kufazve."
      },
      {
        "id": 39509,
        "title": "Stanza 4",
        "content": "Unonyengetera zvino, aripo; Unoshevedzera\nVanhu vakewo! Unogadzirira vana vake`po;\nVanomushumiri vachaendako."
      }
    ]
  },
  {
    "id": 396,
    "number": 134,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Mitoro yobviswa naJesu",
    "stanzas": [
      {
        "id": 39601,
        "title": "Stanza 1",
        "content": ",Isu tose tine nhamo, tinotambudzwawo;\nMitoro yobviswa naJesu, Iye aripedyo."
      },
      {
        "id": 39602,
        "title": "Khorasi",
        "content": "Mitoro yobviswa naJesu, naJesu, naJesu,\nMitoro yobviswa naJesu, Iye ari pedyo."
      },
      {
        "id": 39603,
        "title": "Stanza 2",
        "content": "Kandirai pamusoro paShe kutya kwenyu kwose;\nMitoro yobviswa naJesu, Iye ari pedyo."
      },
      {
        "id": 39604,
        "title": "Stanza 3",
        "content": "Jesu ane simba zvino, Abvise zviviwo;\nMitoro yobviswa naJesu, Iye ari pedyo."
      }
    ]
  },
  {
    "id": 397,
    "number": 135,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "She wedenga ave nemiwo",
    "stanzas": [
      {
        "id": 39701,
        "title": "Stanza 1",
        "content": "She wedenga ave nemiwo akuperekedze kwose,\nAgokuchengeta pose, avenemi tionanezve!"
      },
      {
        "id": 39702,
        "title": "Khorasi",
        "content": "Tionanezve, tionane! Tionane, achida;\nTionanezve, tionane, Ave nemi tionanezve!"
      },
      {
        "id": 39703,
        "title": "Stanza 2",
        "content": "She wedenga ave nemiwo, muchengetwe zvakasimba,\nMuchiswera, muchivata, ave nemi, tionanezve."
      },
      {
        "id": 39704,
        "title": "Stanza 3",
        "content": "She wedenga ave nemiwo, akutaririre kwose,\nUyewo, munhamo ave nemiwo tionanezve!"
      },
      {
        "id": 39705,
        "title": "Stanza 4",
        "content": "She wedenga ave nemiwo, akumbunde namaoko;\nAkukundise rufuwo, ave nemi tionanezve!"
      }
    ]
  },
  {
    "id": 398,
    "number": 136,
    "categoryId": 2,
    "category": "Nziyo Dzevhangeri",
    "title": "Ishe Komborera Africa",
    "stanzas": [
      {
        "id": 39801,
        "title": "Stanza 1",
        "content": "Ishe, komborera Africa, Ngaisimudzirwe zita rayo;\nInzwai miteuro yedu: Ishe, komborera, isui mhuri yayo"
      },
      {
        "id": 39802,
        "title": "Khorasi",
        "content": "Uya Mweya (Uya, uya, komborera)\nUya Mweya (Uya, uya, komborera)\nUya Mweya, Uya Mweya woutsvene.\nIshe komborera isu mhuri yayo."
      }
    ]
  }
];

export const formatNumber = (number: number) => String(number).padStart(3, "0");

export function searchHymns(query: string, categoryId?: number | null) {
  const normalized = query.trim().toLowerCase();
  return hymns.filter((hymn) => {
    const categoryMatch = !categoryId || hymn.categoryId === categoryId;
    const haystack = [hymn.title, hymn.category, String(hymn.number), formatNumber(hymn.number), ...hymn.stanzas.flatMap((stanza) => [stanza.title, stanza.content])].join(" ").toLowerCase();
    return categoryMatch && (!normalized || haystack.includes(normalized));
  });
}

export function getHymn(id: number) {
  return hymns.find((hymn) => hymn.id === id) ?? hymns[0];
}

export function getHymnText(hymn: Hymn) {
  return hymn.stanzas.map((stanza) => `${stanza.title}\n${stanza.content}`).join("\n\n");
}
