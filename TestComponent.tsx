import * as React from "react";
import { sp } from "@pnp/sp/presets/all";

function TestComponent() {
  const getDataFromList = async () => {
    let res = await sp.web.lists.getByTitle("Testing1").items.get();
    console.log("ResponseData", res);
  };

  const insertDataIntoList = async () => {
    let res = await sp.web.lists.getByTitle("Testing1").items.add({
      Title: "Ms.",
      name: "pallavi",
    });
    console.log("ResponseData", res);
  };

  React.useEffect(() => {
    void getDataFromList();
    void insertDataIntoList();
  }, []);

  return <div>TestComponent</div>;
}

export default TestComponent;