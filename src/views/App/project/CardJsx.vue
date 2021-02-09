<script>
import CardComponent from "./CardComponent.vue";
export default {
  name: "CardsJSX",
  props: {
    dataLoad: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      btnStateEdit: { state: false },
      modalEdit: false,
      ressourceToAdd: "",
      chooseType: "text",
      descToggle: true,
      show: true,
      selected: "projet",
      addingModal: false,
      modalRessource: false,
      isCollapsed: true,
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
    var loopDatas = projects => {
      var result = [];

      projects.forEach(project => {
        var cards = [];
        if (Array.isArray(project.cards)) {
          cards = loopDatas(project.cards);
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
                  console.log("project edit : ", item.titre);
                  this.$emit("modal-edit-on", item);
                }
              }
            },
            cards
          )
        );
      });
      return result;
    };
    return elt("div", loopDatas([this.dataLoad]));
  }
};
</script>
