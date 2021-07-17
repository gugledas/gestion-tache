<script>
import CardComponent from "./CardComponent.vue";
import ProjectOptionsType from "./ProjectOptionsType";

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
      // var premierTours = 0;
      projects.forEach(project => {
        var cards = [];

        project.open = open;
        if (Array.isArray(project.cards)) {
          for (const item of this.options) {
            var test = project.cards.filter(
              projet => projet.type == item.value
            );
            var newT = test.filter(project => project.status == "0");
            var term = test.filter(project => project.status == "1");
            var encour = test.filter(project => project.status == "2");
            var annule = test.filter(project => project.status == "3");
            var newtest = newT
              .concat(encour)
              .concat(term)
              .concat(annule);
            var bottomBadge = loopDatas(newtest, false);

            var badge = [
              elt(
                "cBadge",
                {
                  class: {},
                  style: {
                    padding: "4px 7px",
                    margin: "0 0 7px 5px",

                    display: test.length ? "" : "none",
                    "max-width": "100px"
                  },
                  attrs: {
                    color: "dark",
                    tag: "div"
                  }
                },
                [
                  elt(
                    "strong",
                    {
                      style: {
                        "font-weigth": "bold",
                        color: "#fff67a ",
                        "margin-right": "2px",
                        "font-size": "1.2em"
                      }
                    },
                    test.length
                  ),
                  "  " + " " + item.label
                ]
              )
            ];
            cards.push(badge.concat(bottomBadge));
            //console.log("options", newT);
          }
        }
        //console.log("donnée cards", dataLoad);
        result.push(
          elt(
            CardComponent,
            {
              props: {
                dataLoad: project
              },
              on: {
                "modal-edit-on": item => {
                  //console.log("edit-on", item);
                  this.$emit("modal-edit-on", item);
                },
                "Hide-type-project": item => {
                  this.$emit("Hide-type-project", item);
                },
                "suppression-ok": () => {
                  this.$emit("suppression-ok");
                },
                "change-parent": item => {
                  //console.log("changeparent", item);
                  this.$emit("change-parent", item);
                },
                "edition-ok": () => {
                  this.$emit("edition-ok");
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
  },
  mounted() {
    this.loadOptions();
  },
  methods: {
    loadOptions() {
      ProjectOptionsType.loadType().then(reponse => {
        this.options = reponse;
      });
    }
  }
};
</script>
<style lang="scss"></style>
