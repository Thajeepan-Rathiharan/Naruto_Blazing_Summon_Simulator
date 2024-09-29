// List of characters with weights
const characters = [
    { image: "IMG/anko.webp", weight: 10 }, 
    { image: "IMG/anko2.webp", weight: 5 }, 
    { image: "IMG/ashura.webp", weight: 1 },
    { image: "IMG/baki.webp", weight: 2 },
    { image: "IMG/baki2.webp", weight: 3 },  
    { image: "IMG/chiyo.webp", weight: 4 }, 
    { image: "IMG/fake_choji.webp", weight: 6 },
    { image: "IMG/fake_choji2.webp", weight: 2 },
    { image: "IMG/kid_choji.webp", weight: 3 },
    { image: "IMG/darui.webp", weight: 2 },
    { image: "IMG/deidara.webp", weight: 4 },
    { image: "IMG/kid_gaara.webp", weight: 3 },
    { image: "IMG/kid_gaara2.webp", weight: 2 },
    { image: "IMG/gaara.webp", weight: 5 },
    { image: "IMG/fake_haku.webp", weight: 1 },
    { image: "IMG/haku.webp", weight: 4 },
    { image: "IMG/hashirama.webp", weight: 1 },
    { image: "IMG/sm_hashirama.webp", weight: 1 },
    { image: "IMG/edo_hashirama.webp", weight: 1 },
    { image: "IMG/hidan.webp", weight: 3 },
    { image: "IMG/fake_hinata.webp", weight: 1 },
    { image: "IMG/fake_hinata2.webp", weight: 1 },
    { image: "IMG/fake_hinata3.webp", weight: 1 },
    { image: "IMG/fake_hinata4.webp", weight: 1 },
    { image: "IMG/hinata.webp", weight: 3 },
    { image: "IMG/fake_hiruzen.webp", weight: 2 },
    { image: "IMG/fake_hiruzen2.webp", weight: 2 },
    { image: "IMG/hiruzen.webp", weight: 4 },
    { image: "IMG/hizashi1.webp", weight: 1 },
    { image: "IMG/hizashi11.webp", weight: 1 },
    { image: "IMG/hizashi2.webp", weight: 1 },
    { image: "IMG/hizashi22.webp", weight: 1 },
    { image: "IMG/fake_ino.webp", weight: 2 },
    { image: "IMG/fake_ino2.webp", weight: 2 },
    { image: "IMG/ino.webp", weight: 4 },
    { image: "IMG/iruka.webp", weight: 3 },
    { image: "IMG/fake_itachi.webp", weight: 1 },
    { image: "IMG/fake_itachi2.webp", weight: 1 },
    { image: "IMG/itachi.webp", weight: 2 },
    { image: "IMG/edo_itachi.webp", weight: 1 },
    { image: "IMG/indra.webp", weight: 1 },
    { image: "IMG/fake_jiraiya.webp", weight: 1 },
    { image: "IMG/fake_jiraiya2.webp", weight: 1 },
    { image: "IMG/jiraiya.webp", weight: 3 },
    { image: "IMG/sannin_jiraiya.webp", weight: 1 },
    { image: "IMG/sm_jiraiya.webp", weight: 1 },
    { image: "IMG/fake_jirobo.webp", weight: 2 },
    { image: "IMG/fake_jirobo2.webp", weight: 2 },
    { image: "IMG/jugo.webp", weight: 2 },
    { image: "IMG/kabuto.webp", weight: 3 },
    { image: "IMG/kabuto2.webp", weight: 2 },
    { image: "IMG/fake_kabuto.webp", weight: 1 },
    { image: "IMG/fake_kabuto2.webp", weight: 1 },
    { image: "IMG/kaguya.webp", weight: 1 },
    { image: "IMG/kid_kakashi.webp", weight: 2 },
    { image: "IMG/fake_kakashi.webp", weight: 1 },
    { image: "IMG/kakashi2.webp", weight: 3 },
    { image: "IMG/kakashi.webp", weight: 3 },
    { image: "IMG/kakashi2.webp", weight: 3 },
    { image: "IMG/dms_kakashi.webp", weight: 1 },
    { image: "IMG/kakkon.webp", weight: 1 },
    { image: "IMG/kakkon2.webp", weight: 1 },
    { image: "IMG/kakuzu.webp", weight: 3 },
    { image: "IMG/fake_kankuro.webp", weight: 1 },
    { image: "IMG/fake_kankuro2.webp", weight: 1 },
    { image: "IMG/fake_kankuro3.webp", weight: 1 },
    { image: "IMG/fake_kankuro4.webp", weight: 1 },
    { image: "IMG/karin.webp", weight: 2 },
    { image: "IMG/fake_kiba.webp", weight: 1 },
    { image: "IMG/fake_kiba2.webp", weight: 1 },
    { image: "IMG/fake_kiba3.webp", weight: 1 },
    { image: "IMG/fake_kiba4.webp", weight: 1 },
    { image: "IMG/fake_kidomaru.webp", weight: 1 },
    { image: "IMG/fake_kidomaru2.webp", weight: 1 },
    { image: "IMG/killerbee.webp", weight: 2 },
    { image: "IMG/kisame.webp", weight: 2 },
    { image: "IMG/konan.webp", weight: 2 },
    { image: "IMG/konohamaru.webp", weight: 3 },
    { image: "IMG/konohamaru1.webp", weight: 3 },
    { image: "IMG/konohamaru2.webp", weight: 3 },
    { image: "IMG/kurenai.webp", weight: 2 },
    { image: "IMG/kurenai2.webp", weight: 2 },
    { image: "IMG/kushina.webp", weight: 2 },
    { image: "IMG/madara.webp", weight: 1 },
    { image: "IMG/edo_madara.webp", weight: 1 },
    { image: "IMG/so6p_madara.webp", weight: 1 },
    { image: "IMG/mei.webp", weight: 2 },
    { image: "IMG/fake_guy.webp", weight: 1 },
    { image: "IMG/guy_.webp", weight: 1 },
    { image: "IMG/guy.webp", weight: 2 },
    { image: "IMG/guy2.webp", weight: 2 },
    { image: "IMG/minato.webp", weight: 1 },
    { image: "IMG/edo_minato.webp", weight: 1 },
    { image: "IMG/kcm_minato.webp", weight: 1 },
    { image: "IMG/mist_ninja.webp", weight: 1 },
    { image: "IMG/fake_naruto.webp", weight: 1 },
    { image: "IMG/fake_naruto2.webp", weight: 1 },
    { image: "IMG/kid_naruto.webp", weight: 3 },
    { image: "IMG/kid_naruto2.webp", weight: 3 },
    { image: "IMG/ot-naruto.webp", weight: 2 },
    { image: "IMG/naruto.webp", weight: 5 },
    { image: "IMG/sm_naruto.webp", weight: 2 },
    { image: "IMG/kcm_naruto.webp", weight: 1 },
    { image: "IMG/so6p_naruto.webp", weight: 1 },
    { image: "IMG/fv_naruto.webp", weight: 1 },
    { image: "IMG/last_naruto.webp", weight: 1 },
    { image: "IMG/nagato.webp", weight: 2 },
    { image: "IMG/fake_neji.webp", weight: 1 },
    { image: "IMG/fake_neji2.webp", weight: 1 },
    { image: "IMG/kid_neji.webp", weight: 1 },
    { image: "IMG/kid_obito.webp", weight: 1 },
    { image: "IMG/obito.webp", weight: 1 },
    { image: "IMG/so6p_obito.webp", weight: 1 },
    { image: "IMG/fake_orochimaru.webp", weight: 1 },
    { image: "IMG/fake_orochimaru2.webp", weight: 1 },
    { image: "IMG/orochimaru.webp", weight: 2 },
    { image: "IMG/sannin_orochimaru.webp", weight: 1 },
    { image: "IMG/pain.webp", weight: 2 },
    { image: "IMG/raikage.webp", weight: 1 },
    { image: "IMG/random.webp", weight: 1 },
    { image: "IMG/random1.webp", weight: 1 },
    { image: "IMG/random3.webp", weight: 1 },
    { image: "IMG/random4.webp", weight: 1 },
    { image: "IMG/random5.webp", weight: 1 },
    { image: "IMG/random6.webp", weight: 1 },
    { image: "IMG/random7.webp", weight: 1 },
    { image: "IMG/random8.webp", weight: 1 },
    { image: "IMG/random9.webp", weight: 1 },
    { image: "IMG/random10.webp", weight: 1 },
    { image: "IMG/random11.webp", weight: 1 },
    { image: "IMG/random12.webp", weight: 1 },
    { image: "IMG/random13.webp", weight: 1 },
    { image: "IMG/random14.webp", weight: 1 },
    { image: "IMG/random15.webp", weight: 1 },
    { image: "IMG/random16.webp", weight: 1 },
    { image: "IMG/random17.webp", weight: 1 },
    { image: "IMG/random18.webp", weight: 1 },
    { image: "IMG/random19.webp", weight: 1 },
    { image: "IMG/random20.webp", weight: 1 },
    { image: "IMG/random21.webp", weight: 1 },
    { image: "IMG/random22.webp", weight: 1 },
    { image: "IMG/random23.webp", weight: 1 },
    { image: "IMG/random24.webp", weight: 1 },
    { image: "IMG/random25.webp", weight: 1 },
    { image: "IMG/random26.webp", weight: 1 },
    { image: "IMG/random27.webp", weight: 1 },
    { image: "IMG/random28.webp", weight: 1 },
    { image: "IMG/random29.webp", weight: 1 },
    { image: "IMG/random30.webp", weight: 1 },
    { image: "IMG/random31.webp", weight: 1 },
    { image: "IMG/random32.webp", weight: 1 },
    { image: "IMG/random33.webp", weight: 1 },
    { image: "IMG/random34.webp", weight: 1 },
    { image: "IMG/random35.webp", weight: 1 },
    { image: "IMG/random36.webp", weight: 1 },
    { image: "IMG/random37.webp", weight: 1 },
    { image: "IMG/random38.webp", weight: 1 },
    { image: "IMG/fake_lee.webp", weight: 2 },
    { image: "IMG/kid_lee.webp", weight: 2 },
    { image: "IMG/rocklee.webp", weight: 2 },
    { image: "IMG/sai.webp", weight: 3 },
    { image: "IMG/fake_sakon.webp", weight: 1 },
    { image: "IMG/fake_sakon2.webp", weight: 1 },
    { image: "IMG/fake_sakura.webp", weight: 1 },
    { image: "IMG/fake_sakura2.webp", weight: 1 },
    { image: "IMG/sakura.webp", weight: 4 },
    { image: "IMG/sakura2.webp", weight: 3 },
    { image: "IMG/sasori.webp", weight: 2 },
    { image: "IMG/kid_sasuke.webp", weight: 2 },
    { image: "IMG/kid_sasuke2.webp", weight: 2 },
    { image: "IMG/sasuke.webp", weight: 5 },
    { image: "IMG/sasuke2.webp", weight: 3 },
    { image: "IMG/sasuke3.webp", weight: 1 },
    { image: "IMG/ems_sasuke.webp", weight: 1 },
    { image: "IMG/so6p_sasuke.webp", weight: 1 },
    { image: "IMG/fv_sasuke.webp", weight: 1 },
    { image: "IMG/shinden_sasuke.webp", weight: 1 },
    { image: "IMG/suigetsu.webp", weight: 2 },
    { image: "IMG/shibi.webp", weight: 2 },
    { image: "IMG/fake_shikamaru.webp", weight: 1 },
    { image: "IMG/fake_shikamaru2.webp", weight: 1 },
    { image: "IMG/shikamaru.webp", weight: 3 },
    { image: "IMG/fake_shino.webp", weight: 2 },
    { image: "IMG/shisui.webp", weight: 1 },
    { image: "IMG/sound_ninja.webp", weight: 1 },
    { image: "IMG/stone_ninja.webp", weight: 1 },
    { image: "IMG/fake_tayuya.webp", weight: 1 },
    { image: "IMG/fake_tayuya2.webp", weight: 1 },
    { image: "IMG/fake_temari.webp", weight: 1 },
    { image: "IMG/fake_temari2.webp", weight: 1 },
    { image: "IMG/fake_temari3.webp", weight: 1 },
    { image: "IMG/fake_temari4.webp", weight: 1 },
    { image: "IMG/fake_tenten.webp", weight: 1 },
    { image: "IMG/fake_tenten2.webp", weight: 1 },
    { image: "IMG/tenten.webp", weight: 2 },
    { image: "IMG/tobi.webp", weight: 1 },
    { image: "IMG/tobirama.webp", weight: 1 },
    { image: "IMG/edo_tobirama.webp", weight: 1 },
    { image: "IMG/yamato.webp", weight: 2 },
    { image: "IMG/fake_zabuza.webp", weight: 1 },
    { image: "IMG/fake_zabuza2.webp", weight: 1 },
    { image: "IMG/zabuza.webp", weight: 2 }
];

