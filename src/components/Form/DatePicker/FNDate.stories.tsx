import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DateField, { FNDateProps } from './FNDate';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css'; // import theme

export default {
    title: 'Components/Form/DateField',
    component: DateField,
    tags: ['autodocs'],
    argTypes: {
        id: {
            control: 'text',
            description: "Unique identifier for the DateField component."
        },
        appendTo: {
            control: 'text',
            description: "DOM element to which the calendar will be appended."
        },
        autoFocus: {
            control: 'boolean',
            description: "Automatically focus the DateField when the page loads."
        },
        ariaLabelledBy: {
            control: 'text',
            description: "ID of the element that labels the DateField for accessibility."
        },
        ariaLabel: {
            control: 'text',
            description: "Aria label for the DateField for accessibility."
        },
        autoZIndex: {
            control: 'boolean',
            description: "Automatically manage z-index for the overlay panel."
        },
        baseZIndex: {
            control: 'number',
            description: "Base z-index value for the overlay panel."
        },
        className: {
            control: 'text',
            description: "CSS class to apply to the DateField container."
        },
        clearButtonClassName: {
            control: 'text',
            description: "CSS class for the clear button element."
        },
        dateFormat: {
            control: 'text',
            description: "Format of the date displayed in the input field."
        },
        decrementIcon: {
            control: 'text',
            description: "Icon class for the decrement button."
        },
        invalid: {
            control: 'boolean',
            description: "Mark the DateField as invalid."
        },
        disabled: {
            control: 'boolean',
            description: "Disable the DateField component."
        },
        variant: {
            control: { type: 'select', options: ['outlined', 'filled'] },
            description: "Visual variant of the DateField."
        },
        disabledDates: {
            control: 'object',
            description: "Array of dates to be disabled."
        },
        disabledDays: {
            control: 'object',
            description: "Array of week days to be disabled."
        },
        enabledDates: {
            control: 'object',
            description: "Array of dates to be enabled, all others are disabled."
        },
        hideOnDateTimeSelect: {
            control: 'boolean',
            description: "Hide the calendar overlay after selecting a date/time."
        },
        hideOnRangeSelection: {
            control: 'boolean',
            description: "Hide the calendar overlay after selecting a range."
        },
        hourFormat: {
            control: { type: 'select', options: ['12', '24'] },
            description: "Hour format for the time picker."
        },
        icon: {
            control: 'text',
            description: "Icon to display next to the input field."
        },
        iconPos: {
            control: { type: 'select', options: ['left', 'right'] },
            description: "Position of the icon relative to the input field."
        },
        incrementIcon: {
            control: 'text',
            description: "Icon class for the increment button."
        },
        inline: {
            control: 'boolean',
            description: "Display the calendar inline instead of in an overlay."
        },
        inputClassName: {
            control: 'text',
            description: "CSS class to apply to the input field."
        },
        inputId: {
            control: 'text',
            description: "ID of the input field element."
        },
        inputRef: {
            control: 'text',
            description: "Reference to the input field element."
        },
        inputStyle: {
            control: 'object',
            description: "Inline styles to apply to the input field."
        },
        keepInvalid: {
            control: 'boolean',
            description: "Keep the invalid value in the input field."
        },
        locale: {
            control: 'text',
            description: "Locale settings for date and time formatting."
        },
        mask: {
            control: 'text',
            description: "Input mask for the date field."
        },
        maskSlotChar: {
            control: 'text',
            description: "Character to use as a placeholder in the input mask."
        },
        maxDate: {
            control: 'date',
            description: "Maximum selectable date."
        },
        maxDateCount: {
            control: 'number',
            description: "Maximum number of dates that can be selected."
        },
        minDate: {
            control: 'date',
            description: "Minimum selectable date."
        },
        monthNavigator: {
            control: 'boolean',
            description: "Enable month navigation in the calendar."
        },
        name: {
            control: 'text',
            description: "Name attribute for the input field."
        },
        nextIcon: {
            control: 'text',
            description: "Icon class for the next button in the calendar."
        },
        numberOfMonths: {
            control: 'number',
            description: "Number of months to display in the calendar."
        },
        panelClassName: {
            control: 'text',
            description: "CSS class for the calendar overlay panel."
        },
        panelStyle: {
            control: 'object',
            description: "Inline styles for the calendar overlay panel."
        },
        placeholder: {
            control: 'text',
            description: "Placeholder text for the input field."
        },
        prevIcon: {
            control: 'text',
            description: "Icon class for the previous button in the calendar."
        },
        readOnlyInput: {
            control: 'boolean',
            description: "Make the input field read-only."
        },
        required: {
            control: 'boolean',
            description: "Mark the input field as required."
        },
        selectOtherMonths: {
            control: 'boolean',
            description: "Allow selecting dates from other months displayed in the calendar."
        },
        shortYearCutoff: {
            control: 'text',
            description: "Cutoff year for determining the century of a 2-digit year."
        },
        showButtonBar: {
            control: 'boolean',
            description: "Display a button bar in the calendar."
        },
        showIcon: {
            control: 'boolean',
            description: "Show the calendar icon next to the input field."
        },
        showMillisec: {
            control: 'boolean',
            description: "Show milliseconds in the time picker."
        },
        showMinMaxRange: {
            control: 'boolean',
            description: "Show the range between min and max dates in the calendar."
        },
        showOnFocus: {
            control: 'boolean',
            description: "Show the calendar when the input field receives focus."
        },
        showOtherMonths: {
            control: 'boolean',
            description: "Display dates from other months in the current month view."
        },
        showSeconds: {
            control: 'boolean',
            description: "Show seconds in the time picker."
        },
        showTime: {
            control: 'boolean',
            description: "Enable time selection in the calendar."
        },
        showWeek: {
            control: 'boolean',
            description: "Show week numbers in the calendar."
        },
        stepHour: {
            control: 'number',
            description: "Step interval for hours in the time picker."
        },
        stepMillisec: {
            control: 'number',
            description: "Step interval for milliseconds in the time picker."
        },
        stepMinute: {
            control: 'number',
            description: "Step interval for minutes in the time picker."
        },
        stepSecond: {
            control: 'number',
            description: "Step interval for seconds in the time picker."
        },
        style: {
            control: 'object',
            description: "Inline styles to apply to the DateField container."
        },
        tabIndex: {
            control: 'number',
            description: "Tab index for the input field."
        },
        timeOnly: {
            control: 'boolean',
            description: "Show only the time picker, without the date picker."
        },
        todayButtonClassName: {
            control: 'text',
            description: "CSS class for the today button in the calendar."
        },
        tooltip: {
            control: 'text',
            description: "Tooltip text for the input field."
        },
        tooltipOptions: {
            control: 'object',
            description: "Options for the tooltip configuration."
        },
        touchUI: {
            control: 'boolean',
            description: "Enable touch-friendly UI for the calendar."
        },
        transitionOptions: {
            control: 'object',
            description: "Options for the transition animation."
        },
        view: {
            control: { type: 'select', options: ['date', 'month', 'year'] },
            description: "View mode of the calendar."
        },
        viewDate: {
            control: 'date',
            description: "Date to display in the calendar on initial render."
        },
        visible: {
            control: 'boolean',
            description: "Control the visibility of the calendar overlay."
        },
        yearNavigator: {
            control: 'boolean',
            description: "Enable year navigation in the calendar."
        },
        yearRange: {
            control: 'text',
            description: "Range of years for the year navigator."
        },
        formatDateTime: {
            control: 'text',
            description: "Custom function to format the date and time."
        },
        parseDateTime: {
            control: 'text',
            description: "Custom function to parse the date and time."
        },
        dateTemplate: {
            control: 'text',
            description: "Template for rendering dates in the calendar."
        },
        decadeTemplate: {
            control: 'text',
            description: "Template for rendering decades in the calendar."
        },
        footerTemplate: {
            control: 'text',
            description: "Template for the calendar footer."
        },
        headerTemplate: {
            control: 'text',
            description: "Template for the calendar header."
        },
        monthNavigatorTemplate: {
            control: 'text',
            description: "Template for the month navigator in the calendar."
        },
        yearNavigatorTemplate: {
            control: 'text',
            description: "Template for the year navigator in the calendar."
        },
    },
} as Meta;


