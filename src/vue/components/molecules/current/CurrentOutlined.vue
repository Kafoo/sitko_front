<template>
  
  <div>
    <v-card
      outlined
      class="items-container text-center px-3 pt-3 pb-2 rounded-xl"
      :class="editable ? 'mb-4 pb-4' : ''"
    >
      <v-img v-if="draggable" class="drag" width="30px" src="https://static.thenounproject.com/png/1686943-200.png"></v-img>

      <div class="text-caption labelized noselect d-flex">
        {{ label }}
      </div>

      <div v-if="loading" class="d-flex justify-center flex-wrap" >
        <v-skeleton-loader 
        v-for="n in 3" 
        :key="n" 
        class="ma-3"
        type="card"
        width="200px"
        height="50px"/>
      </div>

      <span v-else-if="!items.length" class="font-italic noselect"
        >-- {{ empty }} --</span>
      
      <div 
      v-else 
      :style="'max-height:'+maxHeight" 
      class="mb-1 text-center rounded-0 overflow-y-auto">
        <slot></slot>
      </div>

    </v-card>
    <v-btn
      v-if="editable"
      color="green darken-3"
      min-width="0"
      class="rounded-xl pa-2 edit-icon"
      @click="$emit('edit')"
    >
      <v-icon color="white">
        add
      </v-icon>
    </v-btn>
  </div>

</template>

<script lang="ts">

import { defineComponent } from "@vue/composition-api"

export default defineComponent({

  name : "CurrentOutlined",

  props:{

    items:{
      type:Array,
      default:[]
    },

    empty:{
      type:String,
      default:''
    },

    loading: {
      type: Boolean,
      default: false
    },

    editable: {
      type: Boolean,
      default: false
    },

    draggable: {
      type: Boolean,
      default: false
    },

    label: {
      type: String,
      default: "Tags"
    },

    maxHeight: {
      type: String,
      default: "120px"
    }

  },

  setup() {


    return{
 
    }

  }
});
</script>

<style scoped>

::v-deep .edit-icon {
  position: absolute;
  bottom: -22px;
  left: 50%;
  transform: translate(-50%, 0%);
}

::v-deep .v-slide-group__content {
  justify-content: center;
}

.items-container {
  border-color: #959595;
}

.drag{
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: white;
  border-radius: 120%;
}

</style>
