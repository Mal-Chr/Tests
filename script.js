/* =========================
   SCENES
========================= */

const scenes = [

    {
        text: "Hiiii",
        key: "d",
        background: "scene1.png"
    },

    {
        text: "you maybe confused, and",
        key: "i",
        background: "scene1.png"
    },

    {
        text: "i really reallyy hope ur great todayy",
        key: "a",
        background: "scene1.png"
    },

    {
        text: "Soo...",
        key: "n",
        background: "scene1.png"
    },

    {
        text: "I made thiss for someonee",
        key: "a",
        background: "scene1.png"
    },

    {
        image: "oneonly.png",
        imageClass: "photo1",
        text: "And that's youu",
        key: "p",
        background: "scene2.png"
    },

    {
        text: "okayy so, i've been thinking aboutt this for so long",
        key: "r",
        background: "images/sky.jpg"
    },

    {
        text: "we both have feelings, right?",
        key: "i",
        background: "images/sky.jpg"
    },

    {
        text: "after we, called each other special names",
        key: "l",
        background: "scene4.png",
        image: "txt2.png",
        imageClass: "txt",
        textClass: "txt1",
        keyClass: "txt1"
    },

    {
        text: "after we, being loving and caring",
        key: "l",
        background: "scene4.png",
        image: "txt1.png",
        imageClass: "txt",
        textClass: "txt1",
        keyClass: "txt1"
    },

    {
        text: "after we, waited for each other",
        key: "i",
        background: "scene4.png",
        image: "txt3.png",
        imageClass: "txt",
        textClass: "txt1",
        keyClass: "txt1"
    },

    {
        text: "after all of those things we do together.",
        key: "a",
        background: "images/city.jpg"
    },

    {
        text: "ur the first flower that have ever makes me fall in love so deeply.",
        key: "n",
        background: "scene3.png"
    },

    {
        text: "even since eight grade until now.",
        key: "i",
        background: "images/night.jpg"
    },

    {
        text: "my feelings for you never changed a single bit.💝",
        key: "o",
        background: "scene2.png"
    },

    {
        text: "i love you so much",
        key: "i",
        background: "images/room.jpg"
    },

    {
        text: "and i hope you still feel the same as i am now.",
        key: "l",
        background: "images/sky.jpg"
    },

    {
        text: "so...",
        key: "o",
        background: "images/sky.jpg"
    },

    {
        text: "do you want to make a commitment with me?",
        key: "v",
        background: "images/flower.jpg"
    },

    {
        text: "Do",
        key: "e",
        background: "images/flower.jpg"
    },

    {
        text: "You wanna be a cat? ( okay my bad that's not funny. )",
        key: "y",
        background: "images/night.jpg"
    },

    {
        text: "Do",
        key: "o",
        background: "images/night.jpg"
    },

    {
        text: "You wanna make",
        key: "u",
        background: "images/city.jpg"
    },

    {
        text: "This relationship official? (be honest okay!!)",
        textClass: "txt1",
        background: "scene4.png"
    }

];


let currentScene = 0;


/* =========================
   ELEMENTS
========================= */

const background =
    document.getElementById("background");

const content =
    document.getElementById("content");

const text =
    document.getElementById("text");

const key =
    document.getElementById("key");

const choices =
    document.getElementById("choices");

const formArea =
    document.getElementById("formArea");

const yesBtn =
    document.getElementById("yesBtn");

const notYetBtn =
    document.getElementById("notYetBtn");

const sceneImage =
    document.getElementById("sceneImage");

const thankYou =
    document.getElementById("thankYou");


/* =========================
   BACKGROUND
========================= */

let currentBackground = "";


/* =========================
   SHOW SCENE
========================= */

function showScene() {

    const scene =
        scenes[currentScene];


    text.textContent =
        scene.text;


    text.className =
        scene.textClass || "";


    key.className =
        scene.keyClass || "";


    if (scene.image) {

        sceneImage.src =
            scene.image;

        sceneImage.className =
            `scene-image ${scene.imageClass || ""}`;

        sceneImage.style.display =
            "block";

    } else {

        sceneImage.style.display =
            "none";

    }


    if (scene.background) {

        background.style.backgroundImage =
            `url("${scene.background}")`;

        currentBackground =
            scene.background;

    }


    if (scene.key) {

        key.textContent =
            `[ ${scene.key.toUpperCase()} ]`;

        choices.classList.add(
            "hidden"
        );

    } else {

        key.textContent = "";

        choices.classList.remove(
            "hidden"
        );

    }

}