const Template: StoryFn<FNDateProps> = (args) => <DateField {...args} />;

/**
 * Default story: Renders the DateField with default props.
 */
export const Default = Template.bind({});
Default.args = {
    label: 'Select Date',
    name: 'fn-date',
};

/**
 * WithValue story: Renders the DateField with an initial value.
 */
export const WithValue = Template.bind({});
WithValue.args = {
    label: 'Select Date',
    value: new Date(),
    name: 'fn-date',
};

/**
 * Invalid story: Renders the DateField in an invalid state.
 */
export const Invalid = Template.bind({});
Invalid.args = {
    invalid: true,
    name: 'fn-date',
};

/**
 * Disabled story: Renders the DateField in a disabled state.
 */
export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    name: 'fn-date',
};

/**
 * WithClassName story: Renders the DateField with a custom class name.
 */
export const WithClassName = Template.bind({});
WithClassName.args = {
    name: 'fn-date',
};

/**
 * WithSize story: Renders the DateField with a specified size.
 */
export const WithSize = Template.bind({});
WithSize.args = {
    size: 'lg',
    name: 'fn-date',
};

/**
 * WithTooltip story: Renders the DateField with a tooltip.
 */
export const WithTooltip = Template.bind({});
WithTooltip.args = {
    tooltip: 'Select a date',
    tooltipOptions: { position: 'top' },
    name: 'fn-date',
};

