<template>
  <div class="flex flex-col w-full bg-primary h-full drop-shadow-xl p-5">
    <div class="h-24" >
      <SelectBox />
    </div>
    <div>
      <TextBox/>
    </div>
    <div>
      <AccordionMenu/>
    </div>
  </div>
</template>
<script>
import SelectBox from '@/components/inputs/SelectBox.vue'
import TextBox from '@/components/inputs/TextBox.vue'
import AccordionMenu from '@/components/AccordionMenu.vue'
export default {
  components: {
    SelectBox,
    TextBox,
    AccordionMenu
  }
}
</script>