/* =========================
   NEXT SCENE
========================= */

function nextScene() {

    const nextSceneIndex =
        currentScene + 1;


    const nextBackground =
        scenes[nextSceneIndex]?.background ||
        currentBackground;


    const backgroundIsChanging =
        currentBackground !==
        nextBackground;


    content.classList.add("hide");


    if (backgroundIsChanging) {

        background.classList.add("hide");

    }


    setTimeout(() => {

        currentScene++;


        if (
            currentScene >=
            scenes.length
        ) {

            currentScene =
                scenes.length - 1;

        }


        showScene();


        setTimeout(() => {

            content.classList.remove(
                "hide"
            );


            if (backgroundIsChanging) {

                background.classList.remove(
                    "hide"
                );

            }

        }, 100);

    }, 700);

}


/* =========================
   KEYBOARD
========================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            currentScene ===
            scenes.length - 1
        ) {

            return;

        }


        const pressedKey =
            event.key.toLowerCase();


        const requiredKey =
            scenes[currentScene].key;


        if (
            pressedKey ===
            requiredKey
        ) {

            nextScene();

        }

    }
);


/* =========================
   OPEN FORM
========================= */

function openForm(
    formContent,
    callback
) {

    content.classList.add("hide");


    setTimeout(() => {

        text.textContent = "";

        key.textContent = "";

        choices.classList.add(
            "hidden"
        );


        formArea.innerHTML =
            formContent;

        formArea.classList.remove(
            "hidden"
        );


        if (callback) {

            callback();

        }


        setTimeout(() => {

            content.classList.remove(
                "hide"
            );

        }, 100);

    }, 700);

}


/* =========================================================
   FINAL FLOWER EFFECT
========================================================= */

function showFlowers() {

    const container =
        document.getElementById(
            "flowerContainer"
        );


    container.innerHTML = "";

    container.style.opacity = "1";


    const flowerCount = 350;


    for (
        let i = 0;
        i < flowerCount;
        i++
    ) {

        const flower =
            document.createElement("img");


        flower.src =
            "flower.png";

        flower.className =
            "flower";


        const x =
            Math.random() * 100;


        const moveX =
            (Math.random() - 0.5)
            * window.innerWidth
            * 0.5;


        const moveY =
            -(Math.random()
            * window.innerHeight
            * 1.3);


        const rotateStart =
            Math.random() * 60 - 30;


        const rotateEnd =
            Math.random() > 0.5

                ? 360 +
                  Math.random() * 720

                : -360 -
                  Math.random() * 720;


        const duration =
            1.4 +
            Math.random() * 1.2;


        flower.style.setProperty(
            "--x",
            `${x}vw`
        );


        flower.style.setProperty(
            "--move-x",
            `${moveX}px`
        );


        flower.style.setProperty(
            "--move-y",
            `${moveY}px`
        );


        flower.style.setProperty(
            "--rotate-start",
            `${rotateStart}deg`
        );


        flower.style.setProperty(
            "--rotate-end",
            `${rotateEnd}deg`
        );


        flower.style.setProperty(
            "--duration",
            `${duration}s`
        );


        flower.style.setProperty(
            "--delay",
            `${Math.random() * 0.7}s`
        );


        container.appendChild(
            flower
        );

    }


    setTimeout(() => {

        thankYou.classList.add(
            "show"
        );

    }, 2500);

}


/* =========================
   YES
========================= */

