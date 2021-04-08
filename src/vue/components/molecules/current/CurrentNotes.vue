<template>
  <div style="position:relative">
    <current-outlined
      :label="label"
      :items="compNotes"
      :editable="editable"
      :draggable="draggable"
      :loading="loading"
      maxHeight="200px"
      :empty="$t('no note yet') | capitalize"
      :edit_text="$t('options.edit')"
      @edit="$emit('edit')"
    >
      <draggable
        :disabled="!draggable"
        class="list-group"
        note="ul"
        v-model="compNotes"
        v-bind="dragOptions"
        @start="drag = true"
        @change="$emit('update', compNotes)"
        @end="drag = false"
      >
        <transition-group
          type="transition"
          class="d-flex flex-wrap flex-row justify-center align-center"
        >
          <note-card
            class="mx-2"
            :class="draggable ? 'list-group-item' : ''"
            v-for="(note, index) in compNotes"
            :key="note.title"
            :closable="closable"
            :noselect="!draggable"
            :note="note"
            @close="close(index)"
          />
        </transition-group>
      </draggable>
    </current-outlined>
  </div>
</template>

<script lang="ts">
import NoteModel from "@/ts/models/noteClass";
import {
  defineComponent,
  ref,
  computed,
  onMounted,
  watch
} from "@vue/composition-api";
import NoteCard from "../../molecules/note/NoteCard.vue";
import CurrentOutlined from "@c/molecules/current/CurrentOutlined.vue";
import Draggable from "vuedraggable";

export default defineComponent({
  components: {
    NoteCard,
    CurrentOutlined,
    Draggable
  },

  props: {
    notes: {
      type: Array as () => Array<NoteModel>,
      default: () => []
    },
    label: {
      type: String,
      default: "Notes"
    },
    loading: {
      type: Boolean,
      default: false
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

  setup(props, { emit }) {
    var compNotes = ref<Array<NoteModel>>([]);

    const setNotes = (notes: Array<NoteModel>) => {
      compNotes.value = JSON.parse(JSON.stringify(notes));
    };

    onMounted(() => {
      setNotes(props.notes);
    });

    watch(
      () => props.notes,
      newValue => {
        setNotes(newValue);
      }
    );

    var drag = ref(false);

    var dragOptions: any = computed(() => {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    });

    const close = (index: number) => {
      const note = compNotes.value[index];
      emit("removeNote", index);
    };

    return {
      drag,
      dragOptions,
      compNotes,
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
