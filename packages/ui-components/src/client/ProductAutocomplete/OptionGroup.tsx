import { GroupHeader } from "src/client/ProductAutocomplete/GroupHeader";
import { GroupItem } from "src/client/ProductAutocomplete/GroupItem";
import { GroupFooter } from "src/client/ProductAutocomplete/GroupFooter";
import React from "react";
import { ProductAutocompleteOption } from "src/client/ProductAutocomplete/index";

export const OptionGroup = ({
  renderProps,
  currentOption,
  options,
  searchResultUrl,
  inputValue,
}: {
  renderProps: React.HTMLAttributes<HTMLLIElement>;
  currentOption: ProductAutocompleteOption;
  options: readonly ProductAutocompleteOption[];
  searchResultUrl: string;
  inputValue: string;
}) => {
  const index = options.findIndex((option) => option.productModelId === currentOption.productModelId);

  if (index === 0 && options.length === 1) {
    return (
      <>
        <GroupHeader>Products</GroupHeader>
        <GroupItem renderOptionProps={renderProps} option={currentOption} />
        <GroupFooter searchResultUrl={searchResultUrl} inputValue={inputValue} />
      </>
    );
  }

  if (index === 0) {
    return (
      <>
        <GroupHeader>Products</GroupHeader>
        <GroupItem renderOptionProps={renderProps} option={currentOption} />
      </>
    );
  }

  if (index === options.length - 1) {
    return (
      <>
        <GroupItem renderOptionProps={renderProps} option={currentOption} />
        <GroupFooter searchResultUrl={searchResultUrl} inputValue={inputValue} />
      </>
    );
  }

  return <GroupItem renderOptionProps={renderProps} option={currentOption} />;
};
