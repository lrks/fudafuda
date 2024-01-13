<template>
  <AkizukiBigSvg v-bind:initCode="hash2code" @changed="saveCode" />
  <div class="container mx-auto flex-row p-5 item-center">
    <p class="text-2xl font-medium title-font text-gray-900 mb-2">Code</p>
    <pre><code class="text-gray-900 w-full bg-gray-100 rounded border border-gray-300 p-1 block overflow-scroll">{{ payload }}</code></pre>
    <p class="text-sm mt-2 text-gray-500">「<a href="https://github.com/SIGCOWW/L0-A/blob/master/src/articles/pricer/pricer.re">この基板</a>」で使うことを前提にしています。PP4Cではありません。いくつかのセグメントは共通の信号線で制御されます。</p>
  </div>
</template>

<script>
import AkizukiBigSvg from '@/components/AkizukiBigSvg.vue'

export default {
  components: {
    AkizukiBigSvg
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
      payload: {type: 'AkizukiBig', code: ''},
    }
  },
  methods: {
    saveCode(payload) {
      this.payload = {type: 'AkizukiBig', code: payload['code']};
    },
  }
}
</script>
