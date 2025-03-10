// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListFHIRDatastoresCommand,
  ListFHIRDatastoresCommandInput,
  ListFHIRDatastoresCommandOutput,
} from "../commands/ListFHIRDatastoresCommand";
import { HealthLakeClient } from "../HealthLakeClient";
import { HealthLakePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: HealthLakeClient,
  input: ListFHIRDatastoresCommandInput,
  ...args: any
): Promise<ListFHIRDatastoresCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFHIRDatastoresCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListFHIRDatastores(
  config: HealthLakePaginationConfiguration,
  input: ListFHIRDatastoresCommandInput,
  ...additionalArguments: any
): Paginator<ListFHIRDatastoresCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFHIRDatastoresCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof HealthLakeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected HealthLake | HealthLakeClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
