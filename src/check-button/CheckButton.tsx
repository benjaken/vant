import {
  ref,
  defineComponent,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  isSameValue,
  createNamespace,
} from '../utils';

// Composables
import { useCustomFieldValue } from '@vant/use';

const [name, bem] = createNamespace('check-button');

type CheckButtonValue = string | number | string[] | number[];

export const checkButtonProps = {
  options: {
    type: Array as any,
    default: []
  },
  label: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: [String, Number, Array] as any,
    default: ''
  },
  round: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  cancelable: Boolean,
  single: Boolean,
  horizon: Boolean,
  row: {
    type: Number,
    default: 2,
  },
  needIndex: Boolean,
  beforeChange: null,
  disabledItems: {
    type: Array,
    default: () => [],
  },
  size: {
    type: String,
    default: 'normal'
  }
};

export type CheckButtonProps = ExtractPropTypes<typeof checkButtonProps>;

export default defineComponent({
  name,

  props: checkButtonProps,

  emits: ['change', 'update:modelValue'],

  setup(props, { emit }) {
    let startValue: CheckButtonValue;

    const root = ref<HTMLElement>();

    const itemStyle = (index: number): CSSProperties => {
      const { row, horizon, options } = props;
      const style: CSSProperties = {};
      style.flex = `0 0 ${100 / row - 1}%`;
      style.marginRight = (index + 1) % row === 0 && !horizon ? '0' : (row / (row - 1) + '%');
      const lastStart = options.length % row === 0 ? options.length - row : Math.floor(options.length / row) * row
      if (index >= lastStart || horizon) {
        style.marginBottom = '0';
      }
      return style;
    };


    const updateValue = (value: CheckButtonValue | CheckButtonValue[], end?: boolean) => {
      if (!isSameValue(value, props.modelValue)) {
        emit('update:modelValue', value);
      }

      if (end && !isSameValue(value, startValue)) {
        emit('change', value);
      }
    };

    const selectItem = (value: CheckButtonValue) => () => {
      const {
        modelValue,
        disabled,
        readonly,
        disabledItems,
        single,
        cancelable,
      } = props;
      if (!disabled && !readonly && !disabledItems?.includes(value)) {
        if (single) {
          updateValue(cancelable && modelValue === value ? "" : value, true);
        } else {
          updateValue(
            modelValue.includes(value) ? modelValue.filter((item) => item !== value) : [...modelValue, value], true
          );
        }
      }
    };

    const renderButtons = () => {
      const { single, size, label, options, needIndex, round, modelValue, disabledItems = [] } = props;
      return options.map((item: { [x: string]: any; value: CheckButtonValue; }, index: number) => (
          <div
            class={bem('item', {
              active: single ? modelValue == (needIndex ? index : item.value) : modelValue.includes((needIndex ? index : item.value)),
              disabled: disabledItems.includes(item.value),
              round,
              small: size === 'small',
            })}
            style={itemStyle(index)}
            onClick={selectItem(needIndex ? index : item.value)}
          >{item[label]}</div>
        ))
    }

    // format initial value
    updateValue(props.modelValue);
    useCustomFieldValue(() => props.modelValue);

    return () => (
      <div class="van-check-button">
        <div
          ref={root}
          class={bem('content', {
            horizon: props.horizon,
            disabled: props.disabled,
          })}
        >
          {renderButtons()}
        </div>
      </div>
    );
  },
});