yesBtn.addEventListener(
    "click",
    () => {

        openForm(`

            <h2>
                one last thing...
            </h2>


            <label>
                what do you feel about us?
            </label>


            <textarea
                id="yesAnswer1"
                placeholder="tell me honestlyy yaa (justt use indoo)"
            ></textarea>


            <label>
                what do you want us to become from now on?
            </label>


            <textarea
                id="yesAnswer2"
                placeholder="your answer..."
            ></textarea>


            <label>
                is there anything you want me to know?
            </label>


            <textarea
                id="yesAnswer3"
                placeholder="anythingggg"
            ></textarea>


            <label>
                do you have any question? whether its deep or random.
            </label>


            <textarea
                id="yesAnswer4"
                placeholder="askk me anything you wanttt, we'll talk about it together on WA :>"
            ></textarea>


            <button id="submitYes">
                SUBMIT
            </button>

        `, () => {

            const submitYes =
                document.getElementById(
                    "submitYes"
                );


            submitYes.addEventListener(
                "click",
                () => {

                    const answer1 =
                        document.getElementById(
                            "yesAnswer1"
                        ).value;


                    const answer2 =
                        document.getElementById(
                            "yesAnswer2"
                        ).value;


                    const answer3 =
                        document.getElementById(
                            "yesAnswer3"
                        ).value;


                    const answer4 =
                        document.getElementById(
                            "yesAnswer4"
                        ).value;


                    const message = `

What do you feel about us?

${answer1}


What do you want us to become from now on?

${answer2}


Is there anything you want me to know?

${answer3}


Do you have any question?

${answer4}

                    `;


                    emailjs.send(
                        "service_q4yez7e",
                        "template_bltpha6",
                        {
                            title: "YES",
                            message: message
                        }
                    )
                    .then(() => {

                        showFlowers();

                    })
                    .catch((error) => {

                        console.error(
                            "EMAILJS ERROR:",
                            error
                        );


                        alert(
                            "FAILED 😭\n\n" +
                            error.text
                        );

                    });

                }
            );

        });

    }
);


/* =========================
   NOT YET
========================= */

notYetBtn.addEventListener(
    "click",
    () => {

        openForm(`

            <h2>
                that's okay.
            </h2>


            <label>
                what makes you feel like you're not ready yet?
            </label>


            <textarea
                id="notYetAnswer1"
                placeholder="you can be completely honest with meee (justt use indoo)"
            ></textarea>


            <label>
                is there anything you need from me?
            </label>


            <textarea
                id="notYetAnswer2"
                placeholder="tell me..."
            ></textarea>


            <button id="submitNotYet">
                SUBMIT
            </button>

        `, () => {

            const submitNotYet =
                document.getElementById(
                    "submitNotYet"
                );


            submitNotYet.addEventListener(
                "click",
                () => {

                    const answer1 =
                        document.getElementById(
                            "notYetAnswer1"
                        ).value;


                    const answer2 =
                        document.getElementById(
                            "notYetAnswer2"
                        ).value;


                    const message = `

What makes you feel like you're not ready yet?

${answer1}


Is there anything you need from me?

${answer2}

                    `;


                    emailjs.send(
                        "service_q4yez7e",
                        "template_bltpha6",
                        {
                            title: "NOT YET",
                            message: message
                        }
                    )
                    .then(() => {

                        showFlowers();

                    })
                    .catch((error) => {

                        console.error(
                            "EMAILJS ERROR:",
                            error
                        );


                        alert(
                            "FAILED 😭\n\n" +
                            error.text
                        );

                    });

                }
            );

        });

    }
);


/* =========================================================
   MENU CONTENT
========================================================= */

