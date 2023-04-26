import { createVNode as _createVNode } from "vue";
import { ref, defineComponent } from "vue";
import { extend, pick, makeArrayProp, createNamespace } from "../utils/index.mjs";
import { useChildren } from "@vant/use";
import { Tab } from "../tab/index.mjs";
import { Tabs } from "../tabs/index.mjs";
import Toolbar, { pickerToolbarProps, pickerToolbarSlots } from "../picker/PickerToolbar.mjs";
const [name, bem] = createNamespace("picker-group");
const PICKER_GROUP_KEY = Symbol(name);
const pickerGroupProps = extend({
  tabs: makeArrayProp(),
  nextStepText: String
}, pickerToolbarProps);
var stdin_default = defineComponent({
  name,
  props: pickerGroupProps,
  emits: ["confirm", "cancel"],
  setup(props, {
    emit,
    slots
  }) {
    const activeTab = ref(0);
    const {
      children,
      linkChildren
    } = useChildren(PICKER_GROUP_KEY);
    linkChildren();
    const showNextButton = () => activeTab.value < props.tabs.length - 1 && props.nextStepText;
    const onConfirm = () => {
      if (showNextButton()) {
        activeTab.value++;
      } else {
        emit("confirm", children.map((item) => item.confirm()));
      }
    };
    const onCancel = () => emit("cancel");
    return () => {
      var _a;
      const childNodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const confirmButtonText = showNextButton() ? props.nextStepText : props.confirmButtonText;
      return _createVNode("div", {
        "class": bem()
      }, [_createVNode(Toolbar, {
        "title": props.title,
        "cancelButtonText": props.cancelButtonText,
        "confirmButtonText": confirmButtonText,
        "onConfirm": onConfirm,
        "onCancel": onCancel
      }, pick(slots, pickerToolbarSlots)), _createVNode(Tabs, {
        "active": activeTab.value,
        "onUpdate:active": ($event) => activeTab.value = $event,
        "class": bem("tabs"),
        "shrink": true,
        "animated": true,
        "lazyRender": false
      }, {
        default: () => [props.tabs.map((title, index) => _createVNode(Tab, {
          "title": title,
          "titleClass": bem("tab-title")
        }, {
          default: () => [childNodes == null ? void 0 : childNodes[index]]
        }))]
      })]);
    };
  }
});
export {
  PICKER_GROUP_KEY,
  stdin_default as default,
  pickerGroupProps
};
