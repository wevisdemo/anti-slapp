export const state = () => ({
    score: 0,
    warnUpAns: false,
    soundOn: false,
    isClickFromMenu: true,
})

export const mutations = {
    setScore(state, score) {
        state.score += score;
    },
    setWarnUpAns(state, ans) {
        state.warnUpAns = ans;
    },
    setSound(state, sound) {
        state.soundOn = sound;
    },
    setIsClickFromMenu(state, click) {
        state.isClickFromMenu = click;
    }
}

export default { mutations, state }