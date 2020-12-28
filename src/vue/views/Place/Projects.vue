<template>
  <div>
    <div class="text-center">
      <create-button
        :item="$t('project')"
        @action="creating = true"
      />
    </div>

    <!-- Select Type -->
    <v-select
      :items="types"
      label="Type"
      outlined
      v-model="activeType"
    ></v-select>

    <!-- No Project -->
    <h4 v-if="!loading_projects && !projects.length" class="text-center">
      -- {{ $t("data.empty", { item: $t("project") }) }} --
    </h4>

    <!-- No Active Project -->
    <h4
      v-else-if="!loading_projects && !activeProjects.length"
      class="text-center"
    >
      -- {{ $t("data.empty_typed", { item: $t("project") }) }} --
    </h4>

    <!-- Loadings -->
    <div v-if="loading_projects" class="d-flex flex-column">

      <skeleton-index/>

    </div>

    <!-- Index -->
    <div v-else>
      <transition-group
        class="projects d-flex flex-column"
        name="list-complete"
        tag="p"
      >
        <div
          v-for="(project, index) in activeProjects"
          :key="project.id"
          class="list-complete-item"
        >
          <card-project
            :project="project"
            :index="index"
            :expanded="project.expanded"
            @toogleExpand="toogleExpand(project.id)"
            @openEdit="openEdit"
            @deleteProject="SEND_PROJECT_DELETION"
            @toogleImage="toogleImage"
          />
        </div>
      </transition-group>

      <!-- Creation -->
      <v-dialog v-model="creating" width="500">
        <create-project @closeCreation="closeCreation" />
      </v-dialog>

      <!-- Edition -->
      <v-dialog v-model="editing" width="500">
        <edit-project :propProject="editionProject" @closeEdit="closeEdit" />
      </v-dialog>

      <!-- Image Pop-up -->
      <v-dialog v-model="expand_image" width="90%">
        <image-popup :image="expanded_image" @toogleImage="toogleImage" />
      </v-dialog>
      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import axios from "axios";
import EditProject from "@c/organisms/project/EditProject.vue";
import CreateProject from "@c/organisms/project/CreateProject.vue";
import CardProject from "@c/molecules/project/CardProject.vue";
import ImagePopup from "@c/organisms/app/ImagePopup.vue";
import CreateButton from "@c/atoms/app/CreateButton.vue";
import SkeletonIndex from "@c/molecules/project/SkeletonIndex.vue"

export default {
  name: "Projects",

  components: {
    EditProject,
    CreateProject,
    CardProject,
    ImagePopup,
    CreateButton,
    SkeletonIndex
  },

  data() {
    return {
      hash: null,
      place_id: this.$route.params.id,
      expand_image: false,
      expanded_image: {},
      editing: false,
      creating: false,
      activeType: "",
      editionProject: {}
    };
  },

  mounted() {
    this.activeType = this.types[0];

    if (location.hash) {
      this.hash = location.hash;
    }
    location.hash = "";

    var data = {
      place_id: this.place_id,
      hash: this.hash
    };

    this.GET_PLACE_PROJECTS(data);
  },

  watch: {
    //Slide to hashed project
    loading_projects: function() {
      if (this.loading_projects === false) {
        this.$nextTick(() => {
          if (this.hash) {
            var id = this.hash.slice(1);
            this.TOOGLE_PROJECT_EXPAND(id);
            setTimeout(() => {
              document.getElementById(id).scrollIntoView({
                behavior: "smooth"
              });
            }, 300);
          }
        });
      }
    },

    //If locale changes, types change and so must activeType
    types() {
      this.activeType = this.types[0];
    }
  },

  computed: {
    ...mapGetters("project", ["loading_projects", "projects"]),

    types() {
      return [this.$t("all"), "ferme", "écolieu", "autre"];
    },

    activeProjects() {
      if (this.activeType === this.$t("all")) {
        return this.projects;
      } else {
        return this.projects.filter(project => {
          return project.type === this.activeType;
        });
      }
    }
  },

  methods: {
    ...mapActions("project", [
      "GET_PLACE_PROJECTS",
      "SEND_PROJECT_DELETION",
      "TOOGLE_PROJECT_EXPAND"
    ]),
    ...mapMutations("project", ["closeExpands"]),

    openEdit(index) {
      this.editionProject = this.projects[index];
      this.editing = true;
    },

    closeEdit() {
      this.editing = false;
      this.editionProject = {};
    },

    closeCreation() {
      this.creating = false;
    },

    toogleImage(img = {}) {
      this.expanded_image = img;
      this.expand_image = !this.expand_image;
    },

    toogleExpand(id = null) {
      this.TOOGLE_PROJECT_EXPAND(id);
    }
  }
};
</script>

<style scoped>
.list-complete-item {
  transition: all 0.2s;
}
.list-complete-enter {
  opacity: 0;
  transform: translateX(-500px);
}
.list-complete-leave-to {
  opacity: 0;
  transform: translateX(500px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
