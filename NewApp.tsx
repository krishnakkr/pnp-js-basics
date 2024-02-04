import * as React from "react";
// import type { IPracticeProps } from "./IPracticeProps";
import { sp } from "@pnp/sp/presets/all";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import TestComponent from "./TestComponent";
// import NewApp from './../../../../lib/webparts/newApp/components/NewApp';
import { INewAppProps } from "./INewAppProps";

export default class NewApp extends React.Component<INewAppProps, {}> {
  componentDidMount(): void {
    sp.setup({
      sp: {
        baseUrl: "https://cubicdirect.sharepoint.com/sites/Krishna", // Replace with your SharePoint site URL
      },
    });
  }
  public render(): React.ReactElement<INewAppProps> {
    const {
      // description,
      // isDarkTheme,
      // environmentMessage,
      // hasTeamsContext,
      // userDisplayName,
    } = this.props;

    return (
      <section>
        <TestComponent />
      </section>
    );
  }
}