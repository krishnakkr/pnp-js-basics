import * as React from "react";
import { sp } from "@pnp/sp/presets/all";
// import { SPHttpClient } from "@microsoft/sp-http";

function TestComponent() {
  const getDataFromList = async () => {
    let res = await sp.web.lists.getByTitle("Testing1").items.get();
    console.log("ResponseData of Get Element", res);
  };

  const insertDataIntoList = async () => {
    let res = await sp.web.lists.getByTitle("Testing1").items.add({
      Title: "Mr.",
      name: "Babu",
    });
    console.log("ResponseData of Push Element", res);
  };

  const list = sp.web.lists.getByTitle("Testing1");
  const updateDataList = async () => {
    let res = await list.items.getById(3).update({
      Title: "New Title2",
      name: "New Name2",
    });
    console.log("ResponseData of Update Element", res);
  };

  const deleteDataList = async () => {
    let res = await list.items.getById(3).delete();
    console.log("ResponseData of Delete Element", res);
  };
  React.useEffect(() => {
    void insertDataIntoList();
    void getDataFromList();
    void updateDataList();
    void deleteDataList();
  }, []);

  return <div>TestComponent</div>;
}

export default TestComponent;