const menuPages = {

    story: `

        <h2 class="menu-page-title">
            Our Story
        </h2>


        <p class="menu-page-subtitle">
            little moments that brought us here.
        </p>


        <div class="story-item">

            <div class="story-date">
                MONDAY, 27 APRIL 2026
            </div>

            <div class="story-text">

                <img
                    src="together2.jpeg"
                    class="memory-image"
                >

                <p class="memory-caption">
                    Disini aku bingung bangett tiba-tiba aku disuruh pegang cupcakenya😭. Perasaanku campurr aduk antara seneng bangett, saltingg tambah nervouss. Love this day..
                </p>

            </div>

        </div>


        <div class="story-item">

            <div class="story-date">
                MONDAY, 18 MAY 2026
            </div>

            <div class="story-text">

                <img
                    src="together1.jpeg"
                    class="memory-image"
                >

                <p class="memory-caption">
                    THISS DAYY, akuu disuruh ikut, terus disuruh buat pegang speaker doang. Awalnya oke aja, tapi setelah itu aku bingung dan nanya "kenapa harus aku?" mereka bilang gapapa. Disitu aku mulaii mikir mungkin kamuu ada perasaan ke aku, tapi setelah itu pikiran ku bilang "ah paling cuman karena mereka tau aku suka dian" WKWKWKWK, abis itu aku disuruh ngasih hadiah nya ke kamuu hehee
                </p>

            </div>

        </div>


        <div class="story-item">

            <div class="story-date">
                TUESDAY, 30 JUNE 2026
            </div>

            <div class="story-text">

                <img
                    src="together3.jpeg"
                    class="memory-image"
                >

                <p class="memory-caption">
                    BEST ONEE, di hari ini aku udah nervous sebadan dari pagi sampe malem. Aku gugup setengah mati, tapi akhirnya aku beraniin diri pas malem. Confess pas malem emang bagian dari rencanaku karena aku ngira pulangnya bakalan jam 8/9.. TAPI TERNYATAA MALEM BANGETT (im really sorry for the BADD timing..), basically unforgettable
                </p>

            </div>

        </div>

    `,


    little: `

        <h2 class="menu-page-title">
            Little Things
        </h2>


        <p class="menu-page-subtitle">
            little things i notice about you.
        </p>


        <div class="little-item">

            <div class="little-title">
                Something I like
            </div>

            <div class="little-text">

                ♡ Aku kira kamu bakalan kayakk biasa ajaa gituuu, tapii ternyataa kamu ituu lovingg and caringgg bangettt sama aku, i love it so much

                <br>

                ♡ Kamuu perhatiann bangettt oranggnyaaaaa, i loveee youuuu

                <br>

                ♡ everything u doo lucuuu bangettttt, gemessss

                <br>

                ♡ EVERYTHINGGGGGG

            </div>

        </div>


        <div class="little-item">

            <div class="little-title">
                One more thing
            </div>

            <div class="little-text">

                ♡ Aku sukaa kamu jadi diri kamu sendiriii

                <br>

                ♡ Percayaa diriii

                <br>

                ♡ Gift from you when im about to leave tangerang.. it's so unexpected and im mad in love with you.. II MISSS UUUU

            </div>

        </div>

    `,


    memories: `

        <h2 class="menu-page-title">
            Memories
        </h2>


        <p class="menu-page-subtitle">
            little things worth remembering.
        </p>


        <h4>
            BEGINNING OF OUR STORY
        </h4>

        <img
            src="memory1.png"
            class="memory-image"
        >

        <p class="memory-caption">
            First chats setelah confession itu, so so so so happyyyyyy than everrr
        </p>


        <h4>
            SPECIAL NAMES
        </h4>

        <p class="memory-caption">
            ♡ Akuu ingett banget pertama kali kamuu panggil aku "babe" SHSHHSSSJH ituu bikin akuu tergila-gila 😭. setelah ituu gantian aku panggil kamu "sayang" karenaa aku mikir kamu udaa nyaman sama panggilan panggilan spesial diantara kita berduaaa, and every time you said it, it still made me SUUPEERRRR smileeee
        </p>


        <h4>
            PHOTO OF YOU
        </h4>

        <img
            src="memory4.png"
            class="memory-image"
        >

        <p class="memory-caption">
            Pertama kalii kamuu kirim pap.. that makes me goes crazy and reddd. literallyy makess my day evenn evennnn better when you sendd it to meee (okay. u got me. i saved all those.)
        </p>


        <h4>
            PHOTO OF US
        </h4>

        <img
            src="memory2.jpeg"
            class="memory-image"
        >

        <p class="memory-caption">
            WKWKWKWKWK YANGG INI DIPAKSAA MISSS KESAYANGAN KITAAA. guguppp bangett akuu, look how bad did i smileee 😭 (HAHAHHAA JEEREMIAH JARAKNYA JAUH BANGETT)
        </p>


        <h4>
            A GIFT
        </h4>

        <img
            src="memory3.jpeg"
            class="memory-image"
        >

        <p class="memory-caption">
            AKUU SUKAA BANGETT SAMA HADIAHH NYAAAAAA, urr drawingg iss so goodd (meskipunn kamu buru-buru karena ngira aku pulang bentar lagi dan ternyata baru tau aku pulangnya masih lama WKWKWKWK SORRY YAAA). andd the bouquett, i didn't even know how to react but i know i super superrr lovee itt. and the last one, gelang, iniii akuu lupa bangett mau kasih ke kamuu, mungkinnn nanti desember akuu kasih ke kamuu (sekalian ke restoranmuu EHEHHEEEH)
        </p>

    `,


    words: `

        <h2 class="menu-page-title">
            A Few Words
        </h2>


        <p class="menu-page-subtitle">
            something i wanted you to know.
        </p>


        <p class="words-text">

            Sayaanggg, akuu minta maaf yaa kalo semisalnyaa aku ada bikin kamu enggaa nyaman yang gapernah aku sadari dan kamu pendamm sendirii, akuu bakall selalu dengerin kamuu yaa sayaaangggg kalau ada yang bikin kamu engga nyamaann. Akuu enggaa mau kamuu pendemm sendiriannn, mending kitaa bicarainn baikk baikkk yaaaa.

            <br><br>

            My love, my forever, my cutie patootieee. Kamuu jagaa kesehatann di sono yaaaa, jangaann telat makann muluuu, tidurr yang cukuppp, stayy confidenceee.

            <br><br>

            Akuu bakall selaluu sayangg kamuuu, soooo don't ever think of me not loving youu okaayyy? akuu akann berusahaa pertahaninn komunikasii kitaaa mesikpunn kitaa jauhann :<<, miss u so muchhh..

            <br><br>

            Akuuu harapp kiraa langgengg yaaaa, cause my only purpose in this relationship is to be with u foreverr...

            <br><br>

            I lovee loveee uuuuu ♡

            <br><br>

        </p>

    `

};


