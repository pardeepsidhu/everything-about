"use client";
import { ChevronDown } from "lucide-react"
import {
  Button as AriaButton,
  ListBox as AriaListBox,
  Select as AriaSelect,
  SelectValue as AriaSelectValue,
  composeRenderProps,
  Text,
} from "react-aria-components";

import { cn } from "@/lib/utils"

import { FieldError, Label } from "@/components/ui/field"
import {
  ListBoxCollection,
  ListBoxHeader,
  ListBoxItem,
  ListBoxSection,
} from "@/components/ui/list-box"
import { Popover } from "@/components/ui/popover"

const Select = AriaSelect

const SelectItem = ListBoxItem

const SelectHeader = ListBoxHeader

const SelectSection = ListBoxSection

const SelectCollection = ListBoxCollection

const SelectValue = (
  {
    className,
    ...props
  }
) => (<AriaSelectValue
  className={composeRenderProps(className, (className) =>
    cn("line-clamp-1 data-[placeholder]:text-muted-foreground", /* Description */
    "[&>[slot=description]]:hidden", className))}
  {...props} />)

const SelectTrigger = ({
  className,
  children,
  ...props
}) => (
  <AriaButton
    className={composeRenderProps(className, (className) =>
      cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
        /* Disabled */
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        /* Focused */
        "data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
        /* Resets */
        "focus-visible:outline-none",
        className
      ))}
    {...props}>
    {composeRenderProps(children, (children) => (
      <>
        {children}
        <ChevronDown aria-hidden="true" className="size-4 opacity-50" />
      </>
    ))}
  </AriaButton>
)

const SelectPopover = ({
  className,
  ...props
}) => (
  <Popover
    className={composeRenderProps(className, (className) =>
      cn("w-[--trigger-width]", className))}
    {...props} />
)

const SelectListBox = (
  {
    className,
    ...props
  }
) => (<AriaListBox
  className={composeRenderProps(className, (className) =>
    cn(
      "max-h-[inherit] overflow-auto p-1 outline-none [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]",
      className
    ))}
  {...props} />)

function JollySelect(
  {
    label,
    description,
    errorMessage,
    children,
    className,
    items,
    ...props
  }
) {
  return (
    <Select
      className={composeRenderProps(className, (className) =>
        cn("group flex flex-col gap-2", className))}
      {...props}>
      <Label>{label}</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      {description && (
        <Text className="text-sm text-muted-foreground" slot="description">
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
      <SelectPopover>
        <SelectListBox items={items}>{children}</SelectListBox>
      </SelectPopover>
    </Select>
  );
}

export {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectPopover,
  SelectHeader,
  SelectListBox,
  SelectSection,
  SelectCollection,
  JollySelect,
}
