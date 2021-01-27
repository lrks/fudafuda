<template>
  <AkizukiMiniSvg v-bind:initCode="hash2code" @changed="saveCode" />
  <div class="container mx-auto flex-row p-5 item-center">
    <p class="text-2xl font-medium title-font text-gray-900 mb-2">PP4C Code <button class="text-white bg-gray-500 border-0 ml-5 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-xs align-top" v-clipboard="payload2string">Copy to Clipboard</button></p>
    <pre><code class="text-gray-900 w-full bg-gray-100 rounded border border-gray-300 p-1 block overflow-scroll">{{ payload }}</code></pre>
    <p class="text-sm mt-2 text-gray-500">PP4Cの算出は <a href="http://furrtek.free.fr/?a=esl">Furrtek.org : Etiquettes electroniques</a> に基づきます。</p>
  </div>
</template>

<script>
import AkizukiMiniSvg from '@/components/AkizukiMiniSvg.vue'

export default {
  components: {
    AkizukiMiniSvg
  },
  computed: {
    hash2code() {
      return this.$route.hash ? this.$route.hash.substring(1) : '';
    },
    payload2string() {
      return JSON.stringify(this.payload);
    },
  },
  data(){
    return {
      payload: {type: 'AkizukiMini', code: ''},
    }
  },
  methods: {
    saveCode(payload) {
      this.payload = {type: 'AkizukiMini', code: payload['code']};
      location.hash = payload['code'];
    },
  }
}
</script>
