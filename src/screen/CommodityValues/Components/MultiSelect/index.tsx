import React from "react";
import { default as ReactSelect, MultiValue, ActionMeta } from "react-select";

interface Option {
  label: string;
  value: string;
}

interface MySelectProps {
  options: Option[];
  isMulti: boolean;
  closeMenuOnSelect: boolean;
  hideSelectedOptions: boolean;
  onChange: (selected: Option[]) => void;
  allowSelectAll: boolean;
  value: Option[];
  placeholder: string;
}

const MySelect: React.FC<MySelectProps> = (props) => {
  const allOption = { label: "Select all", value: "*" };

  const handleChange = (newValue: MultiValue<Option>) => {
    if (newValue) {
      const selected = newValue as Option[];
      if (selected.length > 0) {
        if (selected[selected.length - 1].value === allOption.value) {
          return props.onChange([...props.options]);
        }
        if (props.value.some((v) => v.value === allOption.value)) {
          if (selected.length === props.options.length - 1) {
            return props.onChange(
              selected.filter((option) => option.value !== allOption.value)
            );
          }
        }
        if (selected.length === props.options.length) {
          return props.onChange([allOption, ...selected]);
        }
      }
      return props.onChange(selected);
    }
    return props.onChange([]);
  };

  const options = props.allowSelectAll
    ? [allOption, ...props.options]
    : props.options;

  const displayValue = props.value.filter(
    (option) => option.value !== allOption.value
  );

  return (
    <ReactSelect
      {...props}
      options={options}
      onChange={handleChange}
      value={displayValue}
      isClearable
      isMulti
    />
  );
};

export default MySelect;
