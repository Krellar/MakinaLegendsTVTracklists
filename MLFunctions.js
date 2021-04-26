
var mainElement = getElementByXpath("/html/body/div[2]/div/div/div/div");

var children = mainElement.children;
for (var iTMP = 0; iTMP < children.length; iTMP++)
{
    var childElement = children[iTMP];

    var nodeIndex = iTMP + 1;
    var xpathStringBlock = "/html/body/div[2]/div/div/div/div/section[" + nodeIndex + "]/div/div/div/div/div/div[1]/div/h2";
    var tmpElement = getElementByXpath(xpathStringBlock);
    if(tmpElement != null)
    {
        var tracklist = createTracklist(tmpElement.innerText);

        if (tracklist != null)
        {
            var buttonElement = document.createElement("button");
            buttonElement.appendChild(document.createTextNode("Tracklist"));
            buttonElement.className = "collapsibleScripted";
            var divElement = document.createElement("div");
            //var tracklistElement = createTracklist(1);
            //divElement.appendChild(tracklistElement);
            //divElement.appendChild(document.createTextNode(tracklist));
            divElement.appendChild(tracklist);
            divElement.className = "content";

            var xpathParentNode = "/html/body/div[2]/div/div/div/div/section[" + nodeIndex + "]/div/div/div/div/div";
            var tmpParentElement = getElementByXpath(xpathParentNode);
            tmpParentElement.insertBefore(divElement, tmpParentElement.children[2]);
            tmpParentElement.insertBefore(buttonElement, tmpParentElement.children[2]);
        }
    }
}

var coll = document.getElementsByClassName("collapsibleScripted");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

function createTracklist(sesionName)
{
    var sesion = null;
    var array = null;

    sesion = selectSesionTracklist(sesionName)

    if (sesion != null)
    {
        array = sesion.match(/[^\r\n]+/g);

        var listElement = document.createElement("ol");
        for(var i = 0; i < array.length; i++)
        {
            var itemElement = document.createElement("il");
            itemElement.appendChild(document.createTextNode(array[i]));
            listElement.appendChild(itemElement);
            var breakElement = document.createElement("br");
            listElement.appendChild(breakElement);
        }

        return listElement;
    }
    else
    {
        return null;
    }
}

