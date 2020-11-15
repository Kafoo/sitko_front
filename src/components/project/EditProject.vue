<template>
  <v-card class="pt-7 pb-3">
    <div class="card-body" v-if="!pickingDate">
      <v-form @submit.prevent="sendEdit" ref="form" v-model="form">
        <v-text-field
          outlined
          label="Titre"
          v-model="editedProject.title"
          :rules="[v => !!v || 'Titre obligatoire']"
        ></v-text-field>
        <v-select
          label="Type"
          type="type"
          id="type"
          :items="types"
          :rules="[v => !!v || 'Type obligatoire']"
          solo
          max-width="200px"
          v-model="editedProject.type"
        ></v-select>
        <v-textarea
          outlined
          name="input-7-4"
          label="Description"
          v-model="editedProject.description"
          :rules="[v => !!v || 'Description obligatoire']"
        ></v-textarea>

          <v-chip-group column>
            <v-tooltip 
            v-for="(event, index) in editedProject.events" 
            :key="index" 
            bottom>
              <template v-slot:activator="{ on }">
                <v-chip 
                class="event-chip py-6 mt-0" 
                v-on="on"
                close
                @click:close="removeEvent(index)">
                  <v-icon class="px-2" v-if="event.singleDate">today</v-icon>
                  <v-icon class="px-2" v-else>date_range</v-icon>
                </v-chip>
              </template>
              <span>{{event.chip}}</span>
            </v-tooltip>
          </v-chip-group>

        <v-card-actions v-if="showEvents" class="d-flex justify-center">
          <v-spacer></v-spacer>
          <v-btn
          class="addEvent-btn"
          @click="pickingDate=true">
            Ajouter un événement
          </v-btn>
        </v-card-actions>

        <v-card-actions class="d-flex justify-center">
          <v-spacer></v-spacer>
          <v-btn @click="closeEdit" :disabled="loading">
            Annuler
          </v-btn>
          <v-btn color="primary" type="submit" :disabled="loading || !form">
            Confirmer
          </v-btn>
        </v-card-actions>
        <v-progress-linear
          v-if="loading"
          color="green darken-4 accent-4"
          indeterminate
          rounded
          height="6"
          class="progress"
        ></v-progress-linear>
      </v-form>
    </div>

    <ChooseDate 
    class="choose-date"
    v-if="pickingDate"
    @closeDatePicker="closeDatePicker"
    @addEvent="addEvent"/>


  </v-card>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import ChooseDate from '@/components/project/ChooseDate.vue';
export default {
  name: "EditProject",
  components:{
    ChooseDate
  },
  data() {
    return {
      form: false,
      loading: false,
      pickingDate: false,
      editedProject: {},
      types: ["commun", "idée", "perso"]
    };
  },
  mounted() {

    this.editedProject = JSON.parse(JSON.stringify(this.propProject));
  },
  props: {
    propProject: Object,
    showEvents: {type:Boolean, default:true}
  },
  watch: {
    propProject(newValue) {
      this.editedProject = JSON.parse(JSON.stringify(newValue));
    }
  },
  methods: {
    ...mapActions("project", ["sendEditProject"]),
    closeEdit() {
      this.$emit("closeEdit");
    },
    sendEdit() {
      this.loading = true;
      this.editedProject.projectOnly = !this.showEvents
      this.sendEditProject(this.editedProject)
        .then(() => {
          this.$emit("closeEdit");
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    closeDatePicker(){
      this.pickingDate = false
    },
    addEvent(event){
      this.editedProject.events.push(event)
    },
    removeEvent(index){
      this.editedProject.events.splice(index, 1)
    }
  }
};
</script>

<style>

  .progress {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

.choose-date, .card-body {
  animation: fade-in 0.4s ease;
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

</style>
