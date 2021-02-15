<script>
import CardComponent from "./CardComponent.vue";

export default {
  name: "CardsJSX",
  props: {
    dataLoad: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      btnStateEdit: { state: false },
      modalEdit: false,
      ressourceToAdd: "",
      chooseType: "text",
      descToggle: false,
      show: true,
      selected: "projet",
      addingModal: false,
      modalRessource: false,
      editorData: "<p>me al rasp sale</p>",
      editorConfig: {
        extraPlugins: "codesnippet",
        codeSnippet_theme: "monokai_sublime"
      },
      options: [
        { value: "projet", label: "Projet" },
        { value: "tache", label: "Tâche" },
        { value: "memos", label: "Mémos" }
      ]
    };
  },
  render: function(createElement) {
    const elt = createElement;
    var loopDatas = (projects, open = false) => {
      var result = [];
      projects.forEach(project => {
        var cards = [];
        project.open = open;
        if (Array.isArray(project.cards)) {
          cards = loopDatas(project.cards, false);
        }
        result.push(
          elt(
            CardComponent,
            {
              props: {
                dataLoad: project
              },
              on: {
                "modal-edit-on": item => {
                  this.$emit("modal-edit-on", item);
                },
                "Hide-type-project": item => {
                  this.$emit("Hide-type-project", item);
                },
                "suppression-ok": () => {
                  this.$emit("suppression-ok");
                }
              }
            },
            cards
          )
        );
      });
      return result;
    };

    return elt("div", loopDatas(this.dataLoad, true));
  }
};
</script>
