import SelectDb from "../config/SelectDb";
const OptionsType = {
  /**
   *
   */
  opts: [],
  instance: false,
  loadType: function() {
    return new Promise(resolv => {
      if (this.instance) {
        this.instance.then(() => {
          resolv(this.opts);
        });
      } else {
        if (!this.opts.length) {
          this.instance = SelectDb.selectTypes();
          this.instance.then(reponse => {
            // console.log("type : ,", reponse);
            var fm = [];
            for (let i in reponse) {
              fm.push({
                value: reponse[i].name,
                label: reponse[i].label,
                description: reponse[i].description
              });
            }
            this.opts = fm;
            //console.log("selectTypes : ", this.opts);
            resolv(this.opts);
          });
        }
      }
    });
  }
};
export default OptionsType;