// Function to get a random character based on weights
function getRandomCharacter() {
    const totalWeight = characters.reduce((sum, character) => sum + character.weight, 0);
    let random = Math.floor(Math.random() * totalWeight);
    
    for (const character of characters) {
        if (random < character.weight) {
            return character; // Return the character whose weight encompasses the random value
        }
        random -= character.weight; // Reduce random by the current character's weight
    }
}

// Wrap the code in a DOMContentLoaded event to ensure elements are available
document.addEventListener('DOMContentLoaded', function() {
    // Event Listener for Single Summon Button
    document.getElementById('singleSummonButton').addEventListener('click', function() {
        const summonedCharacter = getRandomCharacter();
        document.getElementById('result').innerHTML = `
            <img src="${summonedCharacter.image}" alt="Character" class="character-image">
        `;
    });

    // Event Listener for Multi Summon Button
    document.getElementById('multiSummonButton').addEventListener('click', function() {
        const summonedCharacters = [];
        for (let i = 0; i < 10; i++) {
            summonedCharacters.push(getRandomCharacter());
        }

        // Display the summoned characters in the new div
        document.getElementById('summonedCharacters').innerHTML = summonedCharacters.map(character => `
            <div class="summoned-character">
                <img src="${character.image}" alt="Character" class="character-image">
            </div>
        `).join('');
    });
});
