import React from "react";
import { ErrorPage } from "@sberdevices/plasma-temple";
import { PageProps } from "../../types";
import { Button } from "@sberdevices/plasma-ui";
import * as con from '../../constants'

const Error: React.FC<PageProps<"error">> = ({ state={status: con.ERROR_TITLE, message:con.ERROR_MESSAGE}, header, popScreen }) => {
  return (
    <ErrorPage
      header={header}
      error={state}
      buttons={(ref) => <Button text="Go back" onClick={popScreen} ref={ref} />}
    />
  );
};

export default Error;