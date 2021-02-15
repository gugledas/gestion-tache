import SelectDb from "../config/SelectDb";
const OptionsType = {
  /**
   *
   */
  opts: [],
  execute: false,
  loadType: function() {
    return new Promise(resolv => {
      if (this.execute) {
        resolv(this.opts);
      } else {
        this.execute = true;
        if (!this.opts.length) {
          console.log("Db.js");
          SelectDb.selectTypes().then(reponse => {
            var fm = [];
            for (let i in reponse) {
              fm.push({
                value: reponse[i].name,
                label: reponse[i].label,
                description: reponse[i].description
              });
            }
            this.opts = fm;
            console.log("selectTypes : ", this.opts);
            resolv(this.opts);
          });
        }
      }
    });
  }
};
export default OptionsType;
