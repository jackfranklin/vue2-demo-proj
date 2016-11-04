import bus from '../bus'
import Vue from 'vue'
import GithubUserData from '../GithubUserData/index.vue'

export default {
  name: 'GithubOutput',
  components: {
    'github-user-data': GithubUserData,
  },
  created() {
    bus.$on('new-username', this.onUsernameChange)
  },
  destroyed() {
    bus.$off('new-username', this.onUsernameChange)
  },
  methods: {
    onUsernameChange(name) {
      this.currentUsername = name
      this.fetchGithubData(name)
    },
    fetchGithubData(name) {
      if (this.githubData.hasOwnProperty(name)) return

      const url = `https://api.github.com/users/${name}`
      fetch(url).then(r => r.json()).then(data => {
        Vue.set(this.githubData, name, data)
      })
    }
  },
  data() {
    return {
      currentUsername: null,
      githubData: {}
    }
  }
}
