// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    esbuild: {
      options: {
        tsconfigRaw: {
          compilerOptions: {
            experimentalDecorators: true,
            
          }
        }
      }
    }
  }
  // typescript: {
  //   shim: false,
  //   strict: true,
  // },
})
