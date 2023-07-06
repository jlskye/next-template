import { GroupHeader } from "src/client/ProductAutocomplete/GroupHeader";
import { GroupItem } from "src/client/ProductAutocomplete/GroupItem";
import { GroupFooter } from "src/client/ProductAutocomplete/GroupFooter";
import * as React from "react";
import { AutocompleteOption } from "src/client/ProductAutocomplete/index";

export const OptionGroup = ({
  renderProps,
  currentOption,
  options,
  searchResultUrl,
  inputValue,
}: {
  renderProps: React.HTMLAttributes<HTMLLIElement>;
  currentOption: AutocompleteOption;
  options: readonly AutocompleteOption[];
  searchResultUrl: string;
  inputValue: string;
}) => {
  const index = options.findIndex((x) => x.productModelId === currentOption.productModelId);

  if (index === 0 && options.length === 1) {
    return (
      <>
        <GroupHeader key={"header"}>Products</GroupHeader>
        <GroupItem key={currentOption.productModelId} renderOptionProps={renderProps} option={currentOption} />
        <GroupFooter key={"footer"} searchResultUrl={searchResultUrl} inputValue={inputValue} />
      </>
    );
  }

  if (index === 0) {
    return (
      <>
        <GroupHeader key={"header"}>Products</GroupHeader>
        <GroupItem key={currentOption.productModelId} renderOptionProps={renderProps} option={currentOption} />
      </>
    );
  }

  if (index === options.length - 1) {
    return (
      <>
        <GroupItem key={currentOption.productModelId} renderOptionProps={renderProps} option={currentOption} />
        <GroupFooter key={"footer"} searchResultUrl={searchResultUrl} inputValue={inputValue} />
      </>
    );
  }

  return <GroupItem key={currentOption.productModelId} renderOptionProps={renderProps} option={currentOption} />;
};