/* =========================================================
   MENU ELEMENTS
========================================================= */

const menuButton =
    document.getElementById(
        "menuButton"
    );

const menuClose =
    document.getElementById(
        "menuClose"
    );

const sideMenu =
    document.getElementById(
        "sideMenu"
    );

const menuOverlay =
    document.getElementById(
        "menuOverlay"
    );

const menuList =
    document.getElementById(
        "menuList"
    );

const menuContent =
    document.getElementById(
        "menuContent"
    );

const menuPageContent =
    document.getElementById(
        "menuPageContent"
    );

const menuBack =
    document.getElementById(
        "menuBack"
    );


/* =========================================================
   MUSIC PLAYER
========================================================= */

const musicPlayer =
    document.getElementById(
        "musicPlayer"
    );


const audioElements =
    document.querySelectorAll(
        ".audio"
    );


const playButtons =
    document.querySelectorAll(
        ".music-play"
    );


const pauseButtons =
    document.querySelectorAll(
        ".music-pause"
    );


const progressBars =
    document.querySelectorAll(
        ".music-progress"
    );


const musicCards =
    document.querySelectorAll(
        ".music-card"
    );


/* =========================
   FORMAT TIME
========================= */

function formatTime(seconds) {

    if (
        !Number.isFinite(seconds)
    ) {

        return "0:00";

    }


    const minutes =
        Math.floor(
            seconds / 60
        );


    const remainingSeconds =
        Math.floor(
            seconds % 60
        );


    return (
        minutes +
        ":" +
        String(
            remainingSeconds
        ).padStart(2, "0")
    );

}


/* =========================
   STOP ALL OTHER SONGS
========================= */

function stopOtherSongs(
    currentAudio
) {

    audioElements.forEach(
        (audio) => {

            if (
                audio !==
                currentAudio
            ) {

                audio.pause();

            }

        }
    );

}


/* =========================
   PLAY
========================= */

playButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const index =
                    button.dataset.song;


                const audio =
                    document.querySelector(
                        `.audio[data-song="${index}"]`
                    );


                stopOtherSongs(
                    audio
                );


                audio.play();

            }
        );

    }
);


/* =========================
   PAUSE
========================= */

pauseButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const index =
                    button.dataset.song;


                const audio =
                    document.querySelector(
                        `.audio[data-song="${index}"]`
                    );


                audio.pause();

            }
        );

    }
);


/* =========================
   AUDIO TIME UPDATE
========================= */

audioElements.forEach(
    (audio) => {

        const index =
            audio.dataset.song;


        const card =
            document.querySelector(
                `.music-card:nth-child(${Number(index) + 1})`
            );


        const progress =
            card.querySelector(
                ".music-progress"
            );


        const currentTime =
            card.querySelector(
                ".current-time"
            );


        const duration =
            card.querySelector(
                ".duration"
            );


        audio.addEventListener(
            "loadedmetadata",
            () => {

                duration.textContent =
                    formatTime(
                        audio.duration
                    );

            }
        );


        audio.addEventListener(
            "timeupdate",
            () => {

                if (
                    audio.duration
                ) {

                    progress.value =
                        (
                            audio.currentTime /
                            audio.duration
                        ) * 100;

                }


                currentTime.textContent =
                    formatTime(
                        audio.currentTime
                    );

            }
        );


        audio.addEventListener(
            "ended",
            () => {

                progress.value = 0;

                currentTime.textContent =
                    "0:00";

            }
        );

    }
);


