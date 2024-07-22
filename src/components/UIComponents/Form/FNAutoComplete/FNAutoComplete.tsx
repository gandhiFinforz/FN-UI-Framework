import React, {
  FC,
  useState,
  ReactNode,
  CSSProperties,
  useEffect,
} from "react";
import { AutoComplete, AutoCompleteProps } from "primereact/autocomplete";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { VirtualScrollerProps } from "primereact/virtualscroller";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
import { useTranslation } from "react-i18next";
import { IconType } from "primereact/utils";

export interface FNAutoCompleteProps
  extends Omit<AutoCompleteProps, "optionGroupChildren"> {
  appendTo?: null | HTMLElement | "self" | (() => HTMLElement);
  autoFocus?: boolean;
  autoHighlight?: boolean;
  children?: ReactNode;
  className?: string;
  delay?: number;
  disabled?: boolean;
  dropdown?: boolean;
  dropdownAriaLabel?: string;
  dropdownAutoFocus?: boolean;
  dropdownIcon?: IconType<AutoCompleteProps>;
  dropdownMode?: "blank" | "current";
  emptyMessage?: string;
  field?: string;
  forceSelection?: boolean;
  id?: string;
  inputClassName?: string;
  inputId?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  inputStyle?: CSSProperties;
  invalid?: boolean;
  itemTemplate?: ReactNode | ((item: any) => ReactNode);
  loadingIcon?: IconType<AutoCompleteProps>;
  maxLength?: number;
  minLength?: number;
  multiple?: boolean;
  name?: string;
  optionGroupChildren?: string;
  optionGroupLabel?: string;
  optionGroupTemplate?: ReactNode | ((option: any, index: number) => ReactNode);
  panelClassName?: string;
  panelFooterTemplate?: ReactNode | ((props: AutoCompleteProps) => ReactNode);
  panelStyle?: CSSProperties;
  placeholder?: string;
  pt?: any;
  ptOptions?: any;
  readOnly?: boolean;
  removeTokenIcon?: IconType<AutoCompleteProps>;
  required?: boolean;
  scrollHeight?: string;
  selectedItemTemplate?: ReactNode | ((value: any) => ReactNode);
  selectionLimit?: number;
  showEmptyMessage?: boolean;
  size?: number;
  style?: CSSProperties;
  suggestions?: any[];
  tabIndex?: number;
  tooltip?: string | any;
  tooltipOptions?: TooltipOptions;
  transitionOptions?: CSSTransitionProps;
  type?: string;
  unstyled?: boolean;
  value?: any;
  variant?: "filled" | "outlined";
  virtualScrollerOptions?: VirtualScrollerProps;
  helpText?: string | any;
  label?: string;
}

const FNAutoComplete: FC<FNAutoCompleteProps> = ({
  appendTo,
  autoFocus = false,
  autoHighlight = false,
  children,
  className = "",
  delay = 0,
  disabled = false,
  dropdown = false,
  dropdownAriaLabel = "Choose",
  dropdownAutoFocus = true,
  dropdownIcon,
  dropdownMode = "blank",
  emptyMessage = "general.noRecordFound",
  field,
  forceSelection = false,
  id,
  inputClassName,
  inputId,
  inputRef,
  inputStyle,
  invalid = false,
  itemTemplate,
  loadingIcon,
  maxLength,
  minLength = 1,
  multiple = false,
  name,
  optionGroupChildren,
  optionGroupLabel,
  optionGroupTemplate,
  panelClassName,
  panelFooterTemplate,
  panelStyle,
  placeholder,
  pt,
  ptOptions,
  readOnly = false,
  removeTokenIcon,
  required = false,
  scrollHeight = "200px",
  selectedItemTemplate,
  selectionLimit,
  showEmptyMessage = true,
  size,
  style,
  suggestions = [],
  tabIndex,
  tooltip,
  tooltipOptions,
  transitionOptions,
  type,
  unstyled = false,
  value,
  variant = "outlined",
  virtualScrollerOptions,
  helpText,
  label,
  ...props
}) => {
  const { t } = useTranslation();

  const [filterSuggestions, setfilterSuggestions] =
    useState<any[]>(suggestions);

  const [localValue, setLocalValue] = useState(value);

  const search = (event: { query: string }) => {
    let filterSuggestionsItem = suggestions.filter((item) =>
      item.label.toString().toLowerCase().includes(event.query.toLowerCase())
    );

    setfilterSuggestions(filterSuggestionsItem);
  };

  useEffect(() => {
    if (localValue) {
      let filtervalue = suggestions.filter((item) =>
        item.value.toString().toLowerCase().match(value)
      );
      setLocalValue(filtervalue[0]);
    }
  }, []);

  return (
    <div className={label ? 'flex flex-column gap-1 ' : ''}>
      {label ? <label>{t(label)}</label> : ''}
      <AutoComplete
        {...props}
        appendTo={appendTo}
        autoFocus={autoFocus}
        autoHighlight={autoHighlight}
        delay={delay}
        dropdown={dropdown}
        dropdownAriaLabel={dropdownAriaLabel}
        dropdownAutoFocus={dropdownAutoFocus}
        dropdownIcon={dropdownIcon}
        dropdownMode={dropdownMode}
        emptyMessage={t(emptyMessage)}
        field={field}
        forceSelection={forceSelection}
        id={id}
        inputClassName={inputClassName}
        inputId={inputId}
        inputRef={inputRef}
        inputStyle={inputStyle}
        itemTemplate={itemTemplate}
        loadingIcon={loadingIcon}
        maxLength={maxLength}
        minLength={minLength}
        multiple={multiple}
        name={name}
        optionGroupChildren={optionGroupChildren}
        optionGroupLabel={optionGroupLabel}
        optionGroupTemplate={optionGroupTemplate}
        panelClassName={panelClassName}
        panelFooterTemplate={panelFooterTemplate}
        panelStyle={panelStyle}
        placeholder={placeholder}
        pt={pt}
        ptOptions={ptOptions}
        readOnly={readOnly}
        removeTokenIcon={removeTokenIcon}
        required={required}
        scrollHeight={scrollHeight}
        selectedItemTemplate={selectedItemTemplate}
        selectionLimit={selectionLimit}
        showEmptyMessage={showEmptyMessage}
        size={size}
        style={style}
        suggestions={filterSuggestions}
        tabIndex={tabIndex}
        tooltip={t(tooltip)}
        tooltipOptions={tooltipOptions}
        transitionOptions={transitionOptions}
        type={type}
        unstyled={unstyled}
        value={localValue}
        completeMethod={search}
        disabled={disabled}
        className={`p-autocomplete-${variant} ${className}`}
        onChange={(e) => setLocalValue(e.value)}
      />
      {children}
      {helpText ?
        <small className='text-red-400'>
          {t(helpText)}
        </small>
        : ''}
    </div>
  );
};

export default FNAutoComplete;
