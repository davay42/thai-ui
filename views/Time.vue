<script setup>

</script>

<template lang='pug'>
.max-w-full.overflow-x-scroll.overflow-y-hidden
  table(cellspacing="0", cellpadding="3")
    tbody
      tr.News
        td(v-for="i in 24") {{ i.toString().padStart(2, "0") }}

      tr.ThaiText
        td(colspan="5", bgcolor="#CCCCCC").

          ตอนตี

        td(colspan="6", bgcolor="#FF9966").

          ตอนเช้า

        td(bgcolor="#FFFF00").


        td(colspan="4", bgcolor="#FF9900").

          ตอนบ่าย

        td 
        td 
        td(colspan="5", bgcolor="#666666")
          font(color="#FFFFFF") ตอนค่ำ
        td(bgcolor="#333333").


      tr.ThaiText
        td(colspan="3", bgcolor="#996666").

          ตอนดึก

        td
        td 
        td 
        td 
        td 
        td 
        td 
        td(colspan="3", bgcolor="#FFFF00")
          font(color="#333") ตอนสาย 
        td 
        td 
        td(colspan="3", bgcolor="#0066CC")
          font(color="#FFFFFF") ตอนเย็น 
        td 
        td 
        td 
        td(colspan="3", bgcolor="#996666").

          ตอนดึก

      tr
        td 1
        td 2
        td 3
        td 4
        td 5
        td 6
        td 1
        td 2
        td 3
        td 4
        td 5
        td 0
        td 1
        td 2
        td 3
        td 4
        td 5
        td 6
        td 1
        td 2
        td 3
        td 4
        td 5
        td 0

  a(href="/thai-ui/UhrzeitTH.pdf" download) PDF
</template>

<style scoped>
table,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>