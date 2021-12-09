<template>
  <div>
    <ul class="img-items">
      <li :key="i" v-for="(img, i) in imageList">
        <div style="position: relative">
          <img :src="img.src" style="height: 100px; width: auto" />
          <span class="del-mark" @click="deleteImg(i)">X</span>
        </div>
      </li>
    </ul>
    <div style="clear: none">
      <button @click="$refs.file.click()">사진업로드</button>
      <input
        type="file"
        @change="fileSelect"
        ref="file"
        style="display: none"
        accept=".jpg, .png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      files: null,
      imageList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async fileSelect(e) {
      const r = await this.$upload('/api/uploadFile', e.target.files[0])
      console.log(r)
      this.imageList.push({
        src: `http://localhost:3000/static/${r.filename}`,
        filename: r.filename
      })
    },
    async deleteImg(idx) {
      var filename = this.imageList[idx].filename
      const r = await this.$delete('/api/deleteFile?filename=' + filename)
      console.log(r)
      this.imageList = this.imageList.filter((img) => img.filename !== filename)
    }
  }
}
</script>

<style scoped>
.del-mark {
  position: absolute;
  top: 5px;
  right: 5px;
  color: white;
  z-index: 9999;
  cursor: pointer;
}

.img-items > li {
  list-style-type: none;
  float: left;
  margin-right: 10px;
}
</style>