function getElementByXpath(path)
{
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function selectSesionTracklist(sesionName)
{
    var sesion = null;

    //BUENRI - JUMPER LA RÉPLICA
    if (sesionName == "BUENRI - JUMPER LA RÉPLICA")
    {
        sesion = `01 - ??? (0:00:05)
02 - ??? (0:00:39)
03 - ??? (0:02:33)
04 - ??? (0:03:49)
05 - ??? (0:05:18)
06 - New System - This is the night (Club Mix) (0:07:10)
... - Milk inc. - Never again (0:15:42)
... Divine Inspiration - Someday (DJ Napo & Alex Track One Rmx) (0:23:16)`
    }
    //PASTIS & BUENRI - LA RÉPLICA 90'S
    else if (sesionName == "PASTIS & BUENRI - LA RÉPLICA 90'S")
    {
        sesion = `01 - Xque vol. 5 - Xque vol.5 remix '99 (0:00:20)
02 - Phenomania - Who is Elvis (0:03:10)
03 - Xavi Metralla – Metramorphosis (0:05:34)
04 - Base gallo??? (0:06:34)
05 - Pastis & Buenri – Adrenalin (0:10:37)
06 - ??? (0:11:16)
07 - ??? (0:12:50)
08 - ??? (0:13:16)
09 - Gollum + Hunter – Journey To Sound (0:17:21)
10 - Sigma – Listen To The Beat (0:18:56)
11 - Acida - Acida (Miss Groovy RMX) (0:20:39)
12 - ??? (0:22:12)
13 - Chromosome - Chrome (0:23:12)
14 - ??? (0:24:50)
15 - Absolom – Secret (Extended Vocal) (0:25:57)
16 - EX-3 – Extres (Papapipas Remix) (0:26:31)
17 - Sello Bit music??? (0:28:34)
18 - Sello DJ's at Work??? (0:29:54)
19 - Toni Phobia & DJ Charles – High Pumping (0:33:34)
20 - Skudero - Glycerin (0:34:22)
21 - Doom – Face In The Dark (0:36:32)
22 - Speed Limit - Paradise (0:38:56)
23 - Plastic Enemy - No House (0:42:57)
24 - Hitch - Hiker & Dumondt Vol. III - Definition (Stairway To Heaven Mix) (0:45:59)
25 - Da Blitz – To Live Forever (D.J. Panda Rmx New Live Version) (0:48:11)
26 - Robbie Tronco - Fright Train (Tronco's Train Traxx) (0:52:38)
27 - Vienna – Vienna (Club Mix) (0:52:58)`;
    }
    //PASTIS & BUENRI - LA RÉPLICA SIGLO XXI
    else if (sesionName == "PASTIS & BUENRI - LA RÉPLICA SIGLO XXI")
    {
        sesion = `01 - Xque – Vol.8 - Beautiful Day (Home Version) (0:00:14)
02 - Base??? (0:02:08)
03 - Base don't speak Bit Music??? (0:05:40)
04 - El Brujo – The Legend (Tekno Extended Mix) (0:06:28)
05 - Melo trancera??? (0:11:33)
06 - Acido??? (0:14:09)
07 - DJ K-Rrion – Whispering (0:16:54)
08 - ??? (0:18:23)
09 - ??? (0:22:20)
10 - DJ Paul Versus Panic – We Shall Not Be Moved (0:22:56)
11 - ??? (0:25:55)
12 - Sunami - In By Pass (0:27:49)
13 - K-Meloth – Hold Me In Your Arms (0:30:01)
14 - Nitro Man - Galaxy Of Moon (0:31:42)
15 - ??? (0:35:41)
16 - Mono-Guru – Stratos (0:36:35)
17 - Open your eyes??? (0:38:34)
18 - Xque Records??? (0:41:35)
19 - Cantada??? (0:44:38)
20 - ??? (0:46:55)
21 - Sello Uptempo??? (0:49:02)
22 - Base??? (0:49:27)
23 - ??? (0:51:30)
24 - Bakesky - Melodream (Extended Version) (0:52:22)
25 - DOM - Full Throttle (0:52:44)
26 - Scott Brown And Brisk – Chase (0:54:53)
27 - Hardcore??? (0:56:32)
28 - Sello UpTempo??? (0:59:59)
29 - Sello Bit Music??? (1:02:03)
30 - ??? (1:04:26)`
    }
    //DJ NAU - ESPECIAL PRIMERAS RESIDENCIAS (99-01)
    else if(sesionName == "DJ NAU - ESPECIAL PRIMERAS RESIDENCIAS (99-01)")
    {
        sesion = `01 - Chasis - Welcome To The Future (DJ Ruboy Vocal Remix)
02 - Base Sello Uptempo???
03 - Hard Nation - Atreyu
04 - P.C.P. - DJ's Track Vol. 2
05 - DJ. Ruboy vs. Markos 13 – Nothing Can Stop Me
06 - Voggue Feat. Di-Lara – Give Me The Night
07 - DJ Soto Destroy – Destroyed
08 - Acida - Acida (Miss Groovy RMX)
09 - DJ Merlin & Energizer - In My Mind
10 - Nakima 7 - My Beat
11 - Fidel Del C. Dee Jay Presenta Estrategic – The Power Of Dreams
12 - X.R.X. - The fly
13 - Bolo & Uri – Krma Remix
14 - Dakoma - Moskito IV
15 - DJ Andrés - Golden Eye
16 - Plastic Enemy - No House
17 - DJ Paul Vs. DJ Panic – Hate!
18 - DJ Juan Cruz – Harmonycs
19 - 2 Robots - Back To The Sound
20 - J&J D.J.'s Feat. Jordy Beat & Dany Kaos – La Festa Vol. III
21 - Chromosome - Chrome
22 - Xavi Metralla - Vibrations
23 - Sirocco - Your Love
24 - DJ. Nau - Hyper-Base
25 - Metal One – Melodies Of Passion
26 - Alarm – Klax-On (Original Mix)
27 - The Format By DJ Plus & DJ Kini With Christian Steele – I Can Fly
28 - Object One – Connecting People
29 - Poogie Bear - Happy Together
30 - Pastis & Buenri With DJ Ruboy - Game Over - Start
31 - Prophecy – Real Time
32 - DJ Ghönso & DJ Keeper Feat. Aktive – King's Of Abyss
33 - Pastis & Buenri With DJ Ruboy - Game Over - Start (Vuelta)
34 - Free!! & DJ Soto presents Piramide – Herz And Herz
35 - Futura - La Poly
36 - Pont Aeri – Vol. 4 - Flying Free (Solo la intro)
37 - Spirit – Outside World (Remix 98)
38 - K-zero - Histery
39 - Interstate - From The Underground
40 - Toni Trauma - Agoraphobia
41 - DJ Shue - Cronology
42 - Pont Aeri - Vol. 5 - Take a Trip
43 - DJ Outblast – Eardrumz
44 - DJ Barbero – Sacrifice
45 - P.C.P. By DJ. David F.L., DJ. Prodigy, DJ. Manu - DJ's Tracks
46 - DJ Plus & DJ Kini - New Hardcore
47 - Gheodrome - The P.I.L.D.O. Base Vol. 2
48 - G.A.K. – The Hymn
49 - SPD - A Great Reward
50 - Mac & Lunatik - Saw Base
51 - Xque vol. 6 - Xque vol. 6
52 - Base Sello uptempo???
53 - Art Of Fighters – Artwork
54 - Das Mädschen – Heut' Ist Mein Tag
55 - Dany BPM - Speedy Gonzalez Dany BPM Race
56 - DJ Frantic – Joining Of The Clans Part 1 - Braveheart
57 - The Vinsta - Different Level
58 - Flip & Fill Featuring Kelly Llorenna – True Love Never Dies (Rob Searle Remix)
59 - Junk Project – Vol.1 - Brain Tool
60 - Neophyte - Braincracking
61 - ???
62 - DJ Ruboy - Bass Fussion
62 - Gigi D'Agostino - My Dimension
63 - DJ Richard & Johnny Bass – Let's Cry
64 - Klax-On - Last Train To Party (Train Station Mix)
65 - Disco Vip's by DJ. Skryker – Without You
66 - Four Dimensions - First Dimension
67 - UK Hardcore Sello Blatant Beats???
68 - Sello Makinaria Records???
69 - The Stunned Guys & DJ Paul – Thrillseeka
70 - Speed Limit - Paradise
71 - Da Tekno Warriors feat. DJ Bam Bam – Pump Up Da Bass
72 - Alberto Tapia, Pedro Miras & DJ Abel Presents Attica - Out Of Europe (Free!! Warp)
73 - DJ Roy & DJ Cram - Da Tekno
74 - Sello DJ's at Work???
75 - DJ Ganchi & Mr. Hull - The World Of Helen
76 - Los Niños By Markos 13 & Oskar Large - No Fuck In The Office
77 - Assi - Fred Gabberstein Loves Wilma`
    }
    //DJ PASTIS - SESIÓN 29 ANIVERSARIO 90'S
    else if(sesionName == "DJ PASTIS - SESIÓN 29 ANIVERSARIO 90'S")
    {
        sesion = `01 - Piero Zeta - The Gold Bug (Extended Synt Mix) (0:00:30)
02 - DJ Silverado - El Muelle Base (0:01:53)
03 - Feedback - Tell me (Techno Experience 160 Bpm's) (0:05:36)
04 - Silicon - Overdose (0:05:51)
05 - Emphassis - Time Compressed (0:11:40)
06 - Diana - All I Need Is Love (Motiv 8 Club Mix) (0:12:48)
07 - ??? (0:14:35)
08 - Westbams Hands On Yello – Bostich (Rush Push Mix) (0:17:06)
09 - D4MA2 - The Promise (0:19:10)
11 - Liquid Bass - Paradise (0:21:57)
12 - John Wesley – Lover Why (Vocal Dream Mix) (0:24:27)
13 - DJ Caësar 9114 – Vol. 1 - Activez Les Plaisirs (0:26:06)
14 - Atomic Junkies - Radiation Area (0:28:30)
15 - D.J. Pastis - Human Voices (Original Version) (0:30:06)
16 - ??? (0:32:34)
17 - Cocooma – Virtual Experience (0:38:21)
18 - Symphonic – Spanish Night (No llega a sonar la cantada) (0:40:11)
19 - DJ Ruboy - Bass Fussion (0:42:19)
20 - Queen - The Show Must Go On (0:43:44)
21 - La Suite - Violet Love (Sandalia Mix)(0:47:35)
22 - Maurizio Braccagni - Mosquito (0:48:47)`
    }
    //ANIVERSARI PONT AERI VALLGORGUINA
    else if(sesionName == "ANIVERSARI PONT AERI VALLGORGUINA")
    {
        sesion = `01 - DJ Mad Dog - A night of madness (0:00:35)
02 - ??? La original es Sunbeam - Outside world (No conozco el remix) (0:01:17)
03 - K-meloth - Hold Me In Your Arms (0:04:47)
04 - Evil Activities vs. The Viper - Raw To The Floor (0:05:51)
05 - Evil Activities - Adagio For Strings (0:08:34)
06 - ??? (0:10:26)
07 - DJ Weaver & Suae - Diary Of Jane (0:12:50)
08 - DJ Mad Dog - Dangerous (0:14:41)
09 - ??? (0:17:47)
10 - Critical Mass – Burning Love 2011 (The Viper Remix) (0:20:13)
11 - Darren Styles & Francis Hill – Come Running (0:22:53)
12 - DJ Mad Dog & Noize Suppressor - Fire (0:24:35)
13 - The Partymakers – The Last Party (0:27:24)
14 - Sheila - Summer Dream of Love (0:27:42)
16 - Pont Aeri Vol. 8 – Sweet Revenge (0:29:12)
17 - Cocooma - Virtual Experience (0:29:54)
18 - DJ Ham - Come Again (0:32:00)
19 - Ivan Dark Vs DJ Kracy - Cocaina (0:32:23)
20 - Nukleuz Kollective - Listen To Your Heart (Sparky Remix) (0:33:28)
21 - Gigi Pussy - Kill Bill (Hardstyle Remix) (0:35:00)
22 - Breeze & Styles - You're Shining (0:36:17)
23 - DJ Paul - Offensive Thrillah (0:37:18)
24 - Victor Ronda & DJ Contra - Holding Fout A Hero (Clandestine Remix) (0:41:16)
25 - ??? (0:42:50)
26 - Double Fantasy - El Vagabundo (0:43:53)
27 - Radical Core - Motherfucking Bang (0:44:47)
28 - Jordi K-Staña vs. DJ Vic - Halo (0:46:22)
29 - ??? (0:48:07)
30 - The Viper With Neophyte - '98 To Your Mind
31 - Nau B-3 - El Bosque De Colores (Ruboy Remix) (0:49:59)
31 - ??? Highlander - Hold Me Now (0:50:34)
32 - Re-Style - Get It Crackin (0:54:46)
33 - Speed Limit - Paradise (Club Mix) (0:57:55)
34 - ??? (0:59:28)
35 - La original es Coldplay - The Scientist (1:01:45)
36 - ??? (01:05:09)
37 - ??? (01:08:37)
38 - ??? (01:10:52)
39 - ??? Remix del Demolition - News (01:11:55)
40 - ??? (01:13:45)
41 - ??? (01:15:58)
42 - ??? (01:17:10)
43 - X-Que Special Remixes Vol.1 - Torn
44 - ??? (1:18:47)
45 - XYZ - Shake (2005 Remix) (1:19:56)
46 - ??? (1:20:45)
47 - Ikeya Zhang ‎– The Night (Club Mix) (1:22:24)
48 - ??? (1:23:14)
49 - ??? (1:24:23)
50 - ??? (1:25:26)
51 - Butcher - Don't Let The Sun Go Down (Stagediverz Mix) (1:27:11)
52 - Jander & DJ Isac Smeic - Lasse's Crazyness (1:29:07)
53 - Galeria ‎– The Gael's Return (Pastis & Buenri Harddd Rmx) (1:30:26)
54 - ??? (1:31:28)
55 - ??? (1:33:22)
56 - Acida - Acida (Miss Groovy RMX) (1:34:14)
57 - ??? Danceboy - Take Me Away (No sé que remix) (1:35:43)
58 - ??? (1:36:12)
59 - ??? (1:39:05)
60 - La original es Snow - Informer (No conozco el remix) (1:41:43)
61 - ??? (1:44:03)
62 - ??? (1:46:27)
63 - La original es The Cranberries - Zombie (No he encontrado el remix) (1:48:32)
64 - Rotterdam Hooligans - Rotterdam Hooligans (1:49:44)
65 - ??? (1:50:50)
66 - ??? (1:51:57)
67 - ??? (1:53:17)
68 - DJ Jos-L - Tattoo (Hard Remix) (1:57:10)
69 - ??? (1:58:13)
70 - Novaspace ‎- So Lonely (Extended Version) (2:01:05)
71 - ??? (2:01:29)
72 - Art of Fighters - Oh My Sun (2:04:45)`
    }

    return sesion;
}