/* =========================
   PROGRESS BAR
========================= */

progressBars.forEach(
    (progress) => {

        progress.addEventListener(
            "input",
            () => {

                const index =
                    progress.dataset.song;


                const audio =
                    document.querySelector(
                        `.audio[data-song="${index}"]`
                    );


                if (
                    audio.duration
                ) {

                    audio.currentTime =
                        (
                            progress.value /
                            100
                        ) *
                        audio.duration;

                }

            }
        );

    }
);


/* =========================
   OPEN MENU
========================= */

function openMenu() {

    sideMenu.classList.add(
        "active"
    );

    menuOverlay.classList.add(
        "active"
    );

    musicPlayer.classList.add(
        "active"
    );

}


/* =========================
   CLOSE MENU
========================= */

function closeMenu() {

    sideMenu.classList.remove(
        "active"
    );

    menuOverlay.classList.remove(
        "active"
    );

    musicPlayer.classList.remove(
        "active"
    );

}


/* =========================
   OPEN MENU PAGE
========================= */

function openMenuPage(page) {

    if (
        page === "replay"
    ) {

        closeMenu();


        currentScene = 0;


        formArea.classList.add(
            "hidden"
        );


        showScene();


        return;

    }


    menuPageContent.innerHTML =
        menuPages[page];


    menuList.classList.add(
        "hidden"
    );


    menuContent.classList.remove(
        "hidden"
    );

}


/* =========================
   BACK TO MENU
========================= */

function backToMenu() {

    menuContent.classList.add(
        "hidden"
    );


    menuList.classList.remove(
        "hidden"
    );

}


/* =========================
   MENU BUTTON
========================= */

menuButton.addEventListener(
    "click",
    openMenu
);


/* =========================
   CLOSE
========================= */

menuClose.addEventListener(
    "click",
    closeMenu
);


/* =========================
   OVERLAY
========================= */

menuOverlay.addEventListener(
    "click",
    closeMenu
);


/* =========================
   MENU ITEMS
========================= */

document
    .querySelectorAll(
        ".menu-links button"
    )
    .forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const page =
                        button.dataset.page;


                    openMenuPage(
                        page
                    );

                }
            );

        }
    );


/* =========================
   BACK
========================= */

menuBack.addEventListener(
    "click",
    backToMenu
);


/* =========================
   START
========================= */

showScene();


/* =========================================================
   FULLSCREEN GATE
========================================================= */

const fullscreenGate =
    document.getElementById(
        "fullscreenGate"
    );

const enterFullscreen =
    document.getElementById(
        "enterFullscreen"
    );

const fullscreenInstruction =
    document.getElementById(
        "fullscreenInstruction"
    );


let keyboardUnlocked = false;


/* =========================
   PRESS E
========================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key.toLowerCase() ===
            "e" &&
            !keyboardUnlocked
        ) {

            keyboardUnlocked = true;


            enterFullscreen.disabled =
                false;


            fullscreenInstruction.textContent =
                "Key accepted.";

        }

    }
);


/* =========================
   ENTER FULLSCREEN
========================= */

enterFullscreen.addEventListener(
    "click",
    async () => {

        if (
            !keyboardUnlocked
        ) {

            return;

        }


        try {

            await document.documentElement
                .requestFullscreen();


            if (
                document.fullscreenElement
            ) {

                fullscreenGate.classList.add(
                    "hidden"
                );

            }

        } catch (error) {

            console.error(
                "FULLSCREEN ERROR:",
                error
            );


            fullscreenInstruction.textContent =
                "fullscreen failed. please try again.";

        }

    }
);


/* =========================
   EXIT FULLSCREEN
========================= */

document.addEventListener(
    "fullscreenchange",
    () => {

        if (
            !document.fullscreenElement
        ) {

            fullscreenGate.classList.remove(
                "hidden"
            );

        }

    }
);
