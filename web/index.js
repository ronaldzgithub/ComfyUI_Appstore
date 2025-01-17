import { app } from "../../scripts/app.js";

function initWidget(t) {
  t.widgets, t.widgets_values && t.widgets_values[0];
  let e = t.widgets_values ? t.widgets_values.slice(1) : void 0;
  t.widgets_values;
  (t.widgets = t.widgets.slice(0, 1)), (t.widgets[0].options.values = []);
  for (const [s, i] of t.inputs.entries()) {
    let i = t.inputs[s];
    if ("select" !== i.name && i.link) {
      let n = `${i.name}`;
      e && e.length > 0 && e[s] && (n = e[s]),
        t.widgets[0].options.values.push(n),
        t.addWidget(
          "text",
          `${i.name}_label`,
          n,
          (t, e, s, i, n) => {
            let a = [];
            s.widgets_values &&
              s.widgets_values[0] &&
              a.push(s.widgets_values[0]);
            for (const [t, e] of s.widgets.slice(1).entries())
              0 == a.length && a.push(e.value.trim()), a.push(e.value.trim());
            (s.widgets_values = a), initWidget(s);
          },
          { input: i.name }
        );
    }
  }
  (t.widgets[0].value = t.widgets[0].options.values[0]),
    app.canvas.setDirty(!0, !0);
}
let nodeDataName = "appstoreSwitch";
app.registerExtension({
  name: nodeDataName,
  setup(t) {},
  async beforeRegisterNodeDef(t, e, s) {
    if (e.name === nodeDataName) {
      var i = "input";
      t.prototype.onConnectionsChange;
      t.prototype.onConnectionsChange = function (t, n, a, p) {
        if (!p) return;
        if (2 == t) {
          if (
            a &&
            0 == n &&
            (e.name == nodeDataName &&
              "Reroute" == s.graph._nodes_by_id[p.target_id]?.type &&
              s.graph._nodes_by_id[p.target_id].disconnectInput(p.target_slot),
            "*" === this.outputs[0].type)
          )
            if ("*" === p.type)
              s.graph._nodes_by_id[p.target_id].disconnectInput(p.target_slot);
            else {
              (this.outputs[0].type = p.type),
                (this.outputs[0].label = p.type),
                (this.outputs[0].name = p.type);
              for (let t in this.inputs) {
                let e = this.inputs[t];
                "select" != e.name && (e.type = p.type);
              }
            }
          return;
        }
        if (
          (e.name === nodeDataName &&
            "Reroute" == s.graph._nodes_by_id[p.origin_id].type &&
            this.disconnectInput(p.target_slot),
          "select" == this.inputs[n].name)
        )
          return;
        if ("*" === this.inputs[0].type) {
          const t = s.graph.getNodeById(p.origin_id);
          let e = t.outputs[p.origin_slot].type;
          if ("*" == e) return void this.disconnectInput(p.target_slot);
          for (const [t, s] of this.inputs.entries()) {
            "select" !== this.inputs[t].name && (this.inputs[t].type = e);
          }
          if (
            ((this.outputs[0].type = e),
            (this.outputs[0].label = e),
            (this.outputs[0].name = e),
            "COMBO" == e)
          )
            if (this.inputs[p.target_slot].widget)
              this.outputs[0].widget = this.inputs[p.target_slot].widget;
            else
              for (const [e, s] of t.widgets.entries())
                t.outputs[p.target_slot].name === s.name &&
                  (this.outputs[0].widget = s.options.values);
          s.canvas.setDirty(!0, !0);
        }
        let o = 0;
        o += this.inputs.find((t) => "select" === t.name) ? 1 : 0;
        let u = this.widgets.find((t) => "select" == t.name);
        if (!a && this.inputs.length > 1 + o) {
          new Error().stack;
          "select" !== this.inputs[n].name &&
            (this.removeInput(n),
            (this.widgets_values = this.widgets_values.slice(n, 1)),
            s.graph.onNodeAdded(this),
            s.canvas.setDirty(!0, !0),
            u.options.values.splice(n, 1),
            this.widgets.splice(n + 1, 1));
        }
        let l = 1;
        for (let t = 0; t < this.inputs.length; t++) {
          "select" !== this.inputs[t].name &&
            ((this.inputs[t].name = `${i}${l}`),
            (this.inputs[t].label = `${i}${l}`),
            l++);
        }
        let d = this.inputs[this.inputs.length - 1];
        (("select" == d.name &&
          null != this.inputs[this.inputs.length - 2].link) ||
          ("select" != d.name && "sel_mode" != d.name && null != d.link)) &&
          (this.addInput(`${i}${l}`, this.outputs[0].type, { lazy: !0 }),
          s.canvas.setDirty(!0, !0)),
          initWidget(this);
      };
    }
  },
  nodeCreated(t, e) {
    t.comfyClass == nodeDataName &&
      ((t.inputs && 0 != t.inputs.length) ||
        t.addInput("input1", "*", { lazy: !0 }),
      t.widgets &&
        ((t.widgets[0].value = ""),
        (t.widgets[0].options.values = []),
        (t.widgets[0].callback = (t, e, s, i, n) => {})),
      !t.widgets || t.widgets.length);
  },
});