/**
 * Unstyled story: Renders the DateField without additional styles.
 */
export const Unstyled = Template.bind({});
Unstyled.args = {
    unstyled: true,
    name: 'fn-date',
};

/**
 * WithVariant story: Renders the DateField with the "filled" variant.
 */
export const WithVariant = Template.bind({});
WithVariant.args = {
    variant: 'filled',
    name: 'fn-date',
};


/**
 * WithLocale story: Renders the DateField with a specific locale.
 */
// export const WithLocale = Template.bind({});
// WithLocale.args = {
//     locale: 'es',
//     className: 'default-class',
// };

/**
 * WithDisabledDates story: Renders the DateField with specific disabled dates.
 */
export const WithDisabledDates = Template.bind({});
WithDisabledDates.args = {
    disabledDates: [new Date(2024, 6, 20), new Date(2024, 6, 21)],
    name: 'fn-date',
};

/**
 * WithEnabledDates story: Renders the DateField with specific enabled dates.
 */
export const WithEnabledDates = Template.bind({});
WithEnabledDates.args = {
    enabledDates: [new Date(2024, 6, 22), new Date(2024, 6, 23)],
    name: 'fn-date',
};

/**
 * WithMinMaxDate story: Renders the DateField with a minimum and maximum date.
 */
// export const WithMinMaxDate = Template.bind({});
// WithMinMaxDate.args = {
//     minDate: new Date(2024, 6, 1),
//     maxDate: new Date(2024, 6, 31),
//     className: 'default-class',
// };

/**
 * WithShowTime story: Renders the DateField with time selection enabled.
 */
export const WithShowTime = Template.bind({});
WithShowTime.args = {
    showTime: true,
    hourFormat: '24',
    name: 'fn-date',
};

/**
 * WithShowSeconds story: Renders the DateField with seconds selection enabled.
 */
export const WithShowSeconds = Template.bind({});
WithShowSeconds.args = {
    showTime: true,
    showSeconds: true,
    name: 'fn-date',
};

/**
 * WithYearNavigator story: Renders the DateField with year navigation enabled.
 */
export const WithYearNavigator = Template.bind({});
WithYearNavigator.args = {
    yearNavigator: true,
    yearRange: '2020:2030',
    name: 'fn-date',
};

/**
 * WithMonthNavigator story: Renders the DateField with month navigation enabled.
 */
export const WithMonthNavigator = Template.bind({});
WithMonthNavigator.args = {
    monthNavigator: true,
    name: 'fn-date',
};

/**
 * Inline story: Renders the DateField inline.
 */
export const Inline = Template.bind({});
Inline.args = {
    inline: true,
    name: 'fn-date',
};

/**
 * WithTooltipAndPlaceholder story: Renders the DateField with a tooltip and placeholder.
 */
export const WithTooltipAndPlaceholder = Template.bind({});
WithTooltipAndPlaceholder.args = {
    tooltip: 'Pick a date',
    tooltipOptions: { position: 'bottom' },
    placeholder: 'MM/DD/YYYY',
    name: 'fn-date',
};
