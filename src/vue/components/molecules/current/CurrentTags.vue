<template>
  <div style="position:relative">

    <current-outlined
      :label="label"
      :items="compTags"
      :editable="editable"
      :draggable="draggable"
      :empty="$t('no tag yet') | capitalize"
      :edit_text="$t('options.edit')"
      @edit="$emit('edit')"
    >
      <div class="d-flex flex-wrap flex-row justify-center align-center">

        <draggable 
        :disabled="!draggable"
        class="list-group"
        tag="ul"
        v-model="compTags"
        v-bind="dragOptions"
        @start="drag = true"
        @change="$emit('update', compTags)"
        @end="drag = false"
          >
            <transition-group 
            type="transition" >
              <tag-chip
                :class="draggable? 'list-group-item' : ''"
                v-for="(tag, index) in compTags"
                :key="tag.title"
                :closable="closable"
                :noselect="!draggable"
                :tag="tag"
                @close="close(index)"
              />
          </transition-group>
        </draggable>
      </div>
    </current-outlined>


  </div>
</template>

<script lang="ts">
import TagModel from "@/ts/models/tagClass";
import { defineComponent, ref, computed, onMounted, watch } from "@vue/composition-api";
import TagChip from "../../atoms/tag/TagChip.vue";
import CurrentOutlined from "@c/molecules/current/CurrentOutlined.vue"
import Draggable from 'vuedraggable'

export default defineComponent({
  components: {
    TagChip,
    CurrentOutlined,
    Draggable
  },

  props: {
    tags: {
      type: Array as () => Array<TagModel>,
      default: () => []
    },
    label: {
      type: String,
      default: "Tags"
    },
    editable: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },

  name: "",

  setup(props, {emit}) {

    var compTags = ref<Array<TagModel>>([]);

    const setTags = (tags:Array<TagModel>)=>{
      compTags.value = JSON.parse(JSON.stringify(tags))
    }

    onMounted(()=>{
      setTags(props.tags)
    })

    watch(
      () => props.tags,
      newValue => {
        setTags(newValue);
      }
    );

    var drag = ref(false)

    var dragOptions:any = computed(() => {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      }
    })

    const close = (index:number)=>{
      const tag = compTags.value[index]
      emit('removeTag', index)
    }

    return {
      drag,
      dragOptions,
      compTags,
      close
    };
  }
});
</script>

<style scoped>
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
